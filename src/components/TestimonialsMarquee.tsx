import React from 'react';
import { Star, MapPin } from 'lucide-react';

export const TestimonialsMarquee: React.FC = () => {
  const reviewsRow1 = [
    {
      name: 'Chị Nguyễn Thu Hà',
      role: 'PH bé Nam (Lớp 4)',
      text: 'Con từng nghiện game Roblox suốt ngày. Học ở đây 2 tháng con biết tự thiết kế mô hình robot riêng, tập trung hơn hẳn!',
      location: 'Hồng Bàng, Hải Phòng',
      avatarColor: 'from-orange-500 to-amber-500',
    },
    {
      name: 'Anh Trần Minh Trí',
      role: 'PH bé Bin (10 tuổi)',
      text: 'Lớp dưới 10 HV tại cơ sở Hải Phòng, GV rất nhiệt tình. Con đã đoạt giải Robothon khu vực tháng trước.',
      location: 'Lê Chân, Hải Phòng',
      avatarColor: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Cô Lê Hoài Anh',
      role: 'Hiệu trưởng TH Đoàn Kết',
      text: 'VIAI Academy triển khai Lab STEM cho trường rất chuyên nghiệp. GV được training kỹ, học sinh rất hào hứng.',
      location: 'TP. Hưng Yên',
      avatarColor: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Chị Phạm Mai Linh',
      role: 'PH bé Mít (7 tuổi)',
      text: 'Học online qua Robosim tiện cực kỳ! Không phải đưa con đi đâu xa, GV vẫn theo sát con từng buổi.',
      location: 'TP. Ninh Bình',
      avatarColor: 'from-emerald-500 to-teal-500',
    },
  ];

  const reviewsRow2 = [
    {
      name: 'Anh Hoàng Quốc Bảo',
      role: 'PH bé Bống (12 tuổi)',
      text: 'Con đậu vòng quốc gia WRO 2025! Cảm ơn các thầy cô đã định hướng đúng đắn và chuẩn bài cho con.',
      location: 'Ngô Quyền, Hải Phòng',
      avatarColor: 'from-indigo-500 to-purple-500',
    },
    {
      name: 'Chị Vũ Thuỳ Dương',
      role: 'PH bé An (9 tuổi)',
      text: 'Giá hợp lý, con vui mỗi buổi. Kết thúc khoá con đã làm được robot nhặt rác hoàn chỉnh!',
      location: 'Văn Giang, Hưng Yên',
      avatarColor: 'from-rose-500 to-orange-500',
    },
    {
      name: 'Anh Đỗ Văn Hùng',
      role: 'PH bé Khánh (11 tuổi)',
      text: 'Đã thử 2 trung tâm khác trước khi tìm VIAI Academy. Đây là nơi duy nhất con không bỏ giữa chừng.',
      location: 'TP. Ninh Bình',
      avatarColor: 'from-amber-500 to-yellow-500',
    },
    {
      name: 'Chị Bùi Thị Lan',
      role: 'PH bé Khoa (8 tuổi)',
      text: 'Tư vấn rất tâm huyết, đúng nhu cầu của con. Đăng ký lộ trình 12 tháng luôn không hề hối hận.',
      location: 'Mỹ Hào, Hưng Yên',
      avatarColor: 'from-blue-500 to-cyan-500',
    },
  ];

  const renderCard = (rev: typeof reviewsRow1[0], idx: number) => (
    <div
      key={idx}
      className="mx-3 w-80 sm:w-96 shrink-0 rounded-[24px] border border-black/5 bg-[#ffffff] p-6 shadow-none transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, sIdx) => (
            <Star key={sIdx} className="h-4 w-4 fill-amber-400 text-amber-500" />
          ))}
        </div>
        <div className="flex items-center gap-1 text-[11px] text-[#666666] font-medium">
          <MapPin className="h-3 w-3 text-orange-600" />
          <span>{rev.location}</span>
        </div>
      </div>

      <p className="text-sm text-[#333333] leading-relaxed mb-4 italic line-clamp-3">
        "{rev.text}"
      </p>

      <div className="flex items-center gap-3 pt-3 border-t border-black/5">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br ${rev.avatarColor} text-white font-bold text-sm`}
        >
          {rev.name.charAt(rev.name.lastIndexOf(' ') + 1) || 'P'}
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-bold text-[#000000] truncate">{rev.name}</h4>
          <p className="text-xs text-[#666666] truncate">{rev.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="danh-gia" className="relative py-24 overflow-hidden bg-[#e5e5e5] border-b border-black/5">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#000000] tracking-tight mb-4 uppercase">
          2,000+ PHỤ HUYNH <span className="text-orange-600">TIN TƯỞNG GỬI GẮM</span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#444444]">
          Những chia sẻ chân thật từ các bậc phụ huynh tại Hải Phòng, Hưng Yên, Ninh Bình và cả nước đã và đang cho con học tại VIAI Academy.
        </p>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative w-full overflow-hidden mb-6 flex">
        <div className="animate-marquee flex">
          {[...reviewsRow1, ...reviewsRow1, ...reviewsRow1].map((r, i) => renderCard(r, i))}
        </div>
        {/* Gradient edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#e5e5e5] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#e5e5e5] to-transparent z-10" />
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="relative w-full overflow-hidden flex">
        <div className="animate-marquee-reverse flex">
          {[...reviewsRow2, ...reviewsRow2, ...reviewsRow2].map((r, i) => renderCard(r, i))}
        </div>
        {/* Gradient edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#e5e5e5] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#e5e5e5] to-transparent z-10" />
      </div>
    </section>
  );
};
