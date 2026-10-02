# 🛡️ Albion Online Guild TNC - Fame Rush Battle Pass Web Portal

Ứng dụng Web Portal dành riêng cho sự kiện **Fame Rush (Buff +25% Fame)** từ **01/10 đến 11/10** của **Guild TNC**, với tổng giải thưởng **hơn 600.000.000 Silver**.

---

## 🌟 Tính Năng Nổi Bật

1. **Hệ thống Battle Pass (Thang chuẩn 0 - 100 Điểm):**
   - Tự động tính điểm nâng Spec 8 cây vũ khí thuộc nhánh đăng ký (tối đa 48đ vũ khí lẻ + 32đ tổng nhánh).
   - Tự động tính điểm trang bị (500 spec Giày & Mũ = +10đ, 500 spec Áo = +10đ).
   - Hiển thị trực quan thanh EXP 0-100% với hiệu ứng pháo hoa Confetti khi mở khóa mốc thưởng.
2. **Hệ số ưu đãi nhánh & Cơ cấu giải thưởng:**
   - 🌿 **Nhánh Heal (Holy, Nature):** Hệ số **x1.2** (Nhận tối đa **30M Silver**).
   - 🛡️ **Nhánh Tank & Support (Hammer, Mace, Arcane):** Hệ số **x1.1** (Nhận tối đa **27.5M Silver**).
   - ⚔️ **Nhánh khác:** Hệ số **x1.0** (Nhận tối đa **25M Silver**).
3. **Theo dõi Giải Phụ Danh Giá (Realtime):**
   - ⚡ **80 điểm sớm nhất:** Nhận **Shadowcaller 5.4 Awakened (3 dòng att)**.
   - 👑 **100 điểm sớm nhất:** Nhận **1 Vũ khí 8.3 tự chọn**.
   - 🌟 **50 điểm đầu tiên mỗi nhánh:** Nhận **5.000.000 Silver**.
4. **Bảng Xếp Hạng Guild Live Leaderboard:**
   - Vinh danh Top 1, 2, 3 và thứ hạng toàn bộ thành viên theo điểm số thực tế.
5. **Cổng Quản Trị BQT Officer:**
   - Kiểm tra điều kiện Newbie (<100M Total Fame).
   - Xem và duyệt 3 ảnh minh chứng (Stat Fame, Destiny Board vũ khí, Spec quần áo).
   - Quản lý trạng thái Duyệt / Từ chối và tổng ngân sách chi trả của Guild.

---

## 🚀 Hướng Dẫn Chạy Cục Bộ (Local Development)

```bash
# Di chuyển vào thư mục dự án
cd Albion_Guild_BattlePass

# Cài đặt thư viện
npm install

# Khởi động môi trường phát triển
npm run dev
```

Mở trình duyệt tại đường dẫn: `http://localhost:5173`

---

## 🌐 Hướng Dẫn Deploy Lên Vercel / Netlify (1 Click)

### 1. Deploy lên Vercel
1. Đẩy mã nguồn lên GitHub của bạn:
   ```bash
   git init
   git add .
   git commit -m "khởi_tạo: web battle pass guild tnc"
   git remote add origin https://github.com/<your-username>/Albion_Guild_BattlePass.git
   git push -u origin main
   ```
2. Truy cập [Vercel](https://vercel.com) -> Chọn **Add New Project** -> Chọn repository `Albion_Guild_BattlePass`.
3. Nhấn **Deploy** (Vercel sẽ tự động nhận diện Vite và build ra trang web hoạt động 24/7).

### 2. Deploy lên Netlify
- Build thư mục `dist/` bằng lệnh `npm run build`.
- Kéo thả thư mục `dist/` vào [Netlify Drop](https://app.netlify.com/drop) hoặc kết nối qua GitHub repository.

---

**Guild TNC · Albion Online Việt Nam**
