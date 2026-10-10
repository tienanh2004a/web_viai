/**
 * Cấu hình liên kết nhận Data Đăng ký (Leads) từ Website vào Google Sheets
 * 
 * BẠN CÓ THỂ THAY ĐỔI LINK BẰNG 2 CÁCH:
 * 1. Cách 1 (Khuyên dùng): Đặt biến môi trường VITE_GOOGLE_SHEET_URL trên Vercel Dashboard (Settings > Environment Variables).
 * 2. Cách 2: Dán trực tiếp URL Web App Google Apps Script vào giá trị FALLBACK_WEBAPP_URL bên dưới.
 */

// Dán link Web App của Google Apps Script vào đây (nếu không dùng biến môi trường Vercel)
const FALLBACK_WEBAPP_URL = '';

export const GOOGLE_SHEET_WEBAPP_URL: string =
  (import.meta.env.VITE_GOOGLE_SHEET_URL as string) || FALLBACK_WEBAPP_URL;
