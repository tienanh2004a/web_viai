import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, MapPin, Calendar, Phone, User, Bot } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitLeadToGoogleSheet } from '../services/leadService';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({
  isOpen,
  onClose,
  defaultCourse = 'Lập trình Robot 3D & RoboSim',
}) => {
  const [parentName, setParentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [branch, setBranch] = useState('Cơ sở Hải Phòng');
  const [grade, setGrade] = useState('Lớp 3 — 5');
  const [preferredDate, setPreferredDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !phoneNumber || isSubmitting) return;

    setIsSubmitting(true);
    await submitLeadToGoogleSheet({
      parentName,
      phone: phoneNumber,
      branch,
      courseOrAge: `${defaultCourse} (${grade})`,
      notes: preferredDate ? `Ngày học dự kiến: ${preferredDate}` : '',
      source: 'Popup Học Thử 1-1',
    });
    setIsSubmitting(false);

    // Trigger colorful celebratory confetti blast
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F97316', '#A855F7', '#06B6D4', '#EAB308'],
    });

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setParentName('');
    setPhoneNumber('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn cursor-pointer"
      onClick={handleReset}
    >
      <div 
        className="relative w-full max-w-lg rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-2xl text-[#0c0a08] overflow-hidden cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle warm ambient glow */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 bg-orange-100/60 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-48 h-48 bg-amber-100/60 rounded-full blur-3xl" />

        {/* Close Button */}
        <button
          onClick={handleReset}
          aria-label="Đóng cửa sổ"
          className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-zinc-900 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          /* Success Screen */
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mb-4 transition-transform duration-300 scale-105">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-[#0c0a08] mb-2">
              Đăng Ký Thành Công!
            </h3>

            <p className="text-sm text-zinc-600 max-w-sm mx-auto mb-6 leading-relaxed">
              Cảm ơn <strong className="text-orange-600">{parentName}</strong> đã đặt lịch học thử 1-1 cho con. 
              Thầy cô tại <strong>VIAI Academy</strong> sẽ liên hệ qua số điện thoại <strong>{phoneNumber}</strong> trong ít phút để xác nhận khung giờ đẹp nhất!
            </p>

            <div className="rounded-2xl border border-gray-200 bg-[#faf9f6] p-4 text-left text-xs space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-zinc-500">Khoá học:</span>
                <span className="font-semibold text-zinc-900">{defaultCourse}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Địa điểm:</span>
                <span className="font-semibold text-orange-700">{branch}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Độ tuổi của con:</span>
                <span className="font-semibold text-zinc-800">{grade}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Chi phí buổi trải nghiệm:</span>
                <span className="font-bold text-emerald-600">0 VNĐ (Miễn phí 100%)</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 rounded-xl bg-[#c2410c] hover:bg-[#9a3412] text-white font-bold text-sm shadow-xs transition-all cursor-pointer"
            >
              Hoàn tất &amp; Đóng
            </button>
          </div>
        ) : (
          /* Registration Form */
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
              <Sparkles className="h-4 w-4" />
              <span>TẶNG 1 BUỔI TRẢI NGHIỆM 1-1 TRỊ GIÁ 500K</span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#0c0a08] mb-2">
              Đặt Lịch Học Thử 1-1 Miễn Phí
            </h3>

            <p className="text-xs sm:text-sm text-zinc-600 mb-6">
              45 phút đánh giá tư duy + 90 phút trực tiếp điều khiển robot trên sa bàn cùng giảng viên. Hoàn toàn không ràng buộc.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Parent Name */}
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5 flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-orange-600" />
                  <span>Họ và tên Phụ huynh *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn An"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-[#faf9f6] px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5 flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-orange-600" />
                  <span>Số điện thoại (Nhận lịch hẹn qua Zalo) *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ví dụ: 0905 123 456"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-[#faf9f6] px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors"
                />
              </div>

              {/* Branch Selection */}
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-orange-600" />
                  <span>Chọn Cơ sở thuận tiện cho gia đình *</span>
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-[#faf9f6] px-3.5 py-2.5 text-sm text-zinc-900 focus:border-orange-500 focus:bg-white focus:outline-none"
                >
                  <option value="Cơ sở Hải Phòng">Cơ sở Hải Phòng</option>
                  <option value="Cơ sở Hưng Yên">Cơ sở Hưng Yên</option>
                  <option value="Cơ sở Ninh Bình">Cơ sở Ninh Bình</option>
                  <option value="Học Online trực tuyến toàn quốc">Học Online trực tuyến toàn quốc</option>
                </select>
              </div>

              {/* Grade Selection */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5 flex items-center gap-1.5">
                    <Bot className="h-3.5 w-3.5 text-orange-600" />
                    <span>Độ tuổi / Lớp</span>
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-[#faf9f6] px-3 py-2.5 text-sm text-zinc-900 focus:border-orange-500 focus:bg-white focus:outline-none"
                  >
                    <option value="Khối Mầm non">Khối Mầm non (4–5 tuổi)</option>
                    <option value="Lớp 1 — 2">Lớp 1 — 2 (6-7 tuổi)</option>
                    <option value="Lớp 3 — 5">Lớp 3 — 5 (8-10 tuổi)</option>
                    <option value="Lớp 6 — 9">Lớp 6 — 9 (11-15 tuổi)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-orange-600" />
                    <span>Ngày dự kiến</span>
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-[#faf9f6] px-3 py-2.5 text-sm text-zinc-900 focus:border-orange-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 rounded-[8px] bg-[#111827] hover:bg-[#1f2937] disabled:opacity-50 font-semibold text-sm text-white active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="h-4 w-4 text-amber-300" />
                <span>{isSubmitting ? 'ĐANG GỬI THÔNG TIN...' : 'Xác Nhận Đặt Lịch Học Thử 0 Đồng'}</span>
              </button>

              <p className="text-xs text-center text-zinc-500 font-medium">
                🔒 Cam kết bảo mật thông tin 100%. Trung tâm chỉ liên hệ để xếp lịch học thử.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
