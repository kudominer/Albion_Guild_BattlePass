import React from 'react';
import { Trophy, Zap, Crown, Flame, AlertCircle, Coins, Sparkles } from 'lucide-react';

export default function PrizePoolBanner({ onOpenRegister, onOpenRules }) {
  return (
    <div className="relative overflow-hidden rounded-2xl albion-card p-6 md:p-8 mb-8 border border-albion-gold/40 shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left Column: Event Title & Prize Highlight */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-rose-500/50 text-rose-300 text-xs font-bold tracking-wide">
            <Flame className="w-4 h-4 text-rose-400 animate-bounce" />
            SỰ KIỆN FAME RUSH BUFF +25% FAME (01/10 - 11/10)
          </div>

          <h1 className="text-3xl md:text-5xl font-game font-black tracking-wide leading-tight">
            <span className="gold-text-gradient">BATTLE PASS CÀY FAME</span>
            <br />
            <span className="text-white text-2xl md:text-3xl font-sans font-extrabold">
              GUILD TNC · TỔNG GIẢI HƠN <span className="text-amber-400">600.000.000</span> SILVER
            </span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Dành riêng cho Newbie có <strong className="text-amber-300">Total Fame dưới 100M</strong>. Đăng ký 1 nhánh vũ khí duy nhất, nâng Spec nhận điểm Battle Pass từ 0 - 100 và nhận ngay tiền thưởng Silver tương ứng!
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenRegister}
              className="albion-btn-gold px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Đăng Ký Tham Gia Ngay (3 Ngày Đầu)
            </button>
            <button
              onClick={onOpenRules}
              className="px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700 transition-all"
            >
              Xem Chi Tiết Thể Lệ
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-amber-300/80 font-medium bg-amber-950/30 p-2.5 rounded-lg border border-amber-500/20">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
            <span>Thời gian đăng ký: <strong>Chỉ nhận đăng ký trong 3 ngày đầu</strong> kể từ khi mở sự kiện.</span>
          </div>
        </div>

        {/* Right Column: Special Prize Showcase Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          
          {/* Special Prize 1: 80 Points First */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#1c152e] to-[#12192e] border border-purple-500/40 flex items-center gap-3.5 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-purple-900/60 border border-purple-400/50 flex items-center justify-center shrink-0 shadow-inner">
              <Zap className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                ⚡ ĐẠT 80 ĐIỂM SỚM NHẤT
              </div>
              <div className="text-sm font-extrabold text-white">Shadowcaller 5.4 Awakened</div>
              <div className="text-[11px] text-purple-200/70 font-medium">Attuned 3 dòng chỉ số chiến</div>
            </div>
          </div>

          {/* Special Prize 2: 100 Points First */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#291e12] to-[#1a2233] border border-amber-500/50 flex items-center gap-3.5 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-amber-900/60 border border-amber-400/50 flex items-center justify-center shrink-0 shadow-inner">
              <Crown className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                👑 ĐẠT 100 ĐIỂM SỚM NHẤT
              </div>
              <div className="text-sm font-extrabold text-white">1 Vũ Khí 8.3 Tự Chọn</div>
              <div className="text-[11px] text-amber-200/70 font-medium">Vinh danh chiến thần cày cuốc TNC</div>
            </div>
          </div>

          {/* Special Prize 3: 50 Points Branch First */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#11241f] to-[#12192e] border border-emerald-500/40 flex items-center gap-3.5 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-emerald-900/60 border border-emerald-400/50 flex items-center justify-center shrink-0 shadow-inner">
              <Coins className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                🌟 ĐẠT 50Đ ĐẦU TIÊN MỖI NHÁNH
              </div>
              <div className="text-sm font-extrabold text-white">+ 5.000.000 Silver Thưởng Nóng</div>
              <div className="text-[11px] text-emerald-200/70 font-medium">Dành cho người tiên phong từng dòng vũ khí</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
