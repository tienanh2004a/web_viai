import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onSelectCourse?: (slug: string) => void;
  onGoContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCourse, onGoContact }) => {
  return (
    <footer className="border-t border-black/8 bg-white text-[#4b5563]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info & Legal */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-viai.png"
                alt="VIAI - Vietnam AI Academy Logo"
                className="h-14 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl text-[#c2410c] tracking-tight leading-none">
                  VIAI
                </span>
                <span className="text-xs text-[#4b5563] font-bold uppercase tracking-wider mt-1">
                  VIETNAM AI ACADEMY
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#4b5563] mb-4">
              Học viện Đào tạo STEM – Lập trình Robotics &amp; Trí Tuệ Nhân Tạo (AI) hàng đầu miền Bắc.
              Khơi nguồn trí tuệ – Dẫn lối tương lai.
            </p>

            <div className="space-y-2 text-sm text-[#4b5563]">
              <p className="font-bold text-[#111827] uppercase">
                CÔNG TY CỔ PHẦN CÔNG NGHỆ VÀ GIÁO DỤC VIAI
              </p>
              <p>Mã số doanh nghiệp: <strong className="text-[#111827]">0402301783</strong> do Sở Kế hoạch &amp; Đầu tư TP Đà Nẵng cấp</p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#c2410c]" />
                <a href="tel:0837312860" className="hover:text-[#111827] font-semibold">0837.312.860</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#c2410c]" />
                <a href="mailto:contact@viai.edu.vn" className="hover:text-[#111827] font-semibold">contact@viai.edu.vn</a>
              </p>
            </div>
          </div>

          {/* Col 2: Campus Locations */}
          <div>
            <h3 className="font-heading font-black text-[#111827] text-sm uppercase tracking-wider mb-4">
              Hệ Thống Cơ Sở
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="space-y-1">
                <p className="font-bold text-[#111827] flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[#c2410c]" />
                  <span>Cơ sở Hải Phòng</span>
                </p>
                <p className="text-[#4b5563] text-xs sm:text-sm">42 Lạch Tray, Quận Ngô Quyền</p>
              </li>

              <li className="space-y-1">
                <p className="font-bold text-[#111827] flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[#c2410c]" />
                  <span>Cơ sở Hưng Yên</span>
                </p>
                <p className="text-[#4b5563] text-xs sm:text-sm">158 Chu Văn An, TP. Hưng Yên</p>
              </li>

              <li className="space-y-1">
                <p className="font-bold text-[#111827] flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[#c2410c]" />
                  <span>Cơ sở Ninh Bình</span>
                </p>
                <p className="text-[#4b5563] text-xs sm:text-sm">86 Đinh Tiên Hoàng, TP. Ninh Bình</p>
              </li>

              <li className="space-y-1 pt-1">
                <button
                  onClick={() => onGoContact ? onGoContact() : (window.location.hash = '#lien-he')}
                  className="font-bold text-[#c2410c] hover:underline transition-colors flex items-center gap-1 text-left cursor-pointer"
                >
                  <span>Xem chi tiết 3 cơ sở &amp; Liên hệ →</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h3 className="font-heading font-black text-[#111827] text-sm uppercase tracking-wider mb-4">
              Khoá Học
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => onSelectCourse?.('robotics-mam-non')}
                  className="hover:text-[#111827] transition-colors text-left font-medium cursor-pointer"
                >
                  Robotics Mầm Non (4 — 6 tuổi)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourse?.('robotics-tieu-hoc')}
                  className="hover:text-[#111827] transition-colors text-left font-medium cursor-pointer"
                >
                  Robotics Khối Tiểu Học (6 — 11 tuổi)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourse?.('robotics-trung-hoc')}
                  className="hover:text-[#111827] transition-colors text-left font-medium cursor-pointer"
                >
                  Robotics &amp; AI Khối Trung Học (11 — 15 tuổi)
                </button>
              </li>
              <li>
                <a href="#khoa-hoc" className="hover:text-[#111827] transition-colors font-medium">
                  Lộ trình Kỹ sư nhí toàn diện
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect & Socials */}
          <div>
            <h3 className="font-heading font-black text-[#111827] text-sm uppercase tracking-wider mb-4">
              Kết Nối &amp; Mạng Xã Hội
            </h3>
            <div className="flex flex-wrap gap-2.5 mb-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1877F2]/10 hover:opacity-85 transition-opacity overflow-hidden"
                aria-label="Facebook"
              >
                <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6 object-contain" />
              </a>

              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 hover:opacity-85 transition-opacity overflow-hidden"
                aria-label="TikTok"
              >
                <img src="/icons/tiktok.svg" alt="TikTok" className="w-6 h-6 object-contain" />
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF0000]/10 hover:opacity-85 transition-opacity overflow-hidden"
                aria-label="YouTube"
              >
                <img src="/icons/youtube.svg" alt="YouTube" className="w-6 h-6 object-contain" />
              </a>

              <a
                href="https://zalo.me/0344533898"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0068FF]/10 hover:opacity-85 transition-opacity overflow-hidden"
                aria-label="Zalo"
              >
                <img src="/icons/zalo.svg" alt="Zalo" className="w-6 h-6 object-contain" />
              </a>
            </div>

            <div className="text-xs sm:text-sm text-[#4b5563] space-y-1">
              <p>Hotline chính: <strong>0344533898</strong></p>
              <p>Hỗ trợ Zalo 24/7</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="mt-12 pt-8 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-[#4b5563]">
          <p>© {new Date().getFullYear()} VIAI Academy. Bản quyền thuộc về Công ty CP Công nghệ và Giáo dục VIAI.</p>
          <p className="mt-2 sm:mt-0 font-medium">Khởi nguồn trí tuệ — Dẫn lối tương lai</p>
        </div>
      </div>
    </footer>
  );
};
