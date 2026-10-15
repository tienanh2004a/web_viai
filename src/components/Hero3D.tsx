import React from 'react';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { RobotCanvas3D } from './RobotCanvas3D';

interface Hero3DProps {
  onOpenTrialModal: () => void;
}

export const Hero3D: React.FC<Hero3DProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="relative min-h-[85vh] pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center bg-gradient-to-b from-[#fff7ed]/60 via-[#fffdfa] to-[#fffaf5]/80">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/60 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-orange-100/40 rounded-full blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col z-20">
            {/* Main H1 Headline - Balanced size, clean 2-line structure with comfortable diacritic spacing */}
            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold tracking-tight text-[#111827] leading-[1.3] sm:leading-[1.25] mb-6 uppercase">
              LẬP TRÌNH ROBOT &amp; AI
              <span className="text-[#c2410c] block mt-2 sm:mt-2.5">CÙNG CON TỪ SỚM</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed max-w-2xl mb-8">
              Nhiều cơ sở trên khắp các tỉnh thành miền Bắc ví dụ như Hưng Yên, Hải Phòng, Ninh Bình. <strong className="text-[#111827] font-bold">VIAI Academy</strong> đồng hành cùng con từ trực quan sáng tạo đến tư duy giải thuật công nghệ chuẩn quốc tế.
            </p>

            {/* CTA Button Group - Impeccable 10px-12px radius buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenTrialModal}
                className="flex items-center justify-center gap-3 rounded-xl bg-[#c2410c] hover:bg-[#9a3412] px-8 py-4 text-base font-bold text-white active:scale-98 transition-all shadow-sm cursor-pointer"
              >
                <Sparkles className="h-5 w-5 text-amber-200" />
                <span>Đặt buổi học thử miễn phí</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#khoa-hoc"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white text-[#111827] border border-black/8 px-8 py-4 text-base font-bold transition-all hover:bg-[#fafaf9] shadow-2xs"
              >
                <BookOpen className="h-5 w-5 text-[#c2410c]" />
                <span>Xem lộ trình khoá học</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Interactive Robot */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            <RobotCanvas3D />
          </div>
        </div>
      </div>
    </section>
  );
};
