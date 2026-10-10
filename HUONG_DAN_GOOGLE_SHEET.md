# Hướng Dẫn Tự Động Phân Trang Tính Theo Cơ Sở & Tháng (VIAI Academy)

> **File Google Sheet của bạn:**  
> `https://docs.google.com/spreadsheets/d/1pXD3YJVayZ84DKt6H_bKf0npYidx-48shNe61-pl8I4/edit`

Tài liệu này cung cấp đoạn mã Google Apps Script thông minh để:
1. **Tự động phân trang tính (Tab riêng)** cho từng cơ sở theo từng tháng:
   - Ví dụ tháng này: `Hưng Yên Tháng 10`, `Hải Phòng Tháng 10`, `Ninh Bình Tháng 10`...
   - Sang tháng sau hệ thống sẽ tự động tạo tab mới: `Hưng Yên Tháng 11`, `Hải Phòng Tháng 11`...
2. **Cấu trúc cột chuẩn xác theo yêu cầu**:
   - Cột A: **STT** (Tự động đếm 1, 2, 3...)
   - Cột B: **Ngày đăng ký** (Nằm ngay sau STT, sắp xếp theo thời gian gửi)
   - Cột C: **Tên phụ huynh**
   - Cột D: **Số điện thoại** (Giữ số 0 ở đầu)
   - Cột E: **Cơ sở**
   - Cột F: **Độ tuổi học viên**
   - Cột G: **Ghi chú** (Ngày hẹn học thử / Lời nhắn)
   - Cột H: **Tình trạng chăm sóc** (**Mặc định ĐỂ TRỐNG** khi mới gửi từ web; có sẵn menu thả xuống để nhân viên nhận khách chọn: *Đang chăm sóc*, *Đã hẹn lịch test 1-1*, *Đã nhập học*, *Hẹn gọi lại sau*...).

---

## BƯỚC 1: DÁN MÃ VÀO GOOGLE SHEET CỦA BẠN

