---
name: VIAI Academy
description: Học viện Đào tạo STEM – Lập trình Robotics & Trí Tuệ Nhân Tạo (AI)
colors:
  primary: "#c2410c"
  primary-hover: "#9a3412"
  accent-warm: "#ea580c"
  canvas: "#f5f5f7"
  paper: "#ffffff"
  carbon: "#111827"
  slate: "#4b5563"
  border-subtle: "#e5e7eb"
  border-strong: "#d1d5db"
  success: "#059669"
  card-glare: "rgba(194, 65, 12, 0.12)"
typography:
  display:
    fontFamily: "'Be Vietnam Pro', system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Be Vietnam Pro', system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Be Vietnam Pro', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Be Vietnam Pro', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Be Vietnam Pro', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
  pill: "9999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "56px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
---

# Design System: VIAI Academy

## Overview

**Creative North Star: "Vietnamese Tech Academy Craft"**

VIAI Academy kết hợp giữa tính sư phạm chuẩn mực, sự tân tiến của kỷ nguyên Robot & AI và nét chân thành, gần gũi với phụ huynh Việt Nam. Thiết kế từ chối các khuôn mẫu AI sáo rỗng (như gradient tím-xanh viễn tưởng, hiệu ứng kính mờ trang trí bừa bãi, icon vuông xếp chồng trên đầu tiêu đề hay dải chữ chạy liên tục gây xao nhãng).

Thay vào đó, giao diện tập trung vào sự rõ ràng, tương phản cao, hình ảnh thực tế từ các giải đấu và quy chuẩn hiển thị trang nhã, tin cậy.

**Key Characteristics:**
- Tone màu ấm áp, đĩnh đạc: Cam gạch đậm (`#c2410c`) kết hợp nền giấy cao cấp (`#f5f5f7` & `#ffffff`) và mực than đậm (`#111827`).
- Bố cục thông thoáng, nhịp điệu biên tập rõ ràng: Thay thế các lưới thẻ đồng dạng bằng layout có trọng tâm, tôn vinh bằng chứng thực tế và hành trình học tập của con.
- Tương tác 3D có chủ đích: Robot WebGL đóng vai trò đại sứ học viện thân thiện, cử động êm ái, tương tác mượt mà không phô trương.

## Colors

Bảng màu mang tính định hướng học thuật công nghệ, tối ưu tuyệt đối độ tương phản WCAG AA (≥ 4.5:1 cho văn bản thông thường và ≥ 3:1 cho tiêu đề lớn).

- **Primary (`#c2410c`)**: Cam gạch đậm — đại diện cho năng lượng nhiệt huyết, sáng tạo kỹ thuật nhưng đủ độ đậm để đọc rõ ràng trên nền trắng hoặc nền nhạt.
- **Canvas (`#f5f5f7`)**: Nền xám ấm nhạt tự nhiên, dịu mắt, tránh màu xám lạnh vô hồn.
- **Paper (`#ffffff`)**: Nền thẻ trắng tinh khiết tạo phân lớp sắc nét.
- **Carbon (`#111827`)**: Mực đen than có sắc thái xanh/xám nhẹ, dễ chịu hơn đen thuần `#000000`.
- **Slate (`#4b5563`)**: Chữ thứ cấp độ tương phản cao, không bao giờ dùng xám mờ khó đọc.
- **Success (`#059669`)**: Xanh ngọc lục bảo biểu thị cam kết hoàn tiền và thành tích.

## Typography

Hệ thống chữ đơn nhất nhưng phân cấp trọng lượng tinh tế bằng phông `Be Vietnam Pro`:
- **Display & Headline**: Chữ in hoa hoặc viết hoa chữ cái đầu, độ đậm 700–800, khoảng cách chữ se khít nhẹ (-0.02em).
- **Body Text**: Tối thiểu 15px–16px (0.95rem–1rem), khoảng cách dòng 1.6 giúp phụ huynh đọc lướt nhanh mà không mỏi mắt.
- **Tuyệt đối không dùng chữ nhỏ dưới 13px** cho nội dung chức năng.

## Layout

- Chiều rộng nội dung tối đa: 1200px (max-w-7xl), căn giữa, padding lề an toàn 16px trên mobile và 32px trên desktop.
- Nhịp khoảng cách dọc thoáng đãng: Khoảng cách giữa các phần từ 80px đến 112px.
- Tránh "Cardocalypse": Không lồng thẻ bên trong thẻ. Sử dụng phân vùng nền và đường ranh giới tinh tế thay vì đóng hộp mọi thứ.

## Elevation & Depth

- Chiều sâu phẳng có cấu trúc (Structural Flat Layering): Dùng viền siêu mỏng (`1px solid #e5e7eb`) và độ lệch màu nền thay vì bóng mờ ảo (fuzzy blurred shadow).
- Bóng đổ chỉ dùng khi cần nâng tương tác: `0 4px 12px rgba(0,0,0,0.05)` cho thẻ khi hover, giúp bề mặt nhẹ nhàng nổi lên.

## Shapes

- Bo góc hài hòa: `12px` cho thẻ và khối nội dung, `8px - 10px` cho nút bấm, `9999px` cho viên nang điều hướng đặc trưng.
- Tránh bo góc quá đà (như 32px - 44px trên các thẻ nhỏ khiến góc ép chặt vào chữ).

## Components

1. **Nút bấm hành động (Action Buttons)**:
   - Primary: Cam gạch đậm chữ trắng, padding rộng rãi, hiệu ứng scale nhẹ 0.98 khi click.
   - Secondary: Nền trắng viền xám tinh tế, chữ than đậm.
2. **Thẻ khóa học (Course Showcase)**:
   - Ảnh chụp thực tế học viên và thiết bị, nhãn độ tuổi rõ ràng, thông tin học phí minh bạch.
3. **Khu vực Đánh giá (Parent Testimonials)**:
   - Bố cục lưới cố định có thể đọc chọn lọc, kèm thông tin định danh chân thật (tên phụ huynh, tuổi của bé, quận/tỉnh thành). Không dùng marquee tự động cuộn che khuất chữ.

## Do's and Don'ts

### Do:
- Để tiêu đề tự cất tiếng nói, không thêm nhãn kicker thừa thãi phía trên.
- Sử dụng hình ảnh và số liệu thật của các cơ sở Hải Phòng, Hưng Yên, Ninh Bình.
- Đảm bảo phụ huynh dễ dàng bấm gọi hotline `0344533898` hoặc chat Zalo từ bất kỳ vị trí nào.

### Don't:
- Không dùng gradient màu tím - xanh dương kiểu AI template.
- Không dùng text gradient trang trí (`background-clip: text`).
- Không đặt các hộp icon vuông tròn rập khuôn phía trên con số thống kê.
- Không dùng hiệu ứng rung lắc/nhảy nảy (`animate-bounce`).
- Không để chữ có độ tương phản dưới 4.5:1.
