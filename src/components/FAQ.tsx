import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What types of processes can RESH AI automate?',
    a: 'RESH AI specializes in automating customer-facing and back-office workflows. This includes inbound voice inquiry triage, appointment scheduling, lead qualification, CRM updates, customer support resolution, multi-touch messaging sequences, and cross-application data synchronization across sales, marketing, and operations.',
  },
  {
    q: 'Can RESH AI integrate with our existing CRM and software tools?',
    a: 'Yes. We design systems to integrate directly with your existing software stack—including Salesforce, HubSpot, Zoho, Pipedrive, Cal.com, Google Workspace, Slack, PostgreSQL, and custom internal REST or GraphQL APIs. You do not need to replace your existing tools.',
  },
  {
    q: 'How do your AI voice agents handle complex or unexpected customer questions?',
    a: 'Our voice agents are powered by tailored prompt boundaries and domain retrieval models. When an unexpected edge case, sensitive inquiry, or out-of-scope question arises, the system utilizes built-in fallback rules to gracefully transfer the live call or route an urgent notification with full context to a human team member.',
  },
  {
    q: 'How long does a typical implementation take?',
    a: 'Most focused workflow automations and voice agent deployments go live within 2 to 4 weeks. Enterprise-scale systems involving multi-agent orchestration, custom data pipelines, and deep ERP integration typically range from 4 to 8 weeks, including sandbox testing and team onboarding.',
  },
  {
    q: 'How do you ensure data security and privacy?',
    a: 'We adhere to enterprise-grade security standards. Client data conduits are isolated and encrypted in transit and at rest. Proprietary business data and customer conversations are never utilized to train public foundation models, and access is tightly governed with role-based permissions.',
  },
  {
    q: 'What are the typical costs of an AI automation project?',
    a: 'Investment varies based on workflow complexity, call volume, and the depth of system integrations required. We structure engagements as transparent, outcome-focused projects with clear milestones—ranging from single-workflow pilots to full-scale enterprise implementations. We provide an exact scope and quote during your initial architecture consultation.',
  },
  {
    q: 'Can our automation systems scale as our business grows?',
    a: 'Absolutely. RESH AI architectures are engineered on cloud-native, event-driven infrastructure. Whether your business handles 50 calls a week or 50,000 inquiries a day, the system dynamically scales concurrent handling capacity with zero latency degradation or added headcount.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-[#080812] relative border-t border-purple-500/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#22D3EE] text-xs font-semibold uppercase tracking-wider mb-4">
            Common Inquiries
          </div>
          <h2 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.1] mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Everything you need to know about our technology, integration process, and security standards.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * index }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-purple-400/50 bg-[#151529] shadow-lg shadow-purple-950/20'
                    : 'border-purple-500/20 bg-[#151529]/70 hover:border-purple-400/30'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer"
                >
                  <span
                    className={`text-base sm:text-lg font-semibold transition-colors pr-4 ${
                      isOpen ? 'text-[#22D3EE]' : 'text-white'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span className="text-slate-400 shrink-0 ml-2">
                    {isOpen ? (
                      <Minus size={20} className="text-[#22D3EE]" />
                    ) : (
                      <Plus size={20} className="text-purple-400" />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-slate-300 leading-relaxed text-sm sm:text-base border-t border-purple-500/10 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
