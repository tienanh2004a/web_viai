import React from 'react';
import { Trophy, MapPin, Flag, Award, ExternalLink } from 'lucide-react';

export const ArenaAndAwards: React.FC = () => {
  return (
    <section id="dau-truong" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white border-b border-gray-200/80">
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 mb-4">
            <Trophy className="h-4 w-4 text-orange-600" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-800">
              ĐẤU TRƯỜNG &amp; THÀNH TỰU
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c0a08] tracking-tight mb-4">
            Đồng Hành Tổ Chức &amp;{' '}
            <span className="text-gradient-warm">Chinh Phục Đấu Trường 2026</span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600">
            Học viên VIAI Academy mang chính sản phẩm do mình tự tay lắp ráp và lập trình ra sân đấu cấp thành phố — và mang vinh quang về cho gia đình.
          </p>
        </div>

        {/* National 2026 Competition Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {/* Northern 3 Provinces Qualifier */}
          <div className="relative overflow-hidden rounded-2xl border border-orange-200 bg-[#fff9f5] p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-orange-700 font-mono text-xs font-bold uppercase tracking-wider">
                <Flag className="h-4 w-4 text-orange-600" />
                <span>VÒNG LOẠI 3 TỈNH MIỀN BẮC</span>
              </div>
              <span className="rounded-full bg-orange-100 border border-orange-200 px-3 py-0.5 text-xs font-bold text-orange-800">
                RoboSim bắt buộc
              </span>
            </div>

            <div className="flex items-center gap-2 text-zinc-600 text-sm mb-1">
              <MapPin className="h-4 w-4 text-orange-600" />
              <span>Địa điểm: Hải Phòng, Hưng Yên &amp; Ninh Bình</span>
            </div>

            <div className="text-4xl font-black text-orange-600 my-2">
              26 / 07 / 2026
            </div>
            <p className="text-xs text-zinc-500">
              Dự kiến kết thúc vòng loại — Tuyển chọn các đội xuất sắc nhất vào Chung kết.
            </p>
          </div>

          {/* Northern Region Final */}
          <div className="relative overflow-hidden rounded-2xl border border-purple-200 bg-[#faf8ff] p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-purple-700 font-mono text-xs font-bold uppercase tracking-wider">
                <Trophy className="h-4 w-4 text-purple-600" />
                <span>CHUNG KẾT KHU VỰC MIỀN BẮC</span>
              </div>
              <span className="rounded-full bg-purple-100 border border-purple-200 px-3 py-0.5 text-xs font-bold text-purple-800">
                Vé Vàng VIAI8
              </span>
            </div>

            <div className="flex items-center gap-2 text-zinc-600 text-sm mb-1">
              <MapPin className="h-4 w-4 text-purple-600" />
              <span>Địa điểm: Khu vực miền Bắc</span>
            </div>

            <div className="text-4xl font-black text-purple-700 my-2">
              13 / 09 / 2026
            </div>
            <p className="text-xs text-zinc-500">
              Chung kết toàn diện — Cơ hội tranh tài cấp khu vực và nhận gói tài trợ 3.000.000đ.
            </p>
          </div>
        </div>

        {/* Real Arena Gallery (Photos from VIAI Academy) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xs hover:border-orange-300 transition-all">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src="/images/hocviensatathamgiacuocthi2.jpg"
                alt="Học viên VIAI Academy thi đấu sa bàn"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white border-t border-gray-100">
              <span className="text-[11px] font-mono text-orange-600 font-bold block mb-1">THỰC CHIẾN SA BÀN</span>
              <p className="text-sm font-bold text-[#0c0a08]">
                Vào trận — Học viên điều khiển robot xử lý nhiệm vụ thực tế
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xs hover:border-purple-300 transition-all">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src="/images/nhataitro.jpg"
                alt="Lễ trao giải Cuộc thi Sáng tạo Robotics Khu vực miền Bắc"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white border-t border-gray-100">
              <span className="text-[11px] font-mono text-purple-600 font-bold block mb-1">ĐỒNG HÀNH &amp; TÀI TRỢ</span>
              <p className="text-sm font-bold text-[#0c0a08]">
                Lễ trao giải Robotics Khu vực miền Bắc — Vinh danh học viên
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xs hover:border-emerald-300 transition-all">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src="/images/hocviensatathamgiacuocthi1.jpg"
                alt="Giải Ba bảng B2 chung kết"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white border-t border-gray-100">
              <span className="text-[11px] font-mono text-emerald-600 font-bold block mb-1">KẾT QUẢ ĐẠT ĐƯỢC</span>
              <p className="text-sm font-bold text-[#0c0a08]">
                Giải Ba Bảng B2 — Học viên tự hào nâng cúp và giấy chứng nhận
              </p>
            </div>
          </div>
        </div>

        {/* Special Grand Opening Reward Box */}
        <div className="relative overflow-hidden rounded-3xl border border-orange-200 bg-[#fffaf5] p-8 sm:p-10 text-center shadow-xs">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-100 text-orange-700 border border-orange-200 mb-4">
            <Award className="h-7 w-7" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0c0a08] mb-2">
            Giải Thưởng Đặc Biệt — Khai Trương 3 Chi Nhánh Mới (Tháng 8/2026)
          </h3>

          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto mb-6">
            Dành riêng cho học viên đang theo học tại VIAI Academy và đạt từ Giải Ba trở lên tại Cuộc thi Sáng tạo Robotics tại 3 tỉnh, Khu vực miền Bắc 2026.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xs">
              <span className="text-orange-600 font-bold text-xs uppercase block">GIẢI NHẤT</span>
              <span className="text-xl font-extrabold text-[#0c0a08] block my-1">Chuyến Du Lịch</span>
              <span className="text-xs text-zinc-500">Dành cho Học viên + Phụ huynh</span>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xs">
              <span className="text-zinc-600 font-bold text-xs uppercase block">GIẢI NHÌ</span>
              <span className="text-xl font-extrabold text-[#0c0a08] block my-1">Tour Du Lịch</span>
              <span className="text-xs text-zinc-500">Trị giá cao cho gia đình</span>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xs">
              <span className="text-amber-600 font-bold text-xs uppercase block">GIẢI BA</span>
              <span className="text-xl font-extrabold text-[#0c0a08] block my-1">Tour Trải Nghiệm</span>
              <span className="text-xs text-zinc-500">Khen thưởng thành tích xuất sắc</span>
            </div>
          </div>

          <a
            href="https://drive.google.com/drive/folders/12DTFji_NWDg_i3d1SGgjKKp8vxjF1seL?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-orange-600 hover:bg-orange-700 px-6 py-3 text-sm font-bold text-white transition-all shadow-xs"
          >
            <span>Tải về thể lệ Cuộc thi Robotics 2026</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
