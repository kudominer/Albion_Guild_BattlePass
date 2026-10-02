import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Shield, Sparkles, Trophy, UserCheck, BookOpen, Clock, LogIn, ChevronDown, CheckCircle, Monitor, Film } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, viewMode, setViewMode, onOpenRegister, onOpenRules }) {
  const { user, mockProfiles, switchUser, signInWithDiscord } = useAuth();
  const [profileDropdown, setProfileDropdown] = useState(false);

  // Countdown timer cho Event 10 ngày (01/10 - 11/10/2026)
  const [timeLeft, setTimeLeft] = useState({ days: 8, hours: 14, minutes: 25, seconds: 40 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#080c16]/95 backdrop-blur-md border-b border-albion-border/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Guild Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('tracker')}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-red-700 p-0.5 shadow-gold-glow flex items-center justify-center">
              <div className="w-full h-full bg-[#0d1322] rounded-[10px] flex items-center justify-center">
                <Shield className="w-7 h-7 text-albion-gold" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-game text-xl font-bold tracking-wider gold-text-gradient">GUILD TNC</span>
                <span className="text-[10px] px-2 py-0.5 bg-red-950/80 text-rose-300 border border-rose-600/40 rounded-full font-semibold uppercase tracking-wider">
                  Fame Rush +25%
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Albion Battle Pass · 600M+ Silver</p>
            </div>
          </div>

          {/* Navigation Links & View Mode Switcher */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* View Mode Toggle Switcher (Phương án 2 vs Phương án 3) */}
            <div className="flex items-center bg-[#120c08] p-1 rounded-xl border border-amber-500/50 shadow-inner">
              <button
                onClick={() => setViewMode('showcase')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-game font-bold transition-all ${
                  viewMode === 'showcase'
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-gold-glow'
                    : 'text-amber-200/70 hover:text-white'
                }`}
                title="Chế độ Sổ Tay Hoàng Kim + Chi tiết bên dưới"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Sổ Tay Hoàng Kim</span>
              </button>

              <button
                onClick={() => setViewMode('cinematic')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-game font-bold transition-all ${
                  viewMode === 'cinematic'
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-gold-glow'
                    : 'text-amber-200/70 hover:text-white'
                }`}
                title="Chế độ Toàn Cảnh Cinematic Game HUD"
              >
                <Film className="w-3.5 h-3.5" />
                <span>Toàn Cảnh Cinematic</span>
              </button>
            </div>

            {/* Standard Nav Links for Showcase Mode */}
            {viewMode === 'showcase' && (
              <nav className="flex items-center gap-1 bg-[#121829]/80 p-1.5 rounded-xl border border-albion-border/60">
                <button
                  onClick={() => setActiveTab('tracker')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'tracker'
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Spec & Thưởng
                </button>

                <button
                  onClick={() => setActiveTab('leaderboard')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'leaderboard'
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Trophy className="w-3.5 h-3.5" />
                  Xếp Hạng
                </button>

                <button
                  onClick={() => setActiveTab('officer')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'officer'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  BQT
                </button>

                <button
                  onClick={onOpenRules}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-amber-300 hover:bg-slate-800/60 transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Thể Lệ
                </button>
              </nav>
            )}

          </div>

          {/* Countdown & Profile / Auth */}
          <div className="flex items-center gap-3">
            
            {/* User Account / Role Switcher */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdown(!profileDropdown)}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#141c30] border border-albion-border/80 hover:border-albion-gold/60 transition-all"
                >
                  <img
                    src={user.avatar_url}
                    alt={user.ingame_name}
                    className="w-8 h-8 rounded-lg object-cover border border-amber-400/50"
                  />
                  <div className="text-left hidden sm:block">
                    <div className="text-xs font-bold text-slate-100 flex items-center gap-1">
                      {user.ingame_name || user.discord_name}
                      {user.status === 'approved' && (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 inline" />
                      )}
                    </div>
                    <div className="text-[10px] text-amber-400/90 font-medium">{user.guild_role}</div>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {/* Profile Switcher Dropdown */}
                {profileDropdown && (
                  <div className="absolute right-0 mt-2 w-64 rounded-xl bg-[#0f1629] border border-albion-border shadow-2xl p-2 z-50">
                    <div className="px-3 py-2 border-b border-slate-800">
                      <p className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Tài khoản hiện tại</p>
                      <p className="text-sm font-bold text-albion-gold">{user.ingame_name}</p>
                      <p className="text-xs text-slate-400 font-mono">{user.discord_name}</p>
                    </div>

                    <div className="my-2">
                      <p className="px-3 py-1 text-[10px] font-semibold text-slate-400 uppercase">Chuyển tài khoản (Demo):</p>
                      {mockProfiles.map(p => (
                        <button
                          key={p.id}
                          onClick={() => {
                            switchUser(p.id);
                            setProfileDropdown(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-all ${
                            user.id === p.id ? 'bg-amber-500/20 text-albion-gold font-bold' : 'hover:bg-slate-800 text-slate-300'
                          }`}
                        >
                          <div>
                            <div>{p.ingame_name}</div>
                            <div className="text-[10px] text-slate-400">{p.guild_role}</div>
                          </div>
                          {p.is_officer && (
                            <span className="text-[9px] px-1.5 py-0.5 bg-purple-900/60 text-purple-300 border border-purple-500/30 rounded font-semibold">
                              BQT
                            </span>
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-slate-800 flex flex-col gap-1">
                      <button
                        onClick={() => {
                          setProfileDropdown(false);
                          onOpenRegister();
                        }}
                        className="w-full text-center py-1.5 rounded-lg text-xs bg-amber-500/20 text-amber-300 font-semibold hover:bg-amber-500/30 border border-amber-500/40"
                      >
                        + Đăng ký Newbie mới
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={signInWithDiscord}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold text-xs transition-all shadow-md"
                >
                  <LogIn className="w-4 h-4" />
                  Đăng nhập Discord
                </button>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* Mobile View Mode Switcher */}
      <div className="md:hidden flex items-center justify-around bg-[#0d1322] border-t border-slate-800 py-2 px-2 text-xs">
        <button
          onClick={() => setViewMode('showcase')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold ${
            viewMode === 'showcase' ? 'bg-amber-500 text-slate-950' : 'text-slate-400'
          }`}
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Sổ Tay Hoàng Kim</span>
        </button>
        <button
          onClick={() => setViewMode('cinematic')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold ${
            viewMode === 'cinematic' ? 'bg-amber-500 text-slate-950' : 'text-slate-400'
          }`}
        >
          <Film className="w-3.5 h-3.5" />
          <span>Cinematic HUD</span>
        </button>
      </div>
    </header>
  );
}
