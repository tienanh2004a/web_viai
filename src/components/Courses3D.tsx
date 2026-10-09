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
      slug: 'lap-trinh-robot',
      title: 'Lập trình Robot (Offline)',
      age: 'Dành cho Lớp 1 — 8',
      format: 'Offline tại Hải Phòng, Hưng Yên, Ninh Bình',
      image: '/images/laptrinhrobot.jpg',
      glow: 'orange' as const,
      desc: 'Hệ thống các khoá học offline tại trung tâm bao gồm luyện thi cấp tốc và lộ trình dài hạn chuyên sâu để phát triển tư duy công nghệ bền vững.',
      features: [
        'VIAI Junior (Lớp 1-2): Ươm mầm tài năng, làm quen tư duy thuật toán trực quan.',
        'VIAI Innovator (Lớp 3-8): Lập trình robot thực chiến, lắp ráp cơ khí & cảm biến.',
        'Lớp nhỏ < 10 HV: Giáo viên kèm cặp 1-1 theo tiến độ từng bé.',
        'Cam kết sản phẩm thực tế: Tự tay chế tạo và lập trình robot sau mỗi học phần.',
      ],
      tag: 'Phổ biến nhất tại trung tâm',
    },
    {
      slug: 'luyen-thi-robosim',
      title: 'Luyện thi RoboSim (Online)',
      age: 'Dành cho Lớp 3 — 8',
      format: 'Online toàn quốc qua VIAI-World',
      image: '/images/luyenthirobosim.jpg',
      glow: 'purple' as const,
      desc: 'Khoá luyện thi RoboSim chuyên sâu chuẩn bị thi đấu Robotics chuyên nghiệp, có hướng dẫn giải đề thi chi tiết Cuộc thi Robotics Quốc Gia 2026.',
      features: [
        'Bản quyền phần mềm RoboSim: Độc quyền đào tạo tại VIAI Academy.',
        'Bộ đề thi độc quyền 2026: Đã giải sẵn và tối ưu thuật toán thi đấu.',
        'Học online linh hoạt tại nhà: Có giáo viên mentor giải đáp 1-1.',
        'Cam kết Vé Vàng Chung kết: Hoàn tiền 100% nếu không vượt qua vòng loại.',
      ],
      tag: 'Trọng điểm thi đấu 2026',
    },
    {
      slug: 'ai-iot-robotics',
      title: 'AI & IoT Robotics Master',
      age: 'Dành cho Lớp 5 — 8',
      format: 'Hybrid (Offline & Online)',
      image: '/images/hocviensatathamgiacuocthi1.jpg',
      glow: 'cyan' as const,
      desc: 'Khoá học nâng cao đón đầu kỷ nguyên AI: Kết hợp trí tuệ nhân tạo, thị giác máy tính và robot tự hành thông minh giải quyết bài toán thực tế.',
      features: [
        'Computer Vision & AI: Nhận diện khuôn mặt, làn đường, vật thể tự động.',
        'Thuật toán tự hành: Xử lý cảm biến đa chiều và lập trình phản hồi thời gian thực.',
        'Bước đệm thi đấu quốc tế: Chuẩn bị cho sân chơi WRO, Robothon toàn cầu.',
        'Cấp chứng chỉ kỹ sư nhí: Trao bằng khen và video bảo vệ đề án tốt nghiệp.',
      ],
      tag: 'Công nghệ AI Thế hệ mới',
    },
  ];

  return (
    <section id="khoa-hoc" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#e5e5e5]">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-orange-600 mb-2">
            LỘ TRÌNH ĐÀO TẠO
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            Chương trình học <span className="text-orange-600">Robotics &amp; AI</span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#555555] leading-relaxed">
            Từ nền tảng tư duy tiểu học đến luyện thi chuyên sâu đấu trường toàn quốc. Nhấp vào từng khoá học để xem chi tiết khung chương trình và học cụ.
          </p>
        </div>

        {/* 3D Tilt Cards for Courses */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <TiltCard key={course.slug} glowColor={course.glow} className="flex flex-col h-full rounded-[32px] border border-black/5 bg-[#ffffff] group overflow-hidden shadow-none">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Badge Tag - Dayos Mint chip or clean white */}
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#ffffff] px-3 py-1 text-xs font-bold text-[#000000] shadow-none border border-black/5">
                  <Sparkles className="h-3.5 w-3.5 text-orange-600" />
                  {course.tag}
                </span>

                {/* Age & Format */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-semibold text-white">
                  <span className="bg-[#000000] px-2.5 py-1 rounded-[6px] text-white">
                    {course.age}
                  </span>
                  <span className="flex items-center gap-1 bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded-[6px] text-white">
                    {course.format.includes('Online') ? (
                      <Monitor className="h-3 w-3 text-cyan-300" />
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
                  className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-3 group-hover:text-orange-600 transition-colors cursor-pointer"
                >
                  {course.title}
                </h3>

                <p className="text-sm text-[#444444] mb-6 leading-relaxed">
                  {course.desc}
                </p>

                {/* Feature Bullets */}
                <div className="space-y-2.5 mb-8 flex-1">
                  {course.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#333333] leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons: View Details & Free Trial */}
                <div className="space-y-2.5 mt-auto pt-2">
                  <button
                    onClick={() => onViewCourseDetail(course.slug)}
                    className="w-full flex items-center justify-center gap-2 rounded-[8px] bg-[#f3f3f3] hover:bg-neutral-200 p-3 text-xs sm:text-sm font-semibold text-[#000000] transition-all"
                  >
                    <BookOpen className="h-4 w-4 text-neutral-600" />
                    <span>Xem chi tiết đề cương &amp; học cụ</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onOpenTrialModal(course.title)}
                    className="w-full flex items-center justify-center gap-2 rounded-[8px] bg-[#000000] hover:bg-[#222222] p-3 text-xs sm:text-sm font-semibold text-white active:scale-98 transition-all"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-amber-300" />
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
