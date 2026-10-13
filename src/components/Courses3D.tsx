import React, { useState } from 'react';
import { Sparkles, MapPin, ArrowRight, BookOpen, CheckCircle2, Cpu } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { coursesData, PRIMARY_COURSE_SLUGS, COURSE_CATEGORIES } from '../data/coursesData';

interface Courses3DProps {
  onOpenTrialModal: (courseName?: string) => void;
  onViewCourseDetail: (courseSlug: string) => void;
}

export const Courses3D: React.FC<Courses3DProps> = ({ onOpenTrialModal, onViewCourseDetail }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'mam-non' | 'tieu-hoc' | 'trung-hoc'>('all');

  const filteredSlugs = PRIMARY_COURSE_SLUGS.filter(slug => {
    const course = coursesData[slug];
    if (!course) return false;
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'mam-non') return slug === 'robotics-mam-non';
    if (selectedCategory === 'tieu-hoc') {
      return slug === 'robotics-lop-1-2' || slug === 'robotics-lop-3-4' || slug === 'robotics-lop-5';
    }
    if (selectedCategory === 'trung-hoc') {
      return slug === 'robotics-lop-6-7' || slug === 'robotics-ai-lop-8-9';
    }
    return true;
  });

  return (
    <section id="khoa-hoc" className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#f5f5f7]">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-black/8 px-4 py-1.5 text-xs font-bold text-[#c2410c] shadow-2xs mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>LỘ TRÌNH 4 HỌC PHẦN · 52 BUỔI / NĂM</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111827] mb-4">
            Chương trình đào tạo <span className="text-[#c2410c]">Robotics &amp; AI</span>
          </h2>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#4b5563] leading-relaxed">
            Hệ thống đào tạo toàn diện từ Mầm non đến Trung học (Lớp 1 đến Lớp 9). Mỗi khóa học gồm 4 học phần (52 buổi), tích hợp buổi 13 <strong>"Phát triển lập trình"</strong> và thi đấu thực chiến.
          </p>
        </div>

        {/* Filter Category Tabs - Thiết kế trực quan, dễ bấm cho phụ huynh */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-white border border-black/8 shadow-xs">
            {COURSE_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#111827] text-white shadow-xs'
                      : 'text-[#4b5563] hover:text-[#111827] hover:bg-gray-100/70'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSlugs.map((slug) => {
            const course = coursesData[slug];
            if (!course) return null;

            return (
              <TiltCard 
                key={course.slug} 
                glowColor={course.glowColor} 
                className="flex flex-col h-full rounded-3xl border border-black/8 bg-white group overflow-hidden shadow-2xs hover:shadow-md transition-shadow"
              >
                {/* Course Thumbnail Image (Clickable) */}
                <div
                  onClick={() => onViewCourseDetail(course.slug)}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-[#f3f3f3] cursor-pointer"
                >
                  <img
                    src={course.coverImage}
                    alt={course.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badge Tag */}
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#111827] shadow-xs border border-black/5">
                    <Sparkles className="h-3.5 w-3.5 text-[#c2410c]" />
                    {course.badge}
                  </span>

                  {/* Age & Format */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-semibold text-white">
                    <span className="bg-black/85 backdrop-blur-xs px-2.5 py-1 rounded-md text-white font-bold">
                      {course.grade}
                    </span>
                    <span className="bg-orange-600/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-white font-bold">
                      4 HK · 52 buổi
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between text-xs text-gray-500 font-semibold mb-2">
                    <span className="text-orange-700 bg-orange-50 border border-orange-200/60 px-2.5 py-0.5 rounded-md">
                      {course.academicName}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <MapPin className="h-3 w-3 text-orange-500" />
                      <span>3 cơ sở</span>
                    </span>
                  </div>

                  <h3
                    onClick={() => onViewCourseDetail(course.slug)}
                    className="text-lg sm:text-xl font-bold text-[#111827] tracking-tight mb-2.5 group-hover:text-[#c2410c] transition-colors cursor-pointer"
                  >
                    {course.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4b5563] mb-4 leading-relaxed line-clamp-2">
                    {course.headline}
                  </p>

                  {/* Device Highlight Box */}
                  <div className="rounded-xl border border-gray-100 bg-[#faf9f6] p-3 mb-5 flex items-start gap-2.5">
                    <Cpu className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wide">Học cụ thực hành:</span>
                      <span className="block text-xs font-bold text-gray-800 truncate">{course.hardwareKit.name}</span>
                    </div>
                  </div>

                  {/* 4 Feature Bullets */}
                  <div className="space-y-2 mb-6 flex-1">
                    {course.skillsGained.slice(0, 3).map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-[#374151] leading-relaxed">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>{skill.title}:</strong> {skill.desc}</span>
                      </div>
                    ))}
                    <div className="flex items-start gap-2 text-xs text-orange-700 leading-relaxed font-semibold">
                      <Sparkles className="h-3.5 w-3.5 text-orange-600 shrink-0 mt-0.5" />
                      <span>Buổi 13 mỗi học phần: Chuyên sâu <strong>Phát triển lập trình</strong></span>
                    </div>
                  </div>

                  {/* Action Buttons: View Details & Free Trial */}
                  <div className="space-y-2.5 mt-auto pt-2 border-t border-gray-100">
                    <button
                      onClick={() => onViewCourseDetail(course.slug)}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#f5f5f7] hover:bg-neutral-200 p-3 text-xs sm:text-sm font-bold text-[#111827] transition-all cursor-pointer"
                    >
                      <BookOpen className="h-4 w-4 text-neutral-600" />
                      <span>Xem đề cương chi tiết 52 buổi</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button
                      onClick={() => onOpenTrialModal(course.name)}
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
