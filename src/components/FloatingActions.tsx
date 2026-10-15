import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Sparkles, ArrowRight, MapPin, X, Navigation, ExternalLink, ChevronsLeft } from 'lucide-react';

interface FloatingActionsProps {
  onOpenTrialModal: () => void;
  hide?: boolean;
}

const CAMPUSES = [
  {
    name: 'Cơ sở Hải Phòng',
    address: 'Cung Văn hoá Thiếu nhi Hải Phòng',
    mapUrl: 'https://www.google.com/maps/place/Cung+V%C4%83n+ho%C3%A1+Thi%E1%BA%BFu+nhi+H%E1%BA%A3i+Ph%C3%B2ng/@20.8456054,106.689682,1055m/data=!3m2!1e3!4b1!4m6!3m5!1s0x314a7a9ec22092c5:0xb3e682efb0663343!8m2!3d20.8456054!4d106.6922623!16s%2Fg%2F1tjhv41h?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    name: 'Cơ sở Hưng Yên',
    address: '25 Đ. Đinh Tiên Hoàng, Trần Lãm, Hưng Yên, Việt Nam',
    mapUrl: 'https://www.google.com/maps/place/25+%C4%90.+%C4%90inh+Ti%C3%AAn+Ho%C3%A0ng,+Tr%E1%BA%A7n+L%C3%A3m,+H%C6%B0ng+Y%C3%AAn,+Vi%E1%BB%87t+Nam/@20.4412222,106.3435179,114m/data=!3m1!1e3!4m5!3m4!1s0x3135e4d25feb5fa1:0x6e8fca36bd34eeff!8m2!3d20.4411674!4d106.3436374?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D',
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
      <div className="relative flex flex-col items-end gap-2 sm:gap-2.5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2">
        
        {/* Popup danh sách 2 cơ sở Google Maps */}
        {showCampuses && (
          <div
            ref={campusMenuRef}
            className="mb-1 w-72 sm:w-80 rounded-2xl bg-white p-3.5 shadow-2xl border border-emerald-200 text-left animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
              <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                <Navigation className="h-3.5 w-3.5 text-emerald-600" />
                <span>2 Cơ sở trên Google Maps</span>
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

        {/* Nút 1: Cơ sở MÀU XANH LÁ (Khi ấn X sẽ thu lại thành icon MapPin như ảnh 2) */}
        <div className="relative inline-flex items-center">
          <button
            onClick={() => setShowCampuses(!showCampuses)}
            aria-label="Xem 2 cơ sở"
            title={isCollapsed ? 'Cơ sở VIAI (Google Maps)' : 'Xem 2 cơ sở'}
            className={`group inline-flex h-10 sm:h-11 items-center rounded-full text-white shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${
              showCampuses
                ? 'bg-emerald-700 ring-2 ring-emerald-300'
                : 'bg-emerald-600 hover:bg-emerald-700'
            } ${
              isCollapsed
                ? 'w-10 sm:w-11 justify-center p-0'
                : 'gap-2 px-3.5 sm:px-4'
            }`}
          >
            <MapPin className="h-4 w-4 text-white shrink-0" />
            {!isCollapsed && (
              <span className="text-xs sm:text-sm font-bold pr-0.5 whitespace-nowrap animate-in fade-in duration-200">
                Cơ sở
              </span>
            )}
          </button>

          {/* Dấu X ở góc phải: Khi ấn X thì thu lại thành icon, khi đang thu lại thì ấn để mở rộng lại */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsCollapsed(!isCollapsed);
              if (showCampuses) setShowCampuses(false);
            }}
            title={isCollapsed ? 'Mở rộng hiển thị đầy đủ' : 'Thu gọn thành icon'}
            aria-label={isCollapsed ? 'Mở rộng hiển thị đầy đủ' : 'Thu gọn thành icon'}
            className="absolute -top-1.5 -right-1.5 h-5 w-5 sm:h-5.5 sm:w-5.5 rounded-full bg-black/85 hover:bg-black text-white flex items-center justify-center shadow-md border border-white cursor-pointer hover:scale-110 active:scale-90 transition-all z-20"
          >
            {isCollapsed ? (
              <ChevronsLeft className="h-3 w-3 stroke-[2.5]" />
            ) : (
              <X className="h-3 w-3 stroke-[2.5]" />
            )}
          </button>
        </div>

        {/* Nút 2: Chat Zalo MÀU XANH DƯƠNG (Khi ấn X sẽ thu lại thành icon Chat Zalo như ảnh 3) */}
        <a
          href="https://zalo.me/0963909192"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Zalo VIAI Academy"
          title="Chat Zalo VIAI"
          className={`group inline-flex h-10 sm:h-11 items-center rounded-full bg-[#0068FF] hover:bg-[#0052cc] text-white shadow-md hover:scale-105 active:scale-95 transition-all duration-300 ${
            isCollapsed
              ? 'w-10 sm:w-11 justify-center p-0'
              : 'gap-2 px-3.5 sm:px-4'
          }`}
        >
          <MessageCircle className="h-4 w-4 fill-white text-transparent shrink-0" />
          {!isCollapsed && (
            <span className="text-xs sm:text-sm font-bold whitespace-nowrap animate-in fade-in duration-200">
              Chat Zalo
            </span>
          )}
        </a>

        {/* Nút 3: Học thử miễn phí MÀU CAM (Khi ấn X sẽ thu lại thành icon Sparkles) */}
        <button
          onClick={onOpenTrialModal}
          aria-label="Đặt lịch học thử 1-1 miễn phí"
          title="Đăng ký học thử 1-1 miễn phí"
          className={`group inline-flex h-10 sm:h-11 items-center rounded-full bg-[#c2410c] hover:bg-[#9a3412] text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${
            isCollapsed
              ? 'w-10 sm:w-11 justify-center p-0'
              : 'gap-2 px-3.5 sm:pl-4 sm:pr-5'
          }`}
        >
          <Sparkles className="h-4 w-4 text-amber-200 shrink-0" />
          {!isCollapsed && (
            <>
              <span className="text-xs sm:text-sm font-bold whitespace-nowrap animate-in fade-in duration-200">
                Học thử miễn phí
              </span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 shrink-0" />
            </>
          )}
        </button>

      </div>
    </aside>
  );
};
