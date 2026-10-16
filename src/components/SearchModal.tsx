import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchableContent = [
  {
    title: 'Book a Strategy Call',
    category: 'Consultation',
    desc: 'Reserve a technical consultation with senior AI systems engineers.',
    href: '/book',
  },
  {
    title: 'Enterprise Security & Compliance',
    category: 'Architecture',
    desc: 'SOC 2 Type II, HIPAA compliance, zero-trust data conduits, and VPC isolation.',
    href: '/security',
  },
  {
    title: 'AI Voice Agents',
    category: 'Solutions',
    desc: 'Sub-800ms conversational AI voice assistants for inbound inquiries and scheduling.',
    href: '/#services',
  },
  {
    title: 'AI Sales & Lead Automation',
    category: 'Solutions',
    desc: 'Automated qualification scoring, CRM enrichment, and multi-touch nurture funnels.',
    href: '/#services',
  },
  {
    title: 'AI Customer Support Agents',
    category: 'Solutions',
    desc: '24/7 autonomous support, document retrieval, and instant edge-case escalations.',
    href: '/#services',
  },
  {
    title: 'Business Workflow Automation',
    category: 'Solutions',
    desc: 'Cross-app sync across CRMs, ERPs, databases, and operational pipelines.',
    href: '/#services',
  },
  {
    title: 'Autonomous Engine Architecture',
    category: 'Platform',
    desc: 'Sub-800ms telephonics, calendar sync, and enterprise isolation.',
    href: '/#infrastructure',
  },
  {
    title: 'Interactive ROI Simulator',
    category: 'Tools',
    desc: 'Calculate monthly hours and capacity value recovered by automating workflows.',
    href: '/#demos',
  },
  {
    title: 'System Recommender',
    category: 'Tools',
    desc: 'Receive tailored AI system blueprints for your specific industry.',
    href: '/#demos',
  },
  {
    title: 'Deployment Framework (4 Phases)',
    category: 'Process',
    desc: 'Discover, Design, Build & Integrate, and Launch & Optimise.',
    href: '/#process',
  },
  {
    title: 'Engineering Philosophy',
    category: 'Company',
    desc: 'Deterministic agent architecture built for production reliability.',
    href: '/#founder',
  },
  {
    title: 'Outcome-Based Pricing Plans',
    category: 'Pricing',
    desc: 'AI Starter, AI Growth, and Custom Enterprise Architectures.',
    href: '/#pricing',
  },
  {
    title: 'Privacy Policy & Data Protection',
    category: 'Legal',
    desc: 'Zero-training guarantees, data governance, and sub-processor agreements.',
    href: '/privacy',
  },
  {
    title: 'Terms of Service',
    category: 'Legal',
    desc: 'Master subscription agreement, IP ownership, and enterprise SLAs.',
    href: '/terms',
  },
  {
    title: 'Frequently Asked Questions',
    category: 'Help',
    desc: 'Data security, CRM sync, response latency, and scalability.',
    href: '/#faq',
  },
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredResults = query.trim()
    ? searchableContent.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.desc.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchableContent.slice(0, 5);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 z-[100000] flex items-start justify-center pt-[10vh] px-4 overscroll-contain"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            data-lenis-prevent="true"
            className="relative w-full max-w-2xl bg-white border border-[#E9E5F2] rounded-2xl shadow-[0_24px_60px_rgba(109,40,217,0.18)] overflow-hidden z-10 overscroll-contain"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-6 py-4 border-b border-[#E9E5F2] bg-[#F8F7FC]">
              <Search size={20} className="text-[#6D28D9] mr-3 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search RESH AI solutions, architecture, pricing, FAQs..."
                className="w-full bg-transparent text-[#111018] placeholder-[#777185] text-base outline-none font-medium"
              />
              {query ? (
                <button
                  onClick={() => setQuery('')}
                  className="text-[#777185] hover:text-[#111018] p-1 cursor-pointer"
                >
                  <X size={18} />
                </button>
              ) : (
                <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs text-[#777185] bg-white border border-[#E9E5F2] rounded font-mono shadow-xs">
                  ESC
                </kbd>
              )}
            </div>

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto p-3 space-y-1">
              {filteredResults.length > 0 ? (
                filteredResults.map((result) => (
                  <a
                    key={result.title}
                    href={result.href}
                    onClick={onClose}
                    className="flex items-center justify-between p-3.5 rounded-xl hover:bg-[#F2EDFF] border border-transparent hover:border-[#D8C7FA] transition-all group"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[#111018] font-bold text-sm group-hover:text-[#6D28D9] transition-colors">
                          {result.title}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] text-[#6D28D9] font-mono font-semibold">
                          {result.category}
                        </span>
                      </div>
                      <p className="text-xs text-[#4B4659]">{result.desc}</p>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-[#777185] group-hover:text-[#6D28D9] group-hover:translate-x-1 transition-all shrink-0 ml-4"
                    />
                  </a>
                ))
              ) : (
                <div className="py-12 text-center text-[#777185] text-sm">
                  No matching results for "{query}"
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-[#F8F7FC] border-t border-[#E9E5F2] flex items-center justify-between text-xs text-[#777185]">
              <span className="font-mono text-[11px] font-medium">RESH AI Universal Search</span>
              <span className="flex items-center gap-1 font-mono text-[11px]">
                <span>Select</span>
                <CornerDownLeft size={12} className="text-[#6D28D9]" />
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
