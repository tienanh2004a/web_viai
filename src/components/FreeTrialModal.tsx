import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles, MapPin, Calendar, Phone, User, BookOpen, Coins, ArrowRight, GraduationCap, ChevronDown, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitLeadToGoogleSheet } from '../services/leadService';

// Cute Robot Icon SVG chuẩn EdTech/Robotics
export const CuteRobotIcon = ({ color = '#EA580C', className = 'w-5 h-5' }: { color?: string; className?: string }) => (
  <svg 
    className={`${className} shrink-0`} 
    viewBox="0 0 24 24" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="3" r="1.5" fill={color} />
    <line x1="12" y1="4.5" x2="12" y2="7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <rect x="2" y="11" width="2" height="4" rx="1" fill={color} />
    <rect x="20" y="11" width="2" height="4" rx="1" fill={color} />
    <rect x="4" y="7" width="16" height="13" rx="4" fill={color} fillOpacity="0.14" stroke={color} strokeWidth="1.8" />
    <circle cx="9" cy="12.5" r="1.5" fill={color} />
    <circle cx="15" cy="12.5" r="1.5" fill={color} />
    <path d="M9.5 15.8C10.3 16.6 11.1 17 12 17C12.9 17 13.7 16.6 14.5 15.8" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

// Icon Cơ sở Trường học EdTech
export const BranchBuildingIcon = ({ color = '#059669', className = 'w-5 h-5' }: { color?: string; className?: string }) => (
  <svg 
    className={`${className} shrink-0`} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 21H21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M5 21V8L12 3.5L19 8V21" stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill={color} fillOpacity="0.12" />
    <path d="M9 10.5H10.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M13.5 10.5H15" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M9 14.5H10.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M13.5 14.5H15" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <rect x="10.5" y="17.5" width="3" height="3.5" rx="0.5" fill={color} />
  </svg>
);

// Icon Học Online Toàn Quốc
export const BranchOnlineIcon = ({ color = '#0284C7', className = 'w-5 h-5' }: { color?: string; className?: string }) => (
  <svg 
    className={`${className} shrink-0`} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.12" />
    <ellipse cx="12" cy="12" rx="4" ry="9" stroke={color} strokeWidth="1.6" />
    <line x1="3.5" y1="9" x2="20.5" y2="9" stroke={color} strokeWidth="1.6" />
    <line x1="3.5" y1="15" x2="20.5" y2="15" stroke={color} strokeWidth="1.6" />
  </svg>
);

export const COURSE_OPTIONS = [
  { value: 'Robotics Mầm Non — Lớp Cơ Bản', label: 'Robotics Mầm Non — Lớp Cơ Bản', robotColor: '#F59E0B' },
  { value: 'Robotics Mầm Non — Lớp Nâng Cao', label: 'Robotics Mầm Non — Lớp Nâng Cao', robotColor: '#F59E0B' },
  { value: 'Robotics Mầm Non — Lớp Chuyên Sâu', label: 'Robotics Mầm Non — Lớp Chuyên Sâu', robotColor: '#F59E0B' },
  { value: 'Robotics Tiểu Học — Khóa Bắt Đầu', label: 'Robotics Tiểu Học — Khóa Bắt Đầu', robotColor: '#EA580C' },
  { value: 'Robotics Tiểu Học — Khóa Intern', label: 'Robotics Tiểu Học — Khóa Intern', robotColor: '#EA580C' },
  { value: 'Robotics Tiểu Học — Khóa Nâng Cao', label: 'Robotics Tiểu Học — Khóa Nâng Cao', robotColor: '#EA580C' },
  { value: 'Robotics Tiểu Học — Khóa Chuyên Gia', label: 'Robotics Tiểu Học — Khóa Chuyên Gia', robotColor: '#EA580C' },
  { value: 'Robotics THCS — Khóa Bắt Đầu', label: 'Robotics THCS — Khóa Bắt Đầu', robotColor: '#8B5CF6' },
  { value: 'Robotics THCS — Khóa Intern', label: 'Robotics THCS — Khóa Intern', robotColor: '#8B5CF6' },
  { value: 'Robotics THCS — Khóa Nâng Cao', label: 'Robotics THCS — Khóa Nâng Cao', robotColor: '#8B5CF6' },
  { value: 'Robotics THCS — Khóa Chuyên Gia', label: 'Robotics THCS — Khóa Chuyên Gia', robotColor: '#8B5CF6' },
];

export const BRANCH_OPTIONS = [
  {
    value: 'Cơ sở Hải Phòng',
    label: 'Cơ sở Hải Phòng',
    sublabel: 'Cung Văn hoá Thiếu nhi Hải Phòng',
    iconType: 'building' as const,
  },
  {
    value: 'Cơ sở Hưng Yên',
    label: 'Cơ sở Hưng Yên',
    sublabel: '25 Đinh Tiên Hoàng, Trần Lãm',
    iconType: 'building' as const,
  },
  {
    value: 'Học Online trực tuyến toàn quốc',
    label: 'Học Online trực tuyến toàn quốc',
    sublabel: 'Phòng Lab 3D RoboSim tương tác',
    iconType: 'globe' as const,
  },
];

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

const getTodayString = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Kiểm tra ngày theo chuẩn dd/mm/yyyy và đảm bảo hôm nay hoặc tương lai
const validateDateVN = (str: string): string => {
  if (!str) return '';
  const parts = str.split('/');
  if (parts.length !== 3 || parts[2].length !== 4) {
    return 'Hãy nhập lại ngày dự kiến';
  }
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return 'Hãy nhập lại ngày dự kiến';
  }

  const now = new Date();
  const currentYear = now.getFullYear();
  if (year < currentYear || year > currentYear + 3) {
    return 'Hãy nhập lại ngày dự kiến';
  }

  if (month < 1 || month > 12) {
    return 'Hãy nhập lại ngày dự kiến';
  }

  // Số ngày tối đa của tháng tương ứng (tự động tính năm nhuận)
  const daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) {
    return 'Hãy nhập lại ngày dự kiến';
  }

  const chosenDate = new Date(year, month - 1, day, 23, 59, 59);
  now.setHours(0, 0, 0, 0);

  if (chosenDate < now) {
    return 'Hãy nhập lại ngày dự kiến';
  }

  return '';
};

