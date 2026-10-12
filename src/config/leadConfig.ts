/**
 * Cấu hình liên kết nhận Data Đăng ký (Leads) từ Website vào Google Sheets
 * 
 * BẠN CÓ THỂ THAY ĐỔI LINK BẰNG 2 CÁCH:
 * 1. Cách 1 (Khuyên dùng): Đặt biến môi trường VITE_GOOGLE_SHEET_URL trên Vercel Dashboard (Settings > Environment Variables).
 * 2. Cách 2: Dán trực tiếp URL Web App Google Apps Script vào giá trị FALLBACK_WEBAPP_URL bên dưới.
 */

const FALLBACK_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycby5ob52aXkt-h4g4JbKGuuQFu8lh8pIzuNmuUAP4QMjBlWyi8ZX-7m1IpDn_QhEv5dt/exec';

export const GOOGLE_SHEET_WEBAPP_URL: string =
  (import.meta.env.VITE_GOOGLE_SHEET_URL as string) || FALLBACK_WEBAPP_URL;
