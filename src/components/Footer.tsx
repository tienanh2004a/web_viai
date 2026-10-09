import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onSelectCourse?: (slug: string) => void;
  onGoContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCourse, onGoContact }) => {
  return (
    <footer className="border-t border-black/5 bg-[#ffffff] text-[#444444]">
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
                <span className="font-heading font-black text-2xl text-orange-600 tracking-tight leading-none">
                  VIAI
                </span>
                <span className="text-[11px] text-[#444444] font-mono font-bold uppercase tracking-wider mt-1">
                  VIETNAM AI ACADEMY
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#555555] mb-4">
              Học viện Đào tạo STEM – Lập trình Robotics &amp; Trí Tuệ Nhân Tạo (AI) hàng đầu.
              Khơi nguồn trí tuệ – Dẫn lối tương lai.
            </p>

            <div className="space-y-2 text-xs text-[#444444]">
              <p className="font-bold text-[#000000] uppercase">
                CÔNG TY CỔ PHẦN CÔNG NGHỆ VÀ GIÁO DỤC VIAI
              </p>
              <p>Mã số doanh nghiệp: <strong className="text-[#000000]">0402301783</strong> do Sở Kế hoạch &amp; Đầu tư TP Đà Nẵng cấp</p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-orange-600" />
                <a href="tel:0837312860" className="hover:text-black font-semibold">0837.312.860</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-orange-600" />
                <a href="mailto:contact@viai.edu.vn" className="hover:text-black font-semibold">contact@viai.edu.vn</a>
              </p>
            </div>
          </div>

          {/* Col 2: Campus Locations */}
          <div>
            <h4 className="font-heading font-black text-[#000000] text-sm uppercase tracking-wider mb-4">
              Hệ Thống Cơ Sở
            </h4>
            <ul className="space-y-4 text-xs">
              <li className="space-y-1">
                <p className="font-bold text-[#000000] flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-orange-600" />
                  <span>Cơ sở Hải Phòng</span>
                </p>
                <p className="text-[#666666]">Khu đô thị Trung tâm, TP. Hải Phòng</p>
              </li>

              <li className="space-y-1">
                <p className="font-bold text-[#000000] flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-orange-600" />
                  <span>Cơ sở Hưng Yên</span>
                </p>
                <p className="text-[#666666]">Trục đường Trung tâm, Tỉnh Hưng Yên</p>
              </li>

              <li className="space-y-1">
                <p className="font-bold text-[#000000] flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-orange-600" />
                  <span>Cơ sở Ninh Bình</span>
                </p>
                <p className="text-[#666666]">Trung tâm giáo dục, Tỉnh Ninh Bình</p>
              </li>

              <li className="space-y-1 pt-1">
                <button
                  onClick={() => onGoContact ? onGoContact() : (window.location.hash = '#lien-he')}
                  className="font-bold text-orange-600 hover:text-orange-700 transition-colors flex items-center gap-1 text-left"
                >
                  <span>Xem chi tiết 3 cơ sở &amp; Liên hệ →</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="font-heading font-black text-[#000000] text-sm uppercase tracking-wider mb-4">
              Khoá Học
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onSelectCourse?.('robotics-mam-non')}
                  className="hover:text-black transition-colors text-left font-medium"
                >
                  Robotics Mầm Non (4 — 6 tuổi)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourse?.('robotics-tieu-hoc')}
                  className="hover:text-black transition-colors text-left font-medium"
                >
                  Robotics Tiểu Học (Lớp 1 — 5)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourse?.('robotics-trung-hoc')}
                  className="hover:text-black transition-colors text-left font-medium"
                >
                  Robotics &amp; AI Trung Học (Lớp 6 — 9)
                </button>
              </li>
              <li>
                <a href="#khoa-hoc" className="hover:text-black transition-colors font-medium">
                  Lộ trình Kỹ sư nhí toàn diện
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect & Socials */}
          <div>
            <h4 className="font-heading font-black text-[#000000] text-sm uppercase tracking-wider mb-4">
              Kết Nối &amp; Mạng Xã Hội
            </h4>
            <div className="flex flex-wrap gap-2.5 mb-6">
              <a
                href="https://www.facebook.com/viai.edu.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-[8px] hover:opacity-85 transition-opacity overflow-hidden"
                aria-label="Facebook"
              >
                <img src="/icons/facebook.svg" alt="Facebook" className="w-9 h-9 object-contain" />
              </a>

              <a
                href="https://www.tiktok.com/@viai.academy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-[8px] hover:opacity-85 transition-opacity overflow-hidden"
                aria-label="TikTok"
              >
                <img src="/icons/tiktok.svg" alt="TikTok" className="w-9 h-9 object-contain" />
              </a>

              <a
                href="https://www.youtube.com/@viai.academy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-[8px] hover:opacity-85 transition-opacity overflow-hidden"
                aria-label="YouTube"
              >
                <img src="/icons/youtube.svg" alt="YouTube" className="w-9 h-9 object-contain" />
              </a>

              <a
                href="https://zalo.me/0837312860"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-[8px] hover:opacity-85 transition-opacity overflow-hidden"
                aria-label="Zalo"
              >
                <img src="/icons/zalo.svg" alt="Zalo" className="w-9 h-9 object-contain" />
              </a>
            </div>

            <p className="text-xs text-[#555555] leading-relaxed">
              Tư vấn trực tiếp 24/7 qua Hotline: <strong className="text-[#000000]">0837.312.860</strong>
            </p>
          </div>
        </div>

        {/* Copyright & Policy bar */}
        <div className="mt-12 pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <p>© 2026 VIAI — VIETNAM AI ACADEMY. Bảo lưu mọi quyền.</p>
          <div className="flex flex-wrap gap-4 text-[#666666]">
            <a href="#" className="hover:text-black">Chính sách bảo mật</a>
            <a href="#" className="hover:text-black">Điều khoản dịch vụ</a>
            <a href="#" className="hover:text-black">Chính sách hoàn tiền</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


