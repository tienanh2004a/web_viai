import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, CheckCircle2, Clock, 
  ShieldCheck, ArrowRight
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('Hải Phòng');
  const [extraInfo, setExtraInfo] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !phone) return;
    setSubmitted(true);
  };

  const campuses = [
    {
      id: 1,
      name: 'Cơ sở 1 - Hải Phòng',
      address: 'Số 42 Lạch Tray, Quận Ngô Quyền, TP. Hải Phòng',
      area: 'Lạch Tray • Ngô Quyền',
      phone: '0344533898',
      feature: 'Phòng Lab lớn, đầy đủ bộ kit VEX & sa bàn thi đấu tiêu chuẩn',
      mapUrl: 'https://maps.google.com/?q=Số+42+Lạch+Tray,+Quận+Ngô+Quyền,+Hải+Phòng',
    },
    {
      id: 2,
      name: 'Cơ sở 2 - Hưng Yên',
      address: 'Số 158 Đường Chu Văn An, Phường An Tảo, TP. Hưng Yên',
      area: 'Chu Văn An • An Tảo',
      phone: '0344533898',
      feature: 'Trung tâm nghiên cứu STEM & AI, phòng luyện thi RoboSim miền Bắc',
      mapUrl: 'https://maps.google.com/?q=Số+158+Chu+Văn+An,+Phường+An+Tảo,+Hưng+Yên',
    },
    {
      id: 3,
      name: 'Cơ sở 3 - Ninh Bình',
      address: 'Số 86 Đinh Tiên Hoàng, Phường Đông Thành, TP. Ninh Bình',
      area: 'Đinh Tiên Hoàng • Đông Thành',
      phone: '0344533898',
      feature: 'Không gian sáng tạo Kỹ sư nhí, sân đấu sa bàn đối kháng thực chiến',
      mapUrl: 'https://maps.google.com/?q=Số+86+Đinh+Tiên+Hoàng,+Phường+Đông+Thành,+Ninh+Bình',
    },
  ];

  return (
    <section id="lien-he" className="relative bg-white border-t border-neutral-200/80">
      
      {/* 1. THÔNG TIN NHANH — Chuẩn phong cách Sata Robo tối giản */}
      <div className="py-14 sm:py-16 border-b border-neutral-200/70">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-orange-600 mb-2">
              THÔNG TIN NHANH
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Cách liên hệ VIAI Academy
            </h2>
          </div>

          {/* 4 Thẻ thông tin nhanh */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Thẻ 1: Hotline */}
            <a
              href="tel:0344533898"
              className="group bg-white p-6 rounded-2xl border border-neutral-200 hover:border-orange-300 hover:shadow-md transition-all h-full block cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 text-orange-500 mb-4 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                Hotline
              </p>
              <p className="font-semibold text-neutral-900 text-base group-hover:text-orange-600 transition-colors">
                0344533898
              </p>
            </a>

            {/* Thẻ 2: Email */}
            <a
              href="mailto:contact@viai.edu.vn"
              className="group bg-white p-6 rounded-2xl border border-neutral-200 hover:border-orange-300 hover:shadow-md transition-all h-full block cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 text-orange-500 mb-4 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                Email
              </p>
              <p className="font-semibold text-neutral-900 text-base break-all group-hover:text-orange-600 transition-colors">
                contact@viai.edu.vn
              </p>
            </a>

            {/* Thẻ 3: Địa chỉ các cơ sở */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:border-orange-300 hover:shadow-md transition-all h-full">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 text-orange-500 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                Địa chỉ
              </p>
              <p className="font-semibold text-neutral-900 text-sm leading-snug">
                Hải Phòng • Hưng Yên • Ninh Bình
              </p>
            </div>

            {/* Thẻ 4: Tốc độ phản hồi */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:border-orange-300 hover:shadow-md transition-all h-full">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 text-orange-500 mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                Tốc độ phản hồi
              </p>
              <p className="font-semibold text-neutral-900 text-sm leading-snug">
                Trong vòng 30 phút
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* 2. FORM ĐẶT BUỔI HỌC THỬ 1-1 MIỄN PHÍ */}
      <div id="dang-ky" className="relative overflow-hidden bg-neutral-50/70 py-16 sm:py-20 border-b border-neutral-200/70">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3.5 py-1 rounded-full mb-3">
              Đặt buổi học thử 1-1
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-3">
              Để lại thông tin, <span className="text-orange-600">chúng tôi gọi lại</span>
            </h2>
            <p className="text-sm text-neutral-600 max-w-lg mx-auto leading-relaxed">
              Phản hồi trong vòng 30 phút (hỗ trợ tư vấn chu đáo mọi ngày trong tuần)
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 sm:p-9 shadow-lg shadow-orange-950/5 border border-neutral-200">
            {submitted ? (
              <div className="py-8 px-4 text-center space-y-3">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-neutral-900">
                  Đăng ký học thử thành công!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Cảm ơn <strong>{parentName}</strong>. Thầy cô VIAI Academy sẽ gọi điện tư vấn buổi học thử 1-1 tại cơ sở <strong>{branch}</strong> theo số <strong>{phone}</strong> trong ít phút tới.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-medium text-xs transition-colors cursor-pointer"
                >
                  Đăng ký cho bé khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Họ tên phụ huynh */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Họ và tên phụ huynh <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn An"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all"
                  />
                </div>

                {/* Số điện thoại */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Số điện thoại liên hệ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0912 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all"
                  />
                </div>

                {/* Chọn cơ sở */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Chọn cơ sở học tập thuận tiện <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Hải Phòng">Cơ sở 1: Hải Phòng (42 Lạch Tray, Quận Ngô Quyền)</option>
                    <option value="Hưng Yên">Cơ sở 2: TP. Hưng Yên (158 Chu Văn An, Phường An Tảo)</option>
                    <option value="Ninh Bình">Cơ sở 3: TP. Ninh Bình (86 Đinh Tiên Hoàng, Phường Đông Thành)</option>
                    <option value="Online">Học Online 1-1 toàn quốc qua RoboSim</option>
                  </select>
                </div>

                {/* Thông tin thêm */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Thông tin về bé <span className="text-xs text-neutral-400 font-normal">(Tuổi, trường học — không bắt buộc)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Bé Nam 8 tuổi, trường Tiểu học Chu Văn An"
                    value={extraInfo}
                    onChange={(e) => setExtraInfo(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all"
                  />
                </div>

                {/* Checkbox bảo mật */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded text-orange-600 focus:ring-orange-500 border-neutral-300 cursor-pointer"
                    />
                    <span className="text-xs text-neutral-600 leading-relaxed">
                      Tôi đồng ý với chính sách bảo mật thông tin và cho phép VIAI Academy liên hệ tư vấn lịch học thử cho con.
                    </span>
                  </label>
                </div>

                {/* Nút gửi */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!agreed}
                    className="w-full py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm tracking-wide uppercase transition-all shadow-sm active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>ĐẶT BUỔI HỌC THỬ 1-1 MIỄN PHÍ</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-[11px] text-neutral-500 text-center mt-2.5 flex items-center justify-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Thông tin được bảo mật 100%. Trải nghiệm hoàn toàn miễn phí.</span>
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* 3. 3 CƠ SỞ ĐANG HOẠT ĐỘNG */}
      <div className="relative overflow-hidden bg-white py-16 sm:py-20 border-b border-neutral-200/70">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-14">
            <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-orange-600 mb-2">
              HỆ THỐNG CƠ SỞ
            </p>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-3">
              3 cơ sở đang hoạt động
            </h3>
            <p className="text-sm md:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
              Tìm cơ sở gần nhà để trực tiếp trải nghiệm phòng Lab Robotics và sa bàn thi đấu chuẩn quốc tế
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {campuses.map((campus) => (
              <div
                key={campus.id}
                className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-orange-100 text-orange-600">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-neutral-900 leading-snug">
                        {campus.name}
                      </h4>
                      <p className="text-xs text-neutral-500 font-medium mt-0.5">
                        {campus.area}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-700 leading-relaxed mb-3">
                    {campus.address}
                  </p>

                  <p className="text-xs text-neutral-500 italic mb-4 leading-relaxed">
                    {campus.feature}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <a
                    href={`tel:${campus.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-orange-600 transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-orange-600" />
                    <span>{campus.phone}</span>
                  </a>

                  <a
                    href={campus.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    <span>Chỉ đường →</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 4. KẾT NỐI — 4 Icon chính hãng hiển thị hoàn hảo 100% */}
      <div className="py-14 sm:py-16 bg-neutral-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-orange-600 mb-2">
              KẾT NỐI
            </p>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              Theo dõi VIAI Academy
            </h3>
            <p className="text-sm text-neutral-600 mt-2">
              Cập nhật các giải đấu Robotics, lịch học thử và video chế tạo mới nhất
            </p>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
            
            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook VIAI Academy"
              className="group flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl border border-neutral-200 bg-white hover:-translate-y-1 transition-all duration-200 min-w-[110px] sm:min-w-[125px] hover:shadow-md cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs bg-[#1877F2]/10">
                <img 
                  src="/icons/facebook.svg" 
                  alt="Facebook" 
                  className="w-11 h-11 object-contain drop-shadow-xs" 
                />
              </div>
              <span className="text-sm font-bold text-neutral-800">Facebook</span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok VIAI Academy"
              className="group flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl border border-neutral-200 bg-white hover:-translate-y-1 transition-all duration-200 min-w-[110px] sm:min-w-[125px] hover:shadow-md cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs bg-neutral-100">
                <img 
                  src="/icons/tiktok.svg" 
                  alt="TikTok" 
                  className="w-11 h-11 object-contain drop-shadow-xs" 
                />
              </div>
              <span className="text-sm font-bold text-neutral-800">TikTok</span>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube VIAI Academy"
              className="group flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl border border-neutral-200 bg-white hover:-translate-y-1 transition-all duration-200 min-w-[110px] sm:min-w-[125px] hover:shadow-md cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs bg-[#FF0000]/10">
                <img 
                  src="/icons/youtube.svg" 
                  alt="YouTube" 
                  className="w-11 h-11 object-contain drop-shadow-xs" 
                />
              </div>
              <span className="text-sm font-bold text-neutral-800">YouTube</span>
            </a>

            {/* Zalo */}
            <a
              href="https://zalo.me/0344533898"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zalo VIAI Academy"
              className="group flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl border border-neutral-200 bg-white hover:-translate-y-1 transition-all duration-200 min-w-[110px] sm:min-w-[125px] hover:shadow-md cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs bg-[#0068FF]/10">
                <img 
                  src="/icons/zalo.svg" 
                  alt="Zalo" 
                  className="w-11 h-11 object-contain drop-shadow-xs" 
                />
              </div>
              <span className="text-sm font-bold text-neutral-800">Zalo</span>
            </a>

          </div>
        </div>
      </div>

    </section>
  );
};
