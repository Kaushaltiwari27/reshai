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
    <section className="py-32 bg-[#F2EDFF] relative border-t border-[#D8C7FA] overflow-hidden">
      {/* Background Animated Lavender Glows */}
      <div className="absolute inset-0 z-0 bg-transparent pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] max-w-5xl bg-[#C084FC]/30 blur-[140px] rounded-full pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
          className="absolute -top-[10%] right-[15%] w-[500px] h-[500px] bg-[#7C3AED]/20 blur-[150px] rounded-full pointer-events-none"
        />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D8C7FA] text-[#6D28D9] text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
            Ready to Transform Operations?
          </div>

          <h2 className="text-[38px] sm:text-[50px] md:text-[68px] font-bold text-[#111018] leading-[1.05] mb-6 tracking-tight">
            Your Next Competitive Advantage{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 55%, #C084FC 100%)' }}
            >
              Starts with AI.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#4B4659] mb-12 max-w-2xl mx-auto font-normal leading-relaxed">
            Stop losing leads to response delays and operational bottlenecks. Partner with RESH AI to design and deploy autonomous systems that scale with your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Magnetic>
              <button
                type="button"
                onClick={handleBooking}
                className="relative inline-flex items-center justify-center px-[42px] py-[18px] rounded-full bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white text-[16px] font-semibold tracking-wide shadow-[0_6px_30px_rgba(109,40,217,0.35)] hover:shadow-[0_8px_40px_rgba(109,40,217,0.5)] transition-all w-full sm:w-auto active:scale-95 cursor-pointer"
              >
                Book Your Strategy Call
              </button>
            </Magnetic>

            <Magnetic>
              <a
                href="/#services"
                className="px-[38px] py-[18px] rounded-full border-2 border-[#D8C7FA] text-[#6D28D9] font-bold text-[16px] hover:bg-white hover:border-[#7C3AED] transition-all w-full sm:w-auto active:scale-95 bg-white/80 shadow-sm"
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
