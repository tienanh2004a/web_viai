import React from 'react';
import { Users, MapPin, HeartHandshake, Award } from 'lucide-react';

export const TrustMetrics: React.FC = () => {
  const metrics = [
    {
      value: '1,000+',
      label: 'Học viên đã đào tạo',
      desc: 'Từ khối mầm non đến lớp 9 tại Hải Phòng, Hưng Yên, Ninh Bình',
      icon: Users,
    },
    {
      value: '3',
      label: 'Cơ sở đào tạo',
      desc: 'Hải Phòng, Hưng Yên & Ninh Bình',
      icon: MapPin,
    },
    {
      value: '98%',
      label: 'PH tiếp tục khoá tiếp theo',
      desc: 'Sự hài lòng và tiến bộ rõ rệt của con',
      icon: HeartHandshake,
    },
    {
      value: '50+',
      label: 'Giải thưởng cuộc thi',
      desc: 'Robotics tại 3 tỉnh, Khu vực miền Bắc',
      icon: Award,
    },
  ];

  return (
    <section className="relative py-14 px-4 sm:px-6 lg:px-8 border-y border-black/5 bg-[#e5e5e5]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#444444] font-semibold">
            MINH BẠCH &amp; ĐƯỢC TIN TƯỞNG BỞI 2,000+ PHỤ HUYNH
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center p-6 sm:p-7 rounded-[24px] bg-[#ffffff] border border-black/5 shadow-none transition-all duration-200"
              >
                <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#f3f3f3] text-[#000000]">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="text-3xl sm:text-4xl font-black text-[#000000] tracking-tight mb-1">
                  {item.value}
                </div>

                <div className="text-xs sm:text-sm font-bold text-[#000000] mb-1">
                  {item.label}
                </div>

                <div className="text-[11px] text-[#555555] leading-normal">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
