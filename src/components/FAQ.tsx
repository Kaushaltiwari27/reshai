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
    <section id="faq" className="py-32 bg-white relative border-t border-[#E9E5F2]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] text-[#6D28D9] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Common Inquiries
          </div>
          <h2 className="text-[40px] md:text-[56px] font-bold text-[#111018] leading-[1.1] mb-6">
            Frequently Asked{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 55%, #C084FC 100%)' }}
            >
              Questions
            </span>
          </h2>
          <p className="text-[#4B4659] text-lg max-w-xl mx-auto leading-relaxed">
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
                    ? 'border-[#7C3AED] bg-[#F8F7FC] shadow-[0_4px_20px_rgba(109,40,217,0.08)]'
                    : 'border-[#E9E5F2] bg-white hover:border-[#D8C7FA]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer"
                >
                  <span
                    className={`text-base sm:text-lg font-bold transition-colors pr-4 ${
                      isOpen ? 'text-[#6D28D9]' : 'text-[#111018]'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span className="shrink-0 ml-2">
                    {isOpen ? (
                      <Minus size={20} className="text-[#6D28D9]" />
                    ) : (
                      <Plus size={20} className="text-[#7C3AED]" />
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
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-[#4B4659] leading-relaxed text-sm sm:text-base border-t border-[#E9E5F2] pt-4">
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
