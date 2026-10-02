# Project Timeline: Albion Guild Battle Pass (Guild TNC)

## Nhật Ký Tiến Độ Dự Án

### [2026-10-02] Chuẩn Hóa Thông Tin Ban Tổ Chức (Guild TNC)
- **Lý do:** Điều chỉnh chính xác thông tin đơn vị tổ chức: Ban Tổ Chức là tập thể **Ban Tổ Chức Guild TNC**, cá nhân `[TNC] Kudo2ten k2` là người phụ trách duyệt bài trên Discord.
- **Nội dung đã thực hiện:**
  - Cập nhật các vị trí hiển thị trong `Navbar.jsx`, `OrnateBattlePassBoard.jsx`, `RulesModal.jsx`, `DiscordRegisterModal.jsx`.
  - Build kiểm thử thành công trong 3.38s.
  - Tự động push lên GitHub Pages.
### [2026-10-02] Đưa Banner Sứ Mệnh Newbie Lên Đầu Trang & Khắc Phục Lỗi Dấu Tiếng Việt
- **Lý do:** Đưa câu thông điệp chính thức của BTC lên vị trí đầu trang đập ngay vào mắt người xem với kích thước lớn nổi bật, đồng thời khắc phục lỗi hiển thị dấu tiếng Việt ở các tiêu đề (`KHỞI ĐẦU`, `TIẾN ĐỘ`...).
- **Nội dung đã thực hiện:**
  - `OrnateBattlePassBoard.jsx`: Thêm Top Mission Banner Hoàng Kim kích thước lớn, viền sáng 35px glow, icon chiến binh ⚔️, làm nổi bật thông điệp *"Sự kiện dành cho Newbie dưới 100m Total fame để khích lệ Newbie tìm hiểu game, tham gia content và đồng hành cùng TNC trên những chặng đường sắp tới."*.
  - `index.html` & `tailwind.config.js`: Thêm Google Font `Montserrat` và `Inter` hỗ trợ đầy đủ bộ ký tự tiếng Việt UTF-8 (Vietnamese subset) kết hợp `Cinzel`.
  - Thay thế toàn bộ class font tiếng Việt bị vỡ dấu sang `font-display font-black` sắc nét, hiển thị hoàn hảo.
  - Build production hoàn tất và push trực tiếp lên GitHub Pages.
- **Kết quả:** Giao diện đầu trang cực kỳ ấn tượng, chữ to rõ ràng, dấu tiếng Việt mượt mà 100%.

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

