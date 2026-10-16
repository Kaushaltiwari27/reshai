import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, Server, Cpu, Database, KeyRound, Download, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';

export const SecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#111018] font-general">
      {/* Header */}
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
            <span>Back to Home</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Page Title */}
        <div className="mb-12 border-b border-[#E9E5F2] pb-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] text-[#6D28D9] text-xs font-mono font-bold mb-4 shadow-sm">
            <ShieldCheck size={14} />
            <span>Trust &amp; Compliance Portal</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#111018] tracking-tight mb-4">
            Enterprise Security &amp; Compliance Architecture
          </h1>
          <p className="text-[#4B4659] text-sm md:text-base leading-relaxed">
            Engineered from ground zero with zero-trust topology, isolated single-tenant compute options, and comprehensive data residency controls.
          </p>
        </div>

        {/* Security Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-2xl bg-white border border-[#E9E5F2] text-center shadow-xs hover:border-[#D8C7FA] transition-all">
            <div className="w-10 h-10 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] flex items-center justify-center mx-auto mb-3 text-[#6D28D9]">
              <Lock size={20} />
            </div>
            <div className="font-bold text-sm text-[#111018] mb-1">SOC 2 Type II</div>
            <div className="text-[11px] text-[#777185]">Certified controls audited annually</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E9E5F2] text-center shadow-xs hover:border-[#D8C7FA] transition-all">
            <div className="w-10 h-10 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] flex items-center justify-center mx-auto mb-3 text-[#6D28D9]">
              <ShieldCheck size={20} />
            </div>
            <div className="font-bold text-sm text-[#111018] mb-1">HIPAA Compliant</div>
            <div className="text-[11px] text-[#777185]">Signed BAAs for healthcare systems</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E9E5F2] text-center shadow-xs hover:border-[#D8C7FA] transition-all">
            <div className="w-10 h-10 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] flex items-center justify-center mx-auto mb-3 text-[#6D28D9]">
              <Database size={20} />
            </div>
            <div className="font-bold text-sm text-[#111018] mb-1">Zero Data Training</div>
            <div className="text-[11px] text-[#777185]">Contractual zero retention guarantee</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E9E5F2] text-center shadow-xs hover:border-[#D8C7FA] transition-all">
            <div className="w-10 h-10 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] flex items-center justify-center mx-auto mb-3 text-[#6D28D9]">
              <KeyRound size={20} />
            </div>
            <div className="font-bold text-sm text-[#111018] mb-1">AES-256 &amp; TLS 1.3</div>
            <div className="text-[11px] text-[#777185]">End-to-end cryptographic transport</div>
          </div>
        </div>

        {/* Technical Architecture Whitepaper Details */}
        <div className="space-y-12 text-[#4B4659] text-sm leading-relaxed">
          {/* Pillar 1 */}
          <section className="bg-[#F8F7FC] border border-[#E9E5F2] rounded-3xl p-8 shadow-xs">
            <h2 className="text-xl font-bold text-[#111018] mb-4 flex items-center gap-3">
              <Server size={22} className="text-[#6D28D9]" />
              <span>1. Single-Tenant Isolated Compute &amp; VPC Peering</span>
            </h2>
            <p className="mb-4">
              For enterprise clients with sensitive financial, healthcare, or government data, RESH AI deploys dedicated, single-tenant agent clusters inside isolated Virtual Private Clouds (VPC). No compute, database tables, or Redis cache instances are shared between enterprise accounts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 bg-white border border-[#E9E5F2] rounded-xl shadow-xs">
                <span className="text-[#6D28D9] block mb-1 font-semibold">// Isolation</span>
                <span className="text-[#111018] font-bold">Strict VPC Peering / AWS PrivateLink</span>
              </div>
              <div className="p-3 bg-white border border-[#E9E5F2] rounded-xl shadow-xs">
                <span className="text-[#6D28D9] block mb-1 font-semibold">// IP Governance</span>
                <span className="text-[#111018] font-bold">Dedicated Static Egress IPs for CRM Whitelisting</span>
              </div>
              <div className="p-3 bg-white border border-[#E9E5F2] rounded-xl shadow-xs">
                <span className="text-[#6D28D9] block mb-1 font-semibold">// Resiliency</span>
                <span className="text-[#111018] font-bold">Multi-AZ Automatic Failover with &lt;1s switch</span>
              </div>
            </div>
          </section>

          {/* Pillar 2 */}
          <section className="bg-[#F8F7FC] border border-[#E9E5F2] rounded-3xl p-8 shadow-xs">
            <h2 className="text-xl font-bold text-[#111018] mb-4 flex items-center gap-3">
              <Cpu size={22} className="text-[#7C3AED]" />
              <span>2. Autonomous Guardrails &amp; Human-in-the-Loop Safeguards</span>
            </h2>
            <p className="mb-4">
              All agent conversation streams and workflow triggers pass through an independent deterministic evaluation layer prior to executing external API actions (such as charging credit cards, updating CRM deal stages, or deleting records).
            </p>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span><strong>Regex &amp; PII Scrubbing:</strong> Social security numbers, credit card details, and passwords are masked before audio reaches inference models.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span><strong>Emergency Kill Switches:</strong> Instant global toggle in your management portal to pause agent automations in under 200 milliseconds.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span><strong>Confidence Scoring Thresholds:</strong> Inquiries scoring below 95% intent confidence automatically transfer to live human supervisors.</span>
              </li>
            </ul>
          </section>

          {/* Download Whitepaper Callout */}
          <div className="p-8 rounded-3xl bg-[#F2EDFF] border border-[#D8C7FA] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-[#111018] mb-2">
                Request Complete SOC 2 Type II Audit Packet
              </h3>
              <p className="text-[#4B4659] text-xs sm:text-sm max-w-lg">
                Includes penetration testing executive summaries, data flow architecture blueprints, and standard Business Associate Agreements (BAA).
              </p>
            </div>

            <a
              href="mailto:reshai363@gmail.com?subject=Request%20SOC%202%20Audit%20Packet"
              className="px-6 py-3.5 bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] rounded-xl text-white font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-[0_4px_20px_rgba(109,40,217,0.35)] hover:shadow-[0_8px_30px_rgba(109,40,217,0.5)] transition-all"
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
