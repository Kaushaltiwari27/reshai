import React from 'react';
import { motion } from 'framer-motion';

const floatingPills = [
  'Autonomous Voice Agents',
  'Intelligent Lead Routing',
  'Automated CRM & ERP Sync',
  'Custom AI Business Agents',
  'Event-Driven Workflows',
  'Enterprise Data Isolation',
];

export const AboutSpline: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#080812] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#22D3EE] text-xs font-semibold uppercase tracking-wider mb-4">
                About RESH AI
              </div>
              <h2
                className="text-[40px] md:text-[56px] font-bold text-white leading-[1.1] mb-8"
              >
                <span>Architecting the Next Generation of </span>
                <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] bg-clip-text text-transparent">
                  Autonomous Business
                </span>
              </h2>
              <p className="text-[16px] md:text-[18px] text-slate-300 leading-relaxed max-w-[540px] mb-6">
                <strong className="text-white font-semibold">RESH AI</strong> is an enterprise AI implementation partner that designs, builds, and deploys practical AI systems tailored to real business workflows.
              </p>
              <p className="text-[15px] md:text-[16px] text-slate-400 leading-relaxed max-w-[540px]">
                We help ambitious teams eliminate repetitive manual bottlenecks, respond to customers instantly across voice and digital channels, and unlock scalable growth without expanding overhead.
              </p>
            </motion.div>
          </div>

          {/* Right Column: 3D Core + Floating Badges */}
          <div className="lg:w-1/2 relative w-full h-auto lg:h-[500px] flex flex-col items-center justify-center">
            {/* 3D Spline Iframe Container */}
            <div className="relative w-full h-[350px] md:h-[400px] lg:h-full lg:absolute lg:inset-0 z-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="w-full h-full"
              >
                <div className="w-full h-full rounded-3xl overflow-hidden border border-purple-500/20 opacity-80 mix-blend-screen mask-radial-fade">
                  <iframe
                    src="https://my.spline.design/abstractcore-25c28ec2cb58ab4db1277a0279d46c43/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    title="Interactive 3D Abstract Core"
                    className="w-full h-full pointer-events-auto"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Ambient Center Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[#7C3AED]/20 rounded-full blur-[110px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#22D3EE]/15 rounded-full blur-[90px] pointer-events-none" />
            </div>

            {/* Floating Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:block gap-4 w-full mt-8 lg:mt-0 relative z-10 lg:w-full lg:h-full pointer-events-none">
              {floatingPills.map((pill, index) => (
                <motion.div
                  key={pill}
                  initial={{
                    opacity: 0,
                    x: 50,
                    y: index % 2 === 0 ? 50 : -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 * index,
                    type: 'spring',
                    stiffness: 50,
                  }}
                  whileHover={{
                    scale: 1.05,
                    zIndex: 20,
                  }}
                  className="static lg:absolute bg-[#151529]/90 backdrop-blur-md border border-purple-500/30 px-4 py-3.5 rounded-xl shadow-2xl flex items-center justify-center text-center select-none w-full lg:w-[200px] xl:w-[220px] pointer-events-auto hover:border-[#22D3EE] hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all cursor-pointer"
                  style={{
                    top: `${(index % 3) * 32}%`,
                    left: `${46 * Math.floor(index / 3)}%`,
                    marginTop: index > 2 ? '30px' : '0',
                  }}
                >
                  <span className="text-slate-100 font-medium tracking-wide text-xs sm:text-sm md:text-[14px]">
                    {pill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSpline;
