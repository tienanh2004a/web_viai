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
  // 1. KHỐI MẦM NON (4 — 6 TUỔI)
  'robotics-mam-non': {
    slug: 'robotics-mam-non',
    name: 'Robotics Khối Mầm Non (4 — 6 tuổi)',
    headline: 'Khơi nguồn đam mê công nghệ & kích thích tư duy sáng tạo cho trẻ mầm non từ 4 đến 6 tuổi',
    category: 'Đào tạo trực tiếp tại cơ sở',
    age: 'Mầm non (4 — 6 tuổi)',
    duration: '24 buổi (6 tháng) / 2 học phần',
    classSize: 'Tối đa < 8 học viên (thầy cô kèm sát 1-1)',
    format: 'Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)',
    rating: 4.95,
    totalStudents: 320,
    coverImage: '/images/laptrinhrobot.jpg',
    badge: 'ƯƠM MẦM SÁNG TẠO',
    glowColor: 'orange',
    overview: 'Chương trình được thiết kế đặc thù cho lứa tuổi mầm non theo phương pháp "Vừa học vừa chơi" (Play-based Learning). Bé được tự tay thao tác với các khối ghép cơ khí an toàn, bánh răng nhiều màu sắc và mô hình robot chuyển động trực quan, rèn luyện vận động tinh và nhen nhóm tư duy logic đầu đời.',
    hardwareKit: {
      name: 'Bộ Học Cụ Robot Mầm Non VIAI-Kids An Toàn Chuẩn Châu Âu',
      description: 'Mỗi học viên được trang bị 01 bộ khối ghép cơ khí bo tròn không sắc nhọn, động cơ giảm tốc an toàn cho trẻ nhỏ.',
      items: [
        'Bộ 120+ chi tiết khối ghép nhựa nguyên sinh ABS an toàn tuyệt đối',
        'Động cơ chuyển động chậm thông minh kèm nút điều khiển trực quan',
        'Bộ truyền động bánh răng lớn, ròng rọc và trục quay sắc màu',
        'Cảm biến chạm và đèn LED phát sáng vui nhộn',
        'Thẻ lệnh mã màu giúp bé làm quen tư duy lập trình không cần máy tính',
      ],
    },
    skillsGained: [
      { title: 'Kỹ năng vận động tinh & Khéo léo', desc: 'Thao tác lắp ghép ngón tay, phối hợp tay - mắt nhịp nhàng', percent: 98 },
      { title: 'Tư duy logic & Trình tự hành động', desc: 'Hiểu khái niệm nhân - quả và các bước hoàn thành sản phẩm', percent: 92 },
      { title: 'Trí tưởng tượng & Sáng tạo tự do', desc: 'Tự do sáng tạo các mô hình động vật, xe cộ theo suy nghĩ của bé', percent: 96 },
      { title: 'Tự tin giao tiếp & Hợp tác', desc: 'Biết chia sẻ khối ghép, cùng bạn chơi và khoe sản phẩm với bố mẹ', percent: 90 },
    ],
    modules: [
      {
        number: 'Học phần 1',
        title: 'Khám Phá Thế Giới Cơ Khí Xung Quanh Em (12 buổi)',
        duration: '3 tháng (1 buổi/tuần, 75 phút)',
        description: 'Bé làm quen các khối ghép hình học, khám phá cơ chế chuyển động của bánh xe, đòn bẩy và ròng rọc.',
        outcomes: [
          'Nhận biết màu sắc, hình khối và nguyên lý chuyển động cơ bản',
          'Tự tay lắp ráp 4 mô hình: Chiếc quạt mát, Cầu bập bênh, Vòng quay ngựa gỗ, Cối xay gió',
          'Rèn luyện tính kiên nhẫn và khả năng tập trung qua từng chi tiết',
          'Buổi 12: Ngày hội mở - Bé tự tin thuyết trình robot trước bố mẹ',
        ],
      },
      {
        number: 'Học phần 2',
        title: 'Robot Chuyển Động & Tư Duy Lập Trình Không Màn Hình (12 buổi)',
        duration: '3 tháng (1 buổi/tuần, 75 phút)',
        description: 'Tích hợp động cơ và các nút bấm lệnh điều khiển giúp robot cử động theo ý muốn của bé.',
        outcomes: [
          'Điều khiển chú robot di chuyển tới - lui và đổi hướng',
          'Chế tạo các mô hình sinh động: Chú cún vẫy đuôi, Xe đua mini, Cổng chắn tự động',
          'Làm quen tư duy thuật toán qua chuỗi lệnh thẻ màu',
          'Trao chứng nhận "Kỹ Sư Nhí Ươm Mầm" và tặng kỷ niệm chương cho bé',
        ],
      },
    ],
    schedule: [
      { shift: 'Ca Sáng Thứ 7', days: 'Thứ 7 hàng tuần', time: '08:30 — 09:45', branch: 'Cơ sở Hải Phòng / Hưng Yên / Ninh Bình' },
      { shift: 'Ca Chiều Thứ 7', days: 'Thứ 7 hàng tuần', time: '15:00 — 16:15', branch: 'Cơ sở Hải Phòng / Hưng Yên / Ninh Bình' },
      { shift: 'Ca Sáng Chủ Nhật', days: 'Chủ Nhật hàng tuần', time: '09:00 — 10:15', branch: 'Cơ sở Hải Phòng / Hưng Yên / Ninh Bình' },
    ],
    tuition: {
      originalPrice: '3.200.000đ / học phần',
      discountedPrice: '2.400.000đ / học phần (Giảm 25%)',
      offerNote: 'Tặng 01 buổi học thử 1-1 miễn phí kiểm tra năng lực cho bé',
      giftValue: '800.000đ (Balo kỹ sư nhí + Bộ áo đồng phục VIAI Kids)',
    },
    commitments: [
      'Lớp giới hạn dưới 8 bé, giáo viên theo sát 1 kèm 1 an toàn tuyệt đối',
      'Hoàn tiền 100% nếu sau buổi học đầu tiên bé không hào hứng tham gia',
      'Gửi video và ảnh quá trình học tập của con sau mỗi buổi cho phụ huynh',
    ],
  },

  // 2. KHỐI TIỂU HỌC (6 — 11 TUỔI)
  'robotics-tieu-hoc': {
    slug: 'robotics-tieu-hoc',
    name: 'Robotics Khối Tiểu Học (6 — 11 tuổi)',
    headline: 'Lắp ráp robot cơ khí, lập trình kéo thả Scratch/Blockly & làm chủ sa bàn thi đấu cho học sinh từ 6 đến 11 tuổi',
    category: 'Đào tạo trực tiếp tại cơ sở',
    age: 'Khối Tiểu học (6 đến 11 tuổi)',
    duration: '48 buổi (12 tháng) / 4 học phần',
    classSize: 'Tối đa < 10 học viên (kèm 1-1)',
    format: 'Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)',
    rating: 4.96,
    totalStudents: 750,
    coverImage: '/images/hocviensatathamgiacuocthi2.jpg',
    badge: 'TRỌNG ĐIỂM THỰC CHIẾN',
    glowColor: 'purple',
    overview: 'Chương trình phát triển toàn diện tư duy công nghệ dành cho học sinh tiểu học: Học viên trực tiếp chế tạo robot cơ khí hoàn chỉnh, đấu nối các loại cảm biến (dò vạch line, cảm biến siêu âm né vật cản, quang học) và làm chủ tư duy lập trình kéo thả Scratch/Blockly trên sa bàn thi đấu Robocon thực tế.',
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
      { title: 'Tư duy thuật toán & Logic toán học', desc: 'Hiểu bản chất biến số, vòng lặp, câu lệnh rẽ nhánh điều kiện', percent: 96 },
      { title: 'Chế tạo cơ khí & Điện tử học', desc: 'Thao tác lắp ráp module, truyền động bánh răng, đòn bẩy, motor', percent: 93 },
      { title: 'Bản lĩnh thi đấu sa bàn', desc: 'Căn chỉnh tốc độ, lập trình giải thuật vượt chướng ngại vật thực tế', percent: 95 },
      { title: 'Thuyết trình đồ án tự tin', desc: 'Bảo vệ sản phẩm robot tự chế tạo trước hội đồng phụ huynh', percent: 90 },
    ],
    modules: [
      {
        number: 'Học phần 1',
        title: 'Nhập Môn Lắp Ráp Cơ Khí & Lập Trình Kéo Thả (12 buổi)',
        duration: '3 tháng (1 buổi/tuần, 90 phút)',
        description: 'Làm quen với các linh kiện cơ khí, nguyên lý truyền động và ngôn ngữ lập trình khối lệnh Scratch Robotics.',
        outcomes: [
          'Nhận diện các chi tiết cơ khí: Bánh răng, trục quay, ròng rọc',
          'Tự tay lắp ráp và code 4 mẫu robot đầu tiên (Xe thám hiểm, Quạt thông minh, Đèn tín hiệu)',
          'Nắm vững câu lệnh điều khiển động cơ và hiệu ứng âm thanh/ánh sáng',
          'Buổi 12: Thuyết trình bảo vệ đồ án học phần trước phụ huynh',
        ],
      },
      {
        number: 'Học phần 2',
        title: 'Cảm Biến Đa Dạng & Thuật Toán Tự Hành (12 buổi)',
        duration: '3 tháng (1 buổi/tuần, 90 phút)',
        description: 'Tích hợp cảm biến siêu âm, cảm biến ánh sáng, cảm biến chạm để robot có khả năng tương tác với môi trường.',
        outcomes: [
          'Lập trình robot tự động né vật cản trong mê cung',
          'Xây dựng thuật toán bám vạch kẻ đường (Line Tracking)',
          'Ứng dụng toán học góc quay và gia tốc vào điều khiển chuyển động',
          'Hoàn thiện robot cứu hỏa mini phát hiện nguồn lửa',
        ],
      },
      {
        number: 'Học phần 3',
        title: 'Thực Chiến Sa Bàn & Chiến Thuật Thi Đấu Robocon (12 buổi)',
        duration: '3 tháng (1 buổi/tuần, 90 phút)',
        description: 'Luyện tập trên sa bàn thi đấu chuẩn các giải Robotics cấp thành phố và khu vực miền Bắc.',
        outcomes: [
          'Huấn luyện trên các bài toán sa bàn Cuộc thi Sáng tạo Robotics tại Hưng Yên, miền Bắc',
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
      { shift: 'Ca Sáng Thứ 7', days: 'Thứ 7 hàng tuần', time: '08:00 — 09:30', branch: 'Cơ sở Hải Phòng / Hưng Yên / Ninh Bình' },
      { shift: 'Ca Chiều Thứ 7', days: 'Thứ 7 hàng tuần', time: '14:30 — 16:00', branch: 'Cơ sở Hải Phòng / Hưng Yên / Ninh Bình' },
      { shift: 'Ca Sáng Chủ Nhật', days: 'Chủ Nhật hàng tuần', time: '09:45 — 11:15', branch: 'Cơ sở Hải Phòng / Hưng Yên / Ninh Bình' },
      { shift: 'Ca Chiều Chủ Nhật', days: 'Chủ Nhật hàng tuần', time: '16:15 — 17:45', branch: 'Cơ sở Hải Phòng / Hưng Yên / Ninh Bình' },
    ],
    tuition: {
      originalPrice: '3.600.000đ / học phần',
      discountedPrice: '2.700.000đ / học phần (Giảm 25%)',
      offerNote: 'Đóng trọn năm 4 học phần: Tặng ngay 01 bộ Robot ZMRobo Pro trị giá 1.850.000đ mang về nhà',
      giftValue: '1.200.000đ (Bao gồm đồng phục, tài khoản thư viện đề thi và miễn phí thi đấu thử)',
    },
    commitments: [
      'Buổi đầu 90 phút: Hoàn tiền 100% nếu con không hào hứng, không câu hỏi',
      'Lớp chuẩn VIP dưới 10 học viên, giáo viên kèm cặp 1-1',
      'Mỗi học viên có 01 sản phẩm robot thật mang về khoe ba mẹ sau khóa học',
      'Được đồng hành tham gia các giải Robocon cấp trường, cấp tỉnh',
    ],
  },

  // 3. KHỐI TRUNG HỌC (11 — 15 TUỔI)
  'robotics-trung-hoc': {
    slug: 'robotics-trung-hoc',
    name: 'Robotics & AI Khối Trung Học (11 — 15 tuổi)',
    headline: 'Lập trình văn bản Python/C++, vi điều khiển, thị giác máy tính AI & luyện thi đấu trường quốc gia cho học sinh từ 11 đến 15 tuổi',
    category: 'Khóa học Chuyên gia Nhí Nâng cao',
    age: 'Khối Trung học (11 đến 15 tuổi)',
    duration: '36 buổi (9 tháng) / 3 học phần',
    classSize: 'Tối đa ≤ 8 học viên (Chất lượng cao)',
    format: 'Offline thực hành phần cứng + Code Python/AI chuyên sâu',
    rating: 4.98,
    totalStudents: 280,
    coverImage: '/images/hocviensatathamgiacuocthi1.jpg',
    badge: 'CHUYÊN SÂU & AI THẾ HỆ MỚI',
    glowColor: 'cyan',
    overview: 'Khóa học đỉnh cao đón đầu kỷ nguyên AI: Học sinh chuyển từ lập trình khối lệnh sang lập trình mã nguồn mở thực thụ bằng Python và C++, khai thác sức mạnh của vi điều khiển ESP32/Arduino, tích hợp thị giác máy tính OpenCV nhận diện vật thể/khuôn mặt và chế tạo robot tự hành thông minh.',
    hardwareKit: {
      name: 'Bộ Kit AI Vision Robot & Vi Điều Khiển ESP32 / Arduino Master',
      description: 'Trang bị trọn gói phần cứng chuẩn công nghiệp, cảm biến góc nghiêng IMU, camera AI và động cơ mã hóa Encoder.',
      items: [
        'Bo mạch vi điều khiển ESP32 kép Core Wi-Fi/Bluetooth & mạch Arduino',
        'Mô-đun Camera AI nhận diện vật thể và xử lý ảnh',
        'Cảm biến góc nghiêng con quay hồi chuyển 6 trục MPU6050',
        'Cụm động cơ bước chính xác & motor Encoder đo vận tốc',
        'Bộ mạch cầu công suất điều khiển dòng tải cao',
      ],
    },
    skillsGained: [
      { title: 'Lập trình văn bản Python & C++', desc: 'Viết code chuyên nghiệp, hiểu kiến trúc dữ liệu và giải thuật', percent: 97 },
      { title: 'Thị giác máy tính & Mô hình AI', desc: 'Nhận diện đối tượng, xử lý ảnh camera và xe tự hành', percent: 94 },
      { title: 'Mạch điện tử & Vi điều khiển', desc: 'Đấu nối mạch, điều khiển xung PWM, giao tiếp I2C, SPI, UART', percent: 92 },
      { title: 'Nghiên cứu KHKT & Đấu trường Quốc gia', desc: 'Xây dựng bài báo cáo khoa học, kỹ năng bảo vệ đề tài trước hội đồng', percent: 95 },
    ],
    modules: [
      {
        number: 'Học phần 1',
        title: 'Chuyển Đổi Python/C++ & Mạch Vi Điều Khiển Thực Tế (12 buổi)',
        duration: '3 tháng (1 buổi/tuần, 120 phút)',
        description: 'Chuyển dịch từ tư duy khối lệnh sang viết mã nguồn Python/C++, làm chủ ngắt timer, giao tiếp cảm biến và điều khiển động cơ.',
        outcomes: [
          'Thành thạo cú pháp lập trình cấu trúc Python và C++',
          'Điều khiển động cơ với độ chính xác cao qua tín hiệu PWM',
          'Đọc dữ liệu cảm biến đa trục IMU và lọc nhiễu số liệu',
          'Hoàn thành mẫu xe cân bằng 2 bánh tự giữ thăng bằng',
        ],
      },
      {
        number: 'Học phần 2',
        title: 'Thị Giác Máy Tính (Computer Vision) & Trí Tuệ Nhân Tạo (12 buổi)',
        duration: '3 tháng (1 buổi/tuần, 120 phút)',
        description: 'Ứng dụng thư viện OpenCV và mô hình Deep Learning xử lý luồng video thời gian thực từ camera.',
        outcomes: [
          'Xử lý ảnh: Lọc màu, nhận diện đường viền và tracking chuyển động',
          'Huấn luyện mô hình AI phân loại rác thải tự động qua camera',
          'Lập trình xe tự hành bám làn đường và dừng trước biển báo',
          'Bảo vệ đồ án giữa kỳ: Robot an ninh nhận diện khuôn mặt',
        ],
      },
      {
        number: 'Học phần 3',
        title: 'Robot Tự Hành Thông Minh & Đồ Án KHKT Đấu Trường (12 buổi)',
        duration: '3 tháng (1 buổi/tuần, 120 phút)',
        description: 'Kết hợp toàn diện AI + IoT + Cơ khí để tạo ra sản phẩm hoàn chỉnh tham dự các giải thi đấu sáng tạo.',
        outcomes: [
          'Kết nối robot với Cloud Server và điều khiển qua mạng không giới hạn khoảng cách',
          'Hoàn thiện đồ án lớn: Xe vận chuyển hàng tự hành trong nhà kho thông minh',
          'Lễ tốt nghiệp: Trình diễn sản phẩm trước doanh nghiệp công nghệ đối tác',
          'Cấp chứng chỉ Chuyên Gia Nhí AI & Hướng dẫn viết bài thi KHKT cấp tỉnh/thành',
        ],
      },
    ],
    schedule: [
      { shift: 'Lớp Chiều Thứ 7', days: 'Thứ 7 hàng tuần', time: '16:30 — 18:30', branch: 'Cơ sở Hải Phòng / Hưng Yên / Ninh Bình' },
      { shift: 'Lớp Sáng Chủ Nhật', days: 'Chủ Nhật hàng tuần', time: '08:00 — 10:00', branch: 'Cơ sở Hải Phòng / Hưng Yên / Ninh Bình' },
    ],
    tuition: {
      originalPrice: '4.800.000đ / học phần',
      discountedPrice: '3.600.000đ / học phần (Giảm 25%)',
      offerNote: 'Hỗ trợ trả góp học phí 0% qua các ngân hàng đối tác',
      giftValue: '2.200.000đ (Bao gồm bộ Kit AI Camera + Khóa học lập trình Python nền tảng)',
    },
    commitments: [
      'Lớp giới hạn tối đa 8 học viên để đảm bảo chất lượng hướng dẫn chuyên sâu',
      'Cam kết học sinh tự tay viết code Python/C++ và hiểu rõ thuật toán AI',
      'Được bảo trợ tham gia Cuộc thi Khoa học Kỹ thuật (KHKT) và Robotics cấp Quốc gia',
    ],
  },
};

// Backwards compatibility aliases
coursesData['lap-trinh-robot'] = coursesData['robotics-mam-non'];
coursesData['luyen-thi-robosim'] = coursesData['robotics-tieu-hoc'];
coursesData['ai-iot-robotics'] = coursesData['robotics-trung-hoc'];
