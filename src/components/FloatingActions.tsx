import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Sparkles, ArrowRight, MapPin, X, Navigation, ExternalLink } from 'lucide-react';

interface FloatingActionsProps {
  onOpenTrialModal: () => void;
  hide?: boolean;
}

const CAMPUSES = [
  {
    name: 'Cơ sở Hải Phòng',
    address: '42 Lạch Tray, Quận Ngô Quyền, Hải Phòng',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=42+L%E1%BA%A1ch+Tray,+Ng%C3%B4+Quy%E1%BB%81n,+H%E1%BA%A3i+Ph%C3%B2ng',
  },
  {
    name: 'Cơ sở Hưng Yên',
    address: '158 Chu Văn An, TP. Hưng Yên',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=158+Chu+V%C4%83n+An,+TP+H%C6%B0ng+Y%C3%AAn',
  },
  {
    name: 'Cơ sở Ninh Bình',
    address: '86 Đinh Tiên Hoàng, TP. Ninh Bình',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=86+%C4%90inh+Ti%C3%AAn+Ho%C3%A0ng,+TP+Ninh+B%C3%ACnh',
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
    <aside aria-label="Tiện ích liên hệ nổi" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 select-none">
      {/* TRƯỜNG HỢP 1: ĐÃ THU GỌN VỀ GÓC BÊN PHẢI (Ấn vào đây sẽ trở về bình thường) */}
      {isCollapsed ? (
        <button
          onClick={() => setIsCollapsed(false)}
          aria-label="Mở lại tiện ích hỗ trợ"
          title="Nhấp vào để mở lại tiện ích"
          className="group relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-[#c2410c] to-amber-600 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-white animate-bounce-subtle"
        >
          {/* Pulse notification badge */}
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-white" />
          </span>

          <Sparkles className="h-6 w-6 text-amber-200" />
        </button>
      ) : (
        /* TRƯỜNG HỢP 2: TRẠNG THÁI BÌNH THƯỜNG (Dài ngoằng, có dấu X ở góc phải của nút Cơ sở) */
        <div className="relative flex flex-col items-end gap-2.5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2">
          
          {/* Popup danh sách 3 cơ sở Google Maps (mở khi bấm vào nút Cơ sở) */}
          {showCampuses && (
            <div
              ref={campusMenuRef}
              className="mb-1 w-72 sm:w-80 rounded-2xl bg-white p-3.5 shadow-2xl border border-emerald-200 text-left animate-in fade-in zoom-in-95 duration-200"
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                  <Navigation className="h-3.5 w-3.5 text-emerald-600" />
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
                    className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-emerald-50/80 transition-colors border border-transparent hover:border-emerald-200 group"
                  >
                    <div className="h-7 w-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                          {c.name}
                        </span>
                        <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-emerald-700" />
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

          {/* Nút 1: "Cơ sở" MÀU XANH, có DẤU X Ở GÓC BÊN PHẢI ĐỂ THU GỌN */}
          <div className="relative inline-flex items-center">
            {/* Nút Cơ sở màu xanh */}
            <button
              onClick={() => setShowCampuses(!showCampuses)}
              aria-label="Xem 3 cơ sở"
              className={`group inline-flex h-10 sm:h-11 items-center gap-2 rounded-full px-3.5 sm:px-4 text-white shadow-md hover:scale-102 active:scale-95 transition-all duration-200 cursor-pointer ${
                showCampuses ? 'bg-emerald-700 ring-2 ring-emerald-300' : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              <MapPin className="h-4 w-4 text-white shrink-0 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold pr-1">Cơ sở</span>
            </button>

            {/* Dấu X ở góc bên phải của nút Cơ sở (bấm vào là thu gọn lại góc phải màn hình) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsCollapsed(true);
                setShowCampuses(false);
              }}
              title="Thu gọn"
              aria-label="Thu gọn thanh hỗ trợ"
              className="absolute -top-1.5 -right-1.5 h-5 w-5 sm:h-5.5 sm:w-5.5 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center shadow-md border border-white cursor-pointer hover:scale-110 active:scale-90 transition-all z-10"
            >
              <X className="h-3 w-3 stroke-[2.5]" />
            </button>
          </div>

          {/* Nút 2: Chat Zalo MÀU XANH DƯƠNG */}
          <a
            href="https://zalo.me/0963909192"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat Zalo VIAI Academy"
            className="group inline-flex h-10 sm:h-11 items-center gap-2 rounded-full bg-[#0068FF] hover:bg-[#0052cc] px-3.5 sm:px-4 text-white shadow-md hover:scale-102 active:scale-95 transition-all duration-200"
          >
            <MessageCircle className="h-4 w-4 fill-white text-transparent shrink-0" />
            <span className="text-xs sm:text-sm font-bold">Chat Zalo</span>
          </a>

          {/* Nút 3: Học thử miễn phí MÀU CAM */}
          <button
            onClick={onOpenTrialModal}
            aria-label="Đặt lịch học thử 1-1 miễn phí"
            className="group inline-flex h-10 sm:h-11 items-center gap-2 rounded-full bg-[#c2410c] hover:bg-[#9a3412] px-3.5 sm:pl-4 sm:pr-5 text-white shadow-lg hover:scale-102 active:scale-95 transition-all duration-200 cursor-pointer"
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
