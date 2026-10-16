import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle,
  ArrowRight,
  Cpu,
  Layers,
  GitBranch,
  Zap,
  Activity,
  Lock,
} from 'lucide-react';

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
  // Lock background scroll when modal is open so that mousewheel strictly scrolls inside the modal
  useEffect(() => {
    if (service) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [service]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && service) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent="true"
        className="fixed inset-0 z-[100000] flex items-center justify-center p-3 sm:p-6 overflow-y-auto overscroll-contain"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          data-lenis-prevent="true"
          className="relative w-full max-w-3xl bg-white border border-[#E9E5F2] rounded-3xl shadow-[0_24px_70px_rgba(109,40,217,0.22)] overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col overscroll-contain"
        >
          {/* Header */}
          <div className="relative px-6 py-5 sm:px-8 border-b border-[#E9E5F2] flex items-start justify-between bg-white shrink-0">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] text-[#6D28D9] text-xs font-mono font-bold mb-2 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
                <span>{service.badge}</span>
                <span className="text-[#A78BFA]">•</span>
                <span className="text-[#777185] font-normal">Architectural Blueprint</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111018] tracking-tight">
                {service.title}
              </h2>
              <p className="text-[#4B4659] text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                {service.headline}
              </p>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-9 h-9 rounded-full bg-[#F8F7FC] border border-[#E9E5F2] flex items-center justify-center text-[#777185] hover:text-[#111018] hover:bg-[#F2EDFF] hover:border-[#D8C7FA] transition-all shrink-0 cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable Body */}
          <div
            data-lenis-prevent="true"
            className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 overscroll-contain"
          >
            {/* System Architecture Pipeline / Flow Visualizer */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8F7FC] border border-[#E9E5F2] relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6D28D9] flex items-center gap-1.5">
                  <Activity size={13} className="text-[#7C3AED] animate-pulse" />
                  <span>Real-Time Execution Pipeline</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-semibold">
                  SLA: 99.9% Uptime
                </span>
              </div>

              {/* Visual Pipeline Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-3 text-center">
                <div className="p-3 bg-white border border-[#E9E5F2] rounded-xl shadow-xs">
                  <div className="text-[10px] font-mono text-[#777185] uppercase tracking-wider mb-1">01 Inbound</div>
                  <div className="text-xs font-bold text-[#111018]">Telephony &amp; Events</div>
                  <div className="text-[10px] text-[#6D28D9] font-mono mt-0.5">&lt; 800ms ingress</div>
                </div>

                <div className="p-3 bg-white border border-[#E9E5F2] rounded-xl shadow-xs">
                  <div className="text-[10px] font-mono text-[#777185] uppercase tracking-wider mb-1">02 Inference</div>
                  <div className="text-xs font-bold text-[#111018]">RESH AI Reasoning Core</div>
                  <div className="text-[10px] text-[#6D28D9] font-mono mt-0.5">Vector + Hybrid Search</div>
                </div>

                <div className="p-3 bg-white border border-[#E9E5F2] rounded-xl shadow-xs">
                  <div className="text-[10px] font-mono text-[#777185] uppercase tracking-wider mb-1">03 Validation</div>
                  <div className="text-xs font-bold text-[#111018]">Deterministic Guardrails</div>
                  <div className="text-[10px] text-emerald-600 font-mono mt-0.5">Schema Validation</div>
                </div>

                <div className="p-3 bg-white border border-[#E9E5F2] rounded-xl shadow-xs">
                  <div className="text-[10px] font-mono text-[#777185] uppercase tracking-wider mb-1">04 Action</div>
                  <div className="text-xs font-bold text-[#111018]">Bi-Directional CRM Sync</div>
                  <div className="text-[10px] text-[#6D28D9] font-mono mt-0.5">Event-driven webhooks</div>
                </div>
              </div>
            </div>

            {/* Operational Blueprint Description */}
            <div>
              <h4 className="text-xs font-bold text-[#111018] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Layers size={14} className="text-[#6D28D9]" />
                <span>Operational Blueprint &amp; Scope</span>
              </h4>
              <p className="text-[#4B4659] text-xs sm:text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Production Performance Benchmarks Grid */}
            <div>
              <h4 className="text-xs font-bold text-[#111018] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Zap size={14} className="text-amber-500" />
                <span>Production Specifications &amp; Telemetry</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {service.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-3.5 bg-[#F2EDFF] border border-[#D8C7FA] rounded-xl text-center shadow-xs"
                  >
                    <span className="text-[10px] text-[#777185] block mb-1 font-mono uppercase tracking-wider">
                      {spec.label}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#111018] font-mono">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineered Capabilities */}
            <div>
              <h4 className="text-xs font-bold text-[#111018] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Cpu size={14} className="text-[#7C3AED]" />
                <span>Architectural Capabilities &amp; Features</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.architecturePoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8F7FC] border border-[#E9E5F2] text-xs text-[#4B4659] hover:border-[#D8C7FA] transition-colors"
                  >
                    <CheckCircle size={15} className="text-[#6D28D9] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Supported Data Connectors */}
            <div>
              <h4 className="text-xs font-bold text-[#111018] uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <GitBranch size={14} className="text-emerald-600" />
                <span>Supported Data Connectors &amp; Toolchains</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.integrations.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-[#F8F7FC] border border-[#D8C7FA] rounded-lg text-xs font-mono text-[#6D28D9] font-medium shadow-2xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="p-5 sm:p-6 bg-[#F8F7FC] border-t border-[#E9E5F2] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-2 text-[11px] text-[#777185]">
              <Lock size={14} className="text-emerald-600 shrink-0" />
              <span>Full SOC 2 Type II / HIPAA compute isolation guarantee.</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 border border-[#E9E5F2] rounded-xl text-xs font-semibold text-[#4B4659] hover:text-[#111018] hover:bg-white transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookCall(service.title);
                }}
                className="w-1/2 sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] rounded-xl text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(109,40,217,0.35)] hover:shadow-[0_8px_30px_rgba(109,40,217,0.5)] transition-all cursor-pointer active:scale-95"
              >
                <span>Deploy This System</span>
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
