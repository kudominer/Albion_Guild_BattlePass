import React, { useState, useEffect } from 'react';
import { WEAPON_TREES, WEAPON_CATEGORIES, calculateBattlePassScore, calculateRewardSilver, formatSilver } from '../data/weapons';
import { useAuth } from '../context/AuthContext';
import { Sword, Shield, Sparkles, CheckCircle2, ChevronRight, Save, Info, RefreshCw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SpecCalculator({ userTreeId, onSaveSpecs }) {
  const { user, updateCurrentUserSpecs } = useAuth();

  // Selected Weapon Tree
  const [selectedTreeId, setSelectedTreeId] = useState(userTreeId || user?.registered_tree_id || 'holy');

  // Specs state
  const [weaponSpecs, setWeaponSpecs] = useState({});
  const [shoesHelmSpec, setShoesHelmSpec] = useState(0);
  const [armorSpec, setArmorSpec] = useState(0);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync with user data
  useEffect(() => {
    if (user) {
      if (user.registered_tree_id) {
        setSelectedTreeId(user.registered_tree_id);
      }
      if (user.weapon_specs) {
        setWeaponSpecs(user.weapon_specs);
      }
      setShoesHelmSpec(user.shoes_helm_spec || 0);
      setArmorSpec(user.armor_spec || 0);
    }
  }, [user]);

  const currentTree = WEAPON_TREES.find(t => t.id === selectedTreeId) || WEAPON_TREES[0];
  const currentCategory = WEAPON_CATEGORIES[currentTree.categoryId?.toUpperCase()] || WEAPON_CATEGORIES.DPS_OTHER;
  const multiplier = currentTree.multiplier || 1.0;

  // Tính toán kết quả theo thời gian thực
  const result = calculateBattlePassScore({
    weaponSpecs,
    armorSpec,
    shoesHelmSpec
  });

  const estimatedSilver = calculateRewardSilver(result.totalPoints, multiplier);
  const maxSilver = calculateRewardSilver(100, multiplier);

  // Cập nhật spec 1 cây
  const handleSpecChange = (weaponId, value) => {
    const val = Math.max(0, Math.min(120, Number(value) || 0));
    setWeaponSpecs(prev => ({
      ...prev,
      [weaponId]: val
    }));
  };

  // Set nhanh 100 spec cho 1 cây
  const setQuickSpec = (weaponId, value) => {
    setWeaponSpecs(prev => ({
      ...prev,
      [weaponId]: value
    }));
  };

  // Max tất cả 8 cây 100 spec
  const setAllWeapons100 = () => {
    const newSpecs = {};
    currentTree.weapons.forEach(w => {
      newSpecs[w.id] = 100;
    });
    setWeaponSpecs(newSpecs);
  };

  // Reset nhánh
  const resetAll = () => {
    setWeaponSpecs({});
    setShoesHelmSpec(0);
    setArmorSpec(0);
  };

  // Lưu tiến trình vào tài khoản & Leaderboard
  const handleSave = () => {
    updateCurrentUserSpecs(weaponSpecs, shoesHelmSpec, armorSpec);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);

    if (result.totalPoints >= 50) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Left 8 Cols: Interactive Spec Board */}
      <div className="lg:col-span-8 space-y-6">
        
        {/* Weapon Tree Selector Header */}
        <div className="albion-card rounded-2xl p-6 border border-albion-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Nhánh Vũ Khí Đăng Ký
              </span>
              <h3 className="text-xl font-game font-bold text-white flex items-center gap-2">
                <span>{currentTree.icon}</span>
                <span>{currentTree.name}</span>
              </h3>
            </div>

            {/* Multiplier Badge */}
            <div className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 ${
              multiplier === 1.2
                ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300'
                : multiplier === 1.1
                ? 'bg-sky-950/70 border-sky-500/50 text-sky-300'
                : 'bg-amber-950/70 border-amber-500/50 text-amber-300'
            }`}>
              <Sparkles className="w-4 h-4" />
              <span>{currentCategory.badgeText}</span>
            </div>
          </div>

          {/* Tree selector buttons */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
            {WEAPON_TREES.map(tree => {
              const isActive = tree.id === selectedTreeId;
              return (
                <button
                  key={tree.id}
                  onClick={() => setSelectedTreeId(tree.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                      : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60'
                  }`}
                >
                  <span>{tree.icon}</span>
                  <span>{tree.name.split('(')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 8 Weapons Spec Inputs */}
        <div className="albion-card rounded-2xl p-6 border border-albion-border">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Sword className="w-4 h-4 text-amber-400" />
                8 Cây Vũ Khí Thuộc Nhánh (Tối đa 48 điểm lẻ + 32 điểm nhánh)
              </h4>
              <p className="text-xs text-slate-400">Đạt 100 spec mỗi cây = +6 điểm · Tổng 500 spec = +16đ · Tổng 800 spec = +16đ</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={setAllWeapons100}
                className="px-2.5 py-1 text-xs bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-lg hover:bg-amber-500/30 font-semibold"
              >
                ⚡ Full 100 Spec
              </button>
              <button
                onClick={resetAll}
                className="px-2 py-1 text-xs bg-slate-800 text-slate-400 rounded-lg hover:bg-slate-700"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Weapons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentTree.weapons.map((w, index) => {
              const specVal = weaponSpecs[w.id] || 0;
              const is100 = specVal >= 100;
              return (
                <div
                  key={w.id}
                  className={`p-3.5 rounded-xl border transition-all ${
                    is100
                      ? 'bg-amber-950/20 border-amber-500/60 shadow-inner'
                      : 'bg-[#101626]/80 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-slate-200 truncate" title={w.name}>
                      {index + 1}. {w.name}
                    </span>
                    {is100 ? (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500 text-slate-950">
                        +6 Điểm ✓
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-500 font-mono">0 điểm</span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={specVal}
                      onChange={(e) => handleSpecChange(w.id, e.target.value)}
                      className="w-full accent-amber-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                    />

                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        min="0"
                        max="120"
                        value={specVal}
                        onChange={(e) => handleSpecChange(w.id, e.target.value)}
                        className="w-14 px-2 py-1 bg-[#0b0f19] border border-slate-700 rounded text-center text-xs font-mono font-bold text-amber-300 focus:outline-none focus:border-amber-400"
                      />
                      <button
                        onClick={() => setQuickSpec(w.id, is100 ? 0 : 100)}
                        className={`text-[10px] px-1.5 py-1 rounded font-bold transition-all ${
                          is100 ? 'bg-slate-800 text-slate-400' : 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                        }`}
                        title="Chuyển nhanh 100 spec"
                      >
                        {is100 ? '0' : '100'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Armor & Shoes/Helm Spec Inputs */}
        <div className="albion-card rounded-2xl p-6 border border-albion-border">
          <div className="mb-4 pb-3 border-b border-slate-800">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              Trang Bị Đi Kèm (Tối đa 20 điểm)
            </h4>
            <p className="text-xs text-slate-400">Có thể cộng dồn các nhánh trang bị Mũ, Áo, Giày (Đạt mốc 500 spec = +10đ mỗi nhóm)</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Shoes & Helm */}
            <div className={`p-4 rounded-xl border ${
              Number(shoesHelmSpec) >= 500 ? 'bg-emerald-950/20 border-emerald-500/60' : 'bg-[#101626]/80 border-slate-800'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-200">500 Spec Dòng Giày & Mũ</span>
                {Number(shoesHelmSpec) >= 500 ? (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500 text-slate-950">
                    +10 Điểm ✓
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-400">Cần {500 - Number(shoesHelmSpec)} nữa</span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="800"
                  value={shoesHelmSpec}
                  onChange={(e) => setShoesHelmSpec(e.target.value)}
                  className="w-full accent-emerald-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
                <input
                  type="number"
                  min="0"
                  max="1600"
                  value={shoesHelmSpec}
                  onChange={(e) => setShoesHelmSpec(e.target.value)}
                  className="w-20 px-2 py-1 bg-[#0b0f19] border border-slate-700 rounded text-center text-xs font-mono font-bold text-emerald-300 focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            {/* Armor */}
            <div className={`p-4 rounded-xl border ${
              Number(armorSpec) >= 500 ? 'bg-emerald-950/20 border-emerald-500/60' : 'bg-[#101626]/80 border-slate-800'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-200">500 Spec Dòng Áo (Armor)</span>
                {Number(armorSpec) >= 500 ? (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500 text-slate-950">
                    +10 Điểm ✓
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-400">Cần {500 - Number(armorSpec)} nữa</span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="800"
                  value={armorSpec}
                  onChange={(e) => setArmorSpec(e.target.value)}
                  className="w-full accent-emerald-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
                <input
                  type="number"
                  min="0"
                  max="1600"
                  value={armorSpec}
                  onChange={(e) => setArmorSpec(e.target.value)}
                  className="w-20 px-2 py-1 bg-[#0b0f19] border border-slate-700 rounded text-center text-xs font-mono font-bold text-emerald-300 focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Right 4 Cols: Live Score & Reward Breakdown Inspector */}
      <div className="lg:col-span-4 space-y-6">
        
        {/* Total Score Summary Box */}
        <div className="albion-card rounded-2xl p-6 border border-albion-gold/60 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Tổng Kết Điểm Thưởng</span>
          
          <div className="my-4 flex items-baseline justify-between">
            <div>
              <span className="text-5xl font-black font-mono gold-text-gradient">
                {result.totalPoints}
              </span>
              <span className="text-slate-400 font-bold text-lg"> / 100 ĐIỂM</span>
            </div>
            <div className="text-right">
              <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40">
                {result.totalPoints}% Hạn Mức
              </span>
            </div>
          </div>

          {/* Reward Value */}
          <div className="bg-[#0b101c] p-4 rounded-xl border border-slate-800 my-4">
            <div className="text-[11px] text-slate-400 font-semibold uppercase">Silver Thực Nhận</div>
            <div className="text-2xl font-black text-amber-400 font-mono mt-0.5">
              {formatSilver(estimatedSilver)}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 flex items-center justify-between">
              <span>Hệ số nhánh ({currentTree.name.split('(')[0]}):</span>
              <span className="font-bold text-white font-mono">x{multiplier}</span>
            </div>
          </div>

          {/* Breakdown Items List */}
          <div className="space-y-2 text-xs border-t border-slate-800 pt-4">
            
            {/* 1. Vũ khí lẻ */}
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${result.breakdown.weapon100Count > 0 ? 'text-amber-400' : 'text-slate-600'}`} />
                Vũ khí lẻ ({result.breakdown.weapon100Count}/8 cây 100 spec):
              </span>
              <span className="font-mono font-bold text-white">+{result.breakdown.weaponPoints}đ</span>
            </div>

            {/* 2. Mốc 500 spec nhánh */}
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${result.breakdown.has500Branch ? 'text-amber-400' : 'text-slate-600'}`} />
                Tổng nhánh ≥ 500 spec ({result.breakdown.totalWeaponSpec}/500):
              </span>
              <span className="font-mono font-bold text-white">
                {result.breakdown.has500Branch ? '+16đ' : '0đ'}
              </span>
            </div>

            {/* 3. Mốc 800 spec nhánh */}
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${result.breakdown.has800Branch ? 'text-amber-400' : 'text-slate-600'}`} />
                Tổng nhánh ≥ 800 spec ({result.breakdown.totalWeaponSpec}/800):
              </span>
              <span className="font-mono font-bold text-white">
                {result.breakdown.has800Branch ? '+16đ' : '0đ'}
              </span>
            </div>

            {/* 4. Giày & Mũ 500 spec */}
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${result.breakdown.has500ShoesHelm ? 'text-emerald-400' : 'text-slate-600'}`} />
                Giày & Mũ ≥ 500 spec ({result.breakdown.shoesHelmSpec}/500):
              </span>
              <span className="font-mono font-bold text-white">
                {result.breakdown.has500ShoesHelm ? '+10đ' : '0đ'}
              </span>
            </div>

            {/* 5. Áo 500 spec */}
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${result.breakdown.has500Armor ? 'text-emerald-400' : 'text-slate-600'}`} />
                Áo (Armor) ≥ 500 spec ({result.breakdown.armorSpec}/500):
              </span>
              <span className="font-mono font-bold text-white">
                {result.breakdown.has500Armor ? '+10đ' : '0đ'}
              </span>
            </div>

          </div>

          {/* Action Button: Save & Update Leaderboard */}
          <div className="mt-6 pt-4 border-t border-slate-800">
            <button
              onClick={handleSave}
              className="w-full albion-btn-gold py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <Save className="w-4 h-4" />
              Lưu & Cập Nhật Tiến Trình Lên BXH
            </button>

            {savedSuccess && (
              <div className="mt-2 text-center text-xs text-emerald-400 font-bold flex items-center justify-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                Đã lưu tiến trình thành công!
              </div>
            )}
          </div>
        </div>

        {/* Special Prize Tracking Eligibility Box */}
        <div className="albion-card rounded-2xl p-5 border border-slate-800 space-y-3">
          <div className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-400" />
            ĐIỀU KIỆN NHẬN GIẢI PHỤ
          </div>

          <div className={`p-3 rounded-lg text-xs flex items-center justify-between ${
            result.totalPoints >= 50 ? 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-300' : 'bg-slate-900/60 text-slate-400'
          }`}>
            <span>🌟 Đạt 50đ nhánh (Giải 5M)</span>
            <span className="font-bold">{result.totalPoints >= 50 ? 'Đủ điều kiện ✓' : `${result.totalPoints}/50đ`}</span>
          </div>

          <div className={`p-3 rounded-lg text-xs flex items-center justify-between ${
            result.totalPoints >= 80 ? 'bg-purple-950/40 border border-purple-500/40 text-purple-300' : 'bg-slate-900/60 text-slate-400'
          }`}>
            <span>⚡ Đạt 80đ (Shadowcaller 5.4)</span>
            <span className="font-bold">{result.totalPoints >= 80 ? 'Đủ điều kiện ✓' : `${result.totalPoints}/80đ`}</span>
          </div>

          <div className={`p-3 rounded-lg text-xs flex items-center justify-between ${
            result.totalPoints >= 100 ? 'bg-amber-950/40 border border-amber-500/40 text-amber-300' : 'bg-slate-900/60 text-slate-400'
          }`}>
            <span>👑 Đạt 100đ (Vũ khí 8.3)</span>
            <span className="font-bold">{result.totalPoints >= 100 ? 'Đủ điều kiện ✓' : `${result.totalPoints}/100đ`}</span>
          </div>
        </div>

      </div>

    </div>
  );
}
