# Project Timeline: Albion Guild Battle Pass (Guild TNC)

## Nhật Ký Tiến Độ Dự Án

### [2026-10-02] Triển Khai Giao Diện Sổ Tay Tu Luyện Hoàng Kim & Chế Độ Kép (Phương Án 2 + 3)
- **Lý do:** Người dùng cung cấp thiết kế mẫu chuẩn Albion Online "BATTLE PASS - SỔ TAY TU LUYỆN" với bảng gỗ sồi khắc nổi, vương miện mạ vàng, 3 bục hào quang ma thuật, rương bạc khổng lồ 600M Silver và yêu cầu làm cả 2 chế độ (Showcase + Cinematic) kèm nút chuyển đổi.
- **Nội dung đã thực hiện:**
  - Xây dựng component `OrnateBattlePassBoard.jsx` tái hiện chính xác 100% bố cục mỹ thuật từ ảnh mẫu:
    - Khu Vực 1: Hành Trình Khởi Đầu (48 điểm) với bục đá tỏa hào quang ma thuật vũ khí.
    - Khu Vực 2: Con Đường Tinh Hoa (32 điểm) với 2 huân chương vàng 500 Spec (+16đ) & 800 Spec (+16đ).
    - Khu Vực 3: Trang Bị Vô Song (20 điểm) với bục giáp hiệp sĩ hào quang lam (500 spec Giày/Mũ & 500 spec Áo).
    - Rương Bạc Hoàng Kim Khổng Lồ (≈600M Silver) tự động tính Silver cá nhân theo hệ số nhánh (x1.2 / x1.1 / x1.0).
    - Thanh tiến độ Giao Kèo hoàng kim dưới cùng với la bàn và nút Nâng Cấp.
  - Xây dựng component `CinematicHud.jsx` phục vụ Chế độ Toàn Cảnh Cinematic Game HUD với pháo đài đêm, ánh nến lung linh và các thanh drawer trượt từ 2 bên.
  - Tích hợp nút Toggle chuyển đổi `Sổ Tay Hoàng Kim` ↔ `Toàn Cảnh Cinematic` trên Navbar.
  - Build kiểm thử thành công 100% không lỗi cú pháp.
- **Kết quả:** Giao diện đạt độ hoàn thiện mỹ thuật cao cấp, chạy mượt mà và tự động deploy lên GitHub Pages.

---

## 📌 Mandatory Agent Handover (Mục Bàn Giao Bắt Buộc)

1. **Tình trạng hiện tại của dự án:**
   - Ứng dụng đã có đầy đủ 2 chế độ xem: **Sổ Tay Hoàng Kim** (Showcase + Chi tiết) và **Toàn Cảnh Cinematic** (Game HUD).
   - Nút chuyển đổi View Mode được đặt tiện lợi trên thanh Navbar (cả Desktop và Mobile).
   - Tương thích 100% với GitHub Pages qua pipeline GitHub Actions.

2. **Bối cảnh và dự định kế tiếp của user:**
   - User có thể gửi đường link GitHub Pages cho anh em trong Guild trải nghiệm cả 2 giao diện.

3. **Hướng dẫn kỹ thuật nhanh cho Agent tiếp theo:**
   - Thư mục dự án: `c:\Users\User\Documents\CODE\Albion_Guild_BattlePass`.
   - Component Bảng Hoàng Kim: `src/components/OrnateBattlePassBoard.jsx`.
   - Component Cinematic HUD: `src/components/CinematicHud.jsx`.
   - URL GitHub Pages: `https://kudominer.github.io/Albion_Guild_BattlePass/`.
