# 01_plan: Kế Hoạch Triển Khai Hệ Thống Web Battle Pass Guild TNC

## 1. Mục tiêu
Xây dựng Web Portal phục vụ sự kiện Fame Rush (Buff +25% Fame từ 01/10 đến 11/10) của Guild TNC với tổng giải thưởng hơn 600M+ Silver.

## 2. Công nghệ
- Frontend: React 18 + Vite + Tailwind CSS + Lucide Icons + Canvas Confetti.
- Backend/Database: Supabase (PostgreSQL + Auth) kết hợp LocalStorage Persistence.
- Kiến trúc module:
  - `weapons.js`: 15 nhánh vũ khí, 8 cây/nhánh, hệ số ưu đãi x1.2 (Heal), x1.1 (Tank/Support), x1.0 (DPS).
  - `AuthContext.jsx`: Quản lý tài khoản Discord, vai trò Officer, danh sách thành viên.
  - `SpecCalculator.jsx`: Bảng tính và theo dõi spec trực quan, tự động tính điểm 0-100 và Silver thực nhận.
  - `BattlePassTrack.jsx`: Thanh tiến trình trực quan mốc 0..100đ, hiệu ứng ăn mừng pháo hoa.
  - `Leaderboard.jsx`: Bảng vàng vinh danh Top 1-2-3 và các giải phụ Shadowcaller 5.4, 8.3, 5M nhánh.
  - `OfficerPortal.jsx`: Cổng kiểm duyệt 3 ảnh minh chứng cho BQT.
