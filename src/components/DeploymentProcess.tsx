import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    step: '01',
    title: 'Discover & Workflow Audit',
    description:
      'We analyze your current operations, identify manual bottlenecks, map tool touchpoints, and define clear measurable ROI targets.',
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description:
      'We design custom agent system prompts, conversation trees, failover rules, API payloads, and data flow architecture.',
  },
  {
    step: '03',
    title: 'Build & Tool Integration',
    description:
      'We engineer the AI voice & workflow systems, connect your CRM, telephony, and databases, and run end-to-end sandbox simulations.',
  },
  {
    step: '04',
    title: 'Launch & Continuous Optimization',
    description:
      'We deploy into production with real-time monitoring, observe real-world call metrics, and continuously refine latency and accuracy.',
  },
];

export const DeploymentProcess: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const phasesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: 1.2,
        },
      }
    );

    phasesRef.current.forEach((phase) => {
      if (!phase) return;
      gsap.fromTo(
        phase,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: phase,
            start: 'top 80%',
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="process" className="py-32 bg-[#080812] relative overflow-hidden border-t border-purple-500/20">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#22D3EE] text-xs font-semibold uppercase tracking-wider mb-4">
            Deployment Methodology
          </div>
          <h2 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.1] mb-6">
            How We Deploy Your{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] bg-clip-text text-transparent">
              AI System
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-6">
            A battle-tested 4-phase rollout framework designed to deliver production-grade AI systems with zero operational disruption.
          </p>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] mx-auto rounded-full shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
        </motion.div>

        <div className="relative">
          {/* Static Background Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-purple-500/20 -translate-x-1/2 rounded-full" />

          {/* GSAP Scrubbed Vertical Laser Line */}
          <div
            ref={lineRef}
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2.5px] bg-gradient-to-b from-[#7C3AED] via-[#A855F7] to-[#22D3EE] -translate-x-1/2 origin-top rounded-full shadow-[0_0_18px_rgba(34,211,238,0.9)] z-0 will-change-transform"
          />

          <div className="space-y-12 md:space-y-20">
            {phases.map((phase, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={phase.step}
                  ref={(el) => { phasesRef.current[index] = el; }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                  } pl-16 md:pl-0 will-change-transform`}
                >
                  {/* Step Number Circle */}
                  <div className="absolute left-[28px] md:left-1/2 w-14 h-14 bg-[#151529] border-2 border-purple-500/40 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(124,58,237,0.4)] group hover:border-[#22D3EE] transition-all">
                    <div className="w-10 h-10 bg-[#080812] rounded-full flex items-center justify-center text-[#22D3EE] font-mono text-sm font-bold group-hover:text-white transition-colors">
                      {phase.step}
                    </div>
                  </div>

                  {/* Phase Card */}
                  <div
                    className={`md:w-1/2 ${
                      isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'
                    } w-full`}
                  >
                    <div className="bg-[#151529]/80 border border-purple-500/20 p-7 rounded-2xl hover:bg-[#151529] hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all relative group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-[#22D3EE]/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl pointer-events-none" />
                      <div className="text-xs font-mono font-bold text-[#22D3EE] uppercase tracking-wider mb-1">
                        Phase {phase.step}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentProcess;
