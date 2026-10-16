import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch desktop screens
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else {
        const isClickable = target?.closest('button, a, input, select');
        if (isClickable) {
          setIsHovered(true);
          setCursorText('');
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[99998]">
      {/* Outer Circle Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-purple-500/40 flex items-center justify-center pointer-events-none"
        animate={{
          x: mousePosition.x - (cursorText ? 40 : isHovered ? 25 : 16),
          y: mousePosition.y - (cursorText ? 40 : isHovered ? 25 : 16),
          width: cursorText ? 80 : isHovered ? 50 : 32,
          height: cursorText ? 80 : isHovered ? 50 : 32,
          backgroundColor: cursorText
            ? 'rgba(109, 40, 217, 0.15)'
            : isHovered
            ? 'rgba(124, 58, 237, 0.08)'
            : 'transparent',
          borderColor: isHovered ? '#7C3AED' : 'rgba(168, 85, 247, 0.35)',
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 250,
          mass: 0.15,
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-bold tracking-widest text-[#6D28D9] uppercase select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Dot */}
      {!cursorText && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#7C3AED] shadow-[0_0_8px_rgba(124,58,237,0.5)] pointer-events-none"
          animate={{
            x: mousePosition.x - 3,
            y: mousePosition.y - 3,
          }}
          transition={{
            type: 'spring',
            damping: 40,
            stiffness: 500,
            mass: 0.05,
          }}
        />
      )}
    </div>
  );
};

export default CustomCursor;
