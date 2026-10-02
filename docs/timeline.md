# Project Timeline: Albion Guild Battle Pass (Guild TNC)

## Nhật Ký Tiến Độ Dự Án

### [2026-10-02] Cập Nhật Đường Dẫn Kênh Đăng Ký Discord Chính Xác
- **Lý do:** Cập nhật đường link điều hướng của nút Đăng ký sang đúng ID kênh chat sự kiện trong máy chủ Discord Guild TNC (`https://discord.com/channels/712258265769050164/1555531659716198491`).
- **Nội dung đã thực hiện:**
  - Sửa `DISCORD_LINK` trong `src/components/DiscordRegisterModal.jsx`.
  - Build kiểm thử bản static production thành công trong 4.4s.
  - Tự động push lên GitHub Pages.
- **Kết quả:** Người dùng bấm nút mở Discord sẽ nhảy chính xác vào kênh sự kiện của Guild TNC để gửi bài nộp.

---

## 📌 Mandatory Agent Handover (Mục Bàn Giao Bắt Buộc)

1. **Tình trạng hiện tại của dự án:**
   - Web App sự kiện đã hoàn thiện và cập nhật link kênh Discord đăng ký chính thức: `https://discord.com/channels/712258265769050164/1555531659716198491`.
   - Giao diện tối giản, tối ưu 100% cho PC và Mobile.
   - GitHub Pages URL: `https://kudominer.github.io/Albion_Guild_BattlePass/`.

2. **Bối cảnh và dự định kế tiếp của user:**
   - Sẵn sàng chia sẻ link và phát động sự kiện cho toàn thể thành viên Guild TNC tham gia.

3. **Hướng dẫn kỹ thuật nhanh cho Agent tiếp theo:**
   - Thư mục dự án: `c:\Users\User\Documents\CODE\Albion_Guild_BattlePass`.
   - Chạy dev server: `npm run dev`.
   - Build production: `npm run build`.
