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
    <section ref={sectionRef} id="process" className="py-32 bg-[#F8F7FC] relative overflow-hidden border-t border-[#E9E5F2]">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] text-[#6D28D9] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Deployment Methodology
          </div>
          <h2 className="text-[40px] md:text-[56px] font-bold text-[#111018] leading-[1.1] mb-6">
            How We Deploy Your{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 55%, #C084FC 100%)' }}
            >
              AI System
            </span>
          </h2>
          <p className="text-[#4B4659] text-lg max-w-xl mx-auto mb-6 leading-relaxed">
            A battle-tested 4-phase rollout framework designed to deliver production-grade AI systems with zero operational disruption.
          </p>
          <div
            className="w-[60px] h-[3.5px] mx-auto rounded-full shadow-[0_2px_8px_rgba(109,40,217,0.3)]"
            style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 55%, #C084FC 100%)' }}
          />
        </motion.div>

        <div className="relative">
          {/* Static Background Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#E9E5F2] -translate-x-1/2 rounded-full" />

          {/* GSAP Scrubbed Vertical Laser Line */}
          <div
            ref={lineRef}
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2.5px] -translate-x-1/2 origin-top rounded-full z-0 will-change-transform shadow-[0_0_12px_rgba(109,40,217,0.5)]"
            style={{ backgroundImage: 'linear-gradient(to bottom, #6D28D9, #7C3AED, #9333EA)' }}
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
                  <div className="absolute left-[28px] md:left-1/2 w-14 h-14 bg-white border-2 border-[#D8C7FA] rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_4px_16px_rgba(109,40,217,0.12)] group hover:border-[#6D28D9] transition-all">
                    <div className="w-10 h-10 bg-[#F2EDFF] rounded-full flex items-center justify-center text-[#6D28D9] font-mono text-sm font-bold group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                      {phase.step}
                    </div>
                  </div>

                  {/* Phase Card */}
                  <div
                    className={`md:w-1/2 ${
                      isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'
                    } w-full`}
                  >
                    <div className="bg-white border border-[#E9E5F2] p-7 rounded-2xl hover:border-[#D8C7FA] hover:shadow-[0_12px_32px_rgba(109,40,217,0.1)] transition-all relative group overflow-hidden shadow-sm">
                      <div className="text-xs font-mono font-bold text-[#6D28D9] uppercase tracking-wider mb-1">
                        Phase {phase.step}
                      </div>
                      <h3 className="text-xl font-bold text-[#111018] mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-[#4B4659] text-sm leading-relaxed">
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
