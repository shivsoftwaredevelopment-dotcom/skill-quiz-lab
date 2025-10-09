import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VisionMissionSection from './components/VisionMissionSection';
import CareerSection from './components/CareerSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import FloatingChatbot from './components/FloatingChatbot';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAdmin(!!session);
      setIsCheckingAuth(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdmin(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleStartQuiz = () => {
    setIsLoginModalOpen(true);
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (window.location.pathname === '/admin') {
    if (!isAdmin) {
      return <AdminLogin onLoginSuccess={() => setIsAdmin(true)} />;
    }
    return <AdminDashboard onLogout={() => setIsAdmin(false)} />;
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
      <HeroSection onStartQuiz={handleStartQuiz} />
      <AboutSection />
      <VisionMissionSection />
      <CareerSection />
      <ContactSection />
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <FloatingChatbot />
    </div>
  );
}

export default App;
