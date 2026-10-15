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
    color: '#7C3AED',
    explodeX: -40,
    explodeY: -30,
  },
  {
    id: 'sub-second',
    label: 'Sub-Second Response',
    sub: 'Human-like cadence',
    icon: Zap,
    color: '#22D3EE',
    explodeX: 40,
    explodeY: -30,
  },
  {
    id: 'fail-safe',
    label: 'Fail-Safe Routing',
    sub: 'Human-in-the-loop',
    icon: Terminal,
    color: '#A855F7',
    explodeX: -40,
    explodeY: 30,
  },
  {
    id: 'enterprise-security',
    label: 'Enterprise Security',
    sub: 'Zero data leakage',
    icon: ShieldCheck,
    color: '#34D399',
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
    <section ref={sectionRef} id="founder" className="py-32 bg-[#080812] relative border-t border-purple-500/20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#22D3EE]/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Column: Technical Philosophy Graphic / Neural Terminal */}
          <div className="lg:w-1/2 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-[520px] mx-auto rounded-3xl overflow-hidden border border-purple-500/30 bg-[#151529]/90 p-8 shadow-2xl shadow-purple-950/40"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs font-mono text-purple-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
                  <span>resh-engine.prod.internal</span>
                </div>
              </div>

              {/* Terminal Code Mockup */}
              <div className="space-y-4 font-mono text-xs text-slate-300 leading-relaxed">
                <div className="text-purple-400 flex items-center justify-between">
                  <span>// RESH AI Autonomous Execution Pipeline</span>
                  <span className="text-[10px] text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full bg-emerald-500/10">
                    LIVE STREAM
                  </span>
                </div>
                <div className="bg-[#080812] p-4 rounded-xl border border-purple-500/20 text-slate-300 space-y-1.5 min-h-[140px]">
                  {logs.map((log, idx) => (
                    <p
                      key={log.title}
                      className={`transition-colors duration-300 ${
                        idx === activeLogIndex
                          ? 'text-[#22D3EE] font-medium'
                          : 'text-slate-400'
                      }`}
                    >
                      {log.title}
                    </p>
                  ))}
                  <div className="pt-2 flex items-center gap-2 text-emerald-400 border-t border-purple-500/10 mt-2 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                    <span>STATUS: 100% OPERATIONAL // ZERO HUMAN BOTTLENECK</span>
                  </div>
                </div>

                <div className="pt-2 grid grid-cols-2 gap-3">
                  <div className="p-3 bg-purple-900/20 rounded-xl border border-purple-500/20 text-center hover:border-purple-400/50 transition-colors">
                    <span className="text-slate-400 text-[11px] block">Avg. Routing Speed</span>
                    <span className="text-white font-bold text-lg font-mono">&lt; 750ms</span>
                  </div>
                  <div className="p-3 bg-cyan-900/20 rounded-xl border border-cyan-500/20 text-center hover:border-[#22D3EE]/50 transition-colors">
                    <span className="text-slate-400 text-[11px] block">Execution Accuracy</span>
                    <span className="text-[#22D3EE] font-bold text-lg font-mono">99.8%</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 blur-2xl pointer-events-none rounded-full" />
            </motion.div>

            {/* Behind Graphic Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#7C3AED]/15 rounded-full blur-[100px] pointer-events-none -z-10" />
          </div>

          {/* Right Column: Philosophy Narrative */}
          <div className="lg:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#22D3EE] text-xs font-semibold uppercase tracking-wider mb-4">
                Engineering Philosophy
              </div>
              <h2 className="text-[38px] md:text-[52px] font-bold text-white leading-[1.1] mb-6">
                Engineered for Production.{' '}
                <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] bg-clip-text text-transparent">
                  Built for Reality.
                </span>
              </h2>
              <p className="text-[16px] md:text-[18px] text-slate-300 leading-relaxed mb-6">
                At <strong className="text-white">RESH AI</strong>, we don't believe in vanity AI demos or fragile chatbots that break when asked real business questions. We engineer deterministic, production-grade agent infrastructure that solves tangible operational bottlenecks.
              </p>
              <p className="text-[15px] md:text-[16px] text-slate-400 leading-relaxed mb-8">
                Our systems are designed around your existing data structures, ensuring frictionless two-way sync, enterprise isolation, and instant human fallback so your team always stays in control.
              </p>

              <Magnetic>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] rounded-full text-white font-semibold hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all mb-10 group active:scale-95 text-sm"
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
                      className="relative border border-purple-500/20 rounded-2xl p-4 overflow-hidden group hover:border-[#22D3EE]/50 transition-all card-lift bg-[#151529]/80 shadow-lg shadow-purple-950/10 will-change-transform"
                    >
                      {/* Hover Radial Tint */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                        style={{
                          background: `radial-gradient(circle at top left, ${role.color}18, transparent 70%)`,
                          boxShadow: `inset 0 0 30px ${role.color}10`,
                        }}
                      />

                      {/* Top Glowing Color Line */}
                      <div
                        className="absolute top-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${role.color}, transparent)`,
                        }}
                      />

                      <div className="relative z-10 flex items-start gap-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                          style={{
                            background: `${role.color}18`,
                            border: `1px solid ${role.color}30`,
                          }}
                        >
                          <Icon size={17} style={{ color: role.color }} />
                        </div>

                        <div>
                          <p className="text-white font-bold text-sm leading-tight group-hover:text-white transition-colors">
                            {role.label}
                          </p>
                          <p className="text-slate-400 text-xs mt-0.5">
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
