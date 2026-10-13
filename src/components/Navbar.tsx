import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

interface NavbarProps {
  onOpenTrialModal: () => void;
  onSelectCourse?: (slug: string) => void;
  onGoHome?: () => void;
  onGoContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenTrialModal,
  onGoHome,
  onGoContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    onGoHome?.();
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = `#${sectionId}`;
      }
    }, 60);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f5f5f7]/95 backdrop-blur-md py-2.5 sm:py-3.5 border-b border-black/8 shadow-2xs'
          : 'bg-[#f5f5f7] py-3 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-2">
        {/* Brand Logo - Trên điện thoại chỉ hiện icon logo, không lặp lại chữ VIAI; Trên máy tính (sm+) hiện đầy đủ tên */}
        <div 
          onClick={() => { onGoHome?.(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
        >
          <img
            src="/logo-viai.png"
            alt="VIAI Logo"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-[#c2410c] leading-none">
              VIAI
            </span>
            <span className="text-xs uppercase tracking-wider text-[#4b5563] font-bold mt-1">
              Vietnam AI Academy
            </span>
          </div>
        </div>

        {/* 1. Thanh điều hướng trên Điện thoại (< lg): Chỉ gồm Trang chủ | Khoá học | Liên hệ, thiết kế dạng viên nhộng hài hoà chuẩn như máy tính */}
        <nav className="flex lg:hidden items-center gap-5 sm:gap-7 bg-white rounded-full px-5 sm:px-7 py-2.5 sm:py-3 shadow-xs border border-black/8">
          {/* Trang chủ */}
          <button
            onClick={() => { onGoHome?.(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-xs sm:text-sm font-bold text-[#111827] hover:text-[#c2410c] transition-colors cursor-pointer whitespace-nowrap"
          >
            Trang chủ
          </button>

          {/* Khoá học */}
          <button
            onClick={() => handleScrollToSection('khoa-hoc')}
            className="text-xs sm:text-sm font-medium text-[#444444] hover:text-[#111827] transition-colors cursor-pointer whitespace-nowrap"
          >
            Khoá học
          </button>

          {/* Liên hệ */}
          <button
            onClick={() => {
              if (onGoContact) {
                onGoContact();
              } else {
                handleScrollToSection('lien-he');
              }
            }}
            className="text-xs sm:text-sm font-medium text-[#444444] hover:text-[#111827] transition-colors cursor-pointer whitespace-nowrap"
          >
            Liên hệ
          </button>
        </nav>

        {/* 2. Thanh điều hướng đầy đủ trên Máy tính (lg+): Trọn vẹn 6 mục chuẩn Ảnh 2 */}
        <nav className="hidden lg:flex items-center gap-8 bg-white rounded-full px-8 py-3 shadow-xs border border-black/8">
          {/* Trang chủ */}
          <button
            onClick={() => { onGoHome?.(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-sm font-bold text-[#111827] hover:text-[#c2410c] transition-colors cursor-pointer whitespace-nowrap"
          >
            Trang chủ
          </button>

          {/* Về chúng tôi */}
          <button
            onClick={() => handleScrollToSection('ve-chung-toi')}
            className="text-sm font-medium text-[#444444] hover:text-[#111827] transition-colors cursor-pointer whitespace-nowrap"
          >
            Về chúng tôi
          </button>

          {/* Khoá học */}
          <button
            onClick={() => handleScrollToSection('khoa-hoc')}
            className="text-sm font-medium text-[#444444] hover:text-[#111827] transition-colors cursor-pointer whitespace-nowrap"
          >
            Khoá học
          </button>


          {/* Hỏi đáp */}
          <button
            onClick={() => handleScrollToSection('faq')}
            className="text-sm font-medium text-[#444444] hover:text-[#111827] transition-colors cursor-pointer whitespace-nowrap"
          >
            Hỏi đáp
          </button>

          {/* Liên hệ */}
          <button
            onClick={() => {
              if (onGoContact) {
                onGoContact();
              } else {
                handleScrollToSection('lien-he');
              }
            }}
            className="text-sm font-medium text-[#444444] hover:text-[#111827] transition-colors cursor-pointer whitespace-nowrap"
          >
            Liên hệ
          </button>
        </nav>

        {/* Right: Hotline Button & Orange Free Trial Button (Chỉ hiện trên máy tính sm+) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:0344533898"
            className="inline-flex items-center gap-2 bg-white text-[#111827] border border-black/10 hover:border-black/25 hover:bg-[#fafaf9] px-4 py-2.5 rounded-xl font-bold text-sm active:scale-95 transition-all shadow-2xs"
          >
            <Phone className="h-4 w-4 text-[#c2410c]" />
            <span>0344533898</span>
          </a>

          <button
            onClick={onOpenTrialModal}
            className="bg-[#c2410c] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#9a3412] active:scale-95 transition-all shadow-xs cursor-pointer"
          >
            Học thử miễn phí
          </button>
        </div>
      </div>
    </header>
  );
};
