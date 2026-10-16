import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Sparkles, PenTool, Loader2, ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

interface Recommendation {
  title: string;
  reason: string;
  link: string;
}

interface CopyResult {
  tagline: string;
  headline: string;
  cta: string;
}

interface InteractiveDemosProps {
  onOpenBooking?: (topic?: string) => void;
}

export const InteractiveDemos: React.FC<InteractiveDemosProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'roi' | 'solution' | 'headline'>('roi');

  // ROI Calculator State
  const [teamSize, setTeamSize] = useState('5');
  const [hoursPerWeek, setHoursPerWeek] = useState('10');
  const [salary, setSalary] = useState('20000');
  const [currency, setCurrency] = useState('₹');

  const getSalaryRange = () => {
    return currency === '₹'
      ? { min: 10000, max: 200000, step: 5000 }
      : { min: 500, max: 20000, step: 500 };
  };

  const calculateROI = () => {
    const totalHours = parseInt(teamSize, 10) * parseInt(hoursPerWeek, 10) * 4;
    const moneySaved = Math.round((parseInt(salary, 10) / 160) * totalHours);
    return {
      hours: totalHours,
      moneySaved,
    };
  };

  // System Recommender State
  const [industry, setIndustry] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const handleAnalyze = () => {
    if (!industry) return;
    setIsAnalyzing(true);
    setRecommendation(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      if (industry === 'real estate') {
        setRecommendation({
          title: 'Autonomous Real Estate Voice Agent',
          reason:
            'Intercepts inbound property inquiries, qualifies buyers, and schedules site-visits into Cal.com instantly.',
          link: '#solutions',
        });
      } else if (industry === 'healthcare') {
        setRecommendation({
          title: 'Sub-800ms Medical Voice Receptionist',
          reason:
            'Handles high-volume patient calls, verifies insurance data, and syncs calendar logistics 24/7.',
          link: '#solutions',
        });
      } else if (industry === 'e-commerce') {
        setRecommendation({
          title: 'E-Commerce Growth & Support Bot',
          reason:
            'Resolves 90% of sizing and order tracking queries with abandoned cart WhatsApp recovery.',
          link: '#solutions',
        });
      } else {
        setRecommendation({
          title: 'Custom Headless CRM & ERP Automation',
          reason:
            'Connects your entire tech stack via n8n to eliminate manual data entry and sales bottlenecks.',
          link: '#services',
        });
      }
    }, 1200);
  };

  // Copywriting Agent State
  const [niche, setNiche] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copyResult, setCopyResult] = useState<CopyResult | null>(null);

  const handleGenerateCopy = () => {
    if (!niche) return;
    setIsGenerating(true);
    setCopyResult(null);

    setTimeout(() => {
      setIsGenerating(false);
      setCopyResult({
        tagline: 'AI-Powered Growth',
        headline: `Automate Your ${
          niche.charAt(0).toUpperCase() + niche.slice(1)
        } Business & Double Your Revenue.`,
        cta: 'Get Free Audit',
      });
    }, 1400);
  };

  const tabs = [
    { id: 'roi' as const, name: 'ROI Calculator', icon: Calculator },
    { id: 'solution' as const, name: 'System Recommender', icon: Sparkles },
    { id: 'headline' as const, name: 'Copywriting Agent', icon: PenTool },
  ];

  return (
    <section id="demos" className="py-32 bg-[#F8F7FC] relative border-t border-[#E9E5F2] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C084FC]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#7C3AED]/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] text-[#6D28D9] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles size={14} />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111018] mb-6 tracking-tight">
            Experience{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 55%, #C084FC 100%)' }}
            >
              RESH AI in Action
            </span>
          </h2>
          <p className="text-lg text-[#4B4659] max-w-2xl mx-auto leading-relaxed">
            Test our interactive models below to calculate your team's operational time recovered, receive system recommendations, or preview real-time AI generation.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white shadow-[0_4px_20px_rgba(109,40,217,0.35)] border border-[#7C3AED]'
                    : 'bg-white text-[#4B4659] hover:text-[#6D28D9] hover:bg-[#F2EDFF] border border-[#E9E5F2] shadow-sm'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-white' : 'text-[#777185]'} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="bg-white border border-[#E9E5F2] rounded-3xl p-6 md:p-12 relative min-h-[400px] shadow-[0_16px_40px_rgba(109,40,217,0.08)]">
          <AnimatePresence mode="wait">
            {/* TAB 1: ROI Calculator */}
            {activeTab === 'roi' && (
              <motion.div
                key="roi"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#111018] mb-2">
                    How much time can automation recover?
                  </h3>
                  <p className="text-[#4B4659] mb-8 text-sm leading-relaxed">
                    Enter your team details to calculate the monthly manual hours and cost recovered by deploying intelligent AI workflows.
                  </p>

                  <div className="space-y-6">
                    {/* Team Size Slider */}
                    <div>
                      <div className="flex justify-between text-sm text-[#4B4659] mb-2">
                        <span>Team Size</span>
                        <span className="text-[#6D28D9] font-bold">{teamSize} members</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="50"
                        value={teamSize}
                        onChange={(e) => setTeamSize(e.target.value)}
                        className="w-full accent-[#6D28D9] h-2 bg-[#E9E5F2] rounded-lg cursor-pointer"
                      />
                    </div>

                    {/* Hours Spent Slider */}
                    <div>
                      <div className="flex justify-between text-sm text-[#4B4659] mb-2">
                        <span>Hours spent per week on repetitive tasks</span>
                        <span className="text-[#6D28D9] font-bold">{hoursPerWeek} hrs/week</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="40"
                        value={hoursPerWeek}
                        onChange={(e) => setHoursPerWeek(e.target.value)}
                        className="w-full accent-[#6D28D9] h-2 bg-[#E9E5F2] rounded-lg cursor-pointer"
                      />
                    </div>

                    {/* Salary Slider & Currency Selector */}
                    <div>
                      <div className="flex justify-between items-center text-sm text-[#4B4659] mb-2">
                        <span>Average Monthly Compensation per Member</span>
                        <select
                          value={currency}
                          onChange={(e) => {
                            setCurrency(e.target.value);
                            setSalary(e.target.value === '₹' ? '20000' : '2500');
                          }}
                          className="bg-[#F8F7FC] border border-[#D8C7FA] text-[#111018] rounded-lg px-2.5 py-1 text-xs outline-none focus:border-[#6D28D9]"
                        >
                          <option value="₹">INR (₹)</option>
                          <option value="$">USD ($)</option>
                          <option value="€">EUR (€)</option>
                          <option value="£">GBP (£)</option>
                        </select>
                      </div>
                      <input
                        type="range"
                        min={getSalaryRange().min}
                        max={getSalaryRange().max}
                        step={getSalaryRange().step}
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        className="w-full accent-[#6D28D9] h-2 bg-[#E9E5F2] rounded-lg cursor-pointer"
                      />
                      <div className="text-[#6D28D9] font-bold mt-2 font-mono">
                        {currency}
                        {parseInt(salary, 10).toLocaleString('en-IN')} / month
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROI Output Card */}
                <div className="bg-[#F8F7FC] border border-[#D8C7FA] rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C084FC]/20 blur-[50px] rounded-full pointer-events-none" />
                  <h4 className="text-xs text-[#6D28D9] uppercase tracking-widest font-semibold font-mono mb-8">
                    Estimated Operational Impact
                  </h4>

                  <div className="space-y-8 relative z-10">
                    <div>
                      <div className="text-4xl sm:text-5xl font-bold text-[#111018] mb-2 font-mono">
                        {calculateROI().hours} hrs
                      </div>
                      <div className="text-[#4B4659] text-sm">Recovered Operational Hours / Month</div>
                    </div>

                    <div className="w-full h-[1px] bg-[#E9E5F2]" />

                    <div>
                      <div className="text-4xl sm:text-5xl font-bold text-[#6D28D9] mb-2 font-mono">
                        {currency}
                        {calculateROI().moneySaved.toLocaleString('en-IN')}
                      </div>
                      <div className="text-[#4B4659] text-sm">Potential Operational Capacity Value</div>
                    </div>
                  </div>

                  <Magnetic>
                    <button
                      type="button"
                      onClick={() => onOpenBooking ? onOpenBooking(`ROI Estimate: ${calculateROI().hours} hrs / ${currency}${calculateROI().moneySaved.toLocaleString('en-IN')}`) : window.location.assign('/book')}
                      className="mt-8 block w-full py-3.5 rounded-xl bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white text-center font-semibold hover:shadow-[0_4px_24px_rgba(109,40,217,0.35)] transition-all cursor-pointer text-sm"
                    >
                      Book a Strategy Call with this ROI Scope
                    </button>
                  </Magnetic>
                </div>
              </motion.div>
            )}

            {/* TAB 2: System Recommender */}
            {activeTab === 'solution' && (
              <motion.div
                key="solution"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-3xl mx-auto"
              >
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-[#111018] mb-2">
                    Which AI System Does Your Business Need?
                  </h3>
                  <p className="text-[#4B4659] text-sm">
                    Select your primary sector to receive an architectural recommendation tailored to your workflow.
                  </p>
                </div>

                {!recommendation && !isAnalyzing && (
                  <div className="space-y-6">
                    <label className="text-sm text-[#4B4659] block text-center font-medium">
                      Select your primary industry:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {['real estate', 'healthcare', 'e-commerce', 'b2b enterprise'].map((item) => (
                        <button
                          key={item}
                          onClick={() => setIndustry(item)}
                          className={`p-4 text-sm rounded-xl border transition-all capitalize cursor-pointer font-semibold ${
                            industry === item
                              ? 'bg-[#F2EDFF] border-[#6D28D9] text-[#6D28D9] shadow-sm'
                              : 'bg-white border-[#E9E5F2] text-[#4B4659] hover:border-[#D8C7FA] hover:bg-[#F8F7FC]'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={handleAnalyze}
                      disabled={!industry}
                      className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white font-semibold hover:shadow-[0_4px_24px_rgba(109,40,217,0.35)] transition-all disabled:opacity-40 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Sparkles size={18} />
                      <span>Analyze Recommended Architecture</span>
                    </button>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="py-20 flex flex-col items-center justify-center text-[#6D28D9]">
                    <Loader2 size={40} className="animate-spin mb-4" />
                    <p className="font-semibold animate-pulse text-[#4B4659]">
                      Analyzing workflow requirements and integration patterns...
                    </p>
                  </div>
                )}

                {recommendation && !isAnalyzing && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#F8F7FC] border border-[#D8C7FA] p-8 rounded-2xl text-center"
                  >
                    <div className="w-16 h-16 bg-[#F2EDFF] border border-[#D8C7FA] rounded-full flex items-center justify-center mx-auto mb-6 text-[#6D28D9]">
                      <Sparkles size={30} />
                    </div>
                    <h4 className="text-[#6D28D9] text-xs font-mono font-semibold tracking-widest uppercase mb-2">
                      Recommended System Architecture
                    </h4>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#111018] mb-4">
                      {recommendation.title}
                    </h3>
                    <p className="text-[#4B4659] mb-8 max-w-xl mx-auto text-sm leading-relaxed">
                      {recommendation.reason}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => {
                          setRecommendation(null);
                          setIndustry('');
                        }}
                        className="px-6 py-3 rounded-full border border-[#D8C7FA] text-[#4B4659] hover:text-[#111018] hover:bg-white transition-all cursor-pointer text-sm font-medium"
                      >
                        Select Another Industry
                      </button>
                      <button
                        type="button"
                        onClick={() => onOpenBooking ? onOpenBooking(recommendation.title) : window.location.assign('/book')}
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white font-semibold hover:shadow-[0_4px_24px_rgba(109,40,217,0.35)] transition-all text-sm cursor-pointer"
                      >
                        Book Architecture Consultation
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* TAB 3: Copywriting Agent */}
            {activeTab === 'headline' && (
              <motion.div
                key="headline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-3xl mx-auto"
              >
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-[#111018] mb-2">
                    AI Messaging &amp; Value Generator
                  </h3>
                  <p className="text-[#4B4659] text-sm">
                    Enter your business niche to preview instant AI-generated positioning copy and conversion headers.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <input
                    type="text"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    placeholder="e.g. Real Estate Agency, Dental Clinic, SaaS Platform..."
                    className="flex-1 bg-white border border-[#E9E5F2] rounded-xl px-5 py-3.5 text-[#111018] focus:outline-none focus:border-[#6D28D9] transition-colors w-full placeholder:text-[#777185] text-sm shadow-sm"
                  />
                  <button
                    onClick={handleGenerateCopy}
                    disabled={!niche || isGenerating}
                    className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white font-semibold hover:shadow-[0_4px_24px_rgba(109,40,217,0.35)] transition-all disabled:opacity-40 flex items-center justify-center gap-2 w-full sm:w-auto shrink-0 cursor-pointer text-sm"
                  >
                    {isGenerating ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Sparkles size={18} />
                    )}
                    <span>Generate Copy</span>
                  </button>
                </div>

                {copyResult && !isGenerating && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#F8F7FC] border border-[#D8C7FA] p-8 md:p-10 rounded-2xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#6D28D9] to-[#9333EA]" />
                    <div className="inline-block px-3 py-1 bg-[#F2EDFF] text-[#6D28D9] text-xs font-mono font-semibold rounded-full mb-5 uppercase tracking-wider border border-[#D8C7FA]">
                      {copyResult.tagline}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#111018] mb-6 leading-tight">
                      {copyResult.headline}
                    </h2>
                    <button className="px-6 py-2.5 bg-[#111018] text-white font-semibold rounded-lg text-sm hover:bg-[#6D28D9] transition-colors cursor-pointer">
                      {copyResult.cta}
                    </button>

                    <div className="mt-8 pt-6 border-t border-[#E9E5F2] text-center">
                      <p className="text-[#4B4659] text-sm mb-3">
                        Want RESH AI to architect the complete automation stack for your business?
                      </p>
                      <button
                        type="button"
                        onClick={() => onOpenBooking ? onOpenBooking(`Copywriter: ${copyResult.headline}`) : window.location.assign('/book')}
                        className="text-[#6D28D9] text-sm font-semibold hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Schedule a Technical Consultation</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemos;
