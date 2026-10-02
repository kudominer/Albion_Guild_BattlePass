import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Shield, Sparkles, Trophy, UserCheck, BookOpen, Clock, LogIn, ChevronDown, CheckCircle } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenRegister, onOpenRules }) {
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
    <header className="sticky top-0 z-40 bg-[#0a0e1a]/90 backdrop-blur-md border-b border-albion-border/60">
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

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121829]/80 p-1.5 rounded-xl border border-albion-border/60">
            <button
              onClick={() => setActiveTab('tracker')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'tracker'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Battle Pass & Spec
            </button>

            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'leaderboard'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Trophy className="w-4 h-4" />
              Bảng Xếp Hạng
            </button>

            <button
              onClick={() => setActiveTab('officer')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'officer'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              BQT Officer
              {user?.is_officer && (
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              )}
            </button>

            <button
              onClick={onOpenRules}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-amber-300 hover:bg-slate-800/60 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Thể Lệ
            </button>
          </nav>

          {/* Countdown & Profile / Auth */}
          <div className="flex items-center gap-3">
            
            {/* Event Countdown */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-950/30 border border-amber-500/30 text-xs">
              <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="text-amber-200/80">Kết thúc sau:</span>
              <span className="font-mono font-bold text-albion-gold">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </span>
            </div>

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
                      <p className="px-3 py-1 text-[10px] font-semibold text-slate-400 uppercase">Chuyển tài khoản thử nghiệm (Demo):</p>
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
                <button
                  onClick={onOpenRegister}
                  className="albion-btn-gold px-4 py-2 rounded-xl text-xs font-bold"
                >
                  Đăng Ký Tham Gia
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Mobile Nav Bar */}
      <div className="md:hidden flex items-center justify-around bg-[#0d1322] border-t border-slate-800 py-2.5 px-2 text-xs">
        <button
          onClick={() => setActiveTab('tracker')}
          className={`flex flex-col items-center gap-1 font-semibold ${
            activeTab === 'tracker' ? 'text-albion-gold' : 'text-slate-400'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Battle Pass</span>
        </button>
        <button
          onClick={() => setActiveTab('leaderboard')}
          className={`flex flex-col items-center gap-1 font-semibold ${
            activeTab === 'leaderboard' ? 'text-albion-gold' : 'text-slate-400'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>Xếp Hạng</span>
        </button>
        <button
          onClick={() => setActiveTab('officer')}
          className={`flex flex-col items-center gap-1 font-semibold ${
            activeTab === 'officer' ? 'text-purple-400' : 'text-slate-400'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span>BQT Officer</span>
        </button>
        <button
          onClick={onOpenRules}
          className="flex flex-col items-center gap-1 font-medium text-slate-400"
        >
          <BookOpen className="w-4 h-4" />
          <span>Thể Lệ</span>
        </button>
      </div>
    </header>
  );
}
