export interface CourseModule {
  number: string;
  title: string;
  duration: string;
  description: string;
  outcomes: string[];
}

export interface CourseDetail {
  slug: string;
  name: string;
  headline: string;
  category: string;
  age: string;
  duration: string;
  classSize: string;
  format: string;
  rating: number;
  totalStudents: number;
  coverImage: string;
  badge: string;
  glowColor: 'orange' | 'purple' | 'cyan';
  overview: string;
  hardwareKit: {
    name: string;
    description: string;
    items: string[];
  };
  skillsGained: {
    title: string;
    desc: string;
    percent: number;
  }[];
  modules: CourseModule[];
  schedule: {
    shift: string;
    days: string;
    time: string;
    branch: string;
  }[];
  tuition: {
    originalPrice: string;
    discountedPrice: string;
    offerNote: string;
    giftValue: string;
  };
  commitments: string[];
}

export const coursesData: Record<string, CourseDetail> = {
  'lap-trinh-robot': {
    slug: 'lap-trinh-robot',
    name: 'Lập Trình Robot Thực Chiến',
    headline: 'Lộ trình phát triển tư duy công nghệ & chế tạo robot toàn diện cho học sinh từ Khối mầm non đến Lớp 9',
    category: 'Đào tạo trực tiếp tại cơ sở',
    age: 'Lớp 1 — 9 (6 đến 15 tuổi)',
    duration: '48 buổi (12 tháng) / 4 học phần',
    classSize: 'Tối đa < 10 học viên (kèm 1-1)',
    format: 'Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)',
    rating: 4.9,
    totalStudents: 680,
    coverImage: '/images/laptrinhrobot.jpg',
    badge: 'KHOÁ HỌC PHỔ BIẾN NHẤT',
    glowColor: 'orange',
    overview: 'Chương trình được thiết kế chuẩn STEM Quốc tế, chia thành các cấp độ từ Ươm mầm (Lớp 1-2) đến Chắp cánh tương lai (Lớp 3-8). Học viên không chỉ học lý thuyết mà tự tay lắp ráp mô hình cơ khí, đấu nối cảm biến và lập trình thuật toán điều khiển robot vận hành trên sa bàn thực tế.',
    hardwareKit: {
      name: 'Bộ Học Cụ Robot Cơ Khí & Vi Điều Khiển ZMRobo Pro',
      description: 'Mỗi học viên được trang bị 01 bộ học cụ tiêu chuẩn cao cấp trong suốt quá trình học tập tại trung tâm.',
      items: [
        'Bộ vi điều khiển thông minh tích hợp Bluetooth / Wi-Fi',
        'Cảm biến siêu âm đo khoảng cách & cảm biến dò đường quang học',
        'Động cơ servo góc quay chính xác và động cơ DC giảm tốc',
        'Bộ khung cơ khí nhôm & bánh xe đa hướng Mecanum',
        'Mô-đun đèn LED ma trận và còi cảnh báo âm thanh',
      ],
    },
    skillsGained: [
      { title: 'Tư duy thuật toán & Logic toán học', desc: 'Hiểu bản chất biến số, vòng lặp, điều kiện rẽ nhánh', percent: 95 },
      { title: 'Chế tạo cơ khí & Điện tử học', desc: 'Thao tác lắp ráp module, truyền động bánh răng, đòn bẩy', percent: 90 },
      { title: 'Bản lĩnh thuyết trình & Phản biện', desc: 'Bảo vệ đồ án kỹ sư nhí trước phụ huynh sau mỗi 12 buổi', percent: 88 },
      { title: 'Giải quyết vấn đề thực tế', desc: 'Tự tìm lỗi debug và tối ưu đường đi trên sa bàn thi đấu', percent: 92 },
    ],
    modules: [
      {
        number: 'Học phần 1',
        title: 'Nhập Môn Cơ Khí & Tư Duy Logic Trực Quan (12 buổi)',
        duration: '3 tháng (1 buổi/tuần, 90 phút)',
        description: 'Làm quen với các linh kiện cơ khí, nguyên lý truyền động và ngôn ngữ lập trình khối lệnh Scratch Robotics.',
        outcomes: [
          'Nhận diện các chi tiết cơ khí: Bánh răng, trục quay, ròng rọc',
          'Tự tay lắp ráp 4 mẫu robot đầu tiên (Xe thám hiểm, Quạt thông minh, Đèn tín hiệu)',
          'Nắm vững câu lệnh điều khiển động cơ và hiệu ứng âm thanh/ánh sáng',
          'Buổi 12: Thuyết trình bảo vệ đồ án học phần trước phụ huynh',
        ],
      },
      {
        number: 'Học phần 2',
        title: 'Cảm Biến Đa Dạng & Thuật Toán Tự Hành (12 buổi)',
        duration: '3 tháng (1 buổi/tuần, 90 phút)',
        description: 'Tích hợp cảm biến siêu âm, cảm biến ánh sáng, cảm biến chạm để robot có khả năng tương tác với môi trường xung quanh.',
        outcomes: [
          'Lập trình robot tự động né vật cản trong mê cung',
          'Xây dựng thuật toán bám vạch kẻ đường (Line Tracking)',
          'Ứng dụng toán học góc quay và gia tốc vào điều khiển chuyển động',
          'Hoàn thiện robot cứu hỏa mini phát hiện nguồn lửa',
        ],
      },
      {
        number: 'Học phần 3',
        title: 'Thực Chiến Sa Bàn & Chiến Thuật Thi Đấu (12 buổi)',
        duration: '3 tháng (1 buổi/tuần, 90 phút)',
        description: 'Làm quen với luật thi đấu chuẩn các giải Robotics cấp thành phố và quốc gia; rèn luyện bản lĩnh thi đấu đồng đội.',
        outcomes: [
          'Huấn luyện trên các bài toán sa bàn Cuộc thi Sáng tạo Robotics tại 3 tỉnh, Khu vực miền Bắc',
          'Kỹ năng phối hợp nhóm: Trưởng đội lập trình & Kỹ sư cơ khí',
          'Tối ưu hóa thời gian thực thi nhiệm vụ thu thập vật phẩm',
          'Thi đấu đối kháng nội bộ cọ xát thực tế',
        ],
      },
      {
        number: 'Học phần 4',
        title: 'Đồ Án Tốt Nghiệp Kỹ Sư Nhí & Luyện Đề Nâng Cao (12 buổi)',
        duration: '3 tháng (1 buổi/tuần, 90 phút)',
        description: 'Tự thiết kế một đề tài sáng tạo theo ý tưởng của con, chuẩn bị hồ sơ tham dự giải đấu các cấp và nhận chứng chỉ tốt nghiệp.',
        outcomes: [
          'Tự đề xuất ý tưởng và lên bản vẽ thiết kế robot cá nhân',
          'Viết tài liệu thuyết minh và quay video demo hoạt động',
          'Lễ Tốt Nghiệp: Bảo vệ đề án trước hội đồng giáo viên và phụ huynh',
          'Cấp Giấy chứng nhận Kỹ Sư Nhí VIAI Academy và hỗ trợ đăng ký thi đấu',
        ],
      },
    ],
    schedule: [
      { shift: 'Ca Sáng Thứ 7', days: 'Thứ 7 hàng tuần', time: '08:00 — 09:30', branch: 'Cơ sở Hải Phòng' },
      { shift: 'Ca Chiều Thứ 7', days: 'Thứ 7 hàng tuần', time: '14:30 — 16:00', branch: 'Cơ sở Hưng Yên' },
      { shift: 'Ca Sáng Chủ Nhật', days: 'Chủ Nhật hàng tuần', time: '09:45 — 11:15', branch: 'Cơ sở Ninh Bình' },
      { shift: 'Ca Chiều Chủ Nhật', days: 'Chủ Nhật hàng tuần', time: '16:15 — 17:45', branch: 'Cơ sở Hải Phòng' },
    ],
    tuition: {
      originalPrice: '3.600.000đ / học phần',
      discountedPrice: '2.700.000đ / học phần (Giảm 25%)',
      offerNote: 'Áp dụng cho học viên đăng ký trước đợt khai giảng 2026',
      giftValue: '1.840.000đ (Bao gồm áo thun Kỹ sư nhí + Balo công nghệ + Bộ kit thực hành)',
    },
    commitments: [
      'Buổi đầu 90 phút: Hoàn tiền 100% nếu con không hào hứng, không câu hỏi',
      'Lớp chuẩn VIP dưới 10 học viên, giáo viên kèm cặp 1-1',
      'Mỗi học viên có 01 sản phẩm robot thật mang về khoe ba mẹ sau khóa học',
      'Có ghi hình video thuyết trình kỷ niệm sau mỗi 12 buổi học',
    ],
  },

  'luyen-thi-robosim': {
    slug: 'luyen-thi-robosim',
    name: 'Luyện Thi RoboSim Độc Quyền 2026',
    headline: 'Khóa luyện thi trọng điểm cấp tốc & chuyên sâu trên nền tảng RoboSim — Phần mềm thi đấu bắt buộc Cuộc thi 2026',
    category: 'Online Toàn Quốc & Hybrid Offline',
    age: 'Lớp 3 — 9 (8 đến 15 tuổi)',
    duration: '24 buổi chuyên sâu + Bộ đề thi giải sẵn',
    classSize: 'Lớp nhỏ < 10 học viên / Có kèm riêng 1-1',
    format: 'Học qua nền tảng VIAI-World & RoboSim Simulator',
    rating: 5.0,
    totalStudents: 420,
    coverImage: '/images/luyenthirobosim.jpg',
    badge: 'TRỌNG ĐIỂM THI ĐẤU 2026',
    glowColor: 'purple',
    overview: 'RoboSim là phần mềm mô phỏng 3D duy nhất được Ban Tổ Chức lựa chọn làm công cụ thi đấu bắt buộc cho Cuộc thi Sáng tạo Robotics tại 3 tỉnh, Khu vực miền Bắc 2026. VIAI Academy là đơn vị độc quyền sở hữu giáo trình, bản quyền phần mềm và trọn bộ đề thi thử kèm lời giải tối ưu giải thuật.',
    hardwareKit: {
      name: 'Bản Quyền Phần Mềm RoboSim 2026 & Tài Khoản Thi Đấu VIAI-World',
      description: 'Cấp mã bản quyền phần mềm thi đấu chính thức kèm server chấm điểm tự động bằng AI.',
      items: [
        'Giấy phép bản quyền RoboSim 2026 thời hạn 1 năm',
        'Kho 50+ sa bàn thi đấu 3D chuẩn kích thước ban tổ chức',
        'Bộ thư viện khối lệnh tối ưu tốc độ xử lý cảm biến',
        'Hệ thống AI tự động phân tích đường đi và chấm điểm bài thi',
      ],
    },
    skillsGained: [
      { title: 'Tối ưu hóa giải thuật đua tốc độ', desc: 'Lập trình đường đi ngắn nhất (Shortest Path) trên sa bàn', percent: 98 },
      { title: 'Kỹ năng giải đề thi đấu thực chiến', desc: 'Đọc hiểu đề thi ban tổ chức và phân tích chiến thuật ghi điểm', percent: 96 },
      { title: 'Bản lĩnh tâm lý phòng thi', desc: 'Rèn luyện thi đấu áp lực thời gian bấm giờ chính xác', percent: 94 },
      { title: 'Xử lý tình huống nhiễu cảm biến', desc: 'Bù sai số quán tính và điều chỉnh thuật toán linh hoạt', percent: 92 },
    ],
    modules: [
      {
        number: 'Module 1',
        title: 'Làm Chủ Nền Tảng Mô Phỏng 3D RoboSim (6 buổi)',
        duration: '1.5 tháng (1 buổi/tuần)',
        description: 'Làm quen với giao diện sa bàn 3D, vật lý mô phỏng ma sát bánh xe và hệ tọa độ thi đấu.',
        outcomes: [
          'Cài đặt và thiết lập tài khoản thi đấu chính thức',
          'Nắm vững hệ trục tọa độ X-Y-Z và góc xoay Yaw-Pitch-Roll của robot ảo',
          'Lập trình điều khiển di chuyển cơ bản với sai số dưới 1%',
          'Thuần thục thao tác nạp code và chạy mô phỏng thời gian thực',
        ],
      },
      {
        number: 'Module 2',
        title: 'Cảm Biến Ảo & Thuật Toán Tránh Chướng Ngại Vật (6 buổi)',
        duration: '1.5 tháng (1 buổi/tuần)',
        description: 'Khai thác cảm biến LiDAR, cảm biến khoảng cách và quang học trong môi trường 3D giả lập.',
        outcomes: [
          'Viết thuật toán tự động quét 360 độ tìm kiếm cờ điểm',
          'Thuật toán vượt vật cản động di chuyển bất định trên sa bàn',
          'Kỹ thuật né bẫy trừ điểm của đề thi vòng loại',
          'Kiểm tra thử nghiệm 10 bài toán thực tế',
        ],
      },
      {
        number: 'Module 3',
        title: 'Giải Trọn Bộ Đề Thi Vòng Loại 3 Tỉnh Miền Bắc 2026 (6 buổi)',
        duration: '1.5 tháng (1 buổi/tuần)',
        description: 'Giải mã chi tiết toàn bộ đề thi vòng loại kết thúc ngày 26/07/2026 với lời giải chuẩn mực.',
        outcomes: [
          'Phân tích ma trận điểm của ban tổ chức để chọn chiến thuật tối ưu',
          'Lập trình code mẫu đạt điểm tuyệt đối 100/100',
          'Tối ưu hóa thời gian hoàn thành dưới 60 giây',
          'Rèn luyện thi thử bấm giờ có giám khảo chấm thi',
        ],
      },
      {
        number: 'Module 4',
        title: 'Chiến Thuật Chung Kết Khu Vực Miền Bắc & Gói Vé Vàng VIAI8 (6 buổi)',
        duration: '1.5 tháng (1 buổi/tuần)',
        description: 'Chuẩn bị cho vòng Chung kết tại Nghệ An ngày 13/09/2026. Áp dụng chính sách cam kết hoàn tiền 100%.',
        outcomes: [
          'Thuật toán đối kháng nâng cao dành cho vòng chung kết',
          'Chiến thuật thi đấu theo đội 2-3 bạn',
          'Thi thử toàn quốc trên hệ thống máy chủ VIAI-World',
          'Sẵn sàng giành vé vàng và nhận gói hỗ trợ lệ phí 3.000.000đ',
        ],
      },
    ],
    schedule: [
      { shift: 'Lớp Online Tối Thứ 3 & 5', days: 'Thứ 3 và Thứ 5', time: '19:30 — 21:00', branch: 'Online qua nền tảng VIAI-World' },
      { shift: 'Lớp Online Tối Thứ 4 & 6', days: 'Thứ 4 và Thứ 6', time: '19:30 — 21:00', branch: 'Online qua nền tảng VIAI-World' },
      { shift: 'Lớp Offline Luyện Đề Cuối Tuần', days: 'Chủ Nhật', time: '14:00 — 16:30', branch: 'Cơ sở Hải Phòng' },
    ],
    tuition: {
      originalPrice: '4.200.000đ / khóa',
      discountedPrice: '2.310.000đ / khóa (Giảm đến 45%)',
      offerNote: 'Ưu đãi đặc biệt mùa giải Cuộc thi Sáng tạo Robotics 2026',
      giftValue: '1.500.000đ (Tài khoản thi đấu VIAI-World VIP + Ebook lời giải 50 đề thi mẫu)',
    },
    commitments: [
      'Gói VIAI8: Cam kết bằng văn bản hoàn tiền 100% nếu học viên không vượt qua vòng loại',
      'Được giáo viên kèm cặp giải đề trực tiếp 1 kèm 1 trong các ca luyện thi',
      'Tài trợ 3.000.000đ/học viên khi tham dự vòng chung kết toàn quốc',
    ],
  },

  'ai-iot-robotics': {
    slug: 'ai-iot-robotics',
    name: 'AI & IoT Robotics Master',
    headline: 'Khóa học công nghệ cao kết hợp Trí Tuệ Nhân Tạo, Thị Giác Máy Tính và Robot Tự Hành Thông Minh',
    category: 'Khóa học Chuyên gia Nhí Nâng cao',
    age: 'Lớp 5 — 8 (10 đến 15 tuổi)',
    duration: '36 buổi (9 tháng) / 3 học phần',
    classSize: 'Tối đa ≤ 8 học viên (Chất lượng cao)',
    format: 'Hybrid (Offline thực hành phần cứng + Online code Python/AI)',
    rating: 4.95,
    totalStudents: 190,
    coverImage: '/images/hocviensatathamgiacuocthi1.jpg',
    badge: 'CÔNG NGHỆ THẾ HỆ MỚI',
    glowColor: 'cyan',
    overview: 'Được thiết kế theo tiêu chuẩn các trường công nghệ hàng đầu thế giới, học viên được tiếp cận trực tiếp với trí tuệ nhân tạo (Computer Vision), vi xử lý nhúng ESP32 / Raspberry Pi, và lập trình ngôn ngữ Python thực tế. Học viên tự tay chế tạo các cỗ máy thông minh như xe tự hành nhận diện biển báo, thùng rác phân loại rác bằng camera AI.',
    hardwareKit: {
      name: 'Bộ Kit AI Vision & IoT Smart Robotics Kit',
      description: 'Trang bị camera AI nhận diện hình ảnh, bo mạch AI vi xử lý mạnh mẽ và cảm biến IoT đám mây.',
      items: [
        'Mô-đun Camera AI ESP32-CAM / K210 nhận diện khuôn mặt và vật thể',
        'Bộ vi điều khiển IoT kết nối đám mây qua Wi-Fi/MQTT',
        'Màn hình hiển thị thông số OLED và bộ cảm biến môi trường (Nhiệt độ, độ ẩm, khí gas)',
        'Khung xe tự hành thông minh 4 bánh Mecanum xoay 360 độ linh hoạt',
      ],
    },
    skillsGained: [
      { title: 'Lập trình ngôn ngữ Python', desc: 'Chuyển đổi từ khối lệnh sang ngôn ngữ lập trình thực tế của kỹ sư', percent: 96 },
      { title: 'Thị giác máy tính (Computer Vision)', desc: 'Huấn luyện mô hình nhận diện khuôn mặt, làn đường, biển báo', percent: 92 },
      { title: 'Internet of Things (IoT)', desc: 'Điều khiển thiết bị từ xa qua ứng dụng điện thoại và web dashboard', percent: 94 },
      { title: 'Tư duy nghiên cứu khoa học', desc: 'Độc lập xây dựng đồ án tham gia cuộc thi Khoa học Kỹ thuật (KHKT)', percent: 90 },
    ],
    modules: [
      {
        number: 'Học phần 1',
        title: 'Python Robotics & Lập Trình Nhúng Căn Bản (12 buổi)',
        duration: '3 tháng (1 buổi/tuần, 120 phút)',
        description: 'Chuyển giao mượt mà từ Scratch sang cú pháp lập trình Python; điều khiển chân GPIO, xung PWM và động cơ.',
        outcomes: [
          'Thành thạo cú pháp Python: Cấu trúc điều kiện, hàm, mảng, danh sách',
          'Lập trình giao tiếp cảm biến và vi điều khiển',
          'Xây dựng ứng dụng điều khiển robot qua Wi-Fi trên điện thoại',
          'Chế tạo hệ thống nhà thông minh Smart Home mini',
        ],
      },
      {
        number: 'Học phần 2',
        title: 'Thị Giác Máy Tính & Nhận Diện Vật Thể AI (12 buổi)',
        duration: '3 tháng (1 buổi/tuần, 120 phút)',
        description: 'Ứng dụng thư viện OpenCV và mô hình Deep Learning xử lý luồng video thời gian thực từ camera.',
        outcomes: [
          'Xử lý ảnh: Lọc màu, nhận diện đường viền và tracking chuyển động',
          'Huấn luyện mô hình AI phân loại rác thải tự động qua camera',
          'Lập trình xe tự hành bám làn đường và dừng trước biển báo đỏ',
          'Bảo vệ đồ án giữa kỳ: Robot an ninh nhận diện khuôn mặt',
        ],
      },
      {
        number: 'Học phần 3',
        title: 'Robot Tự Hành Thông Minh & IoT Đám Mây (12 buổi)',
        duration: '3 tháng (1 buổi/tuần, 120 phút)',
        description: 'Kết hợp toàn diện AI + IoT + Cơ khí để tạo ra sản phẩm hoàn chỉnh tham dự các giải thi đấu sáng tạo.',
        outcomes: [
          'Kết nối robot với Cloud Server và điều khiển không giới hạn khoảng cách',
          'Hoàn thiện đồ án lớn: Xe vận chuyển hàng tự hành trong nhà kho thông minh',
          'Lễ tốt nghiệp: Trình diễn sản phẩm trước doanh nghiệp công nghệ đối tác',
          'Cấp chứng chỉ Chuyên Gia Nhí AI & Hướng dẫn viết bài thi KHKT cấp tỉnh/thành',
        ],
      },
    ],
    schedule: [
      { shift: 'Lớp Chiều Thứ 7', days: 'Thứ 7 hàng tuần', time: '16:30 — 18:30', branch: 'Cơ sở Hải Phòng' },
      { shift: 'Lớp Sáng Chủ Nhật', days: 'Chủ Nhật hàng tuần', time: '08:00 — 10:00', branch: 'Cơ sở Hưng Yên' },
    ],
    tuition: {
      originalPrice: '4.800.000đ / học phần',
      discountedPrice: '3.600.000đ / học phần (Giảm 25%)',
      offerNote: 'Hỗ trợ trả góp học phí 0% qua các ngân hàng đối tác',
      giftValue: '2.200.000đ (Bao gồm bộ Kit AI Camera + Khóa học lập trình Python nền tảng)',
    },
    commitments: [
      'Lớp giới hạn tối đa 8 học viên để đảm bảo chất lượng hướng dẫn chuyên sâu',
      'Cam kết học sinh tự tay viết code Python và hiểu rõ thuật toán AI',
      'Được bảo trợ tham gia Cuộc thi Khoa học Kỹ thuật (KHKT) và Robotics cấp Quốc gia',
    ],
  },
};
