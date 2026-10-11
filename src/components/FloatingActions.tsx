import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

interface FloatingActionsProps {
  onOpenTrialModal: () => void;
  hide?: boolean;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenTrialModal, hide = false }) => {
  const [isInContactSection, setIsInContactSection] = useState(false);

  useEffect(() => {
    const contactEl = document.getElementById('lien-he');
    if (!contactEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Khi người dùng cuộn đến khu vực Form liên hệ / Chân trang, ẩn nút nổi để không đè lên nút Đăng ký và checkbox
          setIsInContactSection(entry.isIntersecting);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(contactEl);
    return () => observer.disconnect();
  }, []);

  const shouldHide = hide || isInContactSection;

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex flex-col items-end gap-2 sm:gap-2.5 pointer-events-none transition-all duration-300 ${
        shouldHide ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      {/* Chat Zalo Button */}
      <a
        href="https://zalo.me/0837312860"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo VIAI Academy"
        className="pointer-events-auto group inline-flex h-10 sm:h-11 items-center gap-1.5 sm:gap-2 rounded-full bg-[#0068FF] px-3.5 sm:pl-3.5 sm:pr-4 text-white shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="h-4 w-4 fill-white text-transparent" />
        <span className="text-xs sm:text-sm font-bold">Chat Zalo</span>
      </a>

      {/* Free Trial Pill CTA */}
      <button
        onClick={onOpenTrialModal}
        className="pointer-events-auto group inline-flex h-10 sm:h-11 items-center gap-1.5 sm:gap-2 rounded-full bg-[#c2410c] hover:bg-[#9a3412] px-3.5 sm:pl-4 sm:pr-5 text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <Sparkles className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-amber-200" />
        <span className="text-xs sm:text-sm font-bold">Học thử miễn phí</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};
