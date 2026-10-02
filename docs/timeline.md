# Project Timeline: Albion Guild Battle Pass (Guild TNC)

## Nhật Ký Tiến Độ Dự Án

### [2026-10-02] Tối Giản Giao Diện Web Sự Kiện & Tích Hợp Đăng Ký Discord (Tối Ưu Mobile)
- **Lý do:** Tinh giản trải nghiệm người dùng theo yêu cầu: Chuyển sang dạng Web Sự Kiện (Chỉ xem và chi tiết thể lệ), loại bỏ phần tự nhập spec phức tạp; tích hợp form mẫu sao chép cú pháp 1-click và điều hướng đăng ký trực tiếp sang Discord Guild TNC; tối ưu giao diện mượt mà 100% cho điện thoại.
- **Nội dung đã thực hiện:**
  - Giữ lại Bảng Sổ Tay Tu Luyện Hoàng Kim làm Hero Center theo đúng 100% thiết kế mẫu.
  - Xây dựng component `EventDetailsGrid.jsx` hiển thị trực quan các thẻ:
    - 3 Giải phụ đặc biệt: ⚡ 80đ sớm nhất (Shadowcaller 5.4), 👑 100đ sớm nhất (Vũ khí 8.3), 🌟 50đ đầu tiên mỗi nhánh (5M Silver).
    - Bảng tính 100 điểm Battle Pass (48đ vũ khí lẻ + 32đ nhánh + 20đ trang bị).
    - Hệ số ưu đãi nhánh: Heal x1.2 (30M), Tank/Support x1.1 (27.5M), Khác x1.0 (25M).
  - Xây dựng modal `DiscordRegisterModal.jsx` với cú pháp chuẩn xác và nút sao chép 1-click + nút mở Discord trực tiếp.
  - Bổ sung thanh Floating Action Bar cố định dưới đáy màn hình trên thiết bị di động.
  - Tối ưu kích thước bundle giảm hơn 55% (từ 488kB xuống 208kB), tải trang tức thì.
- **Kết quả:** Build thành công 100%, deploy tự động lên GitHub Pages.

---

## 📌 Mandatory Agent Handover (Mục Bàn Giao Bắt Buộc)

1. **Tình trạng hiện tại của dự án:**
   - Web App sự kiện đã được tối giản hoàn chỉnh theo phong cách Showcase Landing Page.
   - Giao diện mượt mà trên cả PC lẫn Mobile.
   - GitHub Pages URL: `https://kudominer.github.io/Albion_Guild_BattlePass/`.

2. **Bối cảnh và dự định kế tiếp của user:**
   - User có thể gửi link trực tiếp cho anh em trong Guild hoặc ghim lên kênh Discord thông báo sự kiện.

3. **Hướng dẫn kỹ thuật nhanh cho Agent tiếp theo:**
   - Thư mục dự án: `c:\Users\User\Documents\CODE\Albion_Guild_BattlePass`.
   - Chạy dev server: `npm run dev`.
   - Build production: `npm run build`.