1. Mở file Google Sheet của bạn: [https://docs.google.com/spreadsheets/d/1pXD3YJVayZ84DKt6H_bKf0npYidx-48shNe61-pl8I4/edit](https://docs.google.com/spreadsheets/d/1pXD3YJVayZ84DKt6H_bKf0npYidx-48shNe61-pl8I4/edit)
2. Trên thanh menu, bấm: **Tiện ích mở rộng (Extensions)** -> **Apps Script**.
3. Xóa toàn bộ chữ có sẵn trong khung soạn thảo, sao chép và dán toàn bộ đoạn mã bên dưới vào:

```javascript
/**
 * GOOGLE APPS SCRIPT - TỰ ĐỘNG PHÂN TRANG THEO CƠ SỞ & THÁNG
 * Hệ thống tuyển sinh VIAI Academy
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);

    var now = new Date();
    var thangHienTai = now.getMonth() + 1; // 1 -> 12
    var namHienTai = now.getFullYear();

    // 1. Chuẩn hóa tên cơ sở
    var rawBranch = (data.branch || "Hải Phòng").toString().toLowerCase();
    var branchClean = "Hải Phòng";
    if (rawBranch.indexOf("hưng yên") !== -1 || rawBranch.indexOf("hung yen") !== -1) {
      branchClean = "Hưng Yên";
    } else if (rawBranch.indexOf("ninh bình") !== -1 || rawBranch.indexOf("ninh binh") !== -1) {
      branchClean = "Ninh Bình";
    } else if (rawBranch.indexOf("hải phòng") !== -1 || rawBranch.indexOf("hai phong") !== -1) {
      branchClean = "Hải Phòng";
    } else {
      branchClean = "Online Toàn Quốc";
    }

    // 2. Tên trang tính (Tab) tương ứng cơ sở và tháng (VD: "Hưng Yên Tháng 10")
    var sheetName = branchClean + " Tháng " + thangHienTai;
    var sheet = ss.getSheetByName(sheetName);

    // Nếu trang tính của cơ sở và tháng này chưa có -> Tự động tạo mới
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      caiDatTieuDeTrangTinh(sheet, branchClean, thangHienTai, namHienTai);
    }

    // 3. Tính số thứ tự (STT) tự động
    var lastRow = sheet.getLastRow();
    var stt = (lastRow < 2) ? 1 : (lastRow); // Dòng 1 là tiêu đề

    // 4. Định dạng thời gian đăng ký (GMT+7)
    var ngayDangKy = Utilities.formatDate(now, "GMT+7", "dd/MM/yyyy HH:mm:ss");

    // 5. Chuẩn bị các trường dữ liệu theo đúng thứ tự yêu cầu
    var tenPhuHuynh = data.parentName || "";
    var soDienThoai = "'" + (data.phone || "").toString().replace(/^'+/, ''); // Giữ nguyên số 0 đầu
    var doTuoiHocVien = data.courseOrAge || "";
    var ghiChu = data.notes || "";
    var tinhTrangChamSoc = ""; // ĐỂ TRỐNG mặc định như yêu cầu của bạn

    // 6. Ghi dòng dữ liệu mới vào cuối trang tính
    var targetRow = sheet.getLastRow() + 1;
    sheet.getRange(targetRow, 1, 1, 8).setValues([[
      stt,
      ngayDangKy,
      tenPhuHuynh,
      soDienThoai,
      branchClean,
      doTuoiHocVien,
      ghiChu,
      tinhTrangChamSoc
    ]]);

    // Căn giữa STT, Ngày đăng ký, Số điện thoại, Cơ sở
    sheet.getRange(targetRow, 1).setHorizontalAlignment("center");
    sheet.getRange(targetRow, 2).setHorizontalAlignment("center");
    sheet.getRange(targetRow, 4).setHorizontalAlignment("center");
    sheet.getRange(targetRow, 5).setHorizontalAlignment("center");

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      sheet: sheetName,
      row: targetRow
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Hàm định dạng giao diện tiêu đề chuyên nghiệp và tạo menu thả xuống cho cột Tình trạng
 */
function caiDatTieuDeTrangTinh(sheet, branchName, thang, nam) {
  // Tiêu đề 8 cột đúng thứ tự bạn yêu cầu
  var headers = [
    ["STT", "Ngày đăng ký", "Tên phụ huynh", "Số điện thoại", "Cơ sở", "Độ tuổi học viên", "Ghi chú", "Tình trạng chăm sóc"]
  ];

  sheet.getRange(1, 1, 1, 8).setValues(headers);

  // Định dạng hàng tiêu đề: Nền cam đậm, chữ trắng, in đậm, căn giữa
  var headerRange = sheet.getRange("A1:H1");
  headerRange.setBackground("#c2410c")
             .setFontColor("#ffffff")
             .setFontWeight("bold")
             .setHorizontalAlignment("center")
             .setVerticalAlignment("middle");
  
  sheet.setRowHeight(1, 40);
  sheet.setFrozenRows(1); // Cố định dòng tiêu đề khi cuộn chuột

  // Độ rộng các cột cho đẹp mắt
  sheet.setColumnWidth(1, 60);  // STT
  sheet.setColumnWidth(2, 160); // Ngày đăng ký
  sheet.setColumnWidth(3, 190); // Tên phụ huynh
  sheet.setColumnWidth(4, 130); // Số điện thoại
  sheet.setColumnWidth(5, 120); // Cơ sở
  sheet.setColumnWidth(6, 170); // Độ tuổi học viên
  sheet.setColumnWidth(7, 240); // Ghi chú
  sheet.setColumnWidth(8, 180); // Tình trạng chăm sóc

  // Tạo menu thả xuống (Dropdown) sẵn cho cột H (Tình trạng chăm sóc) từ dòng 2 đến dòng 1000
  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList([
      "Đang chăm sóc", 
      "Đã hẹn lịch test 1-1", 
      "Đã nhập học", 
      "Không nghe máy (Gọi lại)", 
      "Phụ huynh từ chối"
    ], true)
    .setAllowInvalid(true)
    .build();

  sheet.getRange("H2:H1000").setDataValidation(rule);
}

/**
 * HÀM TIỆN ÍCH: Tạo sẵn ngay 3 trang tính cho tháng này để bạn kiểm tra
 * Bạn có thể chọn hàm này và bấm nút "Run" trên thanh công cụ để tạo ngay 3 tab!
 */
function taoSanCacTrangTinhThangNay() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var now = new Date();
  var thang = now.getMonth() + 1;
  var nam = now.getFullYear();
  var coSoList = ["Hưng Yên", "Hải Phòng", "Ninh Bình"];

  coSoList.forEach(function(cs) {
    var sheetName = cs + " Tháng " + thang;
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      caiDatTieuDeTrangTinh(sheet, cs, thang, nam);
    }
  });

  // Xóa tab mặc định "Trang tính1" nếu còn trống
  var defaultSheet = ss.getSheetByName("Trang tính1");
  if (defaultSheet && defaultSheet.getLastRow() === 0 && ss.getSheets().length > 1) {
    ss.deleteSheet(defaultSheet);
  }
}
```

4. Bấm biểu tượng **Lưu (Save / Ctrl + S)**.

---

## BƯỚC 2: TẠO TRƯỚC 3 TRANG TÍNH (TÙY CHỌN - 5 GIÂY)
Trên thanh công cụ của Apps Script, ở ô chọn hàm bên cạnh nút **Run**, chọn:  
👉 **`taoSanCacTrangTinhThangNay`** -> Bấm nút **Chạy (Run)**.
- Quay lại file Google Sheet, bạn sẽ thấy ngay 3 tab tuyệt đẹp:
  - `Hưng Yên Tháng 10`
  - `Hải Phòng Tháng 10`
  - `Ninh Bình Tháng 10`
- Tab cũ `Trang tính1` sẽ tự động được xóa đi.

---

## BƯỚC 3: DEPLOY ĐỂ LẤY URL WEB APP

1. Ở góc trên bên phải màn hình Apps Script, bấm nút xanh **Triển khai (Deploy)** -> **Tùy chọn triển khai mới (New deployment)**.
2. Bấm vào biểu tượng hình bánh răng bên trái -> Chọn **Ứng dụng web (Web app)**.
3. Thiết lập chính xác 3 ô sau:
   - **Mô tả:** `Webhook VIAI Academy`
   - **Thực thi dưới dạng (Execute as):** `Tôi (Me)`
   - **Ai có quyền truy cập (Who has access):** Chọn **Bất kỳ ai (Anyone)** *(⚠️ Bắt buộc)*.
4. Bấm **Triển khai (Deploy)**.
5. Cấp quyền truy cập nếu Google yêu cầu (*Ủy quyền truy cập -> Chọn email của bạn -> Nâng cao -> Đi tới... (không an toàn) -> Cho phép*).
6. Copy đường link **URL ứng dụng web** (có dạng `https://script.google.com/macros/s/AKfycb.../exec`).

---

## BƯỚC 4: GẮN LINK VÀO WEBSITE

Sau khi lấy được link ở Bước 3, bạn chỉ cần gửi link đó cho tôi, hoặc dán trực tiếp vào:
1. **Trong code:** File [src/config/leadConfig.ts](file:///d:/web_viai-main/web_viai-main/src/config/leadConfig.ts) dòng:
   ```typescript
   const FALLBACK_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycb.../exec';
   ```
2. **Hoặc trên Vercel:** Vào *Settings > Environment Variables* thêm biến `VITE_GOOGLE_SHEET_URL` = `<Link Web App của bạn>`.
