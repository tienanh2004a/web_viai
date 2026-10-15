import React, { useEffect } from 'react';
import { 
  ArrowLeft, Sparkles, CheckCircle2, Cpu, ArrowRight, 
  Layers, BookOpen, ShieldCheck, Compass, Users, Clock,
  } from 'lucide-react';
import { 
  GRADE_LEVELS, 
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
  onSwitchLevel: _onSwitchLevel,
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
                    {currentLevel.id === 'mam-non'
                      ? '3 Học phần'
                      : currentLevel.id === 'tieu-hoc'
                      ? '2 Học phần / khóa'
                      : '1 — 2 Học phần'}
                  </div>
                  <div className="text-[11px] text-gray-500">
                    {currentLevel.id === 'mam-non'
                      ? '12 buổi / học phần (36 buổi)'
                      : currentLevel.id === 'tieu-hoc'
                      ? '12 buổi / học phần (24 buổi)'
                      : '12 — 14 buổi / học phần'}
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
              <span>LỘ TRÌNH ĐÀO TẠO {currentLevel.childCourseSlugs.length} KHÓA HỌC CHUẨN HÓA</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
              Các Khóa Học Thuộc <span className="text-[#c2410c]">{currentLevel.name}</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Mỗi khóa học được thiết kế chuyên biệt và tối ưu theo từng giai đoạn phát triển nhận thức. 
              <strong> Nhấp vào từng khóa học</strong> để xem toàn bộ lộ trình chi tiết từng bài học và đăng ký trải nghiệm.
            </p>
          </div>

          {/* Child Courses Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {currentLevel.childCourseSlugs.map((slug) => {
              const childCourse: CourseDetail = coursesData[slug];
              if (!childCourse) return null;

              return (
                <div
                  key={childCourse.slug}
                  className="flex flex-col h-full bg-white rounded-3xl border border-orange-100 hover:border-orange-300 transition-all duration-300 shadow-sm hover:shadow-2xl group overflow-hidden"
                >
                  {/* Thumbnail Image (Clickable) */}
                  {/* Thumbnail Image (Clickable) */}
                  <div
                    onClick={() => onSelectCourse(childCourse.slug)}
                    className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-gray-100 cursor-pointer"
                  >
                    <img
                      src={childCourse.coverImage}
                      alt={childCourse.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Badge tên khóa học */}
                    <span className="absolute top-4 right-4 inline-flex items-center rounded-xl bg-black/75 backdrop-blur-md px-3.5 py-1.5 text-xs font-black text-white uppercase tracking-wider shadow-md border border-white/10">
                      {childCourse.badge}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold text-orange-600 mb-1 uppercase tracking-wider">
                        {childCourse.academicName}
                      </div>

                      <h3
                        onClick={() => onSelectCourse(childCourse.slug)}
                        className="text-2xl sm:text-3xl font-black text-[#111827] group-hover:text-[#c2410c] transition-colors cursor-pointer mb-2.5 leading-snug"
                      >
                        {childCourse.name}
                      </h3>

                      <p className="text-sm sm:text-base text-gray-600 mb-5 leading-relaxed line-clamp-2">
                        {childCourse.headline}
                      </p>

                      {/* Lộ trình nổi bật */}
                      <div className="space-y-2 mb-6">
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                          {childCourse.modules.length} Học Phần Đào Tạo Chuẩn:
                        </span>
                        {childCourse.modules.map((mod, idx) => (
                          <div
                            key={mod.id}
                            className="flex items-center justify-between text-xs p-2 rounded-xl bg-orange-50/60 border border-orange-100 text-gray-700 font-medium"
                          >
                            <span className="truncate pr-2 font-semibold text-gray-900">
                              Học phần {idx + 1}: {mod.name}
                            </span>
                            <span className="text-[11px] text-orange-700 bg-orange-100/80 px-2 py-0.5 rounded-md shrink-0 font-bold">
                              {mod.sessionsCount || mod.lessons.length} buổi
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
                        className="w-full flex items-center justify-center gap-2 rounded-2xl bg-orange-50 hover:bg-orange-100/80 border border-orange-200/80 p-3.5 text-xs sm:text-sm font-bold text-[#c2410c] transition-all cursor-pointer shadow-2xs group/btn"
                      >
                        <BookOpen className="h-4 w-4 text-[#c2410c]" />
                        <span>Xem chi tiết giáo trình &amp; các bài học</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>

                      {/* Nút 2: Đặt buổi học thử 1-1 */}
                      <button
                        onClick={() => onOpenTrialModal(childCourse.name)}
                        className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#c2410c] hover:bg-[#9a3412] p-3.5 text-xs sm:text-sm font-bold text-white active:scale-98 transition-all cursor-pointer shadow-md hover:shadow-lg"
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

      {/* 5. PHƯƠNG PHÁP & CHUẨN ĐẦU RA ĐÀO TẠO (ĐÃ XÓA HOÀN TOÀN 4 CAM KẾT ẢNH 1) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Cột trái: Phương pháp đào tạo */}
            <div className="lg:col-span-5 space-y-6">
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

              <div>
                <button
                  onClick={() => onOpenTrialModal(currentLevel.name)}
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#c2410c] hover:bg-[#9a3412] px-6 py-3.5 text-sm font-bold text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  <span>Đăng ký nhận tư vấn lộ trình</span>
                </button>
              </div>
            </div>

            {/* Cột phải: Chuẩn đầu ra và năng lực đạt được */}
            <div className="lg:col-span-7 space-y-3.5">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                Năng lực học viên đạt được sau khóa học:
              </span>
              {currentLevel.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3.5 bg-white p-4 sm:p-5 rounded-2xl border border-orange-100 shadow-2xs hover:border-orange-200 transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-[#c2410c] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-relaxed">{outcome}</span>
                </div>
              ))}
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
