import React, { useState, useEffect } from 'react';
import { Shield, Sparkles, BookOpen, Clock, ExternalLink, Flame } from 'lucide-react';

export default function Navbar({ onOpenRegister, onOpenRules, scrollToSection }) {
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
    <header className="sticky top-0 z-40 bg-[#080c16]/95 backdrop-blur-md border-b border-albion-border/60 shadow-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo & Guild Brand */}
          <div className="flex items-center gap-2.5 sm:gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-red-700 p-0.5 shadow-gold-glow flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-[#0d1322] rounded-[10px] flex items-center justify-center">
                <Shield className="w-6 h-6 text-albion-gold" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-game text-base sm:text-xl font-bold tracking-wider gold-text-gradient">GUILD TNC</span>
                <span className="text-[9px] sm:text-[10px] px-2 py-0.5 bg-red-950/80 text-rose-300 border border-rose-600/40 rounded-full font-semibold uppercase tracking-wider">
                  Fame Rush +25%
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">Battle Pass Cày Fame · Tổng Giải 600M+ Silver</p>
            </div>
          </div>

          {/* Navigation Links & Action */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            
            {/* Event Countdown */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-950/30 border border-amber-500/30 text-xs">
              <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="text-amber-200/80">Kết thúc sau:</span>
              <span className="font-mono font-bold text-albion-gold">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </span>
            </div>

            {/* Rules Button */}
            <button
              onClick={onOpenRules}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 transition-all"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Chi Tiết Thể Lệ</span>
            </button>

            {/* Direct Discord Register Button */}
            <button
              onClick={onOpenRegister}
              className="flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-indigo-500/30"
            >
              <ExternalLink className="w-4 h-4 shrink-0" />
              <span>Đăng Ký Discord</span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}
