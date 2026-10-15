import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = window.scrollY / totalScroll;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] origin-left z-[99999] transition-transform duration-75 pointer-events-none shadow-[0_0_10px_rgba(168,85,247,0.8)]"
      style={{ transform: `scaleX(${scrollProgress})` }}
    />
  );
};

export default ScrollProgressBar;
