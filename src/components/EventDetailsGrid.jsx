import React from 'react';
import { Trophy, Crown, Zap, Coins, Shield, HeartHandshake, Sparkles, AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';

export default function EventDetailsGrid({ onOpenRegister }) {
  return (
    <div className="space-y-8 my-8">
      
      {/* SECTION 1: 3 SPECIAL PRIZES SHOWCASE PODIUM (Vinh Danh Giải Phụ) */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Trophy className="w-3.5 h-3.5" />
            CƠ CẤU GIẢI THƯỞNG ĐẶC BIỆT
          </div>
          <h3 className="text-2xl sm:text-3xl font-game font-bold text-white">
            GIẢI PHỤ DANH GIÁ DÀNH CHO CHIẾN THẦN CÀY FAME
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Special Prize 1: 80 Points First */}
          <div className="albion-card rounded-2xl p-5 border border-purple-500/60 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/10 rounded-full blur-xl pointer-events-none"></div>
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-purple-400" />
                  ĐẠT 80 ĐIỂM SỚM NHẤT
                </span>
                <span className="px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 text-[10px] font-bold border border-purple-500/40">
                  TOP 1 TỐC ĐỘ
                </span>
              </div>
              <div className="text-lg font-bold text-white mb-1 font-game">
                Shadowcaller 5.4 Awakened
              </div>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                Trang bị thần khí Attuned 3 dòng chỉ số chiến đấu cao cấp nhất, trao ngay cho chiến thần đầu tiên cán mốc 80 điểm!
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-purple-900/50 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Điều kiện:</span>
              <span className="font-bold text-purple-300 font-mono">≥ 80 Điểm Battle Pass</span>
            </div>
          </div>

          {/* Special Prize 2: 100 Points First */}
          <div className="albion-card rounded-2xl p-5 border border-amber-500/70 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/15 rounded-full blur-xl pointer-events-none"></div>
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Crown className="w-4 h-4 text-amber-400" />
                  ĐẠT 100 ĐIỂM SỚM NHẤT
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 text-[10px] font-bold border border-amber-500/40">
                  VÔ ĐỊCH SỰ KIỆN
                </span>
              </div>
              <div className="text-lg font-bold text-white mb-1 font-game gold-text-gradient">
                1 Vũ Khí 8.3 Tự Chọn
              </div>
              <p className="text-xs text-amber-100/70 leading-relaxed">
                Phần thưởng cao quý nhất dành cho người đầu tiên hoàn thành trọn vẹn 100% Sổ Tay Tu Luyện trong đợt buff +25% Fame!
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-amber-900/50 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Điều kiện:</span>
              <span className="font-bold text-amber-300 font-mono">100/100 Điểm Tối Đa</span>
            </div>
          </div>

          {/* Special Prize 3: 50 Points Branch First */}
          <div className="albion-card rounded-2xl p-5 border border-emerald-500/60 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-600/10 rounded-full blur-xl pointer-events-none"></div>
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Coins className="w-4 h-4 text-emerald-400" />
                  50 ĐIỂM ĐẦU TIÊN MỖI NHÁNH
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 text-[10px] font-bold border border-emerald-500/40">
                  MỖI NHÁNH 1 GIẢI
                </span>
              </div>
              <div className="text-lg font-bold text-white mb-1 font-game">
                + 5.000.000 Silver Thưởng Nóng
              </div>
              <p className="text-xs text-emerald-200/70 leading-relaxed">
                Với mỗi nhánh vũ khí độc nhất (Cung, Kiếm, Rìu, Gậy...), người đầu tiên đạt mốc 50 điểm sẽ nhận ngay 5M Silver!
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-emerald-900/50 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Áp dụng:</span>
              <span className="font-bold text-emerald-300 font-mono">Người Tiên Phong Nhánh</span>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 2: BẢNG TÍNH ĐIỂM & HỆ SỐ ƯU ĐÃI (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* Left Column: Bảng Tính Điểm Chuẩn 100 Điểm */}
        <div className="albion-card rounded-2xl p-6 border border-albion-border">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
            <Shield className="w-4 h-4" />
            BẢNG TÍNH ĐIỂM BATTLE PASS (0 - 100 ĐIỂM)
          </div>
          <h4 className="text-xl font-game font-bold text-white mb-4">
            CÁCH TÍCH LŨY ĐIỂM THƯỞNG
          </h4>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300">
            
            {/* Item 1: Vũ khí lẻ */}
            <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-slate-800 flex items-start justify-between gap-3">
              <div>
                <div className="font-bold text-white mb-1 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 font-mono font-bold flex items-center justify-center text-xs">
                    1
                  </span>
                  Cày Vũ Khí Lẻ (Tối đa 48 điểm)
                </div>
                <p className="text-xs text-slate-400 pl-8">
                  Đạt 100 Spec mỗi cây trong nhánh = <strong className="text-amber-300">+6 điểm / cây</strong> (Cày đủ 8 cây = 48 điểm).
                </p>
              </div>
              <span className="font-mono font-bold text-amber-400 whitespace-nowrap pt-1">
                +48 Điểm
              </span>
            </div>

            {/* Item 2: Mốc tổng nhánh */}
            <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-slate-800 flex items-start justify-between gap-3">
              <div>
                <div className="font-bold text-white mb-1 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 font-mono font-bold flex items-center justify-center text-xs">
                    2
                  </span>
                  Mốc Tổng Nhánh Vũ Khí (Tối đa 32 điểm)
                </div>
                <p className="text-xs text-slate-400 pl-8">
                  Đạt tổng 500 Spec toàn nhánh = <strong className="text-amber-300">+16 điểm</strong>.<br />
                  Đạt tổng 800 Spec toàn nhánh (Full 8 cây) = <strong className="text-amber-300">+16 điểm nữa</strong> (Tổng 32đ).
                </p>
              </div>
              <span className="font-mono font-bold text-amber-400 whitespace-nowrap pt-1">
                +32 Điểm
              </span>
            </div>

            {/* Item 3: Mốc trang bị đi kèm */}
            <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-slate-800 flex items-start justify-between gap-3">
              <div>
                <div className="font-bold text-white mb-1 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 font-mono font-bold flex items-center justify-center text-xs">
                    3
                  </span>
                  Mốc Trang Bị Đi Kèm (Tối đa 20 điểm)
                </div>
                <p className="text-xs text-slate-400 pl-8">
                  500 Spec dòng Giày & Mũ = <strong className="text-emerald-300">+10 điểm</strong> (cộng dồn từ nhiều nhánh).<br />
                  500 Spec dòng Áo (Armor) = <strong className="text-emerald-300">+10 điểm</strong> (cộng dồn từ nhiều nhánh).
                </p>
              </div>
              <span className="font-mono font-bold text-emerald-400 whitespace-nowrap pt-1">
                +20 Điểm
              </span>
            </div>

          </div>

          <div className="mt-4 p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 text-center text-xs text-amber-300 font-bold">
            👉 Tổng cộng: 100 ĐIỂM (Tương ứng 100% gói thưởng Silver cá nhân)
          </div>
        </div>

        {/* Right Column: Hệ Số Ưu Đãi Nhánh & Giải Thưởng */}
        <div className="albion-card rounded-2xl p-6 border border-albion-border space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4" />
            HỆ SỐ ƯU ĐÃI & HẠN MỨC SILVER
          </div>
          <h4 className="text-xl font-game font-bold text-white">
            QUY ĐỔI TIỀN THƯỞNG SILVER
          </h4>

          {/* Multiplier Cards */}
          <div className="space-y-3 text-xs sm:text-sm">
            
            {/* Heal */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-[#0e1726] border border-emerald-500/40 flex items-center justify-between">
              <div>
                <div className="font-bold text-emerald-300 flex items-center gap-2">
                  <span>🌿</span>
                  Dòng Hồi Máu (Holy Staff, Nature Staff)
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Ưu đãi đặc biệt <strong className="text-emerald-400">+20% Silver</strong> cho anh em Support
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono font-black text-emerald-400 text-base">Hệ số x1.2</div>
                <div className="text-[10px] text-slate-400 font-bold">Tối đa 30.000.000 Silver</div>
              </div>
            </div>

            {/* Tank / Support */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-sky-950/40 to-[#0e1726] border border-sky-500/40 flex items-center justify-between">
              <div>
                <div className="font-bold text-sky-300 flex items-center gap-2">
                  <span>🛡️</span>
                  Dòng Hammer, Mace, Arcane Staff
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Ưu đãi <strong className="text-sky-400">+10% Silver</strong> cho anh em Tank/Khống chế
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono font-black text-sky-400 text-base">Hệ số x1.1</div>
                <div className="text-[10px] text-slate-400 font-bold">Tối đa 27.500.000 Silver</div>
              </div>
            </div>

            {/* DPS / Other */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 to-[#0e1726] border border-amber-500/40 flex items-center justify-between">
              <div>
                <div className="font-bold text-amber-300 flex items-center gap-2">
                  <span>⚔️</span>
                  Các Dòng DPS & Vũ Khí Khác
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Cung, Kiếm, Rìu, Dao, Nguyền, Lửa, Băng, Giáo...
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono font-black text-amber-400 text-base">Hệ số x1.0</div>
                <div className="text-[10px] text-slate-400 font-bold">Tối đa 25.000.000 Silver</div>
              </div>
            </div>

          </div>

          {/* Formula explanation */}
          <div className="p-3.5 rounded-xl bg-[#080c14] border border-slate-800 text-xs text-slate-300 space-y-1">
            <div className="font-bold text-amber-300">Công thức nhận thưởng cuối sự kiện:</div>
            <p className="font-mono text-slate-400 text-[11px]">
              Silver thực nhận = (Số Điểm Đạt Được / 100) × 25.000.000 × Hệ Số Nhánh
            </p>
          </div>

          {/* Big CTA inside card */}
          <button
            onClick={onOpenRegister}
            className="w-full albion-btn-gold py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-gold-glow"
          >
            <Sparkles className="w-4 h-4" />
            Đăng Ký Tham Gia Ngay Qua Discord
          </button>

        </div>

      </div>

    </div>
  );
}
