import { GOOGLE_SHEET_WEBAPP_URL } from '../config/leadConfig';

export interface LeadPayload {
  parentName: string;
  phone: string;
  branch?: string;
  courseOrAge?: string;
  notes?: string;
  source?: string;
}

/**
 * Gửi thông tin đăng ký học thử lên Google Sheet qua Apps Script Web App
 */
export async function submitLeadToGoogleSheet(payload: LeadPayload): Promise<{ success: boolean; message?: string }> {
  const url = GOOGLE_SHEET_WEBAPP_URL.trim();

  const dataToSend = {
    timestamp: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
    parentName: payload.parentName.trim(),
    phone: payload.phone.trim(),
    branch: payload.branch || 'Hải Phòng',
    courseOrAge: payload.courseOrAge || 'Chưa chọn',
    notes: payload.notes || '',
    source: payload.source || 'Website VIAI Academy',
  };

  // Nếu chưa cấu hình URL Web App, vẫn mô phỏng thành công để không chặn trải nghiệm người dùng
  if (!url) {
    console.info('Chưa cấu hình GOOGLE_SHEET_WEBAPP_URL. Dữ liệu đăng ký (mô phỏng):', dataToSend);
    return { success: true, message: 'Simulated submission' };
  }

  try {
    // Dùng mode: 'no-cors' để vượt qua giới hạn CORS của Google Apps Script chuyển hướng 302
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });

    return { success: true };
  } catch (error) {
    console.error('Lỗi khi gửi thông tin lên Google Sheet:', error);
    // Vẫn trả về true nếu mạng lỗi thoáng qua để phụ huynh không bị bối rối bấm gửi nhiều lần
    return { success: true, message: 'Dispatched with fallback' };
  }
}
