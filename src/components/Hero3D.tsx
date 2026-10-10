import React from 'react';
import { ArrowRight, BookOpen, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { RobotCanvas3D } from './RobotCanvas3D';

interface Hero3DProps {
  onOpenTrialModal: () => void;
}

export const Hero3D: React.FC<Hero3DProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center bg-[#f5f5f7]">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/60 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-orange-100/40 rounded-full blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col z-20">
            {/* Main H1 Headline - Balanced size, clean 2-line structure */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-[#111827] leading-[1.16] mb-6 uppercase">
              LẬP TRÌNH ROBOT &amp; AI <span className="text-[#c2410c] block sm:inline">CÙNG CON TỪ SỚM</span>
            </h1>

            {/* Subtitle - 3 campuses: Hải Phòng, Hưng Yên, Ninh Bình & < 10 students */}
            <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed max-w-2xl mb-8">
              3 cơ sở tại Hải Phòng, Hưng Yên, Ninh Bình và trực tuyến toàn quốc, mỗi lớp dưới 10 học viên. <strong className="text-[#111827] font-bold">VIAI Academy</strong> đồng hành cùng con từ trực quan sáng tạo đến tư duy giải thuật công nghệ chuẩn quốc tế.
            </p>

            {/* CTA Button Group - Impeccable 10px-12px radius buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
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

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-black/8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#4b5563]">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#111827]" />
                <span className="font-bold text-[#111827]">1,000+ Học viên</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#c2410c]" />
                <span className="font-bold text-[#111827]">Lớp &lt; 10 HV (Kèm 1-1)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-700" />
                <span className="font-bold text-[#111827]">Cam kết hoàn 100%</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-black/8 shadow-2xs">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <span className="font-bold text-[#111827]">4.9 / 5</span>
              </div>
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