// Ánh xạ khoá học sang Cột Độ tuổi học viên trên Google Sheet (giữ nguyên độ tuổi chuẩn như ảnh 2)
export const mapCourseToAgeGroup = (courseName: string): string => {
  if (courseName.includes('Mầm') || courseName.includes('mam-non') || courseName.includes('4 — 6') || courseName.includes('4 – 6')) {
    return 'Khối Mầm non (4 – 6 tuổi)';
  }
  if (courseName.includes('6 — 7') || courseName.includes('8 — 9') || courseName.includes('Trung') || courseName.includes('trung-hoc') || courseName.includes('11 — 15')) {
    return 'Khối Trung học (Lớp 6 – 9)';
  }
  return 'Khối Tiểu học (Lớp 1 – 5)';
};

// Lấy chỉ độ tuổi ngắn gọn để hiển thị trên thẻ xác nhận (4 - 6 tuổi, Lớp 1 - 2, Lớp 3 - 4, Lớp 5, Lớp 6 - 7, Lớp 8 - 9)
export const getDisplayAgeOnly = (courseName: string): string => {
  if (courseName.includes('Mầm') || courseName.includes('mam-non') || courseName.includes('4 — 6') || courseName.includes('4 - 6')) {
    return '4 - 6 tuổi';
  }
  if (courseName.includes('1 — 2') || courseName.includes('1 - 2')) {
    return 'Lớp 1 - 2';
  }
  if (courseName.includes('3 — 4') || courseName.includes('3 - 4')) {
    return 'Lớp 3 - 4';
  }
  if (courseName.includes('Lớp 5') || courseName.includes('lop-5')) {
    return 'Lớp 5';
  }
  if (courseName.includes('6 — 7') || courseName.includes('6 - 7')) {
    return 'Lớp 6 - 7';
  }
  if (courseName.includes('8 — 9') || courseName.includes('8 - 9')) {
    return 'Lớp 8 - 9';
  }
  if (courseName.includes('Trung') || courseName.includes('trung-hoc')) {
    return 'Lớp 6 - 9';
  }
  return 'Lớp 1 - 5';
};

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({
  isOpen,
  onClose,
  defaultCourse,
}) => {
  const [parentName, setParentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('Robotics Tiểu Học — Khóa Bắt Đầu');
  const [branch, setBranch] = useState('Cơ sở Hải Phòng');
  const [preferredDate, setPreferredDate] = useState(''); // Định dạng dd/mm/yyyy
  const [dateError, setDateError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [botHoneypot, setBotHoneypot] = useState('');
  const [formOpenedTime, setFormOpenedTime] = useState<number>(Date.now());
  const datePickerRef = useRef<HTMLInputElement>(null);

  // Trạng thái mở/đóng và ref cho 2 custom dropdown cao cấp
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isBranchOpen, setIsBranchOpen] = useState(false);
  const courseDropdownRef = useRef<HTMLDivElement>(null);
  const branchDropdownRef = useRef<HTMLDivElement>(null);

  // Đóng dropdown khi click ra ngoài hoặc bấm phím Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (courseDropdownRef.current && !courseDropdownRef.current.contains(e.target as Node)) {
        setIsCourseOpen(false);
      }
      if (branchDropdownRef.current && !branchDropdownRef.current.contains(e.target as Node)) {
        setIsBranchOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCourseOpen(false);
        setIsBranchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setFormOpenedTime(Date.now());
      setBotHoneypot('');
      setDateError('');
      setIsCourseOpen(false);
      setIsBranchOpen(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsCourseOpen(false);
      setIsBranchOpen(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (defaultCourse) {
      if (defaultCourse.includes('Mầm') || defaultCourse.includes('mam-non')) {
        if (defaultCourse.includes('Nâng Cao')) setSelectedCourse('Robotics Mầm Non — Lớp Nâng Cao');
        else if (defaultCourse.includes('Chuyên Sâu')) setSelectedCourse('Robotics Mầm Non — Lớp Chuyên Sâu');
        else setSelectedCourse('Robotics Mầm Non — Lớp Cơ Bản');
      } else if (defaultCourse.includes('Trung') || defaultCourse.includes('trung-hoc') || defaultCourse.includes('THCS')) {
        if ((defaultCourse.includes('Intern') || defaultCourse.includes('Intren'))) setSelectedCourse('Robotics THCS — Khóa Intern');
        else if (defaultCourse.includes('Nâng Cao')) setSelectedCourse('Robotics THCS — Khóa Nâng Cao');
        else if (defaultCourse.includes('Chuyên Gia')) setSelectedCourse('Robotics THCS — Khóa Chuyên Gia');
        else setSelectedCourse('Robotics THCS — Khóa Bắt Đầu');
      } else {
        if ((defaultCourse.includes('Intern') || defaultCourse.includes('Intren'))) setSelectedCourse('Robotics Tiểu Học — Khóa Intern');
        else if (defaultCourse.includes('Nâng Cao')) setSelectedCourse('Robotics Tiểu Học — Khóa Nâng Cao');
        else if (defaultCourse.includes('Chuyên Gia')) setSelectedCourse('Robotics Tiểu Học — Khóa Chuyên Gia');
        else setSelectedCourse('Robotics Tiểu Học — Khóa Bắt Đầu');
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

  // Người dùng gõ ngày/tháng/năm tự động thêm dấu /
  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\d/]/g, '');
    const digits = raw.replace(/\D/g, '').slice(0, 8); // Tối đa đúng 8 chữ số: 2 ngày, 2 tháng, 4 năm
    let formatted = digits;
    if (digits.length > 4) {
      formatted = `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}`;
    } else if (digits.length > 2) {
      formatted = `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }
    setPreferredDate(formatted);

    if (formatted.length === 10) {
      setDateError(validateDateVN(formatted));
    } else if (formatted.length === 0) {
      setDateError('');
    } else if (digits.length >= 2 && parseInt(digits.slice(0, 2), 10) > 31) {
      setDateError('Hãy nhập lại ngày dự kiến');
    } else if (digits.length >= 4 && (parseInt(digits.slice(2, 4), 10) > 12 || parseInt(digits.slice(2, 4), 10) < 1)) {
      setDateError('Hãy nhập lại ngày dự kiến');
    } else {
      setDateError('');
    }
  };

  // Chọn từ popup lịch thì tự chuyển đổi sang dd/mm/yyyy
  const handleNativePickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value; // YYYY-MM-DD
    if (val) {
      const parts = val.split('-');
      if (parts.length === 3) {
        const ddMmYyyy = `${parts[2]}/${parts[1]}/${parts[0]}`;
        setPreferredDate(ddMmYyyy);
        setDateError(validateDateVN(ddMmYyyy));
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

    // Kiểm tra ngày học dự kiến: Nếu có nhập phải đúng dd/mm/yyyy và không trong quá khứ
    if (preferredDate) {
      const err = validateDateVN(preferredDate);
      if (err) {
        setDateError(err);
        return;
      }
    }
    setDateError('');

    setIsSubmitting(true);
    // Cột Độ tuổi học viên (Cột F) giữ nguyên độ tuổi chuẩn như ảnh 2
    const studentAgeGroup = mapCourseToAgeGroup(selectedCourse);

    // Cột Ghi chú (Cột H) chỉ để đúng thông tin khoá học: "Khoá quan tâm: Robotics Khối..."
    const notesContent = `Khoá quan tâm: ${selectedCourse}`;

    // Tách riêng Ngày học dự kiến, gửi định dạng chuẩn dd/mm/yyyy
    await submitLeadToGoogleSheet({
      parentName,
      phone: phoneNumber,
      branch,
      courseOrAge: studentAgeGroup,
      preferredDate: preferredDate.trim(),
      notes: notesContent,
      source: 'Popup Học Thử 1-1',
      honeypot: botHoneypot,
      fillDurationMs: Date.now() - formOpenedTime,
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
    // Thu hồi bàn phím ảo điện thoại và thoát focus ngay lập tức
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setIsCourseOpen(false);
    setIsBranchOpen(false);
    setSubmitted(false);
    setParentName('');
    setPhoneNumber('');
    setPhoneError('');
    setPreferredDate('');
    setDateError('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-[#0B1528]/65 backdrop-blur-sm animate-fadeIn cursor-pointer"
      onClick={handleReset}
    >
      <div 
        className={`relative w-full ${
          submitted 
            ? 'max-w-[1100px] p-6 sm:p-8 md:p-10' 
            : 'max-w-lg p-5 sm:p-7'
        } max-h-[96vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-[24px] sm:rounded-[32px] border border-amber-900/10 bg-[#FFFCF7] shadow-2xl shadow-slate-950/25 text-[#142A4F] cursor-default transition-all duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          aria-label="Đóng cửa sổ"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-800 bg-amber-100/50 hover:bg-amber-100 transition-colors cursor-pointer z-20"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          /* Success Screen - Thiết kế cao cấp rộng 1100px giống 100% Ảnh 3 */
          <div className="relative z-10 text-center py-1 sm:py-2">
            {/* Mascot Robot VIAI 3D vẫy tay cùng dấu kiểm xanh do user cung cấp */}
            <div className="flex justify-center -mt-1 mb-2 sm:mb-3">
              <img 
                src="/images/robot-viai-success.png" 
                alt="Robot VIAI Đăng ký thành công" 
                className="h-28 sm:h-36 md:h-44 w-auto object-contain drop-shadow-sm select-none"
              />
            </div>

            {/* Tiêu đề Đăng ký thành công! (#142A4F và #F36C21) */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142A4F] mb-2 sm:mb-3 tracking-tight">
              Đăng ký <span className="text-[#F36C21]">thành công!</span>
            </h3>

            {/* Đoạn mô tả nhẹ nhàng, màu chữ xanh xám (#4A5D78) */}
            <div className="text-xs sm:text-sm md:text-base text-[#4A5D78] max-w-xl mx-auto mb-5 sm:mb-6 leading-relaxed space-y-0.5">
              <p>
                Cảm ơn bạn đã đăng ký lớp học thử tại <strong className="text-[#F36C21] font-bold">VIAI Academy</strong>.
              </p>
              <p>
                Đội ngũ tư vấn sẽ liên hệ với bạn qua số điện thoại để xác nhận lịch học.
              </p>
            </div>

            {/* Card thông tin đăng ký: Nền kem nhạt, bo góc 20px, 2 cột trên desktop */}
            <div className="max-w-[780px] mx-auto rounded-[20px] bg-white/70 backdrop-blur-xs border border-[#F5E6D3] p-4 sm:p-6 text-left mb-5 sm:mb-6 shadow-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5">
                
                {/* 1. Khóa học */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-2xl bg-[#FFEAD7] text-[#F36C21] flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs text-[#6B7D96] font-medium mb-0.5">Khóa học</span>
                    <span className="block text-sm sm:text-base font-bold text-[#142A4F] truncate">
                      {selectedCourse}
                    </span>
                  </div>
                </div>

                {/* 2. Địa điểm */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-2xl bg-[#FFEAD7] text-[#F36C21] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs text-[#6B7D96] font-medium mb-0.5">Địa điểm</span>
                    <span className="block text-sm sm:text-base font-bold text-[#142A4F] truncate">
                      {branch}
                    </span>
                  </div>
                </div>

                {/* 3. Độ tuổi */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-2xl bg-[#FFEAD7] text-[#F36C21] flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs text-[#6B7D96] font-medium mb-0.5">Độ tuổi</span>
                    <span className="block text-sm sm:text-base font-bold text-[#142A4F] truncate">
                      {getDisplayAgeOnly(selectedCourse)}
                    </span>
                  </div>
                </div>

                {/* 4. Chi phí buổi trải nghiệm */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-2xl bg-[#FFEAD7] text-[#F36C21] flex items-center justify-center shrink-0">
                    <Coins className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs text-[#6B7D96] font-medium mb-0.5">Chi phí buổi trải nghiệm</span>
                    <span className="block text-sm sm:text-base font-extrabold text-[#059669] tracking-wide">
                      MIỄN PHÍ
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Nút Hoàn tất → Nền gradient cam (#FF922E đến #FF4D0D), bo góc 15px */}
            <div className="max-w-[780px] mx-auto">
              <button
                onClick={handleReset}
                className="w-full py-3.5 sm:py-4 rounded-[15px] bg-gradient-to-r from-[#FF922E] to-[#FF4D0D] hover:from-[#ff8519] hover:to-[#e63f00] text-white font-bold text-base sm:text-lg shadow-lg shadow-orange-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Hoàn tất</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <p className="text-xs sm:text-sm text-center text-[#7A8B9E] font-medium mt-3">
                Hẹn gặp bạn tại lớp học nhé!
              </p>
            </div>
          </div>
        ) : (
          /* Registration Form */
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-1.5">
              <Sparkles className="h-4 w-4" />
              <span>TẶNG 1 BUỔI TRẢI NGHIỆM 1-1 TRỊ GIÁ 500K</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0c0a08] mb-1.5">
              Đặt Lịch Học Thử 1-1 Miễn Phí
            </h3>

            <p className="text-xs sm:text-sm text-zinc-600 mb-4 sm:mb-5">
              45 phút đánh giá tư duy + 90 phút trực tiếp điều khiển robot trên sa bàn cùng giảng viên. Hoàn toàn không ràng buộc.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              {/* Bẫy Honeypot ẩn dành cho bot spam tự động (người dùng thật không thấy và không ảnh hưởng giao diện) */}
              <div 
                className="absolute -left-[9999px] -top-[9999px] opacity-0 pointer-events-none select-none h-0 w-0 overflow-hidden" 
                aria-hidden="true" 
                tabIndex={-1}
              >
                <label htmlFor="modal-website-trap">Website Address</label>
                <input
                  id="modal-website-trap"
                  type="text"
                  name="website_url_check"
                  value={botHoneypot}
                  onChange={(e) => setBotHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Parent Name */}
              <div>
                <label htmlFor="modal-parent-name" className="block text-xs font-semibold text-zinc-700 mb-1.5 flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-orange-600" />
                  <span>Họ và tên Phụ huynh *</span>
                </label>
                <input
                  id="modal-parent-name"
                  name="parentName"
                  autoComplete="name"
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn An"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-[#faf9f6] px-3.5 py-2.5 text-base sm:text-sm text-zinc-900 placeholder-zinc-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors"
                />
              </div>

              {/* Phone Number - Bỏ ghi chú thừa, giữ logic */}
              <div>
                <label htmlFor="modal-phone-number" className="block text-xs font-semibold text-zinc-700 mb-1.5 flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-orange-600" />
                  <span>Số điện thoại *</span>
                </label>
                <input
                  id="modal-phone-number"
                  name="phoneNumber"
                  autoComplete="tel"
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="Ví dụ: 0912345678"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className={`w-full rounded-xl border ${
                    phoneError ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20' : 'border-gray-200 bg-[#faf9f6]'
                  } px-3.5 py-2.5 text-base sm:text-sm text-zinc-900 placeholder-zinc-400 focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors`}
                />
                {phoneError && (
                  <p className="text-xs text-red-500 font-medium mt-1">
                    {phoneError}
                  </p>
                )}
              </div>

              {/* Course Selection - Custom Modern Dropdown */}
              <div className="relative z-30" ref={courseDropdownRef}>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-xs">
                    <GraduationCap className="w-3.5 h-3.5 text-white" />
                  </div>
                  <label id="label-course-select" className="text-xs sm:text-sm font-bold text-[#142A4F]">
                    Khóa học quan tâm cho bé <span className="text-orange-600">*</span>
                  </label>
                </div>


                {/* Hidden input for standard forms */}
                <input type="hidden" name="selectedCourse" value={selectedCourse} />

                {/* Trigger Button */}
                <button
                  type="button"
                  id="modal-course-trigger"
                  onClick={() => {
                    setIsCourseOpen((prev) => !prev);
                    setIsBranchOpen(false);
                  }}
                  aria-haspopup="listbox"
                  aria-expanded={isCourseOpen}
                  className={`w-full min-h-[48px] rounded-2xl border ${
                    isCourseOpen 
                      ? 'border-orange-500 ring-2 ring-orange-500/15 bg-white shadow-xs' 
                      : 'border-neutral-200/90 bg-[#faf9f6] hover:border-orange-400 hover:bg-white'
                  } px-3.5 py-2.5 flex items-center justify-between gap-3 text-left transition-all duration-200 cursor-pointer`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <CuteRobotIcon 
                      color={COURSE_OPTIONS.find((c) => c.value === selectedCourse)?.robotColor || '#EA580C'} 
                      className="w-5 h-5 shrink-0" 
                    />
                    <span className="font-semibold text-sm sm:text-base text-[#142A4F] truncate">
                      {selectedCourse}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ${
                      isCourseOpen ? 'rotate-180 text-orange-600' : ''
                    }`} 
                  />
                </button>

                {/* Dropdown Menu */}
                {isCourseOpen && (
                  <div
                    role="listbox"
                    aria-labelledby="label-course-select"
                    className="absolute top-[calc(100%+6px)] left-0 right-0 z-40 bg-white rounded-2xl border border-orange-200/90 shadow-xl shadow-orange-950/10 p-1.5 space-y-1 max-h-64 overflow-y-auto animate-fadeIn [scrollbar-width:thin]"
                  >
                    {COURSE_OPTIONS.map((course) => {
                      const isSelected = selectedCourse === course.value;
                      return (
                        <button
                          key={course.value}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => {
                            setSelectedCourse(course.value);
                            setIsCourseOpen(false);
                          }}
                          className={`w-full min-h-[48px] py-2.5 px-3 rounded-xl flex items-center justify-between gap-3 text-left transition-all duration-150 cursor-pointer ${
                            isSelected
                              ? 'bg-[#FFF7ED] text-[#142A4F] font-bold shadow-xs'
                              : 'hover:bg-neutral-50 active:bg-neutral-100 text-[#142A4F] font-medium'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <CuteRobotIcon color={course.robotColor} className="w-5 h-5 shrink-0" />
                            <span className="text-sm sm:text-base truncate">
                              {course.label}
                            </span>
                          </div>
                          {isSelected && (
                            <div className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Branch Selection - Custom Modern Dropdown */}
              <div className="relative z-20" ref={branchDropdownRef}>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-white" />
                  </div>
                  <label id="label-branch-select" className="text-xs sm:text-sm font-bold text-[#142A4F]">
                    Chọn cơ sở thuận tiện cho gia đình <span className="text-orange-600">*</span>
                  </label>
                </div>


                {/* Hidden input for form integrity */}
                <input type="hidden" name="branch" value={branch} />

                {/* Trigger Button */}
                <button
                  type="button"
                  id="modal-branch-trigger"
                  onClick={() => {
                    setIsBranchOpen((prev) => !prev);
                    setIsCourseOpen(false);
                  }}
                  aria-haspopup="listbox"
                  aria-expanded={isBranchOpen}
                  className={`w-full min-h-[48px] rounded-2xl border ${
                    isBranchOpen 
                      ? 'border-emerald-500 ring-2 ring-emerald-500/15 bg-white shadow-xs' 
                      : 'border-neutral-200/90 bg-[#faf9f6] hover:border-emerald-400 hover:bg-white'
                  } px-3.5 py-2.5 flex items-center justify-between gap-3 text-left transition-all duration-200 cursor-pointer`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {branch.includes('Online') ? (
                      <BranchOnlineIcon color="#0284C7" className="w-5 h-5 shrink-0" />
                    ) : (
                      <BranchBuildingIcon color="#059669" className="w-5 h-5 shrink-0" />
                    )}
                    <span className="font-semibold text-sm sm:text-base text-[#142A4F] truncate">
                      {branch}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ${
                      isBranchOpen ? 'rotate-180 text-emerald-600' : ''
                    }`} 
                  />
                </button>

                {/* Dropdown Menu */}
                {isBranchOpen && (
                  <div
                    role="listbox"
                    aria-labelledby="label-branch-select"
                    className="absolute top-[calc(100%+6px)] left-0 right-0 z-30 bg-white rounded-2xl border border-emerald-200/90 shadow-xl shadow-slate-900/10 p-1.5 space-y-1 max-h-64 overflow-y-auto animate-fadeIn [scrollbar-width:thin]"
                  >
                    {BRANCH_OPTIONS.map((item) => {
                      const isSelected = branch === item.value;
                      return (
                        <button
                          key={item.value}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => {
                            setBranch(item.value);
                            setIsBranchOpen(false);
                          }}
                          className={`w-full min-h-[50px] py-2.5 px-3 rounded-xl flex items-center justify-between gap-3 text-left transition-all duration-150 cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-50/80 text-[#142A4F] font-bold shadow-xs'
                              : 'hover:bg-neutral-50 active:bg-neutral-100 text-[#142A4F]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            {item.iconType === 'globe' ? (
                              <BranchOnlineIcon color="#0284C7" className="w-5 h-5 shrink-0 mt-0.5" />
                            ) : (
                              <BranchBuildingIcon color="#059669" className="w-5 h-5 shrink-0 mt-0.5" />
                            )}
                            <div className="min-w-0">
                              <div className="text-sm sm:text-base font-semibold truncate leading-tight text-[#142A4F]">
                                {item.label}
                              </div>
                              <div className="text-[11px] sm:text-xs text-[#6B7D96] font-normal truncate mt-0.5">
                                {item.sublabel}
                              </div>
                            </div>
                          </div>
                          {isSelected && (
                            <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Preferred Date - Chuẩn định dạng ngày/tháng/năm dd/mm/yyyy */}
              <div>
                <label htmlFor="modal-preferred-date" className="block text-xs font-semibold text-zinc-700 mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-orange-600" />
                    <span>Ngày dự kiến (không bắt buộc)</span>
                  </span>
                  <span className="text-[11px] font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md">
                    ngày/tháng/năm
                  </span>
                </label>
                
                <div className="relative flex items-center">
                  <input
                    id="modal-preferred-date"
                    name="preferredDate"
                    type="text"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="dd/mm/yyyy (Ví dụ: 25/10/2026)"
                    value={preferredDate}
                    onChange={handleDateInputChange}
                    onBlur={() => {
                      if (preferredDate && preferredDate.length > 0) {
                        if (preferredDate.length < 10) {
                          setDateError('Hãy nhập lại ngày dự kiến');
                        } else {
                          setDateError(validateDateVN(preferredDate));
                        }
                      }
                    }}
                    className={`w-full rounded-xl border ${
                      dateError ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20' : 'border-gray-200 bg-[#faf9f6]'
                    } pl-3.5 pr-11 py-2.5 text-base sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-orange-500 focus:bg-white focus:outline-none transition-colors`}
                  />

                  {/* Nút mở popup lịch trực tiếp */}
                  <button
                    type="button"
                    onClick={() => {
                      const el = datePickerRef.current;
                      if (el) {
                        try {
                          el.showPicker();
                        } catch {
                          el.click();
                        }
                      }
                    }}
                    aria-label="Mở lịch chọn ngày"
                    className="absolute right-2 p-1.5 rounded-lg text-orange-600 hover:bg-orange-100/60 transition-colors cursor-pointer"
                  >
                    <Calendar className="h-4 w-4" />
                  </button>

                  {/* Native date picker ẩn dùng để mở popup lịch */}
                  <input
                    ref={datePickerRef}
                    type="date"
                    min={getTodayString()}
                    max={`${new Date().getFullYear() + 3}-12-31`}
                    onChange={handleNativePickerChange}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="sr-only pointer-events-none opacity-0 absolute"
                  />
                </div>

                {dateError && (
                  <p className="text-xs text-red-500 font-medium mt-1">
                    {dateError}
                  </p>
                )}
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
