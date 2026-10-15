import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, Mic } from 'lucide-react';
import gsap from 'gsap';
import Magnetic from './Magnetic';

const infraFeatures = [
  'Sub-800ms Conversational Voice Engine',
  'Two-Way Calendar Sync (Cal.com / Google)',
  'Event-Driven Workflow Orchestration',
  'Salesforce, HubSpot, Zoho & Custom CRM Sync',
  'Enterprise Data Encryption & Isolation',
  'Live Telephony Analytics & Audit Trails',
];

export const Infrastructure: React.FC = () => {
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    barsRef.current.forEach((bar, i) => {
      if (!bar) return;
      gsap.to(bar, {
        scaleY: gsap.utils.random(0.2, 1.0),
        duration: gsap.utils.random(0.3, 0.7),
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: i * 0.05,
      });
    });
  }, []);

  return (
    <section id="infrastructure" className="py-32 bg-[#080812] relative border-t border-purple-500/20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column */}
          <div className="lg:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 mb-6">
                <div className="w-2 h-2 bg-[#22D3EE] rounded-full animate-pulse shadow-[0_0_8px_#22D3EE]" />
                <span className="text-[12px] font-semibold text-[#22D3EE] uppercase tracking-widest font-mono">
                  Autonomous Engine Architecture
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-[38px] md:text-[52px] font-bold text-white leading-[1.1] mb-6">
                Autonomous AI Voice &amp;{' '}
                <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] bg-clip-text text-transparent">
                  Sales Infrastructure
                </span>
              </h2>

              {/* Description */}
              <p className="text-[16px] md:text-[18px] text-slate-300 leading-relaxed mb-8 max-w-[540px]">
                Turn unstructured inbound phone calls, lead inquiries, and repetitive admin tasks into synchronized CRM data, scheduled appointments, and instant human escalations.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 mb-10 w-full">
                {infraFeatures.map((feat, index) => (
                  <motion.div
                    key={feat}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * index }}
                    className="flex items-center gap-2.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#22D3EE]" />
                    </div>
                    <span className="text-slate-200 font-medium text-[14px]">
                      {feat}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Magnetic>
                <a
                  href="#pricing"
                  className="relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden group bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] active:scale-95"
                >
                  <div className="relative bg-[#080812] rounded-full px-[32px] py-[15px] h-full w-full flex items-center justify-center group-hover:bg-[#151529] transition-colors">
                    <span className="text-white text-[14px] font-semibold tracking-wide">
                      Deploy Your Custom Architecture
                    </span>
                  </div>
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right Column: Dashboard Mockup with Live Audio Visualizer */}
          <div className="lg:w-1/2 w-full mt-12 lg:mt-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border border-purple-500/25 bg-[#151529]/90 shadow-[0_0_50px_rgba(124,58,237,0.15)] group"
            >
              <img
                src="/dashboard_ui.png"
                alt="RESH AI Autonomous Infrastructure Interface"
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Live Audio Visualizer Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#080812]/90 backdrop-blur-md border border-purple-500/30 p-4 rounded-xl flex items-center justify-between z-20 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-[#22D3EE]">
                    <Mic size={18} className="animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-white flex items-center gap-2">
                      <span>VOICE TELEPHONY STREAM</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      Latency: 382ms // Cadence: Natural Human
                    </div>
                  </div>
                </div>

                {/* Animated Spectrum Wave Bars */}
                <div className="flex items-center gap-1 h-8 px-2">
                  {[...Array(14)].map((_, i) => (
                    <div
                      key={i}
                      ref={(el) => { barsRef.current[i] = el; }}
                      className="w-1 bg-gradient-to-t from-[#7C3AED] via-[#A855F7] to-[#22D3EE] rounded-full origin-bottom h-full"
                    />
                  ))}
                </div>
              </div>

              {/* Subtle Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080812]/80 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Ambient Background Glow Behind Dashboard */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#7C3AED]/15 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#22D3EE]/10 rounded-full blur-[90px] pointer-events-none -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
