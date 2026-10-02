import React from 'react';
import { X, BookOpen, Trophy, Shield, Flame, CheckCircle, Sparkles, AlertCircle, Calendar } from 'lucide-react';

export default function RulesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl albion-card rounded-2xl p-5 sm:p-8 border border-albion-gold shadow-2xl my-auto">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-5 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Flame className="w-4 h-4 text-rose-400" />
            THÔNG BÁO CHÍNH THỨC TỪ BAN TỔ CHỨC GUILD TNC
          </div>
          <h3 className="text-xl sm:text-2xl font-game font-bold text-white mt-1">
            THỂ LỆ EVENT ZERO TO HERO CÀY FAME (TỔNG GIẢI 600M+ SILVER)
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Nhân dịp nhà phát hành Albion mở sự kiện Fame Rush (Buff +25% Fame) 10 ngày (từ 01/10 đến 11/10)
          </p>
        </div>

        {/* Content */}
        <div className="space-y-5 max-h-[65vh] overflow-y-auto pr-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          {/* Section 1 */}
          <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-2">
            <h4 className="font-bold text-amber-400 uppercase text-xs flex items-center gap-1.5">
              📌 1. ĐIỀU KIỆN & THỜI GIAN ĐĂNG KÝ
            </h4>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li><strong>Thời gian đăng ký:</strong> Đến hết ngày <strong>04/10/2026</strong>.</li>
              <li><strong>Đối tượng tham gia:</strong> Newbie có <strong>Total Fame dưới 100M</strong>.</li>
              <li><strong>Thời gian sự kiện:</strong> Từ giờ đến <strong>hết tháng 10/2026</strong> sẽ tổng kết và trao thưởng.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-2">
            <h4 className="font-bold text-amber-400 uppercase text-xs flex items-center gap-1.5">
              💰 2. CƠ CHẾ VÀ GIẢI THƯỞNG
            </h4>
            <ul className="list-disc list-inside space-y-1.5 text-slate-300">
              <li>Hoàn thành quest và nhận thưởng cuối sự kiện.</li>
              <li>Mỗi người tham gia đăng ký <strong>1 dòng vũ khí duy nhất</strong> và tất cả quần áo, sau đó nâng spec.</li>
              <li>
                <strong>Cơ chế chia quỹ 600M Silver:</strong> Sau 3 ngày sẽ tính tổng số người đăng ký tham gia và <strong>600M Silver sẽ được chia đều</strong> cho từng người đã đăng ký.
              </li>
              <li><strong>Quy đổi điểm:</strong> Hoàn thành toàn bộ mốc Battle Pass sẽ đạt tối đa <strong>100 điểm</strong> (tương ứng 100% gói thưởng cá nhân). Đạt bao nhiêu điểm sẽ nhận % Silver tương ứng từ hạn mức cá nhân.</li>
              <li><strong>Hệ số ưu đãi nhánh:</strong>
                <ul className="list-none pl-4 pt-1 space-y-1">
                  <li>🌿 Dòng Heal (Holy, Nature): <strong className="text-emerald-400">x1.2</strong> (Ưu đãi +20%)</li>
                  <li>🛡️ Dòng Hammer, Mace, Arcane: <strong className="text-sky-400">x1.1</strong> (Ưu đãi +10%)</li>
                  <li>⚔️ Các dòng khác: <strong className="text-amber-400">x1.0</strong></li>
                </ul>
              </li>
              <li><strong>Giải chính:</strong> Tiêu chuẩn <strong>25M / người</strong> (khi đạt 100 điểm thưởng).</li>
              <li><strong>Giải phụ danh giá:</strong>
                <ul className="list-none pl-4 pt-1 space-y-1">
                  <li>⚡ Đạt <strong>80đ sớm nhất</strong>: Nhận ngay <strong>1 Shadowcaller 5.4 att 3 dòng</strong>.</li>
                  <li>👑 Đạt <strong>100đ sớm nhất</strong>: Nhận ngay <strong>1 Vũ khí 8.3 tự chọn</strong>.</li>
                  <li>🌟 Với mỗi nhánh vũ khí độc nhất: Người đạt <strong>50đ đầu tiên</strong> nhận <strong>5.000.000 Silver</strong>.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="p-4 rounded-xl bg-[#0b0f19] border border-slate-800 space-y-2">
            <h4 className="font-bold text-amber-400 uppercase text-xs flex items-center gap-1.5">
              🏆 3. BẢNG TÍNH ĐIỂM (0 - 100 ĐIỂM)
            </h4>
            <div className="space-y-2">
              <div>
                <strong className="text-white">Cày Vũ Khí Lẻ (Tối đa 48 điểm):</strong>
                <p className="text-slate-400">Đạt 100 Spec mỗi cây = <strong>+6 điểm / cây</strong> (Cày đủ 8 cây = 48 điểm).</p>
              </div>
              <div>
                <strong className="text-white">Mốc Tổng Nhánh Vũ Khí (Tối đa 32 điểm):</strong>
                <p className="text-slate-400">Đạt tổng 500 Spec toàn nhánh = <strong>+16 điểm</strong>.<br />Đạt tổng 800 Spec toàn nhánh (Full 8 cây) = <strong>+16 điểm nữa</strong> (Tổng 32 điểm).</p>
              </div>
              <div>
                <strong className="text-white">Mốc Trang Bị Đi Kèm (Tối đa 20 điểm):</strong>
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
              📝 4. CÁCH THỨC ĐĂNG KÝ
            </h4>
            <p className="text-slate-400">
              Comment trực tiếp vào bài viết kênh <strong>ZERO to HERO</strong> trên Discord Guild TNC theo đúng cú pháp:
            </p>
            <pre className="p-3 rounded-lg bg-[#080c14] font-mono text-xs text-amber-200 border border-slate-700/80 whitespace-pre-wrap">
In-game ID: [Tên nhân vật]
Loại Vũ Khí đăng ký: 
Ảnh 1: Bảng Stat in-game (thấy rõ Total Fame).
Ảnh 2: Bảng Destiny Board thể hiện rõ Spec hiện tại của nhánh đăng ký.
Ảnh : spec quần áo các nhánh
Tag duyệt: &lt;@778593128566882314&gt; (@[TNC] Kudo2ten k2)
            </pre>
          </div>

        </div>

        {/* Footer Action */}
        <div className="mt-5 pt-4 border-t border-slate-800 flex justify-end">
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
