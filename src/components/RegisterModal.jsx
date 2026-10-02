import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { WEAPON_TREES } from '../data/weapons';
import { X, Shield, Upload, AlertCircle, CheckCircle, Sparkles } from 'lucide-react';

export default function RegisterModal({ isOpen, onClose }) {
  const { registerNewMember } = useAuth();

  const [formData, setFormData] = useState({
    ingame_name: '',
    registered_tree_id: 'holy',
    total_fame: '',
    proof_stat_url: '',
    proof_destiny_url: '',
    proof_armor_url: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.ingame_name.trim()) {
      setErrorMsg('Vui lòng nhập Tên nhân vật In-game');
      return;
    }

    const fameNum = Number(formData.total_fame);
    if (!fameNum || fameNum >= 100000000) {
      setErrorMsg('Sự kiện chỉ dành cho Newbie có Total Fame dưới 100M (100.000.000)!');
      return;
    }

    registerNewMember(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl albion-card rounded-2xl p-6 sm:p-8 border border-albion-gold/60 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            Cổng Đăng Ký Sự Kiện Guild TNC
          </div>
          <h3 className="text-2xl font-game font-bold text-white mt-1">
            ĐĂNG KÝ BATTLE PASS CÀY FAME
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Hạn đăng ký: Trong 3 ngày đầu sự kiện · Yêu cầu Total Fame &lt; 100M
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Đăng Ký Thành Công!</h4>
            <p className="text-xs text-slate-300">
              Hồ sơ của bạn đã được gửi tới Ban Quản Trị TNC để duyệt. Bạn có thể bắt đầu cày spec ngay bây giờ!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-950/60 border border-rose-500/50 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* In-game ID */}
            <div>
              <label className="block text-slate-300 font-bold mb-1.5 uppercase text-[11px]">
                In-game ID (Tên nhân vật) <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="VD: KudoShinichiVN"
                value={formData.ingame_name}
                onChange={(e) => setFormData({ ...formData, ingame_name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#0b0f19] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
              />
            </div>

            {/* Total Fame */}
            <div>
              <label className="block text-slate-300 font-bold mb-1.5 uppercase text-[11px]">
                Total Fame hiện tại (Phải &lt; 100.000.000) <span className="text-rose-400">*</span>
              </label>
              <input
                type="number"
                required
                max="99999999"
                placeholder="VD: 45000000 (45M Fame)"
                value={formData.total_fame}
                onChange={(e) => setFormData({ ...formData, total_fame: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#0b0f19] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
              />
            </div>

            {/* Weapon Tree Selector */}
            <div>
              <label className="block text-slate-300 font-bold mb-1.5 uppercase text-[11px]">
                Dòng Vũ Khí Đăng Ký (Duy nhất 1 dòng) <span className="text-rose-400">*</span>
              </label>
              <select
                value={formData.registered_tree_id}
                onChange={(e) => setFormData({ ...formData, registered_tree_id: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#0b0f19] border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400 text-xs cursor-pointer"
              >
                {WEAPON_TREES.map(t => (
                  <option key={t.id} value={t.id}>
                    {t.icon} {t.name} (Hệ số x{t.multiplier})
                  </option>
                ))}
              </select>
            </div>

            {/* Verification Images / Links */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <span className="block font-bold text-amber-300 uppercase text-[11px]">
                Link Ảnh Minh Chứng Baseline Ban Đầu
              </span>

              <div>
                <label className="block text-slate-400 mb-1">
                  Ảnh 1: Bảng Stat in-game (Thấy rõ Total Fame)
                </label>
                <input
                  type="url"
                  placeholder="https://imgur.com/link_anh_stat..."
                  value={formData.proof_stat_url}
                  onChange={(e) => setFormData({ ...formData, proof_stat_url: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0b0f19] border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">
                  Ảnh 2: Bảng Destiny Board thể hiện Spec hiện tại nhánh đăng ký
                </label>
                <input
                  type="url"
                  placeholder="https://imgur.com/link_anh_destiny..."
                  value={formData.proof_destiny_url}
                  onChange={(e) => setFormData({ ...formData, proof_destiny_url: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0b0f19] border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">
                  Ảnh 3: Bảng Spec quần áo các nhánh hiện tại
                </label>
                <input
                  type="url"
                  placeholder="https://imgur.com/link_anh_armor..."
                  value={formData.proof_armor_url}
                  onChange={(e) => setFormData({ ...formData, proof_armor_url: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0b0f19] border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full albion-btn-gold py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Xác Nhận Đăng Ký Sự Kiện
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
