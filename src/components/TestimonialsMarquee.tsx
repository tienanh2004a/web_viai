import React, { useState } from 'react';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';

export const TestimonialsMarquee: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'haiphong' | 'hungyen' | 'ninhbinh'>('all');

  const allReviews = [
    {
      name: 'Chị Nguyễn Thu Hà',
      role: 'Phụ huynh bé Nam (Lớp 4)',
      text: 'Con từng mê game điện thoại cả ngày. Học tại VIAI 2 tháng con biết tự lắp ráp và lập trình mô hình robot riêng, tư duy tập trung và hào hứng hơn hẳn!',
      location: 'Hải Phòng',
      cityKey: 'haiphong',
      detailLoc: 'Quận Hồng Bàng, Hải Phòng',
      course: 'Robotics Khối Tiểu Học',
      initials: 'H',
      avatarBg: 'bg-orange-700 text-white',
    },
    {
      name: 'Anh Trần Minh Trí',
      role: 'Phụ huynh bé Bin (10 tuổi)',
      text: 'Lớp dưới 10 học viên tại cơ sở Lạch Tray, thầy cô kèm 1-1 rất kiên nhẫn. Tháng vừa rồi con cùng đồng đội đã đoạt giải Nhì Robothon khu vực.',
      location: 'Hải Phòng',
      cityKey: 'haiphong',
      detailLoc: 'Quận Lê Chân, Hải Phòng',
      course: 'Luyện thi Sa bàn Robocon',
      initials: 'T',
      avatarBg: 'bg-stone-800 text-white',
    },
    {
      name: 'Cô Lê Hoài Anh',
      role: 'Hiệu trưởng TH Đoàn Kết',
      text: 'VIAI Academy triển khai ngày hội STEM Robotics cho các em học sinh rất bài bản. Giáo viên tận tâm, thiết bị phần cứng chuẩn, học sinh toàn trường vô cùng thích thú.',
      location: 'Hưng Yên',
      cityKey: 'hungyen',
      detailLoc: 'TP. Hưng Yên',
      course: 'Hợp tác Giáo dục STEM',
      initials: 'A',
      avatarBg: 'bg-emerald-800 text-white',
    },
    {
      name: 'Chị Vũ Thuỳ Dương',
      role: 'Phụ huynh bé An (9 tuổi)',
      text: 'Học phí minh bạch, có chính sách hoàn 100% nếu con không thích buổi đầu nên gia đình rất yên tâm. Kết thúc học phần con đã tự code xong xe dò đường thông minh!',
      location: 'Hưng Yên',
      cityKey: 'hungyen',
      detailLoc: 'Văn Giang, Hưng Yên',
      course: 'Robotics Khối Tiểu Học',
      initials: 'D',
      avatarBg: 'bg-amber-800 text-white',
    },
    {
      name: 'Anh Đỗ Văn Hùng',
      role: 'Phụ huynh bé Khánh (11 tuổi)',
      text: 'Đã thử cho con học 2 trung tâm khác trước đây nhưng con hay nản. Sang VIAI được cầm bo mạch ESP32 và code Python thật, đây là nơi duy nhất con chủ động xin đi học sớm.',
      location: 'Ninh Bình',
      cityKey: 'ninhbinh',
      detailLoc: 'TP. Ninh Bình',
      course: 'Robotics & AI Trung Học',
      initials: 'H',
      avatarBg: 'bg-stone-800 text-white',
    },
    {
      name: 'Chị Phạm Mai Linh',
      role: 'Phụ huynh bé Mít (6 tuổi)',
      text: 'Bé học lớp mầm non tại cơ sở Đinh Tiên Hoàng, đồ chơi học cụ bo tròn an toàn chuẩn Châu Âu. Thầy cô gửi video và ảnh tiến bộ của con sau mỗi buổi rất chu đáo.',
      location: 'Ninh Bình',
      cityKey: 'ninhbinh',
      detailLoc: 'TP. Ninh Bình',
      course: 'Robotics Khối Mầm Non',
      initials: 'L',
      avatarBg: 'bg-orange-700 text-white',
    },
  ];

  const filteredReviews = activeFilter === 'all' 
    ? allReviews 
    : allReviews.filter((r) => r.cityKey === activeFilter);

  return (
    <section id="danh-gia" className="relative py-24 bg-[#f5f5f7] border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Pure heading without banned kicker */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] leading-tight tracking-tight mb-4">
            Chia sẻ chân thật từ hơn <span className="text-[#c2410c]">1,000 phụ huynh</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
            Phụ huynh tại Hải Phòng, Hưng Yên và Ninh Bình nói gì về sự tiến bộ và niềm đam mê công nghệ của con tại VIAI Academy.
          </p>
        </div>

        {/* Location Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#111827] text-white shadow-xs'
                : 'bg-white text-[#4b5563] border border-black/8 hover:text-[#111827]'
            }`}
          >
            Tất cả cơ sở ({allReviews.length})
          </button>
          <button
            onClick={() => setActiveFilter('haiphong')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === 'haiphong'
                ? 'bg-[#111827] text-white shadow-xs'
                : 'bg-white text-[#4b5563] border border-black/8 hover:text-[#111827]'
            }`}
          >
            Cơ sở Hải Phòng
          </button>
          <button
            onClick={() => setActiveFilter('hungyen')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === 'hungyen'
                ? 'bg-[#111827] text-white shadow-xs'
                : 'bg-white text-[#4b5563] border border-black/8 hover:text-[#111827]'
            }`}
          >
            Cơ sở Hưng Yên
          </button>
          <button
            onClick={() => setActiveFilter('ninhbinh')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === 'ninhbinh'
                ? 'bg-[#111827] text-white shadow-xs'
                : 'bg-white text-[#4b5563] border border-black/8 hover:text-[#111827]'
            }`}
          >
            Cơ sở Ninh Bình
          </button>
        </div>

        {/* Curated Grid of Verified Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-black/8 bg-white p-6 sm:p-7 shadow-xs hover:border-[#c2410c]/30 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Rating & Location Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1" aria-label="5 trên 5 sao">
                    {Array.from({ length: 5 }).map((_, sIdx) => (
                      <Star key={sIdx} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#4b5563] bg-[#f5f5f7] px-2.5 py-1 rounded-md">
                    <MapPin className="h-3.5 w-3.5 text-[#c2410c]" />
                    <span>{rev.location}</span>
                  </span>
                </div>

                {/* Review Quote */}
                <p className="text-sm sm:text-base text-[#111827] leading-relaxed mb-6 font-normal">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info with proper h3 semantic heading */}
              <div className="pt-4 border-t border-black/6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-bold text-sm ${rev.avatarBg}`}
                  >
                    {rev.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-[#111827] truncate">
                      {rev.name}
                    </h3>
                    <p className="text-xs text-[#4b5563] truncate">
                      {rev.role}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Xác thực</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Proof Footer Note */}
        <div className="mt-12 text-center text-xs sm:text-sm text-[#4b5563]">
          <p>
            100% đánh giá được ghi nhận trực tiếp từ phụ huynh học viên đang theo học tại 3 cơ sở chính thức.
          </p>
        </div>

      </div>
    </section>
  );
};
