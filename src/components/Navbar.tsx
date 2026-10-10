import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f5f5f7]/95 backdrop-blur-md py-3.5 border-b border-black/8 shadow-2xs'
          : 'bg-[#f5f5f7] py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => { onGoHome?.(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <img
            src="/logo-viai.png"
            alt="VIAI Logo"
            className="h-12 sm:h-[50px] w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-[#c2410c] leading-none">
              VIAI
            </span>
            <span className="text-xs uppercase tracking-wider text-[#4b5563] font-bold hidden sm:block mt-1">
              Vietnam AI Academy
            </span>
          </div>
        </div>

        {/* Center: Signature Nav Pill */}
        <nav className="hidden lg:flex items-center gap-8 bg-white rounded-full px-8 py-3 shadow-xs border border-black/8">
          {/* Trang chủ */}
          <button
            onClick={() => { onGoHome?.(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-sm font-bold text-[#111827] hover:text-[#c2410c] transition-colors cursor-pointer"
          >
            Trang chủ
          </button>

          {/* Về chúng tôi */}
          <a
            href="#ve-chung-toi"
            onClick={() => onGoHome?.()}
            className="text-sm font-medium text-[#444444] hover:text-[#000000] transition-colors"
          >
            Về chúng tôi
          </a>

          {/* Khoá học */}
          <button
            onClick={() => {
              onGoHome?.();
              setTimeout(() => {
                const el = document.getElementById('khoa-hoc');
                el?.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="text-sm font-medium text-[#444444] hover:text-[#000000] transition-colors cursor-pointer"
          >
            Khoá học
          </button>

          {/* Đánh giá */}
          <a
            href="#danh-gia"
            onClick={() => onGoHome?.()}
            className="text-sm font-medium text-[#444444] hover:text-[#000000] transition-colors"
          >
            Đánh giá
          </a>

          {/* Hỏi đáp */}
          <a
            href="#faq"
            onClick={() => onGoHome?.()}
            className="text-sm font-medium text-[#444444] hover:text-[#000000] transition-colors"
          >
            Hỏi đáp
          </a>

          {/* Liên hệ */}
          <button
            onClick={() => {
              if (onGoContact) {
                onGoContact();
              } else {
                window.location.hash = '#lien-he';
              }
            }}
            className="text-sm font-medium text-[#444444] hover:text-[#000000] transition-colors cursor-pointer"
          >
            Liên hệ
          </button>
        </nav>

        {/* Right: Hotline Button & Orange Free Trial Button */}
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

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden p-2 rounded-xl text-[#000000] bg-white border border-neutral-200"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#ffffff] border-b border-neutral-200 p-6 shadow-2xl transition-all max-h-[85vh] overflow-y-auto z-40">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                onGoHome?.();
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left px-4 py-2 text-sm font-semibold text-[#000000] rounded-xl hover:bg-neutral-100"
            >
              Trang chủ
            </button>

            <a
              href="#ve-chung-toi"
              onClick={() => {
                onGoHome?.();
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2 text-sm font-semibold text-[#444444] hover:text-[#000000] rounded-xl hover:bg-neutral-100 transition-colors"
            >
              Về chúng tôi
            </a>

            {/* Khoá học in mobile */}
            <button
              onClick={() => {
                onGoHome?.();
                setMobileMenuOpen(false);
                setTimeout(() => {
                  const el = document.getElementById('khoa-hoc');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="text-left px-4 py-2 text-sm font-semibold text-[#444444] hover:text-[#000000] rounded-xl hover:bg-neutral-100 transition-colors"
            >
              Khoá học
            </button>

            <a
              href="#danh-gia"
              onClick={() => {
                onGoHome?.();
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2 text-sm font-semibold text-[#444444] hover:text-[#000000] rounded-xl hover:bg-neutral-100 transition-colors"
            >
              Đánh giá
            </a>

            <a
              href="#faq"
              onClick={() => {
                onGoHome?.();
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2 text-sm font-semibold text-[#444444] hover:text-[#000000] rounded-xl hover:bg-neutral-100 transition-colors"
            >
              Hỏi đáp
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onGoContact) {
                  onGoContact();
                } else {
                  window.location.hash = '#lien-he';
                }
              }}
              className="text-left px-4 py-2 text-sm font-semibold text-[#444444] hover:text-[#000000] rounded-xl hover:bg-neutral-100 transition-colors"
            >
              Liên hệ
            </button>

            <div className="pt-4 border-t border-neutral-200 flex flex-col gap-3">
              <a
                href="tel:0344533898"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-[8px] bg-[#ffffff] text-[#111111] border border-black/15 font-bold text-sm hover:bg-[#fafafa] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#c2410c]" />
                <span>Hotline: 0344533898</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full flex items-center justify-center py-3 rounded-[8px] bg-[#c2410c] text-white font-semibold text-sm hover:bg-[#9a3412] transition-colors shadow-sm"
              >
                Học thử miễn phí
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
