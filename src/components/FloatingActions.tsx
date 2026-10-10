import React from 'react';
import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

interface FloatingActionsProps {
  onOpenTrialModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenTrialModal }) => {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
      {/* Chat Zalo Button */}
      <a
        href="https://zalo.me/0837312860"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo VIAI Academy"
        className="pointer-events-auto group inline-flex h-11 items-center gap-2 rounded-full bg-[#0068FF] pl-3.5 pr-4 text-white shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="h-4 w-4 fill-white text-transparent" />
        <span className="text-xs sm:text-sm font-bold">Chat Zalo</span>
      </a>

      {/* Free Trial Pill CTA */}
      <button
        onClick={onOpenTrialModal}
        className="pointer-events-auto group inline-flex h-11 items-center gap-2 rounded-full bg-[#c2410c] hover:bg-[#9a3412] pl-4 pr-5 text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <Sparkles className="h-4 w-4 text-amber-200" />
        <span className="text-xs sm:text-sm font-bold">Học thử miễn phí</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};
