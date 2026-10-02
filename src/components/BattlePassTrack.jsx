import React from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Gift, Zap, Crown, CheckCircle2, Lock, Sparkles, Coins } from 'lucide-react';
import { formatSilver, calculateRewardSilver } from '../data/weapons';

const BATTLE_PASS_MILESTONES = [
  { point: 10, title: 'Khởi Động', reward: '2.5M Silver Base', icon: 'Coins', tier: 1 },
  { point: 25, title: 'Tăng Tốc', reward: '6.25M Silver Base', icon: 'Gift', tier: 2 },
  { point: 48, title: 'Bậc Thầy Vũ Khí', reward: '12M Silver (Full 8 cây 100 spec)', icon: 'Sparkles', tier: 3 },
  { point: 50, title: 'Đua Top Nhánh', reward: '+5M Thưởng Nóng (Người đầu tiên nhánh)', icon: 'Coins', special: true, tier: 4 },
  { point: 64, title: 'Thần Khí', reward: '16M Silver Base', icon: 'Gift', tier: 5 },
  { point: 80, title: 'Chiến Tướng', reward: '⚡ Shadowcaller 5.4 Attuned (Đạt sớm nhất)', icon: 'Zap', special: true, tier: 6 },
  { point: 100, title: 'BẬC THẦY HOÀN HẢO', reward: '👑 100% Gói Thưởng + Vũ Khí 8.3 (Sớm nhất)', icon: 'Crown', special: true, tier: 7 },
];

export default function BattlePassTrack({ score, multiplier = 1.0, userTreeName = '' }) {
  const currentSilver = calculateRewardSilver(score, multiplier);
  const maxSilver = calculateRewardSilver(100, multiplier);

  const triggerCelebrate = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#e5b842', '#fde047', '#e11d48', '#8b5cf6']
    });
  };

  return (
    <div className="albion-card rounded-2xl p-6 mb-8 border border-albion-border">
      
      {/* Top Header info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Tiến trình cá nhân</span>
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
              Nhánh: {userTreeName || 'Chưa chọn'} (Hệ số x{multiplier})
            </span>
          </div>
          <h2 className="text-2xl font-game font-bold text-white mt-1">
            TIẾN TRÌNH BATTLE PASS (0 - 100 ĐIỂM)
          </h2>
        </div>

        {/* Current Reward Box */}
        <div className="bg-[#0b101d] px-5 py-3 rounded-xl border border-amber-500/40 shadow-inner flex items-center gap-4">
          <div className="text-right">
            <div className="text-[11px] text-slate-400 font-semibold uppercase">Silver Dự Kiến Nhận</div>
            <div className="text-xl font-extrabold gold-text-gradient font-mono">
              {formatSilver(currentSilver)}
            </div>
            <div className="text-[10px] text-slate-400">Tối đa mốc 100đ: {formatSilver(maxSilver)}</div>
          </div>
          {score >= 100 && (
            <button
              onClick={triggerCelebrate}
              className="p-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-all animate-bounce"
              title="Chúc mừng đã đạt mốc tối đa!"
            >
              🎉
            </button>
          )}
        </div>
      </div>

      {/* Main Progress Bar */}
      <div className="my-8">
        <div className="flex justify-between items-center text-xs font-bold mb-2">
          <span className="text-slate-400">0 ĐIỂM</span>
          <span className="text-amber-400 font-mono text-sm">{score} / 100 ĐIỂM ({score}%)</span>
          <span className="text-albion-gold">100 ĐIỂM (MAX)</span>
        </div>

        <div className="relative h-6 w-full bg-[#0b101d] rounded-full overflow-hidden p-1 border border-slate-700/80 shadow-inner">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300 relative shadow-gold-glow"
            style={{ width: `${Math.min(100, Math.max(2, score))}%` }}
          >
            <div className="absolute inset-0 shimmer"></div>
          </div>
        </div>
      </div>

      {/* Milestone Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-6">
        {BATTLE_PASS_MILESTONES.map((m, idx) => {
          const isReached = score >= m.point;
          return (
            <div
              key={idx}
              className={`relative p-4 rounded-xl border transition-all ${
                isReached
                  ? m.special
                    ? 'bg-gradient-to-br from-amber-950/40 via-[#161c2e] to-[#12192e] border-amber-500/80 shadow-gold-glow'
                    : 'bg-[#151c2e] border-emerald-500/60'
                  : 'bg-[#0f1422]/60 border-slate-800 opacity-70'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-black font-mono px-2 py-0.5 rounded ${
                  isReached ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  MỐC {m.point} ĐIỂM
                </span>

                {isReached ? (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    Đã đạt
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
                    <Lock className="w-3.5 h-3.5" />
                    Còn {m.point - score}đ
                  </span>
                )}
              </div>

              <div className="text-sm font-bold text-white mb-1 flex items-center gap-1.5">
                {m.special && <Sparkles className="w-3.5 h-3.5 text-amber-400" />}
                {m.title}
              </div>

              <div className={`text-xs ${m.special ? 'text-amber-200/90 font-semibold' : 'text-slate-300'}`}>
                {m.reward}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
