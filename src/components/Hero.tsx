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
    <section className="relative w-full min-h-screen bg-white flex flex-col items-center overflow-hidden font-general justify-center">
      {/* Subtle Background Video — very light mix for white theme */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-[0.04] mix-blend-multiply"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Ambient Radial Glows — soft lavender */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#C084FC]/10 rounded-full blur-[160px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#7C3AED]/8 rounded-full blur-[180px] z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#E9D5FF]/40 rounded-full blur-[200px] z-0 pointer-events-none" />

      {/* Very subtle gradient overlay at top/bottom for blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/40 z-[1] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-7xl px-6 pt-[160px] md:pt-[200px] pb-[90px] my-auto">

        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-2.5 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] px-4 py-1.5 mb-[30px] shadow-[0_2px_12px_rgba(109,40,217,0.10)]"
        >
          <div className="w-[7px] h-[7px] bg-[#7C3AED] rounded-full animate-pulse shadow-[0_0_8px_rgba(124,58,237,0.5)]" />
          <span className="text-[13px] font-medium tracking-wide">
            <span className="text-[#777185]">Enterprise AI Implementation Partner | </span>
            <span className="text-[#6D28D9] font-semibold">Intelligent Growth Systems</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="text-[38px] sm:text-[54px] md:text-[68px] lg:text-[76px] font-bold leading-[1.1] text-center max-w-[980px] tracking-tight"
        >
          <span className="text-[#111018]">Build Smarter. Automate Everything.</span>{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 55%, #C084FC 100%)' }}
          >
            Scale with AI.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-[24px] mb-[38px] text-[16px] md:text-[19px] font-normal text-[#4B4659] max-w-[780px] text-center leading-relaxed"
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
              className="relative inline-flex items-center justify-center px-[32px] py-[14px] rounded-full bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white text-[15px] font-semibold tracking-wide shadow-[0_6px_30px_rgba(109,40,217,0.35)] hover:shadow-[0_8px_40px_rgba(109,40,217,0.50)] hover:scale-[1.02] active:scale-95 transition-all"
            >
              Book a Strategy Call
            </button>
          </Magnetic>

          <Magnetic>
            <a
              className="px-[30px] py-[14px] rounded-full border-2 border-[#D8C7FA] text-[#6D28D9] font-semibold text-[15px] hover:bg-[#F2EDFF] hover:border-[#7C3AED] transition-all active:scale-95 bg-white flex items-center justify-center shadow-[0_2px_12px_rgba(109,40,217,0.08)]"
              href="/#services"
            >
              Explore Our AI Solutions
            </a>
          </Magnetic>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-[#777185] font-medium"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
            <span>Sub-Second Response Latency</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-[#D8C7FA]" />
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA]" />
            <span>Zero-Downtime Autonomous Routing</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-[#D8C7FA]" />
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Enterprise Data Security &amp; Isolation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
