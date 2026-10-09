import React, { useState } from 'react';
import { ChevronDown, CheckCircle, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Khoá học tại VIAI Academy phù hợp với con từ độ tuổi nào?',
      a: (
        <div className="space-y-3 text-sm text-[#444444] leading-relaxed">
          <p>VIAI Academy có lộ trình đào tạo chuẩn mực cho học sinh từ <strong>khối mầm non đến lớp 9 (4–15 tuổi)</strong>, chia theo 3 bậc học chuyên biệt:</p>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Khối Mầm non (4–6 tuổi):</strong> Khơi nguồn sáng tạo, làm quen robot qua mô hình trực quan, bánh răng, khối ghép thông minh và rèn luyện tư duy logic sớm.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Khối Tiểu học (Lớp 1–5, 6–11 tuổi):</strong> Lắp ráp robot cơ khí, lập trình kéo thả Scratch/Blockly, điều khiển cảm biến và làm chủ sa bàn thi đấu thực tế.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Khối Trung học (Lớp 6–9, 11–15 tuổi):</strong> Lập trình văn bản Python/C++, vi điều khiển, ứng dụng Trí tuệ nhân tạo (AI) và luyện thi đấu trường Robocon toàn quốc.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      q: 'Học phí các khoá học bao nhiêu và có ưu đãi gì không?',
      a: (
        <div className="space-y-3 text-sm text-[#444444] leading-relaxed">
          <p>Học phí được tối ưu theo từng khoá học và hình thức (Offline tại cơ sở hoặc Online toàn quốc). Hiện đang có <strong>Chương trình Ưu đãi Khai giảng VIAI Academy 2026</strong>:</p>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Giảm đến <strong>25%</strong> cho các khoá học offline tại trung tâm.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Giảm đến <strong>45%</strong> cho khoá trực tuyến toàn quốc.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Tặng bộ quà tặng công nghệ trị giá <strong>1.840.000đ</strong> và hỗ trợ trả góp 0% qua ngân hàng.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      q: 'VIAI Academy có cam kết hoàn tiền không?',
      a: (
        <div className="space-y-3 text-sm text-[#444444] leading-relaxed">
          <p>Học viện áp dụng chính sách cam kết chất lượng bằng văn bản minh bạch:</p>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Cam kết buổi đầu 90 phút:</strong> Hoàn tiền 100% học phí đã đóng nếu sau buổi học trải nghiệm con không hứng thú, hoàn trả trong 3 ngày làm việc mà không cần giải thích lý do.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Cam kết tiến bộ:</strong> Đảm bảo 100% học viên tự tay lập trình và bảo vệ đề án mô hình công nghệ của riêng mình sau khóa học.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      q: 'VIAI Academy có bao nhiêu cơ sở đào tạo?',
      a: (
        <div className="space-y-3 text-sm text-[#444444] leading-relaxed">
          <p>VIAI Academy hiện đang vận hành <strong>3 cơ sở hiện đại</strong> tại:</p>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
              <span><strong>Cơ sở Hải Phòng:</strong> Khu đô thị trung tâm TP. Hải Phòng.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
              <span><strong>Cơ sở Hưng Yên:</strong> Trung tâm giáo dục Tỉnh Hưng Yên.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
              <span><strong>Cơ sở Ninh Bình:</strong> Trục đường trung tâm Tỉnh Ninh Bình.</span>
            </li>
          </ul>
          <p>Ngoài ra, học viện còn đào tạo trực tuyến qua nền tảng tương tác VIAI-World cho học sinh trên toàn quốc.</p>
        </div>
      ),
    },
    {
      q: 'Con có được học thử 1-1 miễn phí trước khi đăng ký không?',
      a: (
        <div className="space-y-3 text-sm text-[#444444] leading-relaxed">
          <p><strong>Có, hoàn toàn 0 đồng!</strong> VIAI Academy tặng mỗi học sinh 1 buổi trải nghiệm thực tế 1 kèm 1 cùng giảng viên:</p>
          <ul className="space-y-2 pl-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>45 phút</strong> kiểm tra năng lực tư duy logic và độ nhạy bén công nghệ của con.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>90 phút</strong> học thử 1-1 trực tiếp lập trình robot và chạy thử nghiệm.</span>
            </li>
          </ul>
          <p>Buổi học hoàn toàn miễn phí và không kèm bất kỳ điều kiện ràng buộc nào.</p>
        </div>
      ),
    },
  ];

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#e5e5e5] border-b border-black/5">
      <div className="relative mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-neutral-900 leading-[1.3] sm:leading-[1.35] tracking-tight mb-4 uppercase">
            BỐ MẸ THƯỜNG HỎI GÌ
            <span className="block mt-2 sm:mt-3 text-orange-600">VỀ VIAI ACADEMY?</span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-600 leading-relaxed">
            Tổng hợp câu trả lời chi tiết và minh bạch nhất cho các câu hỏi phổ biến của phụ huynh.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-[24px] border border-black/5 bg-[#ffffff] shadow-none transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-bold text-[#000000] text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[#000000] text-white'
                        : 'bg-[#f3f3f3] text-[#000000]'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-neutral-100 animate-fadeIn text-[#444444] text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Fast Zalo Contact Box */}
        <div className="rounded-[24px] border border-black/5 bg-[#ffffff] p-8 sm:p-10 text-center shadow-none">
          <p className="text-base text-[#000000] font-semibold mb-5">
            Ba mẹ vẫn còn câu hỏi khác cần được tư vấn chi tiết cho con?
          </p>
          <a
            href="https://zalo.me/0837312860"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[8px] bg-[#000000] hover:bg-[#222222] px-7 py-3.5 text-sm font-semibold text-white transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Nhắn Zalo Thầy Cô (0837.312.860) — Phản hồi trong 3 phút</span>
          </a>
        </div>
      </div>
    </section>
  );
};
