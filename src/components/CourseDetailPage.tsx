import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, CheckCircle2, Clock, Users, MapPin, Star, Award, 
  Sparkles, Calendar, Cpu, ArrowRight, ShieldCheck, 
  BookOpen, Layers, Gift, ChevronRight
} from 'lucide-react';
import { coursesData, type CourseDetail } from '../data/coursesData';

interface CourseDetailPageProps {
  courseSlug: string;
  onBackToHome: () => void;
  onOpenTrialModal: (courseName?: string) => void;
  onSelectCourse: (slug: string) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  courseSlug,
  onBackToHome,
  onOpenTrialModal,
  onSelectCourse,
}) => {
  const course: CourseDetail = coursesData[courseSlug] || coursesData['lap-trinh-robot'];
  const [activeTab, setActiveTab] = useState<'syllabus' | 'hardware' | 'skills' | 'schedule'>('syllabus');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [courseSlug]);

  const glowShadow = {
    orange: 'text-[#c2410c] border-orange-200 bg-orange-50',
    purple: 'text-stone-800 border-stone-200 bg-stone-50',
    cyan: 'text-sky-800 border-sky-200 bg-sky-50',
  }[course.glowColor];

  const allSlugs = Object.keys(coursesData);

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#111827] flex flex-col font-sans">
      {/* Top Breadcrumb & Return Bar */}
      <nav aria-label="Breadcrumb" className="sticky top-0 z-40 bg-[#f5f5f7]/95 backdrop-blur-md border-b border-black/8 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#000000] bg-white border border-black/5 px-4 py-2 rounded-[8px] hover:bg-neutral-100 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Trang chủ</span>
            </button>
            <span className="text-neutral-400 hidden sm:inline">/</span>
            <span className="text-xs sm:text-sm text-[#555555] hidden sm:inline">Khoá học</span>
            <span className="text-neutral-400 hidden sm:inline">/</span>
            <span className="text-xs sm:text-sm font-bold text-[#000000] truncate max-w-[200px] sm:max-w-none">
              {course.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:0837312860"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-[#555555] hover:text-black transition-colors"
            >
              <span>Hotline: 0837.312.860</span>
            </a>
            <button
              onClick={() => onOpenTrialModal(course.name)}
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#000000] hover:bg-[#222222] px-5 py-2 text-xs font-semibold text-white transition-all"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
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
                <div className="flex items-center gap-1 text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full font-semibold">
                  <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                  <span className="font-bold text-zinc-900">{course.rating}</span>
                  <span className="text-zinc-500">({course.totalStudents}+ học viên)</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-[1.22] mb-4">
                {course.name}
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-8">
                {course.headline}
              </p>

              {/* Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                <div className="bg-white border border-gray-200/90 rounded-2xl p-3 shadow-xs">
                  <span className="text-xs font-bold text-zinc-500 block mb-0.5 uppercase tracking-wide">ĐỘ TUỔI</span>
                  <span className="text-sm font-bold text-[#0c0a08] flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-[#c2410c] shrink-0" />
                    <span>{course.age.split(' ')[0]} {course.age.split(' ')[1]}</span>
                  </span>
                </div>

                <div className="bg-white border border-gray-200/90 rounded-2xl p-3 shadow-xs">
                  <span className="text-xs font-bold text-zinc-500 block mb-0.5 uppercase tracking-wide">THỜI LƯỢNG</span>
                  <span className="text-sm font-bold text-[#0c0a08] flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-[#c2410c] shrink-0" />
                    <span>{course.duration.split(' ')[0]} {course.duration.split(' ')[1]}</span>
                  </span>
                </div>

                <div className="bg-white border border-gray-200/90 rounded-2xl p-3 shadow-xs">
                  <span className="text-xs font-bold text-zinc-500 block mb-0.5 uppercase tracking-wide">SĨ SỐ LỚP</span>
                  <span className="text-sm font-bold text-[#0c0a08] flex items-center gap-1">
                    <Award className="h-3.5 w-3.5 text-[#c2410c] shrink-0" />
                    <span>≤ 12 HV/lớp</span>
                  </span>
                </div>

                <div className="bg-white border border-gray-200/90 rounded-2xl p-3 shadow-xs">
                  <span className="text-xs font-bold text-zinc-500 block mb-0.5 uppercase tracking-wide">HÌNH THỨC</span>
                  <span className="text-sm font-bold text-[#0c0a08] flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-[#c2410c] shrink-0" />
                    <span className="truncate">{course.format.split(' ')[0]}</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenTrialModal(course.name)}
                  className="flex items-center justify-center gap-2.5 rounded-2xl bg-orange-600 hover:bg-orange-700 px-8 py-4 text-sm font-bold text-white shadow-sm hover:shadow-orange-500/20 active:scale-98 transition-all"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Đăng ký buổi học thử 1-1 miễn phí</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="#lich-hoc"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-4 text-sm font-bold text-zinc-700 hover:text-orange-600 hover:border-orange-300 shadow-xs transition-all"
                >
                  <Calendar className="h-4 w-4 text-orange-600" />
                  <span>Xem lịch học &amp; Ưu đãi</span>
                </a>
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
                    <span className="text-orange-600">100% THỰC HÀNH</span>
                  </div>

                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {course.overview}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs">
                    <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      <span>Cam kết hoàn tiền 100%</span>
                    </span>
                    <span className="text-zinc-500 font-medium">Tặng kèm bộ quà 1.84M</span>
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
            className={`px-4 py-2 rounded-[8px] text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'syllabus'
                ? 'bg-[#000000] text-white shadow-none'
                : 'text-[#444444] hover:text-[#000000] hover:bg-[#f3f3f3]'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>Khung chương trình (Syllabus)</span>
          </button>

          <button
            onClick={() => setActiveTab('hardware')}
            className={`px-4 py-2 rounded-[8px] text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'hardware'
                ? 'bg-[#000000] text-white shadow-none'
                : 'text-[#444444] hover:text-[#000000] hover:bg-[#f3f3f3]'
            }`}
          >
            <Cpu className="h-4 w-4" />
            <span>Bộ học cụ &amp; Phần mềm</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2 rounded-[8px] text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'skills'
                ? 'bg-[#000000] text-white shadow-none'
                : 'text-[#444444] hover:text-[#000000] hover:bg-[#f3f3f3]'
            }`}
          >
            <Award className="h-4 w-4" />
            <span>Kỹ năng &amp; Chuẩn đầu ra</span>
          </button>

          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-4 py-2 rounded-[8px] text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'schedule'
                ? 'bg-[#000000] text-white shadow-none'
                : 'text-[#444444] hover:text-[#000000] hover:bg-[#f3f3f3]'
            }`}
          >
            <Calendar className="h-4 w-4" />
            <span>Lịch học &amp; Học phí</span>
          </button>
        </div>
      </section>

      {/* Tab Panels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-7xl mx-auto">
          {/* TAB 1: SYLLABUS */}
          {activeTab === 'syllabus' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-black text-[#0c0a08] mb-2 tracking-tight">
                  Lộ Trình Học Từng Học Phần (Syllabus Breakdown)
                </h2>
                <p className="text-sm text-zinc-600">
                  Chương trình được thiết kế bài bản theo từng giai đoạn, từ nhập môn trực quan đến giải thuật phức tạp và đồ án kỹ sư nhí tốt nghiệp.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-orange-300 hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                        {mod.number}
                      </span>
                      <span className="text-xs text-zinc-500 flex items-center gap-1 font-medium">
                        <Clock className="h-3.5 w-3.5 text-zinc-400" />
                        <span>{mod.duration}</span>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#0c0a08] mb-3">
                      {mod.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                      {mod.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100 space-y-2">
                      <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">KẾT QUẢ ĐẠT ĐƯỢC:</span>
                      {mod.outcomes.map((out, oIdx) => (
                        <div key={oIdx} className="flex items-start gap-2 text-xs text-zinc-700">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: HARDWARE & SOFTWARE */}
          {activeTab === 'hardware' && (
            <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0c0a08] mb-2 tracking-tight">
                  Học Cụ Cơ Khí &amp; Nền Tảng Phần Mềm Độc Quyền
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
                    <h3 className="text-xl font-bold text-[#0c0a08]">{course.hardwareKit.name}</h3>
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

              <div className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50/70 via-white to-amber-50/40 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-lg font-bold text-[#0c0a08] mb-1">Phần Mềm Thi Đấu Bản Quyền RoboSim 2026</h4>
                  <p className="text-xs sm:text-sm text-zinc-600">
                    Được cài đặt trực tiếp trên máy tính tại lớp và cấp tài khoản luyện tập tại nhà không giới hạn lượt chạy.
                  </p>
                </div>
                <button
                  onClick={() => onOpenTrialModal(course.name)}
                  className="rounded-xl bg-orange-600 hover:bg-orange-700 px-6 py-3 text-xs font-bold text-white shrink-0 shadow-sm transition-all"
                >
                  Trải nghiệm phần mềm 0đ
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: SKILLS GAINED */}
          {activeTab === 'skills' && (
            <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0c0a08] mb-2 tracking-tight">
                  4 Chuẩn Đầu Ra &amp; Kỹ Năng Con Đạt Được
                </h2>
                <p className="text-sm text-zinc-600">
                  Đánh giá định lượng quá trình phát triển tư duy, kỹ năng công nghệ và sự tự tin của học sinh.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {course.skillsGained.map((sk, idx) => (
                  <div key={idx} className="rounded-3xl border border-gray-200/90 bg-white p-6 shadow-xs">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-[#0c0a08] text-base">{sk.title}</h3>
                      <span className="font-mono text-sm font-bold text-orange-600">{sk.percent}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100 mb-3 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500"
                        style={{ width: `${sk.percent}%` }}
                      />
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">{sk.desc}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-gray-200/90 bg-white p-6 shadow-xs">
                <h4 className="text-base font-bold text-[#0c0a08] mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  <span>Cam kết chất lượng bằng văn bản của VIAI Academy</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-700">
                  {course.commitments.map((cmt, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cmt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SCHEDULE & TUITION */}
          {activeTab === 'schedule' && (
            <div id="lich-hoc" className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0c0a08] mb-2 tracking-tight">
                  Lịch Khai Giảng &amp; Biểu Phí Ưu Đãi 2026
                </h2>
                <p className="text-sm text-zinc-600">
                  Linh hoạt lựa chọn ca học cuối tuần hoặc ngày thường phù hợp với lịch học văn hóa của con.
                </p>
              </div>

              {/* Schedule Table */}
              <div className="rounded-3xl border border-gray-200/90 bg-white p-6 shadow-xs">
                <h3 className="text-base font-bold text-[#0c0a08] mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  <span>Các Ca Học Đang Mở Đăng Ký</span>
                </h3>

                <div className="space-y-3">
                  {course.schedule.map((sch, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl border border-gray-200/70 bg-[#faf8f5]"
                    >
                      <div>
                        <span className="font-bold text-[#0c0a08] text-sm block">{sch.shift}</span>
                        <span className="text-xs text-zinc-500">{sch.branch}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1 rounded-lg">
                          {sch.time}
                        </span>
                        <button
                          onClick={() => onOpenTrialModal(course.name)}
                          className="text-xs font-bold text-zinc-700 bg-white border border-gray-200 hover:bg-orange-600 hover:text-white hover:border-orange-600 px-3 py-1.5 rounded-lg shadow-xs transition-colors"
                        >
                          Chọn ca này
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tuition Box */}
              <div className="rounded-3xl border-2 border-orange-300 bg-gradient-to-br from-orange-50 via-white to-amber-50/40 p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-orange-100 pb-6 mb-6">
                  <div>
                    <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider block mb-1">HỌC PHÍ ƯU ĐÃI KHAI GIẢNG</span>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl sm:text-4xl font-black text-orange-600">{course.tuition.discountedPrice}</span>
                      <span className="text-sm text-zinc-400 line-through">{course.tuition.originalPrice}</span>
                    </div>
                    <span className="text-xs text-orange-700 font-semibold block mt-1">{course.tuition.offerNote}</span>
                  </div>

                  <button
                    onClick={() => onOpenTrialModal(course.name)}
                    className="rounded-2xl bg-orange-600 hover:bg-orange-700 px-8 py-4 text-sm font-bold text-white shadow-sm hover:shadow-orange-500/20 active:scale-98 transition-all shrink-0"
                  >
                    Đăng Ký Giữ Suất Ưu Đãi
                  </button>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 bg-white border border-gray-200 p-4 rounded-2xl shadow-xs">
                  <Gift className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0c0a08] block mb-0.5 font-bold">Bộ Quà Tặng Công Nghệ Trị Giá {course.tuition.giftValue.split(' ')[0]}:</strong>
                    <span>{course.tuition.giftValue}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Other Courses Switcher Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200/80 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-black text-[#0c0a08] mb-2 tracking-tight">
              Xem Các Khoá Học Khác Tại VIAI Academy
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600">
              Khám phá các lộ trình học khác phù hợp với lứa tuổi và mục tiêu của con
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {allSlugs.map((slug) => {
              const other = coursesData[slug];
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
                    <span className="text-xs font-bold text-zinc-500">{other.category.split(' ')[0]}</span>
                    {isCurrent ? (
                      <span className="text-xs bg-[#c2410c] text-white font-bold px-2.5 py-0.5 rounded-full">Đang xem</span>
                    ) : (
                      <ChevronRight className="h-4 w-4 text-zinc-400" />
                    )}
                  </div>
                  <h4 className="font-bold text-[#0c0a08] text-base mb-1">{other.name}</h4>
                  <p className="text-xs text-zinc-600 line-clamp-2">{other.headline}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floating CTA in Detail Page */}
      <div className="sticky bottom-0 z-40 bg-[#ffffff] border-t border-black/5 p-4 flex items-center justify-between px-4 sm:px-8 shadow-lg">
        <div className="hidden sm:flex flex-col">
          <span className="text-xs text-[#666666] font-medium">Tặng buổi trải nghiệm 1-1 trị giá 500.000đ</span>
          <span className="text-sm font-bold text-[#000000]">{course.name}</span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            onClick={onBackToHome}
            className="px-4 py-2.5 rounded-[8px] border border-black/10 text-xs font-semibold text-[#000000] hover:bg-neutral-100 transition-colors"
          >
            Về trang chủ
          </button>
          <button
            onClick={() => onOpenTrialModal(course.name)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-[8px] bg-[#000000] hover:bg-[#222222] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all"
          >
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span>Đặt lịch học thử 0 đồng</span>
          </button>
        </div>
      </div>
    </div>
  );
};
