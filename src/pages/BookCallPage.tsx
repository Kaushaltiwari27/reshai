import React, { useState, useMemo } from 'react';
import { Calendar, CheckCircle2, ArrowRight, ShieldCheck, User, Building, Mail, Phone, ArrowLeft, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import Footer from '../components/Footer';
import { submitLeadToGoogleSheet } from '../services/leadService';

export const BookCallPage: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedSolution, setSelectedSolution] = useState('Autonomous AI Voice Agents');
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('02:30 PM');
  const [timezone, setTimezone] = useState('IST (UTC +5:30)');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    teamSize: '10 - 50',
    notes: '',
  });

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
    'Legacy Software API Modernization',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (step === 2) {
      if (!formData.name || !formData.email) return;

      try {
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
        console.warn('Google Sheet submission warning:', err);
      }

      setStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#6D28D9', '#7C3AED', '#9333EA', '#C084FC'],
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111018] font-general">
      {/* Top Simple Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#E9E5F2] py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/resh-logo.png"
              alt="RESH AI"
              className="w-8 h-8 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-bold tracking-wider text-[#111018]">
              <span>RESH</span>
              <span className="text-[#7C3AED] ml-1.5">AI</span>
            </span>
          </a>

          <a
            href="/"
            className="flex items-center gap-2 text-xs font-mono text-[#4B4659] hover:text-[#111018] transition-colors px-3 py-1.5 rounded-lg border border-[#E9E5F2] bg-[#F8F7FC]"
          >
            <ArrowLeft size={14} />
            <span>Back to Main Site</span>
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Proof */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] text-[#6D28D9] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
                <span>Architecture Consultation</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-[#111018] tracking-tight leading-[1.15] mb-4">
                Let&apos;s Design Your{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 55%, #C084FC 100%)' }}
                >
                  Autonomous AI System
                </span>
              </h1>
              <p className="text-[#4B4659] text-base leading-relaxed">
                Book a 30-minute technical session with a Senior AI Systems Engineer. We&apos;ll audit your current operational bottlenecks, review your software stack, and outline an actionable deployment roadmap.
              </p>
            </div>

            {/* What to expect on the call */}
            <div className="bg-[#F8F7FC] border border-[#E9E5F2] rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider font-mono text-[#6D28D9]">
                What Happens on This Call:
              </h3>
              <ul className="space-y-3 text-xs text-[#4B4659]">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] flex items-center justify-center text-[#6D28D9] font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <span><strong>Operational Workflow Audit:</strong> Mapping where human hours are currently wasted on repetitive voice calls, lead qualification, or manual CRM updates.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] flex items-center justify-center text-[#6D28D9] font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <span><strong>Architecture Feasibility:</strong> Evaluating latency targets (&lt;800ms), telephony codecs, CRM webhook bridges, and fail-safe human escalations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] flex items-center justify-center text-[#6D28D9] font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <span><strong>Fixed-Scope Proposal:</strong> Clear milestone timeline, sandbox demonstration period, and defined ROI metrics before any commercial commitment.</span>
                </li>
              </ul>
            </div>

            {/* Client Testimonial Card */}
            <div className="border border-[#E9E5F2] rounded-2xl p-5 bg-white relative overflow-hidden shadow-sm">
              <div className="flex items-center gap-1 mb-3 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400" />
                ))}
              </div>
              <p className="text-[#4B4659] text-xs italic leading-relaxed mb-4">
                &ldquo;RESH AI redesigned our inbound phone handling in less than three weeks. We now qualify hundreds of incoming inquiries autonomously with zero wait times.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#6D28D9] to-[#9333EA] flex items-center justify-center font-bold text-xs text-white">
                  DS
                </div>
                <div>
                  <div className="text-xs font-bold text-[#111018]">Director of Sales Operations</div>
                  <div className="text-[11px] text-[#777185]">Enterprise Logistics Co.</div>
                </div>
              </div>
            </div>

            {/* Security Guarantee */}
            <div className="flex items-center gap-3 text-xs text-[#777185]">
              <ShieldCheck size={18} className="text-emerald-600 shrink-0" />
              <span>Strict enterprise privacy: We sign mutual NDAs before any internal data access.</span>
            </div>
          </div>

          {/* Right Column: Interactive Scheduling Box */}
          <div className="lg:col-span-7 bg-white border border-[#E9E5F2] rounded-3xl p-6 sm:p-10 shadow-[0_16px_50px_rgba(109,40,217,0.1)] relative">
            {/* Step 1: Solution & Slot */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#111018] mb-1">
                    Step 1: Select Your Scope &amp; Schedule
                  </h2>
                  <p className="text-xs text-[#777185]">
                    Pick your priority automation focus and a time slot that suits you.
                  </p>
                </div>

                {/* Automation Focus */}
                <div>
                  <label className="block text-xs font-bold text-[#111018] uppercase tracking-wider mb-2.5">
                    Primary Area of Focus
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {solutions.map((sol) => (
                      <button
                        key={sol}
                        type="button"
                        onClick={() => setSelectedSolution(sol)}
                        className={`text-left text-xs p-3.5 rounded-xl border transition-all cursor-pointer ${
                          selectedSolution === sol
                            ? 'bg-[#F2EDFF] border-[#6D28D9] text-[#6D28D9] font-bold shadow-sm'
                            : 'bg-[#F8F7FC] border-[#E9E5F2] text-[#4B4659] hover:border-[#D8C7FA]'
                        }`}
                      >
                        {sol}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Day Selection - Manual & Quick Pick */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-[#111018] uppercase tracking-wider">
                      Preferred Date (Type manually or click quick pick)
                    </label>
                    <span className="text-[11px] text-[#777185]">e.g. 24 Oct, Tomorrow, Monday</span>
                  </div>
                  <input
                    type="text"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    placeholder="Type your preferred date (e.g. Tomorrow, Monday 20th Oct)..."
                    className="w-full px-4 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm font-medium text-[#111018] placeholder-slate-400 outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all shadow-xs mb-2"
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {availableDates.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setSelectedDate(item.day)}
                        className={`text-center p-2.5 rounded-xl border transition-all cursor-pointer ${
                          selectedDate === item.day
                            ? 'bg-[#F2EDFF] border-[#6D28D9] text-[#6D28D9] font-bold shadow-sm'
                            : 'bg-[#F8F7FC] border-[#E9E5F2] text-[#4B4659] hover:border-[#D8C7FA]'
                        }`}
                      >
                        <div className="font-bold text-xs">{item.label}</div>
                        <div className="text-[11px] text-[#777185] mt-0.5">{item.day}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection - Manual & Quick Pick */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-[#111018] uppercase tracking-wider">
                      Preferred Time Slot (Type custom time)
                    </label>
                    <select
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="bg-[#F8F7FC] border border-[#D8C7FA] rounded-lg px-2.5 py-1 text-xs text-[#111018] focus:outline-none focus:border-[#6D28D9]"
                    >
                      <option value="IST (UTC +5:30)">IST (UTC +5:30)</option>
                      <option value="EST (UTC -5:00)">EST (UTC -5:00)</option>
                      <option value="PST (UTC -8:00)">PST (UTC -8:00)</option>
                      <option value="GMT (UTC +0:00)">GMT (UTC +0:00)</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    placeholder="Type preferred time (e.g. 02:30 PM, 11:00 AM, 4:15 PM)..."
                    className="w-full px-4 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm font-mono font-medium text-[#111018] placeholder-slate-400 outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all shadow-xs mb-2"
                  />
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-1 text-center text-xs font-mono rounded-lg border transition-all cursor-pointer ${
                          selectedTime === time
                            ? 'bg-[#6D28D9] border-[#6D28D9] text-white font-bold shadow-sm'
                            : 'bg-[#F8F7FC] border-[#E9E5F2] text-[#4B4659] hover:border-[#D8C7FA]'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(109,40,217,0.35)] hover:shadow-[0_8px_30px_rgba(109,40,217,0.5)] transition-all cursor-pointer"
                  >
                    <span>Proceed to Project Details</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Information Form */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-xl font-bold text-[#111018] mb-1">
                    Step 2: Tell Us About Your Operations
                  </h2>
                  <p className="text-xs text-[#777185]">
                    This allows us to review your tech stack before we hop on the call.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#111018] uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm text-[#111018] placeholder-slate-400 focus:outline-none focus:border-[#6D28D9] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111018] uppercase tracking-wider mb-1.5">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm text-[#111018] placeholder-slate-400 focus:outline-none focus:border-[#6D28D9] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#111018] uppercase tracking-wider mb-1.5">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm text-[#111018] placeholder-slate-400 focus:outline-none focus:border-[#6D28D9] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111018] uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E9E5F2] rounded-xl text-sm text-[#111018] placeholder-slate-400 focus:outline-none focus:border-[#6D28D9] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111018] uppercase tracking-wider mb-1.5">
                    What does your team want to automate first?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current bottleneck (e.g. 50+ missed inbound customer calls per day, leads not being pushed to HubSpot quickly enough, need 24/7 qualification)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E9E5F2] rounded-xl text-sm text-[#111018] placeholder-slate-400 focus:outline-none focus:border-[#6D28D9] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3.5 border border-[#E9E5F2] rounded-xl text-[#4B4659] text-sm hover:bg-[#F8F7FC] transition-colors cursor-pointer font-medium"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(109,40,217,0.35)] hover:shadow-[0_8px_30px_rgba(109,40,217,0.5)] transition-all cursor-pointer"
                  >
                    <span>Confirm Consultation Booking</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="text-center py-8 space-y-6">
                <div className="w-20 h-20 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600 shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                  <CheckCircle2 size={44} />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111018] mb-2">
                    Consultation Scheduled!
                  </h3>
                  <p className="text-[#4B4659] text-sm max-w-md mx-auto">
                    We&apos;ve reserved your slot and dispatched a calendar invite to <strong className="text-[#111018]">{formData.email}</strong>.
                  </p>
                </div>

                <div className="bg-[#F8F7FC] border border-[#E9E5F2] rounded-2xl p-6 max-w-md mx-auto text-left space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-[#777185]">
                    <span>Scope:</span>
                    <span className="text-[#111018] font-bold">{selectedSolution}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#777185]">
                    <span>Scheduled Time:</span>
                    <span className="text-[#6D28D9] font-bold">{selectedDate} @ {selectedTime} ({timezone})</span>
                  </div>
                  <div className="flex items-center justify-between text-[#777185]">
                    <span>Meeting Host:</span>
                    <span className="text-[#6D28D9] font-semibold">Senior AI Systems Architect</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <a
                    href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`RESH AI Consultation: ${selectedSolution}`)}&details=${encodeURIComponent(`Technical session with RESH AI team for ${formData.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#F2EDFF] border border-[#D8C7FA] rounded-xl text-[#6D28D9] text-xs font-mono font-bold flex items-center gap-2 hover:bg-[#6D28D9] hover:text-white transition-colors"
                  >
                    <Calendar size={14} />
                    <span>Add to Google Calendar</span>
                  </a>

                  <a
                    href="/"
                    className="px-6 py-3 bg-white border border-[#E9E5F2] rounded-xl text-[#4B4659] text-xs font-mono hover:text-[#111018] hover:bg-[#F8F7FC] transition-colors"
                  >
                    Return to Homepage
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookCallPage;
