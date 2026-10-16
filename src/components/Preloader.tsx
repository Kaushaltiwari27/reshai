import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            onComplete?.();
          }, 400);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Ambient Lavender Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C084FC]/15 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#7C3AED]/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Rotating Concentric Rings */}
            <div className="relative w-64 h-64 flex items-center justify-center mb-8">
              <div className="absolute inset-0 rounded-full border border-[#D8C7FA] border-dashed" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border-t-2 border-l border-[#7C3AED]"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border-b-2 border-r border-[#C084FC]/70 border-dashed"
              />
              <div className="absolute inset-12 bg-gradient-to-tr from-[#7C3AED]/15 to-[#C084FC]/15 blur-xl rounded-full animate-pulse" />

              {/* Progress Number */}
              <div className="relative z-10 text-5xl md:text-7xl font-bold text-[#111018] tracking-tighter tabular-nums flex items-baseline">
                <span>{progress}</span>
                <span className="text-2xl text-[#7C3AED] ml-1">%</span>
              </div>
            </div>

            {/* Title and Status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center flex flex-col items-center"
            >
              <div className="flex items-center gap-3 mb-2">
                <img src="/resh-logo.png" alt="RESH AI" className="w-8 h-8 object-contain" />
                <h2
                  className="text-3xl font-bold tracking-wider uppercase bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 55%, #C084FC 100%)' }}
                >
                  RESH AI
                </h2>
              </div>
              <div className="flex items-center justify-center gap-2 text-[#777185] text-sm tracking-wider font-mono">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                <span>Initializing Neural Architecture...</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
