import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const whyUsFeatures = [
  {
    title: 'Workflow-Centric Design',
    desc: 'AI tailored to your operational workflows, not rigid templates.',
  },
  {
    title: 'Seamless API & CRM Sync',
    desc: 'Deep two-way sync with your CRMs, ERPs, and databases.',
  },
  {
    title: 'Human-in-the-Loop Fallback',
    desc: 'Intelligent triage that escalates edge cases instantly to your team.',
  },
  {
    title: 'Configurable Business Logic',
    desc: 'Modular rules and prompt routing built around your exact criteria.',
  },
  {
    title: 'Enterprise Data Security',
    desc: 'Strict isolation, encrypted pipelines, and compliant data handling.',
  },
  {
    title: 'Continuous Optimization',
    desc: 'Ongoing latency auditing, prompt refinement, and monitoring.',
  },
];

export const WhyUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    gsap.fromTo(
      line,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1.2,
        },
      }
    );

    cardsRef.current.forEach((card, idx) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: `top ${75 - idx * 4}%`,
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-white relative border-t border-[#E9E5F2] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] text-[#6D28D9] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            The RESH AI Advantage
          </div>
          <h2 className="text-[40px] md:text-[56px] font-bold text-[#111018] leading-[1.1]">
            Why Businesses Choose{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 55%, #C084FC 100%)' }}
            >
              RESH AI
            </span>
          </h2>
          <p className="mt-4 text-[#4B4659] max-w-2xl mx-auto text-base leading-relaxed">
            Architected for reliability, built for production, and engineered to eliminate bottlenecks across your entire customer journey.
          </p>
        </motion.div>

        <div className="relative">
          {/* Background Static Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-[#E9E5F2] -translate-y-1/2 hidden lg:block z-0" />

          {/* Animated Purple Gradient Line Scrubbed with GSAP */}
          <div
            ref={lineRef}
            className="absolute top-1/2 left-0 right-0 h-[2.5px] -translate-y-1/2 origin-left hidden lg:block z-0 shadow-[0_0_12px_rgba(109,40,217,0.5)] will-change-transform"
            style={{ backgroundImage: 'linear-gradient(to right, #6D28D9, #7C3AED, #9333EA)' }}
          />

          {/* 6 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 relative z-10">
            {whyUsFeatures.map((feature, index) => (
              <div
                key={feature.title}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="bg-[#F8F7FC] border border-[#E9E5F2] rounded-xl p-5 text-center flex flex-col items-center justify-center min-h-[160px] hover:bg-white hover:border-[#D8C7FA] transition-all shadow-sm hover:shadow-[0_8px_24px_rgba(109,40,217,0.1)] relative card-lift group"
              >
                {/* Node Connector Dot */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-[4px] w-[8px] h-[8px] bg-[#7C3AED] rounded-full hidden lg:block opacity-0 md:opacity-100 shadow-[0_0_8px_rgba(124,58,237,0.5)] group-hover:scale-150 transition-transform" />

                <h3 className="text-[#111018] font-bold text-[14px] mb-2 group-hover:text-[#6D28D9] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#777185] text-[11px] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
