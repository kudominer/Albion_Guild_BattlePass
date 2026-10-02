import React, { useState } from 'react';
import { Trophy, Crown, Zap, Coins, Shield, HeartHandshake, Sparkles, AlertCircle, CheckCircle2, Users, Calculator, Sliders, Calendar } from 'lucide-react';

// 6 Thành viên đã được duyệt hợp lệ chính thức từ sự kiện trước
const VERIFIED_MEMBERS = [
  { id: 1, name: 'wuovan 2k1', role: 'Đã duyệt hợp lệ', icon: '🛡️' },
  { id: 2, name: 'vantablackc 2k7', role: 'Đã duyệt hợp lệ', icon: '⚔️' },
  { id: 3, name: 'CunsNyan 2k2', role: 'Đã duyệt hợp lệ', icon: '🌿' },
  { id: 4, name: 'llMoZunll 2k2', role: 'Đã duyệt hợp lệ', icon: '✨' },
  { id: 5, name: 'zVuz 199x', role: 'Đã duyệt hợp lệ', icon: '🔮' },
  { id: 6, name: 'Datbph2021 97', role: 'Đã duyệt hợp lệ', icon: '🔨' }
];

export default function EventDetailsGrid({ onOpenRegister }) {
  // Bộ ước tính chia đều quỹ 600M Silver
  const [estimatedParticipants, setEstimatedParticipants] = useState(24);
  const TOTAL_POOL = 600000000; // 600M Silver

  // Hạn mức cơ sở cho mỗi người khi đạt 100 điểm
  const baseRewardPerUser = Math.round(TOTAL_POOL / estimatedParticipants);
  const healReward = Math.round(baseRewardPerUser * 1.2);
  const tankReward = Math.round(baseRewardPerUser * 1.1);

  const formatSilverShort = (amount) => {
    return `${(amount / 1000000).toFixed(1)}M Silver`;
  };

  return (
    <div className="space-y-8 my-8">
      
      {/* SECTION 1: EVENT MISSION & SPIRIT BANNER (Sứ Mệnh Khích Lệ Newbie) */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-950/60 via-[#141d30] to-amber-950/60 border-2 border-amber-500/50 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-700 p-0.5 shadow-gold-glow shrink-0 flex items-center justify-center">
            <div className="w-full h-full bg-[#0d1322] rounded-[14px] flex items-center justify-center text-2xl">
              🤝
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider font-game">
                ✦ SỨ MỆNH SỰ KIỆN TỪ BAN TỔ CHỨC GUILD TNC
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/40">
                Newbie &lt; 100M Fame
              </span>
            </div>
            <p className="text-xs sm:text-sm text-amber-100 font-medium leading-relaxed">
              Sự kiện được tổ chức nhằm <strong>khích lệ các anh em Newbie tìm hiểu sâu về game, tự tin tham gia mọi hoạt động content</strong> và <strong>đồng hành bền vững cùng TNC</strong> trên những chặng đường chinh phục lục địa Albion sắp tới!
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: 3 SPECIAL PRIZES SHOWCASE PODIUM (Vinh Danh Giải Phụ) */}
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
                Trang bị thần khí Attuned 3 dòng chỉ số chiến đấu, trao ngay cho chiến thần đầu tiên cán mốc 80 điểm!
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
                Phần thưởng cao quý nhất dành cho người đầu tiên hoàn thành trọn vẹn 100% Sổ Tay Tu Luyện trong sự kiện!
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
                Với mỗi nhánh vũ khí độc nhất (Cung, Kiếm, Rìu, Dao, Gậy...), người đầu tiên đạt mốc 50 điểm nhận ngay 5M Silver!
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-emerald-900/50 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Áp dụng:</span>
              <span className="font-bold text-emerald-300 font-mono">Người Tiên Phong Nhánh</span>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 2: BỘ ƯỚC TÍNH CHIA ĐỀU QUỸ 600M SILVER (PHƯƠNG ÁN 2 - INTERACTIVE SIMULATOR) */}
      <div className="albion-card rounded-2xl p-6 sm:p-8 border-2 border-amber-500/60 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              MÔ PHỎNG CHIA ĐỀU QUỸ 600M SILVER
            </div>
            <h4 className="text-xl sm:text-2xl font-game font-bold text-white mt-1">
              HẠN MỨC THƯỞNG DỰ KIẾN THEO SỐ NGƯỜI ĐĂNG KÝ
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              "Sau 3 ngày sẽ tính tổng số người đăng ký tham gia và 600M Silver sẽ được chia đều cho từng người đã đăng ký."
            </p>
          </div>

          <div className="bg-[#0b0f19] px-4 py-2 rounded-xl border border-slate-700/80 text-right shrink-0">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">Tổng Quỹ Sự Kiện</div>
            <div className="text-xl font-black font-mono gold-text-gradient">600.000.000 Silver</div>
          </div>
        </div>

        {/* Interactive Slider */}
        <div className="my-6 p-4 rounded-xl bg-[#090d18] border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-amber-400" />
              Kéo để mô phỏng tổng số người đăng ký hợp lệ:
            </span>
            <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-mono font-bold text-sm border border-amber-500/40">
              {estimatedParticipants} Người Tham Gia
            </span>
          </div>

          <input
            type="range"
            min="15"
            max="40"
            value={estimatedParticipants}
            onChange={(e) => setEstimatedParticipants(Number(e.target.value))}
            className="w-full accent-amber-400 bg-slate-800 h-2.5 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
            <span>15 người (~40M/người)</span>
            <span>24 người (Chuẩn 25M/người)</span>
            <span>40 người (~15M/người)</span>
          </div>
        </div>

        {/* Calculated Rewards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs">
          
          {/* Heal Multiplier */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/50 to-[#0e1726] border border-emerald-500/50">
            <div className="font-bold text-emerald-300 flex items-center gap-1.5 mb-1">
              <span>🌿</span>
              <span>Dòng Heal (Hệ số x1.2)</span>
            </div>
            <div className="text-xl font-black font-mono text-emerald-400">
              {formatSilverShort(healReward)}
            </div>
            <div className="text-[10px] text-slate-400 mt-1">Holy Staff, Nature Staff (Ưu đãi +20%)</div>
          </div>

          {/* Tank / Support Multiplier */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-sky-950/50 to-[#0e1726] border border-sky-500/50">
            <div className="font-bold text-sky-300 flex items-center gap-1.5 mb-1">
              <span>🛡️</span>
              <span>Dòng Tank / Arcane (Hệ số x1.1)</span>
            </div>
            <div className="text-xl font-black font-mono text-sky-400">
              {formatSilverShort(tankReward)}
            </div>
            <div className="text-[10px] text-slate-400 mt-1">Hammer, Mace, Arcane Staff (Ưu đãi +10%)</div>
          </div>

          {/* DPS / Other */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-950/50 to-[#0e1726] border border-amber-500/50">
            <div className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
              <span>⚔️</span>
              <span>Dòng DPS / Khác (Hệ số x1.0)</span>
            </div>
            <div className="text-xl font-black font-mono text-amber-400">
              {formatSilverShort(baseRewardPerUser)}
            </div>
            <div className="text-[10px] text-slate-400 mt-1">Cung, Kiếm, Rìu, Dao, Nguyền, Lửa, Băng...</div>
          </div>

        </div>
      </div>

      {/* SECTION 3: 6 VERIFIED PARTICIPANTS HALL OF FAME (Danh Sách Đã Duyệt Hợp Lệ) */}
      <div className="albion-card rounded-2xl p-6 border border-emerald-500/50 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              DANH SÁCH THÀNH VIÊN ĐÃ ĐƯỢC DUYỆT HỢP LỆ
            </div>
            <h4 className="text-lg font-game font-bold text-white mt-0.5">
              CHIẾN THẦN THAM GIA MẶC ĐỊNH TỪ SỰ KIỆN TRƯỚC
            </h4>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-xs font-bold w-fit">
            6 Thành Viên Xác Nhận ✓
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
          {VERIFIED_MEMBERS.map((m) => (
            <div key={m.id} className="p-3 rounded-xl bg-[#0b0f19] border border-emerald-500/30 text-center flex flex-col items-center justify-center">
              <div className="text-2xl mb-1">{m.icon}</div>
              <div className="font-bold text-white text-xs truncate w-full" title={m.name}>
                @{m.name}
              </div>
              <div className="text-[9px] text-emerald-400 font-semibold mt-1">
                Đã Duyệt ✓
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: BẢNG TÍNH ĐIỂM (0 - 100 ĐIỂM) */}
      <div className="albion-card rounded-2xl p-6 sm:p-8 border border-albion-border">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
          <Shield className="w-4 h-4" />
          BẢNG TÍNH ĐIỂM SỔ TAY TU LUYỆN (0 - 100 ĐIỂM)
        </div>
        <h4 className="text-xl sm:text-2xl font-game font-bold text-white mb-4">
          CƠ CHẾ TÍCH ĐIỂM HOÀN THÀNH QUEST
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          
          {/* Item 1: Vũ khí lẻ */}
          <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="font-bold text-white mb-1.5 flex items-center justify-between">
                <span>1. Cày Vũ Khí Lẻ</span>
                <span className="font-mono font-bold text-amber-400">+48 Điểm</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Đạt 100 Spec mỗi cây = <strong className="text-amber-300">+6 điểm / cây</strong> (Cày đủ 8 cây trong nhánh = 48 điểm).
              </p>
            </div>
            <div className="mt-3 text-[10px] text-slate-500 font-mono">Tối đa 8 cây × 6đ</div>
          </div>

          {/* Item 2: Mốc tổng nhánh */}
          <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="font-bold text-white mb-1.5 flex items-center justify-between">
                <span>2. Mốc Toàn Nhánh</span>
                <span className="font-mono font-bold text-amber-400">+32 Điểm</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Đạt tổng 500 Spec toàn nhánh = <strong className="text-amber-300">+16 điểm</strong>.<br />
                Đạt tổng 800 Spec toàn nhánh (Full 8 cây) = <strong className="text-amber-300">+16 điểm nữa</strong>.
              </p>
            </div>
            <div className="mt-3 text-[10px] text-slate-500 font-mono">16đ (500 spec) + 16đ (800 spec)</div>
          </div>

          {/* Item 3: Mốc trang bị đi kèm */}
          <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="font-bold text-white mb-1.5 flex items-center justify-between">
                <span>3. Trang Bị Đi Kèm</span>
                <span className="font-mono font-bold text-emerald-400">+20 Điểm</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                500 Spec dòng Giày & Mũ = <strong className="text-emerald-300">+10 điểm</strong>.<br />
                500 Spec dòng Áo = <strong className="text-emerald-300">+10 điểm</strong> (cộng dồn từ nhiều nhánh).
              </p>
            </div>
            <div className="mt-3 text-[10px] text-slate-500 font-mono">10đ (Giày/Mũ) + 10đ (Áo)</div>
          </div>

        </div>

        <div className="mt-5 p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 text-center text-xs text-amber-300 font-bold">
          👉 Tổng cộng: 100 ĐIỂM (Tương ứng 100% gói thưởng Silver cá nhân nhận vào cuối sự kiện)
        </div>
      </div>

    </div>
  );
}
