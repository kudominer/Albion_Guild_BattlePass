import React, { useState } from 'react';
import Navbar from './components/Navbar';
import OrnateBattlePassBoard from './components/OrnateBattlePassBoard';
import EventDetailsGrid from './components/EventDetailsGrid';
import DiscordRegisterModal from './components/DiscordRegisterModal';
import RulesModal from './components/RulesModal';
import { Shield, Sparkles, BookOpen, ExternalLink, Flame, Trophy, Coins } from 'lucide-react';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between pb-16 sm:pb-0">
      
      {/* Header */}
      <Navbar
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenRules={() => setIsRulesOpen(true)}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 w-full">
        
        {/* 1. Hero: Bảng Sổ Tay Tu Luyện Hoàng Kim (Theo chuẩn ảnh mẫu) */}
        <OrnateBattlePassBoard
          onOpenRegister={() => setIsRegisterOpen(true)}
          onOpenRules={() => setIsRulesOpen(true)}
        />

        {/* 2. Chi Tiết Thể Lệ, Hệ Số Ưu Đãi & 3 Giải Phụ Danh Giá */}
        <EventDetailsGrid
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 3. Bottom Big Call To Action Banner */}
        <div className="my-8 p-6 sm:p-8 rounded-3xl albion-card border-2 border-amber-500/50 shadow-2xl text-center space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-rose-500/50 text-rose-300 text-xs font-bold uppercase">
            <Flame className="w-4 h-4 text-rose-400" />
            HẠN ĐĂNG KÝ: CHỈ NHẬN TRONG 3 NGÀY ĐẦU
          </div>

          <h3 className="text-2xl sm:text-4xl font-game font-extrabold text-white">
            SẴN SÀNG THAM GIA ĐUA TOP CÙNG GUILD TNC?
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Dành riêng cho Newbie có <strong className="text-amber-300">Total Fame dưới 100M</strong>. Hãy chuẩn bị 3 ảnh bảng Stat, Destiny Board và Spec quần áo để nhận ngay cơ hội chia sẻ quỹ giải thưởng <strong className="text-amber-400 font-mono">600M+ Silver</strong>!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setIsRegisterOpen(true)}
              className="albion-btn-gold px-8 py-3.5 rounded-xl text-sm font-black uppercase tracking-wider flex items-center gap-2 shadow-gold-glow"
            >
              <ExternalLink className="w-4 h-4" />
              Đăng Ký Tham Gia Ngay (Gửi Discord)
            </button>
            <button
              onClick={() => setIsRulesOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700 transition-all"
            >
              Xem Toàn Bộ Thể Lệ
            </button>
          </div>
        </div>

      </main>

      {/* Floating Bottom Action Bar for Mobile Devices */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080c16]/95 backdrop-blur-md border-t border-amber-500/40 p-2.5 flex items-center justify-between gap-2 shadow-2xl">
        <button
          onClick={() => setIsRulesOpen(true)}
          className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-700"
        >
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>Thể Lệ</span>
        </button>

        <button
          onClick={() => setIsRegisterOpen(true)}
          className="flex-[2] py-2.5 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Đăng Ký Discord</span>
        </button>
      </div>

      {/* Modals */}
      <DiscordRegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      <RulesModal
        isOpen={isRulesOpen}
        onClose={() => setIsRulesOpen(false)}
      />

      {/* Footer */}
      <footer className="border-t border-albion-border/60 bg-[#060911] py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-albion-gold" />
            <span className="font-game font-bold text-slate-300">GUILD TNC · ALBION ONLINE VIỆT NAM</span>
          </div>
          <p>
            Sự kiện Fame Rush +25% · Lưu hành nội bộ Guild TNC · Tổng giải thưởng 600M+ Silver
          </p>
          <div className="text-slate-400">
            Hạn mức: <strong className="text-amber-400">25M - 30M Silver / Người</strong>
          </div>
        </div>
      </footer>

    </div>
  );
}
