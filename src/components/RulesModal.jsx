import React from 'react';
import { X, BookOpen, Trophy, Shield, Flame, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';

export default function RulesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl albion-card rounded-2xl p-6 sm:p-8 border border-albion-gold shadow-2xl my-8">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Flame className="w-4 h-4 text-rose-400" />
            THÔNG BÁO BQT GUILD TNC
          </div>
          <h3 className="text-2xl font-game font-bold text-white mt-1">
            THỂ LỆ EVENT BATTLE PASS CÀY FAME (01/10 - 11/10)
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Tổng giải thưởng hơn 600.000.000 Silver nhân dịp Buff +25% Fame
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 max-h-[65vh] overflow-y-auto pr-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          {/* Section 1 */}
          <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-2">
            <h4 className="font-bold text-amber-400 uppercase text-xs flex items-center gap-1.5">
              📌 1. ĐIỀU KIỆN & THỜI GIAN ĐĂNG KÝ
            </h4>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li><strong>Thời gian đăng ký:</strong> Chỉ nhận đăng ký trong <strong>3 ngày</strong> kể từ khi mở thông báo.</li>
              <li><strong>Đối tượng tham gia:</strong> Newbie có <strong>Total Fame dưới 100M</strong>.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-2">
            <h4 className="font-bold text-amber-400 uppercase text-xs flex items-center gap-1.5">
              💰 2. CƠ CHẾ VÀ GIẢI THƯỞNG
            </h4>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li>Mỗi người tham gia đăng ký <strong>1 dòng vũ khí duy nhất</strong> và tất cả quần áo, sau đó nâng spec.</li>
              <li><strong>Quy đổi điểm:</strong> Hoàn thành toàn bộ mốc Battle Pass sẽ đạt tối đa <strong>100 điểm</strong> (tương ứng 100% gói thưởng cá nhân). Đạt bao nhiêu điểm sẽ nhận % Silver tương ứng từ hạn mức.</li>
              <li><strong>Hệ số ưu đãi nhánh:</strong>
                <ul className="list-none pl-4 pt-1 space-y-1">
                  <li>🌿 Dòng Heal (Holy Staff, Nature Staff): <strong className="text-emerald-400">x1.2</strong> (Tối đa 30M Silver)</li>
                  <li>🛡️ Dòng Hammer, Mace, Arcane: <strong className="text-sky-400">x1.1</strong> (Tối đa 27.5M Silver)</li>
                  <li>⚔️ Các dòng khác: <strong className="text-amber-400">x1.0</strong> (Tối đa 25M Silver)</li>
                </ul>
              </li>
              <li><strong>Giải chính:</strong> <strong>25.000.000 Silver / người</strong> (khi đạt 100 điểm thưởng chuẩn).</li>
              <li><strong>Giải phụ vinh danh:</strong>
                <ul className="list-none pl-4 pt-1 space-y-1">
                  <li>⚡ Đạt <strong>80đ sớm nhất</strong>: Nhận ngay <strong>1 Shadowcaller 5.4 Awakened (3 dòng att)</strong>.</li>
                  <li>👑 Đạt <strong>100đ sớm nhất</strong>: Nhận ngay <strong>1 Vũ khí 8.3 tự chọn</strong>.</li>
                  <li>🌟 Với mỗi nhánh vũ khí độc nhất: Người đạt <strong>50đ đầu tiên</strong> nhận ngay <strong>5.000.000 Silver</strong>.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-2">
            <h4 className="font-bold text-amber-400 uppercase text-xs flex items-center gap-1.5">
              🏆 3. BẢNG TÍNH ĐIỂM BATTLE PASS (0 - 100 ĐIỂM)
            </h4>
            <div className="space-y-2">
              <div>
                <strong className="text-white">1. Cày Vũ Khí Lẻ (Tối đa 48 điểm):</strong>
                <p className="text-slate-400">Đạt 100 Spec mỗi cây = <strong>+6 điểm / cây</strong> (Cày đủ 8 cây = 48 điểm).</p>
              </div>
              <div>
                <strong className="text-white">2. Mốc Tổng Nhánh Vũ Khí (Tối đa 32 điểm):</strong>
                <p className="text-slate-400">Đạt tổng 500 Spec toàn nhánh = <strong>+16 điểm</strong>.<br />Đạt tổng 800 Spec toàn nhánh (Full 8 cây) = <strong>+16 điểm nữa</strong> (Tổng 32 điểm).</p>
              </div>
              <div>
                <strong className="text-white">3. Mốc Trang Bị Đi Kèm (Tối đa 20 điểm):</strong>
                <p className="text-slate-400">500 Spec dòng Giày & Mũ = <strong>+10 điểm</strong> (có thể cộng dồn từ nhiều nhánh).<br />500 Spec dòng Áo = <strong>+10 điểm</strong> (có thể cộng dồn từ nhiều nhánh).</p>
              </div>
              <div className="p-2 rounded bg-amber-950/40 border border-amber-500/30 text-amber-300 font-bold text-center">
                👉 Tổng cộng: 100 điểm (Tương ứng 100% gói thưởng cá nhân)
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-2">
            <h4 className="font-bold text-amber-400 uppercase text-xs flex items-center gap-1.5">
              📝 4. CÁCH THỨC ĐĂNG KÝ VÀ MINH CHỨNG
            </h4>
            <p className="text-slate-400">
              Đăng ký trực tiếp trên cổng Web này hoặc gửi minh chứng gồm 3 ảnh:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-slate-300">
              <li>Ảnh 1: Bảng Stat in-game (thấy rõ Total Fame &lt; 100M).</li>
              <li>Ảnh 2: Bảng Destiny Board thể hiện rõ Spec hiện tại của nhánh đăng ký.</li>
              <li>Ảnh 3: Bảng Spec quần áo các nhánh.</li>
            </ol>
          </div>

        </div>

        {/* Footer Action */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="albion-btn-gold px-6 py-2.5 rounded-xl font-bold text-xs"
          >
            Đã Hiểu Thể Lệ ✓
          </button>
        </div>

      </div>
    </div>
  );
}
