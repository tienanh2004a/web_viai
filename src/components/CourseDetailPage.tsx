import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, CheckCircle2, Clock, Users, MapPin, Star, Award, 
  Sparkles, Calendar, Cpu, ArrowRight, ShieldCheck, 
  BookOpen, Layers, Gift, ChevronRight, ListOrdered, Bot
} from 'lucide-react';
import { coursesData, PRIMARY_COURSE_SLUGS, getGradeLevelByCourseSlug, type CourseDetail } from '../data/coursesData';

interface CourseDetailPageProps {
  courseSlug: string;
  onBackToHome: () => void;
  onBackToCourses?: () => void;
  onBackToLevel?: (levelId: 'mam-non' | 'tieu-hoc' | 'trung-hoc') => void;
  onOpenTrialModal: (courseName?: string) => void;
  onSelectCourse: (slug: string) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  courseSlug,
  onBackToHome,
  onBackToCourses,
  onBackToLevel,
  onOpenTrialModal,
  onSelectCourse,
}) => {
  const course: CourseDetail = coursesData[courseSlug] || coursesData['robotics-mam-non'];
  const parentLevel = getGradeLevelByCourseSlug(courseSlug);
  const [activeTab, setActiveTab] = useState<'syllabus' | 'hardware' | 'skills' | 'schedule'>('syllabus');
  const [selectedModuleId, setSelectedModuleId] = useState<string>(course?.modules?.[0]?.id || 'HP1');

  useEffect(() => {
    setSelectedModuleId(course?.modules?.[0]?.id || 'HP1');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [courseSlug]);

  const glowShadow = {
    orange: 'text-[#c2410c] border-orange-200 bg-orange-50',
    purple: 'text-purple-700 border-purple-200 bg-purple-50',
    cyan: 'text-sky-800 border-sky-200 bg-sky-50',
  }[course.glowColor];

  const currentModule = course.modules.find(m => m.id === selectedModuleId) || course.modules[0];

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#111827] flex flex-col font-sans">
      {/* Top Breadcrumb & Return Bar */}
      <nav aria-label="Breadcrumb" className="sticky top-0 z-40 bg-[#f5f5f7]/95 backdrop-blur-md border-b border-black/8 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={parentLevel && onBackToLevel ? () => onBackToLevel(parentLevel.id) : onBackToHome}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#000000] bg-white border border-black/5 px-4 py-2 rounded-[8px] hover:bg-orange-50 hover:border-orange-200 transition-all cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 text-[#c2410c]" />
              <span>{parentLevel ? `Quay lại ${parentLevel.shortName}` : 'Trang chủ'}</span>
            </button>
            <span className="text-neutral-400 hidden sm:inline">/</span>
            <button
              type="button"
              onClick={onBackToHome}
              className="text-xs sm:text-sm text-[#555555] hover:text-[#c2410c] hover:underline font-semibold hidden sm:inline cursor-pointer transition-colors"
            >
              Trang chủ
            </button>
            {parentLevel ? (
              <button
                type="button"
                onClick={() => onBackToLevel ? onBackToLevel(parentLevel.id) : onBackToCourses?.()}
                className="text-xs sm:text-sm text-[#555555] hover:text-[#c2410c] hover:underline font-semibold hidden sm:inline cursor-pointer transition-colors"
              >
                {parentLevel.name}
              </button>
            ) : (
              <button
                type="button"
                onClick={onBackToCourses || onBackToHome}
                className="text-xs sm:text-sm text-[#555555] hover:text-[#c2410c] hover:underline font-semibold hidden sm:inline cursor-pointer transition-colors"
              >
                Khoá học
              </button>
            )}
            <span className="text-neutral-400 hidden sm:inline">/</span>
            <span className="text-xs sm:text-sm font-bold text-[#000000] truncate max-w-[200px] sm:max-w-none">
              {course.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:0963909192"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-[#555555] hover:text-black transition-colors"
            >
              <span>Hotline: 0963.909.192</span>
            </a>
            <button
              onClick={() => onOpenTrialModal(course.name)}
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#c2410c] hover:bg-[#9a3412] px-5 py-2 text-xs font-bold text-white transition-all shadow-xs cursor-pointer"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-200" />
              <span>Học thử 1-1 Miễn phí</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Course Hero Banner */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-[#faf8f5] to-[#faf9f6] border-b border-gray-200/80">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-200/25 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${glowShadow}`}>
                  <Sparkles className="h-3.5 w-3.5" />
                  {course.badge}
                </span>
                <span className="text-xs font-semibold text-zinc-600 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-xs">
                  {course.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-full">
                  <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                  <span>{course.rating} ({course.totalStudents}+ học viên)</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight mb-4 leading-tight">
                {course.name}
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-8 max-w-2xl">
                {course.headline}
              </p>

              {/* Quick specs pill row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                <div className="bg-white border border-gray-200/90 rounded-2xl p-3 shadow-xs">
                  <span className="text-xs font-bold text-zinc-500 block mb-0.5 uppercase tracking-wide">ĐỘ TUỔI</span>
                  <span className="text-sm font-bold text-[#0c0a08] flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-[#c2410c] shrink-0" />
                    <span className="truncate">{course.slug.includes('mam-non') ? 'Mầm non' : course.grade}</span>
                  </span>
                </div>

                <div className="bg-white border border-gray-200/90 rounded-2xl p-3 shadow-xs">
                  <span className="text-xs font-bold text-zinc-500 block mb-0.5 uppercase tracking-wide">THỜI LƯỢNG</span>
                  <span className="text-sm font-bold text-[#0c0a08] flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-[#c2410c] shrink-0" />
                    <span className="truncate">52 buổi</span>
                  </span>
                </div>

                <div className="bg-white border border-gray-200/90 rounded-2xl p-3 shadow-xs">
                  <span className="text-xs font-bold text-zinc-500 block mb-0.5 uppercase tracking-wide">SĨ SỐ</span>
                  <span className="text-sm font-bold text-[#0c0a08] flex items-center gap-1">
                    <Award className="h-3.5 w-3.5 text-[#c2410c] shrink-0" />
                    <span>Lớp &lt; 10 HV</span>
                  </span>
                </div>

                <div className="bg-white border border-gray-200/90 rounded-2xl p-3 shadow-xs">
                  <span className="text-xs font-bold text-zinc-500 block mb-0.5 uppercase tracking-wide">HÌNH THỨC</span>
                  <span className="text-sm font-bold text-[#0c0a08] flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-[#c2410c] shrink-0" />
                    <span className="truncate">3 Cơ sở Offline</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenTrialModal(course.name)}
                  className="flex items-center justify-center gap-2.5 rounded-2xl bg-[#c2410c] hover:bg-[#9a3412] px-8 py-4 text-sm font-bold text-white shadow-sm hover:shadow-orange-500/20 active:scale-98 transition-all cursor-pointer"
                >
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  <span>Đăng ký buổi học thử 1-1 miễn phí</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => setActiveTab('syllabus')}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-zinc-700 hover:text-orange-600 hover:border-orange-300 shadow-xs transition-all cursor-pointer"
                >
                  <BookOpen className="h-4 w-4 text-orange-600" />
                  <span>Xem đề cương chi tiết 52 buổi</span>
                </button>
              </div>
            </div>

            {/* Right Card Thumbnail & Highlights */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-gray-200/90 bg-white shadow-lg">
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={course.coverImage}
                    alt={course.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="p-6 bg-white border-t border-gray-100 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-zinc-500 border-b border-gray-100 pb-2">
                    <span className="uppercase tracking-wider">HỌC CỤ CHÍNH THỨC</span>
                    <span className="text-orange-600 font-bold">100% THỰC HÀNH</span>
                  </div>

                  <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                    {course.hardwareKit.name}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs">
                    <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      <span>Cam kết hoàn tiền 100%</span>
                    </span>
                    <span className="text-zinc-500 font-medium">Lớp nhỏ kèm 1-1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tabbed Content Navigation */}
      <section className="sticky top-[57px] z-30 bg-[#ffffff] border-b border-black/5 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`px-4 py-2 rounded-[8px] text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeTab === 'syllabus'
                ? 'bg-[#111827] text-white shadow-none font-bold'
                : 'text-[#444444] hover:text-[#000000] hover:bg-[#f3f3f3]'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>Khung chương trình ({course.modules.length} Học phần · {course.duration})</span>
          </button>

          <button
            onClick={() => setActiveTab('hardware')}
            className={`px-4 py-2 rounded-[8px] text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeTab === 'hardware'
                ? 'bg-[#111827] text-white shadow-none font-bold'
                : 'text-[#444444] hover:text-[#000000] hover:bg-[#f3f3f3]'
            }`}
          >
            <Cpu className="h-4 w-4" />
            <span>Bộ học cụ &amp; Thiết bị</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2 rounded-[8px] text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeTab === 'skills'
                ? 'bg-[#111827] text-white shadow-none font-bold'
                : 'text-[#444444] hover:text-[#000000] hover:bg-[#f3f3f3]'
            }`}
          >
            <Award className="h-4 w-4" />
            <span>Kỹ năng &amp; Chuẩn đầu ra</span>
          </button>

          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-4 py-2 rounded-[8px] text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeTab === 'schedule'
                ? 'bg-[#111827] text-white shadow-none font-bold'
                : 'text-[#444444] hover:text-[#000000] hover:bg-[#f3f3f3]'
            }`}
          >
            <Calendar className="h-4 w-4" />
            <span>Lịch học &amp; Học phí</span>
          </button>
        </div>
      </section>

      {/* Tab Panels */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-7xl mx-auto">
          {/* TAB 1: SYLLABUS - Master-Detail Layout theo đúng yêu cầu & ảnh mẫu */}
          {activeTab === 'syllabus' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
                  <ListOrdered className="h-3.5 w-3.5 text-orange-600" />
                  <span>ĐỀ CƯƠNG {course.modules.length} HỌC PHẦN — {course.duration.toUpperCase()}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-2 tracking-tight">
                  Lộ Trình Đào Tạo Chi Tiết Từng Buổi Học
                </h2>
                <p className="text-sm text-zinc-600">
                  Mỗi học phần gồm 13 buổi (90 phút/buổi, 19.5 giờ học) với các dự án thực tế và buổi thứ 13 chuyên sâu <strong>"Phát triển lập trình"</strong>.
                </p>
              </div>

              {/* Master-Detail Interactive Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                
                {/* Cột Trái: Danh sách 4 Thẻ Học Phần (Module Selector) */}
                <div className="lg:col-span-5 space-y-3.5">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>Chọn học phần để xem chi tiết:</span>
                    <span className="text-orange-600 font-semibold">{course.modules.length} học phần</span>
                  </div>

                  {course.modules.map((mod) => {
                    const isSelected = mod.id === currentModule.id;
                    return (
                      <div
                        key={mod.id}
                        onClick={() => setSelectedModuleId(mod.id)}
                        className={`p-4 sm:p-5 rounded-2xl border text-left cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? 'border-orange-500 bg-white ring-2 ring-orange-500/20 shadow-md shadow-orange-500/10'
                            : 'border-gray-200/90 bg-white/70 hover:bg-white hover:border-gray-300 shadow-2xs'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h4 className={`text-base font-bold transition-colors ${
                            isSelected ? 'text-[#111827]' : 'text-gray-800'
                          }`}>
                            {mod.title}
                          </h4>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-md ${
                            isSelected ? 'bg-orange-50 text-orange-600' : 'bg-gray-100 text-gray-500'
                          }`}>
                            {mod.duration}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                          {mod.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Cột Phải: Thẻ Chi Tiết Học Phần (như hình mẫu người dùng cung cấp) */}
                <div className="lg:col-span-7">
                  <div className="rounded-3xl border border-gray-200/90 bg-white p-5 sm:p-7 md:p-8 shadow-sm">
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200">
                        <span>{currentModule.title}</span>
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200">
                        <span>{course.grade}</span>
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-gray-50 text-gray-600 border border-gray-200">
                        <span>{currentModule.duration}</span>
                      </span>
                    </div>

                    {/* Tiêu đề Học phần & Mô tả */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-2 tracking-tight">
                      {currentModule.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {currentModule.description}
                    </p>

                    {/* 3 Metric Cards: Buổi học, Giờ học, Dự án */}
                    <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-8">
                      {/* 1. Buổi học */}
                      <div className="rounded-2xl border border-orange-100 bg-[#fff9f3] p-3 sm:p-4 text-center">
                        <div className="flex justify-center mb-1 text-orange-600">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <div className="text-xl sm:text-2xl font-black text-[#111827] leading-none mb-1">
                          {currentModule.sessionsCount || currentModule.lessons.length}
                        </div>
                        <div className="text-xs text-gray-500 font-medium">Buổi học</div>
                      </div>

                      {/* 2. Giờ học */}
                      <div className="rounded-2xl border border-purple-100 bg-[#faf6ff] p-3 sm:p-4 text-center">
                        <div className="flex justify-center mb-1 text-purple-600">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div className="text-xl sm:text-2xl font-black text-[#111827] leading-none mb-1">
                          {currentModule.hoursCount || 19.5}
                        </div>
                        <div className="text-xs text-gray-500 font-medium">Giờ học</div>
                      </div>

                      {/* 3. Dự án */}
                      <div className="rounded-2xl border border-amber-100 bg-[#fffdf0] p-3 sm:p-4 text-center">
                        <div className="flex justify-center mb-1 text-amber-600">
                          <Bot className="h-5 w-5" />
                        </div>
                        <div className="text-xl sm:text-2xl font-black text-[#111827] leading-none mb-1">
                          {currentModule.projectsCount || 10}
                        </div>
                        <div className="text-xs text-gray-500 font-medium">Dự án</div>
                      </div>
                    </div>

                    {/* Section Header: Nội dung chi tiết 13 buổi */}
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                      <ListOrdered className="h-5 w-5 text-orange-600" />
                      <h4 className="text-base sm:text-lg font-bold text-[#111827]">
                        Nội dung chi tiết {currentModule.lessons.length} buổi
                      </h4>
                    </div>

                    {/* Danh sách 13 buổi học */}
                    <div className="space-y-2">
                      {currentModule.lessons.map((lesson) => {
                        const isSession13 = lesson.sessionNumber === 13;
                        const isReview = lesson.type === 'Ôn tập';
                        const isMilestone = lesson.type.includes('cuối');

                        return (
                          <div
                            key={lesson.sessionNumber}
                            className={`flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-xl border transition-colors ${
                              isSession13
                                ? 'bg-orange-50/70 border-orange-300 ring-1 ring-orange-400/20 shadow-xs'
                                : isMilestone
                                ? 'bg-amber-50/30 border-amber-200/80'
                                : 'bg-[#faf9f6] border-gray-100 hover:bg-white hover:border-gray-200'
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 text-xs sm:text-sm font-black ${
                                isSession13
                                  ? 'bg-orange-600 text-white shadow-xs'
                                  : 'bg-orange-100/80 text-orange-700'
                              }`}>
                                {lesson.sessionNumber}
                              </span>
                              <span className={`text-sm sm:text-base truncate ${
                                isSession13
                                  ? 'font-bold text-orange-950'
                                  : 'font-semibold text-[#111827]'
                              }`}>
                                {lesson.title}
                              </span>
                            </div>

                            {/* Tag Loại bài học bên phải */}
                            <span className={`shrink-0 text-xs px-2.5 sm:px-3 py-1 rounded-full font-medium ${
                              isSession13
                                ? 'bg-orange-600 text-white font-bold flex items-center gap-1 shadow-xs'
                                : isReview
                                ? 'bg-purple-100 text-purple-700 border border-purple-200'
                                : isMilestone
                                ? 'bg-amber-100 text-amber-800 border border-amber-200 font-semibold'
                                : 'bg-white text-gray-500 border border-gray-200'
                            }`}>
                              {isSession13 && <Sparkles className="h-3 w-3" />}
                              {lesson.type}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Call to action dưới chân học phần */}
                    <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-xs text-gray-500">
                        {currentModule.achievement}
                      </div>
                      <button
                        onClick={() => onOpenTrialModal(course.name)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#111827] hover:bg-[#1f2937] px-6 py-3 text-xs font-bold text-white transition-all cursor-pointer shrink-0 shadow-xs"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                        <span>Đăng ký học thử khóa này 0đ</span>
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: HARDWARE & SOFTWARE */}
          {activeTab === 'hardware' && (
            <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#111827] mb-2 tracking-tight">
                  Học Cụ Cơ Khí &amp; Thiết Bị Thực Hành Tiêu Chuẩn
                </h2>
                <p className="text-sm text-zinc-600">
                  VIAI Academy đầu tư đồng bộ các bộ kit cơ khí, bo mạch vi xử lý nhúng và phần mềm bản quyền chuẩn quốc tế.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-orange-50 text-orange-600 border border-orange-200">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111827]">{course.hardwareKit.name}</h3>
                    <p className="text-xs text-zinc-500">{course.hardwareKit.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {course.hardwareKit.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 rounded-2xl border border-gray-200/70 bg-[#faf8f5] p-4">
                      <Layers className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          )}

          {/* TAB 3: SKILLS GAINED */}
          {activeTab === 'skills' && (
            <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#111827] mb-2 tracking-tight">
                  Kỹ Năng &amp; Chuẩn Đầu Ra Của Con Sau Khóa Học
                </h2>
                <p className="text-sm text-zinc-600">
                  Phương pháp giáo dục STEM chuẩn hóa giúp con làm chủ cả tư duy thuật toán lẫn kỹ năng chế tạo phần cứng.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {course.skillsGained.map((skill, idx) => (
                  <div key={idx} className="rounded-2xl border border-gray-200/90 bg-white p-6 shadow-xs">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-[#111827] text-base">{skill.title}</h4>
                      <span className="text-xs font-extrabold text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-md">
                        {skill.percent}%
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                      {skill.desc}
                    </p>
                    <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-1000"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SCHEDULE & TUITION */}
          {activeTab === 'schedule' && (
            <div id="lich-hoc" className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#111827] mb-2 tracking-tight">
                  Lịch Học Tại 3 Cơ Sở &amp; Học Phí Ưu Đãi
                </h2>
                <p className="text-sm text-zinc-600">
                  Lịch học linh hoạt vào các buổi sáng và chiều cuối tuần tại Hải Phòng, Hưng Yên và Ninh Bình.
                </p>
              </div>

              {/* Lịch học */}
              <div className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-8 shadow-xs">
                <h3 className="text-lg font-bold text-[#111827] mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  <span>Các ca học mở lớp tại các cơ sở</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.schedule.map((sch, idx) => (
                    <div key={idx} className="rounded-2xl border border-gray-100 bg-[#faf9f6] p-4 space-y-1.5">
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-wide block">
                        {sch.shift}
                      </span>
                      <div className="text-sm font-bold text-[#111827]">{sch.time}</div>
                      <div className="text-xs text-zinc-500">{sch.days}</div>
                      <div className="text-xs text-zinc-400 pt-1">{sch.branch}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Học phí & Quà tặng */}
              <div className="rounded-3xl border border-orange-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                  <div>
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wide block mb-1">HỌC PHÍ NIÊM YẾT</span>
                    <div className="text-2xl sm:text-3xl font-black text-orange-600">
                      {course.tuition.discountedPrice}
                    </div>
                    <span className="text-xs text-zinc-400 line-through">
                      Giá gốc: {course.tuition.originalPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenTrialModal(course.name)}
                    className="rounded-2xl bg-[#c2410c] hover:bg-[#9a3412] px-8 py-4 text-sm font-bold text-white shadow-sm transition-all cursor-pointer shrink-0"
                  >
                    Đăng ký giữ ưu đãi khai giảng
                  </button>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block">ƯU ĐÃI &amp; QUÀ TẶNG:</span>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                    <Gift className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>{course.tuition.offerNote}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                    <Award className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>Bộ quà tặng kỹ sư nhí: {course.tuition.giftValue}</span>
                  </div>
                </div>

                {/* Cam kết */}
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block">CAM KẾT TỪ VIAI ACADEMY:</span>
                  {course.commitments.map((cmt, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cmt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Other Courses Switcher Banner - Cung cấp đầy đủ 6 khóa học */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-black text-[#111827] mb-2 tracking-tight">
              Xem Các Khoá Học Khác Tại VIAI Academy
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600">
              Khám phá các lộ trình học khác phù hợp với lứa tuổi và mục tiêu phát triển của con
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRIMARY_COURSE_SLUGS.map((slug) => {
              const other = coursesData[slug];
              if (!other) return null;
              const isCurrent = slug === courseSlug;
              return (
                <div
                  key={slug}
                  onClick={() => onSelectCourse(slug)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    isCurrent
                      ? 'border-orange-500 bg-orange-50/60 shadow-xs'
                      : 'border-gray-200/80 bg-[#faf8f5] hover:border-orange-300 hover:bg-white shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-zinc-500">{other.grade}</span>
                    {isCurrent ? (
                      <span className="text-xs bg-[#c2410c] text-white font-bold px-2.5 py-0.5 rounded-full">Đang xem</span>
                    ) : (
                      <ChevronRight className="h-4 w-4 text-zinc-400" />
                    )}
                  </div>
                  <h4 className="font-bold text-[#111827] text-base mb-1">{other.name}</h4>
                  <p className="text-xs text-zinc-600 line-clamp-2">{other.headline}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

