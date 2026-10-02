import React from 'react';
import { useAuth } from '../context/AuthContext';
import { WEAPON_TREES, calculateBattlePassScore, calculateRewardSilver, formatSilver } from '../data/weapons';
import { Sparkles, Shield, Compass, ChevronRight, CheckCircle2, Lock, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OrnateBattlePassBoard({ onOpenSpecDetail, onOpenRegister, onUpgradeClick }) {
  const { user } = useAuth();

  const userTree = WEAPON_TREES.find(t => t.id === user?.registered_tree_id) || WEAPON_TREES[0];
  const scoreResult = calculateBattlePassScore({
    weaponSpecs: user?.weapon_specs || {},
    shoesHelmSpec: user?.shoes_helm_spec || 0,
    armorSpec: user?.armor_spec || 0
  });

  const currentScore = scoreResult.totalPoints;
  const currentSilver = calculateRewardSilver(currentScore, userTree.multiplier || 1.0);
  const maxSilver = calculateRewardSilver(100, userTree.multiplier || 1.0);

  const handleUpgrade = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#e5b842', '#fde047', '#e11d48', '#8b5cf6', '#10b981']
    });
    if (onUpgradeClick) onUpgradeClick();
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto my-6 px-2 sm:px-4 select-none">
      
      {/* Top Floating Crest & Season Banner */}
      <div className="flex items-center justify-between px-6 mb-2">
        {/* Left: Albion Online Brand Badge */}
        <div className="flex items-center gap-2 drop-shadow-lg">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-red-800 p-0.5 shadow-gold-glow flex items-center justify-center">
            <div className="w-full h-full bg-[#0d1322] rounded-[10px] flex items-center justify-center">
              <Shield className="w-5 h-5 text-albion-gold" />
            </div>
          </div>
          <div>
            <div className="font-game text-sm font-black tracking-widest text-amber-300">ALBION ONLINE</div>
            <div className="text-[10px] font-semibold text-slate-400 uppercase">TNC GUILD EVENT</div>
          </div>
        </div>

        {/* Right: Season 1 Time Badge */}
        <div className="px-4 py-1.5 rounded-full bg-black/70 border border-amber-500/40 text-xs flex items-center gap-2 shadow-lg backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span className="font-game font-bold text-amber-300">MÙA 1 - FAME RUSH +25%</span>
          <span className="text-slate-400 text-[11px]">| Còn lại: 8 ngày 14 giờ</span>
        </div>
      </div>

      {/* Main Ornate Carved Wooden Board */}
      <div className="ornate-wood-board rounded-3xl p-6 sm:p-8 md:p-10 border-4 border-[#936e2f] relative overflow-hidden">
        
        {/* Corner Rivet Ornaments */}
        <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-gradient-to-br from-amber-300 to-amber-900 border border-amber-400/80 shadow-md"></div>
        <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-gradient-to-br from-amber-300 to-amber-900 border border-amber-400/80 shadow-md"></div>
        <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-gradient-to-br from-amber-300 to-amber-900 border border-amber-400/80 shadow-md"></div>
        <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-gradient-to-br from-amber-300 to-amber-900 border border-amber-400/80 shadow-md"></div>

        {/* Top Header Arch / Crown */}
        <div className="text-center relative z-10 mb-8">
          <div className="inline-block relative">
            <div className="text-[11px] sm:text-xs font-game tracking-[0.25em] text-amber-300 font-extrabold uppercase mb-0.5 drop-shadow">
              ✦ BATTLE PASS ✦
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-game font-black tracking-wider gold-text-gradient uppercase">
              SỔ TAY TU LUYỆN
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-amber-100/80 font-medium tracking-wide mt-1 drop-shadow">
            Hoàn thành nhiệm vụ — Nâng cấp Giao Kèo — Nhận phần thưởng giá trị
          </p>
        </div>

        {/* 3 Main Progression Areas + Giant Treasure Chest Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-6">
          
          {/* Left 9 Columns: 3 Progression Pedestals */}
          <div className="md:col-span-8 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* AREA 1: HÀNH TRÌNH KHỞI ĐẦU - 48 ĐIỂM */}
            <div
              onClick={onOpenSpecDetail}
              className="group cursor-pointer rounded-2xl p-4 bg-black/40 border border-amber-500/30 hover:border-amber-400/80 transition-all hover:bg-black/60 relative flex flex-col justify-between"
            >
              <div className="text-center mb-3">
                <div className="text-[10px] font-game font-bold text-amber-400/90 uppercase tracking-wider">
                  KHU VỰC 1:
                </div>
                <div className="text-xs font-bold text-white uppercase font-game">
                  HÀNH TRÌNH KHỞI ĐẦU
                </div>
                <div className="text-[11px] font-extrabold text-amber-300">
                  48 ĐIỂM
                </div>
              </div>

              {/* Pedestal with Glowing Magical Weapons */}
              <div className="relative h-36 flex items-center justify-center my-2">
                <div className="absolute inset-0 pedestal-glow-green rounded-full opacity-80 group-hover:opacity-100 transition-all"></div>
                
                {/* 3 Floating Staves / Weapons */}
                <div className="relative z-10 flex items-end justify-center gap-2 animate-float">
                  <div className="text-2xl filter drop-shadow-[0_0_12px_rgba(34,197,94,0.9)] scale-95 opacity-85">
                    {userTree.icon}
                  </div>
                  <div className="text-4xl filter drop-shadow-[0_0_16px_rgba(234,179,8,1)] scale-110 -translate-y-2">
                    {userTree.icon}
                  </div>
                  <div className="text-2xl filter drop-shadow-[0_0_12px_rgba(34,197,94,0.9)] scale-95 opacity-85">
                    {userTree.icon}
                  </div>
                </div>
              </div>

              {/* Progress pill */}
              <div className="mt-2 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-[10px] font-mono font-bold text-emerald-300">
                  {scoreResult.breakdown.weaponPoints} / 48 Điểm ({scoreResult.breakdown.weapon100Count}/8 cây)
                </span>
              </div>
            </div>

            {/* AREA 2: CON ĐƯỜNG TINH HOA - 32 ĐIỂM */}
            <div
              onClick={onOpenSpecDetail}
              className="group cursor-pointer rounded-2xl p-4 bg-black/40 border border-amber-500/30 hover:border-amber-400/80 transition-all hover:bg-black/60 relative flex flex-col justify-between"
            >
              <div className="text-center mb-3">
                <div className="text-[10px] font-game font-bold text-amber-400/90 uppercase tracking-wider">
                  KHU VỰC 2:
                </div>
                <div className="text-xs font-bold text-white uppercase font-game">
                  CON ĐƯỜNG TINH HOA
                </div>
                <div className="text-[11px] font-extrabold text-amber-300">
                  32 ĐIỂM
                </div>
              </div>

              {/* 2 Golden Medals: 500 Spec & 800 Spec */}
              <div className="relative h-36 flex items-center justify-center gap-2 my-2">
                <div className="absolute inset-0 pedestal-glow-gold rounded-full opacity-70 group-hover:opacity-100 transition-all"></div>
                
                {/* 500 Spec Medal */}
                <div className={`relative z-10 w-16 h-16 rounded-full p-0.5 flex flex-col items-center justify-center transition-all ${
                  scoreResult.breakdown.has500Branch
                    ? 'bg-gradient-to-b from-yellow-200 via-amber-400 to-yellow-700 shadow-gold-glow animate-bounce'
                    : 'bg-gradient-to-b from-slate-600 to-slate-800 opacity-60'
                }`}>
                  <div className="w-full h-full bg-[#181109] rounded-full flex flex-col items-center justify-center text-center p-1 border border-amber-500/60">
                    <span className="text-xs font-black font-mono text-amber-300 leading-none">500</span>
                    <span className="text-[7px] font-bold text-amber-400/90 uppercase leading-none mt-0.5">SPEC</span>
                    <span className="text-[6px] text-slate-300 leading-none mt-0.5">+16đ</span>
                  </div>
                </div>

                {/* 800 Spec Medal */}
                <div className={`relative z-10 w-16 h-16 rounded-full p-0.5 flex flex-col items-center justify-center transition-all ${
                  scoreResult.breakdown.has800Branch
                    ? 'bg-gradient-to-b from-yellow-200 via-amber-400 to-yellow-700 shadow-gold-glow animate-bounce'
                    : 'bg-gradient-to-b from-slate-600 to-slate-800 opacity-60'
                }`}>
                  <div className="w-full h-full bg-[#181109] rounded-full flex flex-col items-center justify-center text-center p-1 border border-amber-500/60">
                    <span className="text-xs font-black font-mono text-amber-300 leading-none">800</span>
                    <span className="text-[7px] font-bold text-amber-400/90 uppercase leading-none mt-0.5">SPEC</span>
                    <span className="text-[6px] text-slate-300 leading-none mt-0.5">+16đ</span>
                  </div>
                </div>
              </div>

              {/* Progress pill */}
              <div className="mt-2 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/50 text-[10px] font-mono font-bold text-amber-300">
                  {scoreResult.breakdown.branchPoints} / 32 Điểm ({scoreResult.breakdown.totalWeaponSpec} Spec)
                </span>
              </div>
            </div>

            {/* AREA 3: TRANG BỊ VÔ SONG - 20 ĐIỂM */}
            <div
              onClick={onOpenSpecDetail}
              className="group cursor-pointer rounded-2xl p-4 bg-black/40 border border-amber-500/30 hover:border-amber-400/80 transition-all hover:bg-black/60 relative flex flex-col justify-between"
            >
              <div className="text-center mb-3">
                <div className="text-[10px] font-game font-bold text-amber-400/90 uppercase tracking-wider">
                  KHU VỰC 3:
                </div>
                <div className="text-xs font-bold text-white uppercase font-game">
                  TRANG BỊ VÔ SONG
                </div>
                <div className="text-[11px] font-extrabold text-amber-300">
                  20 ĐIỂM
                </div>
              </div>

              {/* Knight Armor & Helmet Pedestal with Blue Aura */}
              <div className="relative h-36 flex items-center justify-center my-2">
                <div className="absolute inset-0 pedestal-glow-blue rounded-full opacity-70 group-hover:opacity-100 transition-all"></div>
                
                <div className="relative z-10 flex items-center justify-center gap-1.5 animate-float-delayed">
                  <div className="text-4xl filter drop-shadow-[0_0_15px_rgba(59,130,246,0.9)]">
                    🛡️
                  </div>
                  <div className="text-3xl filter drop-shadow-[0_0_15px_rgba(59,130,246,0.9)]">
                    ⚔️
                  </div>
                  <div className="text-3xl filter drop-shadow-[0_0_15px_rgba(59,130,246,0.9)]">
                    🥾
                  </div>
                </div>
              </div>

              {/* Progress pill */}
              <div className="mt-2 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/50 text-[10px] font-mono font-bold text-blue-300">
                  {scoreResult.breakdown.gearPoints} / 20 Điểm (Giáp & Mũ/Giày)
                </span>
              </div>
            </div>

          </div>

          {/* Right 4 Columns: Giant Overflowing Silver Treasure Chest */}
          <div className="md:col-span-4 lg:col-span-4 p-5 rounded-2xl bg-gradient-to-b from-[#2a1b10]/80 via-[#1a110a]/90 to-[#0d0905]/95 border-2 border-amber-500/60 shadow-2xl relative overflow-hidden flex flex-col items-center text-center justify-between min-h-[300px]">
            
            {/* Ambient gold beam */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-1">
              <div className="text-[11px] font-game font-bold text-amber-300 uppercase tracking-widest">
                TỔNG GIẢI THƯỞNG:
              </div>
              <div className="text-2xl sm:text-3xl font-black font-game gold-text-gradient">
                ≈ 600M SILVER
              </div>
              <p className="text-[10px] text-amber-200/60">
                (Tổng giải cho toàn thể người tham gia)
              </p>
            </div>

            {/* Glowing Chest Graphic with Coins */}
            <div className="my-3 relative">
              <div className="text-6xl sm:text-7xl filter drop-shadow-[0_0_25px_rgba(234,179,8,0.7)] animate-pulse">
                🎁
              </div>
              <div className="absolute -bottom-2 -left-4 text-2xl animate-flicker">🪙</div>
              <div className="absolute -bottom-2 -right-4 text-2xl animate-flicker">🪙</div>
            </div>

            {/* Personal Estimated Silver Box */}
            <div className="w-full bg-[#0d0905]/90 p-3 rounded-xl border border-amber-500/40">
              <div className="text-[10px] font-semibold text-slate-400 uppercase">
                Phần Thưởng Cá Nhân Dự Kiến:
              </div>
              <div className="text-lg sm:text-xl font-mono font-black text-amber-400">
                {formatSilver(currentSilver)}
              </div>
              <div className="text-[10px] text-emerald-400 font-semibold">
                Nhánh {userTree.name.split('(')[0]} (Hệ số x{userTree.multiplier || 1.0})
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Ornate Golden Battle Pass Progress Bar */}
        <div className="mt-8 pt-6 border-t border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Compass Crest Emblem */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-700 p-0.5 shadow-gold-glow shrink-0">
              <div className="w-full h-full bg-[#120c08] rounded-full flex items-center justify-center">
                <Compass className="w-6 h-6 text-amber-400 animate-spin" style={{ animationDuration: '30s' }} />
              </div>
            </div>
            
            <div className="w-full sm:w-80 md:w-96">
              <div className="flex justify-between items-center text-xs font-bold text-amber-200 mb-1">
                <span className="font-game tracking-wider text-[11px]">TIẾN ĐỘ GIAO KÈO</span>
                <span className="font-mono text-amber-400 text-sm">{currentScore} / 100 ĐIỂM</span>
              </div>

              {/* Progress Bar with Diamond Checkpoints */}
              <div className="relative h-4 bg-[#0a0705] rounded-full border border-amber-500/60 p-0.5 overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-300 rounded-full transition-all duration-700 relative shadow-gold-glow"
                  style={{ width: `${Math.min(100, Math.max(3, currentScore))}%` }}
                >
                  <div className="absolute inset-0 shimmer"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Upgrade / Save Button */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={handleUpgrade}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-game font-black text-sm uppercase tracking-wider border-2 border-yellow-200 shadow-gold-glow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              NÂNG CẤP TIẾN TRÌNH
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
