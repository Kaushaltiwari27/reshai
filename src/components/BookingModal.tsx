import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle2, ArrowRight, ShieldCheck, User, Building, Mail, Phone, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlan?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedPlan = 'AI Growth Architecture',
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedSolution, setSelectedSolution] = useState(preselectedPlan);
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('02:30 PM');
  const [timezone, setTimezone] = useState('IST (UTC +5:30)');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    notes: '',
  });

  const availableDates = [
    { label: 'Today', day: 'Wed, Oct 15' },
    { label: 'Tomorrow', day: 'Thu, Oct 16' },
    { label: 'Friday', day: 'Fri, Oct 17' },
    { label: 'Monday', day: 'Mon, Oct 20' },
  ];

  const availableTimes = [
    '10:00 AM',
    '11:30 AM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
  ];

  const solutions = [
    'Autonomous AI Voice Agents',
    'AI Sales & CRM Lead Automation',
    'AI Customer Support Infrastructure',
    'Full-Stack Workflow Orchestration',
    'Custom Enterprise Multi-Agent Mesh',
  ];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!formData.name || !formData.email) return;
      setStep(3);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7C3AED', '#22D3EE', '#A855F7'],
      });
    }
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-[#080812]/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-[#151529] border border-purple-500/30 rounded-3xl shadow-2xl shadow-purple-950/50 overflow-hidden z-10 my-8"
          >
            {/* Header Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[150px] bg-gradient-to-r from-[#7C3AED]/30 to-[#22D3EE]/20 blur-[80px] pointer-events-none" />

            {/* Modal Header */}
            <div className="relative px-6 sm:px-8 pt-8 pb-5 border-b border-purple-500/20 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-[#22D3EE] uppercase tracking-wider">
                    RESH AI Strategy Call
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Schedule Your Technical Architecture Review
                </h3>
              </div>

              <button
                onClick={resetAndClose}
                className="w-9 h-9 rounded-full bg-white/5 border border-purple-500/20 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* Step Indicators */}
            <div className="px-6 sm:px-8 py-3 bg-[#080812]/50 border-b border-purple-500/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className={`flex items-center gap-1.5 ${step >= 1 ? 'text-[#22D3EE]' : ''}`}>
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">1</span>
                <span>Select Scope &amp; Time</span>
              </span>
              <ChevronRight size={14} className="text-slate-600" />
              <span className={`flex items-center gap-1.5 ${step >= 2 ? 'text-[#22D3EE]' : ''}`}>
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">2</span>
                <span>Project Details</span>
              </span>
              <ChevronRight size={14} className="text-slate-600" />
              <span className={`flex items-center gap-1.5 ${step === 3 ? 'text-emerald-400' : ''}`}>
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">3</span>
                <span>Confirmed</span>
              </span>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {step === 1 && (
                <div className="space-y-6">
                  {/* Select Solution */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                      1. Select Your Automation Focus
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {solutions.map((sol) => (
                        <button
                          key={sol}
                          type="button"
                          onClick={() => setSelectedSolution(sol)}
                          className={`text-left text-xs p-3 rounded-xl border transition-all ${
                            selectedSolution === sol
                              ? 'bg-purple-900/30 border-[#22D3EE] text-white shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                              : 'bg-[#080812]/60 border-purple-500/20 text-slate-300 hover:border-purple-500/40'
                          }`}
                        >
                          <div className="font-semibold">{sol}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Date */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                      2. Choose Date
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {availableDates.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setSelectedDate(item.label)}
                          className={`text-center p-3 rounded-xl border transition-all ${
                            selectedDate === item.label
                              ? 'bg-purple-900/30 border-[#22D3EE] text-white shadow-[0_0_12px_rgba(34,211,238,0.2)]'
                              : 'bg-[#080812]/60 border-purple-500/20 text-slate-300 hover:border-purple-500/40'
                          }`}
                        >
                          <div className="font-bold text-sm">{item.label}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{item.day}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Time Slot */}
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        3. Choose Available Slot
                      </label>
                      <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="bg-[#080812] border border-purple-500/20 rounded-lg px-2 py-1 text-[11px] text-slate-300 focus:outline-none focus:border-[#22D3EE]"
                      >
                        <option value="IST (UTC +5:30)">IST (UTC +5:30)</option>
                        <option value="EST (UTC -5:00)">EST (UTC -5:00)</option>
                        <option value="PST (UTC -8:00)">PST (UTC -8:00)</option>
                        <option value="GMT (UTC +0:00)">GMT (UTC +0:00)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 px-2 text-center text-xs font-mono rounded-lg border transition-all ${
                            selectedTime === time
                              ? 'bg-[#7C3AED] border-[#22D3EE] text-white shadow-[0_0_12px_rgba(124,58,237,0.5)] font-bold'
                              : 'bg-[#080812]/60 border-purple-500/20 text-slate-300 hover:border-purple-500/40'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Continue Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-3.5 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all active:scale-[0.99]"
                    >
                      <span>Continue to Project Details</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleNext} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                          type="text"
                          required
                          placeholder="Alex Morgan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-[#080812] border border-purple-500/20 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#22D3EE] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-[#080812] border border-purple-500/20 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#22D3EE] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                          type="text"
                          placeholder="Acme Technologies"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-[#080812] border border-purple-500/20 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#22D3EE] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-[#080812] border border-purple-500/20 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#22D3EE] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Current Bottlenecks &amp; Software Stack (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Inbound voice inquiries are overwhelming our reception team; currently using HubSpot CRM and Google Calendar..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#080812] border border-purple-500/20 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#22D3EE] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400 py-1">
                    <ShieldCheck size={16} className="text-[#22D3EE] shrink-0" />
                    <span>Zero Data Leakage Guarantee: Your information is encrypted and strictly confidential.</span>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-3 border border-purple-500/20 rounded-xl text-slate-300 text-sm hover:bg-white/5 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3.5 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all active:scale-[0.99]"
                    >
                      <span>Confirm &amp; Reserve Strategy Call</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <div className="text-center py-6 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.4)]">
                    <CheckCircle2 size={36} />
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">
                      Strategy Call Confirmed!
                    </h4>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">
                      A calendar invite and direct video link have been dispatched to <strong className="text-white">{formData.email || 'your email'}</strong>.
                    </p>
                  </div>

                  <div className="bg-[#080812] border border-purple-500/20 rounded-2xl p-5 max-w-md mx-auto text-left space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Focus Scope:</span>
                      <span className="text-white font-bold">{selectedSolution}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Date &amp; Time:</span>
                      <span className="text-[#22D3EE] font-bold">{selectedDate} @ {selectedTime} ({timezone})</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Assigned Architect:</span>
                      <span className="text-purple-300">Senior AI Systems Engineer</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`RESH AI Technical Consultation: ${selectedSolution}`)}&details=${encodeURIComponent(`Technical architecture review with RESH AI team for ${formData.name || 'Client'}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-purple-600/30 border border-purple-400/40 rounded-xl text-white text-xs font-mono font-semibold flex items-center gap-2 hover:bg-purple-600/50 transition-colors"
                    >
                      <Calendar size={14} className="text-[#22D3EE]" />
                      <span>Add to Google Calendar</span>
                    </a>
                    <button
                      onClick={resetAndClose}
                      className="px-6 py-3 bg-[#080812] border border-purple-500/20 rounded-xl text-slate-300 text-xs font-mono hover:text-white transition-colors"
                    >
                      Done &amp; Return to Website
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
