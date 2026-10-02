import React from 'react';
import { Sparkles, Shield, Compass, ChevronRight, CheckCircle2, Flame, ExternalLink, Calendar, Users } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OrnateBattlePassBoard({ onOpenRegister, onOpenRules }) {
  const triggerCelebrate = () => {
    confetti({
      particleCount: 110,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#e5b842', '#fde047', '#e11d48', '#8b5cf6', '#10b981']
    });
    if (onOpenRegister) onOpenRegister();
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto my-4 sm:my-6 px-1 sm:px-4 select-none">
      
      {/* Top Floating Crest & Season Badge */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-3 sm:px-6 mb-3">
        
        {/* Left: Albion Online Brand Badge */}
        <div className="flex items-center gap-2 drop-shadow-lg">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-red-800 p-0.5 shadow-gold-glow flex items-center justify-center shrink-0">
            <div className="w-full h-full bg-[#0d1322] rounded-[10px] flex items-center justify-center">
              <Shield className="w-5 h-5 text-albion-gold" />
            </div>
          </div>
          <div>
            <div className="font-display font-black text-sm tracking-widest text-amber-300">ALBION ONLINE</div>
            <div className="text-[10px] font-semibold text-slate-400 uppercase">TNC GUILD · BAN TỔ CHỨC GUILD TNC</div>
          </div>
        </div>

        {/* Right: Registration & Season Badge */}
        <div className="px-3.5 py-1.5 rounded-full bg-black/70 border border-amber-500/40 text-xs flex items-center gap-2 shadow-lg backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span className="font-display font-black text-amber-300">ZERO to HERO</span>
          <span className="text-slate-400 text-[11px]">| Hạn đăng ký: Hết ngày 04/10/2026</span>
        </div>

      </div>

      {/* 🌟 GIANT TOP MISSION BANNER ĐẬP VÀO MẮT NGAY ĐẦU TRANG */}
      <div className="my-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#20150d] via-[#321f10] to-[#20150d] border-2 border-amber-400 shadow-[0_0_35px_rgba(234,179,8,0.4)] relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/15 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/15 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/60 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="animate-pulse text-sm">⚔️</span>
            <span>THÔNG ĐIỆP TỪ BAN TỔ CHỨC GUILD TNC</span>
            <span className="animate-pulse text-sm">⚔️</span>
          </div>

          <h2 className="text-base sm:text-lg md:text-xl font-black text-amber-200 tracking-wide max-w-4xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            "Sự kiện dành cho <span className="text-yellow-300 underline decoration-amber-400 decoration-2 underline-offset-4">Newbie dưới 100m Total fame</span> để khích lệ Newbie tìm hiểu game, tham gia content và đồng hành cùng <span className="text-amber-300 font-extrabold">TNC</span> trên những chặng đường sắp tới."
          </h2>
        </div>
      </div>

      {/* Main Ornate Carved Wooden Board (Chuẩn 100% theo ảnh thiết kế mẫu) */}
      <div className="ornate-wood-board rounded-3xl p-5 sm:p-8 md:p-10 border-4 border-[#936e2f] relative overflow-hidden">
        
        {/* Corner Rivet Ornaments */}
        <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-gradient-to-br from-amber-300 to-amber-900 border border-amber-400/80 shadow-md"></div>
        <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-gradient-to-br from-amber-300 to-amber-900 border border-amber-400/80 shadow-md"></div>
        <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-gradient-to-br from-amber-300 to-amber-900 border border-amber-400/80 shadow-md"></div>
        <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-gradient-to-br from-amber-300 to-amber-900 border border-amber-400/80 shadow-md"></div>

        {/* Top Header Arch / Crown */}
        <div className="text-center relative z-10 mb-6 sm:mb-8">
          <div className="inline-block relative">
            <div className="text-[11px] sm:text-xs font-display tracking-[0.25em] text-amber-300 font-black uppercase mb-0.5 drop-shadow">
              ✦ SỰ KIỆN CÀY FAME ZERO TO HERO ✦
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-black tracking-wider gold-text-gradient uppercase">
              SỔ TAY TU LUYỆN
            </h1>
          </div>
          
          <p className="text-xs sm:text-sm text-amber-100/90 font-semibold tracking-wide mt-2 drop-shadow px-2">
            Hoàn thành nhiệm vụ — Nâng cấp Giao Kèo — Nhận phần thưởng giá trị
          </p>
        </div>

        {/* 3 Main Progression Areas + Giant Treasure Chest Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center my-4 sm:my-6">
          
          {/* Left 8 Columns: 3 Progression Pedestals */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            
            {/* AREA 1: HÀNH TRÌNH KHỞI ĐẦU - 48 ĐIỂM */}
            <div
              onClick={onOpenRegister}
              className="group cursor-pointer rounded-2xl p-4 bg-black/40 border border-amber-500/30 hover:border-amber-400/80 transition-all hover:bg-black/60 relative flex flex-col justify-between"
            >
              <div className="text-center mb-2">
                <div className="text-[10px] font-display font-bold text-amber-400/90 uppercase tracking-wider">
                  KHU VỰC 1:
                </div>
                <div className="text-xs font-black text-white uppercase font-display tracking-wide">
                  HÀNH TRÌNH KHỞI ĐẦU
                </div>
                <div className="text-[11px] font-extrabold text-amber-300">
                  48 ĐIỂM
                </div>
              </div>

              {/* Pedestal with Glowing Magical Weapons */}
              <div className="relative h-32 flex items-center justify-center my-1">
                <div className="absolute inset-0 pedestal-glow-green rounded-full opacity-80 group-hover:opacity-100 transition-all"></div>
                
                <div className="relative z-10 flex items-end justify-center gap-2 animate-float">
                  <div className="text-2xl filter drop-shadow-[0_0_12px_rgba(34,197,94,0.9)] scale-95 opacity-85">
                    ✨
                  </div>
                  <div className="text-4xl filter drop-shadow-[0_0_16px_rgba(234,179,8,1)] scale-110 -translate-y-2">
                    🪄
                  </div>
                  <div className="text-2xl filter drop-shadow-[0_0_12px_rgba(34,197,94,0.9)] scale-95 opacity-85">
                    🌿
                  </div>
                </div>
              </div>

              <div className="text-center mt-2">
                <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-[10px] font-mono font-bold text-emerald-300">
                  8 Cây Vũ Khí × 6 Điểm
                </span>
              </div>
            </div>

            {/* AREA 2: CON ĐƯỜNG TINH HOA - 32 ĐIỂM */}
            <div
              onClick={onOpenRegister}
              className="group cursor-pointer rounded-2xl p-4 bg-black/40 border border-amber-500/30 hover:border-amber-400/80 transition-all hover:bg-black/60 relative flex flex-col justify-between"
            >
              <div className="text-center mb-2">
                <div className="text-[10px] font-display font-bold text-amber-400/90 uppercase tracking-wider">
                  KHU VỰC 2:
                </div>
                <div className="text-xs font-black text-white uppercase font-display tracking-wide">
                  CON ĐƯỜNG TINH HOA
                </div>
                <div className="text-[11px] font-extrabold text-amber-300">
                  32 ĐIỂM
                </div>
              </div>

              {/* 2 Golden Medals: 500 Spec & 800 Spec */}
              <div className="relative h-32 flex items-center justify-center gap-2 my-1">
                <div className="absolute inset-0 pedestal-glow-gold rounded-full opacity-70 group-hover:opacity-100 transition-all"></div>
                
                {/* 500 Spec Medal */}
                <div className="relative z-10 w-14 h-14 rounded-full p-0.5 flex flex-col items-center justify-center bg-gradient-to-b from-yellow-200 via-amber-400 to-yellow-700 shadow-gold-glow animate-bounce">
                  <div className="w-full h-full bg-[#181109] rounded-full flex flex-col items-center justify-center text-center p-1 border border-amber-500/60">
                    <span className="text-[11px] font-black font-mono text-amber-300 leading-none">500</span>
                    <span className="text-[7px] font-bold text-amber-400 uppercase leading-none mt-0.5">SPEC</span>
                    <span className="text-[6px] text-amber-200 leading-none mt-0.5">+16đ</span>
                  </div>
                </div>

                {/* 800 Spec Medal */}
                <div className="relative z-10 w-14 h-14 rounded-full p-0.5 flex flex-col items-center justify-center bg-gradient-to-b from-yellow-200 via-amber-400 to-yellow-700 shadow-gold-glow animate-bounce" style={{ animationDelay: '0.2s' }}>
                  <div className="w-full h-full bg-[#181109] rounded-full flex flex-col items-center justify-center text-center p-1 border border-amber-500/60">
                    <span className="text-[11px] font-black font-mono text-amber-300 leading-none">800</span>
                    <span className="text-[7px] font-bold text-amber-400 uppercase leading-none mt-0.5">SPEC</span>
                    <span className="text-[6px] text-amber-200 leading-none mt-0.5">+16đ</span>
                  </div>
                </div>
              </div>

              <div className="text-center mt-2">
                <span className="inline-block px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/50 text-[10px] font-mono font-bold text-amber-300">
                  Mốc 500 & 800 Spec Toàn Nhánh
                </span>
              </div>
            </div>

            {/* AREA 3: TRANG BỊ VÔ SONG - 20 ĐIỂM */}
            <div
              onClick={onOpenRegister}
              className="group cursor-pointer rounded-2xl p-4 bg-black/40 border border-amber-500/30 hover:border-amber-400/80 transition-all hover:bg-black/60 relative flex flex-col justify-between"
            >
              <div className="text-center mb-2">
                <div className="text-[10px] font-display font-bold text-amber-400/90 uppercase tracking-wider">
                  KHU VỰC 3:
                </div>
                <div className="text-xs font-black text-white uppercase font-display tracking-wide">
                  TRANG BỊ VÔ SONG
                </div>
                <div className="text-[11px] font-extrabold text-amber-300">
                  20 ĐIỂM
                </div>
              </div>

              {/* Knight Armor & Helmet Pedestal with Blue Aura */}
              <div className="relative h-32 flex items-center justify-center my-1">
                <div className="absolute inset-0 pedestal-glow-blue rounded-full opacity-70 group-hover:opacity-100 transition-all"></div>
                
                <div className="relative z-10 flex items-center justify-center gap-1.5 animate-float-delayed">
                  <div className="text-3xl filter drop-shadow-[0_0_15px_rgba(59,130,246,0.9)]">
                    🛡️
                  </div>
                  <div className="text-2xl filter drop-shadow-[0_0_15px_rgba(59,130,246,0.9)]">
                    ⚔️
                  </div>
                  <div className="text-2xl filter drop-shadow-[0_0_15px_rgba(59,130,246,0.9)]">
                    🥾
                  </div>
                </div>
              </div>

              <div className="text-center mt-2">
                <span className="inline-block px-2.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/50 text-[10px] font-mono font-bold text-blue-300">
                  500 Spec Giày/Mũ & Áo
                </span>
              </div>
            </div>

          </div>

          {/* Right 4 Columns: Giant Overflowing Silver Treasure Chest */}
          <div className="md:col-span-4 p-5 rounded-2xl bg-gradient-to-b from-[#2a1b10]/90 via-[#1a110a]/95 to-[#0d0905] border-2 border-amber-500/60 shadow-2xl relative overflow-hidden flex flex-col items-center text-center justify-between min-h-[300px]">
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-1">
              <div className="text-[11px] font-display font-bold text-amber-300 uppercase tracking-widest">
                TỔNG GIẢI THƯỞNG:
              </div>
              <div className="text-2xl sm:text-3xl font-black font-display gold-text-gradient">
                ≈ 600M SILVER
              </div>
              <p className="text-[10px] text-amber-200/80 leading-tight">
                Sau 3 ngày sẽ tính tổng số người đăng ký và 600M được chia đều cho từng người!
              </p>
            </div>

            {/* Glowing Chest Graphic with Coins */}
            <div className="my-2 relative">
              <div className="text-6xl sm:text-7xl filter drop-shadow-[0_0_25px_rgba(234,179,8,0.8)] animate-pulse">
                🎁
              </div>
              <div className="absolute -bottom-2 -left-3 text-xl animate-flicker">🪙</div>
              <div className="absolute -bottom-2 -right-3 text-xl animate-flicker">🪙</div>
            </div>

            {/* Event Trao Thuong Timeline */}
            <div className="w-full bg-[#0d0905]/95 p-3 rounded-xl border border-amber-500/40 space-y-1 text-left">
              <div className="flex items-center gap-1.5 text-[10px] text-amber-300 font-bold">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Trao thưởng: Hết tháng 10/2026</span>
              </div>
              <div className="text-[10px] text-slate-400">
                Hạn mức tiêu chuẩn: <strong className="text-amber-300">25M - 30M Silver / Người</strong>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Ornate Golden Action Bar */}
        <div className="mt-6 pt-5 border-t border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-700 p-0.5 shadow-gold-glow shrink-0">
              <div className="w-full h-full bg-[#120c08] rounded-full flex items-center justify-center">
                <Compass className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: '30s' }} />
              </div>
            </div>
            
            <div>
              <div className="text-xs font-black text-amber-200 font-display tracking-wider">
                TIẾN ĐỘ SỰ KIỆN ZERO TO HERO
              </div>
              <div className="text-[11px] text-slate-400">
                100 Điểm Battle Pass = 100% gói thưởng Silver cá nhân
              </div>
            </div>
          </div>

          {/* Big Action Button */}
          <div className="w-full sm:w-auto flex items-center gap-2.5">
            <button
              onClick={triggerCelebrate}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-display font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-yellow-200 shadow-gold-glow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              Đăng Ký Tham Gia (Gửi Discord)
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
