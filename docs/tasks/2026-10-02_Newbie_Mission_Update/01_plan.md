# Implementation Plan: Bổ sung Thông Điệp Sứ Mệnh Khích Lệ Newbie Guild TNC

## 1. Mục tiêu
Bổ sung thông điệp chính thức từ Ban Tổ Chức:
> *"Sự kiện dành cho Newbie dưới 100m Total fame để khích lệ Newbie tìm hiểu game, tham gia content và đồng hành cùng TNC trên những chặng đường sắp tới."*

vào các vị trí chiến lược trên trang web theo **Phương án 3 (Kết hợp toàn diện)**.

---

## 2. Chi tiết các thay đổi đã thực hiện

### A. Giao diện Hero Header (`src/components/OrnateBattlePassBoard.jsx`)
- Thêm banner thông điệp mạ vàng trang nhã ngay bên dưới Sub-title:
  - Icon: 🛡️
  - Nội dung: *"Dành cho Newbie < 100M Total Fame · Khích lệ tìm hiểu game, tham gia content & đồng hành cùng TNC!"*

### B. Khung Thể Lệ & Sứ Mệnh (`src/components/EventDetailsGrid.jsx`)
- Bổ sung Card **"✦ SỨ MỆNH SỰ KIỆN TỪ BAN TỔ CHỨC GUILD TNC"**:
  - Nhấn mạnh đối tượng Newbie `< 100M Total Fame`.
  - Làm nổi bật thông điệp truyền lửa và đồng hành cùng Guild.

### C. Modal Điều Lệ Chính Thức (`src/components/RulesModal.jsx`)
- Bổ sung phần mở đầu **"🤝 SỨ MỆNH & Ý NGHĨA SỰ KIỆN"** trước Điều 1 để nêu bật tôn chỉ xây dựng cộng đồng của Guild TNC.

### D. Cập nhật Tài liệu & Triển khai
- Cập nhật `docs/features.md` và `docs/timeline.md`.
- Build và deploy tự động lên GitHub Pages: `https://kudominer.github.io/Albion_Guild_BattlePass/`.
