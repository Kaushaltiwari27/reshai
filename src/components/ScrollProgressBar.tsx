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
      className="fixed top-0 left-0 right-0 h-[2.5px] origin-left z-[99999] transition-transform duration-75 pointer-events-none"
      style={{
        transform: `scaleX(${scrollProgress})`,
        background: 'linear-gradient(90deg, #6D28D9 0%, #9333EA 55%, #C084FC 100%)',
        boxShadow: '0 0 8px rgba(109, 40, 217, 0.5)',
      }}
    />
  );
};

export default ScrollProgressBar;
