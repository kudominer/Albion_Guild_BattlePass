import React, { useState } from 'react';
import OrnateBattlePassBoard from './OrnateBattlePassBoard';
import SpecCalculator from './SpecCalculator';
import Leaderboard from './Leaderboard';
import OfficerPortal from './OfficerPortal';
import { Trophy, Sword, Shield, BookOpen, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CinematicHud({ onOpenRegister, onOpenRules }) {
  const [activeDrawer, setActiveDrawer] = useState(null); // 'spec' | 'leaderboard' | 'officer' | null

  return (
    <div className="relative min-h-[92vh] flex flex-col items-center justify-center p-2 sm:p-6 overflow-hidden">
      
      {/* Cinematic Background Fantasy Castle Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050811]/90 via-[#0a0705]/80 to-[#030408]/95 pointer-events-none"></div>
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Atmospheric Flickering Candles & Gold Coins along bottom */}
      <div className="absolute bottom-4 left-6 hidden lg:flex items-center gap-2 text-2xl filter drop-shadow-[0_0_15px_rgba(234,179,8,0.8)] animate-flicker pointer-events-none">
        🕯️ 🪙 🪙 🪙
      </div>
      <div className="absolute bottom-4 right-6 hidden lg:flex items-center gap-2 text-2xl filter drop-shadow-[0_0_15px_rgba(234,179,8,0.8)] animate-flicker pointer-events-none">
        🪙 🪙 🪙 🕯️
      </div>

      {/* Floating HUD Side Access Buttons (PC & Tablet) */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-3">
        <button
          onClick={() => setActiveDrawer(activeDrawer === 'leaderboard' ? null : 'leaderboard')}
          className="p-3.5 rounded-2xl bg-[#120c08]/90 border-2 border-amber-500/70 hover:border-amber-300 text-amber-300 shadow-gold-glow flex items-center gap-2.5 text-xs font-bold font-game tracking-wider uppercase hover:scale-105 transition-all backdrop-blur-md"
        >
          <Trophy className="w-5 h-5 text-amber-400" />
          <span>Bảng Xếp Hạng</span>
        </button>

        <button
          onClick={() => setActiveDrawer(activeDrawer === 'spec' ? null : 'spec')}
          className="p-3.5 rounded-2xl bg-[#120c08]/90 border-2 border-amber-500/70 hover:border-amber-300 text-amber-300 shadow-gold-glow flex items-center gap-2.5 text-xs font-bold font-game tracking-wider uppercase hover:scale-105 transition-all backdrop-blur-md"
        >
          <Sword className="w-5 h-5 text-amber-400" />
          <span>Nhập Spec Chi Tiết</span>
        </button>
      </div>

      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-3">
        <button
          onClick={() => setActiveDrawer(activeDrawer === 'officer' ? null : 'officer')}
          className="p-3.5 rounded-2xl bg-[#180a24]/90 border-2 border-purple-500/70 hover:border-purple-300 text-purple-300 shadow-lg flex items-center gap-2.5 text-xs font-bold font-game tracking-wider uppercase hover:scale-105 transition-all backdrop-blur-md"
        >
          <Shield className="w-5 h-5 text-purple-400" />
          <span>Cổng BQT Officer</span>
        </button>

        <button
          onClick={onOpenRegister}
          className="p-3.5 rounded-2xl bg-[#241708]/90 border-2 border-yellow-400/80 hover:border-yellow-200 text-yellow-300 shadow-gold-glow flex items-center gap-2.5 text-xs font-bold font-game tracking-wider uppercase hover:scale-105 transition-all backdrop-blur-md"
        >
          <Sparkles className="w-5 h-5 text-yellow-400" />
          <span>Đăng Ký Newbie</span>
        </button>
      </div>

      {/* Main Center Ornate Board */}
      <div className="relative z-10 w-full">
        <OrnateBattlePassBoard
          onOpenSpecDetail={() => setActiveDrawer('spec')}
          onOpenRegister={onOpenRegister}
          onUpgradeClick={() => setActiveDrawer('spec')}
        />
      </div>

      {/* Mobile Floating Controls Bar */}
      <div className="md:hidden flex items-center justify-center gap-2 mt-4 relative z-20">
        <button
          onClick={() => setActiveDrawer('spec')}
          className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg"
        >
          <Sword className="w-4 h-4" />
          Nhập Spec
        </button>

        <button
          onClick={() => setActiveDrawer('leaderboard')}
          className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1.5"
        >
          <Trophy className="w-4 h-4 text-amber-400" />
          BXH
        </button>

        <button
          onClick={() => setActiveDrawer('officer')}
          className="px-4 py-2 rounded-xl bg-purple-900/80 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center gap-1.5"
        >
          <Shield className="w-4 h-4" />
          BQT
        </button>
      </div>

      {/* Slide-out Drawer for Spec / Leaderboard / Officer */}
      {activeDrawer && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md transition-all">
          <div className="relative w-full max-w-4xl h-full bg-[#0a0e1a] border-l-2 border-albion-gold p-4 sm:p-8 overflow-y-auto shadow-2xl">
            
            {/* Close Drawer Button */}
            <button
              onClick={() => setActiveDrawer(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/80 hover:bg-slate-700 transition-all flex items-center gap-1 text-xs font-bold"
            >
              <X className="w-4 h-4" />
              <span>Đóng</span>
            </button>

            {/* Drawer Content */}
            <div className="mt-8">
              {activeDrawer === 'spec' && (
                <div>
                  <h3 className="text-xl font-game font-bold text-amber-400 mb-4 flex items-center gap-2">
                    <Sword className="w-5 h-5 text-amber-400" />
                    BẢNG TÍNH & NHẬP SPEC CHI TIẾT
                  </h3>
                  <SpecCalculator />
                </div>
              )}

              {activeDrawer === 'leaderboard' && (
                <div>
                  <Leaderboard onOpenRegister={onOpenRegister} />
                </div>
              )}

              {activeDrawer === 'officer' && (
                <div>
                  <OfficerPortal />
                </div>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
