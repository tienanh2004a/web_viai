import React from 'react';
import { ShieldCheck, Users, Target, Presentation, Award, CheckCircle2 } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const Commitments3D: React.FC = () => {
  const commitments = [
    {
      step: '01',
      title: 'Hoàn tiền 100% nếu không hài lòng',
      badge: 'Cam kết bằng văn bản',
      glow: 'orange' as const,
      icon: ShieldCheck,
      details: [
        'Buổi học đầu 90 phút: Nếu con không hào hứng, học viện hoàn trả 100% học phí trong 3 ngày, không đặt câu hỏi.',
        'Gói VIAI8 — Vé Vàng Chung Kết: Hoàn 100% nếu con không vượt vòng loại để thi Chung kết Miền Trung tại Nghệ An (13/09/2026).',
      ],
    },
    {
      step: '02',
      title: 'Lớp nhỏ chuẩn VIP ≤ 12 Học viên',
      badge: 'Kèm cặp cá nhân hóa',
      glow: 'purple' as const,
      icon: Users,
      details: [
        'Mô hình "Học kèm công nghệ" — giáo viên theo sát từng thao tác code, lắp ráp cơ khí và giải thuật của từng bé.',
        'Đảm bảo mọi học viên đều nắm vững kiến thức, tự tay vận hành và không bị bỏ lại phía sau.',
      ],
    },
    {
      step: '03',
      title: 'Học đúng & Thi đúng RoboSim',
      badge: 'Bản quyền cuộc thi 2026',
      glow: 'cyan' as const,
      icon: Target,
      details: [
        'RoboSim là công cụ thi đấu bắt buộc trong Cuộc thi Sáng tạo Robotics tại 3 tỉnh, Khu vực miền Bắc 2026.',
        'Chỉ VIAI Academy sở hữu bản quyền đào tạo, giải đề thi chi tiết và rèn luyện bản lĩnh đấu trường thực chiến.',
      ],
    },
    {
      step: '04',
      title: 'Bảo vệ đồ án như Kỹ Sư Nhí',
      badge: 'Minh bạch kết quả',
      glow: 'orange' as const,
      icon: Presentation,
      details: [
        'Sau mỗi 12 buổi học: Học sinh thuyết trình sản phẩm robot trước phụ huynh, ghi hình video kỷ niệm.',
        'Ba mẹ trực tiếp nhìn thấy sự tự tin, khả năng tư duy logic và kỹ năng thuyết trình vượt bậc của con.',
      ],
    },
    {
      step: '05',
      title: 'Tài trợ 3.000.000đ thi Quốc Gia',
      badge: 'Đồng hành đến đỉnh cao',
      glow: 'purple' as const,
      icon: Award,
      details: [
        'Học viên hoàn thành khóa và tham gia thi đấu giải Robotics cấp Quốc gia tại TP.HCM trong năm 2026.',
        'VIAI Academy tài trợ trực tiếp 3.000.000đ/học viên để tiếp thêm động lực cho các tài năng trẻ.',
      ],
    },
  ];

  return (
    <section id="cam-ket" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#faf9f6]">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            5 Cam Kết Vàng Với{' '}
            <span className="text-gradient-warm">Phụ Huynh &amp; Học Viên</span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
            Trải nghiệm thẻ 3D tương tác góc nghiêng. Rõ ràng, minh bạch bằng văn bản — đặt sự tiến bộ của con lên hàng đầu.
          </p>
        </div>

        {/* 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {commitments.slice(0, 3).map((item, idx) => {
            const Icon = item.icon;
            return (
              <TiltCard key={idx} glowColor={item.glow} className="p-7 flex flex-col h-full bg-white">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-black text-gray-300 select-none">
                    {item.step}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-orange-700 bg-orange-50 border border-orange-200/80 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                    <div className="p-2 rounded-xl bg-orange-50 text-orange-600 border border-orange-100">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#111827] mb-4 leading-snug">
                  {item.title}
                </h3>

                <div className="space-y-3 mt-auto text-sm text-zinc-600 leading-relaxed">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* 2 Centered Cards below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:max-w-4xl lg:mx-auto">
          {commitments.slice(3, 5).map((item, idx) => {
            const Icon = item.icon;
            return (
              <TiltCard key={idx} glowColor={item.glow} className="p-7 flex flex-col h-full bg-white">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-black text-gray-300 select-none">
                    {item.step}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-orange-700 bg-orange-50 border border-orange-200/80 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                    <div className="p-2 rounded-xl bg-orange-50 text-orange-600 border border-orange-100">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0c0a08] mb-4 leading-snug">
                  {item.title}
                </h3>

                <div className="space-y-3 mt-auto text-sm text-zinc-600 leading-relaxed">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
