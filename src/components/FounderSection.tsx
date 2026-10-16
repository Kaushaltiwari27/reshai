import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, GitBranch, Terminal, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from './Magnetic';

gsap.registerPlugin(ScrollTrigger);

const corePillars = [
  {
    id: 'workflow-first',
    label: 'Workflow Architecture',
    sub: 'Audited before code',
    icon: GitBranch,
    color: '#6D28D9',
    explodeX: -40,
    explodeY: -30,
  },
  {
    id: 'sub-second',
    label: 'Sub-Second Response',
    sub: 'Human-like cadence',
    icon: Zap,
    color: '#7C3AED',
    explodeX: 40,
    explodeY: -30,
  },
  {
    id: 'fail-safe',
    label: 'Fail-Safe Routing',
    sub: 'Human-in-the-loop',
    icon: Terminal,
    color: '#9333EA',
    explodeX: -40,
    explodeY: 30,
  },
  {
    id: 'enterprise-security',
    label: 'Enterprise Security',
    sub: 'Zero data leakage',
    icon: ShieldCheck,
    color: '#059669',
    explodeX: 40,
    explodeY: 30,
  },
];

export const FounderSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeLogIndex, setActiveLogIndex] = useState(0);

  const logs = [
    { title: '> initialize_agent_mesh()', status: 'Mesh Initialized' },
    { title: '[✓] Inbound voice telephonics connected (latency: 342ms)', status: 'Low Latency Audio' },
    { title: '[✓] CRM bi-directional webhook stream active', status: 'Two-Way Sync' },
    { title: '[✓] Dynamic escalation protocol calibrated', status: 'Fail-Safe Live' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLogIndex((prev) => (prev + 1) % logs.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [logs.length]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = cardsRef.current.filter(Boolean);
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      cards.forEach((card, i) => {
        if (!card) return;
        gsap.set(card, {
          x: corePillars[i].explodeX,
          y: corePillars[i].explodeY,
          opacity: 0,
          scale: 0.7,
          rotation: i % 2 === 0 ? -6 : 6,
        });
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 1.2,
        },
      }).to(cards, {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        stagger: 0.08,
        ease: 'power3.out',
      });
    });

    mm.add('(max-width: 1023px)', () => {
      cards.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true,
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
    <section ref={sectionRef} id="founder" className="py-32 bg-white relative border-t border-[#E9E5F2] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#C084FC]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#7C3AED]/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Column: Technical Terminal */}
          <div className="lg:w-1/2 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-[520px] mx-auto rounded-3xl overflow-hidden border border-[#E9E5F2] bg-white p-8 shadow-[0_16px_50px_rgba(109,40,217,0.1)]"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-[#E9E5F2] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="text-xs font-mono text-[#6D28D9] flex items-center gap-2 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                  <span>resh-engine.prod.internal</span>
                </div>
              </div>

              {/* Terminal Code Mockup */}
              <div className="space-y-4 font-mono text-xs text-[#4B4659] leading-relaxed">
                <div className="text-[#6D28D9] font-semibold flex items-center justify-between">
                  <span>// RESH AI Autonomous Execution Pipeline</span>
                  <span className="text-[10px] text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full bg-emerald-50 font-bold">
                    LIVE STREAM
                  </span>
                </div>
                <div className="bg-[#F8F7FC] p-4 rounded-xl border border-[#E9E5F2] text-[#4B4659] space-y-1.5 min-h-[140px]">
                  {logs.map((log, idx) => (
                    <p
                      key={log.title}
                      className={`transition-colors duration-300 ${
                        idx === activeLogIndex
                          ? 'text-[#6D28D9] font-bold'
                          : 'text-[#777185]'
                      }`}
                    >
                      {log.title}
                    </p>
                  ))}
                  <div className="pt-2 flex items-center gap-2 text-emerald-700 border-t border-[#E9E5F2] mt-2 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                    <span>STATUS: 100% OPERATIONAL // ZERO HUMAN BOTTLENECK</span>
                  </div>
                </div>

                <div className="pt-2 grid grid-cols-2 gap-3">
                  <div className="p-3 bg-[#F2EDFF] rounded-xl border border-[#D8C7FA] text-center">
                    <span className="text-[#777185] text-[11px] block">Avg. Routing Speed</span>
                    <span className="text-[#111018] font-bold text-lg font-mono">&lt; 750ms</span>
                  </div>
                  <div className="p-3 bg-[#F2EDFF] rounded-xl border border-[#D8C7FA] text-center">
                    <span className="text-[#777185] text-[11px] block">Execution Accuracy</span>
                    <span className="text-[#6D28D9] font-bold text-lg font-mono">99.8%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Philosophy Narrative */}
          <div className="lg:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] text-[#6D28D9] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
                Engineering Philosophy
              </div>
              <h2 className="text-[38px] md:text-[52px] font-bold text-[#111018] leading-[1.1] mb-6">
                Engineered for Production.{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 55%, #C084FC 100%)' }}
                >
                  Built for Reality.
                </span>
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#4B4659] leading-relaxed mb-6">
                At <strong className="text-[#111018]">RESH AI</strong>, we don't believe in vanity AI demos or fragile chatbots that break when asked real business questions. We engineer deterministic, production-grade agent infrastructure that solves tangible operational bottlenecks.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#777185] leading-relaxed mb-8">
                Our systems are designed around your existing data structures, ensuring frictionless two-way sync, enterprise isolation, and instant human fallback so your team always stays in control.
              </p>

              <Magnetic>
                <a
                  href="/#pricing"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] rounded-full text-white font-semibold shadow-[0_4px_20px_rgba(109,40,217,0.35)] hover:shadow-[0_8px_30px_rgba(109,40,217,0.48)] transition-all mb-10 group active:scale-95 text-sm"
                >
                  <span>Request an Architecture Consultation</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Magnetic>

              {/* 4 Characteristic Roles - Assembled via GSAP ScrollTrigger */}
              <div className="grid grid-cols-2 gap-4">
                {corePillars.map((role, idx) => {
                  const Icon = role.icon;
                  return (
                    <div
                      key={role.id}
                      ref={(el) => { cardsRef.current[idx] = el; }}
                      className="relative border border-[#E9E5F2] hover:border-[#D8C7FA] rounded-2xl p-4 overflow-hidden group transition-all card-lift bg-white shadow-sm hover:shadow-[0_8px_24px_rgba(109,40,217,0.1)] will-change-transform"
                    >
                      <div className="relative z-10 flex items-start gap-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                          style={{
                            background: `${role.color}15`,
                            border: `1px solid ${role.color}30`,
                          }}
                        >
                          <Icon size={17} style={{ color: role.color }} />
                        </div>

                        <div>
                          <p className="text-[#111018] font-bold text-sm leading-tight group-hover:text-[#6D28D9] transition-colors">
                            {role.label}
                          </p>
                          <p className="text-[#777185] text-xs mt-0.5">
                            {role.sub}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
