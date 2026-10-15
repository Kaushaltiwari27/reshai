import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import ScrollProgressBar from './components/ScrollProgressBar';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import BookCallPage from './pages/BookCallPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import SecurityPage from './pages/SecurityPage';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  useEffect(() => {
    // Luxury butter-smooth scrolling coupled with GSAP ScrollTrigger
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#080812] text-white font-general selection:bg-[#7C3AED] selection:text-white">
        {/* Preloader */}
        <Preloader />

        {/* Top Scroll Progress Bar */}
        <ScrollProgressBar />

        {/* Custom Trailing Magnetic Cursor */}
        <CustomCursor />

        {/* Grainy Noise Overlay */}
        <div className="fixed inset-0 z-[9990] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay pointer-events-none" />

        {/* Fixed Ambient Background Lights */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#080812]">
          <div className="absolute rounded-full w-[650px] h-[650px] blur-[160px] opacity-20 bg-[#7C3AED]/25 top-[-100px] left-[-100px]" />
          <div className="absolute rounded-full w-[700px] h-[700px] blur-[180px] opacity-15 bg-[#22D3EE]/15 bottom-[-100px] right-[-100px]" />
          <div className="absolute rounded-full w-[500px] h-[500px] blur-[160px] opacity-10 bg-purple-900/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                'radial-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Multi-Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookCallPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
