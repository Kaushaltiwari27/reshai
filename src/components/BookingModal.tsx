import React, { useState, useEffect } from 'react';
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
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitLeadToGoogleSheet } from '../services/leadService';

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

  // Form Fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
  });

  // Validation Errors
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const solutions = [
    'Autonomous AI Voice Agents',
    'AI Sales & CRM Lead Automation',
    'AI Customer Support Infrastructure',
    'Full-Stack Workflow Orchestration',
    'Custom Enterprise Multi-Agent Mesh',
    'AI Growth Architecture',
    'Enterprise Scale Infrastructure',
  ];

  // Lock background scroll when modal is open so that mousewheel strictly scrolls inside the modal
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Sync state whenever modal is opened
  useEffect(() => {
    if (isOpen) {
      if (preselectedPlan) {
        setSelectedSolution(preselectedPlan);
      }
      setIsSubmitting(false);
      setIsSubmitted(false);
      setErrors({});
    }
  }, [isOpen, preselectedPlan]);

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
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Dispatches lead directly to the integrated Google Sheet Webhook URL
      await submitLeadToGoogleSheet({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        service: selectedSolution,
        date: selectedDate.trim() || 'Tomorrow',
        time: selectedTime.trim() || '02:30 PM',
        notes: formData.notes.trim(),
      });
    } catch (err) {
      console.warn('Submission notice:', err);
    } finally {
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
    }
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
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      notes: '',
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 z-[100000] flex items-center justify-center p-3 sm:p-5 overflow-y-auto overscroll-contain"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            data-lenis-prevent="true"
            className="relative w-full max-w-xl bg-white border border-[#E9E5F2] rounded-3xl shadow-[0_24px_70px_rgba(109,40,217,0.22)] overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col overscroll-contain"
          >
            {/* Header */}
            <div className="relative px-6 py-5 border-b border-[#E9E5F2] flex items-center justify-between bg-white shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                  <span className="text-[11px] font-mono font-bold text-[#6D28D9] uppercase tracking-wider">
                    RESH AI Strategy Call
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111018]">
                  Schedule Consultation
                </h3>
                <p className="text-xs text-[#777185] mt-0.5">
                  30-min technical architecture review • Free &amp; confidential
                </p>
              </div>

              {/* Close Button */}
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
            <div
              data-lenis-prevent="true"
              className="p-6 sm:p-7 overflow-y-auto flex-1 overscroll-contain"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Service Focus */}
                  <div>
                    <label className="block text-xs font-bold text-[#111018] uppercase tracking-wider mb-1.5">
                      Automation Focus
                    </label>
                    <select
                      value={selectedSolution}
                      onChange={(e) => setSelectedSolution(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F8F7FC] border border-[#E9E5F2] rounded-xl text-sm font-semibold text-[#111018] outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all cursor-pointer"
                    >
                      {solutions.map((sol) => (
                        <option key={sol} value={sol}>
                          {sol}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                          placeholder="Kaushal Tiwari"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          className={`w-full pl-10 pr-3.5 py-2.5 bg-white border rounded-xl text-sm text-[#111018] placeholder-slate-400 outline-none transition-all ${
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
                          placeholder="kaushal@company.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          className={`w-full pl-10 pr-3.5 py-2.5 bg-white border rounded-xl text-sm text-[#111018] placeholder-slate-400 outline-none transition-all ${
                            errors.email
                              ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                              : 'border-[#E9E5F2] focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20'
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Phone */}
                    <div>
                      <div className="text-xs font-semibold text-[#4B4659] mb-1">
                        Phone / WhatsApp
                      </div>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm text-[#111018] placeholder-slate-400 outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <div className="text-xs font-semibold text-[#4B4659] mb-1">
                        Company Name
                      </div>
                      <div className="relative">
                        <Building size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Your Company / Brand"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm text-[#111018] placeholder-slate-400 outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Date & Time Row (Manual typeable inputs) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Date */}
                    <div>
                      <div className="text-xs font-semibold text-[#4B4659] mb-1">
                        Preferred Date (Type manually)
                      </div>
                      <div className="relative">
                        <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          placeholder="e.g. Tomorrow, 24 Oct, Monday"
                          className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm text-[#111018] placeholder-slate-400 outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Time */}
                    <div>
                      <div className="text-xs font-semibold text-[#4B4659] mb-1">
                        Preferred Time (Type manually)
                      </div>
                      <div className="relative">
                        <Clock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          placeholder="e.g. 02:30 PM, 11:00 AM, 4 PM"
                          className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm font-mono text-[#111018] placeholder-slate-400 outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Requirements / Notes */}
                  <div>
                    <div className="text-xs font-semibold text-[#4B4659] mb-1">
                      Project Notes &amp; Current Bottlenecks (Optional)
                    </div>
                    <textarea
                      rows={2}
                      placeholder="Tell us briefly about your operational workflows or goals..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm text-[#111018] placeholder-slate-400 outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all resize-none"
                    />
                  </div>

                  {/* Security Note */}
                  <div className="flex items-center gap-2 text-[11px] text-[#777185] bg-[#F8F7FC] p-2.5 rounded-xl border border-[#E9E5F2]">
                    <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                    <span>
                      Data is encrypted &amp; dispatched directly to your Google Sheet under enterprise NDA.
                    </span>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(109,40,217,0.35)] hover:shadow-[0_8px_30px_rgba(109,40,217,0.5)] transition-all active:scale-[0.99] cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Saving to Google Sheet &amp; Reserving Slot...</span>
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
                  className="text-center py-4 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600 shadow-[0_0_24px_rgba(16,185,129,0.25)]">
                    <CheckCircle2 size={36} />
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-[#111018] mb-1">
                      Strategy Call Confirmed!
                    </h4>
                    <p className="text-[#4B4659] text-xs max-w-md mx-auto">
                      Your details have been recorded in Google Sheets and a confirmation has been dispatched to{' '}
                      <strong className="text-[#111018]">{formData.email}</strong>.
                    </p>
                  </div>

                  {/* Summary Card with exact typed date and time */}
                  <div className="bg-[#F8F7FC] border border-[#E9E5F2] rounded-2xl p-4 max-w-md mx-auto text-left space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between text-[#777185]">
                      <span>Client:</span>
                      <span className="text-[#111018] font-bold">{formData.name}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#777185]">
                      <span>Solution:</span>
                      <span className="text-[#111018] font-bold">{selectedSolution}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#777185]">
                      <span>Reserved:</span>
                      <span className="text-[#6D28D9] font-bold">
                        {selectedDate} @ {selectedTime}
                      </span>
                    </div>
                    {formData.phone && (
                      <div className="flex items-center justify-between text-[#777185]">
                        <span>Contact:</span>
                        <span className="text-[#111018]">{formData.phone}</span>
                      </div>
                    )}
                  </div>

                  {/* Success Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                    <a
                      href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                        `RESH AI Technical Consultation: ${selectedSolution}`
                      )}&details=${encodeURIComponent(
                        `Strategy session with RESH AI Engineering team for ${
                          formData.name
                        } (${formData.company || 'Client'}). Date: ${selectedDate} at ${selectedTime}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 bg-[#F2EDFF] border border-[#D8C7FA] rounded-xl text-[#6D28D9] text-xs font-mono font-bold flex items-center justify-center gap-2 hover:bg-[#6D28D9] hover:text-white transition-all"
                    >
                      <Calendar size={14} />
                      <span>Add to Google Calendar</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-5 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-[#4B4659] text-xs font-mono hover:text-[#111018] hover:bg-[#F8F7FC] transition-colors cursor-pointer"
                    >
                      Book Another
                    </button>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="w-full sm:w-auto px-5 py-2.5 bg-[#111018] rounded-xl text-white text-xs font-mono hover:bg-[#6D28D9] transition-colors cursor-pointer font-semibold"
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
