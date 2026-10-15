import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Cpu, Layers } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { GRADE_LEVELS, PRIMARY_GRADE_LEVEL_IDS, type GradeLevel } from '../data/coursesData';

interface Courses3DProps {
  onOpenTrialModal: (courseName?: string) => void;
  onViewGradeLevel: (levelId: 'mam-non' | 'tieu-hoc' | 'trung-hoc') => void;
}

export const Courses3D: React.FC<Courses3DProps> = ({ onOpenTrialModal, onViewGradeLevel }) => {
  return (
    <section id="khoa-hoc" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white/80 via-[#fffaf5]/90 to-white/80 border-b border-orange-100/70">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-black/8 px-4 py-1.5 text-xs font-bold text-[#c2410c] shadow-2xs mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>LỘ TRÌNH ĐÀO TẠO STEAM &amp; AI TOÀN DIỆN</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111827] mb-4">
            Chương trình đào tạo <span className="text-[#c2410c]">3 Cấp Học</span>
          </h2>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#4b5563] leading-relaxed">
            Hệ thống giáo dục chuẩn hóa phân tầng khoa học từ Mầm Non, Tiểu Học đến Trung Học Cơ Sở. Nhấp vào từng cấp học để khám phá chi tiết các khóa học con phù hợp với từng độ tuổi của con.
          </p>
        </div>

        {/* 3 School Levels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRIMARY_GRADE_LEVEL_IDS.map((levelId) => {
            const level: GradeLevel = GRADE_LEVELS[levelId];
            if (!level) return null;

            const childCount = level.childCourseSlugs.length;
            const glowColor = levelId === 'mam-non' ? 'orange' : levelId === 'tieu-hoc' ? 'cyan' : 'purple';

            return (
              <TiltCard 
                key={level.id} 
                glowColor={glowColor as any} 
                className="flex flex-col h-full rounded-3xl border border-black/8 bg-white group overflow-hidden shadow-2xs hover:shadow-lg transition-all"
              >
                {/* Course Level Thumbnail Image (Clickable to enter grade level page) */}
                <div
                  onClick={() => onViewGradeLevel(level.id)}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-[#f3f3f3] cursor-pointer"
                  title={`Khám phá các khóa học ${level.name}`}
                >
                  <img
                    src={level.coverImage}
                    alt={level.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                  {/* Badge Tag */}
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-xs px-3 py-1 text-xs font-bold text-[#111827] shadow-xs border border-black/5">
                    <Sparkles className="h-3.5 w-3.5 text-[#c2410c]" />
                    {level.badge}
                  </span>

                  {/* Child Courses count tag */}
                  <div className="absolute bottom-3 right-3 flex items-center text-xs font-semibold text-white">
                    <span className="bg-orange-600/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-white font-bold inline-flex items-center gap-1">
                      <Layers className="h-3 w-3" />
                      {childCount} khoá học
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  {/* Category Pill */}
                  <div className="flex items-center text-xs text-gray-500 font-semibold mb-2">
                    <span className="text-orange-700 bg-orange-50 border border-orange-200/60 px-2.5 py-0.5 rounded-md font-bold">
                      {level.academicName}
                    </span>
                  </div>

                  {/* Level Name (Clickable) */}
                  <h3
                    onClick={() => onViewGradeLevel(level.id)}
                    className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight mb-2 group-hover:text-[#c2410c] transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{level.name}</span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#c2410c] transition-transform group-hover:translate-x-1 shrink-0 ml-1" />
                  </h3>

                  {/* Headline */}
                  <p className="text-xs sm:text-sm text-[#4b5563] mb-4 leading-relaxed line-clamp-2">
                    {level.headline}
                  </p>



                  {/* Hardware Kit Summary Box */}
                  <div className="rounded-xl border border-gray-100 bg-[#faf9f6] p-3 mb-5 flex items-start gap-2.5">
                    <Cpu className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wide">Học cụ thực hành tổng hợp:</span>
                      <span className="block text-xs font-semibold text-gray-800 line-clamp-2">{level.hardwareKitSummary}</span>
                    </div>
                  </div>

                  {/* 3 Summary Feature Bullets */}
                  <div className="space-y-2 mb-6 flex-1">
                    {level.highlights.slice(0, 3).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#374151] leading-relaxed">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>{item.title}:</strong> {item.desc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action: Click to explore child courses hint + ONLY 1 CTA BUTTON */}
                  <div className="mt-auto pt-3 border-t border-gray-100 space-y-2.5">
                    <button
                      onClick={() => onViewGradeLevel(level.id)}
                      className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-[#c2410c] hover:text-[#9a3412] hover:underline cursor-pointer py-1 transition-colors"
                    >
                      <span>Khám phá chi tiết {childCount} khóa học cấp này</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>

                    {/* Duy nhất 1 nút: Đặt buổi học thử 1-1 miễn phí */}
                    <button
                      onClick={() => onOpenTrialModal(level.name)}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#c2410c] hover:bg-[#9a3412] p-3 text-xs sm:text-sm font-bold text-white active:scale-98 transition-all cursor-pointer shadow-xs"
                    >
                      <Sparkles className="h-4 w-4 text-amber-200" />
                      <span>Đặt buổi học thử 1-1 miễn phí</span>
                    </button>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

