# Project Timeline: Albion Guild Battle Pass (Guild TNC)

## Nhật Ký Tiến Độ Dự Án

### [2026-10-02] Khởi tạo và Hoàn thiện Web Portal Battle Pass Đua Top Cày Fame
- **Lý do:** Nhà phát hành Albion mở sự kiện Fame Rush (Buff +25% Fame) 10 ngày từ 01/10 đến 11/10. BQT Guild TNC tổ chức Event Đua Top Cày Fame Battle Pass với tổng giải hơn 600M+ Silver dành riêng cho Newbie có Total Fame < 100M.
- **Nội dung đã thực hiện:**
  - Thiết kế và xây dựng Web Portal hoàn chỉnh bằng React 18, Vite, Tailwind CSS, Lucide Icons, Canvas Confetti.
  - Số hóa 100% thể lệ tính điểm (Thang 0-100 điểm, 48đ vũ khí lẻ + 32đ mốc nhánh + 20đ trang bị).
  - Tích hợp hệ số nhân ưu đãi x1.2 (Heal) và x1.1 (Tank/Arcane), tự động tính số Silver thực nhận.
  - Thiết kế bảng xếp hạng Leaderboard với bục vinh danh giải phụ (Shadowcaller 5.4, Vũ khí 8.3, 5M nhánh).
  - Xây dựng Cổng Quản Trị Officer để BQT duyệt 3 ảnh minh chứng stat ban đầu.
  - Cấu hình tự động hóa GitHub Actions CI/CD (`.github/workflows/deploy.yml`) và thiết lập `base: './'` trong `vite.config.js` để triển khai GitHub Pages 1-click tự động.
- **Kết quả:** Build thành công 100% không lỗi cú pháp, ứng dụng chạy cực nhẹ và mượt mà trên cả PC và thiết bị di động.

---

## 📌 Mandatory Agent Handover (Mục Bàn Giao Bắt Buộc)

1. **Tình trạng hiện tại của dự án:**
   - Dự án đã hoàn thiện toàn bộ mã nguồn tại thư mục `Albion_Guild_BattlePass`.
   - Đã cấu hình xong GitHub Actions workflow deploy GitHub Pages tại `.github/workflows/deploy.yml`.
   - Các tính năng Spec Tracker, Battle Pass Progress, Leaderboard, Officer Portal, Register Modal, Rules Modal hoạt động hoàn hảo.
   - Bản build sản xuất (`npm run build`) tương thích hoàn toàn với đường dẫn tương đối `./` trên GitHub Pages.

2. **Bối cảnh và dự định kế tiếp của user:**
   - User chỉ cần tạo repo trên GitHub và push mã nguồn lên là GitHub Pages sẽ tự động kích hoạt và phát hành trang web.

3. **Hướng dẫn kỹ thuật nhanh cho Agent tiếp theo:**
   - Thư mục dự án: `c:\Users\User\Documents\CODE\Albion_Guild_BattlePass`.
   - Chạy dev server: `cd Albion_Guild_BattlePass && npm run dev`.
   - Build production: `npm run build`.
   - File cấu hình GitHub Actions: `.github/workflows/deploy.yml`.
