import React, { createContext, useContext, useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://jbfqniokcluggcolwgut.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiZnFuaW9rY2x1Z2djb2x3Z3V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU4MjU3NTksImV4cCI6MjEwMTQwMTc1OX0.-fuSUoMKvVGdXJw3FWSOKykQuJE5c1bP0WP_UPqXvZA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const MOCK_PROFILES = [
  {
    id: 'user-newbie-1',
    discord_id: '882736192837192',
    discord_name: 'NamKudo#2252',
    avatar_url: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&auto=format&fit=crop&q=80',
    ingame_name: 'KudoShinichiVN',
    guild_role: 'Newbie Member',
    is_officer: false,
    registered_tree_id: 'holy',
    total_fame: 45200000,
    proof_stat_url: 'https://placehold.co/800x600/131b2e/e5b842?text=Stat+Fame+45.2M',
    proof_destiny_url: 'https://placehold.co/800x600/131b2e/e5b842?text=Holy+Tree+Baseline',
    proof_armor_url: 'https://placehold.co/800x600/131b2e/e5b842?text=Armor+Specs+Baseline',
    weapon_specs: {
      holy_1h: 100,
      holy_great: 100,
      holy_divine: 100,
      holy_lifetouch: 100,
      holy_fallen: 100,
      holy_redemption: 100,
      holy_hallowfall: 75,
      holy_exalted: 50
    },
    shoes_helm_spec: 520,
    armor_spec: 510,
    submitted_at: '2026-10-02T10:00:00Z',
    status: 'approved',
    claimed_special_prizes: ['50_points_branch_first']
  },
  {
    id: 'user-tank-2',
    discord_id: '918273645123456',
    discord_name: 'DragonSlayer#1102',
    avatar_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    ingame_name: 'IronVanguard_TNC',
    guild_role: 'Newbie Member',
    is_officer: false,
    registered_tree_id: 'mace',
    total_fame: 78500000,
    weapon_specs: {
      mace_1h: 100,
      mace_heavy: 100,
      mace_morning_star: 100,
      mace_bedrock: 100,
      mace_incubus: 100,
      mace_camlann: 100,
      mace_oathkeepers: 100,
      mace_battle_axe: 100
    },
    shoes_helm_spec: 550,
    armor_spec: 540,
    submitted_at: '2026-10-02T11:30:00Z',
    status: 'approved',
    claimed_special_prizes: ['80_points_first', '100_points_first', '50_points_branch_first']
  },
  {
    id: 'user-officer-1',
    discord_id: '712258265769050164',
    discord_name: 'TNC_Master#0001',
    avatar_url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80',
    ingame_name: 'TNCLord_Commander',
    guild_role: 'Guild Master / Officer BQT',
    is_officer: true,
    registered_tree_id: 'axe',
    total_fame: 350000000,
    weapon_specs: {},
    shoes_helm_spec: 0,
    armor_spec: 0,
    status: 'approved',
    claimed_special_prizes: []
  }
];

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('tnc_active_user');
    return saved ? JSON.parse(saved) : MOCK_PROFILES[0];
  });

  const [allMembers, setAllMembers] = useState(() => {
    const saved = localStorage.getItem('tnc_all_members');
    return saved ? JSON.parse(saved) : MOCK_PROFILES;
  });

  useEffect(() => {
    localStorage.setItem('tnc_active_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('tnc_all_members', JSON.stringify(allMembers));
  }, [allMembers]);

  // Đăng nhập Discord thật qua Supabase
  const signInWithDiscord = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: {
          redirectTo: window.location.origin
        }
      });
      if (error) throw error;
      return data;
    } catch (err) {
      console.warn('Discord OAuth direct fallback to Demo user:', err);
      switchUser(MOCK_PROFILES[0].id);
    }
  };

  // Chuyển đổi Profile nhanh (Demo Mode / Test)
  const switchUser = (userId) => {
    const found = allMembers.find(m => m.id === userId) || MOCK_PROFILES.find(m => m.id === userId);
    if (found) {
      setUser(found);
    }
  };

  // Đăng ký mới sự kiện cho Newbie
  const registerNewMember = (registrationData) => {
    const newMember = {
      id: `user-${Date.now()}`,
      discord_id: user?.discord_id || `dc-${Math.floor(Math.random()*1000000)}`,
      discord_name: user?.discord_name || registrationData.ingame_name,
      avatar_url: user?.avatar_url || `https://api.dicebear.com/7.x/bottts/svg?seed=${registrationData.ingame_name}`,
      ingame_name: registrationData.ingame_name,
      guild_role: 'Newbie Member',
      is_officer: false,
      registered_tree_id: registrationData.registered_tree_id,
      total_fame: Number(registrationData.total_fame) || 0,
      proof_stat_url: registrationData.proof_stat_url || '',
      proof_destiny_url: registrationData.proof_destiny_url || '',
      proof_armor_url: registrationData.proof_armor_url || '',
      weapon_specs: {},
      shoes_helm_spec: 0,
      armor_spec: 0,
      submitted_at: new Date().toISOString(),
      status: 'pending', // BQT duyệt
      claimed_special_prizes: []
    };

    setAllMembers(prev => {
      const updated = [newMember, ...prev.filter(m => m.id !== newMember.id)];
      return updated;
    });

    setUser(newMember);
    return newMember;
  };

  // Cập nhật Spec người dùng hiện tại
  const updateCurrentUserSpecs = (newSpecs, shoesHelm, armor) => {
    if (!user) return;
    const updatedUser = {
      ...user,
      weapon_specs: newSpecs,
      shoes_helm_spec: Number(shoesHelm) || 0,
      armor_spec: Number(armor) || 0,
      last_updated: new Date().toISOString()
    };

    setUser(updatedUser);
    setAllMembers(prev => prev.map(m => m.id === user.id ? updatedUser : m));
  };

  // Officer duyệt đăng ký / cập nhật trạng thái
  const setMemberStatus = (memberId, status) => {
    setAllMembers(prev => prev.map(m => {
      if (m.id === memberId) {
        return { ...m, status };
      }
      return m;
    }));

    if (user?.id === memberId) {
      setUser(prev => ({ ...prev, status }));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      allMembers,
      mockProfiles: MOCK_PROFILES,
      signInWithDiscord,
      switchUser,
      registerNewMember,
      updateCurrentUserSpecs,
      setMemberStatus
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
