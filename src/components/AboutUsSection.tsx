import React from 'react';
import { Trophy, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutUsSectionProps {
  onOpenTrialModal?: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="ve-chung-toi" className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5] border-b border-black/5 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Cột trái: Giới thiệu súc tích về VIAI Academy */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-neutral-900 tracking-tight leading-[1.25] mb-6">
              Hành trình đào tạo <span className="text-orange-600">Kỹ sư Robotics &amp; AI</span> thực chiến
            </h2>

            <p className="text-base sm:text-lg text-[#444444] leading-relaxed mb-5 font-medium">
              <strong className="text-black">VIAI Academy</strong> tự hào là học viện tiên phong tại khu vực miền Bắc trong việc đào tạo lập trình Robotics và Trí tuệ nhân tạo (AI) bài bản cho học sinh từ <strong className="text-orange-600">Khối mầm non đến Lớp 9</strong>.
            </p>

            <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-7">
              Với phương châm <em>"Khởi nguồn trí tuệ — Dẫn lối tương lai"</em>, chúng tôi không dạy lý thuyết sáo rỗng. Mọi bài học đều gắn liền với việc lắp ráp thực tế, tối ưu thuật toán thi đấu và đưa con tự tin bước ra các đấu trường lớn tại tỉnh Hưng Yên, Hải Phòng, Ninh Bình và toàn miền Bắc.
            </p>

            {/* 3 Điểm nổi bật thực chiến (Đã loại bỏ RoboSim) */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-black/5 shadow-2xs hover:border-orange-200 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 mt-0.5">
                  <Trophy className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#000000]">Thực chiến đấu trường cấp tỉnh &amp; toàn quốc</h4>
                  <p className="text-xs text-[#555555] mt-0.5">Rèn bản lĩnh thi đấu, cọ xát và giành giải thưởng tại các giải Robocon lớn.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-black/5 shadow-2xs hover:border-orange-200 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#000000]">100% Thực hành lắp ráp &amp; chế tạo robot thật</h4>
                  <p className="text-xs text-[#555555] mt-0.5">Học qua dự án thực tế, làm chủ cảm biến, vi điều khiển và thuật toán thông minh.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-black/5 shadow-2xs hover:border-orange-200 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#000000]">Lớp học kèm sát dưới 10 học viên</h4>
                  <p className="text-xs text-[#555555] mt-0.5">Huấn luyện viên theo sát từng thao tác cơ khí, code và tư duy logic của con.</p>
                </div>
              </div>
            </div>

            {/* Nút hành động */}
            <div>
              <button
                onClick={onOpenTrialModal}
                className="inline-flex items-center gap-2.5 rounded-[10px] bg-orange-600 hover:bg-orange-700 px-6 py-3.5 text-sm font-bold text-white transition-all active:scale-95 shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Đăng ký học thử cùng chuyên gia</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Cột phải: 3 Ảnh hoạt động & thành tích thực tế dạng Bento Grid tuyệt đẹp */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            
            {/* 1. Ảnh Hero lớn trên cùng: Toàn cảnh Đấu trường Miền Bắc do Trung ương Đoàn tổ chức */}
            <div className="group relative overflow-hidden rounded-[20px] border border-black/8 bg-white p-2.5 sm:p-3 shadow-xs hover:border-orange-400 hover:shadow-md transition-all duration-300">
              <div className="aspect-[16/9] sm:aspect-[2/1] w-full overflow-hidden rounded-[14px] bg-neutral-100 relative">
                <img
                  src="/images/about/dautruong-mienbac.jpg"
                  alt="Đấu trường Sáng tạo Robotics Toàn quốc - Vòng Khu vực Miền Bắc tại Hưng Yên"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider bg-orange-600 text-white px-3 py-1 rounded-full shadow-xs">
                    TRUNG ƯƠNG ĐOÀN • VÒNG MIỀN BẮC
                  </span>
                </div>
              </div>

              <div className="p-3 sm:p-4">
                <h3 className="font-bold text-base sm:text-lg text-neutral-900 leading-snug group-hover:text-orange-600 transition-colors">
                  Cuộc thi Sáng tạo Robotics Toàn quốc — Vòng Khu vực Miền Bắc
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 leading-relaxed">
                  Hội trường thi đấu quy mô lớn tại Hưng Yên với hàng trăm thí sinh tài năng tranh tài giải thuật và điều khiển robot.
                </p>
              </div>
            </div>

            {/* Dưới: 2 Ảnh song song cân đối */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              
              {/* 2. Ảnh Huấn luyện viên & Sa bàn thi đấu */}
              <div className="group relative overflow-hidden rounded-[20px] border border-black/8 bg-white p-2.5 sm:p-3 shadow-xs hover:border-orange-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-neutral-100 relative">
                    <img
                      src="/images/about/huanluyenvien-saban.jpg"
                      alt="Huấn luyện viên VIAI tại sa bàn thi đấu Robocon tỉnh Hưng Yên"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-black/75 text-white px-2.5 py-1 rounded-full backdrop-blur-xs">
                        HUẤN LUYỆN VIÊN THỰC CHIẾN
                      </span>
                    </div>
                  </div>

                  <div className="p-3">
                    <h3 className="font-bold text-sm text-neutral-900 leading-snug group-hover:text-orange-600 transition-colors">
                      Đồng hành trực tiếp tại sa bàn Robocon
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      Thầy cô và học viên làm chủ sa bàn thi đấu, căn chỉnh cơ cấu gắp và tối ưu cảm biến.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Ảnh Vinh danh Giải Nhất tỉnh Hưng Yên (Thành tích nổi bật) */}
              <div className="group relative overflow-hidden rounded-[20px] border-2 border-amber-300/80 bg-gradient-to-b from-amber-50/30 to-white p-2.5 sm:p-3 shadow-xs hover:border-orange-500 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-neutral-100 relative">
                    <img
                      src="/images/about/vinhdanh-giainhat.jpg"
                      alt="Lãnh đạo UBND tỉnh trao cúp Giải Nhất Robocon tỉnh Hưng Yên cho học viên"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-white px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                        🏆 GIẢI NHẤT ROBOCON TỈNH
                      </span>
                    </div>
                  </div>

                  <div className="p-3">
                    <h3 className="font-bold text-sm text-neutral-900 leading-snug group-hover:text-orange-600 transition-colors">
                      Vinh danh &amp; Trao giải Nhất Sa bàn R1
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      Lãnh đạo UBND tỉnh Hưng Yên trực tiếp trao cúp và giấy chứng nhận cho học viên xuất sắc.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
