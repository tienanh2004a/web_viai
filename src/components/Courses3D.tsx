import React from 'react';
import { Sparkles, MapPin, Monitor, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface Courses3DProps {
  onOpenTrialModal: (courseName?: string) => void;
  onViewCourseDetail: (courseSlug: string) => void;
}

export const Courses3D: React.FC<Courses3DProps> = ({ onOpenTrialModal, onViewCourseDetail }) => {
  const courses = [
    {
      slug: 'robotics-mam-non',
      title: 'Robotics Khối Mầm Non',
      age: 'Dành cho Mầm non (4 — 6 tuổi)',
      format: 'Offline tại 3 cơ sở',
      image: '/images/laptrinhrobot.jpg',
      glow: 'orange' as const,
      desc: 'Chương trình ươm mầm sáng tạo, giúp bé làm quen công nghệ qua các mô hình robot lắp ghép thông minh, bánh răng cơ bản và màu sắc trực quan.',
      features: [
        'Vừa học vừa chơi: Kích thích trí tưởng tượng và khả năng sáng tạo không giới hạn.',
        'Phát triển vận động tinh: Rèn luyện sự khéo léo qua thao tác lắp ráp khối ghép cơ bản.',
        'Tư duy logic sớm: Làm quen khái niệm chuỗi lệnh hành động và giải quyết bài toán nhỏ.',
        'Lớp nhỏ < 8 học viên: Thầy cô kèm sát 1-1, an toàn và tràn đầy hứng khởi.',
      ],
      tag: 'Khối Mầm Non (4–6 tuổi)',
    },
    {
      slug: 'robotics-tieu-hoc',
      title: 'Robotics Khối Tiểu Học',
      age: 'Dành cho 6 — 11 tuổi',
      format: 'Offline & Sa bàn thi đấu',
      image: '/images/hocviensatathamgiacuocthi2.jpg',
      glow: 'purple' as const,
      desc: 'Học phần cốt lõi rèn luyện tư duy lập trình kéo thả Scratch/Blockly, lắp ráp robot cơ khí, làm chủ cảm biến và tự tin bước vào sa bàn thi đấu.',
      features: [
        'Lập trình trực quan Scratch/Blockly: Nắm vững biến số, vòng lặp và câu lệnh điều kiện.',
        'Chế tạo robot cơ khí & cảm biến: Điều khiển động cơ, cảm biến dò line và tránh vật cản.',
        'Rèn bản lĩnh đấu trường: Cọ xát thi đấu tại các giải Robocon cấp trường, cấp tỉnh.',
        'Sản phẩm thực tế: Tự tay chế tạo và lập trình robot hoàn chỉnh sau mỗi bài học.',
      ],
      tag: 'Khối Tiểu Học (6–11 tuổi)',
    },
    {
      slug: 'robotics-trung-hoc',
      title: 'Robotics & AI Khối Trung Học',
      age: 'Dành cho 11 — 15 tuổi',
      format: 'Chuyên sâu & Luyện thi',
      image: '/images/hocviensatathamgiacuocthi1.jpg',
      glow: 'cyan' as const,
      desc: 'Khoá học nâng cao đón đầu kỷ nguyên AI: Lập trình văn bản Python/C++, điều khiển vi điều khiển, thị giác máy tính và thuật toán robot tự hành.',
      features: [
        'Lập trình ngôn ngữ thực tế: Thành thạo Python, C++ và mạch vi điều khiển thông minh.',
        'Ứng dụng Trí tuệ nhân tạo (AI): Thị giác máy tính nhận diện khuôn mặt, làn đường và vật thể.',
        'Luyện thi đấu trường lớn: Chuẩn bị cho các cuộc thi sáng tạo KHKT cấp tỉnh và toàn quốc.',
        'Bảo vệ đề án kỹ sư nhí: Cấp chứng nhận tốt nghiệp và video thuyết trình chuyên nghiệp.',
      ],
      tag: 'Khối Trung Học (11–15 tuổi)',
    },
  ];

  return (
    <section id="khoa-hoc" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#f5f5f7]">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111827] mb-4">
            Chương trình đào tạo <span className="text-[#c2410c]">Robotics &amp; AI</span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#4b5563] leading-relaxed">
            Lộ trình bài bản từ khám phá mầm non đến lập trình chuyên sâu và luyện thi đấu trường toàn quốc. Nhấp vào từng khoá học để xem chi tiết học phần và bộ học cụ.
          </p>
        </div>

        {/* 3D Tilt Cards for Courses */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <TiltCard key={course.slug} glowColor={course.glow} className="flex flex-col h-full rounded-2xl border border-black/8 bg-white group overflow-hidden shadow-2xs hover:shadow-md transition-shadow">
              {/* Course Thumbnail Image (Clickable) */}
              <div
                onClick={() => onViewCourseDetail(course.slug)}
                className="relative aspect-video w-full overflow-hidden bg-[#f3f3f3] cursor-pointer"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badge Tag */}
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#111827] shadow-xs border border-black/5">
                  <Sparkles className="h-3.5 w-3.5 text-[#c2410c]" />
                  {course.tag}
                </span>

                {/* Age & Format */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-semibold text-white">
                  <span className="bg-black/85 backdrop-blur-xs px-2.5 py-1 rounded-md text-white">
                    {course.age}
                  </span>
                  <span className="flex items-center gap-1 bg-black/85 backdrop-blur-xs px-2.5 py-1 rounded-md text-white">
                    {course.format.includes('Online') ? (
                      <Monitor className="h-3 w-3 text-sky-300" />
                    ) : (
                      <MapPin className="h-3 w-3 text-orange-300" />
                    )}
                    {course.format.split(' ')[0]}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <h3
                  onClick={() => onViewCourseDetail(course.slug)}
                  className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight mb-3 group-hover:text-[#c2410c] transition-colors cursor-pointer"
                >
                  {course.title}
                </h3>

                <p className="text-sm text-[#4b5563] mb-6 leading-relaxed">
                  {course.desc}
                </p>

                {/* Feature Bullets */}
                <div className="space-y-2.5 mb-8 flex-1">
                  {course.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-sm text-[#374151] leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons: View Details & Free Trial */}
                <div className="space-y-2.5 mt-auto pt-2">
                  <button
                    onClick={() => onViewCourseDetail(course.slug)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#f5f5f7] hover:bg-neutral-200 p-3.5 text-sm font-semibold text-[#111827] transition-all cursor-pointer"
                  >
                    <BookOpen className="h-4 w-4 text-neutral-600" />
                    <span>Xem chi tiết đề cương &amp; học cụ</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onOpenTrialModal(course.title)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#c2410c] hover:bg-[#9a3412] p-3.5 text-sm font-bold text-white active:scale-98 transition-all cursor-pointer shadow-xs"
                  >
                    <Sparkles className="h-4 w-4 text-amber-200" />
                    <span>Đặt buổi học thử 1-1 miễn phí</span>
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
