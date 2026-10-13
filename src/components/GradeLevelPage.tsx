import React, { useEffect } from 'react';
import { 
  ArrowLeft, Sparkles, MapPin, CheckCircle2, Cpu, ArrowRight, 
  Layers, BookOpen, ShieldCheck, Trophy, Compass, Users, Clock, Award
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [levelId]);

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
              href="tel:0344533898"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#c2410c] transition-colors"
            >
              <span>Hotline: 0344.533.898</span>
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

      {/* 2. Level Switcher Pills (Tabs chuyển nhanh giữa 3 cấp học) */}
      <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border-b border-orange-200/60 py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-gray-500 mr-1 hidden sm:inline">Chọn cấp học:</span>
          {PRIMARY_GRADE_LEVEL_IDS.map((id) => {
            const lvl = GRADE_LEVELS[id];
            const isActive = lvl.id === currentLevel.id;
            return (
              <button
                key={lvl.id}
                onClick={() => onSwitchLevel(lvl.id)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#c2410c] text-white shadow-xs scale-102'
                    : 'bg-white text-gray-700 border border-orange-200/80 hover:bg-orange-100/60 hover:text-[#c2410c]'
                }`}
              >
                {lvl.name} ({lvl.displayAge})
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Hero Section Cấp Học - Tone Trắng Cam Nhẹ Sang Trọng */}
      <header className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-[#fffaf5] to-[#faf8f5] border-b border-orange-100">
        {/* Soft Background Accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-orange-200/25 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-amber-100/35 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/70 border border-orange-200 px-3.5 py-1 text-xs font-bold text-[#c2410c] shadow-2xs mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{currentLevel.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#111827] mb-4 leading-tight">
                Chương Trình <span className="text-[#c2410c]">{currentLevel.name}</span>
              </h1>

              <p className="text-base sm:text-lg font-medium text-gray-700 mb-4 leading-relaxed">
                {currentLevel.headline}
              </p>

              <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
                {currentLevel.detailedOverview}
              </p>

              {/* Key Metrics / Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2 border-t border-orange-200/60">
                <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-3.5 border border-orange-100 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1">
                    <Layers className="h-3.5 w-3.5 text-[#c2410c]" />
                    <span>Khóa học</span>
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-[#111827]">
                    {currentLevel.childCourseSlugs.length} Khóa con
                  </div>
                  <div className="text-[11px] text-gray-500">Phân theo độ tuổi</div>
                </div>

                <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-3.5 border border-orange-100 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1">
                    <Clock className="h-3.5 w-3.5 text-[#c2410c]" />
                    <span>Lộ trình</span>
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-[#111827]">
                    4 Học phần
                  </div>
                  <div className="text-[11px] text-gray-500">52 buổi / năm học</div>
                </div>

                <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-3.5 border border-orange-100 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1">
                    <Users className="h-3.5 w-3.5 text-[#c2410c]" />
                    <span>Quy mô lớp</span>
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-[#111827]">
                    &lt; 8 Học viên
                  </div>
                  <div className="text-[11px] text-gray-500">Kèm sát 1-1 tận tình</div>
                </div>

                <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-3.5 border border-orange-100 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-1">
                    <Trophy className="h-3.5 w-3.5 text-[#c2410c]" />
                    <span>Đầu ra</span>
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-[#111827]">
                    100% Tự làm
                  </div>
                  <div className="text-[11px] text-gray-500">Dự thi &amp; KHKT</div>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-orange-200/80 bg-white shadow-md group">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={currentLevel.coverImage}
                    alt={currentLevel.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-orange-600/90 text-[11px] font-bold uppercase tracking-wider mb-2">
                    {currentLevel.academicName}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight mb-2">
                    Hệ sinh thái học cụ &amp; công nghệ chuẩn quốc tế
                  </h3>
                  <p className="text-xs text-gray-200 line-clamp-2">
                    {currentLevel.hardwareKitSummary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 4. TRỌNG TÂM: DANH SÁCH CÁC KHÓA HỌC CON THEO TỪNG ĐỘ TUỔI */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-orange-200 px-4 py-1.5 text-xs font-bold text-[#c2410c] shadow-2xs mb-3">
              <Compass className="h-3.5 w-3.5" />
              <span>LỰA CHỌN KHÓA HỌC THEO ĐỘ TUỔI</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
              Các Khóa Học Thuộc <span className="text-[#c2410c]">{currentLevel.name}</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Mỗi khóa học được thiết kế chuyên biệt và tối ưu theo từng giai đoạn phát triển nhận thức. 
              <strong> Nhấp vào từng khóa học</strong> để xem toàn bộ 4 học phần, 52 bài học chi tiết và đăng ký trải nghiệm.
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
                      {childCourse.grade}
                    </span>

                    {/* Bottom Stats Banner */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-semibold text-white">
                      <span className="bg-orange-600/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-white font-bold">
                        4 Học phần · 52 buổi
                      </span>
                      <span className="bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded-md text-white font-medium">
                        Buổi 13 Chuyên sâu code
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col bg-white">
                    {/* Academic Category & Campus */}
                    <div className="flex items-center justify-between text-xs text-gray-500 font-semibold mb-2">
                      <span className="text-orange-700 bg-orange-50 border border-orange-200/80 px-2.5 py-0.5 rounded-md">
                        {childCourse.academicName}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <MapPin className="h-3 w-3 text-orange-500" />
                        <span>3 cơ sở</span>
                      </span>
                    </div>

                    {/* Course Title (Clickable) */}
                    <h3
                      onClick={() => onSelectCourse(childCourse.slug)}
                      className="text-xl font-bold text-[#111827] tracking-tight mb-2.5 group-hover:text-[#c2410c] transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>{childCourse.name}</span>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#c2410c] transition-transform group-hover:translate-x-1 shrink-0 ml-1" />
                    </h3>

                    {/* Headline */}
                    <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
                      {childCourse.headline}
                    </p>

                    {/* Hardware Kit Box */}
                    <div className="rounded-xl border border-orange-100 bg-[#fffaf5] p-3 mb-4 flex items-start gap-2.5">
                      <Cpu className="h-4 w-4 text-[#c2410c] shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wide">Học cụ thực hành:</span>
                        <span className="block text-xs font-semibold text-gray-800 line-clamp-2">{childCourse.hardwareKit.name}</span>
                      </div>
                    </div>

                    {/* Skills Checklist */}
                    <div className="space-y-2 mb-6 flex-1">
                      {childCourse.skillsGained.slice(0, 3).map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>{skill.title}:</strong> {skill.desc}</span>
                        </div>
                      ))}
                      <div className="flex items-start gap-2 text-xs text-orange-700 leading-relaxed font-semibold">
                        <Sparkles className="h-3.5 w-3.5 text-orange-600 shrink-0 mt-0.5" />
                        <span>Buổi 13 mỗi học phần: Chuyên sâu <strong>Phát triển lập trình</strong></span>
                      </div>
                    </div>

                    {/* 2 CTA Buttons */}
                    <div className="space-y-2.5 mt-auto pt-3 border-t border-gray-100">
                      {/* Nút 1: Xem chi tiết nội dung 52 bài học */}
                      <button
                        onClick={() => onSelectCourse(childCourse.slug)}
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-50 hover:bg-orange-100 border border-orange-200/80 p-3 text-xs sm:text-sm font-bold text-[#c2410c] transition-all cursor-pointer shadow-2xs"
                      >
                        <BookOpen className="h-4 w-4 text-[#c2410c]" />
                        <span>Xem chi tiết nội dung &amp; 52 bài học</span>
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

      {/* 5. PHƯƠNG PHÁP & CAM KẾT CHẤT LƯỢNG CHO CẤP HỌC NÀY */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-3.5 py-1 text-xs font-bold text-[#c2410c] mb-3">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>PHƯƠNG PHÁP ĐÀO TẠO TIÊN TIẾN</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mb-4">
                Vì Sao Phụ Huynh Tin Chọn <br className="hidden sm:inline" />
                <span className="text-[#c2410c]">{currentLevel.name}</span> Tại VIAI?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                Phương pháp <strong>{currentLevel.methodology}</strong> được nghiên cứu và chuẩn hóa bởi đội ngũ chuyên gia giàu kinh nghiệm. Mỗi học sinh được cá nhân hóa lộ trình học, tiến bộ qua từng buổi học thực chiến.
              </p>

              <div className="space-y-3.5">
                {currentLevel.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#fffaf5] p-3.5 rounded-2xl border border-orange-100">
                    <CheckCircle2 className="h-5 w-5 text-[#c2410c] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-gray-800 leading-relaxed">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Cam kết & Quyền lợi */}
            <div className="bg-gradient-to-br from-[#fff7ed] via-white to-[#fffaf5] p-6 sm:p-8 rounded-3xl border border-orange-200 shadow-sm space-y-5">
              <h3 className="text-lg sm:text-xl font-bold text-[#111827] flex items-center gap-2">
                <Award className="h-5 w-5 text-[#c2410c]" />
                <span>Quyền lợi vàng của học viên cấp {currentLevel.shortName}</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-orange-100 text-[#c2410c] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</div>
                  <p><strong>100% Học cụ chuẩn Châu Âu:</strong> Mỗi học sinh được cấp 01 bộ kit thực hành độc lập, không phải dùng chung.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-orange-100 text-[#c2410c] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</div>
                  <p><strong>Đánh giá định kỳ &amp; Báo cáo học tập:</strong> Phụ huynh nhận video sản phẩm và nhận xét chi tiết sau mỗi học phần.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-orange-100 text-[#c2410c] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</div>
                  <p><strong>Bảo lưu &amp; Học bù linh hoạt:</strong> Đảm bảo không bị mất kiến thức khi có việc gia đình đột xuất.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-orange-100 text-[#c2410c] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</div>
                  <p><strong>Chứng chỉ tốt nghiệp &amp; Bảo trợ thi đấu:</strong> Cấp chứng nhận hoàn thành khóa học và được huấn luyện tham gia các cuộc thi Sáng tạo KHKT.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-orange-200/70">
                <button
                  onClick={() => onOpenTrialModal(currentLevel.name)}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#c2410c] hover:bg-[#9a3412] p-3.5 text-sm font-bold text-white transition-all cursor-pointer shadow-xs"
                >
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  <span>Đăng ký cho con trải nghiệm miễn phí</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER CUỐI TRANG */}
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
              href="tel:0344533898"
              className="inline-flex items-center gap-2 rounded-xl bg-black/30 hover:bg-black/40 border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-all cursor-pointer"
            >
              <span>Gọi Hotline: 0344.533.898</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
