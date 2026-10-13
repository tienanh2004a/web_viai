import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Sparkles, ArrowRight, Phone, MapPin, X, ChevronRight, Navigation, ExternalLink } from 'lucide-react';

interface FloatingActionsProps {
  onOpenTrialModal: () => void;
  hide?: boolean;
}

const CAMPUSES = [
  {
    name: 'Cơ sở Hải Phòng',
    address: '42 Lạch Tray, Quận Ngô Quyền, Hải Phòng',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=42+L%E1%BA%A1ch+Tray,+Ng%C3%B4+Quy%E1%BB%81n,+H%E1%BA%A3i+Ph%C3%B2ng',
    color: '#c2410c',
  },
  {
    name: 'Cơ sở Hưng Yên',
    address: '158 Chu Văn An, TP. Hưng Yên',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=158+Chu+V%C4%83n+An,+TP+H%C6%B0ng+Y%C3%AAn',
    color: '#0284c7',
  },
  {
    name: 'Cơ sở Ninh Bình',
    address: '86 Đinh Tiên Hoàng, TP. Ninh Bình',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=86+%C4%90inh+Ti%C3%AAn+Ho%C3%A0ng,+TP+Ninh+B%C3%ACnh',
    color: '#059669',
  },
];

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenTrialModal, hide = false }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showCampuses, setShowCampuses] = useState(false);
  const campusMenuRef = useRef<HTMLDivElement>(null);

  // Đóng bảng cơ sở khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (campusMenuRef.current && !campusMenuRef.current.contains(e.target as Node)) {
        setShowCampuses(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  if (hide) return null;

  return (
    <aside aria-label="Hỗ trợ & Đăng ký nổi" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 select-none">
      {/* 1. Trạng thái THU GỌN (Collapsed): Widget tròn nổi có icon và nút mở rộng */}
      {isCollapsed ? (
        <button
          onClick={() => setIsCollapsed(false)}
          aria-label="Mở tiện ích liên hệ & học thử"
          className="group relative flex items-center gap-2 rounded-full bg-gradient-to-r from-[#c2410c] to-amber-600 p-3 sm:px-4 sm:py-3 text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-white/60 animate-bounce-subtle"
        >
          {/* Pulse ring */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-white" />
          </span>

          <Sparkles className="h-5 w-5 text-amber-200 shrink-0" />
          <span className="hidden sm:inline text-xs font-extrabold tracking-wide">
            Hỗ trợ &amp; Học thử
          </span>
          <ChevronRight className="h-4 w-4 text-white/80 transition-transform group-hover:translate-x-0.5" />
        </button>
      ) : (
        /* 2. Trạng thái MỞ RỘNG (Expanded): Đầy đủ các nút + Nút X thu gọn */
        <div className="relative flex flex-col items-end gap-2.5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2">
          {/* Nút X thu gọn (nhỏ nhắn ở trên cùng góc phải) */}
          <div className="flex items-center justify-end w-full mb-0.5">
            <button
              onClick={() => {
                setIsCollapsed(true);
                setShowCampuses(false);
              }}
              title="Thu gọn thanh hỗ trợ"
              aria-label="Thu gọn thanh hỗ trợ"
              className="flex items-center gap-1 bg-black/70 hover:bg-black/90 text-white rounded-full px-2.5 py-1 text-[11px] font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-xs border border-white/20"
            >
              <span>Thu gọn</span>
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Popup danh sách 3 cơ sở Google Maps (khi bấm vào nút MapPin) */}
          {showCampuses && (
            <div
              ref={campusMenuRef}
              className="mb-1 w-72 sm:w-80 rounded-2xl bg-white p-3.5 shadow-2xl border border-orange-200 text-left animate-in fade-in zoom-in-95 duration-200"
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                  <Navigation className="h-3.5 w-3.5 text-[#c2410c]" />
                  <span>3 Cơ sở trên Google Maps</span>
                </span>
                <button
                  onClick={() => setShowCampuses(false)}
                  className="text-gray-400 hover:text-gray-700 p-0.5 rounded cursor-pointer"
                  aria-label="Đóng danh sách cơ sở"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="space-y-2">
                {CAMPUSES.map((c, idx) => (
                  <a
                    key={idx}
                    href={c.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-orange-50/80 transition-colors border border-transparent hover:border-orange-200 group"
                  >
                    <div className="h-7 w-7 rounded-lg bg-orange-100 text-[#c2410c] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-900 group-hover:text-[#c2410c] transition-colors">
                          {c.name}
                        </span>
                        <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-[#c2410c]" />
                      </div>
                      <p className="text-[11px] text-gray-500 leading-tight truncate">
                        {c.address}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Nút 1: Biểu tượng 3 Địa chỉ Cơ sở (Mở Google Maps) */}
          <button
            onClick={() => setShowCampuses(!showCampuses)}
            aria-label="Xem bản đồ 3 cơ sở"
            className={`group inline-flex h-10 sm:h-11 items-center gap-2 rounded-full px-3.5 sm:px-4 text-white shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer ${
              showCampuses ? 'bg-amber-700 ring-2 ring-amber-300' : 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700'
            }`}
          >
            <MapPin className="h-4 w-4 text-white shrink-0 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold">3 Cơ sở (Bản đồ)</span>
          </button>

          {/* Nút 2: Hotline 0963909192 */}
          <a
            href="tel:0963909192"
            aria-label="Gọi hotline 0963909192"
            className="group inline-flex h-10 sm:h-11 items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 px-3.5 sm:px-4 text-white shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Phone className="h-4 w-4 fill-white text-transparent shrink-0" />
            <span className="text-xs sm:text-sm font-bold">0963.909.192</span>
          </a>

          {/* Nút 3: Chat Zalo */}
          <a
            href="https://zalo.me/0963909192"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat Zalo VIAI Academy"
            className="group inline-flex h-10 sm:h-11 items-center gap-2 rounded-full bg-[#0068FF] hover:bg-[#0052cc] px-3.5 sm:px-4 text-white shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <MessageCircle className="h-4 w-4 fill-white text-transparent shrink-0" />
            <span className="text-xs sm:text-sm font-bold">Chat Zalo</span>
          </a>

          {/* Nút 4: Học thử miễn phí */}
          <button
            onClick={onOpenTrialModal}
            aria-label="Đặt lịch học thử 1-1 miễn phí"
            className="group inline-flex h-10 sm:h-11 items-center gap-2 rounded-full bg-[#c2410c] hover:bg-[#9a3412] px-3.5 sm:pl-4 sm:pr-5 text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <Sparkles className="h-4 w-4 text-amber-200 shrink-0" />
            <span className="text-xs sm:text-sm font-bold">Học thử miễn phí</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      )}
    </aside>
  );
};
