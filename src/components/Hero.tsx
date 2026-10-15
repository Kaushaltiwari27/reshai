import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleBooking = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.location.assign('/book');
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#080812] flex flex-col items-center overflow-hidden font-general justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-luminosity"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlays & Ambient Radial Glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080812]/90 via-[#080812]/75 to-[#080812] z-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7C3AED]/20 rounded-full blur-[140px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-[#22D3EE]/12 rounded-full blur-[150px] z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-900/15 rounded-full blur-[160px] z-0 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-7xl px-6 pt-[160px] md:pt-[200px] pb-[90px] my-auto">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-2.5 rounded-full bg-[#151529]/80 border border-purple-500/30 px-4 py-1.5 mb-[30px] backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]"
        >
          <div className="w-[7px] h-[7px] bg-[#22D3EE] rounded-full animate-pulse shadow-[0_0_8px_#22D3EE]" />
          <span className="text-[13px] font-medium tracking-wide">
            <span className="text-slate-300">Enterprise AI Implementation Partner | </span>
            <span className="text-[#A855F7] font-semibold">Intelligent Growth Systems</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="text-[38px] sm:text-[54px] md:text-[68px] lg:text-[76px] font-bold leading-[1.1] text-center max-w-[980px] tracking-tight"
        >
          <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Build Smarter. Automate Everything.
          </span>{' '}
          <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">
            Scale with AI.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-[24px] mb-[38px] text-[16px] md:text-[19px] font-normal text-slate-300 max-w-[780px] text-center leading-relaxed"
        >
          RESH AI builds intelligent AI agents, voice systems, and business automations that help companies reduce repetitive work, respond faster, and unlock new growth opportunities.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Magnetic>
            <button
              type="button"
              onClick={handleBooking}
              className="relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden group bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] active:scale-95"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[3px] bg-white opacity-80 blur-[3px] group-hover:opacity-100 group-hover:w-[90%] transition-all duration-300"></div>
              <div className="relative bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] rounded-full px-[32px] py-[14px] h-full w-full flex items-center justify-center">
                <span className="text-white text-[15px] font-semibold tracking-wide">
                  Book a Strategy Call
                </span>
              </div>
            </button>
          </Magnetic>

          <Magnetic>
            <a
              className="px-[30px] py-[14px] rounded-full border border-purple-500/30 text-white font-medium text-[15px] hover:bg-purple-900/20 hover:border-purple-400/50 transition-all active:scale-95 bg-[#151529]/70 backdrop-blur-md flex items-center justify-center shadow-lg shadow-purple-950/20"
              href="#services"
            >
              Explore Our AI Solutions
            </a>
          </Magnetic>
        </motion.div>

        {/* Capability / Trust statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]"></span>
            <span>Sub-Second Response Latency</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-purple-500"></div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]"></span>
            <span>Zero-Downtime Autonomous Routing</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-purple-500"></div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Enterprise Data Security &amp; Isolation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
