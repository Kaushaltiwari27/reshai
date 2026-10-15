import React from 'react';
import { ArrowLeft, CheckCircle2, Scale, ShieldAlert } from 'lucide-react';
import Footer from '../components/Footer';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080812] text-white font-general">
      {/* Header */}
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
            <span>Back to Home</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Page Title */}
        <div className="mb-12 border-b border-purple-500/20 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#22D3EE] text-xs font-mono font-medium mb-4">
            <Scale size={14} />
            <span>Commercial Agreement</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Terms of Service &amp; Master Subscription Agreement
          </h1>
          <p className="text-slate-400 text-sm font-mono">
            Effective Date: October 15, 2026 | Document ID: RESH-TERMS-v3.1
          </p>
        </div>

        {/* IP Ownership Callout */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 via-[#151529] to-[#080812] border border-[#22D3EE]/40 relative overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.1)]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/20 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] shrink-0 mt-0.5">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h2 className="text-base font-bold text-white mb-1">
                100% Client Intellectual Property Retention
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                All custom prompts, conversation logic trees, proprietary workflow templates, CRM webhooks, and database connectors engineered for your company remain <strong>100% your proprietary intellectual property</strong> upon project milestone sign-off.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-10 text-slate-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#22D3EE] font-mono text-base">01.</span>
              <span>Acceptance &amp; Scope of Services</span>
            </h2>
            <p className="mb-3">
              By accessing, browsing, or utilizing the autonomous AI agents, voice telephony gateways, API conduits, and workflow systems developed by <strong>RESH AI</strong>, you (&ldquo;Client&rdquo;, &ldquo;you&rdquo;) agree to be bound by this Master Agreement and any accompanying Statement of Work (SOW).
            </p>
            <p>
              RESH AI provides software implementation, agent configuration, multi-system integration, and ongoing operational maintenance services as detailed in individual project schedules.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#22D3EE] font-mono text-base">02.</span>
              <span>Service Level Agreement (SLA) &amp; Uptime</span>
            </h2>
            <p className="mb-3">
              For clients on our <strong>AI Growth</strong> and <strong>Custom AI Systems</strong> tiers, RESH AI commits to a <strong>99.9% monthly uptime target</strong> for production agent routing and telephony stream availability, excluding scheduled maintenance windows announced with at least 48 hours notice.
            </p>
            <p>
              In the event of an unscheduled outage exceeding SLA parameters, service credits will be issued according to the schedule set forth in your enterprise contract.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#22D3EE] font-mono text-base">03.</span>
              <span>Telephony, Voice &amp; Regulatory Compliance</span>
            </h2>
            <div className="p-4 rounded-xl bg-[#151529]/70 border border-purple-500/20 space-y-2 mb-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase">
                <ShieldAlert size={16} />
                <span>Regulatory Compliance Mandate</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Client agrees to use RESH AI autonomous voice agents solely in compliance with applicable telecommunications laws, including but not limited to the US Telephone Consumer Protection Act (TCPA), the UK Privacy and Electronic Communications Regulations (PECR), and TRAI regulations.
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                All voice agents include automated call recording consent disclosures, opt-out honor logic, and human agent transfer mechanisms that must not be disabled by the Client.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#22D3EE] font-mono text-base">04.</span>
              <span>Client Responsibilities &amp; Human-in-the-Loop</span>
            </h2>
            <p className="mb-3">
              While RESH AI systems are engineered to achieve high precision (&gt;99%), Client acknowledges that artificial intelligence models are non-deterministic. Client maintains responsibility for configuring human-in-the-loop escalation thresholds for sensitive transactions, legal advice, or life-safety decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#22D3EE] font-mono text-base">05.</span>
              <span>Confidentiality &amp; Mutual Non-Disclosure</span>
            </h2>
            <p className="mb-3">
              Each party agrees to safeguard the other&apos;s confidential business information, proprietary software architecture, customer databases, and security credentials with the highest degree of care. Confidential obligations survive termination of this Agreement for a period of five (5) years.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#22D3EE] font-mono text-base">06.</span>
              <span>Governing Law &amp; Dispute Resolution</span>
            </h2>
            <p className="mb-3">
              This Agreement shall be governed by and construed in accordance with the laws governing commercial software contracts. Any disputes arising from this Agreement shall be resolved through binding commercial arbitration prior to initiating formal litigation.
            </p>
          </section>

          <section className="pt-6 border-t border-purple-500/20">
            <h2 className="text-xl font-bold text-white mb-2">
              Inquiries &amp; Enterprise Execution
            </h2>
            <p className="text-slate-400 text-xs">
              To request a countersigned Master Subscription Agreement or discuss custom enterprise amendments, contact <a href="mailto:enterprise@reshai.io" className="text-[#22D3EE] underline">enterprise@reshai.io</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
