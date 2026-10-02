import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, Shield, Flame, Sparkles, AlertCircle } from 'lucide-react';

export default function DiscordRegisterModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Discord Guild Link (TNC Guild ID: 712258265769050164 / Event Channel: 1555531659716198491)
  const DISCORD_LINK = 'https://discord.com/channels/712258265769050164/1555531659716198491';

  const TEMPLATE_SYNTAX = `In-game ID: [Tên nhân vật của bạn]
Loại Vũ Khí đăng ký: [VD: Holy Staff / Axe / Mace / ...]
Ảnh 1: [Link ảnh bảng Stat in-game thấy rõ Total Fame < 100M]
Ảnh 2: [Link ảnh bảng Destiny Board thể hiện rõ Spec hiện tại của nhánh đăng ký]
Ảnh 3: [Link ảnh spec quần áo các nhánh hiện tại]`;

  const handleCopy = () => {
    navigator.clipboard.writeText(TEMPLATE_SYNTAX);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl albion-card rounded-2xl p-5 sm:p-8 border-2 border-albion-gold shadow-2xl my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/80 hover:bg-slate-700 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-5 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Flame className="w-4 h-4 text-rose-400" />
            HƯỚNG DẪN ĐĂNG KÝ BATTLE PASS TNC
          </div>
          <h3 className="text-xl sm:text-2xl font-game font-bold text-white mt-1">
            GỬI THÔNG TIN ĐĂNG KÝ CHO BQT
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Sao chép cú pháp mẫu bên dưới và gửi vào kênh sự kiện trên Discord Guild TNC để Ban Tổ Chức duyệt!
          </p>
        </div>

        {/* Requirement Alert */}
        <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs flex items-start gap-2.5 mb-4">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong>Lưu ý quan trọng:</strong> Chỉ nhận đăng ký trong <strong>3 ngày đầu</strong> sự kiện. Dành riêng cho Newbie có <strong>Total Fame dưới 100M</strong>.
          </div>
        </div>

        {/* Syntax Code Block with 1-click Copy */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-300 uppercase tracking-wider text-[11px]">
              Cú Pháp Đăng Ký Chuẩn:
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold border border-amber-500/40 text-xs transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Đã sao chép!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Sao Chép Cú Pháp</span>
                </>
              )}
            </button>
          </div>

          <div className="relative rounded-xl bg-[#080c14] border border-slate-700/80 p-4 font-mono text-xs text-amber-100/90 leading-relaxed overflow-x-auto shadow-inner">
            <pre className="whitespace-pre-wrap">{TEMPLATE_SYNTAX}</pre>
          </div>
        </div>

        {/* 3 Step Guide */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-300 mb-6">
          <div className="p-3 rounded-xl bg-[#0e1424] border border-slate-800">
            <div className="font-bold text-amber-400 mb-1">1. Sao Chép Cú Pháp</div>
            <p className="text-[11px] text-slate-400">Bấm nút Sao chép cú pháp mẫu ở trên.</p>
          </div>
          <div className="p-3 rounded-xl bg-[#0e1424] border border-slate-800">
            <div className="font-bold text-amber-400 mb-1">2. Chuẩn Bị 3 Ảnh</div>
            <p className="text-[11px] text-slate-400">Chụp màn hình Stat Fame, Destiny Board và Spec quần áo.</p>
          </div>
          <div className="p-3 rounded-xl bg-[#0e1424] border border-slate-800">
            <div className="font-bold text-amber-400 mb-1">3. Gửi Vào Discord</div>
            <p className="text-[11px] text-slate-400">Bấm nút bên dưới để mở Discord và gửi bài đăng ký.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-3.5 px-6 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-500/25 transition-all text-center"
          >
            <ExternalLink className="w-4 h-4" />
            Mở Kênh Discord Đăng Ký Ngay
          </a>
          <button
            onClick={onClose}
            className="py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-all"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
}
