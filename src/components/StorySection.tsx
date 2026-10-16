import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const StorySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    // Desktop: Pin and scrub horizontally across the screen
    mm.add('(min-width: 768px)', () => {
      const getScrollAmount = () => {
        return track.scrollWidth - window.innerWidth + 200;
      };

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
      });

      const st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${Math.max(getScrollAmount(), 1600)}`,
        pin: true,
        anticipatePin: 1,
        scrub: 1.2,
        animation: tween,
        invalidateOnRefresh: true,
      });

      // Individual story word & icon highlight on scroll
      const items = track.querySelectorAll('.story-item');
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0.35, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: item,
              containerAnimation: tween,
              start: 'left 85%',
              end: 'left 40%',
              scrub: true,
            },
          }
        );
      });

      // Floating ambient motion for SVGs and icons
      iconsRef.current.forEach((icon, idx) => {
        if (!icon) return;
        gsap.to(icon, {
          y: gsap.utils.random(-8, 8),
          rotation: gsap.utils.random(-6, 6),
          duration: gsap.utils.random(2.4, 4),
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: idx * 0.15,
        });
      });

      return () => {
        st.kill();
        tween.kill();
      };
    });

    // Mobile / Tablet: Staggered reveal
    mm.add('(max-width: 767px)', () => {
      const items = track.querySelectorAll('.story-item');
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0.25, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              end: 'top 55%',
              scrub: true,
            },
          }
        );
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Our story"
      className="relative w-full h-auto py-24 md:py-0 md:h-screen flex items-center justify-center bg-white border-t border-b border-[#E9E5F2] overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '320px',
          background: 'radial-gradient(ellipse at center, rgba(109,40,217,0.08) 0%, rgba(192,132,252,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Side Fade Gradients for clean edge mask */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          pointerEvents: 'none',
          background: 'linear-gradient(to right, #FFFFFF 0%, transparent 8%, transparent 92%, #FFFFFF 100%)',
        }}
        className="hidden md:block"
      />

      {/* Top Label */}
      <p
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: '#7C3AED',
          whiteSpace: 'nowrap',
        }}
        className="flex items-center gap-2 font-mono"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
        <span>RESH AI Architecture — scroll to explore</span>
      </p>

      {/* Horizontal Text Track */}
      <div
        ref={trackRef}
        style={{ userSelect: 'none' }}
        className="relative flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start h-auto md:h-full max-w-none px-6 md:pl-[max(8vw,60px)] md:pr-[max(15vw,100px)] gap-x-4 gap-y-6 md:gap-0 whitespace-normal md:whitespace-nowrap will-change-transform z-10"
      >
        <span className="story-item text-center md:text-left whitespace-nowrap text-[clamp(2.2rem,6vw,5.5rem)] font-[650] tracking-[-0.025em] leading-[1.1] text-[#111018]">
          Engineering
        </span>

        <div className="hidden md:block shrink-0 w-10" aria-hidden="true" />

        {/* SVG Wave 1 */}
        <span
          ref={(el) => { iconsRef.current[0] = el; }}
          className="story-item inline-flex items-center shrink-0"
          aria-hidden="true"
        >
          <svg width="110" height="36" viewBox="0 0 100 32" fill="none" className="inline-block align-middle shrink-0">
            <path d="M0 16 C25 4, 45 28, 70 16 S90 4, 100 16" stroke="url(#fa-g-resh)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            <path d="M88 10 L100 16 L88 22" stroke="#7C3AED" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="fa-g-resh" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#7C3AED" stopOpacity="1" />
                <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <div className="hidden md:block shrink-0 w-10" aria-hidden="true" />

        <span className="story-item text-center md:text-left whitespace-nowrap text-[clamp(2.2rem,6vw,5.5rem)] font-light tracking-[-0.025em] leading-[1.1] text-[#777185]">
          intelligent
        </span>

        <div className="hidden md:block shrink-0 w-6" aria-hidden="true" />

        <span className="story-item text-center md:text-left whitespace-nowrap text-[clamp(2.2rem,6vw,5.5rem)] font-[650] tracking-[-0.025em] leading-[1.1] text-[#111018]">
          autonomous
        </span>

        <div className="hidden md:block shrink-0 w-6" aria-hidden="true" />

        <span className="story-item text-center md:text-left whitespace-nowrap text-[clamp(2.2rem,6vw,5.5rem)] font-[650] tracking-[-0.025em] leading-[1.1] text-[#111018]">
          systems
        </span>

        <div className="hidden md:block shrink-0 w-14" aria-hidden="true" />

        {/* Concentric Circles 1 */}
        <span
          ref={(el) => { iconsRef.current[1] = el; }}
          className="story-item inline-flex items-center shrink-0"
          aria-hidden="true"
        >
          <svg width="34" height="34" viewBox="0 0 30 30" fill="none" className="inline-block align-middle shrink-0">
            <circle cx="15" cy="15" r="3.5" fill="#7C3AED" />
            <circle cx="15" cy="15" r="7.5" fill="#7C3AED" fillOpacity="0.25" />
            <circle cx="15" cy="15" r="14.5" fill="#9333EA" fillOpacity="0.12" />
          </svg>
        </span>

        <div className="hidden md:block shrink-0 w-14" aria-hidden="true" />

        <span className="story-item text-center md:text-left whitespace-nowrap text-[clamp(2.2rem,6vw,5.5rem)] font-light tracking-[-0.025em] leading-[1.1] text-[#777185]">
          powered by
        </span>

        <div className="hidden md:block shrink-0 w-6" aria-hidden="true" />

        {/* Neural Network Nodes */}
        <span
          ref={(el) => { iconsRef.current[2] = el; }}
          className="story-item inline-flex items-center shrink-0"
          aria-hidden="true"
        >
          <svg width="56" height="56" viewBox="0 0 52 52" fill="none" className="inline-block align-middle shrink-0">
            <line x1="26" y1="6" x2="6" y2="26" stroke="#9333EA" strokeOpacity="0.4" strokeWidth="1" />
            <line x1="26" y1="6" x2="46" y2="26" stroke="#7C3AED" strokeOpacity="0.4" strokeWidth="1" />
            <line x1="6" y1="26" x2="26" y2="46" stroke="#6D28D9" strokeOpacity="0.4" strokeWidth="1" />
            <line x1="46" y1="26" x2="26" y2="46" stroke="#9333EA" strokeOpacity="0.4" strokeWidth="1" />
            <line x1="6" y1="26" x2="46" y2="26" stroke="#7C3AED" strokeOpacity="0.3" strokeWidth="1" />
            <circle cx="26" cy="6" r="2.8" fill="#6D28D9" fillOpacity="0.95" />
            <circle cx="6" cy="26" r="2.8" fill="#9333EA" fillOpacity="0.95" />
            <circle cx="46" cy="26" r="2.8" fill="#7C3AED" fillOpacity="0.95" />
            <circle cx="26" cy="46" r="2.8" fill="#6D28D9" fillOpacity="0.95" />
            <circle cx="26" cy="26" r="5.5" fill="#9333EA" fillOpacity="0.2" />
            <circle cx="26" cy="26" r="2.2" fill="#7C3AED" />
          </svg>
        </span>

        <div className="hidden md:block shrink-0 w-6" aria-hidden="true" />

        {/* Gradient AI */}
        <span
          className="story-item text-center md:text-left whitespace-nowrap text-[clamp(2.2rem,6vw,5.5rem)] font-extrabold tracking-[-0.025em] leading-[1.1] bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 55%, #C084FC 100%)',
          }}
        >
          AI
        </span>

        <div className="hidden md:block shrink-0 w-12" aria-hidden="true" />

        {/* Speed Lines */}
        <span
          ref={(el) => { iconsRef.current[3] = el; }}
          className="story-item inline-flex items-center shrink-0"
          aria-hidden="true"
        >
          <svg width="52" height="30" viewBox="0 0 48 28" fill="none" className="inline-block align-middle shrink-0">
            <line x1="0" y1="7" x2="38" y2="7" stroke="#6D28D9" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
            <line x1="0" y1="14" x2="48" y2="14" stroke="#7C3AED" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6" />
            <line x1="0" y1="21" x2="30" y2="21" stroke="#9333EA" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
          </svg>
        </span>

        <div className="hidden md:block shrink-0 w-12" aria-hidden="true" />

        <span className="story-item text-center md:text-left whitespace-nowrap text-[clamp(2.2rem,6vw,5.5rem)] font-[650] tracking-[-0.025em] leading-[1.1] text-[#111018]">
          precision
        </span>

        <div className="hidden md:block shrink-0 w-6" aria-hidden="true" />

        {/* Purple Circles */}
        <span
          ref={(el) => { iconsRef.current[4] = el; }}
          className="story-item inline-flex items-center shrink-0"
          aria-hidden="true"
        >
          <svg width="22" height="22" viewBox="0 0 18 18" fill="none" className="inline-block align-middle shrink-0">
            <circle cx="9" cy="9" r="2" fill="#7C3AED" />
            <circle cx="9" cy="9" r="4.5" fill="#7C3AED" fillOpacity="0.3" />
            <circle cx="9" cy="9" r="8.5" fill="#7C3AED" fillOpacity="0.1" />
          </svg>
        </span>

        <div className="hidden md:block shrink-0 w-6" aria-hidden="true" />

        <span className="story-item text-center md:text-left whitespace-nowrap text-[clamp(2.2rem,6vw,5.5rem)] font-[650] tracking-[-0.025em] leading-[1.1] text-[#111018]">
          strategy
        </span>

        <div className="hidden md:block shrink-0 w-14" aria-hidden="true" />

        {/* Wave 2 */}
        <span
          ref={(el) => { iconsRef.current[5] = el; }}
          className="story-item inline-flex items-center shrink-0"
          aria-hidden="true"
        >
          <svg width="110" height="36" viewBox="0 0 100 32" fill="none" className="inline-block align-middle shrink-0">
            <path d="M0 16 C25 4, 45 28, 70 16 S90 4, 100 16" stroke="url(#fa-g-resh-2)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            <path d="M88 10 L100 16 L88 22" stroke="#7C3AED" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="fa-g-resh-2" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#6D28D9" stopOpacity="1" />
                <stop offset="100%" stopColor="#9333EA" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <div className="hidden md:block shrink-0 w-14" aria-hidden="true" />

        <span className="story-item text-center md:text-left whitespace-nowrap text-[clamp(2.2rem,6vw,5.5rem)] font-light tracking-[-0.025em] leading-[1.1] text-[#777185]">
          and modern
        </span>

        <div className="hidden md:block shrink-0 w-4" aria-hidden="true" />

        <span className="story-item text-center md:text-left whitespace-nowrap text-[clamp(2.2rem,6vw,5.5rem)] font-[650] tracking-[-0.025em] leading-[1.1] text-[#111018]">
          architecture
        </span>

        <div className="hidden md:block shrink-0 w-12" aria-hidden="true" />

        {/* Chevron bracket */}
        <span
          ref={(el) => { iconsRef.current[6] = el; }}
          className="story-item inline-flex items-center shrink-0"
          aria-hidden="true"
        >
          <svg width="32" height="40" viewBox="0 0 28 36" fill="none" className="inline-block align-middle shrink-0">
            <path d="M18 2 L8 18 L18 34" stroke="#7C3AED" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
          </svg>
        </span>

        <div className="hidden md:block shrink-0 w-12" aria-hidden="true" />

        <span className="story-item text-center md:text-left whitespace-nowrap text-[clamp(2.2rem,6vw,5.5rem)] font-light tracking-[-0.025em] leading-[1.1] text-[#777185]">
          that helps
        </span>

        <div className="hidden md:block shrink-0 w-4" aria-hidden="true" />

        <span className="story-item text-center md:text-left whitespace-nowrap text-[clamp(2.2rem,6vw,5.5rem)] font-[650] tracking-[-0.025em] leading-[1.1] text-[#111018]">
          ambitious businesses
        </span>

        <div className="hidden md:block shrink-0 w-12" aria-hidden="true" />

        {/* 4-point Star */}
        <span
          ref={(el) => { iconsRef.current[7] = el; }}
          className="story-item inline-flex items-center shrink-0"
          aria-hidden="true"
        >
          <svg width="26" height="26" viewBox="0 0 22 22" fill="none" className="inline-block align-middle shrink-0">
            <path d="M11 1 L12.6 9.4 L21 11 L12.6 12.6 L11 21 L9.4 12.6 L1 11 L9.4 9.4 Z" fill="url(#st-g-resh)" />
            <defs>
              <radialGradient id="st-g-resh" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="50%" stopColor="#9333EA" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.6" />
              </radialGradient>
            </defs>
          </svg>
        </span>

        <div className="hidden md:block shrink-0 w-12" aria-hidden="true" />

        <span className="story-item text-center md:text-left whitespace-nowrap text-[clamp(2.2rem,6vw,5.5rem)] font-[650] tracking-[-0.025em] leading-[1.1] text-[#111018]">
          scale faster
        </span>

        <div className="hidden md:block shrink-0 w-8" aria-hidden="true" />

        {/* Purple Accent Circles */}
        <span
          ref={(el) => { iconsRef.current[8] = el; }}
          className="story-item inline-flex items-center shrink-0"
          aria-hidden="true"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="inline-block align-middle shrink-0">
            <circle cx="12" cy="12" r="2.8" fill="#7C3AED" />
            <circle cx="12" cy="12" r="6" fill="#7C3AED" fillOpacity="0.25" />
            <circle cx="12" cy="12" r="11.5" fill="#6D28D9" fillOpacity="0.1" />
          </svg>
        </span>

        <div className="hidden md:block shrink-0 w-8" aria-hidden="true" />

        <span
          className="story-item text-center md:text-left whitespace-nowrap text-[clamp(2.2rem,6vw,5.5rem)] font-extrabold tracking-[-0.025em] leading-[1.1] bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 55%, #C084FC 100%)',
          }}
        >
          together
        </span>
      </div>

      {/* Bottom Scroll Indicator */}
      <p
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '26px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#7C3AED',
          whiteSpace: 'nowrap',
        }}
        className="hidden md:flex font-mono"
      >
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="animate-pulse">
          <path d="M2 2 L10 6 L2 10" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Keep scrolling to explore</span>
      </p>
    </section>
  );
};

export default StorySection;
