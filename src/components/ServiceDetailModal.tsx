import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, Cpu, Layers, GitBranch, Zap, ShieldCheck } from 'lucide-react';

export interface ServiceDetail {
  id: string;
  title: string;
  badge: string;
  headline: string;
  description: string;
  architecturePoints: string[];
  specs: { label: string; value: string }[];
  integrations: string[];
}

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onBookCall: (solutionTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookCall,
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-white border border-[#E9E5F2] rounded-3xl shadow-[0_24px_60px_rgba(109,40,217,0.18)] overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="relative p-6 sm:p-8 border-b border-[#E9E5F2] flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] text-[#6D28D9] text-xs font-mono font-bold mb-3 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
                <span>{service.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111018] tracking-tight">
                {service.title}
              </h2>
              <p className="text-[#4B4659] text-sm mt-1 max-w-xl">
                {service.headline}
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#F8F7FC] border border-[#E9E5F2] flex items-center justify-center text-[#777185] hover:text-[#111018] hover:bg-[#F2EDFF] transition-colors shrink-0 cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Description */}
            <div>
              <h4 className="text-xs font-bold text-[#111018] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Layers size={14} className="text-[#6D28D9]" />
                <span>Operational Blueprint</span>
              </h4>
              <p className="text-[#4B4659] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div>
              <h4 className="text-xs font-bold text-[#111018] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Cpu size={14} className="text-[#7C3AED]" />
                <span>Engineered Capabilities</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.architecturePoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8F7FC] border border-[#E9E5F2] text-xs text-[#4B4659]"
                  >
                    <CheckCircle size={15} className="text-[#6D28D9] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Benchmarks */}
            <div>
              <h4 className="text-xs font-bold text-[#111018] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Zap size={14} className="text-amber-500" />
                <span>Production Performance Specifications</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {service.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-3 bg-[#F2EDFF] border border-[#D8C7FA] rounded-xl text-center"
                  >
                    <span className="text-[11px] text-[#777185] block mb-1 font-mono">
                      {spec.label}
                    </span>
                    <span className="text-base font-bold text-[#111018] font-mono">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div>
              <h4 className="text-xs font-bold text-[#111018] uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <GitBranch size={14} className="text-emerald-600" />
                <span>Supported Data Connectors</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.integrations.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-[#F8F7FC] border border-[#D8C7FA] rounded-lg text-xs font-mono text-[#6D28D9] font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="p-6 bg-[#F8F7FC] border-t border-[#E9E5F2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#777185]">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>Full SOC 2 / HIPAA compliance isolation available.</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-5 py-2.5 border border-[#E9E5F2] rounded-xl text-xs font-semibold text-[#4B4659] hover:text-[#111018] hover:bg-white transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookCall(service.title);
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] rounded-xl text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(109,40,217,0.35)] hover:shadow-[0_8px_30px_rgba(109,40,217,0.5)] transition-all cursor-pointer"
              >
                <span>Deploy This Architecture</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ServiceDetailModal;
