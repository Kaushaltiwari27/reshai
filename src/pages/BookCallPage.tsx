import React, { useState } from 'react';
import { Calendar, CheckCircle2, ArrowRight, ShieldCheck, User, Building, Mail, Phone, ArrowLeft, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import Footer from '../components/Footer';

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
    'Legacy Software API Modernization',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (step === 2) {
      if (!formData.name || !formData.email) return;
      setStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#7C3AED', '#22D3EE', '#A855F7'],
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#080812] text-white font-general">
      {/* Top Simple Header */}
      <header className="sticky top-0 z-50 bg-[#080812]/90 backdrop-blur-xl border-b border-purple-500/20 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/resh-logo.png"
              alt="RESH AI"
              className="w-8 h-8 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-bold tracking-wider text-white">
              <span>RESH</span>
              <span className="text-[#22D3EE] ml-1.5">AI</span>
            </span>
          </a>

          <a
            href="/"
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-purple-500/20 bg-white/5"
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#22D3EE] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
                <span>Architecture Consultation</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-4">
                Let&apos;s Design Your{' '}
                <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] bg-clip-text text-transparent">
                  Autonomous AI System
                </span>
              </h1>
              <p className="text-slate-300 text-base leading-relaxed">
                Book a 30-minute technical session with a Senior AI Systems Engineer. We&apos;ll audit your current operational bottlenecks, review your software stack, and outline an actionable deployment roadmap.
              </p>
            </div>

            {/* What to expect on the call */}
            <div className="bg-[#151529]/80 border border-purple-500/20 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-[#22D3EE]">
                What Happens on This Call:
              </h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-[#22D3EE] shrink-0 mt-0.5">
                    1
                  </div>
                  <span><strong>Operational Workflow Audit:</strong> Mapping where human hours are currently wasted on repetitive voice calls, lead qualification, or manual CRM updates.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-[#22D3EE] shrink-0 mt-0.5">
                    2
                  </div>
                  <span><strong>Architecture Feasibility:</strong> Evaluating latency targets (&lt;800ms), telephony codecs, CRM webhook bridges, and fail-safe human escalations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-[#22D3EE] shrink-0 mt-0.5">
                    3
                  </div>
                  <span><strong>Fixed-Scope Proposal:</strong> Clear milestone timeline, sandbox demonstration period, and defined ROI metrics before any commercial commitment.</span>
                </li>
              </ul>
            </div>

            {/* Client Testimonial Card */}
            <div className="border border-purple-500/20 rounded-2xl p-5 bg-[#080812] relative overflow-hidden">
              <div className="flex items-center gap-1 mb-3 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-xs italic leading-relaxed mb-4">
                &ldquo;RESH AI redesigned our inbound phone handling in less than three weeks. We now qualify hundreds of incoming inquiries autonomously with zero wait times.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#22D3EE] flex items-center justify-center font-bold text-xs text-white">
                  DS
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Director of Sales Operations</div>
                  <div className="text-[11px] text-slate-400">Enterprise Logistics Co.</div>
                </div>
              </div>
            </div>

            {/* Security Guarantee */}
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck size={18} className="text-[#22D3EE] shrink-0" />
              <span>Strict enterprise privacy: We sign mutual NDAs before any internal data access.</span>
            </div>
          </div>

          {/* Right Column: Interactive Scheduling Box */}
          <div className="lg:col-span-7 bg-[#151529] border border-purple-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-purple-950/40 relative">
            {/* Step 1: Solution & Slot */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">
                    Step 1: Select Your Scope &amp; Schedule
                  </h2>
                  <p className="text-xs text-slate-400">
                    Pick your priority automation focus and a time slot that suits you.
                  </p>
                </div>

                {/* Automation Focus */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                    Primary Area of Focus
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {solutions.map((sol) => (
                      <button
                        key={sol}
                        type="button"
                        onClick={() => setSelectedSolution(sol)}
                        className={`text-left text-xs p-3.5 rounded-xl border transition-all ${
                          selectedSolution === sol
                            ? 'bg-purple-900/30 border-[#22D3EE] text-white shadow-[0_0_15px_rgba(34,211,238,0.2)] font-semibold'
                            : 'bg-[#080812]/70 border-purple-500/20 text-slate-300 hover:border-purple-500/40'
                        }`}
                      >
                        {sol}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Day Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                    Select Day
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {availableDates.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setSelectedDate(item.label)}
                        className={`text-center p-3 rounded-xl border transition-all ${
                          selectedDate === item.label
                            ? 'bg-purple-900/30 border-[#22D3EE] text-white shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                            : 'bg-[#080812]/70 border-purple-500/20 text-slate-300 hover:border-purple-500/40'
                        }`}
                      >
                        <div className="font-bold text-sm">{item.label}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{item.day}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Select Available Time Slot
                    </label>
                    <select
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="bg-[#080812] border border-purple-500/20 rounded-lg px-2.5 py-1 text-xs text-slate-300 focus:outline-none focus:border-[#22D3EE]"
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
                        className={`py-2.5 px-2 text-center text-xs font-mono rounded-lg border transition-all ${
                          selectedTime === time
                            ? 'bg-[#7C3AED] border-[#22D3EE] text-white shadow-[0_0_12px_rgba(124,58,237,0.5)] font-bold'
                            : 'bg-[#080812]/70 border-purple-500/20 text-slate-300 hover:border-purple-500/40'
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
                    className="w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all"
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
                  <h2 className="text-xl font-bold text-white mb-1">
                    Step 2: Tell Us About Your Operations
                  </h2>
                  <p className="text-xs text-slate-400">
                    This allows us to review your tech stack before we hop on the call.
                  </p>
                </div>

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
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#080812] border border-purple-500/20 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#22D3EE] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#080812] border border-purple-500/20 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#22D3EE] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    What does your team want to automate first?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current bottleneck (e.g. 50+ missed inbound customer calls per day, leads not being pushed to HubSpot quickly enough, need 24/7 qualification)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 bg-[#080812] border border-purple-500/20 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#22D3EE] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3.5 border border-purple-500/20 rounded-xl text-slate-300 text-sm hover:bg-white/5 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all"
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
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.4)]">
                  <CheckCircle2 size={44} />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Consultation Scheduled!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    We&apos;ve reserved your slot and dispatched a calendar invite to <strong className="text-white">{formData.email}</strong>.
                  </p>
                </div>

                <div className="bg-[#080812] border border-purple-500/20 rounded-2xl p-6 max-w-md mx-auto text-left space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Scope:</span>
                    <span className="text-white font-bold">{selectedSolution}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Scheduled Time:</span>
                    <span className="text-[#22D3EE] font-bold">{selectedDate} @ {selectedTime} ({timezone})</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Meeting Host:</span>
                    <span className="text-purple-300">Senior AI Systems Architect</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <a
                    href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`RESH AI Consultation: ${selectedSolution}`)}&details=${encodeURIComponent(`Technical session with RESH AI team for ${formData.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-purple-600/30 border border-purple-400/40 rounded-xl text-white text-xs font-mono font-semibold flex items-center gap-2 hover:bg-purple-600/50 transition-colors"
                  >
                    <Calendar size={14} className="text-[#22D3EE]" />
                    <span>Add to Google Calendar</span>
                  </a>

                  <a
                    href="/"
                    className="px-6 py-3 bg-[#080812] border border-purple-500/20 rounded-xl text-slate-300 text-xs font-mono hover:text-white transition-colors"
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
