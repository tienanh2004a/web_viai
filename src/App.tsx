import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { Courses3D } from './components/Courses3D';
import { FaqSection } from './components/FaqSection';
import { AboutUsSection } from './components/AboutUsSection';
import { ContactSection } from './components/ContactSection';
import { FreeTrialModal } from './components/FreeTrialModal';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { CourseDetailPage } from './components/CourseDetailPage';
import { GradeLevelPage } from './components/GradeLevelPage';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'grade-level' | 'course-detail'>('home');
  const [selectedLevelId, setSelectedLevelId] = useState<'mam-non' | 'tieu-hoc' | 'trung-hoc'>('tieu-hoc');
  const [selectedCourseSlug, setSelectedCourseSlug] = useState<string>('robotics-lop-3-4');
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [modalCourseName, setModalCourseName] = useState('Robotics Tiểu Học');

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#course/')) {
        const slug = hash.replace('#course/', '');
        setSelectedCourseSlug(slug);
        setCurrentView('course-detail');
      } else if (hash.startsWith('#cap-hoc/')) {
        const level = hash.replace('#cap-hoc/', '') as any;
        if (['mam-non', 'tieu-hoc', 'trung-hoc'].includes(level)) {
          setSelectedLevelId(level);
        }
        setCurrentView('grade-level');
      } else if (hash === '#khoa-hoc') {
        setCurrentView('home');
        setTimeout(() => {
          const el = document.getElementById('khoa-hoc');
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else if (hash === '#lien-he' || hash === '#contact') {
        setCurrentView('home');
        setTimeout(() => {
          const el = document.getElementById('lien-he');
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Tự động mở bảng đăng ký học thử sau 4 giây mỗi khi người dùng mở web
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTrialModalOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleSelectCourse = (slug: string) => {
    window.location.hash = `#course/${slug}`;
    setSelectedCourseSlug(slug);
    setCurrentView('course-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewGradeLevel = (levelId: 'mam-non' | 'tieu-hoc' | 'trung-hoc') => {
    window.location.hash = `#cap-hoc/${levelId}`;
    setSelectedLevelId(levelId);
    setCurrentView('grade-level');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    window.location.hash = '';
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCourses = () => {
    window.location.hash = '#khoa-hoc';
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('khoa-hoc');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 600, behavior: 'smooth' });
      }
    }, 80);
  };

  const handleGoContact = () => {
    if (currentView !== 'home') {
      window.location.hash = '#lien-he';
      setCurrentView('home');
    }
    setTimeout(() => {
      const el = document.getElementById('lien-he');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleOpenTrialModal = (courseName?: string) => {
    if (courseName) {
      setModalCourseName(courseName);
    }
    setIsTrialModalOpen(true);
  };

  const handleCloseTrialModal = () => {
    setIsTrialModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#111827] flex flex-col font-sans selection:bg-[#c2410c] selection:text-white">
      {/* View 1: Course Detail Page (Nội dung chi tiết 52 bài học của khóa con) */}
      {currentView === 'course-detail' ? (
        <CourseDetailPage
          courseSlug={selectedCourseSlug}
          onBackToHome={handleBackToHome}
          onBackToCourses={handleBackToCourses}
          onBackToLevel={handleViewGradeLevel}
          onOpenTrialModal={handleOpenTrialModal}
          onSelectCourse={handleSelectCourse}
        />
      ) : currentView === 'grade-level' ? (
        /* View 2: Grade Level Page (Trang giới thiệu 1 trong 3 cấp học & các khóa con) */
        <GradeLevelPage
          levelId={selectedLevelId}
          onBackToHome={handleBackToHome}
          onBackToCourses={handleBackToCourses}
          onSelectCourse={handleSelectCourse}
          onOpenTrialModal={handleOpenTrialModal}
          onSwitchLevel={handleViewGradeLevel}
        />
      ) : (
        /* View 3: Full Interactive Landing Page */
        <>
          {/* Top Sticky Navigation */}
          <Navbar 
            onOpenTrialModal={() => handleOpenTrialModal()} 
            onSelectCourse={handleSelectCourse}
            onGoHome={handleBackToHome}
            onGoContact={handleGoContact}
          />

          {/* Main Content Area */}
          <main className="flex-1">
            {/* 1. Hero with Interactive Three.js 3D Robot */}
            <Hero3D onOpenTrialModal={() => handleOpenTrialModal()} />

            {/* 2. About Us & Competition Journey (Hưng Yên & Miền Bắc) */}
            <AboutUsSection onOpenTrialModal={() => handleOpenTrialModal()} />

            {/* 3. Courses: 3 Cấp học (Mầm Non, Tiểu Học, THCS) */}
            <Courses3D 
              onOpenTrialModal={handleOpenTrialModal} 
              onViewGradeLevel={handleViewGradeLevel}
            />

            {/* 4. Frequently Asked Questions (FAQ) */}
            <FaqSection />

            {/* 5. Contact & 3 Campuses (Hải Phòng, Hưng Yên, Ninh Bình) */}
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer onSelectCourse={handleSelectCourse} onGoContact={handleGoContact} />

          {/* Floating Action Buttons */}
          <FloatingActions onOpenTrialModal={() => handleOpenTrialModal()} hide={isTrialModalOpen} />
        </>
      )}

      {/* Free Trial Registration Modal (Accessible from all views) */}
      <FreeTrialModal
        isOpen={isTrialModalOpen}
        onClose={handleCloseTrialModal}
        defaultCourse={modalCourseName}
      />
    </div>
  );
};

export default App;
