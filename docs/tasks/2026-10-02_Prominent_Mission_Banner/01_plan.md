# Implementation Plan: Banner Sứ Mệnh Newbie Nổi Bật & Fix Lỗi Dấu Tiếng Việt

## 1. Mục tiêu
1. Đưa thông điệp sứ mệnh lên vị trí **#1 đầu trang (ngay dưới Navbar / trên đỉnh Bảng Sổ Tay)** với kích thước lớn, thiết kế hoàng kim phát sáng đập ngay vào mắt người dùng khi vừa mở web:
   > **"Sự kiện dành cho Newbie dưới 100m Total fame để khích lệ Newbie tìm hiểu game, tham gia content và đồng hành cùng TNC trên những chặng đường sắp tới."**
2. Khắc phục triệt để lỗi hiển thị dấu tiếng Việt trên các tiêu đề (`HÀNH TRÌNH KHỞI ĐẦU`, `TIẾN ĐỘ SỰ KIỆN`, `SỔ TAY TU LUYỆN`...) bằng cách tối ưu CSS typography và dùng font hỗ trợ chuẩn UTF-8 tiếng Việt hoàn hảo.

---

## 2. Kết quả thực hiện
- Đã thêm Banner Sứ Mệnh Hoàng Kim khổng lồ có viền sáng 35px glow, icon chiến binh ⚔️ và chữ vàng rực rỡ đập ngay vào mắt trên đầu trang.
- Đã chuẩn hóa font chữ `Cinzel`, `Montserrat`, `Inter` hỗ trợ trọn vẹn dấu tiếng Việt (không còn bị vỡ dấu `ĐẦ`U` hay `TIẾ`N`).
- Đã build và push lên GitHub Pages trực tiếp.
