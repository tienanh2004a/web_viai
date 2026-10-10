import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, 
  ShieldCheck, ArrowRight
} from 'lucide-react';
import { submitLeadToGoogleSheet } from '../services/leadService';

export const ContactSection: React.FC = () => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [course, setCourse] = useState('Khối Tiểu học (Lớp 1 – 5)');
  const [branch, setBranch] = useState('Hải Phòng');
  const [extraInfo, setExtraInfo] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(val);
    if (phoneError && val.length === 10 && val.startsWith('0')) {
      setPhoneError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || isSubmitting) return;

    // Kiểm tra số điện thoại bắt buộc đúng 10 số và bắt đầu bằng số 0
    if (!phone) {
      setPhoneError('Vui lòng nhập số điện thoại');
      return;
    }
    if (!phone.startsWith('0')) {
      setPhoneError('Số điện thoại phải bắt đầu bằng số 0');
      return;
    }
    if (phone.length !== 10) {
      setPhoneError(`Số điện thoại phải gồm đúng 10 số (hiện có ${phone.length} số)`);
      return;
    }
    setPhoneError('');

    setIsSubmitting(true);
    await submitLeadToGoogleSheet({
      parentName,
      phone,
      branch,
      courseOrAge: course,
      notes: extraInfo,
      source: 'Form Liên Hệ Cuối Trang',
    });
    setIsSubmitting(false);
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
      feature: 'Trung tâm nghiên cứu STEM & AI, phòng luyện thi Robocon miền Bắc',
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
    <section id="lien-he" className="relative bg-white border-t border-black/8">
      
      {/* 1. THÔNG TIN LIÊN HỆ TRỰC TIẾP — Side-by-side layout */}
      <div className="py-14 sm:py-16 border-b border-black/8">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111827]">
              Liên hệ trực tiếp với <span className="text-[#c2410c]">VIAI Academy</span>
            </h2>
            <p className="text-base text-[#4b5563] mt-2">
              Đội ngũ thầy cô luôn sẵn sàng tư vấn chi tiết lộ trình học phù hợp nhất cho con
            </p>
          </div>

          {/* 4 Thẻ thông tin nhanh */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Thẻ 1: Hotline */}
            <a
              href="tel:0344533898"
              className="group bg-[#f5f5f7] p-5 sm:p-6 rounded-2xl border border-black/6 hover:border-[#c2410c]/40 hover:bg-white hover:shadow-sm transition-all h-full block cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-[#c2410c] shrink-0" />
                <span className="text-xs uppercase tracking-wider text-[#4b5563] font-bold">
                  Hotline tư vấn
                </span>
              </div>
              <p className="font-extrabold text-[#111827] text-lg group-hover:text-[#c2410c] transition-colors pl-8">
                0344533898
              </p>
            </a>

            {/* Thẻ 2: Email */}
            <a
              href="mailto:contact@viai.edu.vn"
              className="group bg-[#f5f5f7] p-5 sm:p-6 rounded-2xl border border-black/6 hover:border-[#c2410c]/40 hover:bg-white hover:shadow-sm transition-all h-full block cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-[#c2410c] shrink-0" />
                <span className="text-xs uppercase tracking-wider text-[#4b5563] font-bold">
                  Email chính thức
                </span>
              </div>
              <p className="font-bold text-[#111827] text-sm break-all group-hover:text-[#c2410c] transition-colors pl-8">
                contact@viai.edu.vn
              </p>
            </a>

            {/* Thẻ 3: Địa chỉ các cơ sở */}
            <div className="bg-[#f5f5f7] p-5 sm:p-6 rounded-2xl border border-black/6 h-full">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-[#c2410c] shrink-0" />
                <span className="text-xs uppercase tracking-wider text-[#4b5563] font-bold">
                  Hệ thống cơ sở
                </span>
              </div>
              <p className="font-bold text-[#111827] text-sm pl-8">
                Hải Phòng • Hưng Yên • Ninh Bình
              </p>
            </div>

            {/* Thẻ 4: Tốc độ phản hồi */}
            <div className="bg-[#f5f5f7] p-5 sm:p-6 rounded-2xl border border-black/6 h-full">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-[#c2410c] shrink-0" />
                <span className="text-xs uppercase tracking-wider text-[#4b5563] font-bold">
                  Tốc độ phản hồi
                </span>
              </div>
              <p className="font-bold text-[#111827] text-sm pl-8">
                Trong vòng 30 phút
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* 2. FORM ĐẶT BUỔI HỌC THỬ 1-1 MIỄN PHÍ */}
      <div id="dang-ky" className="relative overflow-hidden bg-[#fafaf9] py-16 sm:py-20 border-b border-black/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#111827] mb-3 whitespace-nowrap">
              Để lại thông tin, <span className="text-[#c2410c]">chúng tôi sẽ liên hệ lại</span>
            </h2>
            <p className="text-base text-[#4b5563] max-w-lg mx-auto leading-relaxed">
              Thầy cô phản hồi trong vòng 30 phút và tư vấn buổi học thử 1-1 miễn phí cho bé
            </p>
          </div>

          <div className="max-w-2xl mx-auto rounded-3xl bg-white p-6 sm:p-9 shadow-md border border-black/8">
            {submitted ? (
              <div className="py-6 px-4 text-center">
                <div className="flex justify-center -mt-2 mb-3">
                  <img 
                    src="/images/robot-success.png" 
                    alt="Đăng ký thành công" 
                    className="h-28 sm:h-36 w-auto object-contain drop-shadow-sm select-none"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-2 tracking-tight">
                  Đăng ký <span className="text-[#f97316]">thành công!</span>
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto mb-5 leading-relaxed">
                  Cảm ơn <strong>{parentName}</strong>. Thầy cô VIAI Academy sẽ gọi điện tư vấn buổi học thử 1-1 tại cơ sở <strong>{branch}</strong> theo số <strong>{phone}</strong> trong ít phút tới.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/25 transition-all cursor-pointer"
                >
                  Đăng ký cho bé khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Họ tên phụ huynh */}
                <div>
                  <label className="block text-xs font-bold text-[#111827] mb-1.5 uppercase tracking-wider">
                    Họ và tên phụ huynh <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn An"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#111827] placeholder:text-neutral-400 focus:border-[#c2410c] focus:ring-2 focus:ring-[#c2410c]/20 focus:outline-none transition-all"
                  />
                </div>

                {/* Số điện thoại */}
                <div>
                  <label className="block text-xs font-bold text-[#111827] mb-1.5 uppercase tracking-wider">
                    Số điện thoại liên hệ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="Ví dụ: 0912345678"
                    value={phone}
                    onChange={handlePhoneChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      phoneError ? 'border-red-500 ring-2 ring-red-500/20 bg-red-50/20' : 'border-neutral-300 bg-white'
                    } text-sm text-[#111827] placeholder:text-neutral-400 focus:border-[#c2410c] focus:ring-2 focus:ring-[#c2410c]/20 focus:outline-none transition-all`}
                  />
                  {phoneError && (
                    <p className="text-xs text-red-500 font-medium mt-1">
                      {phoneError}
                    </p>
                  )}
                </div>

                {/* Khoá học quan tâm - 3 khóa */}
                <div>
                  <label className="block text-xs font-bold text-[#111827] mb-1.5 uppercase tracking-wider">
                    Khoá học quan tâm cho bé <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#111827] focus:border-[#c2410c] focus:ring-2 focus:ring-[#c2410c]/20 focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Khối Mầm non (4–6 tuổi)">Khối Mầm non (4–6 tuổi)</option>
                    <option value="Khối Tiểu học (Lớp 1 – 5)">Khối Tiểu học (Lớp 1 – 5)</option>
                    <option value="Khối Trung học (Lớp 6 – 9)">Khối Trung học (Lớp 6 – 9)</option>
                  </select>
                </div>

                {/* Lựa chọn cơ sở */}
                <div>
                  <label className="block text-xs font-bold text-[#111827] mb-1.5 uppercase tracking-wider">
                    Chọn cơ sở thuận tiện cho bé
                  </label>
                  <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#111827] focus:border-[#c2410c] focus:ring-2 focus:ring-[#c2410c]/20 focus:outline-none transition-all"
                  >
                    <option value="Hải Phòng">Cơ sở Hải Phòng (42 Lạch Tray, Q. Ngô Quyền)</option>
                    <option value="Hưng Yên">Cơ sở Hưng Yên (158 Chu Văn An, TP. Hưng Yên)</option>
                    <option value="Ninh Bình">Cơ sở Ninh Bình (86 Đinh Tiên Hoàng, TP. Ninh Bình)</option>
                    <option value="Online Toàn Quốc">Học Trực Tuyến Toàn Quốc (Phòng Lab 3D)</option>
                  </select>
                </div>

                {/* Ghi chú thêm */}
                <div>
                  <label className="block text-xs font-bold text-[#111827] mb-1.5 uppercase tracking-wider">
                    Độ tuổi của con hoặc mong muốn riêng (không bắt buộc)
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Bé 8 tuổi, chưa từng học lập trình..."
                    value={extraInfo}
                    onChange={(e) => setExtraInfo(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#111827] placeholder:text-neutral-400 focus:border-[#c2410c] focus:ring-2 focus:ring-[#c2410c]/20 focus:outline-none transition-all"
                  />
                </div>

                {/* Đồng ý cam kết */}
                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="agreed"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="h-4 w-4 rounded border-neutral-300 text-[#c2410c] focus:ring-[#c2410c]"
                  />
                  <label htmlFor="agreed" className="text-xs sm:text-sm text-[#4b5563] cursor-pointer">
                    Tôi đồng ý nhận điện thoại tư vấn lịch học thử 1-1 miễn phí từ VIAI Academy
                  </label>
                </div>

                {/* Nút gửi */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!agreed || isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#c2410c] hover:bg-[#9a3412] disabled:opacity-50 text-white font-bold py-3.5 px-6 transition-all shadow-xs cursor-pointer active:scale-98"
                  >
                    <span>{isSubmitting ? 'ĐANG GỬI THÔNG TIN...' : 'ĐẶT BUỔI HỌC THỬ 1-1 MIỄN PHÍ'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-[#4b5563] text-center mt-3 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Thông tin bảo mật 100%. Buổi trải nghiệm hoàn toàn miễn phí.</span>
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* 3. 3 CƠ SỞ ĐANG HOẠT ĐỘNG — Không dùng kicker label thừa */}
      <div className="relative overflow-hidden bg-white py-16 sm:py-20 border-b border-black/8">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-14">
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111827] mb-3">
              3 cơ sở đang hoạt động
            </h3>
            <p className="text-base text-[#4b5563] max-w-xl mx-auto leading-relaxed">
              Trực tiếp trải nghiệm phòng Lab Robotics và sa bàn thi đấu tiêu chuẩn cùng thầy cô
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {campuses.map((campus) => (
              <div
                key={campus.id}
                className="bg-white rounded-2xl border border-black/8 p-6 sm:p-7 shadow-2xs hover:border-[#c2410c]/30 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-orange-50 text-[#c2410c]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#111827] leading-snug">
                        {campus.name}
                      </h4>
                      <p className="text-xs text-[#4b5563] font-medium mt-0.5">
                        {campus.area}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#111827] leading-relaxed mb-3">
                    {campus.address}
                  </p>

                  <p className="text-xs sm:text-sm text-[#4b5563] italic mb-4 leading-relaxed">
                    {campus.feature}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <a
                    href={`tel:${campus.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#111827] hover:text-[#c2410c] transition-colors"
                  >
                    <Phone className="h-4 w-4 text-[#c2410c]" />
                    <span>{campus.phone}</span>
                  </a>

                  <a
                    href={campus.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#c2410c] hover:underline transition-colors"
                  >
                    <span>Chỉ đường →</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 4. KẾT NỐI — Không dùng kicker label thừa */}
      <div className="py-14 sm:py-16 bg-[#fafaf9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111827]">
              Theo dõi VIAI Academy
            </h3>
            <p className="text-base text-[#4b5563] mt-2">
              Cập nhật các giải đấu Robotics, lịch học thử và video chế tạo mới nhất của các bé
            </p>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
            
            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook VIAI Academy"
              className="group flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl border border-black/8 bg-white hover:-translate-y-1 transition-all duration-200 min-w-[110px] sm:min-w-[125px] hover:shadow-md cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-2xs bg-[#1877F2]/10">
                <img 
                  src="/icons/facebook.svg" 
                  alt="Facebook" 
                  className="w-10 h-10 object-contain" 
                />
              </div>
              <span className="text-sm font-bold text-[#111827]">Facebook</span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok VIAI Academy"
              className="group flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl border border-black/8 bg-white hover:-translate-y-1 transition-all duration-200 min-w-[110px] sm:min-w-[125px] hover:shadow-md cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-2xs bg-neutral-100">
                <img 
                  src="/icons/tiktok.svg" 
                  alt="TikTok" 
                  className="w-10 h-10 object-contain" 
                />
              </div>
              <span className="text-sm font-bold text-[#111827]">TikTok</span>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube VIAI Academy"
              className="group flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl border border-black/8 bg-white hover:-translate-y-1 transition-all duration-200 min-w-[110px] sm:min-w-[125px] hover:shadow-md cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-2xs bg-[#FF0000]/10">
                <img 
                  src="/icons/youtube.svg" 
                  alt="YouTube" 
                  className="w-10 h-10 object-contain" 
                />
              </div>
              <span className="text-sm font-bold text-[#111827]">YouTube</span>
            </a>

            {/* Zalo */}
            <a
              href="https://zalo.me/0344533898"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zalo VIAI Academy"
              className="group flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl border border-black/8 bg-white hover:-translate-y-1 transition-all duration-200 min-w-[110px] sm:min-w-[125px] hover:shadow-md cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-2xs bg-[#0068FF]/10">
                <img 
                  src="/icons/zalo.svg" 
                  alt="Zalo" 
                  className="w-10 h-10 object-contain" 
                />
              </div>
              <span className="text-sm font-bold text-[#111827]">Zalo</span>
            </a>

          </div>
        </div>
      </div>

    </section>
  );
};
