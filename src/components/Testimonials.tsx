import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Harsh Patel',
    role: 'Real Estate Developer',
    city: 'Ahmedabad',
    initials: 'HP',
    color: 'from-purple-500 to-indigo-600',
    text: 'RESH AI deployed an autonomous voice receptionist for our residential portfolio. It qualifies inbound buyer calls and schedules site visits 24/7 without missing a single lead.',
    result: '40 hrs/week recovered',
  },
  {
    id: 2,
    name: 'Riya Sharma',
    role: 'Healthcare Operations',
    city: 'Mumbai',
    initials: 'RS',
    color: 'from-fuchsia-500 to-rose-600',
    text: 'Their sub-800ms AI voice system handles patient appointment logistics and intake verification. Our front-desk telephone load dropped by more than half.',
    result: 'Sub-800ms Latency',
  },
  {
    id: 3,
    name: 'Mitul Desai',
    role: 'E-commerce Founder',
    city: 'Surat',
    initials: 'MD',
    color: 'from-cyan-400 to-blue-600',
    text: 'The RESH AI team built an automated support and recovery workflow for our store. Our customer response speed is now near-instantaneous.',
    result: 'Instant Response',
  },
  {
    id: 4,
    name: 'Jinal Mehta',
    role: 'Growth Director',
    city: 'Pune',
    initials: 'JM',
    color: 'from-purple-400 to-violet-600',
    text: 'We struggled with lead qualification bottlenecks until RESH AI built our event-driven CRM funnel. We now have an organized, predictable stream of qualified prospects.',
    result: 'Automated Triage',
  },
  {
    id: 5,
    name: 'Rahul Verma',
    role: 'SaaS Founder',
    city: 'Bangalore',
    initials: 'RV',
    color: 'from-cyan-500 to-teal-600',
    text: 'RESH AI advised our entire system architecture. They connected our database, calendar, and payment systems, saving us months of costly engineering trial-and-error.',
    result: 'Fast Implementation',
  },
  {
    id: 6,
    name: 'Pankaj Shah',
    role: 'Commercial Broker',
    city: 'Delhi',
    initials: 'PS',
    color: 'from-violet-500 to-purple-600',
    text: 'The voice agent handles property enquiries instantly and syncs directly into Salesforce. Zero lead drop-offs during weekends and after-hours.',
    result: '24/7 Intake',
  },
  {
    id: 7,
    name: 'Vikas Shah',
    role: 'Real Estate Broker',
    city: 'Ahmedabad',
    initials: 'VS',
    color: 'from-purple-500 to-pink-600',
    text: 'We use their custom multi-channel workflows daily. It follows up with inbound leads via messaging and has significantly improved our appointment attendance rate.',
    result: 'Higher Attendance',
  },
  {
    id: 8,
    name: 'Neha Jain',
    role: 'Hospitality Director',
    city: 'Jaipur',
    initials: 'NJ',
    color: 'from-amber-400 to-purple-600',
    text: 'Our reservation desk is augmented with RESH AI voice agents. Guest satisfaction and instant confirmation rates improved across all properties.',
    result: 'Automated Booking',
  },
];

export const Testimonials: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="success-stories" className="py-32 bg-[#080812] relative border-t border-purple-500/20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[450px] h-[450px] bg-purple-900/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#22D3EE]/8 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-16">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#22D3EE] text-xs font-semibold uppercase tracking-wider mb-4">
            <Star size={14} className="fill-[#22D3EE]" />
            <span>Proven Outcomes</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Client Success{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            See how forward-thinking real estate developers, healthcare providers, and high-volume sales teams deploy RESH AI systems to eliminate friction.
          </p>
        </div>
      </div>

      {/* Marquee Carousel */}
      <div
        ref={containerRef}
        className="w-full relative z-10 py-6 overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          animate={{
            x: isPaused ? undefined : ['0%', '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 35,
              ease: 'linear',
            },
          }}
          className="flex gap-6 w-max px-6"
        >
          {/* Double array for seamless loop */}
          {[...testimonials, ...testimonials].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[340px] sm:w-[380px] bg-[#151529]/80 border border-purple-500/20 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-400/50 hover:bg-[#151529] hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all card-lift shrink-0"
            >
              <div>
                {/* Result Pill Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-[#22D3EE] text-xs font-mono font-semibold mb-6">
                  <Star size={12} className="fill-[#22D3EE]" />
                  <span>{item.result}</span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-200 text-sm leading-relaxed mb-6 font-normal">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-purple-500/15">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-tr ${item.color} flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0`}
                >
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-slate-400 text-xs mt-0.5">
                    {item.role} • {item.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
