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
    <section ref={sectionRef} className="py-32 bg-[#080812] relative border-t border-purple-500/20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#22D3EE] text-xs font-semibold uppercase tracking-wider mb-4">
            The RESH AI Advantage
          </div>
          <h2 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.1]">
            Why Businesses Choose{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] bg-clip-text text-transparent">
              RESH AI
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base">
            Architected for reliability, built for production, and engineered to eliminate bottlenecks across your entire customer journey.
          </p>
        </motion.div>

        <div className="relative">
          {/* Background Static Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-purple-500/20 -translate-y-1/2 hidden lg:block z-0" />

          {/* Animated Electric Line Scrubbed with GSAP */}
          <div
            ref={lineRef}
            className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] -translate-y-1/2 origin-left hidden lg:block z-0 shadow-[0_0_15px_rgba(34,211,238,0.8)] will-change-transform"
          />

          {/* 6 Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 relative z-10">
            {whyUsFeatures.map((feature, index) => (
              <div
                key={feature.title}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="bg-[#151529]/80 border border-purple-500/20 rounded-xl p-5 text-center flex flex-col items-center justify-center min-h-[160px] hover:bg-[#151529] hover:border-[#22D3EE]/50 transition-all shadow-xl shadow-purple-950/10 relative card-lift group"
              >
                {/* Node Connector Dot */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-[4px] w-[8px] h-[8px] bg-[#22D3EE] rounded-full hidden lg:block opacity-0 md:opacity-100 shadow-[0_0_8px_#22D3EE] group-hover:scale-150 transition-transform" />

                <h3 className="text-white font-semibold text-[14px] mb-2 group-hover:text-[#22D3EE] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-[11px] leading-relaxed">
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
