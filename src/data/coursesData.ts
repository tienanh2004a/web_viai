export interface CourseLesson {
  sessionNumber: number;
  title: string;
  type: string;
}

export interface CourseModuleTopic {
  title: string;
  lessons: string[];
}

export interface CourseModule {
  id: string; // 'HP1', 'HP2', 'HP3'
  title: string; // 'Học phần 1'
  name: string; // Tên học phần
  number: string; // Backwards compatible
  duration: string; // '12 buổi - 90 phút/buổi'
  sessionsCount: number; // 12 hoặc 14
  hoursCount: number; // 18 hoặc 21
  projectsCount: number; // 9 hoặc 11
  description: string;
  achievement: string;
  topics?: CourseModuleTopic[];
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

export interface GradeLevel {
  id: 'mam-non' | 'tieu-hoc' | 'trung-hoc';
  slug: string;
  name: string;
  shortName: string;
  academicName: string;
  badge: string;
  tagline: string;
  headline: string;
  ageRange: string;
  displayAge: string;
  coverImage: string;
  hardwareKitSummary: string;
  description: string;
  detailedOverview: string;
  highlights: {
    title: string;
    desc: string;
  }[];
  childCourseSlugs: string[];
  learningOutcomes: string[];
  methodology: string;
}

export const coursesData: Record<string, CourseDetail> = {
  "mam-non-co-ban": {
    "slug": "mam-non-co-ban",
    "code": "Sata-Kids-Basic",
    "name": "Robotics Mầm Non — Lớp Cơ Bản",
    "academicName": "Khám Phá & Lắp Ghép Cơ Bản",
    "headline": "Khám phá thế giới hình khối, máy công cụ và nhen nhóm tư duy logic đầu đời cho trẻ",
    "category": "Mầm non",
    "grade": "Mầm non",
    "age": "Mầm non",
    "displayAge": "Mầm non",
    "duration": "36 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 4.96,
    "totalStudents": 420,
    "coverImage": "/images/courses/mam-non.png",
    "badge": "LỚP CƠ BẢN",
    "glowColor": "orange",
    "overview": "Chương trình Lớp Cơ Bản được thiết kế đặc thù cho trẻ mầm non theo phương pháp 'Vừa học vừa chơi' (Play-based Learning). Bé làm quen với các chi tiết khối ghép an toàn, bánh răng cơ khí, chế tạo các máy công cụ quen thuộc như cối xay gió, máy trộn và xe trượt vui nhộn.",
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
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "4.200.000đ",
      "discountedPrice": "3.200.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & bộ học cụ thực hành độc lập",
      "giftValue": "Trị giá 500.000đ"
    },
    "commitments": [
      "100% trẻ biết tự tay lắp ráp và vận hành mô hình robot sau mỗi buổi học.",
      "Môi trường an toàn tuyệt đối, trang thiết bị bo góc chuẩn châu Âu.",
      "Sĩ số lớp nhỏ dưới 10 học viên, giáo viên kèm sát 1-1 tận tình.",
      "Báo cáo hình ảnh & video sản phẩm của con gửi phụ huynh sau từng buổi học."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Khám Phá Thế Giới & Máy Công Cụ Đầu Tiên",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Bé làm quen các khối ghép cơ bản, khám phá các chuyển động xung quanh và chế tạo các máy công cụ đầu tiên.",
        "achievement": "Bé nhận biết màu sắc, hình khối, lắp ghép thuần thục và tự tin thuyết trình sản phẩm.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Chào Weir",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Tháp truyền hình Neon",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Nhà là ca sĩ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Người hâm mộ thể thao",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập kiến thức",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Buzz, Buzz, Chú ong nhỏ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Con thuyền của sa mạc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Wow - Khủng long kia",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Cối xay gió tự động",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Máy trộn cầm tay rực rỡ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 11,
            "title": "Thuyết trình demo cho giáo viên",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình về sản phẩm",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Công Viên Trò Chơi & Mùa Xuân Rực Rỡ",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Khám phá các phương tiện di chuyển trong công viên và các mô hình cơ khí mô phỏng thiên nhiên bốn mùa.",
        "achievement": "Lắp ráp thành thạo mô hình bánh xe lăn, đệm khí và hiểu nguyên lý hoạt động của thiết bị gia đình.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Tàu đệm khí",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Bánh xe lăn",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Tàu lượn",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Công viên trò chơi",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập kiến thức",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Hoa nở",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Che ô trong mưa xuân",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Đi chơi trong mùa xuân",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Thiên thần nhỏ báo thức",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Máy hút bụi của bé",
            "type": "Dự án"
          },
          {
            "sessionNumber": 11,
            "title": "Thuyết trình demo cho giáo viên",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình về sản phẩm",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP3",
        "title": "Học phần 3",
        "name": "Thế Giới Động Vật & Thị Trấn Hạnh Phúc",
        "number": "Học phần 3",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Khám phá các chuyển động uốn lượn, mô phỏng hành vi động vật và xây dựng mô hình thị trấn đáng yêu.",
        "achievement": "Lắp ráp mô hình chuyển động phức tạp, phối hợp màu sắc và nhịp điệu âm thanh.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Nóng, nóng, quạt máy của bé",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Rắn, rắn rình rập",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Voi vòi voi voi",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Chú chim biết hát",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập kiến thức",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Sở thú diệu kì",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Bốn mùa của cây",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Ngôi nhà của bé",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Nhịp cầu âm nhạc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Thị trấn vui vẻ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 11,
            "title": "Thuyết trình demo cho giáo viên",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình về sản phẩm",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 3.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "mam-non-nang-cao": {
    "slug": "mam-non-nang-cao",
    "code": "Sata-Kids-Adv",
    "name": "Robotics Mầm Non — Lớp Nâng Cao",
    "academicName": "Cơ Cấu Thông Minh & Sáng Tạo",
    "headline": "Nâng cấp cơ cấu cơ học, cánh tay robot, phương tiện giao thông và thiết bị thông minh cho bé",
    "category": "Mầm non",
    "grade": "Mầm non",
    "age": "Mầm non",
    "displayAge": "Mầm non",
    "duration": "36 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 4.98,
    "totalStudents": 350,
    "coverImage": "/images/courses/mam-non.png",
    "badge": "LỚP NÂNG CAO",
    "glowColor": "orange",
    "overview": "Chương trình Lớp Nâng Cao mở rộng tư duy chế tạo cho trẻ mầm non. Bé được tự tay lắp ráp các mô hình phức tạp hơn: cánh tay robot, robot phục vụ, xe đẩy nâng hàng, trực thăng và hệ thống truyền động đa trục, rèn luyện tư duy không gian và tính kiên trì.",
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
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "4.200.000đ",
      "discountedPrice": "3.200.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & bộ học cụ thực hành độc lập",
      "giftValue": "Trị giá 500.000đ"
    },
    "commitments": [
      "100% trẻ biết tự tay lắp ráp và vận hành mô hình robot sau mỗi buổi học.",
      "Môi trường an toàn tuyệt đối, trang thiết bị bo góc chuẩn châu Âu.",
      "Sĩ số lớp nhỏ dưới 10 học viên, giáo viên kèm sát 1-1 tận tình.",
      "Báo cáo hình ảnh & video sản phẩm của con gửi phụ huynh sau từng buổi học."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Thể Thao & Siêu Thị Thông Minh",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Nâng cấp cơ cấu cơ học với bánh răng tỷ số truyền, động cơ điều khiển hai chiều và cảm biến thông minh.",
        "achievement": "Bé hiểu nguyên lý đòn bẩy tỷ số truyền, lực ma sát và thiết bị cảm biến tự động.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Đánh bóng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Đua xe",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Chèo thuyền",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Cánh cửa thông minh",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập kiến thức",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Xe đẩy hàng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Xe nâng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Chú cá robot",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Xe tay ga",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Máy chụp ảnh",
            "type": "Dự án"
          },
          {
            "sessionNumber": 11,
            "title": "Thuyết trình demo cho giáo viên",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình về sản phẩm",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Kỹ Sư Robot & Nhà Hàng Thông Minh",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Lắp ráp các mô hình cánh tay robot, robot phục vụ và tự động hóa phục vụ nhà hàng, dịch vụ.",
        "achievement": "Làm quen tư duy robot công nghiệp, cánh tay gắp thả và cơ cấu xoay đa chiều.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Xe trẻ em",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Robot cánh tay",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Robot phục vụ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Robot kỹ thuật",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập kiến thức",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Robot đối kháng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Máy ép trái cây",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Ghế xoay",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Ghế thông minh",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Xe buýt tham quan",
            "type": "Dự án"
          },
          {
            "sessionNumber": 11,
            "title": "Thuyết trình demo cho giáo viên",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình về sản phẩm",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP3",
        "title": "Học phần 3",
        "name": "Âm Nhạc Vui Nhộn & Phương Tiện Giao Thông",
        "number": "Học phần 3",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Kết hợp nhịp điệu chuyển động cơ khí, âm nhạc và mô hình phương tiện hàng không, đường thủy.",
        "achievement": "Lắp ráp mô hình chuyển động cánh quạt trực thăng, tàu biển và hệ thống cơ khí nhịp điệu.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Tàu cướp biển",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Đu quay khổng lồ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Tay trống cừ khôi",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Cối xoay gió mini",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập kiến thức",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Âm nhạc vui nhộn",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Con thuyền",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Xe ba bánh",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Máy bay cánh bằng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Máy bay trực thăng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 11,
            "title": "Thuyết trình demo cho giáo viên",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình về sản phẩm",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 3.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "mam-non-chuyen-sau": {
    "slug": "mam-non-chuyen-sau",
    "code": "Sata-Kids-Pro",
    "name": "Robotics Mầm Non — Lớp Chuyên Sâu",
    "academicName": "Chế Tạo Phức Hợp & Bản Lĩnh Tương Lai",
    "headline": "Chế tạo xe công trình, thám hiểm vũ trụ và thành phố tương lai chuẩn bị nền tảng vững chắc lên Tiểu Học",
    "category": "Mầm non",
    "grade": "Mầm non",
    "age": "Mầm non",
    "displayAge": "Mầm non",
    "duration": "36 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 4.99,
    "totalStudents": 280,
    "coverImage": "/images/courses/mam-non.png",
    "badge": "LỚP CHUYÊN SÂU",
    "glowColor": "orange",
    "overview": "Lớp Chuyên Sâu là chặng về đích hoàn hảo của cấp Mầm Non. Trẻ được thử thách với các đồ án kỹ sư nhí quy mô: xe lu, xe ủi, trạm vũ trụ không gian, thành phố tương lai. Trẻ được rèn luyện kỹ năng thuyết trình tự tin trước đám đông và sẵn sàng tự lập khi bước vào Lớp 1.",
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
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "4.200.000đ",
      "discountedPrice": "3.200.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & bộ học cụ thực hành độc lập",
      "giftValue": "Trị giá 500.000đ"
    },
    "commitments": [
      "100% trẻ biết tự tay lắp ráp và vận hành mô hình robot sau mỗi buổi học.",
      "Môi trường an toàn tuyệt đối, trang thiết bị bo góc chuẩn châu Âu.",
      "Sĩ số lớp nhỏ dưới 10 học viên, giáo viên kèm sát 1-1 tận tình.",
      "Báo cáo hình ảnh & video sản phẩm của con gửi phụ huynh sau từng buổi học."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Đầu Bếp Nhí & Xe Công Trình Hiện Đại",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Chế tạo các cỗ máy công nghiệp hiện đại: máy nghiền, cần cẩu, xe lu, xe ủi với cơ cấu trợ lực và truyền động phức hợp.",
        "achievement": "Làm chủ các cơ cấu cơ khí nặng, hệ thống ròng rọc kép và thang nâng chuyển động thẳng đứng.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Máy đánh trứng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Máy xay đậu",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Máy nghiền",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Robot lăn",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập kiến thức",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Cần cẩu mini",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Xe lu",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Xe ủi",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Đài phun nước",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Thang máy",
            "type": "Dự án"
          },
          {
            "sessionNumber": 11,
            "title": "Thuyết trình demo cho giáo viên",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình về sản phẩm",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Vũ Trụ Kì Diệu & Phương Tiện Quân Sự",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Bước chân vào khám phá không gian và phương tiện kỹ thuật quân sự: trạm vũ trụ, xe tăng, pháo binh.",
        "achievement": "Lắp ráp mô hình không gian 3D phức hợp, bệ phóng cơ học và phương tiện bánh xích.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Rào chắn công trình",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Người ngoài hành tinh",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Động vật không gian",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Tàu vũ trụ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập kiến thức",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Căn cứ ngoài hành tinh",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Xe thang",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Máy bay vận tải",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Xe tăng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Pháo binh",
            "type": "Dự án"
          },
          {
            "sessionNumber": 11,
            "title": "Thuyết trình demo cho giáo viên",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình về sản phẩm",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP3",
        "title": "Học phần 3",
        "name": "Trang Trại Công Nghệ & Thành Phố Tương Lai",
        "number": "Học phần 3",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Tích hợp toàn diện kiến thức chế tạo robot: máy bay không người lái, xe bay, ngôi nhà thông minh và robot vệ sinh đô thị.",
        "achievement": "Bé hoàn thành đồ án tốt nghiệp tổng thể cấp Mầm Non, sẵn sàng bước vào chương trình Robotics Tiểu Học.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Máy giặt",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Máy bay không người lái",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Robot quét dọn",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Câu chuyện chú ngựa qua sông",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập kiến thức",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Cáo mất đuôi",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Xe bay",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Ngôi nhà thông minh",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "AFC",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Robot vệ sinh",
            "type": "Dự án"
          },
          {
            "sessionNumber": 11,
            "title": "Thuyết trình demo cho giáo viên",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình về sản phẩm",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 3.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "robotics-mam-non": {
    "slug": "mam-non-co-ban",
    "code": "Sata-Kids-Basic",
    "name": "Robotics Mầm Non — Lớp Cơ Bản",
    "academicName": "Khám Phá & Lắp Ghép Cơ Bản",
    "headline": "Khám phá thế giới hình khối, máy công cụ và nhen nhóm tư duy logic đầu đời cho trẻ",
    "category": "Mầm non",
    "grade": "Mầm non",
    "age": "Mầm non",
    "displayAge": "Mầm non",
    "duration": "36 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 4.96,
    "totalStudents": 420,
    "coverImage": "/images/courses/mam-non.png",
    "badge": "LỚP CƠ BẢN",
    "glowColor": "orange",
    "overview": "Chương trình Lớp Cơ Bản được thiết kế đặc thù cho trẻ mầm non theo phương pháp 'Vừa học vừa chơi' (Play-based Learning). Bé làm quen với các chi tiết khối ghép an toàn, bánh răng cơ khí, chế tạo các máy công cụ quen thuộc như cối xay gió, máy trộn và xe trượt vui nhộn.",
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
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "4.200.000đ",
      "discountedPrice": "3.200.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & bộ học cụ thực hành độc lập",
      "giftValue": "Trị giá 500.000đ"
    },
    "commitments": [
      "100% trẻ biết tự tay lắp ráp và vận hành mô hình robot sau mỗi buổi học.",
      "Môi trường an toàn tuyệt đối, trang thiết bị bo góc chuẩn châu Âu.",
      "Sĩ số lớp nhỏ dưới 10 học viên, giáo viên kèm sát 1-1 tận tình.",
      "Báo cáo hình ảnh & video sản phẩm của con gửi phụ huynh sau từng buổi học."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Khám Phá Thế Giới & Máy Công Cụ Đầu Tiên",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Bé làm quen các khối ghép cơ bản, khám phá các chuyển động xung quanh và chế tạo các máy công cụ đầu tiên.",
        "achievement": "Bé nhận biết màu sắc, hình khối, lắp ghép thuần thục và tự tin thuyết trình sản phẩm.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Chào Weir",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Tháp truyền hình Neon",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Nhà là ca sĩ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Người hâm mộ thể thao",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập kiến thức",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Buzz, Buzz, Chú ong nhỏ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Con thuyền của sa mạc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Wow - Khủng long kia",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Cối xay gió tự động",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Máy trộn cầm tay rực rỡ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 11,
            "title": "Thuyết trình demo cho giáo viên",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình về sản phẩm",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Công Viên Trò Chơi & Mùa Xuân Rực Rỡ",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Khám phá các phương tiện di chuyển trong công viên và các mô hình cơ khí mô phỏng thiên nhiên bốn mùa.",
        "achievement": "Lắp ráp thành thạo mô hình bánh xe lăn, đệm khí và hiểu nguyên lý hoạt động của thiết bị gia đình.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Tàu đệm khí",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Bánh xe lăn",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Tàu lượn",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Công viên trò chơi",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập kiến thức",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Hoa nở",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Che ô trong mưa xuân",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Đi chơi trong mùa xuân",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Thiên thần nhỏ báo thức",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Máy hút bụi của bé",
            "type": "Dự án"
          },
          {
            "sessionNumber": 11,
            "title": "Thuyết trình demo cho giáo viên",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình về sản phẩm",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP3",
        "title": "Học phần 3",
        "name": "Thế Giới Động Vật & Thị Trấn Hạnh Phúc",
        "number": "Học phần 3",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Khám phá các chuyển động uốn lượn, mô phỏng hành vi động vật và xây dựng mô hình thị trấn đáng yêu.",
        "achievement": "Lắp ráp mô hình chuyển động phức tạp, phối hợp màu sắc và nhịp điệu âm thanh.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Nóng, nóng, quạt máy của bé",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Rắn, rắn rình rập",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Voi vòi voi voi",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Chú chim biết hát",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập kiến thức",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Sở thú diệu kì",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Bốn mùa của cây",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Ngôi nhà của bé",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Nhịp cầu âm nhạc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Thị trấn vui vẻ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 11,
            "title": "Thuyết trình demo cho giáo viên",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình về sản phẩm",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 3.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "tieu-hoc-bat-dau": {
    "slug": "tieu-hoc-bat-dau",
    "code": "Sata-Primary-Basic",
    "name": "Robotics Tiểu Học — Khóa Bắt Đầu",
    "academicName": "Khởi Đầu Đam Mê & Cơ Cấu Cơ Bản",
    "headline": "Làm quen với bộ học cụ quạt máy, con quay, đua thuyền và các mô hình thông minh đầu tiên",
    "category": "Tiểu học",
    "grade": "Tiểu học",
    "age": "Lớp 1 — 5",
    "displayAge": "6 — 11 tuổi",
    "duration": "24 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 4.96,
    "totalStudents": 380,
    "coverImage": "/images/courses/tieu-hoc-1.png",
    "badge": "KHÓA BẮT ĐẦU",
    "glowColor": "cyan",
    "overview": "Chương trình Khóa Bắt Đầu dành cho học sinh Tiểu học bước đầu làm quen với thế giới chế tạo robotics. Học sinh được học qua các dự án vật lý thực tế: quạt máy, con quay, xe đua F1, ngôi nhà thông minh và trực thăng.",
    "hardwareKit": {
      "name": "Hệ Sinh Thái Alpha + Beta & Cảm Biến Đa Tầng Chuẩn Quốc Tế",
      "description": "Bộ linh kiện cơ khí chính xác, động cơ giảm tốc, servo, vi điều khiển Alpha/Beta và hệ thống cảm biến thông minh.",
      "items": [
        "Hơn 300+ chi tiết lắp ráp kỹ thuật: bánh răng, ròng rọc, trục truyền động, thanh nối",
        "Bộ vi điều khiển thông minh tích hợp khe nạp chương trình và kết nối không dây",
        "Động cơ DC đa tốc độ kèm Servo điều khiển góc quay chính xác",
        "Cảm biến siêu âm sóng âm, cảm biến màu sắc, cảm biến chạm và còi báo",
        "Phần mềm mô phỏng 3D RoboSim chuẩn thi đấu sáng tạo thanh thiếu niên"
      ]
    },
    "skillsGained": [
      {
        "title": "Tư duy thuật toán & Lập trình khối",
        "desc": "Làm chủ thuật toán tuần tự, rẽ nhánh nếu - thì và vòng lặp",
        "percent": 96
      },
      {
        "title": "Cơ cấu cơ giới & Bản vẽ kỹ thuật",
        "desc": "Đọc hiểu bản vẽ lắp ráp 3D, phân tích kết cấu cơ khí chính xác",
        "percent": 94
      },
      {
        "title": "Tư duy Virtual-to-Physical 3D",
        "desc": "Mô phỏng 3D trên RoboSim trước khi chuyển giao mã nguồn sang robot thực tế",
        "percent": 92
      },
      {
        "title": "Debug cơ khí & Thuyết trình sản phẩm",
        "desc": "Tự quan sát sai sót, thử nghiệm giải pháp mới và bảo vệ đồ án",
        "percent": 95
      }
    ],
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "4.800.000đ",
      "discountedPrice": "3.600.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & bộ học cụ thực hành độc lập",
      "giftValue": "Trị giá 600.000đ"
    },
    "commitments": [
      "100% học sinh tự tay lắp ráp và lập trình hoàn thiện robot thật sau mỗi buổi.",
      "Thực hành mô phỏng 3D trên RoboSim chuẩn đấu trường quốc tế.",
      "Sĩ số lớp nhỏ dưới 10 học viên, huấn luyện viên kèm sát 1-1.",
      "Báo cáo tiến độ học tập chi tiết và video thuyết trình gửi phụ huynh sau từng học phần."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Khám Phá Học Cụ & Chế Tạo Cơ Bản",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Làm quen bộ học cụ, khám phá cơ cấu truyền động quạt máy, con quay, xe kéo và máy bắn đá.",
        "achievement": "Tự tay lắp ráp các mô hình cơ bản và thuyết trình sản phẩm tự tin.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Làm quen bộ học cụ - Quạt máy",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Con quay thần tốc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Đua thuyền",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Robot đi bộ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Robot họa sĩ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Robot dancing",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Robot kéo xe",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Máy bắn đá",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Vận Tốc, Cảm Biến & Nhà Thông Minh",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Tìm hiểu các yếu tố ảnh hưởng vận tốc, lực cân bằng, cảm biến sóng âm, cánh tay robot và đèn giao thông.",
        "achievement": "Làm chủ nguyên lý cảm biến và hoàn thành đồ án thuyết trình cuối khóa.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Các yếu tố ảnh hưởng vận tốc- Xe đua F1",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Lực cân bằng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Lực đàn hồi- Cây nỏ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Music Box",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Ngôi nhà thông minh- Cảm biến sóng âm",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Cánh tay robot",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Đèn giao thông",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Máy bay trực thăng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "tieu-hoc-intren": {
    "slug": "tieu-hoc-intren",
    "code": "Sata-Primary-Intern",
    "name": "Robotics Tiểu Học — Khóa Intren",
    "academicName": "Mô Phỏng Động Vật & Năng Lượng Tái Tạo",
    "headline": "Chế tạo các robot mô phỏng sinh vật thông minh và phương tiện năng lượng xanh",
    "category": "Tiểu học",
    "grade": "Tiểu học",
    "age": "Lớp 1 — 5",
    "displayAge": "6 — 11 tuổi",
    "duration": "24 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 4.97,
    "totalStudents": 320,
    "coverImage": "/images/courses/tieu-hoc-2.png",
    "badge": "KHÓA INTREN",
    "glowColor": "cyan",
    "overview": "Khóa Intren giúp học sinh mở rộng tư duy chế tạo mô phỏng thế giới tự nhiên và các giải pháp môi trường hiện đại: robot thỏ, voi, chim, khỉ, hệ thống phân loại rác, xe năng lượng và tàu tuần dương.",
    "hardwareKit": {
      "name": "Hệ Sinh Thái Alpha + Beta & Cảm Biến Đa Tầng Chuẩn Quốc Tế",
      "description": "Bộ linh kiện cơ khí chính xác, động cơ giảm tốc, servo, vi điều khiển Alpha/Beta và hệ thống cảm biến thông minh.",
      "items": [
        "Hơn 300+ chi tiết lắp ráp kỹ thuật: bánh răng, ròng rọc, trục truyền động, thanh nối",
        "Bộ vi điều khiển thông minh tích hợp khe nạp chương trình và kết nối không dây",
        "Động cơ DC đa tốc độ kèm Servo điều khiển góc quay chính xác",
        "Cảm biến siêu âm sóng âm, cảm biến màu sắc, cảm biến chạm và còi báo",
        "Phần mềm mô phỏng 3D RoboSim chuẩn thi đấu sáng tạo thanh thiếu niên"
      ]
    },
    "skillsGained": [
      {
        "title": "Tư duy thuật toán & Lập trình khối",
        "desc": "Làm chủ thuật toán tuần tự, rẽ nhánh nếu - thì và vòng lặp",
        "percent": 96
      },
      {
        "title": "Cơ cấu cơ giới & Bản vẽ kỹ thuật",
        "desc": "Đọc hiểu bản vẽ lắp ráp 3D, phân tích kết cấu cơ khí chính xác",
        "percent": 94
      },
      {
        "title": "Tư duy Virtual-to-Physical 3D",
        "desc": "Mô phỏng 3D trên RoboSim trước khi chuyển giao mã nguồn sang robot thực tế",
        "percent": 92
      },
      {
        "title": "Debug cơ khí & Thuyết trình sản phẩm",
        "desc": "Tự quan sát sai sót, thử nghiệm giải pháp mới và bảo vệ đồ án",
        "percent": 95
      }
    ],
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "4.800.000đ",
      "discountedPrice": "3.600.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & bộ học cụ thực hành độc lập",
      "giftValue": "Trị giá 600.000đ"
    },
    "commitments": [
      "100% học sinh tự tay lắp ráp và lập trình hoàn thiện robot thật sau mỗi buổi.",
      "Thực hành mô phỏng 3D trên RoboSim chuẩn đấu trường quốc tế.",
      "Sĩ số lớp nhỏ dưới 10 học viên, huấn luyện viên kèm sát 1-1.",
      "Báo cáo tiến độ học tập chi tiết và video thuyết trình gửi phụ huynh sau từng học phần."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Sinh Vật Thông Minh & Robot Thể Thao",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Mô phỏng hành vi động vật và chuyển động thể thao: cầu thủ, thủ môn, vận động viên bơi lội, đu xà đơn.",
        "achievement": "Lắp ráp cơ cấu chuyển động nhịp nhàng và làm chủ dự án sáng tạo.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Chú thỏ dễ thương",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Chú voi con ở Bản Đôn",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Những chú chim vui vẻ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Khỉ Gorina",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Cầu thủ đỉnh cao",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Thủ môn xuất sắc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Vận động viên bơi lội",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Đu xà đơn",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Năng Lượng Xanh & Phương Tiện Hiện Đại",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Chế tạo cối xoay gió, xe chạy năng lượng, hệ thống phân loại rác, máy bay chiến đấu và tàu tuần dương.",
        "achievement": "Hiểu bản chất năng lượng và giải quyết các bài toán môi trường thực tế.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Cối xoay gió",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Xe chạy năng lượng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Phân loại rác thải",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Xe thu gom rác",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Máy bay chiến đấu",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Tên lửa phòng không",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Đại bác",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Tàu tuần dương",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "tieu-hoc-nang-cao": {
    "slug": "tieu-hoc-nang-cao",
    "code": "Sata-Primary-Adv",
    "name": "Robotics Tiểu Học — Khóa Nâng Cao",
    "academicName": "Công Trình Hạng Nặng & Cơ Khí Động Lực",
    "headline": "Chế tạo xe ủi, xe nâng, cần cẩu, máy cưa và các cỗ máy công nghiệp phức tạp",
    "category": "Tiểu học",
    "grade": "Tiểu học",
    "age": "Lớp 1 — 5",
    "displayAge": "6 — 11 tuổi",
    "duration": "24 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 4.98,
    "totalStudents": 310,
    "coverImage": "/images/courses/tieu-hoc-2.png",
    "badge": "KHÓA NÂNG CAO",
    "glowColor": "cyan",
    "overview": "Khóa Nâng Cao đưa học sinh đến với các cỗ máy công trình và hệ thống cơ khí động lực quy mô: xe thợ mỏ, xe ủi, xe nâng, cần cẩu, máy đập bột, máy bơm dầu.",
    "hardwareKit": {
      "name": "Hệ Sinh Thái Alpha + Beta & Cảm Biến Đa Tầng Chuẩn Quốc Tế",
      "description": "Bộ linh kiện cơ khí chính xác, động cơ giảm tốc, servo, vi điều khiển Alpha/Beta và hệ thống cảm biến thông minh.",
      "items": [
        "Hơn 300+ chi tiết lắp ráp kỹ thuật: bánh răng, ròng rọc, trục truyền động, thanh nối",
        "Bộ vi điều khiển thông minh tích hợp khe nạp chương trình và kết nối không dây",
        "Động cơ DC đa tốc độ kèm Servo điều khiển góc quay chính xác",
        "Cảm biến siêu âm sóng âm, cảm biến màu sắc, cảm biến chạm và còi báo",
        "Phần mềm mô phỏng 3D RoboSim chuẩn thi đấu sáng tạo thanh thiếu niên"
      ]
    },
    "skillsGained": [
      {
        "title": "Tư duy thuật toán & Lập trình khối",
        "desc": "Làm chủ thuật toán tuần tự, rẽ nhánh nếu - thì và vòng lặp",
        "percent": 96
      },
      {
        "title": "Cơ cấu cơ giới & Bản vẽ kỹ thuật",
        "desc": "Đọc hiểu bản vẽ lắp ráp 3D, phân tích kết cấu cơ khí chính xác",
        "percent": 94
      },
      {
        "title": "Tư duy Virtual-to-Physical 3D",
        "desc": "Mô phỏng 3D trên RoboSim trước khi chuyển giao mã nguồn sang robot thực tế",
        "percent": 92
      },
      {
        "title": "Debug cơ khí & Thuyết trình sản phẩm",
        "desc": "Tự quan sát sai sót, thử nghiệm giải pháp mới và bảo vệ đồ án",
        "percent": 95
      }
    ],
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "4.800.000đ",
      "discountedPrice": "3.600.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & bộ học cụ thực hành độc lập",
      "giftValue": "Trị giá 600.000đ"
    },
    "commitments": [
      "100% học sinh tự tay lắp ráp và lập trình hoàn thiện robot thật sau mỗi buổi.",
      "Thực hành mô phỏng 3D trên RoboSim chuẩn đấu trường quốc tế.",
      "Sĩ số lớp nhỏ dưới 10 học viên, huấn luyện viên kèm sát 1-1.",
      "Báo cáo tiến độ học tập chi tiết và video thuyết trình gửi phụ huynh sau từng học phần."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Xe Công Trình & Công Viên Giải Trí",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Lắp ráp xe ủi đất, xe nâng hàng, cần cẩu, đu quay khổng lồ, ghế bay và thuyền hải tặc.",
        "achievement": "Làm chủ tỷ số truyền bánh răng tải nặng và nguyên lý trợ lực cơ học.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Robot thợ mỏ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Xe ủi đất",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Xe nâng hàng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Cần cẩu",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Đu quay khổng lồ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Ghế bay",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Thuyền hải tặc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Đua thuyền rồng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Cơ Khí Chế Biến & Robot Sinh Học",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Chế tạo máy cưa, máy đập bột, máy bơm dầu, kết hợp mô hình động vật lưỡng cư con cá, con rùa, con cua, con ếch.",
        "achievement": "Tối ưu hóa độ bền cơ học và tự tin thuyết trình đồ án nâng cao.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Máy cưa",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Bẫy chuột",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Máy đập bột làm bánh",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Máy bơm dầu",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Con cá",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Con rùa",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Con cua",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Con ếch",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "tieu-hoc-chuyen-gia": {
    "slug": "tieu-hoc-chuyen-gia",
    "code": "Sata-Primary-Pro",
    "name": "Robotics Tiểu Học — Khóa Chuyên Gia",
    "academicName": "Thám Hiểm Không Gian & Tự Động Hóa Bến Cảng",
    "headline": "Kiến tạo robot trợ lý, vận chuyển bến cảng tự động và trạm thám hiểm sao hỏa",
    "category": "Tiểu học",
    "grade": "Tiểu học",
    "age": "Lớp 1 — 5",
    "displayAge": "6 — 11 tuổi",
    "duration": "24 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 4.99,
    "totalStudents": 290,
    "coverImage": "/images/courses/tieu-hoc-1.png",
    "badge": "KHÓA CHUYÊN GIA",
    "glowColor": "cyan",
    "overview": "Khóa Chuyên Gia là chặng về đích đỉnh cao của cấp Tiểu học. Học sinh được thử thách với các hệ thống tự động hóa thông minh: robot trợ lý phòng lab, vận chuyển tự động bến cảng, xe vượt địa hình, robot thám hiểm sao hỏa và phi thuyền không gian.",
    "hardwareKit": {
      "name": "Hệ Sinh Thái Alpha + Beta & Cảm Biến Đa Tầng Chuẩn Quốc Tế",
      "description": "Bộ linh kiện cơ khí chính xác, động cơ giảm tốc, servo, vi điều khiển Alpha/Beta và hệ thống cảm biến thông minh.",
      "items": [
        "Hơn 300+ chi tiết lắp ráp kỹ thuật: bánh răng, ròng rọc, trục truyền động, thanh nối",
        "Bộ vi điều khiển thông minh tích hợp khe nạp chương trình và kết nối không dây",
        "Động cơ DC đa tốc độ kèm Servo điều khiển góc quay chính xác",
        "Cảm biến siêu âm sóng âm, cảm biến màu sắc, cảm biến chạm và còi báo",
        "Phần mềm mô phỏng 3D RoboSim chuẩn thi đấu sáng tạo thanh thiếu niên"
      ]
    },
    "skillsGained": [
      {
        "title": "Tư duy thuật toán & Lập trình khối",
        "desc": "Làm chủ thuật toán tuần tự, rẽ nhánh nếu - thì và vòng lặp",
        "percent": 96
      },
      {
        "title": "Cơ cấu cơ giới & Bản vẽ kỹ thuật",
        "desc": "Đọc hiểu bản vẽ lắp ráp 3D, phân tích kết cấu cơ khí chính xác",
        "percent": 94
      },
      {
        "title": "Tư duy Virtual-to-Physical 3D",
        "desc": "Mô phỏng 3D trên RoboSim trước khi chuyển giao mã nguồn sang robot thực tế",
        "percent": 92
      },
      {
        "title": "Debug cơ khí & Thuyết trình sản phẩm",
        "desc": "Tự quan sát sai sót, thử nghiệm giải pháp mới và bảo vệ đồ án",
        "percent": 95
      }
    ],
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "4.800.000đ",
      "discountedPrice": "3.600.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & bộ học cụ thực hành độc lập",
      "giftValue": "Trị giá 600.000đ"
    },
    "commitments": [
      "100% học sinh tự tay lắp ráp và lập trình hoàn thiện robot thật sau mỗi buổi.",
      "Thực hành mô phỏng 3D trên RoboSim chuẩn đấu trường quốc tế.",
      "Sĩ số lớp nhỏ dưới 10 học viên, huấn luyện viên kèm sát 1-1.",
      "Báo cáo tiến độ học tập chi tiết và video thuyết trình gửi phụ huynh sau từng học phần."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Tự Động Hóa Logistics & Robot Trợ Lý",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Chế tạo robot trợ lý, hệ thống vận chuyển bến cảng tự động, máy vận chuyển và xe vượt địa hình.",
        "achievement": "Hiểu nguyên lý logistics tự động và quy trình điều khiển thông minh.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Robot trợ lý",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Phương tiện công cộng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Diễn viên xiếc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Vận chuyển tự động ở bến cảng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Súng lục bắn đá",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Máy vận chuyển",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Xe vượt địa hình",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Robot trợ lý phòng thí nghiệm",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Chinh Phục Không Gian & Robot Thể Thao",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Khám phá trạm sao hỏa, phi thuyền không gian, xe rocket, con lắc khổng lồ và robot thể thao.",
        "achievement": "Tốt nghiệp toàn diện cấp Tiểu học, sẵn sàng chuyển tiếp vững vàng lên THCS.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Robot thám hiểm sao hỏa",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Robot đi bộ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Phi thuyền không gian",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Xe mô tô",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Con lắc khổng lồ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Xe rocket",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Quạt đứng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Robot thể thao",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "robotics-lop-1-2": {
    "slug": "tieu-hoc-bat-dau",
    "code": "Sata-Primary-Basic",
    "name": "Robotics Tiểu Học — Khóa Bắt Đầu",
    "academicName": "Khởi Đầu Đam Mê & Cơ Cấu Cơ Bản",
    "headline": "Làm quen với bộ học cụ quạt máy, con quay, đua thuyền và các mô hình thông minh đầu tiên",
    "category": "Tiểu học",
    "grade": "Tiểu học",
    "age": "Lớp 1 — 5",
    "displayAge": "6 — 11 tuổi",
    "duration": "24 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 4.96,
    "totalStudents": 380,
    "coverImage": "/images/courses/tieu-hoc-1.png",
    "badge": "KHÓA BẮT ĐẦU",
    "glowColor": "cyan",
    "overview": "Chương trình Khóa Bắt Đầu dành cho học sinh Tiểu học bước đầu làm quen với thế giới chế tạo robotics. Học sinh được học qua các dự án vật lý thực tế: quạt máy, con quay, xe đua F1, ngôi nhà thông minh và trực thăng.",
    "hardwareKit": {
      "name": "Hệ Sinh Thái Alpha + Beta & Cảm Biến Đa Tầng Chuẩn Quốc Tế",
      "description": "Bộ linh kiện cơ khí chính xác, động cơ giảm tốc, servo, vi điều khiển Alpha/Beta và hệ thống cảm biến thông minh.",
      "items": [
        "Hơn 300+ chi tiết lắp ráp kỹ thuật: bánh răng, ròng rọc, trục truyền động, thanh nối",
        "Bộ vi điều khiển thông minh tích hợp khe nạp chương trình và kết nối không dây",
        "Động cơ DC đa tốc độ kèm Servo điều khiển góc quay chính xác",
        "Cảm biến siêu âm sóng âm, cảm biến màu sắc, cảm biến chạm và còi báo",
        "Phần mềm mô phỏng 3D RoboSim chuẩn thi đấu sáng tạo thanh thiếu niên"
      ]
    },
    "skillsGained": [
      {
        "title": "Tư duy thuật toán & Lập trình khối",
        "desc": "Làm chủ thuật toán tuần tự, rẽ nhánh nếu - thì và vòng lặp",
        "percent": 96
      },
      {
        "title": "Cơ cấu cơ giới & Bản vẽ kỹ thuật",
        "desc": "Đọc hiểu bản vẽ lắp ráp 3D, phân tích kết cấu cơ khí chính xác",
        "percent": 94
      },
      {
        "title": "Tư duy Virtual-to-Physical 3D",
        "desc": "Mô phỏng 3D trên RoboSim trước khi chuyển giao mã nguồn sang robot thực tế",
        "percent": 92
      },
      {
        "title": "Debug cơ khí & Thuyết trình sản phẩm",
        "desc": "Tự quan sát sai sót, thử nghiệm giải pháp mới và bảo vệ đồ án",
        "percent": 95
      }
    ],
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "4.800.000đ",
      "discountedPrice": "3.600.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & bộ học cụ thực hành độc lập",
      "giftValue": "Trị giá 600.000đ"
    },
    "commitments": [
      "100% học sinh tự tay lắp ráp và lập trình hoàn thiện robot thật sau mỗi buổi.",
      "Thực hành mô phỏng 3D trên RoboSim chuẩn đấu trường quốc tế.",
      "Sĩ số lớp nhỏ dưới 10 học viên, huấn luyện viên kèm sát 1-1.",
      "Báo cáo tiến độ học tập chi tiết và video thuyết trình gửi phụ huynh sau từng học phần."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Khám Phá Học Cụ & Chế Tạo Cơ Bản",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Làm quen bộ học cụ, khám phá cơ cấu truyền động quạt máy, con quay, xe kéo và máy bắn đá.",
        "achievement": "Tự tay lắp ráp các mô hình cơ bản và thuyết trình sản phẩm tự tin.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Làm quen bộ học cụ - Quạt máy",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Con quay thần tốc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Đua thuyền",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Robot đi bộ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Robot họa sĩ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Robot dancing",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Robot kéo xe",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Máy bắn đá",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Vận Tốc, Cảm Biến & Nhà Thông Minh",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Tìm hiểu các yếu tố ảnh hưởng vận tốc, lực cân bằng, cảm biến sóng âm, cánh tay robot và đèn giao thông.",
        "achievement": "Làm chủ nguyên lý cảm biến và hoàn thành đồ án thuyết trình cuối khóa.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Các yếu tố ảnh hưởng vận tốc- Xe đua F1",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Lực cân bằng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Lực đàn hồi- Cây nỏ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Music Box",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Ngôi nhà thông minh- Cảm biến sóng âm",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Cánh tay robot",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Đèn giao thông",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Máy bay trực thăng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "robotics-lop-3-4": {
    "slug": "tieu-hoc-nang-cao",
    "code": "Sata-Primary-Adv",
    "name": "Robotics Tiểu Học — Khóa Nâng Cao",
    "academicName": "Công Trình Hạng Nặng & Cơ Khí Động Lực",
    "headline": "Chế tạo xe ủi, xe nâng, cần cẩu, máy cưa và các cỗ máy công nghiệp phức tạp",
    "category": "Tiểu học",
    "grade": "Tiểu học",
    "age": "Lớp 1 — 5",
    "displayAge": "6 — 11 tuổi",
    "duration": "24 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 4.98,
    "totalStudents": 310,
    "coverImage": "/images/courses/tieu-hoc-2.png",
    "badge": "KHÓA NÂNG CAO",
    "glowColor": "cyan",
    "overview": "Khóa Nâng Cao đưa học sinh đến với các cỗ máy công trình và hệ thống cơ khí động lực quy mô: xe thợ mỏ, xe ủi, xe nâng, cần cẩu, máy đập bột, máy bơm dầu.",
    "hardwareKit": {
      "name": "Hệ Sinh Thái Alpha + Beta & Cảm Biến Đa Tầng Chuẩn Quốc Tế",
      "description": "Bộ linh kiện cơ khí chính xác, động cơ giảm tốc, servo, vi điều khiển Alpha/Beta và hệ thống cảm biến thông minh.",
      "items": [
        "Hơn 300+ chi tiết lắp ráp kỹ thuật: bánh răng, ròng rọc, trục truyền động, thanh nối",
        "Bộ vi điều khiển thông minh tích hợp khe nạp chương trình và kết nối không dây",
        "Động cơ DC đa tốc độ kèm Servo điều khiển góc quay chính xác",
        "Cảm biến siêu âm sóng âm, cảm biến màu sắc, cảm biến chạm và còi báo",
        "Phần mềm mô phỏng 3D RoboSim chuẩn thi đấu sáng tạo thanh thiếu niên"
      ]
    },
    "skillsGained": [
      {
        "title": "Tư duy thuật toán & Lập trình khối",
        "desc": "Làm chủ thuật toán tuần tự, rẽ nhánh nếu - thì và vòng lặp",
        "percent": 96
      },
      {
        "title": "Cơ cấu cơ giới & Bản vẽ kỹ thuật",
        "desc": "Đọc hiểu bản vẽ lắp ráp 3D, phân tích kết cấu cơ khí chính xác",
        "percent": 94
      },
      {
        "title": "Tư duy Virtual-to-Physical 3D",
        "desc": "Mô phỏng 3D trên RoboSim trước khi chuyển giao mã nguồn sang robot thực tế",
        "percent": 92
      },
      {
        "title": "Debug cơ khí & Thuyết trình sản phẩm",
        "desc": "Tự quan sát sai sót, thử nghiệm giải pháp mới và bảo vệ đồ án",
        "percent": 95
      }
    ],
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "4.800.000đ",
      "discountedPrice": "3.600.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & bộ học cụ thực hành độc lập",
      "giftValue": "Trị giá 600.000đ"
    },
    "commitments": [
      "100% học sinh tự tay lắp ráp và lập trình hoàn thiện robot thật sau mỗi buổi.",
      "Thực hành mô phỏng 3D trên RoboSim chuẩn đấu trường quốc tế.",
      "Sĩ số lớp nhỏ dưới 10 học viên, huấn luyện viên kèm sát 1-1.",
      "Báo cáo tiến độ học tập chi tiết và video thuyết trình gửi phụ huynh sau từng học phần."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Xe Công Trình & Công Viên Giải Trí",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Lắp ráp xe ủi đất, xe nâng hàng, cần cẩu, đu quay khổng lồ, ghế bay và thuyền hải tặc.",
        "achievement": "Làm chủ tỷ số truyền bánh răng tải nặng và nguyên lý trợ lực cơ học.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Robot thợ mỏ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Xe ủi đất",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Xe nâng hàng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Cần cẩu",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Đu quay khổng lồ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Ghế bay",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Thuyền hải tặc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Đua thuyền rồng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Cơ Khí Chế Biến & Robot Sinh Học",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Chế tạo máy cưa, máy đập bột, máy bơm dầu, kết hợp mô hình động vật lưỡng cư con cá, con rùa, con cua, con ếch.",
        "achievement": "Tối ưu hóa độ bền cơ học và tự tin thuyết trình đồ án nâng cao.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Máy cưa",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Bẫy chuột",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Máy đập bột làm bánh",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Máy bơm dầu",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Con cá",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Con rùa",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Con cua",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Con ếch",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "robotics-lop-5": {
    "slug": "tieu-hoc-chuyen-gia",
    "code": "Sata-Primary-Pro",
    "name": "Robotics Tiểu Học — Khóa Chuyên Gia",
    "academicName": "Thám Hiểm Không Gian & Tự Động Hóa Bến Cảng",
    "headline": "Kiến tạo robot trợ lý, vận chuyển bến cảng tự động và trạm thám hiểm sao hỏa",
    "category": "Tiểu học",
    "grade": "Tiểu học",
    "age": "Lớp 1 — 5",
    "displayAge": "6 — 11 tuổi",
    "duration": "24 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 4.99,
    "totalStudents": 290,
    "coverImage": "/images/courses/tieu-hoc-1.png",
    "badge": "KHÓA CHUYÊN GIA",
    "glowColor": "cyan",
    "overview": "Khóa Chuyên Gia là chặng về đích đỉnh cao của cấp Tiểu học. Học sinh được thử thách với các hệ thống tự động hóa thông minh: robot trợ lý phòng lab, vận chuyển tự động bến cảng, xe vượt địa hình, robot thám hiểm sao hỏa và phi thuyền không gian.",
    "hardwareKit": {
      "name": "Hệ Sinh Thái Alpha + Beta & Cảm Biến Đa Tầng Chuẩn Quốc Tế",
      "description": "Bộ linh kiện cơ khí chính xác, động cơ giảm tốc, servo, vi điều khiển Alpha/Beta và hệ thống cảm biến thông minh.",
      "items": [
        "Hơn 300+ chi tiết lắp ráp kỹ thuật: bánh răng, ròng rọc, trục truyền động, thanh nối",
        "Bộ vi điều khiển thông minh tích hợp khe nạp chương trình và kết nối không dây",
        "Động cơ DC đa tốc độ kèm Servo điều khiển góc quay chính xác",
        "Cảm biến siêu âm sóng âm, cảm biến màu sắc, cảm biến chạm và còi báo",
        "Phần mềm mô phỏng 3D RoboSim chuẩn thi đấu sáng tạo thanh thiếu niên"
      ]
    },
    "skillsGained": [
      {
        "title": "Tư duy thuật toán & Lập trình khối",
        "desc": "Làm chủ thuật toán tuần tự, rẽ nhánh nếu - thì và vòng lặp",
        "percent": 96
      },
      {
        "title": "Cơ cấu cơ giới & Bản vẽ kỹ thuật",
        "desc": "Đọc hiểu bản vẽ lắp ráp 3D, phân tích kết cấu cơ khí chính xác",
        "percent": 94
      },
      {
        "title": "Tư duy Virtual-to-Physical 3D",
        "desc": "Mô phỏng 3D trên RoboSim trước khi chuyển giao mã nguồn sang robot thực tế",
        "percent": 92
      },
      {
        "title": "Debug cơ khí & Thuyết trình sản phẩm",
        "desc": "Tự quan sát sai sót, thử nghiệm giải pháp mới và bảo vệ đồ án",
        "percent": 95
      }
    ],
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "4.800.000đ",
      "discountedPrice": "3.600.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & bộ học cụ thực hành độc lập",
      "giftValue": "Trị giá 600.000đ"
    },
    "commitments": [
      "100% học sinh tự tay lắp ráp và lập trình hoàn thiện robot thật sau mỗi buổi.",
      "Thực hành mô phỏng 3D trên RoboSim chuẩn đấu trường quốc tế.",
      "Sĩ số lớp nhỏ dưới 10 học viên, huấn luyện viên kèm sát 1-1.",
      "Báo cáo tiến độ học tập chi tiết và video thuyết trình gửi phụ huynh sau từng học phần."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Tự Động Hóa Logistics & Robot Trợ Lý",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Chế tạo robot trợ lý, hệ thống vận chuyển bến cảng tự động, máy vận chuyển và xe vượt địa hình.",
        "achievement": "Hiểu nguyên lý logistics tự động và quy trình điều khiển thông minh.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Robot trợ lý",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Phương tiện công cộng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Diễn viên xiếc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Vận chuyển tự động ở bến cảng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Súng lục bắn đá",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Máy vận chuyển",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Xe vượt địa hình",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Robot trợ lý phòng thí nghiệm",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Chinh Phục Không Gian & Robot Thể Thao",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Khám phá trạm sao hỏa, phi thuyền không gian, xe rocket, con lắc khổng lồ và robot thể thao.",
        "achievement": "Tốt nghiệp toàn diện cấp Tiểu học, sẵn sàng chuyển tiếp vững vàng lên THCS.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Robot thám hiểm sao hỏa",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Robot đi bộ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Phi thuyền không gian",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Xe mô tô",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Con lắc khổng lồ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Xe rocket",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Quạt đứng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Robot thể thao",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "tieu-hoc": {
    "slug": "tieu-hoc-bat-dau",
    "code": "Sata-Primary-Basic",
    "name": "Robotics Tiểu Học — Khóa Bắt Đầu",
    "academicName": "Khởi Đầu Đam Mê & Cơ Cấu Cơ Bản",
    "headline": "Làm quen với bộ học cụ quạt máy, con quay, đua thuyền và các mô hình thông minh đầu tiên",
    "category": "Tiểu học",
    "grade": "Tiểu học",
    "age": "Lớp 1 — 5",
    "displayAge": "6 — 11 tuổi",
    "duration": "24 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 4.96,
    "totalStudents": 380,
    "coverImage": "/images/courses/tieu-hoc-1.png",
    "badge": "KHÓA BẮT ĐẦU",
    "glowColor": "cyan",
    "overview": "Chương trình Khóa Bắt Đầu dành cho học sinh Tiểu học bước đầu làm quen với thế giới chế tạo robotics. Học sinh được học qua các dự án vật lý thực tế: quạt máy, con quay, xe đua F1, ngôi nhà thông minh và trực thăng.",
    "hardwareKit": {
      "name": "Hệ Sinh Thái Alpha + Beta & Cảm Biến Đa Tầng Chuẩn Quốc Tế",
      "description": "Bộ linh kiện cơ khí chính xác, động cơ giảm tốc, servo, vi điều khiển Alpha/Beta và hệ thống cảm biến thông minh.",
      "items": [
        "Hơn 300+ chi tiết lắp ráp kỹ thuật: bánh răng, ròng rọc, trục truyền động, thanh nối",
        "Bộ vi điều khiển thông minh tích hợp khe nạp chương trình và kết nối không dây",
        "Động cơ DC đa tốc độ kèm Servo điều khiển góc quay chính xác",
        "Cảm biến siêu âm sóng âm, cảm biến màu sắc, cảm biến chạm và còi báo",
        "Phần mềm mô phỏng 3D RoboSim chuẩn thi đấu sáng tạo thanh thiếu niên"
      ]
    },
    "skillsGained": [
      {
        "title": "Tư duy thuật toán & Lập trình khối",
        "desc": "Làm chủ thuật toán tuần tự, rẽ nhánh nếu - thì và vòng lặp",
        "percent": 96
      },
      {
        "title": "Cơ cấu cơ giới & Bản vẽ kỹ thuật",
        "desc": "Đọc hiểu bản vẽ lắp ráp 3D, phân tích kết cấu cơ khí chính xác",
        "percent": 94
      },
      {
        "title": "Tư duy Virtual-to-Physical 3D",
        "desc": "Mô phỏng 3D trên RoboSim trước khi chuyển giao mã nguồn sang robot thực tế",
        "percent": 92
      },
      {
        "title": "Debug cơ khí & Thuyết trình sản phẩm",
        "desc": "Tự quan sát sai sót, thử nghiệm giải pháp mới và bảo vệ đồ án",
        "percent": 95
      }
    ],
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:00",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:00",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "4.800.000đ",
      "discountedPrice": "3.600.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & bộ học cụ thực hành độc lập",
      "giftValue": "Trị giá 600.000đ"
    },
    "commitments": [
      "100% học sinh tự tay lắp ráp và lập trình hoàn thiện robot thật sau mỗi buổi.",
      "Thực hành mô phỏng 3D trên RoboSim chuẩn đấu trường quốc tế.",
      "Sĩ số lớp nhỏ dưới 10 học viên, huấn luyện viên kèm sát 1-1.",
      "Báo cáo tiến độ học tập chi tiết và video thuyết trình gửi phụ huynh sau từng học phần."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Khám Phá Học Cụ & Chế Tạo Cơ Bản",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Làm quen bộ học cụ, khám phá cơ cấu truyền động quạt máy, con quay, xe kéo và máy bắn đá.",
        "achievement": "Tự tay lắp ráp các mô hình cơ bản và thuyết trình sản phẩm tự tin.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Làm quen bộ học cụ - Quạt máy",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Con quay thần tốc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Đua thuyền",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Robot đi bộ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Robot họa sĩ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Robot dancing",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Robot kéo xe",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Máy bắn đá",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Vận Tốc, Cảm Biến & Nhà Thông Minh",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Tìm hiểu các yếu tố ảnh hưởng vận tốc, lực cân bằng, cảm biến sóng âm, cánh tay robot và đèn giao thông.",
        "achievement": "Làm chủ nguyên lý cảm biến và hoàn thành đồ án thuyết trình cuối khóa.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Các yếu tố ảnh hưởng vận tốc- Xe đua F1",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Lực cân bằng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Lực đàn hồi- Cây nỏ",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Music Box",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Ngôi nhà thông minh- Cảm biến sóng âm",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Cánh tay robot",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Đèn giao thông",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Máy bay trực thăng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "trung-hoc-bat-dau": {
    "slug": "trung-hoc-bat-dau",
    "code": "Sata-Sec-Basic",
    "name": "Robotics THCS — Khóa Bắt Đầu",
    "academicName": "Điều Khiển Giọng Nói & Cảm Biến Thông Minh",
    "headline": "Làm chủ bộ công cụ Intelligent storm, điều khiển giọng nói, cảm biến chạm, cảm biến màu và camera robot",
    "category": "Trung học",
    "grade": "Trung học cơ sở",
    "age": "Lớp 6 — 9",
    "displayAge": "11 — 15 tuổi",
    "duration": "24 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 4.97,
    "totalStudents": 260,
    "coverImage": "/images/courses/trung-hoc-1.png",
    "badge": "KHÓA BẮT ĐẦU",
    "glowColor": "purple",
    "overview": "Khóa Bắt Đầu THCS trang bị cho học sinh nền tảng điều khiển thông minh: nhận diện giọng nói, xử lý tín hiệu camera, cảm biến chạm, cảm biến màu và giải thuật xe cảnh sát tuần tra.",
    "hardwareKit": {
      "name": "Hệ Thống Robot Thi Đấu Intelligent Storm, Cảm Biến AI & Vi Điều Khiển Nâng Cao",
      "description": "Bộ vi điều khiển công nghiệp, động cơ encoder công suất cao, cảm biến thị giác AI, camera thông minh và sa bàn thử nghiệm.",
      "items": [
        "Bộ vi điều khiển Intelligent Storm hỗ trợ lập trình kéo thả & code văn bản Python/C++",
        "Động cơ Encoder phản hồi vận tốc, góc quay và cơ cấu truyền động tải nặng",
        "Module Camera AI nhận diện khuôn mặt, màu sắc, cử chỉ tay và mã QR",
        "Cụm cảm biến rò đường kép, cảm biến chạm, radar phát hiện chướng ngại vật",
        "Bộ khung hợp kim nhôm định hình và phụ kiện lắp ráp robot tự hành thi đấu"
      ]
    },
    "skillsGained": [
      {
        "title": "Lập trình Python & Thuật toán PID",
        "desc": "Viết mã nguồn điều khiển chuyên sâu, giải thuật PID bám line và ổn định quỹ đạo",
        "percent": 98
      },
      {
        "title": "Thị giác máy tính AI & Machine Learning",
        "desc": "Huấn luyện mô hình nhận diện khuôn mặt, cử chỉ tay, mã QR và biển báo",
        "percent": 95
      },
      {
        "title": "Thiết kế cơ điện tử & Robot AGV",
        "desc": "Chế tạo xe tự hành công nghiệp, cơ cấu gắp kẹp nâng hàng chịu tải",
        "percent": 94
      },
      {
        "title": "Bản lĩnh thi đấu & Thuyết trình đồ án",
        "desc": "Rèn luyện tinh thần thi đấu đối kháng và kỹ năng bảo vệ đồ án KHKT",
        "percent": 96
      }
    ],
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:30",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "5.500.000đ",
      "discountedPrice": "4.200.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & hỗ trợ thi đấu Robocon",
      "giftValue": "Trị giá 800.000đ"
    },
    "commitments": [
      "100% học sinh làm chủ vi điều khiển thông minh và thuật toán tự hành.",
      "Trực tiếp thi đấu trên sa bàn Robocon tiêu chuẩn cấp Tỉnh/Thành phố.",
      "Sĩ số lớp nhỏ dưới 10 học viên, giảng viên chuyên gia kèm sát 1-1.",
      "Cấp chứng nhận hoàn thành khóa học và hỗ trợ hướng dẫn đề tài NCKH."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Điều Khiển Giọng Nói & Camera Robot",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Lắp ráp và lập trình điều khiển robot bằng giọng nói, camera robot, robot piano và robot đổi đèn.",
        "achievement": "Làm chủ kỹ thuật điều khiển bằng âm thanh và thị giác cơ bản.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Vòng quay xe đạp",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Đồng hồ báo thức",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Cái quạt thông minh",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Thử thách quay lại",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Điều khiển Robot bằng giọng nói",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Camera Robot",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Robot thay đổi đèn",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Chú robot piano",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Intelligent Storm & Cảm Biến Màu, Chạm",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Làm quen bộ công cụ Intelligent storm, xe tự hành, cảm biến chạm, cảm biến màu, đỗ xe tự động và gờ giảm tốc.",
        "achievement": "Tích hợp đa cảm biến và hoàn thành đồ án xe tự hành thông minh.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Làm quen với bộ công cụ Intelligent storm",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Xe tự hành",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Làm quen với cảm biến chạm",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Robot dọn vệ sinh tự động",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Làm quen với cảm biến màu",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Đỗ xe tự động",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Gờ giảm tốc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Xe cảnh sát",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "trung-hoc-intren": {
    "slug": "trung-hoc-intren",
    "code": "Sata-Sec-Intern",
    "name": "Robotics THCS — Khóa Intren",
    "academicName": "Tự Động Hóa Công Nghiệp & Đô Thị Thông Minh",
    "headline": "Chế tạo cánh tay robot, máy bay không người lái, máy bán hàng tự động và hệ thống năng lượng tái tạo",
    "category": "Trung học",
    "grade": "Trung học cơ sở",
    "age": "Lớp 6 — 9",
    "displayAge": "11 — 15 tuổi",
    "duration": "24 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 4.98,
    "totalStudents": 240,
    "coverImage": "/images/courses/trung-hoc-2.png",
    "badge": "KHÓA INTREN",
    "glowColor": "purple",
    "overview": "Khóa Intren THCS ứng dụng công nghệ vào sản xuất tự động và cơ sở hạ tầng đô thị: máy đóng gói, máy phân loại sản phẩm, xe nâng, cần cẩu, máy bán hàng, siêu thị thông minh và trạm dự báo thời tiết.",
    "hardwareKit": {
      "name": "Hệ Thống Robot Thi Đấu Intelligent Storm, Cảm Biến AI & Vi Điều Khiển Nâng Cao",
      "description": "Bộ vi điều khiển công nghiệp, động cơ encoder công suất cao, cảm biến thị giác AI, camera thông minh và sa bàn thử nghiệm.",
      "items": [
        "Bộ vi điều khiển Intelligent Storm hỗ trợ lập trình kéo thả & code văn bản Python/C++",
        "Động cơ Encoder phản hồi vận tốc, góc quay và cơ cấu truyền động tải nặng",
        "Module Camera AI nhận diện khuôn mặt, màu sắc, cử chỉ tay và mã QR",
        "Cụm cảm biến rò đường kép, cảm biến chạm, radar phát hiện chướng ngại vật",
        "Bộ khung hợp kim nhôm định hình và phụ kiện lắp ráp robot tự hành thi đấu"
      ]
    },
    "skillsGained": [
      {
        "title": "Lập trình Python & Thuật toán PID",
        "desc": "Viết mã nguồn điều khiển chuyên sâu, giải thuật PID bám line và ổn định quỹ đạo",
        "percent": 98
      },
      {
        "title": "Thị giác máy tính AI & Machine Learning",
        "desc": "Huấn luyện mô hình nhận diện khuôn mặt, cử chỉ tay, mã QR và biển báo",
        "percent": 95
      },
      {
        "title": "Thiết kế cơ điện tử & Robot AGV",
        "desc": "Chế tạo xe tự hành công nghiệp, cơ cấu gắp kẹp nâng hàng chịu tải",
        "percent": 94
      },
      {
        "title": "Bản lĩnh thi đấu & Thuyết trình đồ án",
        "desc": "Rèn luyện tinh thần thi đấu đối kháng và kỹ năng bảo vệ đồ án KHKT",
        "percent": 96
      }
    ],
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:30",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "5.500.000đ",
      "discountedPrice": "4.200.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & hỗ trợ thi đấu Robocon",
      "giftValue": "Trị giá 800.000đ"
    },
    "commitments": [
      "100% học sinh làm chủ vi điều khiển thông minh và thuật toán tự hành.",
      "Trực tiếp thi đấu trên sa bàn Robocon tiêu chuẩn cấp Tỉnh/Thành phố.",
      "Sĩ số lớp nhỏ dưới 10 học viên, giảng viên chuyên gia kèm sát 1-1.",
      "Cấp chứng nhận hoàn thành khóa học và hỗ trợ hướng dẫn đề tài NCKH."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Dây Chuyền Đóng Gói & Logistics Tự Động",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Chế tạo cánh tay robot, máy bay không người lái drone, máy đóng gói, máy phân loại sản phẩm và tàu vận chuyển.",
        "achievement": "Hiểu sâu về dây chuyền tự động hóa công nghiệp hiện đại.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Cánh tay robot",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Máy bay không người lái",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Máy đóng gói",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Máy phân loại sản phẩm",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Xe nâng hàng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Xe chở hàng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Cần cẩu",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Tàu vận chuyển",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Đô Thị Thông Minh & Năng Lượng Tái Tạo",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Xây dựng máy bán hàng tự động, siêu thị thông minh, thủy điện, điện gió, điện mặt trời và máy đo địa chấn.",
        "achievement": "Nghiên cứu các bài toán thực tiễn đô thị và thuyết trình đồ án tự tin.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Máy bán hàng tự động",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Siêu thị thông minh",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Thủy điện",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Điện gió",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Điện mặt trời",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Máy dự báo thời tiết",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Máy đo địa chấn",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Vòng tuần hoàn của nước",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "trung-hoc-nang-cao": {
    "slug": "trung-hoc-nang-cao",
    "code": "Sata-Sec-Adv",
    "name": "Robotics THCS — Khóa Nâng Cao",
    "academicName": "Thuật Toán Dò Đường, Cân Bằng & Vượt Mê Cung",
    "headline": "Làm chủ thuật toán rò đường tỷ lệ hai cảm biến, cân bằng xe, đi thẳng theo centimet và vượt mê cung phức tạp",
    "category": "Trung học",
    "grade": "Trung học cơ sở",
    "age": "Lớp 6 — 9",
    "displayAge": "11 — 15 tuổi",
    "duration": "14 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 4.99,
    "totalStudents": 220,
    "coverImage": "/images/courses/trung-hoc-1.png",
    "badge": "KHÓA NÂNG CAO",
    "glowColor": "purple",
    "overview": "Khóa Nâng Cao THCS là chương trình chuyên sâu 1 lộ trình (14 buổi) tập trung vào các giải thuật điều khiển chuyển động chính xác: rò đường tỷ lệ hai cảm biến, đi theo centimet, tăng/giảm tốc, cân bằng xe và robot tự giải mê cung.",
    "hardwareKit": {
      "name": "Hệ Thống Robot Thi Đấu Intelligent Storm, Cảm Biến AI & Vi Điều Khiển Nâng Cao",
      "description": "Bộ vi điều khiển công nghiệp, động cơ encoder công suất cao, cảm biến thị giác AI, camera thông minh và sa bàn thử nghiệm.",
      "items": [
        "Bộ vi điều khiển Intelligent Storm hỗ trợ lập trình kéo thả & code văn bản Python/C++",
        "Động cơ Encoder phản hồi vận tốc, góc quay và cơ cấu truyền động tải nặng",
        "Module Camera AI nhận diện khuôn mặt, màu sắc, cử chỉ tay và mã QR",
        "Cụm cảm biến rò đường kép, cảm biến chạm, radar phát hiện chướng ngại vật",
        "Bộ khung hợp kim nhôm định hình và phụ kiện lắp ráp robot tự hành thi đấu"
      ]
    },
    "skillsGained": [
      {
        "title": "Lập trình Python & Thuật toán PID",
        "desc": "Viết mã nguồn điều khiển chuyên sâu, giải thuật PID bám line và ổn định quỹ đạo",
        "percent": 98
      },
      {
        "title": "Thị giác máy tính AI & Machine Learning",
        "desc": "Huấn luyện mô hình nhận diện khuôn mặt, cử chỉ tay, mã QR và biển báo",
        "percent": 95
      },
      {
        "title": "Thiết kế cơ điện tử & Robot AGV",
        "desc": "Chế tạo xe tự hành công nghiệp, cơ cấu gắp kẹp nâng hàng chịu tải",
        "percent": 94
      },
      {
        "title": "Bản lĩnh thi đấu & Thuyết trình đồ án",
        "desc": "Rèn luyện tinh thần thi đấu đối kháng và kỹ năng bảo vệ đồ án KHKT",
        "percent": 96
      }
    ],
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:30",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "5.500.000đ",
      "discountedPrice": "4.200.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & hỗ trợ thi đấu Robocon",
      "giftValue": "Trị giá 800.000đ"
    },
    "commitments": [
      "100% học sinh làm chủ vi điều khiển thông minh và thuật toán tự hành.",
      "Trực tiếp thi đấu trên sa bàn Robocon tiêu chuẩn cấp Tỉnh/Thành phố.",
      "Sĩ số lớp nhỏ dưới 10 học viên, giảng viên chuyên gia kèm sát 1-1.",
      "Cấp chứng nhận hoàn thành khóa học và hỗ trợ hướng dẫn đề tài NCKH."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Giải Thuật Điều Khiển & Vượt Mê Cung",
        "number": "Học phần 1",
        "duration": "14 buổi - 90 phút/buổi",
        "sessionsCount": 14,
        "hoursCount": 21.0,
        "projectsCount": 11,
        "description": "Làm chủ thuật toán rò đường hai cảm biến, cân chỉnh xoay, đi theo centimet, cân bằng xe, robot phát hiện rừng, robot phân loại và thiết kế robot vượt mê cung.",
        "achievement": "Hoàn thiện kỹ năng thuật toán điều khiển chính xác và bảo vệ đồ án 14 buổi xuất sắc.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Rò đường",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Rò đường tỷ lệ hai cảm biến",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Xe tracter",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Căn chỉnh và xoay ghế cảm biến",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Đi theo centimet",
            "type": "Dự án"
          },
          {
            "sessionNumber": 6,
            "title": "Tăng tốc và giảm tốc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Cân bằng xe",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Đi thẳng với cảm biến",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Xoay cân bằng của robot",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Robot phát hiện rừng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 11,
            "title": "Robot phân loại",
            "type": "Dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thiết kế robot vượt mê cung",
            "type": "Dự án"
          },
          {
            "sessionNumber": 13,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 14,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "trung-hoc-chuyen-gia": {
    "slug": "trung-hoc-chuyen-gia",
    "code": "Sata-Sec-Pro",
    "name": "Robotics THCS — Khóa Chuyên Gia",
    "academicName": "AI Thị Giác, Cử Chỉ Tay, Mã QR & Xe Tự Hành",
    "headline": "Đột phá công nghệ với nhận diện cử chỉ tay, thẻ QR, nhận diện khuôn mặt, theo dõi bóng và xe tự hành thông minh",
    "category": "Trung học",
    "grade": "Trung học cơ sở",
    "age": "Lớp 6 — 9",
    "displayAge": "11 — 15 tuổi",
    "duration": "24 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 5.0,
    "totalStudents": 200,
    "coverImage": "/images/courses/trung-hoc-2.png",
    "badge": "KHÓA CHUYÊN GIA",
    "glowColor": "purple",
    "overview": "Khóa Chuyên Gia THCS tích hợp trí tuệ nhân tạo (AI) và thị giác máy tính vào Robotics: following robot, vượt chướng ngại vật, xe điều khiển bằng giọng nói, nhận diện cử chỉ tay, mã QR, nhận diện khuôn mặt và theo dõi bóng.",
    "hardwareKit": {
      "name": "Hệ Thống Robot Thi Đấu Intelligent Storm, Cảm Biến AI & Vi Điều Khiển Nâng Cao",
      "description": "Bộ vi điều khiển công nghiệp, động cơ encoder công suất cao, cảm biến thị giác AI, camera thông minh và sa bàn thử nghiệm.",
      "items": [
        "Bộ vi điều khiển Intelligent Storm hỗ trợ lập trình kéo thả & code văn bản Python/C++",
        "Động cơ Encoder phản hồi vận tốc, góc quay và cơ cấu truyền động tải nặng",
        "Module Camera AI nhận diện khuôn mặt, màu sắc, cử chỉ tay và mã QR",
        "Cụm cảm biến rò đường kép, cảm biến chạm, radar phát hiện chướng ngại vật",
        "Bộ khung hợp kim nhôm định hình và phụ kiện lắp ráp robot tự hành thi đấu"
      ]
    },
    "skillsGained": [
      {
        "title": "Lập trình Python & Thuật toán PID",
        "desc": "Viết mã nguồn điều khiển chuyên sâu, giải thuật PID bám line và ổn định quỹ đạo",
        "percent": 98
      },
      {
        "title": "Thị giác máy tính AI & Machine Learning",
        "desc": "Huấn luyện mô hình nhận diện khuôn mặt, cử chỉ tay, mã QR và biển báo",
        "percent": 95
      },
      {
        "title": "Thiết kế cơ điện tử & Robot AGV",
        "desc": "Chế tạo xe tự hành công nghiệp, cơ cấu gắp kẹp nâng hàng chịu tải",
        "percent": 94
      },
      {
        "title": "Bản lĩnh thi đấu & Thuyết trình đồ án",
        "desc": "Rèn luyện tinh thần thi đấu đối kháng và kỹ năng bảo vệ đồ án KHKT",
        "percent": 96
      }
    ],
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:30",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "5.500.000đ",
      "discountedPrice": "4.200.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & hỗ trợ thi đấu Robocon",
      "giftValue": "Trị giá 800.000đ"
    },
    "commitments": [
      "100% học sinh làm chủ vi điều khiển thông minh và thuật toán tự hành.",
      "Trực tiếp thi đấu trên sa bàn Robocon tiêu chuẩn cấp Tỉnh/Thành phố.",
      "Sĩ số lớp nhỏ dưới 10 học viên, giảng viên chuyên gia kèm sát 1-1.",
      "Cấp chứng nhận hoàn thành khóa học và hỗ trợ hướng dẫn đề tài NCKH."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Robot Thông Minh & Radar Chướng Ngại Vật",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Chế tạo robot nhện, Smart Audio, Following robot, vượt chướng ngại vật đa tầng, oto radar và xe điều khiển giọng nói.",
        "achievement": "Làm chủ hệ thống radar và điều khiển tương tác giọng nói thời gian thực.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Robot nhện",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Smart Audio",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Following robot",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Vượt chướng ngại vật 1",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Vượt chướng ngại vật 2",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Oto và radar",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Xe điều khiển bằng giọng nói",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Đèn điều khiển bằng giọng nói",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Thị Giác AI, Cử Chỉ Tay & Nhận Diện Khuôn Mặt",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Huấn luyện mô hình nhận diện màu sắc, cử chỉ tay, biển báo giao thông, mã QR, nhận diện khuôn mặt và bám đuổi bóng.",
        "achievement": "Đồ án tốt nghiệp chuyên gia THCS, làm chủ công nghệ AI ứng dụng thực tế.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Điều khiển robot bằng giọng nói",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Nhận diện màu sắc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Xe tự hành",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Nhận diện cử chỉ tay",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Nhận diện biển báo giao thông",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Nhận dạng thẻ QR",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Nhận diện khuôn mặt",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Theo dõi bóng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "robotics-lop-6-7": {
    "slug": "trung-hoc-bat-dau",
    "code": "Sata-Sec-Basic",
    "name": "Robotics THCS — Khóa Bắt Đầu",
    "academicName": "Điều Khiển Giọng Nói & Cảm Biến Thông Minh",
    "headline": "Làm chủ bộ công cụ Intelligent storm, điều khiển giọng nói, cảm biến chạm, cảm biến màu và camera robot",
    "category": "Trung học",
    "grade": "Trung học cơ sở",
    "age": "Lớp 6 — 9",
    "displayAge": "11 — 15 tuổi",
    "duration": "24 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 4.97,
    "totalStudents": 260,
    "coverImage": "/images/courses/trung-hoc-1.png",
    "badge": "KHÓA BẮT ĐẦU",
    "glowColor": "purple",
    "overview": "Khóa Bắt Đầu THCS trang bị cho học sinh nền tảng điều khiển thông minh: nhận diện giọng nói, xử lý tín hiệu camera, cảm biến chạm, cảm biến màu và giải thuật xe cảnh sát tuần tra.",
    "hardwareKit": {
      "name": "Hệ Thống Robot Thi Đấu Intelligent Storm, Cảm Biến AI & Vi Điều Khiển Nâng Cao",
      "description": "Bộ vi điều khiển công nghiệp, động cơ encoder công suất cao, cảm biến thị giác AI, camera thông minh và sa bàn thử nghiệm.",
      "items": [
        "Bộ vi điều khiển Intelligent Storm hỗ trợ lập trình kéo thả & code văn bản Python/C++",
        "Động cơ Encoder phản hồi vận tốc, góc quay và cơ cấu truyền động tải nặng",
        "Module Camera AI nhận diện khuôn mặt, màu sắc, cử chỉ tay và mã QR",
        "Cụm cảm biến rò đường kép, cảm biến chạm, radar phát hiện chướng ngại vật",
        "Bộ khung hợp kim nhôm định hình và phụ kiện lắp ráp robot tự hành thi đấu"
      ]
    },
    "skillsGained": [
      {
        "title": "Lập trình Python & Thuật toán PID",
        "desc": "Viết mã nguồn điều khiển chuyên sâu, giải thuật PID bám line và ổn định quỹ đạo",
        "percent": 98
      },
      {
        "title": "Thị giác máy tính AI & Machine Learning",
        "desc": "Huấn luyện mô hình nhận diện khuôn mặt, cử chỉ tay, mã QR và biển báo",
        "percent": 95
      },
      {
        "title": "Thiết kế cơ điện tử & Robot AGV",
        "desc": "Chế tạo xe tự hành công nghiệp, cơ cấu gắp kẹp nâng hàng chịu tải",
        "percent": 94
      },
      {
        "title": "Bản lĩnh thi đấu & Thuyết trình đồ án",
        "desc": "Rèn luyện tinh thần thi đấu đối kháng và kỹ năng bảo vệ đồ án KHKT",
        "percent": 96
      }
    ],
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:30",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "5.500.000đ",
      "discountedPrice": "4.200.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & hỗ trợ thi đấu Robocon",
      "giftValue": "Trị giá 800.000đ"
    },
    "commitments": [
      "100% học sinh làm chủ vi điều khiển thông minh và thuật toán tự hành.",
      "Trực tiếp thi đấu trên sa bàn Robocon tiêu chuẩn cấp Tỉnh/Thành phố.",
      "Sĩ số lớp nhỏ dưới 10 học viên, giảng viên chuyên gia kèm sát 1-1.",
      "Cấp chứng nhận hoàn thành khóa học và hỗ trợ hướng dẫn đề tài NCKH."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Điều Khiển Giọng Nói & Camera Robot",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Lắp ráp và lập trình điều khiển robot bằng giọng nói, camera robot, robot piano và robot đổi đèn.",
        "achievement": "Làm chủ kỹ thuật điều khiển bằng âm thanh và thị giác cơ bản.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Vòng quay xe đạp",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Đồng hồ báo thức",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Cái quạt thông minh",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Thử thách quay lại",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Điều khiển Robot bằng giọng nói",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Camera Robot",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Robot thay đổi đèn",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Chú robot piano",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Intelligent Storm & Cảm Biến Màu, Chạm",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Làm quen bộ công cụ Intelligent storm, xe tự hành, cảm biến chạm, cảm biến màu, đỗ xe tự động và gờ giảm tốc.",
        "achievement": "Tích hợp đa cảm biến và hoàn thành đồ án xe tự hành thông minh.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Làm quen với bộ công cụ Intelligent storm",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Xe tự hành",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Làm quen với cảm biến chạm",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Robot dọn vệ sinh tự động",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Làm quen với cảm biến màu",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Đỗ xe tự động",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Gờ giảm tốc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Xe cảnh sát",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "robotics-ai-lop-8-9": {
    "slug": "trung-hoc-chuyen-gia",
    "code": "Sata-Sec-Pro",
    "name": "Robotics THCS — Khóa Chuyên Gia",
    "academicName": "AI Thị Giác, Cử Chỉ Tay, Mã QR & Xe Tự Hành",
    "headline": "Đột phá công nghệ với nhận diện cử chỉ tay, thẻ QR, nhận diện khuôn mặt, theo dõi bóng và xe tự hành thông minh",
    "category": "Trung học",
    "grade": "Trung học cơ sở",
    "age": "Lớp 6 — 9",
    "displayAge": "11 — 15 tuổi",
    "duration": "24 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 5.0,
    "totalStudents": 200,
    "coverImage": "/images/courses/trung-hoc-2.png",
    "badge": "KHÓA CHUYÊN GIA",
    "glowColor": "purple",
    "overview": "Khóa Chuyên Gia THCS tích hợp trí tuệ nhân tạo (AI) và thị giác máy tính vào Robotics: following robot, vượt chướng ngại vật, xe điều khiển bằng giọng nói, nhận diện cử chỉ tay, mã QR, nhận diện khuôn mặt và theo dõi bóng.",
    "hardwareKit": {
      "name": "Hệ Thống Robot Thi Đấu Intelligent Storm, Cảm Biến AI & Vi Điều Khiển Nâng Cao",
      "description": "Bộ vi điều khiển công nghiệp, động cơ encoder công suất cao, cảm biến thị giác AI, camera thông minh và sa bàn thử nghiệm.",
      "items": [
        "Bộ vi điều khiển Intelligent Storm hỗ trợ lập trình kéo thả & code văn bản Python/C++",
        "Động cơ Encoder phản hồi vận tốc, góc quay và cơ cấu truyền động tải nặng",
        "Module Camera AI nhận diện khuôn mặt, màu sắc, cử chỉ tay và mã QR",
        "Cụm cảm biến rò đường kép, cảm biến chạm, radar phát hiện chướng ngại vật",
        "Bộ khung hợp kim nhôm định hình và phụ kiện lắp ráp robot tự hành thi đấu"
      ]
    },
    "skillsGained": [
      {
        "title": "Lập trình Python & Thuật toán PID",
        "desc": "Viết mã nguồn điều khiển chuyên sâu, giải thuật PID bám line và ổn định quỹ đạo",
        "percent": 98
      },
      {
        "title": "Thị giác máy tính AI & Machine Learning",
        "desc": "Huấn luyện mô hình nhận diện khuôn mặt, cử chỉ tay, mã QR và biển báo",
        "percent": 95
      },
      {
        "title": "Thiết kế cơ điện tử & Robot AGV",
        "desc": "Chế tạo xe tự hành công nghiệp, cơ cấu gắp kẹp nâng hàng chịu tải",
        "percent": 94
      },
      {
        "title": "Bản lĩnh thi đấu & Thuyết trình đồ án",
        "desc": "Rèn luyện tinh thần thi đấu đối kháng và kỹ năng bảo vệ đồ án KHKT",
        "percent": 96
      }
    ],
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:30",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "5.500.000đ",
      "discountedPrice": "4.200.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & hỗ trợ thi đấu Robocon",
      "giftValue": "Trị giá 800.000đ"
    },
    "commitments": [
      "100% học sinh làm chủ vi điều khiển thông minh và thuật toán tự hành.",
      "Trực tiếp thi đấu trên sa bàn Robocon tiêu chuẩn cấp Tỉnh/Thành phố.",
      "Sĩ số lớp nhỏ dưới 10 học viên, giảng viên chuyên gia kèm sát 1-1.",
      "Cấp chứng nhận hoàn thành khóa học và hỗ trợ hướng dẫn đề tài NCKH."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Robot Thông Minh & Radar Chướng Ngại Vật",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Chế tạo robot nhện, Smart Audio, Following robot, vượt chướng ngại vật đa tầng, oto radar và xe điều khiển giọng nói.",
        "achievement": "Làm chủ hệ thống radar và điều khiển tương tác giọng nói thời gian thực.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Robot nhện",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Smart Audio",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Following robot",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Vượt chướng ngại vật 1",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Vượt chướng ngại vật 2",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Oto và radar",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Xe điều khiển bằng giọng nói",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Đèn điều khiển bằng giọng nói",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Thị Giác AI, Cử Chỉ Tay & Nhận Diện Khuôn Mặt",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Huấn luyện mô hình nhận diện màu sắc, cử chỉ tay, biển báo giao thông, mã QR, nhận diện khuôn mặt và bám đuổi bóng.",
        "achievement": "Đồ án tốt nghiệp chuyên gia THCS, làm chủ công nghệ AI ứng dụng thực tế.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Điều khiển robot bằng giọng nói",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Nhận diện màu sắc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Xe tự hành",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Nhận diện cử chỉ tay",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Nhận diện biển báo giao thông",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Nhận dạng thẻ QR",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Nhận diện khuôn mặt",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Theo dõi bóng",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  },
  "trung-hoc": {
    "slug": "trung-hoc-bat-dau",
    "code": "Sata-Sec-Basic",
    "name": "Robotics THCS — Khóa Bắt Đầu",
    "academicName": "Điều Khiển Giọng Nói & Cảm Biến Thông Minh",
    "headline": "Làm chủ bộ công cụ Intelligent storm, điều khiển giọng nói, cảm biến chạm, cảm biến màu và camera robot",
    "category": "Trung học",
    "grade": "Trung học cơ sở",
    "age": "Lớp 6 — 9",
    "displayAge": "11 — 15 tuổi",
    "duration": "24 buổi",
    "classSize": "Tối đa < 10 học viên (kèm sát 1-1)",
    "format": "Offline tại 3 cơ sở (Hải Phòng, Hưng Yên, Ninh Bình)",
    "rating": 4.97,
    "totalStudents": 260,
    "coverImage": "/images/courses/trung-hoc-1.png",
    "badge": "KHÓA BẮT ĐẦU",
    "glowColor": "purple",
    "overview": "Khóa Bắt Đầu THCS trang bị cho học sinh nền tảng điều khiển thông minh: nhận diện giọng nói, xử lý tín hiệu camera, cảm biến chạm, cảm biến màu và giải thuật xe cảnh sát tuần tra.",
    "hardwareKit": {
      "name": "Hệ Thống Robot Thi Đấu Intelligent Storm, Cảm Biến AI & Vi Điều Khiển Nâng Cao",
      "description": "Bộ vi điều khiển công nghiệp, động cơ encoder công suất cao, cảm biến thị giác AI, camera thông minh và sa bàn thử nghiệm.",
      "items": [
        "Bộ vi điều khiển Intelligent Storm hỗ trợ lập trình kéo thả & code văn bản Python/C++",
        "Động cơ Encoder phản hồi vận tốc, góc quay và cơ cấu truyền động tải nặng",
        "Module Camera AI nhận diện khuôn mặt, màu sắc, cử chỉ tay và mã QR",
        "Cụm cảm biến rò đường kép, cảm biến chạm, radar phát hiện chướng ngại vật",
        "Bộ khung hợp kim nhôm định hình và phụ kiện lắp ráp robot tự hành thi đấu"
      ]
    },
    "skillsGained": [
      {
        "title": "Lập trình Python & Thuật toán PID",
        "desc": "Viết mã nguồn điều khiển chuyên sâu, giải thuật PID bám line và ổn định quỹ đạo",
        "percent": 98
      },
      {
        "title": "Thị giác máy tính AI & Machine Learning",
        "desc": "Huấn luyện mô hình nhận diện khuôn mặt, cử chỉ tay, mã QR và biển báo",
        "percent": 95
      },
      {
        "title": "Thiết kế cơ điện tử & Robot AGV",
        "desc": "Chế tạo xe tự hành công nghiệp, cơ cấu gắp kẹp nâng hàng chịu tải",
        "percent": 94
      },
      {
        "title": "Bản lĩnh thi đấu & Thuyết trình đồ án",
        "desc": "Rèn luyện tinh thần thi đấu đối kháng và kỹ năng bảo vệ đồ án KHKT",
        "percent": 96
      }
    ],
    "schedule": [
      {
        "shift": "Ca Sáng Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "08:30 - 10:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Thứ 7",
        "days": "Thứ 7 hàng tuần",
        "time": "14:30 - 16:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Sáng Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "08:30 - 10:30",
        "branch": "Tất cả 3 cơ sở"
      },
      {
        "shift": "Ca Chiều Chủ Nhật",
        "days": "Chủ Nhật hàng tuần",
        "time": "14:30 - 16:30",
        "branch": "Tất cả 3 cơ sở"
      }
    ],
    "tuition": {
      "originalPrice": "5.500.000đ",
      "discountedPrice": "4.200.000đ / học phần",
      "offerNote": "Tặng 01 buổi trải nghiệm 1-1 miễn phí & hỗ trợ thi đấu Robocon",
      "giftValue": "Trị giá 800.000đ"
    },
    "commitments": [
      "100% học sinh làm chủ vi điều khiển thông minh và thuật toán tự hành.",
      "Trực tiếp thi đấu trên sa bàn Robocon tiêu chuẩn cấp Tỉnh/Thành phố.",
      "Sĩ số lớp nhỏ dưới 10 học viên, giảng viên chuyên gia kèm sát 1-1.",
      "Cấp chứng nhận hoàn thành khóa học và hỗ trợ hướng dẫn đề tài NCKH."
    ],
    "modules": [
      {
        "id": "HP1",
        "title": "Học phần 1",
        "name": "Điều Khiển Giọng Nói & Camera Robot",
        "number": "Học phần 1",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Lắp ráp và lập trình điều khiển robot bằng giọng nói, camera robot, robot piano và robot đổi đèn.",
        "achievement": "Làm chủ kỹ thuật điều khiển bằng âm thanh và thị giác cơ bản.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Vòng quay xe đạp",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Đồng hồ báo thức",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Cái quạt thông minh",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Thử thách quay lại",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Điều khiển Robot bằng giọng nói",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Camera Robot",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Robot thay đổi đèn",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Chú robot piano",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 1.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      },
      {
        "id": "HP2",
        "title": "Học phần 2",
        "name": "Intelligent Storm & Cảm Biến Màu, Chạm",
        "number": "Học phần 2",
        "duration": "12 buổi - 90 phút/buổi",
        "sessionsCount": 12,
        "hoursCount": 18.0,
        "projectsCount": 9,
        "description": "Làm quen bộ công cụ Intelligent storm, xe tự hành, cảm biến chạm, cảm biến màu, đỗ xe tự động và gờ giảm tốc.",
        "achievement": "Tích hợp đa cảm biến và hoàn thành đồ án xe tự hành thông minh.",
        "lessons": [
          {
            "sessionNumber": 1,
            "title": "Làm quen với bộ công cụ Intelligent storm",
            "type": "Dự án"
          },
          {
            "sessionNumber": 2,
            "title": "Xe tự hành",
            "type": "Dự án"
          },
          {
            "sessionNumber": 3,
            "title": "Làm quen với cảm biến chạm",
            "type": "Dự án"
          },
          {
            "sessionNumber": 4,
            "title": "Robot dọn vệ sinh tự động",
            "type": "Dự án"
          },
          {
            "sessionNumber": 5,
            "title": "Ôn tập",
            "type": "Ôn tập"
          },
          {
            "sessionNumber": 6,
            "title": "Làm quen với cảm biến màu",
            "type": "Dự án"
          },
          {
            "sessionNumber": 7,
            "title": "Đỗ xe tự động",
            "type": "Dự án"
          },
          {
            "sessionNumber": 8,
            "title": "Gờ giảm tốc",
            "type": "Dự án"
          },
          {
            "sessionNumber": 9,
            "title": "Xe cảnh sát",
            "type": "Dự án"
          },
          {
            "sessionNumber": 10,
            "title": "Tạo dự án của mình",
            "type": "Dự án sáng tạo"
          },
          {
            "sessionNumber": 11,
            "title": "Demo dự án",
            "type": "Demo dự án"
          },
          {
            "sessionNumber": 12,
            "title": "Thuyết trình sản phẩm của mình",
            "type": "Báo cáo cuối học phần"
          }
        ],
        "outcomes": [
          "Hoàn thành các dự án chế tạo và lập trình trong Học phần 2.",
          "Tự tin thực hiện demo và thuyết trình sản phẩm kỹ thuật trước lớp."
        ]
      }
    ]
  }
};

export const GRADE_LEVELS: Record<string, GradeLevel> = {
  "mam-non": {
    "id": "mam-non",
    "slug": "mam-non",
    "name": "Robotics Mầm Non",
    "shortName": "Khối Mầm Non",
    "academicName": "Ươm Mầm Sáng Tạo",
    "badge": "MẦM NON",
    "tagline": "Khơi nguồn đam mê công nghệ & tư duy trực quan",
    "headline": "Khơi nguồn đam mê công nghệ & kích thích tư duy sáng tạo cho trẻ mầm non từ 4 đến 6 tuổi thông qua phương pháp vừa học vừa chơi",
    "ageRange": "4 — 6 tuổi",
    "displayAge": "4 — 6 tuổi",
    "coverImage": "/images/courses/mam-non.png",
    "hardwareKitSummary": "Bộ khối ghép cơ khí an toàn ABS bo tròn, động cơ thông minh & thẻ lệnh Screen-Free VIAI-Kids",
    "description": "Chương trình được thiết kế đặc thù cho lứa tuổi mầm non theo phương pháp 'Vừa học vừa chơi' (Play-based Learning). Bé được tự tay thao tác với các khối ghép an toàn, động cơ chuyển động trực quan và làm quen tư duy lập trình thẻ lệnh không nhìn màn hình máy tính.",
    "detailedOverview": "Tại VIAI, giai đoạn 4 — 6 tuổi là thời kỳ vàng để nuôi dưỡng trí tò mò khoa học và phát triển sự khéo léo của đôi bàn tay. Bé tiếp cận công nghệ thông qua các hoạt động tương tác vật lý sinh động, chế tạo các mô hình động vật, xe cộ biết chuyển động và hiểu bản chất vận hành của thế giới xung quanh.",
    "highlights": [
      {
        "title": "Kỹ năng vận động tinh & Khéo léo",
        "desc": "Thao tác lắp ghép ngón tay, phối hợp tay - mắt nhịp nhàng với bộ khối ghép ABS chuẩn châu Âu."
      },
      {
        "title": "Tư duy logic & Trình tự hành động",
        "desc": "Hiểu khái niệm nguyên nhân - kết quả và thực hiện các bước tuần tự để hoàn thành sản phẩm hoàn chỉnh."
      },
      {
        "title": "Lập trình thẻ Screen-Free an toàn",
        "desc": "Xây dựng thuật toán tuần tự, rẽ nhánh thông qua thẻ lệnh mã màu thông minh, bảo vệ thị lực tối đa cho trẻ nhỏ."
      }
    ],
    "childCourseSlugs": [
      "mam-non-co-ban",
      "mam-non-nang-cao",
      "mam-non-chuyen-sau"
    ],
    "learningOutcomes": [
      "Nhận biết và phân biệt các cơ cấu chuyển động cơ bản: bánh răng, ròng rọc, đòn bẩy",
      "Tự tay lắp ráp hơn 40 mô hình robot thông minh theo từng chủ đề thực tế",
      "Phát triển khả năng quan sát, tư duy hình học không gian 3D trực quan",
      "Tự tin thuyết trình giới thiệu sản phẩm của mình trước lớp và bố mẹ"
    ],
    "methodology": "Play-based Learning (Học qua trải nghiệm & trò chơi sáng tạo) kết hợp tiêu chuẩn STEM quốc tế."
  },
  "tieu-hoc": {
    "id": "tieu-hoc",
    "slug": "tieu-hoc",
    "name": "Robotics Tiểu Học",
    "shortName": "Khối Tiểu Học",
    "academicName": "Kỹ Sư Robotics",
    "badge": "TIỂU HỌC",
    "tagline": "Nền tảng thuật toán, mô phỏng 3D & cơ cấu chuyển động",
    "headline": "Xây dựng nền tảng tư duy thuật toán, làm chủ mô phỏng 3D RoboSim và chế tạo robot cơ cấu đa tầng cho học sinh Tiểu học",
    "ageRange": "Lớp 1 — 5",
    "displayAge": "6 — 11 tuổi",
    "coverImage": "/images/courses/tieu-hoc-2.png",
    "hardwareKitSummary": "Hệ sinh thái Alpha + Beta, cảm biến đa tầng & phần mềm mô phỏng 3D RoboSim chuẩn quốc tế",
    "description": "Chương trình chuẩn hóa gồm 4 khóa học: Khóa Bắt Đầu, Khóa Intren, Khóa Nâng Cao và Khóa Chuyên Gia. Mỗi khóa học gồm 2 lộ trình học phần bài bản, giúp học sinh phát triển từ cơ cấu cơ khí, bản vẽ lắp ráp đến lập trình thông minh và thám hiểm không gian.",
    "detailedOverview": "Bậc Tiểu học là giai đoạn hình thành tư duy trừu tượng và tư duy thuật toán. Lộ trình Robotics Tiểu Học tại VIAI kết hợp phương pháp Virtual-to-Physical độc quyền: học sinh học bản chất cơ cấu cơ học, thực hành trên nền tảng số RoboSim 3D để kiểm thử giải thuật, sau đó trực tiếp lắp ráp và lập trình cho Robot vật lý chạy trên sa bàn thi đấu.",
    "highlights": [
      {
        "title": "4 Khóa học phân cấp khoa học",
        "desc": "Khóa Bắt Đầu (Học cụ & Vận tốc), Khóa Intren (Sinh vật & Năng lượng), Khóa Nâng Cao (Xe công trình), Khóa Chuyên Gia (Logistics & Không gian)."
      },
      {
        "title": "Làm chủ cơ cấu cơ giới & lực truyền động",
        "desc": "Phân tích bản vẽ lắp ráp 3D, hiểu sâu nguyên lý bánh răng đa tầng, trục khuỷu, hệ bánh xe vi sai và cảm biến."
      },
      {
        "title": "Tư duy Virtual-to-Physical độc quyền",
        "desc": "Lập trình mô phỏng 3D trên RoboSim trước khi chuyển giao mã nguồn sang robot thực tế, tối ưu thuật toán vượt sa bàn."
      }
    ],
    "childCourseSlugs": [
      "tieu-hoc-bat-dau",
      "tieu-hoc-intren",
      "tieu-hoc-nang-cao",
      "tieu-hoc-chuyen-gia"
    ],
    "learningOutcomes": [
      "Thành thạo tư duy thuật toán: tuần tự, rẽ nhánh nếu - thì, vòng lặp và biến số",
      "Đọc hiểu bản vẽ kỹ thuật 3D và tự thiết kế các cơ cấu truyền động cơ khí phức hợp",
      "Làm chủ phần mềm mô phỏng 3D RoboSim, tính toán tọa độ và tối ưu lộ trình di chuyển",
      "Chế tạo robot thi đấu thực chiến và rèn luyện kỹ năng làm việc nhóm"
    ],
    "methodology": "Virtual-to-Physical Learning kết hợp Project-based Learning (Học qua dự án thực tế)."
  },
  "trung-hoc": {
    "id": "trung-hoc",
    "slug": "trung-hoc",
    "name": "Robotics Trung Học Cơ Sở",
    "shortName": "Khối Trung Học Cơ Sở",
    "academicName": "Nhà Sáng Tạo Công Nghệ",
    "badge": "TRUNG HỌC CƠ SỞ",
    "tagline": "Lập trình thực chiến Python/C++, giải thuật PID, Vision AI & AGV",
    "headline": "Nâng tầm tư duy lập trình chuyên sâu với Python/C++, thuật toán PID đối kháng, thị giác AI và kiến tạo Robot AGV",
    "ageRange": "Lớp 6 — 9",
    "displayAge": "11 — 15 tuổi",
    "coverImage": "/images/courses/trung-hoc-1.png",
    "hardwareKitSummary": "Robot thi đấu Intelligent Storm, vi điều khiển nâng cao, Camera Vision AI & hệ thống Arena thực tế",
    "description": "Chương trình đào tạo đỉnh cao gồm 4 khóa học: Khóa Bắt Đầu, Khóa Intren, Khóa Nâng Cao và Khóa Chuyên Gia. Học sinh làm chủ từ điều khiển giọng nói, cảm biến đa tầng, giải thuật rò đường vượt mê cung đến thị giác AI và xe tự hành.",
    "detailedOverview": "Bậc Trung học cơ sở tại VIAI trang bị năng lực nghiên cứu khoa học thực thụ. Học sinh được học cùng các giảng viên chuyên gia, làm việc với linh kiện công nghiệp, viết giải thuật điều khiển tự hành và phát triển các dự án có tính ứng dụng cao, sẵn sàng tham gia các cuộc thi Sáng tạo Khoa học Kỹ thuật cấp Tỉnh/Thành phố và Quốc gia.",
    "highlights": [
      {
        "title": "4 Khóa học chuyên sâu vượt bậc",
        "desc": "Khóa Bắt Đầu (Giọng nói & Intelligent Storm), Khóa Intren (Logistics & Đô thị), Khóa Nâng Cao (Giải thuật rò đường & Mê cung), Khóa Chuyên Gia (AI Vision & Xe tự hành)."
      },
      {
        "title": "Giải thuật PID & Điều khiển chuyển động chính xác",
        "desc": "Áp dụng toán học giải thuật vào căn chỉnh tốc độ, ổn định góc lái và cân bằng trọng tâm robot trên sa bàn thi đấu."
      },
      {
        "title": "Thị giác máy tính AI & Machine Learning thực chiến",
        "desc": "Huấn luyện mô hình nhận diện khuôn mặt, biển báo giao thông, mã QR và điều khiển cử chỉ tay thời gian thực."
      }
    ],
    "childCourseSlugs": [
      "trung-hoc-bat-dau",
      "trung-hoc-intren",
      "trung-hoc-nang-cao",
      "trung-hoc-chuyen-gia"
    ],
    "learningOutcomes": [
      "Lập trình thành thạo hệ thống robot tự hành với tư duy giải thuật tối ưu",
      "Làm chủ module Camera AI nhận diện hình ảnh và điều khiển robot tự động",
      "Thiết kế cơ cấu cơ điện tử chịu lực cao và xử lý sự cố kỹ thuật độc lập",
      "Tự tin tranh tài tại các giải đấu Robocon và bảo vệ đồ án KHKT"
    ],
    "methodology": "Competition-Driven Learning (Đào tạo định hướng nghiên cứu & Chinh phục giải đấu)."
  }
};


export const PRIMARY_COURSE_SLUGS = [
  'mam-non-co-ban',
  'mam-non-nang-cao',
  'mam-non-chuyen-sau',
  'tieu-hoc-bat-dau',
  'tieu-hoc-intren',
  'tieu-hoc-nang-cao',
  'tieu-hoc-chuyen-gia',
  'trung-hoc-bat-dau',
  'trung-hoc-intren',
  'trung-hoc-nang-cao',
  'trung-hoc-chuyen-gia'
];

export const PRIMARY_GRADE_LEVEL_IDS = ['mam-non', 'tieu-hoc', 'trung-hoc'] as const;

export const getGradeLevelByCourseSlug = (courseSlug: string): GradeLevel | undefined => {
  if (courseSlug.startsWith('mam-non') || courseSlug === 'robotics-mam-non' || courseSlug === 'lap-trinh-robot') {
    return GRADE_LEVELS['mam-non'];
  }
  if (courseSlug.startsWith('tieu-hoc') || ['robotics-lop-1-2', 'robotics-lop-3-4', 'robotics-lop-5', 'robotics-tieu-hoc', 'luyen-thi-robosim'].includes(courseSlug)) {
    return GRADE_LEVELS['tieu-hoc'];
  }
  if (courseSlug.startsWith('trung-hoc') || ['robotics-lop-6-7', 'robotics-ai-lop-8-9', 'robotics-trung-hoc', 'ai-iot-robotics'].includes(courseSlug)) {
    return GRADE_LEVELS['trung-hoc'];
  }
  return undefined;
};
