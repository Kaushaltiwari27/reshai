import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

export interface PricingPlan {
  name: string;
  badge: string;
  price: string;
  desc: string;
  features: string[];
  cta: string;
  featured: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'AI Starter',
    badge: 'Pilot Implementation',
    price: 'Custom Scope',
    desc: 'Best for single-workflow automation, lead intake, or initial AI pilot validation.',
    features: [
      'Custom AI Chat & Lead Intake Agent',
      'Automated Email & WhatsApp Triage',
      'Google Sheets / HubSpot CRM Integration',
      'Prompt Optimization & Custom Persona',
      '14-Day Sandbox Deployment & Handover',
    ],
    cta: 'Discuss Starter Project',
    featured: false,
  },
  {
    name: 'AI Growth',
    badge: 'Most Popular',
    price: 'Tailored Scope',
    desc: 'Best for growing companies automating core inbound sales, qualification, and support.',
    features: [
      'Autonomous AI Voice Agent (Sub-800ms Latency)',
      'Two-Way Calendar Sync (Cal.com & Google)',
      'Event-Driven CRM Orchestration (Salesforce/HubSpot)',
      'Human-in-the-Loop Escalation Protocol',
      'Encrypted Data Conduits & Privacy Controls',
      'Priority SLA Monitoring & Continuous Iteration',
    ],
    cta: 'Book a Strategy Call',
    featured: true,
  },
  {
    name: 'Custom AI Systems',
    badge: 'Enterprise',
    price: 'Custom Architecture',
    desc: 'Bespoke multi-agent systems, deep ERP integrations, and dedicated operational architecture.',
    features: [
      'Multi-Agent Voice & Workflow Mesh',
      'Complex ERP / Database / API Infrastructure',
      'Proprietary Document Retrieval & Knowledge Base',
      'Isolated Infrastructure & Strict Governance',
      'Dedicated AI Implementation Engineer',
      'High-Availability Architecture & Ongoing Audits',
    ],
    cta: 'Consult Enterprise Architect',
    featured: false,
  },
];

interface PricingProps {
  onSelectPlan?: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-32 bg-[#F8F7FC] relative border-t border-[#E9E5F2] overflow-hidden">
      {/* Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C084FC]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#7C3AED]/8 blur-[130px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] text-[#6D28D9] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Engagement Models
          </div>
          <h2 className="text-[40px] md:text-[56px] font-bold text-[#111018] leading-[1.1] mb-6">
            Outcome-Based{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 55%, #C084FC 100%)' }}
            >
              AI Systems
            </span>
          </h2>
          <p className="text-[#4B4659] text-lg max-w-xl mx-auto mb-6 leading-relaxed">
            Clear technical scoping, production-ready engineering, and measurable operational scale.
          </p>
          <div
            className="w-[60px] h-[3.5px] mx-auto rounded-full shadow-[0_2px_8px_rgba(109,40,217,0.3)]"
            style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 55%, #C084FC 100%)' }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className={`relative bg-white rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 ${
                plan.featured
                  ? 'border-2 border-[#7C3AED] shadow-[0_16px_40px_rgba(109,40,217,0.14)] lg:-mt-4 lg:mb-4'
                  : 'border-[#E9E5F2] hover:border-[#D8C7FA] shadow-[0_4px_24px_rgba(109,40,217,0.06)]'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white text-[11px] font-bold px-4 py-1 rounded-full tracking-widest uppercase shadow-[0_4px_14px_rgba(109,40,217,0.4)]">
                  {plan.badge}
                </div>
              )}

              <div>
                {!plan.featured && (
                  <span className="text-[11px] font-semibold text-[#6D28D9] uppercase tracking-widest block mb-2 font-mono">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-[#111018] mb-2">{plan.name}</h3>
                <p className="text-[#4B4659] text-xs leading-relaxed min-h-[36px] mb-6">
                  {plan.desc}
                </p>

                <div className="text-2xl md:text-3xl font-extrabold text-[#111018] mb-6 font-mono tracking-tight">
                  {plan.price}
                </div>

                <div className="w-full h-[1px] bg-[#E9E5F2] mb-6" />

                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[#4B4659] text-[14px]">
                      <div className="w-4 h-4 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} className="text-[#6D28D9]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Magnetic className="w-full mt-4">
                <button
                  type="button"
                  onClick={() => onSelectPlan ? onSelectPlan(plan.name) : window.location.assign('/book')}
                  className={`w-full py-3.5 rounded-full font-semibold transition-all text-center text-sm flex items-center justify-center gap-2 cursor-pointer ${
                    plan.featured
                      ? 'bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white shadow-[0_4px_20px_rgba(109,40,217,0.35)] hover:shadow-[0_8px_30px_rgba(109,40,217,0.5)] active:scale-95'
                      : 'bg-[#F2EDFF] border border-[#D8C7FA] text-[#6D28D9] hover:bg-[#6D28D9] hover:text-white active:scale-95'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight size={15} />
                </button>
              </Magnetic>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
