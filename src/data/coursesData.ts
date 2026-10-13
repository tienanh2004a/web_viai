export interface CourseLesson {
  sessionNumber: number;
  title: string;
  type: string;
}

export interface CourseModule {
  id: string; // 'HP1', 'HP2', 'HP3', 'HP4'
  title: string; // 'Học phần 1'
  name: string; // Tên học phần
  number: string; // Backwards compatible
  duration: string; // '13 buổi - 90 phút/buổi'
  sessionsCount: number; // 13
  hoursCount: number; // 19.5
  projectsCount: number; // 10
  description: string;
  achievement: string;
  lessons: CourseLesson[];
  outcomes: string[]; // Backwards compatible
}

export interface CourseDetail {
  slug: string;
  code?: string;
  name: string;
  academicName: string;
  headline: string;
  category: string;
  grade: string;
  age: string;
  displayAge: string;
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
  'robotics-mam-non': {
  "slug": "robotics-mam-non",
  "code": "Sata-Kids",
  "name": "Robotics Mầm Non",
  "academicName": "Ươm Mầm Sáng Tạo",
  "headline": "Khơi nguồn đam mê công nghệ & kích thích tư duy sáng tạo cho trẻ mầm non từ 4 đến 6 tuổi",
  "category": "Mầm non (4 — 6 tuổi)",
  "grade": "Mầm non (4 — 6 tuổi)",
  "age": "Mầm non (4 — 6 tuổi)",
  "displayAge": "4 - 6 tuổi",
  "duration": "52 buổi (12 tháng) / 4 học phần",
  "classSize": "Tối đa < 8 học viên (kèm sát 1-1)",
  "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
  "rating": 4.96,
  "totalStudents": 400,
  "coverImage": "/images/courses/mam-non.png",
  "badge": "ƯƠM MẦM SÁNG TẠO",
  "glowColor": "orange",
  "overview": "Chương trình được thiết kế đặc thù cho lứa tuổi mầm non theo phương pháp \"Vừa học vừa chơi\" (Play-based Learning). Bé được tự tay thao tác với các khối ghép cơ khí an toàn, bánh răng nhiều màu sắc và mô hình robot chuyển động trực quan, rèn luyện vận động tinh và nhen nhóm tư duy logic đầu đời.",
  "hardwareKit": {
    "name": "Bộ Học Cụ Robot Mầm Non VIAI-Kids An Toàn Chuẩn Châu Âu",
    "description": "Mỗi học viên được trang bị 01 bộ khối ghép cơ khí bo tròn không sắc nhọn, động cơ giảm tốc an toàn cho trẻ nhỏ.",
    "items": [
      "Bộ 120+ chi tiết khối ghép nhựa nguyên sinh ABS an toàn tuyệt đối",
      "Động cơ chuyển động chậm thông minh kèm nút điều khiển trực quan",
      "Bộ truyền động bánh răng lớn, ròng rọc và trục quay sắc màu",
      "Cảm biến chạm và đèn LED phát sáng vui nhộn",
      "Thẻ lệnh mã màu giúp bé làm quen tư duy lập trình không cần máy tính"
    ]
  },
  "skillsGained": [
    {
      "title": "Kỹ năng vận động tinh & Khéo léo",
      "desc": "Thao tác lắp ghép ngón tay, phối hợp tay - mắt nhịp nhàng",
      "percent": 98
    },
    {
      "title": "Tư duy logic & Trình tự hành động",
      "desc": "Hiểu khái niệm nhân - quả và các bước hoàn thành sản phẩm",
      "percent": 92
    },
    {
      "title": "Trí tưởng tượng & Sáng tạo tự do",
      "desc": "Tự do sáng tạo các mô hình động vật, xe cộ theo suy nghĩ của bé",
      "percent": 96
    },
    {
      "title": "Tự tin giao tiếp & Hợp tác",
      "desc": "Biết chia sẻ khối ghép, cùng bạn chơi và khoe sản phẩm với bố mẹ",
      "percent": 90
    }
  ],
  "modules": [
    {
      "id": "HP1",
      "title": "Học phần 1",
      "name": "Khám Phá Cơ Khí Sắc Màu",
      "number": "Học phần 1",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Bé làm quen các khối ghép hình học, khám phá cơ chế chuyển động của bánh xe, đòn bẩy và ròng rọc.",
      "achievement": "Con nhận biết nguyên lý chuyển động cơ bản và tự tay lắp ráp các mô hình quen thuộc.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Chiếc quạt thần kỳ",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Cầu bập bênh vui nhộn",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Vòng quay ngựa gỗ",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Cối xay gió đón gió",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Xe đẩy hàng mini",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Chiếc cân công lý",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Đồng hồ quả lắc",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Máy kéo ròng rọc",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối học phần",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối học phần",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối học phần",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Bé làm quen các khối ghép hình học, khám phá cơ chế chuyển động của bánh xe, đòn bẩy và ròng rọc.",
        "Con nhận biết nguyên lý chuyển động cơ bản và tự tay lắp ráp các mô hình quen thuộc.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP2",
      "title": "Học phần 2",
      "name": "Thế Giới Động Vật Chuyển Động",
      "number": "Học phần 2",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Bé mở rộng sang cơ cấu nhiều chân, mô phỏng chuyển động sinh động của thế giới động vật.",
      "achievement": "Con hiểu cách truyền động qua các bánh răng và liên kết khớp cơ khí.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Chú cún vẫy đuôi",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Chú thỏ nhảy nhót",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Vịt con bơi lội",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Khủng long dạo bước",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Bướm vờn hoa thắm",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Cá sấu đớp mồi",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Ếch xanh tinh nghịch",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Cỗ xe ngựa kéo",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối học phần",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối học phần",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối học phần",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Bé mở rộng sang cơ cấu nhiều chân, mô phỏng chuyển động sinh động của thế giới động vật.",
        "Con hiểu cách truyền động qua các bánh răng và liên kết khớp cơ khí.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP3",
      "title": "Học phần 3",
      "name": "Robot Di Chuyển & Động Cơ Thông Minh",
      "number": "Học phần 3",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Tích hợp động cơ và các nút bấm lệnh điều khiển giúp robot cử động theo ý muốn của bé.",
      "achievement": "Con làm quen với khái niệm lực đẩy cơ học và điều khiển hướng chuyển động.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Xe đua phản lực",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Thuyền máy vượt sóng",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Máy bay cánh quạt",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Cần cẩu bốc hàng",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Cổng chắn tự động",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Xe cứu thương cấp tốc",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Máy xúc đất mini",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Tàu hỏa chạy pin",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối học phần",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối học phần",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối học phần",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Tích hợp động cơ và các nút bấm lệnh điều khiển giúp robot cử động theo ý muốn của bé.",
        "Con làm quen với khái niệm lực đẩy cơ học và điều khiển hướng chuyển động.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP4",
      "title": "Học phần 4",
      "name": "Tư Duy Lập Trình Thẻ Màu Không Màn Hình",
      "number": "Học phần 4",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Làm quen tư duy thuật toán chuỗi lệnh qua thẻ mã màu, rèn luyện tư duy logic chuẩn bị vào lớp 1.",
      "achievement": "Con tốt nghiệp cấp mầm non với khả năng tư duy trình tự và hoàn thiện đồ án kỹ sư nhí.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Robot ong tìm đường",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Mê cung sắc màu",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Đèn tín hiệu giao thông",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Chuyến xe du lịch",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Họa sĩ vẽ tranh màu",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Đầu bếp chuyển đồ",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Vệ sĩ tí hon",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Thám hiểm công viên",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối khóa",
          "type": "Dự án cuối khóa"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối khóa",
          "type": "Demo cuối khóa"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối khoá",
          "type": "Báo cáo cuối khóa"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Làm quen tư duy thuật toán chuỗi lệnh qua thẻ mã màu, rèn luyện tư duy logic chuẩn bị vào lớp 1.",
        "Con tốt nghiệp cấp mầm non với khả năng tư duy trình tự và hoàn thiện đồ án kỹ sư nhí.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    }
  ],
  "schedule": [
    {
      "shift": "Ca Sáng Thứ 7",
      "days": "Thứ 7 hàng tuần",
      "time": "08:00 — 09:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Chiều Thứ 7",
      "days": "Thứ 7 hàng tuần",
      "time": "14:30 — 16:00",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Sáng Chủ Nhật",
      "days": "Chủ Nhật hàng tuần",
      "time": "09:00 — 10:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Chiều Chủ Nhật",
      "days": "Chủ Nhật hàng tuần",
      "time": "16:00 — 17:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    }
  ],
  "tuition": {
    "originalPrice": "3.200.000đ / học phần",
    "discountedPrice": "2.400.000đ / học phần (Giảm 25%)",
    "offerNote": "Tặng 01 buổi học thử 1-1 miễn phí kiểm tra năng lực cho bé",
    "giftValue": "800.000đ (Balo kỹ sư nhí + Bộ áo đồng phục VIAI Kids)"
  },
  "commitments": [
    "Lớp giới hạn dưới 8 bé, giáo viên theo sát 1 kèm 1 an toàn tuyệt đối",
    "Hoàn tiền 100% nếu sau buổi học đầu tiên bé không hào hứng tham gia",
    "Gửi video và ảnh quá trình học tập của con sau mỗi buổi cho phụ huynh"
  ]
},

  'robotics-lop-1-2': {
  "slug": "robotics-lop-1-2",
  "code": "Sata3",
  "name": "Robotics Lớp 1 — 2",
  "academicName": "Ươm Mầm Tài Năng",
  "headline": "Khám phá cơ cấu cơ khí, bản vẽ lắp ráp và lập trình thẻ Screen-Free cho học sinh Lớp 1 — 2",
  "category": "Khối Tiểu học (Lớp 1 — 2)",
  "grade": "Lớp 1 — 2",
  "age": "Lớp 1 — 2",
  "displayAge": "Lớp 1 - 2",
  "duration": "52 buổi (12 tháng) / 4 học phần",
  "classSize": "Tối đa < 8 học viên (kèm sát 1-1)",
  "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
  "rating": 4.96,
  "totalStudents": 415,
  "coverImage": "/images/courses/tieu-hoc-1.png",
  "badge": "TIỂU HỌC NỀN TẢNG",
  "glowColor": "orange",
  "overview": "Chương trình giúp học sinh lớp 1–2 làm quen với cơ khí, bản vẽ kỹ thuật, lập trình thẻ screen-free và tư duy hệ thống thông qua các dự án robot trực quan. Con phát triển vận động tinh, sự tò mò khoa học, tính kiên định và khả năng phân tích sự cố vật lý (debugging cơ khí) trong môi trường thực hành 80%.",
  "hardwareKit": {
    "name": "Hệ sinh thái Alpha A + C & Cảm biến siêu âm",
    "description": "Bộ học cụ chuyên dụng cho học sinh lớp 1-2, kết hợp khối ghép cơ khí chuẩn xác, động cơ giảm tốc và thẻ lệnh lập trình thông minh.",
    "items": [
      "Bộ vi điều khiển Alpha tích hợp khe đọc thẻ lập trình thông minh",
      "Hơn 200+ chi tiết cơ khí: bánh răng truyền động, đòn bẩy, ròng rọc, trục quay",
      "Động cơ DC đa tốc độ & Servo điều khiển góc chính xác",
      "Cảm biến siêu âm đo khoảng cách & còi phát tín hiệu âm thanh",
      "Bộ thẻ lập trình Screen-Free giúp bảo vệ mắt bé tối đa"
    ]
  },
  "skillsGained": [
    {
      "title": "Tư duy hệ thống sơ đồ & Bản vẽ",
      "desc": "Đọc hiểu bản vẽ lắp ráp 3D, phân tích kết cấu cơ khí chính xác",
      "percent": 96
    },
    {
      "title": "Cơ sở cơ giới hóa & Lực truyền động",
      "desc": "Làm chủ bánh răng, ròng rọc, đòn bẩy và truyền động đa tầng",
      "percent": 94
    },
    {
      "title": "Logic lập trình thẻ Screen-Free",
      "desc": "Xây dựng thuật toán tuần tự, rẽ nhánh không cần nhìn màn hình máy tính",
      "percent": 92
    },
    {
      "title": "Debug cơ khí & Xử lý sự cố",
      "desc": "Tự quan sát sai sót, thử nghiệm giải pháp mới và kiên trì hoàn thiện",
      "percent": 95
    }
  ],
  "modules": [
    {
      "id": "HP1",
      "title": "Học phần 1",
      "name": "Cơ Cấu Truyền Động & Mô Hình Alpha Đầu Tiên",
      "number": "Học phần 1",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con làm quen cơ cấu truyền động, lắp ráp theo sơ đồ và điều khiển mô hình Alpha đầu tiên.",
      "achievement": "Con hoàn thành dự án robot cơ bản và trình bày được nguyên lý chuyển động.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Bàn Tay Ma Thuật",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Đấu Trường Con Quay",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Siêu Xe Bứt Phá",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Chiến Xa Tốc Độ",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Vũ Công Robot",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Trở Về Tuổi Thơ",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Kỹ Sư Làm Mát",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Thủy Thủ Tài Ba",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối học phần",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối học phần",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối học phần",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con làm quen cơ cấu truyền động, lắp ráp theo sơ đồ và điều khiển mô hình Alpha đầu tiên.",
        "Con hoàn thành dự án robot cơ bản và trình bày được nguyên lý chuyển động.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP2",
      "title": "Học phần 2",
      "name": "Cơ Cấu Phức Hợp & Mô Phỏng Sinh Học",
      "number": "Học phần 2",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con mở rộng sang cơ cấu nhiều chân, nâng hạ, vẽ tự động và mô phỏng sinh vật.",
      "achievement": "Con biết phân tích lỗi vật lý và cải tiến mô hình sau thử nghiệm.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Chiến Binh Cua Biển",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Cỗ Máy Xúc Cát",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Họa Sĩ Robot",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Chinh Phục Đại Dương",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Chiếc Hộp Giai Điệu",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Vận động viên đạp xe",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Công Viên Kỷ Jura",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Sinh Vật Đột Biến",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối học phần",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối học phần",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối học phần",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con mở rộng sang cơ cấu nhiều chân, nâng hạ, vẽ tự động và mô phỏng sinh vật.",
        "Con biết phân tích lỗi vật lý và cải tiến mô hình sau thử nghiệm.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP3",
      "title": "Học phần 3",
      "name": "Cơ Cấu Nhiều Khớp & Đối Kháng Thể Thao",
      "number": "Học phần 3",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con phát triển tư duy kỹ thuật thông qua dự án có lực, nhịp chuyển động và cơ cấu đối kháng.",
      "achievement": "Con tạo được mô hình có câu chuyện, có cơ chế rõ ràng và biết giải thích giải pháp.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Lực Sĩ Robot",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Hoạt Náo Viên Sôi Động",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Kình Ngư Vượt Sóng",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Đầu Bếp Tài Ba",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Thần Long Trỗi Dậy",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Đấu Sĩ Dũng Mãnh",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Bước Nhảy Kỉ Lục",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Đường Đua Rực Lửa",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối học phần",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối học phần",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối học phần",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con phát triển tư duy kỹ thuật thông qua dự án có lực, nhịp chuyển động và cơ cấu đối kháng.",
        "Con tạo được mô hình có câu chuyện, có cơ chế rõ ràng và biết giải thích giải pháp.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP4",
      "title": "Học phần 4",
      "name": "Tích Hợp Cảm Biến & Đồ Án Kỹ Sư Nhí",
      "number": "Học phần 4",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con tích hợp cơ khí, cảm biến siêu âm và lập trình thẻ để hoàn thiện dự án cuối năm.",
      "achievement": "Con tốt nghiệp Năm 1 với một dự án Robotics vật lý hoàn chỉnh.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Siêu Xe Chuyên Dụng",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Trực Thăng Lốc Xoáy",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Kỹ Sư Cáp Treo",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Máy Bắn Đá",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Chinh Phục Bầu Trời",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Xưởng Cơ Khí",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Cỗ Máy Thời Gian",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Chiến binh bọc thép",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối khóa",
          "type": "Dự án cuối khóa"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối khóa",
          "type": "Demo cuối khóa"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối khoá",
          "type": "Báo cáo cuối khóa"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con tích hợp cơ khí, cảm biến siêu âm và lập trình thẻ để hoàn thiện dự án cuối năm.",
        "Con tốt nghiệp Năm 1 với một dự án Robotics vật lý hoàn chỉnh.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    }
  ],
  "schedule": [
    {
      "shift": "Ca Sáng Thứ 7",
      "days": "Thứ 7 hàng tuần",
      "time": "08:00 — 09:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Chiều Thứ 7",
      "days": "Thứ 7 hàng tuần",
      "time": "14:30 — 16:00",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Sáng Chủ Nhật",
      "days": "Chủ Nhật hàng tuần",
      "time": "09:00 — 10:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Chiều Chủ Nhật",
      "days": "Chủ Nhật hàng tuần",
      "time": "16:00 — 17:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    }
  ],
  "tuition": {
    "originalPrice": "3.600.000đ / học phần",
    "discountedPrice": "2.700.000đ / học phần (Giảm 25%)",
    "offerNote": "Hỗ trợ trả góp học phí 0%. Tặng bộ đồng phục VIAI Kids trị giá 350.000đ",
    "giftValue": "1.200.000đ (Balo kỹ sư nhí + Bộ áo đồng phục + Buổi học thử 1-1)"
  },
  "commitments": [
    "Lớp giới hạn tối đa dưới 8 học viên, giáo viên theo sát từng bé",
    "Hoàn tiền 100% nếu sau buổi học đầu tiên con không hào hứng",
    "Mỗi buổi con đều có 01 sản phẩm robot tự tay chế tạo hoàn chỉnh"
  ]
},

  'robotics-lop-3-4': {
  "slug": "robotics-lop-3-4",
  "code": "Sata4",
  "name": "Robotics Lớp 3 — 4",
  "academicName": "Bứt Phá Giới Hạn",
  "headline": "Làm chủ phần mềm RoboSim, lập trình tự hành và chuyển đổi sang Robot Beta thực chiến cho Lớp 3 — 4",
  "category": "Khối Tiểu học (Lớp 3 — 4)",
  "grade": "Lớp 3 — 4",
  "age": "Lớp 3 — 4",
  "displayAge": "Lớp 3 - 4",
  "duration": "52 buổi (12 tháng) / 4 học phần",
  "classSize": "Tối đa < 8 học viên (kèm sát 1-1)",
  "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
  "rating": 4.96,
  "totalStudents": 317,
  "coverImage": "/images/courses/tieu-hoc-2.png",
  "badge": "TRỌNG ĐIỂM SA BÀN",
  "glowColor": "purple",
  "overview": "Chương trình giúp học sinh lớp 3–4 làm chủ RoboSim, chuyển đổi từ mô phỏng sang robot Beta thực tế và bắt đầu tư duy thi đấu. Con học lập trình tự hành, rẽ nhánh, xử lý cảm biến, đồng bộ virtual-to-physical và rèn bản lĩnh qua mini-games tính điểm trên sa bàn.",
  "hardwareKit": {
    "name": "RoboSim + Beta Set + Saban Thi Đấu",
    "description": "Trang bị phần mềm mô phỏng RoboSim chuẩn giải đấu quốc gia cùng bộ phần cứng robot Beta đa cảm biến dò vạch, tránh vật cản.",
    "items": [
      "Phần mềm mô phỏng vật lý RoboSim bản quyền",
      "Khung xe robot thi đấu hợp kim nhôm siêu nhẹ",
      "Bo mạch chủ Beta Controller tốc độ xử lý cao",
      "Module 4 mắt cảm biến dò vạch Line Tracking độ nhạy cao",
      "Cảm biến khoảng cách siêu âm & cụm bánh xe Mecanum đa hướng"
    ]
  },
  "skillsGained": [
    {
      "title": "Tư duy thuật toán Scratch / Blockly",
      "desc": "Thành thạo cấu trúc rẽ nhánh nếu - thì, vòng lặp và xử lý biến số",
      "percent": 97
    },
    {
      "title": "Làm chủ mô phỏng RoboSim",
      "desc": "Đọc sa bàn, tính toán tọa độ và tối ưu đường đi trên không gian số",
      "percent": 96
    },
    {
      "title": "Kỹ năng Virtual-to-Physical",
      "desc": "Chuyển đổi code từ mô phỏng sang robot thật không sai lệch",
      "percent": 94
    },
    {
      "title": "Bản lĩnh đấu trường & Thi đấu",
      "desc": "Phản xạ nhanh trước tình huống sa bàn và làm việc nhóm hiệu quả",
      "percent": 95
    }
  ],
  "modules": [
    {
      "id": "HP1",
      "title": "Học phần 1",
      "name": "Mô Phỏng RoboSim & Tự Hành Cơ Bản",
      "number": "Học phần 1",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con bước vào thế giới mô phỏng RoboSim, làm quen cảm biến và xe robot di chuyển cơ bản.",
      "achievement": "Con chạy được robot tự hành cơ bản trong môi trường mô phỏng.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Bước vào thế giới ảo",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Đèn tín hiệu giao thông",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Đèn thông minh",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Lựa chọn ngẫu nhiên",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Xe robot di chuyển",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Truyền động bánh răng",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Cảm biến dò line",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Xe robot tự hành",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối học phần",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối học phần",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối học phần",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con bước vào thế giới mô phỏng RoboSim, làm quen cảm biến và xe robot di chuyển cơ bản.",
        "Con chạy được robot tự hành cơ bản trong môi trường mô phỏng.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP2",
      "title": "Học phần 2",
      "name": "Huấn Luyện Sa Bàn & Nhiệm Vụ Thi Đấu",
      "number": "Học phần 2",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con học cách phân tích thể lệ cuộc thi, thiết kế giải pháp và hoàn thành chuỗi nhiệm vụ.",
      "achievement": "Con hoàn thành bài thi sa bàn mô phỏng đầu tiên theo luật thi đấu.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Giới thiệu cuộc thi Robo",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Phân tích thể lệ thi đấu",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Thiết kế lắp ráp robot",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Lập trình nhiệm vụ 1",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Lập trình nhiệm vụ 2",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Lập trình nhiệm vụ 3",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Chạy tổng hợp nhiệm vụ",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Tối ưu chương trình",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối học phần",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối học phần",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối học phần",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con học cách phân tích thể lệ cuộc thi, thiết kế giải pháp và hoàn thành chuỗi nhiệm vụ.",
        "Con hoàn thành bài thi sa bàn mô phỏng đầu tiên theo luật thi đấu.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP3",
      "title": "Học phần 3",
      "name": "Dò Line Chuyên Sâu & Cảm Biến Nâng Cao",
      "number": "Học phần 3",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con đi sâu vào điều khiển, âm thanh, cảnh báo và kỹ thuật dò line mượt mà trên sa bàn.",
      "achievement": "Con làm chủ kỹ thuật dò line nhiều cảm biến và xử lý tình huống giao cắt.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Robot xin chào",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Động cơ xích đu",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Còi báo động nguy hiểm",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Đèn thông minh",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Máy phát nhạc",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Dò line cơ bản",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Dò line nâng cao",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Dò line chuyên sâu",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối học phần",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối học phần",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối học phần",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con đi sâu vào điều khiển, âm thanh, cảnh báo và kỹ thuật dò line mượt mà trên sa bàn.",
        "Con làm chủ kỹ thuật dò line nhiều cảm biến và xử lý tình huống giao cắt.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP4",
      "title": "Học phần 4",
      "name": "Thực Chiến Đấu Trường & Chuyển Đổi Robot Thật",
      "number": "Học phần 4",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con cọ xát với đề thi nâng cao, tối ưu thời gian thực thi và chuyển giao sang robot Beta thật.",
      "achievement": "Con tự tin thi đấu sa bàn và bảo vệ kết quả trước phụ huynh.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Giới thiệu cuộc thi Robo",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Phân tích thể lệ thi đấu",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Thiết kế lắp ráp robot",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Lập trình nhiệm vụ 1",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Lập trình nhiệm vụ 2",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Lập trình nhiệm vụ 3",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Chạy tổng hợp nhiệm vụ",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Tối ưu chương trình",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Kiểm tra lắp ráp robot",
          "type": "Dự án cuối khóa"
        },
        {
          "sessionNumber": 11,
          "title": "Demo thi đấu",
          "type": "Demo cuối khóa"
        },
        {
          "sessionNumber": 12,
          "title": "Thi đấu nội bộ",
          "type": "Báo cáo cuối khóa"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con cọ xát với đề thi nâng cao, tối ưu thời gian thực thi và chuyển giao sang robot Beta thật.",
        "Con tự tin thi đấu sa bàn và bảo vệ kết quả trước phụ huynh.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    }
  ],
  "schedule": [
    {
      "shift": "Ca Sáng Thứ 7",
      "days": "Thứ 7 hàng tuần",
      "time": "08:00 — 09:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Chiều Thứ 7",
      "days": "Thứ 7 hàng tuần",
      "time": "14:30 — 16:00",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Sáng Chủ Nhật",
      "days": "Chủ Nhật hàng tuần",
      "time": "09:00 — 10:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Chiều Chủ Nhật",
      "days": "Chủ Nhật hàng tuần",
      "time": "16:00 — 17:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    }
  ],
  "tuition": {
    "originalPrice": "3.600.000đ / học phần",
    "discountedPrice": "2.700.000đ / học phần (Giảm 25%)",
    "offerNote": "Đóng trọn năm: Tặng ngay 01 bộ Robot Beta mang về nhà",
    "giftValue": "1.500.000đ (Bao gồm tài khoản đề thi RoboSim + Đồng phục + Thi thử)"
  },
  "commitments": [
    "Hoàn tiền 100% nếu sau buổi học đầu tiên con không hào hứng",
    "Đảm bảo con tự tay lập trình được robot chạy sa bàn hoàn chỉnh",
    "Bảo trợ tham gia các cuộc thi Sáng tạo Robotics cấp Thành phố & Miền Bắc"
  ]
},

  'robotics-lop-5': {
  "slug": "robotics-lop-5",
  "code": "Sata5",
  "name": "Robotics Lớp 5",
  "academicName": "Khơi Nguồn Sáng Tạo",
  "headline": "Cơ khí động lực học, truyền động phức hợp & giải pháp Smart Home cho học sinh Lớp 5",
  "category": "Khối Tiểu học (Lớp 5)",
  "grade": "Lớp 5",
  "age": "Lớp 5",
  "displayAge": "Lớp 5",
  "duration": "52 buổi (12 tháng) / 4 học phần",
  "classSize": "Tối đa < 8 học viên (kèm sát 1-1)",
  "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
  "rating": 4.96,
  "totalStudents": 285,
  "coverImage": "/images/courses/tieu-hoc-3.png",
  "badge": "TIỀN TRUNG HỌC ĐỘT PHÁ",
  "glowColor": "orange",
  "overview": "Chương trình đưa học sinh lớp 5 vào cơ khí động lực học, truyền động đa tầng, smart-home và mô hình hóa giải pháp thực tiễn. Con học theo quy trình thiết kế kỹ thuật chuẩn quốc tế (EDP): nghiên cứu đề bài, thiết kế cơ khí, lập trình logic, kiểm thử, cải tiến và hoàn thiện sản phẩm.",
  "hardwareKit": {
    "name": "Hệ sinh thái Storm & Cảm biến thông minh",
    "description": "Bộ học cụ Storm thế hệ mới với các chi tiết động lực học, bánh răng truyền động đa trục, động cơ servo và hệ thống cảm biến môi trường thông minh.",
    "items": [
      "Bộ vi xử lý Storm đa cổng kết nối Bluetooth & USB",
      "Hơn 400+ chi tiết cơ khí kỹ thuật nhôm đúc & nhựa kỹ thuật",
      "Động cơ bước góc quay chính xác cao & Motor giảm tốc công suất lớn",
      "Cảm biến ánh sáng quang trở, cảm biến siêu âm, cảm biến âm thanh",
      "Hệ thống mô-đun rơ-le điều khiển thiết bị thông minh Smart Home"
    ]
  },
  "skillsGained": [
    {
      "title": "Cơ khí động lực học & Truyền động",
      "desc": "Hiểu bản chất mô-men xoắn, tỷ số truyền, giảm xóc và cơ cấu kẹp vật",
      "percent": 96
    },
    {
      "title": "Tự động hóa nhà thông minh",
      "desc": "Ứng dụng cảm biến ánh sáng, âm thanh, radar vào giải quyết đời sống",
      "percent": 95
    },
    {
      "title": "Quy trình thiết kế kỹ thuật (EDP)",
      "desc": "Nắm vững 5 bước: Khám phá - Lên ý tưởng - Chế tạo - Thử nghiệm - Cải tiến",
      "percent": 94
    },
    {
      "title": "Thuyết trình & Bảo vệ giải pháp",
      "desc": "Tự tin trình bày báo cáo kỹ thuật và video demo trước hội đồng",
      "percent": 92
    }
  ],
  "modules": [
    {
      "id": "HP1",
      "title": "Học phần 1",
      "name": "Cơ Khí Động Lực Học & Chuyển Động Ổn Định",
      "number": "Học phần 1",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con khám phá cơ khí động lực học qua các mô hình chuyển động thể thao, quán tính và tay kẹp.",
      "achievement": "Con thiết kế được mô hình cơ khí có chuyển động ổn định và lực đẩy tối ưu.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Máy đập bóng cơ",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Xích đu dao động",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Máy chạy bộ cơ",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Cỗ máy chống đẩy",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Xe đạp quán tính",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Chiếc xe ba bánh",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Cánh tay kẹp vật",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Cỗ máy vung rìu",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối học phần",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối học phần",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối học phần",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con khám phá cơ khí động lực học qua các mô hình chuyển động thể thao, quán tính và tay kẹp.",
        "Con thiết kế được mô hình cơ khí có chuyển động ổn định và lực đẩy tối ưu.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP2",
      "title": "Học phần 2",
      "name": "Năng Lượng, Đo Lường & Giảm Xóc",
      "number": "Học phần 2",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con làm việc với đo lường khoảng cách, trạm lưu trữ điện, giảm xóc và hệ thống truyền tín hiệu.",
      "achievement": "Con biết kiểm thử và cải tiến mô hình theo dữ liệu đo lường thực tế.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Máy ném bóng xa",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Xe đo khoảng cách",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Trạm lưu trữ điện",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Siêu xe đua F1",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Hệ thống giảm xóc",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Cỗ máy bốn chân",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Cổng quét an ninh",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Máy truyền điện báo",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối học phần",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối học phần",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối học phần",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con làm việc với đo lường khoảng cách, trạm lưu trữ điện, giảm xóc và hệ thống truyền tín hiệu.",
        "Con biết kiểm thử và cải tiến mô hình theo dữ liệu đo lường thực tế.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP3",
      "title": "Học phần 3",
      "name": "Tự Động Hóa Smart Home & Phản Xạ Âm Thanh",
      "number": "Học phần 3",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con tích hợp cảm biến, tín hiệu âm thanh và mô hình tự động hóa ngôi nhà thông minh.",
      "achievement": "Con hoàn thiện một mô hình tự động hóa thông minh có điều khiển đa cảm biến.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Bọ cạp phản xạ",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Siêu xe điện đụng",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Xe nhận lệnh âm",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Ốc sên nghe lệnh",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Cửa nhà thông minh",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Máy phát nhạc số",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Rèm cửa tự động",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Xe bám mục tiêu",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối học phần",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối học phần",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối học phần",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con tích hợp cảm biến, tín hiệu âm thanh và mô hình tự động hóa ngôi nhà thông minh.",
        "Con hoàn thiện một mô hình tự động hóa thông minh có điều khiển đa cảm biến.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP4",
      "title": "Học phần 4",
      "name": "Hệ Thống Tự Hành, Radar & Phân Loại",
      "number": "Học phần 4",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con xây dựng giải pháp tự hành tránh chướng ngại, radar tìm sáng và hệ thống phân loại thông minh.",
      "achievement": "Con bảo vệ dự án cuối khóa theo tư duy thiết kế kỹ thuật trước ban giám khảo.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Xe tránh chướng ngại",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Trạm radar",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Đấu sĩ bò tót",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Máy đọc thẻ từ",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Bọ tìm ánh sáng",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Xe bám quỹ đạo",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Hướng dương tìm sáng",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Hệ thống phân loại",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối khóa",
          "type": "Dự án cuối khóa"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối khóa",
          "type": "Demo cuối khóa"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối khoá",
          "type": "Báo cáo cuối khóa"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con xây dựng giải pháp tự hành tránh chướng ngại, radar tìm sáng và hệ thống phân loại thông minh.",
        "Con bảo vệ dự án cuối khóa theo tư duy thiết kế kỹ thuật trước ban giám khảo.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    }
  ],
  "schedule": [
    {
      "shift": "Ca Sáng Thứ 7",
      "days": "Thứ 7 hàng tuần",
      "time": "08:00 — 09:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Chiều Thứ 7",
      "days": "Thứ 7 hàng tuần",
      "time": "14:30 — 16:00",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Sáng Chủ Nhật",
      "days": "Chủ Nhật hàng tuần",
      "time": "09:00 — 10:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Chiều Chủ Nhật",
      "days": "Chủ Nhật hàng tuần",
      "time": "16:00 — 17:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    }
  ],
  "tuition": {
    "originalPrice": "4.000.000đ / học phần",
    "discountedPrice": "3.000.000đ / học phần (Giảm 25%)",
    "offerNote": "Hỗ trợ trả góp 0%. Tặng bộ học cụ bổ trợ trị giá 1.000.000đ",
    "giftValue": "1.600.000đ (Balo cao cấp + Áo đồng phục + Bộ linh kiện thực hành)"
  },
  "commitments": [
    "Lớp giới hạn dưới 8 học viên, cam kết đào tạo thực chất",
    "Hoàn tiền 100% nếu sau buổi học đầu tiên con không hứng thú",
    "Trang bị nền tảng vững vàng để con bứt phá khi lên cấp 2"
  ]
},

  'robotics-lop-6-7': {
  "slug": "robotics-lop-6-7",
  "code": "Sata6",
  "name": "Robotics Lớp 6 — 7",
  "academicName": "Chinh Phục Đấu Trường",
  "headline": "Thuật toán PID, tối ưu hành trình, cơ khí đối kháng & chiến thuật Robocon cho Lớp 6 — 7",
  "category": "Khối Trung học (Lớp 6 — 7)",
  "grade": "Lớp 6 — 7",
  "age": "Lớp 6 — 7",
  "displayAge": "Lớp 6 - 7",
  "duration": "52 buổi (12 tháng) / 4 học phần",
  "classSize": "Tối đa < 8 học viên (kèm sát 1-1)",
  "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
  "rating": 4.96,
  "totalStudents": 284,
  "coverImage": "/images/courses/trung-hoc-1.png",
  "badge": "CHIẾN THUẬT ĐẤU TRƯỜNG",
  "glowColor": "purple",
  "overview": "Chương trình huấn luyện học sinh lớp 6–7 về thuật toán điều khiển PID, tối ưu hóa hành trình, cơ khí đối kháng và xử lý áp lực thi đấu. Con học theo mô hình trại huấn luyện đấu trường: thiết kế giải pháp nhanh, thử nghiệm sớm, sửa lỗi tức thì (live-debugging) và phân tích dữ liệu hiệu suất để giành điểm tuyệt đối.",
  "hardwareKit": {
    "name": "RoboSim + Beta Set Pro + Sa bàn Competition Standard",
    "description": "Phần cứng chuẩn thi đấu chuyên nghiệp với cảm biến quang học kép, động cơ Encoder đọc xung chính xác và sa bàn chuẩn các giải đấu quốc tế.",
    "items": [
      "Phần mềm RoboSim Pro hỗ trợ lập trình khối lệnh & văn bản",
      "Khung gầm nhôm cắt CNC chống rung lắc khi di chuyển tốc độ cao",
      "Động cơ Encoder có phản hồi vòng quay chính xác từng mili-giây",
      "Mảng cảm biến dò vạch phản quang 6 mắt độ phân giải cao",
      "Hệ thống cơ cấu kẹp, nâng, ném bóng điều khiển bằng Servo lực kéo lớn"
    ]
  },
  "skillsGained": [
    {
      "title": "Thuật toán điều khiển PID chuyên sâu",
      "desc": "Hiểu bản chất tỷ lệ, tích phân, vi phân để robot di chuyển mượt mà",
      "percent": 98
    },
    {
      "title": "Thiết kế cơ cấu kẹp gắp & Đối kháng",
      "desc": "Tối ưu trọng tâm, lực kéo và tốc độ nạp - nhả bóng vật phẩm",
      "percent": 95
    },
    {
      "title": "Phân tích dữ liệu & Chiến thuật",
      "desc": "Đo lường thời gian từng chặng, lập chiến lược thi đấu theo đối thủ",
      "percent": 96
    },
    {
      "title": "Bản lĩnh tâm lý & Tinh thần đồng đội",
      "desc": "Rèn luyện khả năng bình tĩnh xử lý sự cố trong thời gian giới hạn",
      "percent": 94
    }
  ],
  "modules": [
    {
      "id": "HP1",
      "title": "Học phần 1",
      "name": "RoboSim Nâng Cao, Truyền Động & Tự Hành",
      "number": "Học phần 1",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con củng cố nền tảng RoboSim, cảm biến đa tầng, truyền động tốc độ cao và tự hành.",
      "achievement": "Con hoàn thành robot tự hành có khả năng phản ứng chính xác theo cảm biến.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Bước vào thế giới ảo",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Đèn tín hiệu giao thông",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Đèn thông minh",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Lựa chọn ngẫu nhiên",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Xe robot di chuyển",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Truyền động bánh răng",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Cảm biến dò line",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Xe robot tự hành",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối học phần",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối học phần",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối học phần",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con củng cố nền tảng RoboSim, cảm biến đa tầng, truyền động tốc độ cao và tự hành.",
        "Con hoàn thành robot tự hành có khả năng phản ứng chính xác theo cảm biến.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP2",
      "title": "Học phần 2",
      "name": "Chiến Thuật Thi Đấu Chuẩn & Tối Ưu Lệnh",
      "number": "Học phần 2",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con luyện chu kỳ thi đấu chuẩn với nhiệm vụ tích hợp, phân bổ thời gian và tối ưu chương trình.",
      "achievement": "Con chạy được bài thi tổng hợp đạt điểm tối đa trong điều kiện thi thử.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Giới thiệu cuộc thi Robo",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Phân tích thể lệ thi đấu",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Thiết kế lắp ráp robot",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Lập trình nhiệm vụ 1",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Lập trình nhiệm vụ 2",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Lập trình nhiệm vụ 3",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Chạy tổng hợp nhiệm vụ",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Tối ưu chương trình",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Kiểm tra lắp ráp robot",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Kiểm tra lập trình",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Thi đấu nội bộ",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con luyện chu kỳ thi đấu chuẩn với nhiệm vụ tích hợp, phân bổ thời gian và tối ưu chương trình.",
        "Con chạy được bài thi tổng hợp đạt điểm tối đa trong điều kiện thi thử.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP3",
      "title": "Học phần 3",
      "name": "Thuật Toán Dò Line Chuyên Sâu (PID)",
      "number": "Học phần 3",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con học giải thuật điều khiển sai số, cảnh báo, nhạc và dò line chuyên sâu bằng công thức PID.",
      "achievement": "Con hiểu cách giảm sai số và ổn định hành trình robot ở tốc độ tối đa.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Robot xin chào",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Động cơ xích đu",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Còi báo động nguy hiểm",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Đèn thông minh",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Máy phát nhạc",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Dò line cơ bản",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Dò line nâng cao",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Dò line chuyên sâu (PID)",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối học phần",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối học phần",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối học phần",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con học giải thuật điều khiển sai số, cảnh báo, nhạc và dò line chuyên sâu bằng công thức PID.",
        "Con hiểu cách giảm sai số và ổn định hành trình robot ở tốc độ tối đa.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP4",
      "title": "Học phần 4",
      "name": "Tổng Duyệt Thi Đấu & Chiến Thuật Đối Kháng",
      "number": "Học phần 4",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con tổng duyệt thi đấu với áp lực thời gian thực tế, giải quyết lỗi thực chiến và chiến thuật dự phòng.",
      "achievement": "Con sẵn sàng tham gia các vòng thi Robotics cấp khu vực với bản lĩnh vững vàng.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Giới thiệu cuộc thi Robo",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Phân tích thể lệ thi đấu",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Thiết kế lắp ráp robot",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Lập trình nhiệm vụ 1",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Lập trình nhiệm vụ 2",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Lập trình nhiệm vụ 3",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Chạy tổng hợp nhiệm vụ",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Tối ưu chương trình",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Kiểm tra lắp ráp robot",
          "type": "Dự án cuối khóa"
        },
        {
          "sessionNumber": 11,
          "title": "Demo thi đấu",
          "type": "Demo cuối khóa"
        },
        {
          "sessionNumber": 12,
          "title": "Thi đấu nội bộ",
          "type": "Báo cáo cuối khóa"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con tổng duyệt thi đấu với áp lực thời gian thực tế, giải quyết lỗi thực chiến và chiến thuật dự phòng.",
        "Con sẵn sàng tham gia các vòng thi Robotics cấp khu vực với bản lĩnh vững vàng.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    }
  ],
  "schedule": [
    {
      "shift": "Ca Sáng Thứ 7",
      "days": "Thứ 7 hàng tuần",
      "time": "08:00 — 09:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Chiều Thứ 7",
      "days": "Thứ 7 hàng tuần",
      "time": "14:30 — 16:00",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Sáng Chủ Nhật",
      "days": "Chủ Nhật hàng tuần",
      "time": "09:00 — 10:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Chiều Chủ Nhật",
      "days": "Chủ Nhật hàng tuần",
      "time": "16:00 — 17:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    }
  ],
  "tuition": {
    "originalPrice": "4.400.000đ / học phần",
    "discountedPrice": "3.300.000đ / học phần (Giảm 25%)",
    "offerNote": "Hỗ trợ trả góp 0%. Miễn phí lệ phí thi đấu các giải vòng loại",
    "giftValue": "1.800.000đ (Kit nâng cấp sa bàn + Tài khoản đề thi nâng cao + Đồng phục)"
  },
  "commitments": [
    "Giáo viên là các huấn luyện viên từng dẫn đội đạt giải Quốc gia",
    "Cam kết học sinh thành thạo giải thuật điều khiển và tự sửa lỗi robot",
    "Đồng hành cùng đội thi đến hết các vòng chung kết khu vực & quốc gia"
  ]
},

  'robotics-ai-lop-8-9': {
  "slug": "robotics-ai-lop-8-9",
  "code": "Sata7",
  "name": "Robotics Lớp 8 — 9",
  "academicName": "Kiến Tạo Tương Lai",
  "headline": "Lập trình Python/C++, Thị giác máy tính AI OpenCV, Xe tự hành AGV & Đồ án KHKT cho Lớp 8 — 9",
  "category": "Khối Trung học (Lớp 8 — 9)",
  "grade": "Lớp 8 — 9",
  "age": "Lớp 8 — 9",
  "displayAge": "Lớp 8 - 9",
  "duration": "52 buổi (12 tháng) / 4 học phần",
  "classSize": "Tối đa < 8 học viên (kèm sát 1-1)",
  "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
  "rating": 4.96,
  "totalStudents": 341,
  "coverImage": "/images/courses/trung-hoc-2.png",
  "badge": "CHUYÊN SÂU AI & AGV",
  "glowColor": "cyan",
  "overview": "Chương trình đỉnh cao đón đầu kỷ nguyên Trí tuệ nhân tạo (AI): Học sinh làm việc với tự động hóa đô thị, logistics, xe tự hành AGV, thị giác máy tính và bảo vệ đồ án Capstone tốt nghiệp. Con đi qua quy trình kỹ sư AI trọn vẹn: thu thập dữ liệu ảnh, training mô hình, triển khai lên thiết bị nhúng và bảo vệ giải pháp công nghệ trước hội đồng.",
  "hardwareKit": {
    "name": "Storm + Mô-đun AI Vision Camera + ESP32 / Python",
    "description": "Hệ thống phần cứng mở cao cấp: Vi điều khiển kép ESP32, Camera AI xử lý ảnh thời gian thực, module mạng không dây IoT và khung gầm công nghiệp.",
    "items": [
      "Bo mạch vi điều khiển ESP32 kép Core Wi-Fi/Bluetooth",
      "Mô-đun Camera AI nhận diện vật thể, khuôn mặt, cử chỉ tay và biển báo",
      "Cảm biến góc nghiêng con quay hồi chuyển 6 trục IMU MPU6050",
      "Động cơ bước độ chính xác cao kết hợp mạch cầu công suất",
      "Thư viện mã nguồn mở Python / C++ và framework xử lý ảnh OpenCV"
    ]
  },
  "skillsGained": [
    {
      "title": "Lập trình văn bản Python & C++",
      "desc": "Viết mã nguồn chuyên nghiệp, xử lý logic phức tạp và ngắt timer",
      "percent": 98
    },
    {
      "title": "Thị giác máy tính AI (Computer Vision)",
      "desc": "Xử lý video camera, nhận diện màu sắc, mã QR, biển báo và khuôn mặt",
      "percent": 96
    },
    {
      "title": "Xe tự hành AGV & Logistics thông minh",
      "desc": "Mô phỏng chuỗi vận chuyển tự động hóa trong nhà kho hiện đại",
      "percent": 95
    },
    {
      "title": "Đồ án nghiên cứu KHKT Capstone",
      "desc": "Xây dựng bài báo cáo khoa học và kỹ năng thuyết trình trước hội đồng",
      "percent": 94
    }
  ],
  "modules": [
    {
      "id": "HP1",
      "title": "Học phần 1",
      "name": "Tự Động Hóa Đô Thị & Xe Tự Hành Cơ Bản",
      "number": "Học phần 1",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con làm việc với tự động hóa đô thị, đỗ xe, nhận diện và tự hành cơ bản.",
      "achievement": "Con hoàn thành mô hình đô thị thông minh có robot tự hành.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Đèn giao thông số",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Máy cưa tự động",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Robot hút bụi",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Cối xay gió xoay",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Hệ thống đỗ xe",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Nhận diện giảm tốc",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Tự hành góc vuông",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Xe cảnh sát tuần",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối học phần",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối học phần",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối học phần",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con làm việc với tự động hóa đô thị, đỗ xe, nhận diện và tự hành cơ bản.",
        "Con hoàn thành mô hình đô thị thông minh có robot tự hành.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP2",
      "title": "Học phần 2",
      "name": "Mô Phỏng Logistics & Xe Tự Hành AGV",
      "number": "Học phần 2",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con mô phỏng logistics, AGV, phân loại sản phẩm và vận hành hệ thống bán hàng.",
      "achievement": "Con tạo được chuỗi vận hành logistics tự động ở quy mô mô hình.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Máy bay chiến đấu",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Hệ thống đóng gói",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Phân loại sản phẩm",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Xe nâng hàng hóa",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Tự hành chở hàng",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Tàu chở hàng hóa",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Máy bán hàng số",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Siêu thị thông minh",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối học phần",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối học phần",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối học phần",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con mô phỏng logistics, AGV, phân loại sản phẩm và vận hành hệ thống bán hàng.",
        "Con tạo được chuỗi vận hành logistics tự động ở quy mô mô hình.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP3",
      "title": "Học phần 3",
      "name": "Thuật Toán Định Vị & Kiểm Soát Gia Tốc",
      "number": "Học phần 3",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con tối ưu thuật toán tự hành qua hiệu chuẩn dữ liệu, định vị và kiểm soát gia tốc.",
      "achievement": "Con biết tinh chỉnh robot để chạy ổn định trong điều kiện sai số thực tế.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "Bám line kép chuẩn",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "Hiệu chuẩn dữ liệu",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "Căn chỉnh góc xoay",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "Định vị khoảng cách",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "Kiểm soát gia tốc",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "Chống trôi quỹ đạo",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "Tự hành đường thẳng",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "Chống kẹt động cơ",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối học phần",
          "type": "Dự án cuối học phần"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối học phần",
          "type": "Demo cuối học phần"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối học phần",
          "type": "Báo cáo cuối học phần"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con tối ưu thuật toán tự hành qua hiệu chuẩn dữ liệu, định vị và kiểm soát gia tốc.",
        "Con biết tinh chỉnh robot để chạy ổn định trong điều kiện sai số thực tế.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    },
    {
      "id": "HP4",
      "title": "Học phần 4",
      "name": "AI Thị Giác Máy Tính & Bảo Vệ Capstone",
      "number": "Học phần 4",
      "duration": "13 buổi - 90 phút/buổi",
      "sessionsCount": 13,
      "hoursCount": 19.5,
      "projectsCount": 10,
      "description": "Con triển khai AI thị giác máy tính vào robot và bảo vệ capstone cuối khóa.",
      "achievement": "Con bảo vệ dự án AI Robotics trước hội đồng chuyên môn.",
      "lessons": [
        {
          "sessionNumber": 1,
          "title": "AI ra lệnh robot",
          "type": "Dự án"
        },
        {
          "sessionNumber": 2,
          "title": "AI nhận diện màu",
          "type": "Dự án"
        },
        {
          "sessionNumber": 3,
          "title": "AI robot tự hành",
          "type": "Dự án"
        },
        {
          "sessionNumber": 4,
          "title": "AI cử chỉ tay",
          "type": "Dự án"
        },
        {
          "sessionNumber": 5,
          "title": "Ôn tập kiến thức",
          "type": "Ôn tập"
        },
        {
          "sessionNumber": 6,
          "title": "AI đọc biển báo",
          "type": "Dự án"
        },
        {
          "sessionNumber": 7,
          "title": "AI quét mã QR",
          "type": "Dự án"
        },
        {
          "sessionNumber": 8,
          "title": "AI nhận diện mặt",
          "type": "Dự án"
        },
        {
          "sessionNumber": 9,
          "title": "AI nhận diện bóng",
          "type": "Dự án"
        },
        {
          "sessionNumber": 10,
          "title": "Dự án cuối khoá",
          "type": "Dự án cuối khóa"
        },
        {
          "sessionNumber": 11,
          "title": "Demo cuối khoá",
          "type": "Demo cuối khóa"
        },
        {
          "sessionNumber": 12,
          "title": "Báo cáo cuối khoá",
          "type": "Báo cáo cuối khóa"
        },
        {
          "sessionNumber": 13,
          "title": "Phát triển lập trình",
          "type": "Phát triển lập trình"
        }
      ],
      "outcomes": [
        "Con triển khai AI thị giác máy tính vào robot và bảo vệ capstone cuối khóa.",
        "Con bảo vệ dự án AI Robotics trước hội đồng chuyên môn.",
        "Hoàn thành 10 dự án robot thực tế và báo cáo kỹ thuật",
        "Buổi 13: Phát triển lập trình nâng cao và mở rộng tư duy thuật toán"
      ]
    }
  ],
  "schedule": [
    {
      "shift": "Ca Sáng Thứ 7",
      "days": "Thứ 7 hàng tuần",
      "time": "08:00 — 09:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Chiều Thứ 7",
      "days": "Thứ 7 hàng tuần",
      "time": "14:30 — 16:00",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Sáng Chủ Nhật",
      "days": "Chủ Nhật hàng tuần",
      "time": "09:00 — 10:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    },
    {
      "shift": "Ca Chiều Chủ Nhật",
      "days": "Chủ Nhật hàng tuần",
      "time": "16:00 — 17:30",
      "branch": "Cơ sở Hải Phòng / Hưng Yên / Ninh Bình"
    }
  ],
  "tuition": {
    "originalPrice": "4.800.000đ / học phần",
    "discountedPrice": "3.600.000đ / học phần (Giảm 25%)",
    "offerNote": "Hỗ trợ trả góp 0%. Tặng bộ kit AI Vision Camera trị giá 1.800.000đ",
    "giftValue": "2.200.000đ (Kit AI Camera + Khóa học lập trình Python nền tảng + Đồng phục)"
  },
  "commitments": [
    "Lớp giới hạn tối đa dưới 8 học viên chất lượng cao",
    "Cam kết học sinh tự tay viết code Python/C++ và hiểu rõ giải thuật AI",
    "Bảo trợ hướng dẫn làm hồ sơ tham dự Cuộc thi Sáng tạo KHKT cấp Thành phố"
  ]
},

};

// Danh sách các slug khóa học chính thức theo thứ tự chuẩn
export const PRIMARY_COURSE_SLUGS = [
  'robotics-mam-non',
  'robotics-lop-1-2',
  'robotics-lop-3-4',
  'robotics-lop-5',
  'robotics-lop-6-7',
  'robotics-ai-lop-8-9'
] as const;

// Phân loại khóa học theo cấp bậc học
export const COURSE_CATEGORIES = [
  { id: 'all', label: 'Tất cả các khối' },
  { id: 'mam-non', label: 'Khối Mầm Non (4 — 6 tuổi)' },
  { id: 'tieu-hoc', label: 'Khối Tiểu Học (Lớp 1 — 5)' },
  { id: 'trung-hoc', label: 'Khối Trung Học (Lớp 6 — 9)' }
] as const;

// Backwards compatibility aliases
coursesData['lap-trinh-robot'] = coursesData['robotics-mam-non'];
coursesData['robotics-tieu-hoc'] = coursesData['robotics-lop-3-4'];
coursesData['luyen-thi-robosim'] = coursesData['robotics-lop-3-4'];
coursesData['robotics-trung-hoc'] = coursesData['robotics-lop-6-7'];
coursesData['ai-iot-robotics'] = coursesData['robotics-ai-lop-8-9'];
