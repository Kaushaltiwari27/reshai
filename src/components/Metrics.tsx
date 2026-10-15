import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    targetVal: 100,
    prefix: '',
    suffix: 'k+',
    displayDefault: '100k+',
    label: 'Automated Operations Executed',
    detail: 'Across voice, CRM, and task pipelines',
    decimals: 0,
  },
  {
    targetVal: 800,
    prefix: '< ',
    suffix: 'ms',
    displayDefault: '< 800ms',
    label: 'AI Voice Response Latency',
    detail: 'Natural conversational speed',
    decimals: 0,
  },
  {
    targetVal: 365,
    prefix: '24/7/',
    suffix: '',
    displayDefault: '24/7/365',
    label: 'Autonomous Lead Intake',
    detail: 'Instant triage without human delay',
    decimals: 0,
  },
  {
    targetVal: 99.9,
    prefix: '',
    suffix: '%',
    displayDefault: '99.9%',
    label: 'Workflow Architecture Reliability',
    detail: 'Enterprise failover & monitoring',
    decimals: 1,
  },
];

export const Metrics: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    metrics.forEach((metric, index) => {
      const el = countersRef.current[index];
      if (!el) return;

      const obj = { val: metric.targetVal * 0.2 };

      gsap.to(obj, {
        val: metric.targetVal,
        duration: 2.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          once: true,
        },
        onUpdate: () => {
          if (el) {
            const formatted = metric.decimals > 0 ? obj.val.toFixed(metric.decimals) : Math.round(obj.val);
            el.innerText = `${metric.prefix}${formatted}${metric.suffix}`;
          }
        },
      });
    });
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#080812] relative border-b border-purple-500/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#22D3EE] text-xs font-semibold uppercase tracking-wider mb-3">
            Operational Benchmarks
          </div>
          <h2 className="text-slate-300 text-sm sm:text-base md:text-lg uppercase tracking-widest font-medium">
            Proven Performance Across Modern Business Operations
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-[#151529]/70 border border-purple-500/20 p-8 rounded-2xl flex flex-col items-center justify-center group overflow-hidden hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all card-lift"
            >
              {/* Top Gradient Glow Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />

              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-b from-white via-slate-100 to-purple-200 bg-clip-text text-transparent mb-2 relative z-10 text-center tracking-tight font-mono">
                <span ref={(el) => { countersRef.current[index] = el; }}>
                  {item.displayDefault}
                </span>
              </div>
              <div className="text-slate-200 text-xs sm:text-sm tracking-wide font-semibold relative z-10 text-center mb-1">
                {item.label}
              </div>
              <div className="text-slate-400 text-[11px] relative z-10 text-center">
                {item.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
