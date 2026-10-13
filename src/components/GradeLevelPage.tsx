import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, Sparkles, CheckCircle2, Cpu, ArrowRight, 
  Layers, BookOpen, ShieldCheck, Trophy, Compass, Users, Clock,
  Check, Gift, Calendar
} from 'lucide-react';
import { 
  GRADE_LEVELS, 
  PRIMARY_GRADE_LEVEL_IDS, 
  coursesData, 
  type GradeLevel, 
  type CourseDetail 
} from '../data/coursesData';

interface GradeLevelPageProps {
  levelId: 'mam-non' | 'tieu-hoc' | 'trung-hoc';
  onBackToHome: () => void;
  onBackToCourses: () => void;
  onSelectCourse: (courseSlug: string) => void;
  onOpenTrialModal: (courseName?: string) => void;
  onSwitchLevel: (levelId: 'mam-non' | 'tieu-hoc' | 'trung-hoc') => void;
}

export const GradeLevelPage: React.FC<GradeLevelPageProps> = ({
  levelId,
  onBackToHome,
  onBackToCourses,
  onSelectCourse,
  onOpenTrialModal,
  onSwitchLevel,
}) => {
  const currentLevel: GradeLevel = GRADE_LEVELS[levelId] || GRADE_LEVELS['tieu-hoc'];
  const [selectedCurriculumSlug, setSelectedCurriculumSlug] = useState<string>('mam-non-co-ban');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (levelId === 'mam-non') {
      setSelectedCurriculumSlug('mam-non-co-ban');
    } else {
      setSelectedCurriculumSlug(currentLevel.childCourseSlugs[0] || '');
    }
  }, [levelId, currentLevel.childCourseSlugs]);

  const activeCurriculumCourse: CourseDetail | undefined = coursesData[selectedCurriculumSlug];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#111827] flex flex-col font-sans selection:bg-[#c2410c] selection:text-white">
      {/* 1. Sticky Navigation & Breadcrumb */}
      <nav aria-label="Breadcrumb" className="sticky top-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-orange-200/50 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-800 bg-white border border-orange-200/80 px-3.5 py-1.5 rounded-xl hover:bg-orange-50 hover:border-orange-300 transition-all cursor-pointer shadow-2xs shrink-0"
            >
              <ArrowLeft className="h-4 w-4 text-[#c2410c]" />
              <span>Trang chủ</span>
            </button>
            <span className="text-orange-300 hidden sm:inline">/</span>
            <button
              type="button"
              onClick={onBackToCourses}
              className="text-xs sm:text-sm text-gray-600 hover:text-[#c2410c] font-semibold hidden sm:inline cursor-pointer transition-colors"
            >
              Khoá học
            </button>
            <span className="text-orange-300 hidden sm:inline">/</span>
            <span className="text-xs sm:text-sm font-bold text-[#c2410c] truncate">
              {currentLevel.name}
            </span>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="tel:0963909192"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#c2410c] transition-colors"
            >
              <span>Hotline: 0963.909.192</span>
            </a>
            <button
              onClick={() => onOpenTrialModal(currentLevel.name)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#c2410c] hover:bg-[#9a3412] px-4 sm:px-5 py-2 text-xs font-bold text-white transition-all shadow-xs cursor-pointer active:scale-98"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-200" />
              <span>Đặt buổi học thử 1-1</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Cụm chuyển đổi nhanh giữa 3 Cấp Học */}
      <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border-b border-orange-200/60 py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider hidden md:inline">
            Chọn cấp học:
          </span>
          {PRIMARY_GRADE_LEVEL_IDS.map((id) => {
            const level = GRADE_LEVELS[id];
            const isActive = level.id === currentLevel.id;
            return (
              <button
                key={level.id}
                onClick={() => onSwitchLevel(level.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#c2410c] text-white shadow-xs'
                    : 'bg-white text-gray-700 border border-orange-200/80 hover:bg-orange-100/60 hover:text-[#c2410c]'
                }`}
              >
                <span>{level.shortName}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-md ${
                  isActive ? 'bg-white/20 text-white' : 'bg-orange-100 text-orange-800'
                }`}>
                  {level.displayAge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. HERO BANNER CẤP BẬC HỌC */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/50 via-[#faf8f5] to-[#faf8f5] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-orange-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Value Prop */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/70 border border-orange-200 px-3.5 py-1 text-xs font-bold text-[#c2410c] shadow-2xs mb-4">
                <Sparkles className="h-3.5 w-3.5 text-orange-600" />
                <span>{currentLevel.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111827] mb-4 leading-tight">
                {currentLevel.name}
              </h1>

              <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed mb-6">
                {currentLevel.headline}
              </p>

              {/* Stat Cards - Đổi < 8 thành < 10 học viên, bỏ thẻ Đầu ra theo đúng yêu cầu ảnh 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2 border-t border-orange-200/60 w-full">
                <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-3.5 border border-orange-100 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1">
                    <Layers className="h-3.5 w-3.5 text-[#c2410c]" />
                    <span>Khóa học</span>
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-[#111827]">
                    {currentLevel.childCourseSlugs.length} Khóa học
                  </div>
                  <div className="text-[11px] text-gray-500">Phân theo trình độ</div>
                </div>

                <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-3.5 border border-orange-100 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1">
                    <Clock className="h-3.5 w-3.5 text-[#c2410c]" />
                    <span>Lộ trình</span>
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-[#111827]">
                    {currentLevel.id === 'mam-non' ? '3 Lộ trình / Khóa' : '4 Học phần'}
                  </div>
                  <div className="text-[11px] text-gray-500">
                    {currentLevel.id === 'mam-non' ? '12 buổi + 1 buổi Free' : '52 buổi / năm học'}
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-3.5 border border-orange-100 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1">
                    <Users className="h-3.5 w-3.5 text-[#c2410c]" />
                    <span>Quy mô lớp</span>
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-[#111827]">
                    &lt; 10 Học viên
                  </div>
                  <div className="text-[11px] text-gray-500">Kèm sát 1-1 tận tình</div>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-orange-200/80 bg-white shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                  <img
                    src={currentLevel.coverImage}
                    alt={currentLevel.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase font-extrabold text-amber-300 tracking-wider">
                      {currentLevel.academicName}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold leading-snug mt-1">
                      {currentLevel.tagline}
                    </h3>
                  </div>
                </div>

                {/* Hardware Kit Highlight Box */}
                <div className="p-4 sm:p-5 bg-gradient-to-br from-white to-orange-50/50 border-t border-orange-100">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                        Học Cụ Chuẩn Châu Âu 1-1
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        {currentLevel.hardwareKitSummary}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. DANH SÁCH CÁC KHÓA HỌC THUỘC CẤP HỌC (3 KHÓA CƠ BẢN, NÂNG CAO, CHUYÊN SÂU CHO MẦM NON) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-orange-200 px-4 py-1.5 text-xs font-bold text-[#c2410c] shadow-2xs mb-3">
              <Compass className="h-3.5 w-3.5" />
              <span>PHÂN CHIA 3 CẤP ĐỘ RÕ RÀNG</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
              Các Khóa Học Thuộc <span className="text-[#c2410c]">{currentLevel.name}</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Mỗi khóa học được thiết kế chuyên biệt và tối ưu theo từng giai đoạn phát triển nhận thức. 
              <strong> Nhấp vào từng khóa học</strong> để xem toàn bộ 3 lộ trình, chi tiết từng bài học và đăng ký trải nghiệm.
            </p>
          </div>

          {/* Child Courses Grid */}
          <div className={`grid grid-cols-1 ${currentLevel.childCourseSlugs.length === 1 ? 'max-w-2xl mx-auto' : currentLevel.childCourseSlugs.length === 2 ? 'md:grid-cols-2 max-w-5xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
            {currentLevel.childCourseSlugs.map((slug) => {
              const childCourse: CourseDetail = coursesData[slug];
              if (!childCourse) return null;

              return (
                <div
                  key={childCourse.slug}
                  className="flex flex-col h-full bg-white rounded-3xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 shadow-xs hover:shadow-xl group overflow-hidden"
                >
                  {/* Thumbnail Image (Clickable) */}
                  <div
                    onClick={() => onSelectCourse(childCourse.slug)}
                    className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 cursor-pointer"
                  >
                    <img
                      src={childCourse.coverImage}
                      alt={childCourse.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Age Badge */}
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-xs px-3 py-1 text-xs font-bold text-[#c2410c] shadow-xs border border-orange-200">
                      <Sparkles className="h-3 w-3" />
                      {childCourse.displayAge}
                    </span>

                    {/* Badge right */}
                    <span className="absolute top-3 right-3 inline-flex items-center rounded-md bg-black/75 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-xs">
                      {childCourse.badge}
                    </span>

                    {/* Bottom Stats Banner */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-semibold text-white">
                      <span className="bg-orange-600/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-white font-bold">
                        {childCourse.modules.length} Lộ trình · {childCourse.modules.length * 13} buổi (12+1 Free)
                      </span>
                      <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-[11px] text-amber-200">
                        ⭐ {childCourse.rating} ({childCourse.totalStudents}+ học viên)
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold text-orange-600 mb-1 uppercase tracking-wider">
                        {childCourse.academicName}
                      </div>

                      <h3
                        onClick={() => onSelectCourse(childCourse.slug)}
                        className="text-xl font-bold text-[#111827] group-hover:text-[#c2410c] transition-colors cursor-pointer mb-2 leading-snug"
                      >
                        {childCourse.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
                        {childCourse.headline}
                      </p>

                      {/* 3 Lộ trình nổi bật */}
                      <div className="space-y-2 mb-6">
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                          3 Lộ Trình Đào Tạo Chuẩn:
                        </span>
                        {childCourse.modules.slice(0, 3).map((mod, idx) => (
                          <div
                            key={mod.id}
                            className="flex items-center justify-between text-xs p-2 rounded-xl bg-orange-50/60 border border-orange-100 text-gray-700 font-medium"
                          >
                            <span className="truncate pr-2 font-semibold text-gray-900">
                              Lộ trình {idx + 1}: {mod.name}
                            </span>
                            <span className="text-[11px] text-orange-700 bg-orange-100/80 px-2 py-0.5 rounded-md shrink-0 font-bold">
                              12 + 1 Free
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 2 CTA Buttons */}
                    <div className="pt-4 border-t border-gray-100 space-y-2.5">
                      {/* Nút 1: Xem chi tiết */}
                      <button
                        onClick={() => onSelectCourse(childCourse.slug)}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-50 hover:bg-orange-100 border border-orange-200/80 p-3 text-xs sm:text-sm font-bold text-[#c2410c] transition-all cursor-pointer shadow-2xs"
                      >
                        <BookOpen className="h-4 w-4 text-[#c2410c]" />
                        <span>Xem chi tiết giáo trình &amp; các bài học</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>

                      {/* Nút 2: Đặt buổi học thử 1-1 */}
                      <button
                        onClick={() => onOpenTrialModal(childCourse.name)}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#c2410c] hover:bg-[#9a3412] p-3 text-xs sm:text-sm font-bold text-white active:scale-98 transition-all cursor-pointer shadow-xs"
                      >
                        <Sparkles className="h-4 w-4 text-amber-200" />
                        <span>Đặt buổi học thử 1-1 miễn phí</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. KHUNG CHƯƠNG TRÌNH & CHI TIẾT 3 LỘ TRÌNH (BẢNG SHEET THEO YÊU CẦU ẢNH 3) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1 text-xs font-bold text-emerald-800 shadow-2xs mb-3">
              <Calendar className="h-3.5 w-3.5 text-emerald-600" />
              <span>LỘ TRÌNH CHI TIẾT 12 BUỔI CHÍNH + 1 BUỔI FREE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
              Giáo Trình Từng Buổi Học Thuộc <span className="text-[#c2410c]">{currentLevel.name}</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Mỗi khóa học gồm 3 lộ trình độc lập, mỗi lộ trình 12 bài học theo chủ đề + 1 buổi Free ôn tập &amp; thuyết trình cho phụ huynh.
            </p>

            {/* Course Switcher Tabs */}
            {currentLevel.childCourseSlugs.length > 1 && (
              <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mt-8">
                {currentLevel.childCourseSlugs.map((slug) => {
                  const c = coursesData[slug];
                  if (!c) return null;
                  const isSelected = selectedCurriculumSlug === slug;
                  return (
                    <button
                      key={slug}
                      onClick={() => setSelectedCurriculumSlug(slug)}
                      className={`px-4 sm:px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#111827] text-white shadow-md scale-105'
                          : 'bg-[#faf8f5] text-gray-700 border border-gray-200 hover:bg-orange-50 hover:border-orange-300'
                      }`}
                    >
                      {c.name}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 3 Columns of 3 Lộ Trình for the selected course */}
          {activeCurriculumCourse && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
              {activeCurriculumCourse.modules.slice(0, 3).map((module, mIdx) => (
                <div
                  key={module.id}
                  className="rounded-3xl border-2 border-orange-100 bg-[#faf8f5] overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col h-full"
                >
                  {/* Module Header */}
                  <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-5 text-white">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs uppercase font-extrabold tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full">
                        Lộ trình {mIdx + 1}
                      </span>
                      <span className="text-[11px] font-bold text-amber-100 bg-black/20 px-2 py-0.5 rounded-md">
                        13 Buổi (12 + 1 Free)
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black leading-snug">
                      {module.name}
                    </h3>
                  </div>

                  {/* Body Topics & Lessons */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-4">
                      {module.topics && module.topics.length > 0 ? (
                        module.topics.map((tp, tIdx) => {
                          const isFreeTopic = tp.title.includes('Free') || tp.title.includes('Tặng');
                          if (isFreeTopic) return null; // Rendered separately below
                          return (
                            <div key={tIdx} className="bg-white rounded-2xl p-3.5 border border-gray-200/80 shadow-2xs">
                              <div className="text-xs font-bold text-[#c2410c] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#c2410c]" />
                                <span>Chủ đề: {tp.title}</span>
                              </div>
                              <ul className="space-y-1.5 text-xs text-gray-700">
                                {tp.lessons.map((ls, lIdx) => (
                                  <li key={lIdx} className="flex items-start gap-2">
                                    <span className="text-orange-400 font-bold shrink-0 mt-0.5">•</span>
                                    <span className="font-medium text-gray-800">{ls}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })
                      ) : (
                        <div className="bg-white rounded-2xl p-4 border border-gray-200/80">
                          <p className="text-xs text-gray-600 leading-relaxed">{module.description}</p>
                        </div>
                      )}

                      {/* Khối màu xanh lá TẶNG FREE đúng như trong ảnh 3 */}
                      <div className="bg-emerald-50 rounded-2xl p-4 border-2 border-emerald-300 text-emerald-950 shadow-xs">
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-emerald-200">
                          <Gift className="h-4 w-4 text-emerald-700 shrink-0" />
                          <span className="text-xs font-black uppercase tracking-wider text-emerald-800">
                            TẶNG FREE (Buổi 13)
                          </span>
                        </div>
                        <ul className="space-y-1.5 text-xs font-medium text-emerald-900">
                          <li className="flex items-start gap-1.5">
                            <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>Ôn tập củng cố kiến thức</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>Thuyết trình demo cho giáo viên</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>Thuyết trình cho phụ huynh về sản phẩm</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Bottom CTA for this Roadmap */}
                    <div className="pt-3 border-t border-gray-200/80">
                      <button
                        onClick={() => onOpenTrialModal(`${activeCurriculumCourse.name} - ${module.name}`)}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs py-2.5 px-4 transition-all shadow-xs cursor-pointer active:scale-98"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-amber-200" />
                        <span>Đăng ký học thử Lộ trình {mIdx + 1}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 6. PHƯƠNG PHÁP & CAM KẾT CHẤT LƯỢNG (ĐÃ BỎ HOÀN TOÀN KHỐI ẢNH 1 VÀ CHỈNH SỬA UI HIỆN ĐẠI) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Cột trái: Phương pháp và đầu ra */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-3.5 py-1 text-xs font-bold text-[#c2410c]">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>PHƯƠNG PHÁP ĐÀO TẠO TIÊN TIẾN</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight">
                Vì Sao Phụ Huynh Tin Chọn <br />
                <span className="text-[#c2410c]">{currentLevel.name}</span> Tại VIAI?
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Phương pháp <strong>{currentLevel.methodology}</strong> được nghiên cứu và chuẩn hóa bởi đội ngũ chuyên gia giàu kinh nghiệm. Mỗi học sinh được cá nhân hóa lộ trình học, tiến bộ qua từng buổi học thực chiến.
              </p>

              <div className="space-y-3 pt-2">
                {currentLevel.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-orange-100 shadow-2xs">
                    <CheckCircle2 className="h-5 w-5 text-[#c2410c] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-relaxed">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cột phải: 4 Trụ cột cam kết thiết kế lại hiện đại, chuẩn UI (Không còn khối ảnh 1) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-3xl p-6 border border-orange-100 shadow-xs hover:shadow-md transition-all">
                <div className="h-10 w-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm mb-3">
                  <Cpu className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-[#111827] mb-1">100% Học cụ chuẩn Châu Âu</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Mỗi học sinh được cấp 01 bộ kit thực hành độc lập, không dùng chung, tăng tối đa thời gian thao tác.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-orange-100 shadow-xs hover:shadow-md transition-all">
                <div className="h-10 w-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm mb-3">
                  <Users className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-[#111827] mb-1">Lớp học tối đa &lt; 10 học viên</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Đảm bảo giảng viên kèm cặp sát 1-1, giải đáp kịp thời mọi câu hỏi và hướng dẫn bé từng chi tiết.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-orange-100 shadow-xs hover:shadow-md transition-all">
                <div className="h-10 w-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm mb-3">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-[#111827] mb-1">Báo cáo học tập sau mỗi học phần</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Phụ huynh nhận video sản phẩm của con cùng bảng đánh giá kỹ năng chi tiết từ giáo viên chủ nhiệm.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-orange-100 shadow-xs hover:shadow-md transition-all">
                <div className="h-10 w-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm mb-3">
                  <Trophy className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-[#111827] mb-1">Học bù &amp; Bảo lưu linh hoạt</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Cam kết bảo lưu kết quả và sắp xếp học bù miễn phí khi gia đình có việc bận đột xuất.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION BANNER CUỐI TRANG */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-white">
            <Sparkles className="h-3.5 w-3.5 text-amber-200" />
            <span>ƯU ĐÃI ĐẶC BIỆT THÁNG NÀY</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Tặng 01 Buổi Học Thử 1-1 &amp; Test Tư Duy Công Nghệ Cho Con
          </h2>

          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
            Giúp bé trực tiếp thao tác lắp ráp robot, trải nghiệm lập trình và kiểm tra năng khiếu tư duy logic hoàn toàn miễn phí cùng thầy cô chuyên gia.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenTrialModal(currentLevel.name)}
              className="inline-flex items-center gap-2 rounded-xl bg-white text-[#c2410c] hover:bg-orange-50 px-7 py-3.5 text-sm font-extrabold transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <Sparkles className="h-4 w-4 text-[#c2410c]" />
              <span>Đăng Ký Học Thử 1-1 Ngay</span>
            </button>

            <a
              href="tel:0963909192"
              className="inline-flex items-center gap-2 rounded-xl bg-black/30 hover:bg-black/40 border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-all cursor-pointer"
            >
              <span>Gọi Hotline: 0963.909.192</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
