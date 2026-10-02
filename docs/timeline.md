# Project Timeline: Albion Guild Battle Pass (Guild TNC)

## Nhật Ký Tiến Độ Dự Án

### [2026-10-02] Chuẩn Hóa Thông Tin Ban Tổ Chức (Guild TNC)
- **Lý do:** Điều chỉnh chính xác thông tin đơn vị tổ chức: Ban Tổ Chức là tập thể **Ban Tổ Chức Guild TNC**, cá nhân `[TNC] Kudo2ten k2` là người phụ trách duyệt bài trên Discord.
- **Nội dung đã thực hiện:**
  - Cập nhật các vị trí hiển thị trong `Navbar.jsx`, `OrnateBattlePassBoard.jsx`, `RulesModal.jsx`, `DiscordRegisterModal.jsx`.
  - Build kiểm thử thành công trong 3.38s.
  - Tự động push lên GitHub Pages.
- **Kết quả:** Đã triển khai bản cập nhật chuẩn xác nhất lên trang live.

### [2026-10-02] Bổ Sung Thông Điệp Sứ Mệnh Khích Lệ Newbie & Đồng Hành Cùng Guild TNC
- **Lý do:** Làm nổi bật mục đích sự kiện dành riêng cho Newbie có Total Fame dưới 100M nhằm khích lệ tìm hiểu sâu về game, mạnh dạn tham gia content và gắn bó lâu dài cùng Guild TNC.
- **Nội dung đã thực hiện:**
  - `OrnateBattlePassBoard.jsx`: Thêm banner slogan mạ vàng trang nhã ngay dưới Hero Title.
  - `EventDetailsGrid.jsx`: Bổ sung Card Sứ Mệnh & Tinh Thần Sự Kiện với viền vàng và icon kết nối.
  - `RulesModal.jsx`: Thêm phần "🤝 SỨ MỆNH & Ý NGHĨA SỰ KIỆN" ở đầu văn bản thể lệ.
  - `docs/features.md`: Cập nhật mục tiêu và sứ mệnh sự kiện.
  - Build production thành công 100% không cảnh báo lỗi.
- **Kết quả:** Đã đồng bộ và sẵn sàng phục vụ người dùng.

---

## 📌 Mandatory Agent Handover (Mục Bàn Giao Bắt Buộc)

1. **Tình trạng hiện tại của dự án:**
   - Web App sự kiện ZERO to HERO đã hoàn thiện 100% cả về tính năng, thẩm mỹ phong cách Albion, mô phỏng chia quỹ 600M và thông điệp sứ mệnh gắn kết Newbie.
   - GitHub Pages URL: `https://kudominer.github.io/Albion_Guild_BattlePass/`.

2. **Bối cảnh và dự định kế tiếp của user:**
   - Phát động chính thức sự kiện tới các thành viên Guild TNC qua link web và kênh Discord.

3. **Hướng dẫn kỹ thuật nhanh cho Agent tiếp theo:**
   - Thư mục dự án: `c:\Users\User\Documents\CODE\Albion_Guild_BattlePass`.
   - Chạy dev server: `npm run dev`.
   - Build production: `npm run build`.
   - Quy trình deploy tự động qua GitHub Actions khi push vào nhánh `main`.

