# Hướng Dẫn Tích Hợp & Quản Lý Google Sheets Nhận Dữ Liệu Khách Hàng (VIAI Academy)

Tài liệu này hướng dẫn chi tiết cách tạo Google Sheet nhận thông tin phụ huynh đăng ký học thử từ Website, cách lấy link Webhook, cách cấu hình và **nơi thay đổi link sau này một cách nhanh chóng nhất**.

---

## BƯỚC 1: TẠO FILE GOOGLE SHEET

1. Mở [Google Sheets](https://sheets.new) trên Google Drive của bạn.
2. Đặt tên file bảng tính: `VIAI_Academy_DanhSach_DangKy_HocThu`.
3. Đổi tên tab đầu tiên (ở góc dưới bên trái) thành: `DangKy` (viết liền không dấu).
4. Tại dòng số 1, tạo các tiêu đề cột sau (in đậm để dễ nhìn):
   - **Cột A:** `Thời gian`
   - **Cột B:** `Họ tên phụ huynh`
   - **Cột C:** `Số điện thoại`
   - **Cột D:** `Cơ sở đăng ký`
   - **Cột E:** `Khóa học / Độ tuổi`
   - **Cột F:** `Ghi chú / Ngày hẹn`
   - **Cột G:** `Nguồn đăng ký`
   - **Cột H:** `Trạng thái tư vấn` *(Dành cho bộ phận Sale cập nhật: Chưa gọi, Đã gọi hẹn lịch, Đã nhập học...)*

---

## BƯỚC 2: GẮN MÃ GOOGLE APPS SCRIPT (WEB APP)

1. Trên thanh menu của Google Sheet, bấm vào: **Tiện ích mở rộng (Extensions)** -> **Apps Script**.
2. Xóa hết code mẫu mặc định `function myFunction() {...}`.
3. Sao chép và dán toàn bộ đoạn mã bên dưới vào:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DangKy");
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    }
    
    // Đọc dữ liệu gửi từ Website
    var data = JSON.parse(e.postData.contents);
    
    var timestamp = data.timestamp || new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    var parentName = data.parentName || "";
    var phone = data.phone || "";
    var branch = data.branch || "";
    var courseOrAge = data.courseOrAge || "";
    var notes = data.notes || "";
    var source = data.source || "Website";
    var status = "Mới tiếp nhận (Chưa gọi)";
    
    // Ghi một dòng mới vào cuối bảng tính
    sheet.appendRow([
      timestamp,
      parentName,
      "'" + phone, // Dấu nháy đơn giữ nguyên số 0 ở đầu số điện thoại
      branch,
      courseOrAge,
      notes,
      source,
      status
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Data recorded successfully"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Bấm biểu tượng **Lưu (Save / Ctrl + S)**.

---

## BƯỚC 3: DEPLOY (XUẤT BẢN) ĐỂ LẤY LINK WEB APP

1. Ở góc trên bên phải màn hình Apps Script, bấm nút xanh **Triển khai (Deploy)** -> **Tùy chọn triển khai mới (New deployment)**.
2. Tại mục *Chọn loại (Select type)* hình bánh răng bên trái: Chọn **Ứng dụng web (Web app)**.
3. Điền các trường cấu hình như sau:
   - **Mô tả (Description):** `Webhook nhận khách hàng VIAI`
   - **Thực thi dưới dạng (Execute as):** `Tôi (Me)` *(email của bạn)*
   - **Ai có quyền truy cập (Who has access):** Chọn **Bất kỳ ai (Anyone)**  
     *(⚠️ QUAN TRỌNG: Phải chọn "Anyone" để website gửi được dữ liệu vào sheet mà không bị bắt đăng nhập Google).*
4. Bấm nút **Triển khai (Deploy)**.
5. Google sẽ hiện hộp thoại yêu cầu cấp quyền:
   - Bấm **Ủy quyền truy cập (Authorize access)** -> Chọn tài khoản Google của bạn.
   - Nếu hiện cảnh báo *"Google chưa xác minh ứng dụng này"*: Bấm nút **Nâng cao (Advanced)** ở dưới -> Bấm **Đi tới... (không an toàn)** -> Bấm **Cho phép (Allow)**.
6. Sau khi hoàn tất, Google sẽ cung cấp cho bạn một **URL ứng dụng web (Web app URL)** có dạng:
   ```text
   https://script.google.com/macros/s/AKfycbx.../exec
   ```
7. Hãy sao chép (Copy) đường link này!

---

## BƯỚC 4: NƠI THAY ĐỔI LINK SHEET (RẤT QUAN TRỌNG)

Khi bạn muốn gắn link lần đầu, hoặc **sau này muốn thay đổi sang file Google Sheet khác**, bạn có 2 lựa chọn cực kỳ dễ dàng:

### 🌟 LỰA CHỌN A (Khuyên dùng - Không cần động vào mã nguồn):
Bạn chỉ cần thao tác trên trang quản trị Vercel:
1. Đăng nhập vào [Vercel Dashboard](https://vercel.com/tienanhgitce-6169/web-viai).
2. Vào tab **Settings** -> Chọn mục **Environment Variables** ở cột trái.
3. Thêm một biến mới:
   - **Key:** `VITE_GOOGLE_SHEET_URL`
   - **Value:** `<Dán_Link_Web_App_Google_Script_Của_Bạn>`
4. Bấm **Save**.
5. Vào tab **Deployments** trên Vercel, bấm dấu 3 chấm `...` ở bản deploy gần nhất -> Chọn **Redeploy**.  
   👉 **Xong!** Website sẽ tự động gửi data về file Google Sheet mới ngay lập tức. Sau này nếu đổi file Sheet mới, bạn chỉ việc vào đây sửa lại Value của biến này!

---

### 🌟 LỰA CHỌN B (Sửa trực tiếp trong code dự án):
Nếu không muốn vào Vercel, bạn mở trực tiếp file cấu hình trong dự án:
- Đường dẫn file: `src/config/leadConfig.ts`
- Tìm đến dòng:
  ```typescript
  const FALLBACK_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbx.../exec';
  ```
- Dán URL mới vào giữa hai dấu nháy đơn, lưu lại và push lên GitHub.

---

## BƯỚC 5: KINH NGHIỆM XỬ LÝ KHI DỮ LIỆU CÀNG NGÀY CÀNG NHIỀU

Google Sheet có sức chứa tới **10 triệu ô dữ liệu** (hơn 100.000 lượt đăng ký). Khi chạy lâu dài, bạn áp dụng các cách sau để tối ưu:

1. **Phân quyền cho đội kinh doanh (Sale):**
   - Chỉ chia sẻ quyền **Chỉnh sửa (Editor)** cho nhân viên tuyển sinh.
   - Khóa cột A, B, C (Thời gian, SĐT, Khách hàng) bằng tính năng *Dữ liệu > Bảo vệ trang tính và dải ô*, chỉ cho sale sửa cột H (Trạng thái tư vấn) và ghi chú để tránh bấm nhầm làm xóa số điện thoại.

2. **Dùng Filter View (Chế độ xem bộ lọc riêng):**
   - Sale phụ trách Hải Phòng tạo Filter View lọc riêng cơ sở Hải Phòng.
   - Sale Hưng Yên và Ninh Bình tạo Filter View riêng của mình.
   - Nhờ vậy 3 bạn sale ở 3 tỉnh mở cùng 1 file Sheet cùng lúc mà không làm xáo trộn màn hình của nhau.

3. **Lưu trữ dữ liệu cũ (Archive theo năm):**
   - Sau mỗi 6 tháng hoặc 1 năm (ví dụ hết năm 2026), bạn chỉ cần nhân bản file Google Sheet này thành `VIAI_KhachHang_2026_Archived`.
   - File chính xóa các dòng cũ đi để tiếp tục nhận khách hàng năm 2027 mà **không cần phải đổi link Webhook!**
