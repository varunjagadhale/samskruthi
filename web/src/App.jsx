import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Global Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import LeadModal from './components/LeadModal';
import NotificationPopup from './components/NotificationPopup';
import FloatingWidgets from './components/FloatingWidgets';
import CookieBanner from './components/CookieBanner';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ProgramsPage from './pages/ProgramsPage';
import BranchesPage from './pages/BranchesPage';
import BlogPage from './pages/BlogPage';
import BlogPostDetail from './pages/BlogPostDetail';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

// Scroll Reset Component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoModalBranch, setDemoModalBranch] = useState('');

  const handleOpenDemoModal = (branchName = '') => {
    setDemoModalBranch(branchName);
    setIsDemoModalOpen(true);
  };

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        
        <div className="min-h-screen flex flex-col bg-soft-gradient text-slate-900 font-sans selection:bg-sky-500 selection:text-white">
          
          {/* Header Navigation */}
          <Header
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenDemoModal={() => handleOpenDemoModal('')}
          />

          {/* Main Route Views */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home onOpenDemoModal={handleOpenDemoModal} />} />
              <Route path="/about" element={<About onOpenDemoModal={handleOpenDemoModal} />} />
              <Route path="/programs" element={<ProgramsPage onOpenDemoModal={handleOpenDemoModal} />} />
              <Route path="/branches" element={<BranchesPage onOpenDemoModal={handleOpenDemoModal} />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostDetail onOpenDemoModal={handleOpenDemoModal} />} />
              <Route path="/contact" element={<Contact onOpenDemoModal={handleOpenDemoModal} />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>

          {/* Footer Component */}
          <Footer onOpenDemoModal={() => handleOpenDemoModal('')} />

          {/* Interactive Modals & Floating Overlays */}
          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />

          <LeadModal
            isOpen={isDemoModalOpen}
            onClose={() => setIsDemoModalOpen(false)}
            defaultBranch={demoModalBranch}
          />

          <NotificationPopup
            onOpenDemo={() => handleOpenDemoModal('')}
          />

          <FloatingWidgets />

          <CookieBanner />

        </div>
      </Router>
    </HelmetProvider>
  );
}
