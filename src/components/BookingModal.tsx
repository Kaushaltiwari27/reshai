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
  Clock,
  Loader2,
  AlertCircle,
  Video,
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
  
  // Manual typeable Date & Time state
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('02:30 PM');
  const [timezone, setTimezone] = useState('IST (UTC +5:30)');
  const [meetingType, setMeetingType] = useState<'Google Meet' | 'Zoom' | 'Phone Call' | 'WhatsApp'>('Google Meet');

  // Form Fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    notes: '',
  });

  // Validation Errors
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Quick suggestions for dates
  const quickDateChips = useMemo(() => {
    const list = [];
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
      const formatted = d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
      list.push({ label, fullText: `${label} (${formatted})` });
    }
    return list;
  }, []);

  // Quick suggestions for times
  const quickTimeChips = [
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
      setErrors({});
      if (quickDateChips.length > 1 && !selectedDate) {
        setSelectedDate(quickDateChips[1].fullText);
      }
    }
  }, [isOpen, preselectedPlan, quickDateChips]);

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

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@company.com)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Reliable submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#6D28D9', '#7C3AED', '#9333EA', '#C084FC'],
        });
      } catch (err) {
        console.warn('Confetti error:', err);
      }
    }, 800);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setErrors({});
    onClose();
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setErrors({});
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
                    RESH AI Strategy Call
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111018]">
                  Schedule Strategy Call
                </h3>
                <p className="text-xs text-[#777185] mt-0.5">
                  30-min technical architecture review with Senior AI Systems Engineers.
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
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* 1. Solution Focus */}
                  <div>
                    <label className="block text-xs font-bold text-[#111018] uppercase tracking-wider mb-2">
                      1. Primary Automation Focus
                    </label>
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

                  {/* 2. Manual Date & Timing with Quick Pick */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-[#111018] uppercase tracking-wider">
                        2. Preferred Date &amp; Timing (Type Manually or Click Quick Picks)
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

                    {/* Manual Date Input */}
                    <div>
                      <div className="text-xs font-semibold text-[#4B4659] mb-1.5 flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-[#6D28D9]" />
                          <span>Date (Type or pick manually):</span>
                        </span>
                        <span className="text-[11px] text-[#777185]">e.g. Tomorrow, 24 Oct, or 2026-10-25</span>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          placeholder="Type your preferred date (e.g. Tomorrow, Monday 20th Oct)..."
                          className="w-full px-4 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm font-medium text-[#111018] placeholder-slate-400 outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all shadow-xs"
                        />
                      </div>

                      {/* Quick Date Chips */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-2">
                        <span className="text-[11px] text-[#777185] mr-1">Quick pick:</span>
                        {quickDateChips.map((chip) => (
                          <button
                            key={chip.label}
                            type="button"
                            onClick={() => setSelectedDate(chip.fullText)}
                            className={`px-2.5 py-1 text-xs rounded-lg border transition-all cursor-pointer ${
                              selectedDate === chip.fullText
                                ? 'bg-[#F2EDFF] border-[#6D28D9] text-[#6D28D9] font-bold'
                                : 'bg-[#F8F7FC] border-[#E9E5F2] text-[#4B4659] hover:border-[#D8C7FA]'
                            }`}
                          >
                            {chip.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Manual Time Input */}
                    <div>
                      <div className="text-xs font-semibold text-[#4B4659] mb-1.5 flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} className="text-[#6D28D9]" />
                          <span>Time Slot (Type custom time):</span>
                        </span>
                        <span className="text-[11px] text-[#777185]">e.g. 02:30 PM, 11:00 AM, 5 PM</span>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          placeholder="Type preferred time (e.g. 02:30 PM, 11:00 AM, 4:15 PM)..."
                          className="w-full px-4 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm font-mono font-medium text-[#111018] placeholder-slate-400 outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all shadow-xs"
                        />
                      </div>

                      {/* Quick Time Chips */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-2">
                        <span className="text-[11px] text-[#777185] mr-1">Quick pick:</span>
                        {quickTimeChips.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`px-2 py-0.5 text-xs font-mono rounded-lg border transition-all cursor-pointer ${
                              selectedTime === time
                                ? 'bg-[#6D28D9] border-[#6D28D9] text-white font-bold'
                                : 'bg-[#F8F7FC] border-[#E9E5F2] text-[#4B4659] hover:border-[#D8C7FA]'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
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
                        <div className="text-xs font-semibold text-[#4B4659] mb-1 flex items-center justify-between">
                          <span>Full Name <span className="text-red-500">*</span></span>
                          {errors.name && (
                            <span className="text-[11px] text-red-500 font-normal flex items-center gap-1">
                              <AlertCircle size={11} />
                              <span>{errors.name}</span>
                            </span>
                          )}
                        </div>
                        <div className="relative">
                          <User size={15} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${errors.name ? 'text-red-400' : 'text-slate-400'}`} />
                          <input
                            type="text"
                            placeholder="Alex Morgan"
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({ ...formData, name: e.target.value });
                              if (errors.name) setErrors({ ...errors, name: undefined });
                            }}
                            className={`w-full pl-10 pr-4 py-2.5 bg-white border rounded-xl text-sm text-[#111018] placeholder-slate-400 outline-none transition-all shadow-xs ${
                              errors.name
                                ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                                : 'border-[#E9E5F2] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <div className="text-xs font-semibold text-[#4B4659] mb-1 flex items-center justify-between">
                          <span>Work Email <span className="text-red-500">*</span></span>
                          {errors.email && (
                            <span className="text-[11px] text-red-500 font-normal flex items-center gap-1">
                              <AlertCircle size={11} />
                              <span>{errors.email}</span>
                            </span>
                          )}
                        </div>
                        <div className="relative">
                          <Mail size={15} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${errors.email ? 'text-red-400' : 'text-slate-400'}`} />
                          <input
                            type="email"
                            placeholder="alex@company.com"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (errors.email) setErrors({ ...errors, email: undefined });
                            }}
                            className={`w-full pl-10 pr-4 py-2.5 bg-white border rounded-xl text-sm text-[#111018] placeholder-slate-400 outline-none transition-all shadow-xs ${
                              errors.email
                                ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                                : 'border-[#E9E5F2] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20'
                            }`}
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
                      <div className="text-xs font-semibold text-[#4B4659] mb-1.5 flex items-center gap-1.5">
                        <Video size={13} className="text-[#6D28D9]" />
                        <span>Meeting Platform</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {(['Google Meet', 'Zoom', 'Phone Call', 'WhatsApp'] as const).map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => setMeetingType(m)}
                            className={`py-2 px-2 text-center text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                              meetingType === m
                                ? 'bg-[#F2EDFF] border-[#6D28D9] text-[#6D28D9] font-bold shadow-xs'
                                : 'bg-white border-[#E9E5F2] text-[#4B4659] hover:bg-[#F8F7FC]'
                            }`}
                          >
                            {m}
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
                      <strong>Strict Enterprise Privacy:</strong> Signed NDAs prior to deep audit. Zero model data training guarantee.
                    </span>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(109,40,217,0.35)] hover:shadow-[0_8px_30px_rgba(109,40,217,0.5)] transition-all active:scale-[0.99] cursor-pointer disabled:opacity-70"
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
                      <strong className="text-[#111018]">{formData.email}</strong>.
                    </p>
                  </div>

                  {/* Summary Card with exact typed date and time */}
                  <div className="bg-[#F8F7FC] border border-[#E9E5F2] rounded-2xl p-5 max-w-md mx-auto text-left space-y-2.5 text-xs font-mono shadow-xs">
                    <div className="flex items-center justify-between text-[#777185]">
                      <span>Client Name:</span>
                      <span className="text-[#111018] font-bold">{formData.name}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#777185]">
                      <span>Solution Scope:</span>
                      <span className="text-[#111018] font-bold">{selectedSolution}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#777185]">
                      <span>Reserved Date:</span>
                      <span className="text-[#6D28D9] font-bold">{selectedDate || 'Upcoming business day'}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#777185]">
                      <span>Reserved Time:</span>
                      <span className="text-[#6D28D9] font-bold">{selectedTime || '02:30 PM'} ({timezone})</span>
                    </div>
                    <div className="flex items-center justify-between text-[#777185]">
                      <span>Meeting Medium:</span>
                      <span className="text-[#111018] font-medium">{meetingType}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#777185]">
                      <span>Assigned Architect:</span>
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
                          formData.name
                        } (${formData.company || 'Enterprise'}). Platform: ${meetingType}. Date: ${selectedDate} at ${selectedTime}.`
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
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-6 py-3 bg-white border border-[#E9E5F2] rounded-xl text-[#4B4659] text-xs font-mono hover:text-[#111018] hover:bg-[#F8F7FC] transition-colors cursor-pointer shadow-xs"
                    >
                      Book Another Call
                    </button>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="w-full sm:w-auto px-6 py-3 bg-[#111018] rounded-xl text-white text-xs font-mono hover:bg-[#6D28D9] transition-colors cursor-pointer shadow-xs font-semibold"
                    >
                      Done &amp; Close
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
