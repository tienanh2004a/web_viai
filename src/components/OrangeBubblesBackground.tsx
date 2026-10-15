import React from 'react';

/**
 * OrangeBubblesBackground
 * Trải dài ánh sáng cam nhạt & bong bóng cam thủy tinh từ đỉnh trang xuống tận cùng phần Liên hệ và Footer
 */
export const OrangeBubblesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* =========================================================
          KHU VỰC 1: ĐỈNH TRANG & HERO (0 - 800px)
         ========================================================= */}
      {/* Vệt sáng cam nhạt lớn góc trên trái */}
      <div className="absolute top-0 -left-28 w-[550px] h-[550px] bg-gradient-to-br from-orange-300/25 via-amber-200/18 to-transparent rounded-full blur-[140px] animate-pulse-slow" />
      {/* Vệt sáng cam nhạt góc trên phải */}
      <div className="absolute top-20 -right-28 w-[600px] h-[600px] bg-gradient-to-bl from-orange-400/20 via-rose-200/12 to-transparent rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '3s' }} />

      {/* Bong bóng cam thủy tinh nổi Hero */}
      <div 
        className="absolute top-28 right-[7%] w-32 h-32 rounded-full border border-orange-300/40 bg-gradient-to-tr from-orange-400/20 via-amber-200/15 to-white/45 backdrop-blur-xs shadow-[0_8px_32px_rgba(251,146,60,0.15),inset_0_0_20px_rgba(255,255,255,0.7)] animate-bubble-float"
      >
        <div className="absolute top-3.5 left-4 w-7 h-4 rounded-full bg-white/70 rotate-[-35deg] blur-[0.5px]" />
      </div>
      <div 
        className="absolute top-64 right-[4%] w-14 h-14 rounded-full border border-orange-300/35 bg-gradient-to-tr from-orange-400/15 via-amber-200/10 to-white/35 backdrop-blur-xs shadow-[0_4px_16px_rgba(251,146,60,0.1),inset_0_0_10px_rgba(255,255,255,0.6)] animate-bubble-float-delayed"
      >
        <div className="absolute top-2 left-2 w-3 h-2 rounded-full bg-white/70 rotate-[-35deg]" />
      </div>

      {/* =========================================================
          KHU VỰC 2: HÀNH TRÌNH THI ĐẤU & ABOUT US (900px - 1800px)
         ========================================================= */}
      <div className="absolute top-[1100px] -left-36 w-[550px] h-[550px] bg-gradient-to-tr from-orange-400/20 via-amber-300/15 to-transparent rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[1400px] -right-32 w-[500px] h-[500px] bg-gradient-to-tl from-amber-300/18 via-orange-300/15 to-transparent rounded-full blur-[130px]" />

      {/* Bong bóng cam khu vực About Us */}
      <div 
        className="absolute top-[1150px] left-[3%] w-28 h-28 rounded-full border border-orange-300/40 bg-gradient-to-tr from-orange-400/20 via-amber-200/15 to-white/45 backdrop-blur-xs shadow-[0_8px_30px_rgba(251,146,60,0.15),inset_0_0_18px_rgba(255,255,255,0.7)] animate-bubble-float-delayed"
      >
        <div className="absolute top-3 left-4 w-5 h-3 rounded-full bg-white/70 rotate-[-35deg]" />
      </div>
      <div 
        className="absolute top-[1280px] left-[9%] w-12 h-12 rounded-full border border-orange-300/30 bg-gradient-to-tr from-orange-400/15 to-white/35 backdrop-blur-xs shadow-[0_4px_12px_rgba(251,146,60,0.1),inset_0_0_8px_rgba(255,255,255,0.6)] animate-bubble-float"
        style={{ animationDuration: '9s' }}
      >
        <div className="absolute top-1.5 left-2 w-2 h-1 rounded-full bg-white/70 rotate-[-35deg]" />
      </div>

      {/* =========================================================
          KHU VỰC 3: CÁC KHÓA HỌC 3 CẤP (1900px - 2800px)
         ========================================================= */}
      <div className="absolute top-[2100px] -right-36 w-[600px] h-[600px] bg-gradient-to-bl from-orange-300/22 via-amber-200/15 to-transparent rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[2500px] -left-32 w-[520px] h-[520px] bg-gradient-to-br from-amber-300/18 via-orange-200/12 to-transparent rounded-full blur-[140px]" />

      {/* Bong bóng cam khu vực Courses */}
      <div 
        className="absolute top-[2150px] right-[5%] w-32 h-32 rounded-full border border-orange-300/40 bg-gradient-to-tr from-orange-400/20 via-amber-200/15 to-white/45 backdrop-blur-xs shadow-[0_8px_30px_rgba(251,146,60,0.15),inset_0_0_18px_rgba(255,255,255,0.7)] animate-bubble-float"
        style={{ animationDuration: '11s' }}
      >
        <div className="absolute top-3.5 left-4 w-6 h-3 rounded-full bg-white/70 rotate-[-35deg]" />
      </div>
      <div 
        className="absolute top-[2280px] right-[11%] w-16 h-16 rounded-full border border-orange-300/30 bg-gradient-to-tr from-orange-400/15 to-white/35 backdrop-blur-xs shadow-[0_4px_14px_rgba(251,146,60,0.1),inset_0_0_10px_rgba(255,255,255,0.6)] animate-bubble-float-delayed"
      >
        <div className="absolute top-2 left-2.5 w-3 h-2 rounded-full bg-white/70 rotate-[-35deg]" />
      </div>

      {/* =========================================================
          KHU VỰC 4: HỎI ĐÁP FAQ (2900px - 3600px)
         ========================================================= */}
      <div className="absolute top-[3100px] -left-28 w-[550px] h-[550px] bg-gradient-to-tr from-orange-400/20 via-amber-300/15 to-transparent rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '2.5s' }} />
      <div className="absolute top-[3400px] -right-28 w-[500px] h-[500px] bg-gradient-to-tl from-amber-200/20 via-orange-300/15 to-transparent rounded-full blur-[130px]" />

      {/* Bong bóng cam khu vực FAQ */}
      <div 
        className="absolute top-[3180px] left-[4%] w-24 h-24 rounded-full border border-orange-300/35 bg-gradient-to-tr from-orange-400/18 via-amber-200/12 to-white/40 backdrop-blur-xs shadow-[0_6px_24px_rgba(251,146,60,0.12),inset_0_0_15px_rgba(255,255,255,0.65)] animate-bubble-float"
        style={{ animationDuration: '10s' }}
      >
        <div className="absolute top-2.5 left-3 w-4 h-2 rounded-full bg-white/70 rotate-[-35deg]" />
      </div>

      {/* =========================================================
          KHU VỰC 5: TẬN CÙNG PHẦN LIÊN HỆ & CƠ SỞ & FOOTER (3700px - 5000px)
         ========================================================= */}
      <div className="absolute top-[3900px] -right-36 w-[620px] h-[620px] bg-gradient-to-bl from-orange-400/22 via-amber-300/18 to-transparent rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[4300px] -left-36 w-[580px] h-[580px] bg-gradient-to-tr from-orange-300/25 via-amber-200/15 to-transparent rounded-full blur-[140px]" />
      <div className="absolute top-[4700px] right-0 w-[550px] h-[550px] bg-gradient-to-tl from-orange-400/20 via-amber-300/15 to-transparent rounded-full blur-[140px]" />

      {/* Bong bóng cam khu vực Form Đăng Ký & Thông tin Liên hệ */}
      <div 
        className="absolute top-[3950px] right-[6%] w-32 h-32 rounded-full border border-orange-300/40 bg-gradient-to-tr from-orange-400/22 via-amber-200/15 to-white/45 backdrop-blur-xs shadow-[0_8px_32px_rgba(251,146,60,0.16),inset_0_0_20px_rgba(255,255,255,0.7)] animate-bubble-float"
        style={{ animationDuration: '12s' }}
      >
        <div className="absolute top-3.5 left-4 w-7 h-4 rounded-full bg-white/70 rotate-[-35deg]" />
      </div>
      <div 
        className="absolute top-[4080px] right-[12%] w-14 h-14 rounded-full border border-orange-300/35 bg-gradient-to-tr from-orange-400/18 to-white/35 backdrop-blur-xs shadow-[0_4px_16px_rgba(251,146,60,0.12),inset_0_0_10px_rgba(255,255,255,0.6)] animate-bubble-float-delayed"
      >
        <div className="absolute top-2 left-2 w-3 h-2 rounded-full bg-white/70 rotate-[-35deg]" />
      </div>

      {/* Bong bóng cam khu vực 3 Cơ sở & Mạng xã hội */}
      <div 
        className="absolute top-[4420px] left-[5%] w-28 h-28 rounded-full border border-orange-300/40 bg-gradient-to-tr from-orange-400/20 via-amber-200/15 to-white/45 backdrop-blur-xs shadow-[0_8px_30px_rgba(251,146,60,0.15),inset_0_0_18px_rgba(255,255,255,0.7)] animate-bubble-float-delayed"
      >
        <div className="absolute top-3 left-4 w-5 h-3 rounded-full bg-white/70 rotate-[-35deg]" />
      </div>
      <div 
        className="absolute top-[4520px] left-[11%] w-12 h-12 rounded-full border border-orange-300/30 bg-gradient-to-tr from-orange-400/15 to-white/35 backdrop-blur-xs shadow-[0_4px_12px_rgba(251,146,60,0.1),inset_0_0_8px_rgba(255,255,255,0.6)] animate-bubble-float"
        style={{ animationDuration: '8s' }}
      >
        <div className="absolute top-1.5 left-2 w-2 h-1 rounded-full bg-white/70 rotate-[-35deg]" />
      </div>

      {/* Bong bóng cam tận cùng Footer */}
      <div 
        className="absolute top-[4820px] right-[8%] w-24 h-24 rounded-full border border-orange-300/35 bg-gradient-to-tr from-orange-400/18 via-amber-200/12 to-white/40 backdrop-blur-xs shadow-[0_6px_24px_rgba(251,146,60,0.12),inset_0_0_15px_rgba(255,255,255,0.65)] animate-bubble-float"
        style={{ animationDuration: '11s' }}
      >
        <div className="absolute top-2.5 left-3 w-4 h-2 rounded-full bg-white/70 rotate-[-35deg]" />
      </div>
    </div>
  );
};
