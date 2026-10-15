import React from 'react';

/**
 * OrangeBubblesBackground
 * Hệ thống bong bóng cam nhạt & ánh sáng phát quang ấm áp
 * Tạo cảm giác nền trắng sạch sẽ, điểm xuyết các bong bóng cam lơ lửng bồng bềnh
 */
export const OrangeBubblesBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 1. Các vệt ánh sáng cam mờ siêu êm (Soft Ambient Orange Glows) */}
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-gradient-to-br from-orange-300/20 via-amber-200/15 to-transparent rounded-full blur-[140px] animate-pulse-slow" />
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-orange-400/15 via-rose-200/10 to-transparent rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-2/3 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-amber-300/15 via-orange-200/10 to-transparent rounded-full blur-[130px] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-gradient-to-tl from-orange-300/15 via-amber-200/10 to-transparent rounded-full blur-[140px]" />

      {/* 2. Các quả cầu bong bóng cam thủy tinh trôi nổi (Glassmorphic Orange Bubbles) */}
      {/* Bong bóng lớn 1 (Góc trên bên phải) */}
      <div 
        className="absolute top-20 right-[8%] w-36 h-36 rounded-full border border-orange-300/40 bg-gradient-to-tr from-orange-400/15 via-amber-200/10 to-white/40 backdrop-blur-xs shadow-[0_8px_32px_rgba(251,146,60,0.12),inset_0_0_20px_rgba(255,255,255,0.7)] animate-bubble-float"
      >
        {/* Điểm phản quang ánh sáng */}
        <div className="absolute top-4 left-5 w-7 h-4 rounded-full bg-white/70 rotate-[-35deg] blur-[1px]" />
      </div>

      {/* Bong bóng nhỏ 1 gần bong bóng lớn 1 */}
      <div 
        className="absolute top-44 right-[5%] w-14 h-14 rounded-full border border-orange-300/35 bg-gradient-to-tr from-orange-400/15 via-amber-200/10 to-white/35 backdrop-blur-xs shadow-[0_4px_16px_rgba(251,146,60,0.1),inset_0_0_10px_rgba(255,255,255,0.6)] animate-bubble-float-delayed"
      >
        <div className="absolute top-2 left-2.5 w-3 h-2 rounded-full bg-white/70 rotate-[-35deg]" />
      </div>

      {/* Bong bóng trung bình 2 (Góc giữa bên trái) */}
      <div 
        className="absolute top-[38%] left-[4%] w-28 h-28 rounded-full border border-orange-300/35 bg-gradient-to-tr from-orange-400/15 via-amber-200/10 to-white/40 backdrop-blur-xs shadow-[0_8px_30px_rgba(251,146,60,0.12),inset_0_0_18px_rgba(255,255,255,0.7)] animate-bubble-float-delayed"
      >
        <div className="absolute top-3.5 left-4 w-5 h-3 rounded-full bg-white/70 rotate-[-35deg] blur-[0.5px]" />
      </div>

      {/* Bong bóng nhỏ 2 */}
      <div 
        className="absolute top-[42%] left-[11%] w-10 h-10 rounded-full border border-orange-300/30 bg-gradient-to-tr from-orange-400/10 to-white/30 backdrop-blur-xs shadow-[0_4px_12px_rgba(251,146,60,0.08),inset_0_0_8px_rgba(255,255,255,0.5)] animate-bubble-float"
        style={{ animationDuration: '9s' }}
      >
        <div className="absolute top-1.5 left-2 w-2 h-1.5 rounded-full bg-white/70 rotate-[-35deg]" />
      </div>

      {/* Bong bóng lớn 3 (Góc dưới giữa - phải) */}
      <div 
        className="absolute top-[68%] right-[10%] w-32 h-32 rounded-full border border-orange-300/35 bg-gradient-to-tr from-orange-400/15 via-amber-200/10 to-white/40 backdrop-blur-xs shadow-[0_8px_30px_rgba(251,146,60,0.12),inset_0_0_18px_rgba(255,255,255,0.7)] animate-bubble-float"
        style={{ animationDuration: '11s' }}
      >
        <div className="absolute top-3.5 left-4 w-6 h-3 rounded-full bg-white/70 rotate-[-35deg]" />
      </div>

      {/* Bong bóng nhỏ 3 */}
      <div 
        className="absolute top-[75%] right-[16%] w-12 h-12 rounded-full border border-orange-300/30 bg-gradient-to-tr from-orange-400/15 to-white/30 backdrop-blur-xs shadow-[0_4px_12px_rgba(251,146,60,0.08),inset_0_0_8px_rgba(255,255,255,0.6)] animate-bubble-float-delayed"
      >
        <div className="absolute top-2 left-2 w-2.5 h-1.5 rounded-full bg-white/70 rotate-[-35deg]" />
      </div>

      {/* Bong bóng nổi gần chân trang */}
      <div 
        className="absolute top-[88%] left-[7%] w-24 h-24 rounded-full border border-orange-300/35 bg-gradient-to-tr from-orange-400/15 via-amber-200/10 to-white/40 backdrop-blur-xs shadow-[0_6px_24px_rgba(251,146,60,0.1),inset_0_0_15px_rgba(255,255,255,0.6)] animate-bubble-float"
        style={{ animationDuration: '12s' }}
      >
        <div className="absolute top-3 left-3 w-4 h-2 rounded-full bg-white/70 rotate-[-35deg]" />
      </div>
    </div>
  );
};
