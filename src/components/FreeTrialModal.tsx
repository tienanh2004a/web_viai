import React, { useState, useEffect } from 'react';
import { X, Sparkles, MapPin, Calendar, Phone, User, Bot, BookOpen, Coins, ArrowRight } from 'lucide-react';
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
  defaultCourse,
}) => {
  const [parentName, setParentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('Khối Tiểu học (Lớp 1 – 5)');
  const [branch, setBranch] = useState('Cơ sở Hải Phòng');
  const [preferredDate, setPreferredDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultCourse) {
      if (defaultCourse.includes('Mầm non')) {
        setSelectedCourse('Khối Mầm non (4–6 tuổi)');
      } else if (defaultCourse.includes('Trung học') || defaultCourse.includes('THCS')) {
        setSelectedCourse('Khối Trung học (Lớp 6 – 9)');
      } else if (defaultCourse.includes('Tiểu học')) {
        setSelectedCourse('Khối Tiểu học (Lớp 1 – 5)');
      }
    }
  }, [defaultCourse, isOpen]);

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Chỉ giữ lại chữ số và giới hạn tối đa 10 số
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhoneNumber(val);
    if (phoneError) {
      if (val.length === 10 && val.startsWith('0')) {
        setPhoneError('');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || isSubmitting) return;

    // Kiểm tra số điện thoại bắt buộc đúng 10 số và bắt đầu bằng số 0
    if (!phoneNumber) {
      setPhoneError('Vui lòng nhập số điện thoại');
      return;
    }
    if (!phoneNumber.startsWith('0')) {
      setPhoneError('Số điện thoại phải bắt đầu bằng số 0');
      return;
    }
    if (phoneNumber.length !== 10) {
      setPhoneError(`Số điện thoại phải gồm đúng 10 số (hiện có ${phoneNumber.length} số)`);
      return;
    }
    setPhoneError('');

    setIsSubmitting(true);
    const extraNotes = [];
    if (defaultCourse && !defaultCourse.includes('Khối')) {
      extraNotes.push(`Khoá quan tâm: ${defaultCourse}`);
    }
    if (preferredDate) {
      extraNotes.push(`Ngày học dự kiến: ${preferredDate}`);
    }

    await submitLeadToGoogleSheet({
      parentName,
      phone: phoneNumber,
      branch,
      courseOrAge: selectedCourse,
      notes: extraNotes.join(' | '),
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
    setPhoneError('');
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
          className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-zinc-900 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          /* Success Screen - Thiết kế cao cấp theo Ảnh 4 */
          <div className="text-center pt-2 pb-1">
            {/* Mascot Robot minh họa 3D vẫy tay + Tick xanh */}
            <div className="flex justify-center -mt-2 mb-3">
              <img 
                src="/images/robot-success.png" 
                alt="Đăng ký thành công" 
                className="h-28 sm:h-36 w-auto object-contain drop-shadow-sm select-none"
              />
            </div>

            {/* Tiêu đề Đăng ký thành công! */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-2 tracking-tight">
              Đăng ký <span className="text-[#f97316]">thành công!</span>
            </h3>

            {/* Đoạn mô tả nhẹ nhàng, lịch sự */}
            <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto mb-5 leading-relaxed">
              Cảm ơn {parentName ? <strong className="text-zinc-900">{parentName}</strong> : 'bạn'} đã đăng ký lớp học thử tại <strong className="text-orange-600">VIAI Academy</strong>.<br className="hidden sm:inline" />
              Đội ngũ tư vấn sẽ liên hệ với bạn qua số điện thoại để xác nhận lịch học.
            </p>

            {/* Bảng thông tin đặt lịch Grid 2x2 bo góc sang trọng */}
            <div className="rounded-2xl border border-orange-100/80 bg-[#faf8f5] p-4 sm:p-5 text-left mb-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                
                {/* 1. Khóa học */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-100/80 text-orange-600 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs text-zinc-400 font-medium">Khóa học</span>
                    <span className="block text-xs sm:text-sm font-bold text-zinc-900 truncate">
                      {defaultCourse && !defaultCourse.includes('Khối') ? defaultCourse : selectedCourse}
                    </span>
                  </div>
                </div>

                {/* 2. Địa điểm */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-100/80 text-orange-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs text-zinc-400 font-medium">Địa điểm</span>
                    <span className="block text-xs sm:text-sm font-bold text-zinc-900 truncate">
                      {branch}
                    </span>
                  </div>
                </div>

                {/* 3. Độ tuổi / Khối lớp */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-100/80 text-orange-600 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs text-zinc-400 font-medium">Độ tuổi</span>
                    <span className="block text-xs sm:text-sm font-bold text-zinc-900 truncate">
                      {selectedCourse}
                    </span>
                  </div>
                </div>

                {/* 4. Chi phí buổi trải nghiệm */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-100/80 text-orange-600 flex items-center justify-center shrink-0">
                    <Coins className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs text-zinc-400 font-medium">Chi phí buổi trải nghiệm</span>
                    <span className="block text-xs sm:text-sm font-extrabold text-emerald-600 tracking-wide">
                      MIỄN PHÍ
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Nút Hoàn tất → cam rực rỡ */}
            <button
              onClick={handleReset}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm sm:text-base shadow-md shadow-orange-500/25 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Hoàn tất</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="text-xs text-center text-zinc-400 font-medium mt-3">
              Hẹn gặp bạn tại lớp học nhé!
            </p>
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

              {/* Phone Number - Bỏ ghi chú thừa, giữ logic */}
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5 flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-orange-600" />
                  <span>Số điện thoại *</span>
                </label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="Ví dụ: 0912345678"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className={`w-full rounded-xl border ${
                    phoneError ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20' : 'border-gray-200 bg-[#faf9f6]'
                  } px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors`}
                />
                {phoneError && (
                  <p className="text-xs text-red-500 font-medium mt-1">
                    {phoneError}
                  </p>
                )}
              </div>

              {/* Course Selection - Khối mầm non giữ nguyên, khối tiểu học Lớp 1 - 5, trung học Lớp 6 - 9 */}
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5 flex items-center gap-1.5">
                  <Bot className="h-3.5 w-3.5 text-orange-600" />
                  <span>Khoá học quan tâm cho bé *</span>
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-[#faf9f6] px-3.5 py-2.5 text-sm text-zinc-900 focus:border-orange-500 focus:bg-white focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="Khối Mầm non (4–6 tuổi)">Khối Mầm non (4–6 tuổi)</option>
                  <option value="Khối Tiểu học (Lớp 1 – 5)">Khối Tiểu học (Lớp 1 – 5)</option>
                  <option value="Khối Trung học (Lớp 6 – 9)">Khối Trung học (Lớp 6 – 9)</option>
                </select>
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
                  className="w-full rounded-xl border border-gray-200 bg-[#faf9f6] px-3.5 py-2.5 text-sm text-zinc-900 focus:border-orange-500 focus:bg-white focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="Cơ sở Hải Phòng">Cơ sở Hải Phòng</option>
                  <option value="Cơ sở Hưng Yên">Cơ sở Hưng Yên</option>
                  <option value="Cơ sở Ninh Bình">Cơ sở Ninh Bình</option>
                  <option value="Học Online trực tuyến toàn quốc">Học Online trực tuyến toàn quốc</option>
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-orange-600" />
                  <span>Ngày dự kiến (không bắt buộc)</span>
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-[#faf9f6] px-3.5 py-2.5 text-sm text-zinc-900 focus:border-orange-500 focus:bg-white focus:outline-none transition-colors"
                />
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
