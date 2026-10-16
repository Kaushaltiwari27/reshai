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
    <section id="infrastructure" className="py-32 bg-white relative border-t border-[#E9E5F2] overflow-hidden">
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
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] px-4 py-1.5 mb-6 shadow-sm">
                <div className="w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse shadow-[0_0_8px_rgba(124,58,237,0.5)]" />
                <span className="text-[12px] font-semibold text-[#6D28D9] uppercase tracking-widest font-mono">
                  Autonomous Engine Architecture
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-[38px] md:text-[52px] font-bold text-[#111018] leading-[1.1] mb-6">
                Autonomous AI Voice &amp;{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 55%, #C084FC 100%)' }}
                >
                  Sales Infrastructure
                </span>
              </h2>

              {/* Description */}
              <p className="text-[16px] md:text-[18px] text-[#4B4659] leading-relaxed mb-8 max-w-[540px]">
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
                    <div className="w-5 h-5 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#6D28D9]" />
                    </div>
                    <span className="text-[#111018] font-semibold text-[14px]">
                      {feat}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Magnetic>
                <a
                  href="/#pricing"
                  className="relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white text-[14px] font-semibold tracking-wide shadow-[0_4px_24px_rgba(109,40,217,0.35)] hover:shadow-[0_8px_32px_rgba(109,40,217,0.48)] hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Deploy Your Custom Architecture
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
              className="relative rounded-2xl overflow-hidden border border-[#E9E5F2] bg-white shadow-[0_16px_50px_rgba(109,40,217,0.12)] group"
            >
              <img
                src="/dashboard_ui.png"
                alt="RESH AI Autonomous Infrastructure Interface"
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Live Audio Visualizer Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-[#E9E5F2] p-4 rounded-xl flex items-center justify-between z-20 shadow-[0_10px_30px_rgba(109,40,217,0.12)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F2EDFF] border border-[#D8C7FA] flex items-center justify-center text-[#6D28D9]">
                    <Mic size={18} className="animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-[#111018] flex items-center gap-2">
                      <span>VOICE TELEPHONY STREAM</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    </div>
                    <div className="text-[11px] text-[#777185] font-mono">
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
                      className="w-1 rounded-full origin-bottom h-full"
                      style={{ backgroundImage: 'linear-gradient(to top, #6D28D9, #9333EA, #C084FC)' }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Ambient Background Glow Behind Dashboard */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#C084FC]/15 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#7C3AED]/10 rounded-full blur-[90px] pointer-events-none -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
