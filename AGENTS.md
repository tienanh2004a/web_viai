# Workflow Guidelines for VIAI Academy

## 1. Automated Deployment Rule (MANDATORY)
Mỗi khi trợ lý AI thực hiện thay đổi, sửa lỗi hoặc cập nhật tính năng trong dự án:
1. **Kiểm tra chất lượng & Tiêu chuẩn Impeccable**:
   - Chạy `npm run build` để đảm bảo TypeScript biên dịch thành công 100%.
   - Chạy `npx impeccable detect src/` để đảm bảo không còn bất kỳ UI anti-pattern nào (0 lỗi).
2. **Tự động đẩy lên GitHub & Kích hoạt Vercel Deploy**:
   - Tự động thực thi:
     ```powershell
     git add .
     git commit -m "feat/fix: <mô tả thay đổi súc tích>"
     git push origin main
     ```
   - Remote repository: `https://github.com/tienanh1804/web-viai.git` (nhánh `main`).
   - Vercel được liên kết với repo này và sẽ tự động xây dựng & deploy lên https://viai-academy.vercel.app/.

## 2. Tiêu chuẩn thiết kế Impeccable (DESIGN.md & PRODUCT.md)
- Tuân thủ nghiêm ngặt các token trong `DESIGN.md`.
- Tuyệt đối không dùng gradient tím/indigo AI, không dùng kicker pill hoa bên trên tiêu đề, không dùng icon 44x44 xếp chồng số liệu.
- Đảm bảo độ tương phản màu chữ đạt chuẩn WCAG AA (≥ 4.5:1).
