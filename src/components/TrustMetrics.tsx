import React from 'react';
import { Users, MapPin, HeartHandshake, Award } from 'lucide-react';

export const TrustMetrics: React.FC = () => {
  const metrics = [
    {
      value: '1,000+',
      label: 'Học viên đã đào tạo',
      desc: 'Từ khối mầm non đến lớp 9 tại 3 tỉnh miền Bắc',
      icon: Users,
    },
    {
      value: '3 cơ sở',
      label: 'Hải Phòng, Hưng Yên, Ninh Bình',
      desc: 'Phòng Lab chuẩn quốc tế, đầy đủ phần cứng & sa bàn',
      icon: MapPin,
    },
    {
      value: '98%',
      label: 'Phụ huynh tiếp tục lộ trình',
      desc: 'Cam kết chất lượng và sự tiến bộ rõ rệt của con',
      icon: HeartHandshake,
    },
    {
      value: '50+',
      label: 'Giải thưởng thi đấu',
      desc: 'Robotics cấp tỉnh & Đấu trường toàn quốc',
      icon: Award,
    },
  ];

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-y border-black/8 bg-[#f5f5f7]">
      <div className="mx-auto max-w-7xl">
        <h2 className="sr-only">Số liệu bảo chứng và quy mô đào tạo của VIAI Academy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-black/8 shadow-2xs hover:border-[#c2410c]/30 hover:shadow-xs transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
                      {item.value}
                    </span>
                    <Icon className="h-5 w-5 text-[#c2410c] shrink-0" />
                  </div>

                  <div className="text-sm sm:text-base font-bold text-[#111827] mb-1.5 leading-snug">
                    {item.label}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed pt-2 border-t border-black/5">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
