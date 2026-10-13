import { GOOGLE_SHEET_WEBAPP_URL } from '../config/leadConfig';

export interface LeadPayload {
  parentName: string;
  phone: string;
  branch?: string;
  courseOrAge?: string;
  preferredDate?: string; // Ngày học dự kiến (tách riêng cột)
  notes?: string;
  source?: string;
  honeypot?: string; // Bẫy bot: nếu có giá trị -> chắc chắn là bot
  fillDurationMs?: number; // Thời gian điền form: nếu < 1200ms -> nghi vấn bot tự động
}

// Danh sách các số điện thoại spam giả mạo phổ biến
const OBVIOUS_SPAM_PHONES = new Set([
  '0000000000',
  '0111111111',
  '0222222222',
  '0333333333',
  '0444444444',
  '0555555555',
  '0666666666',
  '0777777777',
  '0888888888',
  '0999999999',
]);

/**
 * Gửi thông tin đăng ký học thử lên Google Sheet qua Apps Script Web App
 * Đã tích hợp lớp bảo vệ Honeypot & Anti-Spam Bot nhiều tầng
 */
export async function submitLeadToGoogleSheet(payload: LeadPayload): Promise<{ success: boolean; message?: string }> {
  // LỚP 1: Bẫy Honeypot - Nếu ô ẩn có dữ liệu, bot đã dính bẫy
  if (payload.honeypot && payload.honeypot.trim().length > 0) {
    console.warn('[Anti-Spam] Phát hiện và chặn bot tự động qua Honeypot trap.');
    // Trả về true giả lập để bot tưởng đã gửi thành công và rời đi, không ghi vào Google Sheet
    return { success: true, message: 'Spam dropped via honeypot' };
  }

  // LỚP 2: Kiểm tra tốc độ điền form - Người thật mất ít nhất 1.5 - 2s
  if (payload.fillDurationMs !== undefined && payload.fillDurationMs < 1200) {
    console.warn(`[Anti-Spam] Phát hiện gửi form quá nhanh (${payload.fillDurationMs}ms), chặn nghi vấn bot.`);
    return { success: true, message: 'Spam dropped via speed check' };
  }

  const cleanPhone = payload.phone.replace(/\D/g, '').trim();

  // LỚP 3: Lọc số rác hiển nhiên lặp lại
  if (OBVIOUS_SPAM_PHONES.has(cleanPhone)) {
    console.warn('[Anti-Spam] Số điện thoại rác lặp lại, bỏ qua không ghi sheet.');
    return { success: true, message: 'Spam dropped via phone pattern' };
  }

  const url = GOOGLE_SHEET_WEBAPP_URL.trim();

  const dataToSend = {
    timestamp: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
    parentName: payload.parentName.trim(),
    phone: cleanPhone,
    branch: payload.branch || 'Hải Phòng',
    courseOrAge: payload.courseOrAge || 'Chưa chọn',
    preferredDate: payload.preferredDate || '',
    notes: payload.notes || '',
    source: payload.source || 'Website VIAI Academy',
  };

  // Nếu chưa cấu hình URL Web App, vẫn mô phỏng thành công để không chặn trải nghiệm người dùng
  if (!url) {
    console.info('Chưa cấu hình GOOGLE_SHEET_WEBAPP_URL. Dữ liệu đăng ký (mô phỏng):', dataToSend);
    return { success: true, message: 'Simulated submission' };
  }

  try {
    // 1. Gửi dữ liệu lên Google Apps Script ngầm với keepalive: true
    // Cờ keepalive: true đảm bảo trình duyệt hoàn thành gửi request ngay cả khi đóng popup hoặc chuyển trang
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      keepalive: true,
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(dataToSend),
    }).catch((err) => {
      console.warn('[Lead Dispatch] Ghi nhận cảnh báo mạng nền:', err);
    });

    // 2. Phản hồi giao diện tức thì (Optimistic UI):
    // Thay vì bắt người dùng chờ 3 - 4 giây do máy chủ Google Apps Script xử lý chậm (cold start, lock sheet),
    // ta chỉ giữ nút ở trạng thái "Đang gửi..." khoảng 350ms vừa đủ để tạo cảm giác hệ thống đang tiếp nhận,
    // sau đó lập tức hiển thị màn hình chúc mừng và voucher thành công!
    await new Promise((resolve) => setTimeout(resolve, 350));

    return { success: true };
  } catch (error) {
    console.error('Lỗi khi gửi thông tin lên Google Sheet:', error);
    return { success: true, message: 'Dispatched with fallback' };
  }
}
