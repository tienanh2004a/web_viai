import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { TrustMetrics } from './components/TrustMetrics';
import { Courses3D } from './components/Courses3D';
import { TestimonialsMarquee } from './components/TestimonialsMarquee';
import { FaqSection } from './components/FaqSection';
import { AboutUsSection } from './components/AboutUsSection';
import { ContactSection } from './components/ContactSection';
import { FreeTrialModal } from './components/FreeTrialModal';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { CourseDetailPage } from './components/CourseDetailPage';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'course-detail'>('home');
  const [selectedCourseSlug, setSelectedCourseSlug] = useState<string>('lap-trinh-robot');
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [modalCourseName, setModalCourseName] = useState('Lập trình Robot 3D & RoboSim');

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#course/')) {
        const slug = hash.replace('#course/', '');
        setSelectedCourseSlug(slug);
        setCurrentView('course-detail');
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

  const handleBackToHome = () => {
    window.location.hash = '';
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      {/* View 1: Course Detail Page */}
      {currentView === 'course-detail' ? (
        <CourseDetailPage
          courseSlug={selectedCourseSlug}
          onBackToHome={handleBackToHome}
          onOpenTrialModal={handleOpenTrialModal}
          onSelectCourse={handleSelectCourse}
        />
      ) : (
        /* View 2: Full Interactive 3D Landing Page */
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

            {/* 2. Key Trust Metrics Ribbon */}
            <TrustMetrics />

            {/* 3. About Us & Competition Journey (Hưng Yên & Miền Bắc) */}
            <AboutUsSection onOpenTrialModal={() => handleOpenTrialModal()} />

            {/* 4. Courses with 3D Tilt Cards */}
            <Courses3D 
              onOpenTrialModal={handleOpenTrialModal} 
              onViewCourseDetail={handleSelectCourse}
            />

            {/* 5. Dual Infinite Parent Testimonials Marquee */}
            <TestimonialsMarquee />

            {/* 6. Frequently Asked Questions (FAQ) */}
            <FaqSection />

            {/* 7. Contact & 3 Campuses (Hải Phòng, Hưng Yên, Ninh Bình) */}
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer onSelectCourse={handleSelectCourse} onGoContact={handleGoContact} />

          {/* Floating Action Buttons */}
          <FloatingActions onOpenTrialModal={() => handleOpenTrialModal()} />
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
