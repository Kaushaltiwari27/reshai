import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, Server, Cpu, Database, KeyRound, Download, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';

export const SecurityPage: React.FC = () => {
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
      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Page Title */}
        <div className="mb-12 border-b border-purple-500/20 pb-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#22D3EE] text-xs font-mono font-medium mb-4">
            <ShieldCheck size={14} />
            <span>Trust &amp; Compliance Portal</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Enterprise Security &amp; Compliance Architecture
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Engineered from ground zero with zero-trust topology, isolated single-tenant compute options, and comprehensive data residency controls.
          </p>
        </div>

        {/* Security Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-2xl bg-[#151529]/80 border border-purple-500/20 text-center">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3 text-[#22D3EE]">
              <Lock size={20} />
            </div>
            <div className="font-bold text-sm text-white mb-1">SOC 2 Type II</div>
            <div className="text-[11px] text-slate-400">Certified controls audited annually</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#151529]/80 border border-purple-500/20 text-center">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3 text-[#22D3EE]">
              <ShieldCheck size={20} />
            </div>
            <div className="font-bold text-sm text-white mb-1">HIPAA Compliant</div>
            <div className="text-[11px] text-slate-400">Signed BAAs for healthcare systems</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#151529]/80 border border-purple-500/20 text-center">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3 text-[#22D3EE]">
              <Database size={20} />
            </div>
            <div className="font-bold text-sm text-white mb-1">Zero Data Training</div>
            <div className="text-[11px] text-slate-400">Contractual zero retention guarantee</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#151529]/80 border border-purple-500/20 text-center">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3 text-[#22D3EE]">
              <KeyRound size={20} />
            </div>
            <div className="font-bold text-sm text-white mb-1">AES-256 &amp; TLS 1.3</div>
            <div className="text-[11px] text-slate-400">End-to-end cryptographic transport</div>
          </div>
        </div>

        {/* Technical Architecture Whitepaper Details */}
        <div className="space-y-12 text-slate-300 text-sm leading-relaxed">
          {/* Pillar 1 */}
          <section className="bg-[#151529]/50 border border-purple-500/20 rounded-3xl p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Server size={22} className="text-[#22D3EE]" />
              <span>1. Single-Tenant Isolated Compute &amp; VPC Peering</span>
            </h2>
            <p className="mb-4">
              For enterprise clients with sensitive financial, healthcare, or government data, RESH AI deploys dedicated, single-tenant agent clusters inside isolated Virtual Private Clouds (VPC). No compute, database tables, or Redis cache instances are shared between enterprise accounts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 bg-[#080812] border border-purple-500/20 rounded-xl">
                <span className="text-purple-400 block mb-1">// Isolation</span>
                <span className="text-white">Strict VPC Peering / AWS PrivateLink</span>
              </div>
              <div className="p-3 bg-[#080812] border border-purple-500/20 rounded-xl">
                <span className="text-purple-400 block mb-1">// IP Governance</span>
                <span className="text-white">Dedicated Static Egress IPs for CRM Whitelisting</span>
              </div>
              <div className="p-3 bg-[#080812] border border-purple-500/20 rounded-xl">
                <span className="text-purple-400 block mb-1">// Resiliency</span>
                <span className="text-white">Multi-AZ Automatic Failover with &lt;1s switch</span>
              </div>
            </div>
          </section>

          {/* Pillar 2 */}
          <section className="bg-[#151529]/50 border border-purple-500/20 rounded-3xl p-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Cpu size={22} className="text-[#7C3AED]" />
              <span>2. Autonomous Guardrails &amp; Human-in-the-Loop Safeguards</span>
            </h2>
            <p className="mb-4">
              All agent conversation streams and workflow triggers pass through an independent deterministic evaluation layer prior to executing external API actions (such as charging credit cards, updating CRM deal stages, or deleting records).
            </p>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#22D3EE]" />
                <span><strong>Regex &amp; PII Scrubbing:</strong> Social security numbers, credit card details, and passwords are masked before audio reaches inference models.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#22D3EE]" />
                <span><strong>Emergency Kill Switches:</strong> Instant global toggle in your management portal to pause agent automations in under 200 milliseconds.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#22D3EE]" />
                <span><strong>Confidence Scoring Thresholds:</strong> Inquiries scoring below 95% intent confidence automatically transfer to live human supervisors.</span>
              </li>
            </ul>
          </section>

          {/* Download Whitepaper Callout */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/40 via-[#151529] to-[#080812] border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Request Complete SOC 2 Type II Audit Packet
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-lg">
                Includes penetration testing executive summaries, data flow architecture blueprints, and standard Business Associate Agreements (BAA).
              </p>
            </div>

            <a
              href="mailto:security@reshai.io?subject=Request%20SOC%202%20Audit%20Packet"
              className="px-6 py-3.5 bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] rounded-xl text-white font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-2 shrink-0 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all"
            >
              <Download size={15} />
              <span>Request Security Packet</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SecurityPage;
