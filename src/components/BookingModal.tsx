import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  User,
  Building,
  Mail,
  Phone,
  Loader2,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlan?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedPlan = 'Autonomous AI Voice Agents',
}) => {
  const [selectedSolution, setSelectedSolution] = useState(preselectedPlan);
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('02:30 PM');
  const [timezone, setTimezone] = useState('IST (UTC +5:30)');
  const [meetingType, setMeetingType] = useState<'google_meet' | 'phone' | 'zoom'>('google_meet');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate dynamic, real-world dates starting from current day
  const availableDates = useMemo(() => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 4; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const label =
        i === 0
          ? 'Today'
          : i === 1
          ? 'Tomorrow'
          : d.toLocaleDateString('en-US', { weekday: 'short' });
      const day = d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        weekday: 'short',
      });
      dates.push({ label, day });
    }
    return dates;
  }, []);

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
    'AI Growth Architecture',
    'Enterprise Scale Infrastructure',
  ];

  // Sync state whenever modal is opened
  useEffect(() => {
    if (isOpen) {
      if (preselectedPlan) {
        setSelectedSolution(preselectedPlan);
      }
      setIsSubmitting(false);
      setIsSubmitted(false);
      if (availableDates.length > 1) {
        setSelectedDate(availableDates[1].label); // Default to Tomorrow
      }
    }
  }, [isOpen, preselectedPlan, availableDates]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setIsSubmitting(true);

    // Simulate reliable reservation process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#6D28D9', '#7C3AED', '#9333EA', '#C084FC'],
        });
      } catch (err) {
        console.warn('Confetti error:', err);
      }
    }, 850);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white border border-[#E9E5F2] rounded-3xl shadow-[0_24px_70px_rgba(109,40,217,0.2)] overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
          >
            {/* Header */}
            <div className="relative px-6 sm:px-8 pt-6 pb-4 border-b border-[#E9E5F2] flex items-center justify-between bg-white shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-[#6D28D9] uppercase tracking-wider">
                    RESH AI Consultation
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111018]">
                  Schedule Strategy Call
                </h3>
                <p className="text-xs text-[#777185] mt-0.5">
                  30-min technical architecture audit with a Senior AI Systems Engineer.
                </p>
              </div>

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full bg-[#F8F7FC] border border-[#E9E5F2] flex items-center justify-center text-[#777185] hover:text-[#111018] hover:bg-[#F2EDFF] hover:border-[#D8C7FA] transition-all shrink-0 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 1. Solution Focus */}
                  <div>
                    <label className="block text-xs font-bold text-[#111018] uppercase tracking-wider mb-2">
                      1. Select Solution Focus
                    </label>
                    <div className="relative">
                      <select
                        value={selectedSolution}
                        onChange={(e) => setSelectedSolution(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F8F7FC] border border-[#E9E5F2] rounded-xl text-sm font-semibold text-[#111018] outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all cursor-pointer"
                      >
                        {solutions.map((sol) => (
                          <option key={sol} value={sol}>
                            {sol}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 2. Schedule Date & Slot */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-[#111018] uppercase tracking-wider">
                        2. Preferred Date &amp; Time
                      </label>
                      <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="bg-[#F8F7FC] border border-[#D8C7FA] rounded-lg px-2.5 py-1 text-[11px] font-mono text-[#6D28D9] font-medium outline-none"
                      >
                        <option value="IST (UTC +5:30)">IST (UTC +5:30)</option>
                        <option value="EST (UTC -5:00)">EST (UTC -5:00)</option>
                        <option value="PST (UTC -8:00)">PST (UTC -8:00)</option>
                        <option value="GMT (UTC +0:00)">GMT (UTC +0:00)</option>
                        <option value="CET (UTC +1:00)">CET (UTC +1:00)</option>
                      </select>
                    </div>

                    {/* Date Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                      {availableDates.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setSelectedDate(item.label)}
                          className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            selectedDate === item.label
                              ? 'bg-[#F2EDFF] border-[#6D28D9] text-[#6D28D9] shadow-sm font-bold ring-1 ring-[#6D28D9]'
                              : 'bg-white border-[#E9E5F2] text-[#4B4659] hover:border-[#D8C7FA] hover:bg-[#F8F7FC]'
                          }`}
                        >
                          <div className="text-xs font-bold">{item.label}</div>
                          <div className="text-[11px] text-[#777185] mt-0.5">{item.day}</div>
                        </button>
                      ))}
                    </div>

                    {/* Time Slots */}
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 px-1 text-center text-xs font-mono rounded-lg border transition-all cursor-pointer ${
                            selectedTime === time
                              ? 'bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] border-[#6D28D9] text-white font-bold shadow-sm'
                              : 'bg-white border-[#E9E5F2] text-[#4B4659] hover:border-[#D8C7FA] hover:text-[#111018]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3. Contact Details */}
                  <div className="space-y-4 pt-1">
                    <label className="block text-xs font-bold text-[#111018] uppercase tracking-wider">
                      3. Your Contact Details
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <div className="text-xs font-semibold text-[#4B4659] mb-1">
                          Full Name <span className="text-[#6D28D9]">*</span>
                        </div>
                        <div className="relative">
                          <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="Alex Morgan"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm text-[#111018] placeholder-slate-400 outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all shadow-xs"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <div className="text-xs font-semibold text-[#4B4659] mb-1">
                          Work Email <span className="text-[#6D28D9]">*</span>
                        </div>
                        <div className="relative">
                          <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="email"
                            required
                            placeholder="alex@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm text-[#111018] placeholder-slate-400 outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all shadow-xs"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company */}
                      <div>
                        <div className="text-xs font-semibold text-[#4B4659] mb-1">
                          Company Name
                        </div>
                        <div className="relative">
                          <Building size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            placeholder="Acme Technologies"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm text-[#111018] placeholder-slate-400 outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all shadow-xs"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <div className="text-xs font-semibold text-[#4B4659] mb-1">
                          Phone / WhatsApp
                        </div>
                        <div className="relative">
                          <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm text-[#111018] placeholder-slate-400 outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all shadow-xs"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Meeting Medium Selector */}
                    <div>
                      <div className="text-xs font-semibold text-[#4B4659] mb-1.5">
                        Preferred Video / Audio Channel
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'google_meet', label: 'Google Meet' },
                          { id: 'zoom', label: 'Zoom' },
                          { id: 'phone', label: 'Phone Call' },
                        ].map((m) => (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setMeetingType(m.id as any)}
                            className={`py-2 px-2 text-center text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                              meetingType === m.id
                                ? 'bg-[#F2EDFF] border-[#6D28D9] text-[#6D28D9] font-bold shadow-xs'
                                : 'bg-white border-[#E9E5F2] text-[#4B4659] hover:bg-[#F8F7FC]'
                            }`}
                          >
                            {m.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Requirements / Notes */}
                    <div>
                      <div className="text-xs font-semibold text-[#4B4659] mb-1">
                        Current Bottlenecks &amp; Software Stack (Optional)
                      </div>
                      <textarea
                        rows={2}
                        placeholder="e.g. Handling 500+ inbound calls daily; need autonomous CRM integration with HubSpot..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm text-[#111018] placeholder-slate-400 outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all resize-none shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Enterprise Security Pill */}
                  <div className="flex items-center gap-2 text-[11px] text-[#777185] bg-[#F8F7FC] p-2.5 rounded-xl border border-[#E9E5F2]">
                    <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                    <span>
                      <strong>Strict Enterprise Privacy:</strong> Signed NDAs prior to deep audit. Zero data model training guarantee.
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(109,40,217,0.35)] hover:shadow-[0_8px_30px_rgba(109,40,217,0.5)] transition-all active:scale-[0.99] cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Reserving Your Priority Slot...</span>
                        </>
                      ) : (
                        <>
                          <span>Confirm &amp; Reserve Strategy Call</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Success View */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600 shadow-[0_0_24px_rgba(16,185,129,0.25)]">
                    <CheckCircle2 size={36} />
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-[#111018] mb-1">
                      Strategy Call Confirmed!
                    </h4>
                    <p className="text-[#4B4659] text-sm max-w-md mx-auto">
                      A calendar invite and direct access link have been dispatched to{' '}
                      <strong className="text-[#111018]">{formData.email || 'your email'}</strong>.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-[#F8F7FC] border border-[#E9E5F2] rounded-2xl p-5 max-w-md mx-auto text-left space-y-2.5 text-xs font-mono shadow-xs">
                    <div className="flex items-center justify-between text-[#777185]">
                      <span>Solution Scope:</span>
                      <span className="text-[#111018] font-bold">{selectedSolution}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#777185]">
                      <span>Reserved Slot:</span>
                      <span className="text-[#6D28D9] font-bold">
                        {selectedDate} @ {selectedTime} ({timezone})
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#777185]">
                      <span>Meeting Medium:</span>
                      <span className="text-[#111018] capitalize font-medium">
                        {meetingType.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#777185]">
                      <span>Assigned Engineer:</span>
                      <span className="text-[#6D28D9] font-semibold">
                        Senior AI Systems Architect
                      </span>
                    </div>
                  </div>

                  {/* Success Actions */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                        `RESH AI Technical Consultation: ${selectedSolution}`
                      )}&details=${encodeURIComponent(
                        `Strategy session with RESH AI Engineering team for ${
                          formData.name || 'Client'
                        } (${formData.company || 'Enterprise'}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 bg-[#F2EDFF] border border-[#D8C7FA] rounded-xl text-[#6D28D9] text-xs font-mono font-bold flex items-center justify-center gap-2 hover:bg-[#6D28D9] hover:text-white transition-all shadow-xs"
                    >
                      <Calendar size={15} />
                      <span>Add to Google Calendar</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="w-full sm:w-auto px-6 py-3 bg-white border border-[#E9E5F2] rounded-xl text-[#4B4659] text-xs font-mono hover:text-[#111018] hover:bg-[#F8F7FC] transition-colors cursor-pointer shadow-xs"
                    >
                      Done &amp; Return to Website
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
