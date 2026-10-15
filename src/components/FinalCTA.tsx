import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

interface FinalCTAProps {
  onOpenBooking?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  const handleBooking = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.location.assign('/book');
    }
  };

  return (
    <section className="py-32 bg-[#080812] relative border-t border-purple-500/20 overflow-hidden">
      {/* Background Animated Glows */}
      <div className="absolute inset-0 z-0 bg-transparent pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] max-w-5xl bg-[#7C3AED]/15 blur-[140px] rounded-full mix-blend-screen pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
          className="absolute -top-[10%] right-[15%] w-[500px] h-[500px] bg-[#22D3EE]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080812] via-transparent to-[#080812] pointer-events-none z-10" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#22D3EE] text-xs font-semibold uppercase tracking-wider mb-6">
            Ready to Transform Operations?
          </div>

          <h2 className="text-[38px] sm:text-[50px] md:text-[68px] font-bold text-white leading-[1.05] mb-6 tracking-tight">
            Your Next Competitive Advantage{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] bg-clip-text text-transparent">
              Starts with AI.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-normal leading-relaxed">
            Stop losing leads to response delays and operational bottlenecks. Partner with RESH AI to design and deploy autonomous systems that scale with your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Magnetic>
              <button
                type="button"
                onClick={handleBooking}
                className="relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden group bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] transition-all hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] w-full sm:w-auto active:scale-95"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[3px] bg-white opacity-80 blur-[3px] group-hover:opacity-100 group-hover:w-[90%] transition-all duration-300" />
                <div className="relative bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] rounded-full px-[42px] py-[18px] h-full w-full flex items-center justify-center">
                  <span className="text-white text-[16px] font-semibold tracking-wide">
                    Book Your Strategy Call
                  </span>
                </div>
              </button>
            </Magnetic>

            <Magnetic>
              <a
                href="#services"
                className="px-[38px] py-[18px] rounded-full border border-purple-500/30 text-white font-semibold text-[16px] hover:bg-purple-900/20 hover:border-purple-400/50 transition-all w-full sm:w-auto active:scale-95 bg-[#151529]/80 backdrop-blur-md shadow-lg shadow-purple-950/20"
              >
                Explore Our AI Solutions
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
