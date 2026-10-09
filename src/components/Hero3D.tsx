import React from 'react';
import { ArrowRight, BookOpen, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { RobotCanvas3D } from './RobotCanvas3D';

interface Hero3DProps {
  onOpenTrialModal: () => void;
}

export const Hero3D: React.FC<Hero3DProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center bg-[#e5e5e5]">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/40 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-orange-100/30 rounded-full blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col z-20">
            {/* Main H1 Headline - Balanced size, clean 2-line structure */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-[#000000] leading-[1.16] mb-6 uppercase">
              LẬP TRÌNH ROBOT &amp; AI <span className="text-orange-600 block sm:inline">CÙNG CON TỪ SỚM</span>
            </h1>

            {/* Subtitle - 3 campuses: Hải Phòng, Hưng Yên, Ninh Bình & < 10 students */}
            <p className="text-base sm:text-lg text-[#444444] leading-relaxed max-w-2xl mb-8">
              3 cơ sở tại Hải Phòng, Hưng Yên, Ninh Bình và trực tuyến toàn quốc, mỗi lớp dưới 10 học viên. <strong className="text-[#000000] font-bold">VIAI Academy</strong> đồng hành cùng con từ trực quan sáng tạo đến tư duy giải thuật công nghệ chuẩn quốc tế.
            </p>

            {/* CTA Button Group - Dayos 8px radius buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenTrialModal}
                className="flex items-center justify-center gap-3 rounded-[8px] bg-orange-600 hover:bg-orange-700 px-8 py-4 text-base font-semibold text-white active:scale-98 transition-all shadow-sm"
              >
                <Sparkles className="h-5 w-5 text-amber-200" />
                <span>Đặt buổi học thử miễn phí</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#khoa-hoc"
                className="inline-flex items-center justify-center gap-2.5 rounded-[8px] bg-[#ffffff] text-[#000000] border border-black/10 px-8 py-4 text-base font-semibold transition-all hover:bg-[#f3f3f3]"
              >
                <BookOpen className="h-5 w-5 text-orange-600" />
                <span>Xem lộ trình khoá học</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-black/10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-[#444444]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-black" />
                <span className="font-bold text-[#000000]">1,000+ Học viên</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                <span className="font-bold text-[#000000]">Lớp &lt; 10 HV (Kèm 1-1)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-700" />
                <span className="font-bold text-[#000000]">Cam kết hoàn 100%</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#ffffff] px-2.5 py-1 rounded-full border border-black/5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-500" />
                <span className="font-bold text-[#000000]">4.9 / 5</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Robot (Clean presentation without clutter) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            <RobotCanvas3D />
          </div>
        </div>
      </div>
    </section>
  );
};
