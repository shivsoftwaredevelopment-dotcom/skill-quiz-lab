import { useState } from 'react';
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

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleStartQuiz = () => {
    setIsLoginModalOpen(true);
  };

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
