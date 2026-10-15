import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, EyeOff, Server, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';

export const PrivacyPage: React.FC = () => {
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
            <ShieldCheck size={14} />
            <span>Enterprise Data Governance</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Privacy Policy &amp; Data Protection
          </h1>
          <p className="text-slate-400 text-sm font-mono">
            Last Updated: October 15, 2026 | Document ID: RESH-PRIV-v2.4
          </p>
        </div>

        {/* Zero-Training Callout Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 via-[#151529] to-[#080812] border border-[#22D3EE]/40 relative overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.1)]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/20 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] shrink-0 mt-0.5">
              <EyeOff size={20} />
            </div>
            <div>
              <h2 className="text-base font-bold text-white mb-1">
                The RESH AI Zero Model-Training Guarantee
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                We contractually guarantee that your enterprise data, voice recordings, CRM records, employee prompts, and customer interactions are <strong>never used to train, retrain, or improve public foundation models</strong>. All inferencing runs through isolated private API endpoints with zero data retention policies active.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10 text-slate-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#22D3EE] font-mono text-base">01.</span>
              <span>Overview &amp; Scope</span>
            </h2>
            <p className="mb-3">
              This Privacy Policy explains how <strong>RESH AI</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, processes, and protects confidential enterprise data and personal information when you use our autonomous AI agents, voice telephony systems, workflow pipelines, and website.
            </p>
            <p>
              We operate primarily as a <strong>Data Processor</strong> on behalf of our enterprise clients, who remain the exclusive Data Controllers of their customer and business data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#22D3EE] font-mono text-base">02.</span>
              <span>Data We Collect and Process</span>
            </h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#151529]/70 border border-purple-500/15">
                <h4 className="text-white font-semibold text-xs uppercase font-mono tracking-wider mb-1 text-[#22D3EE]">
                  A. Voice Telephony &amp; Conversational Audio
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  When autonomous voice agents process inbound or outbound telephone calls, audio streams are digitized, processed through low-latency speech-to-text (STT), evaluated by deterministic business logic, and synthesized via text-to-speech (TTS). Audio recordings and transcripts are retained strictly in accordance with your configured data retention policy (e.g. 7 days, 30 days, or instant zero-retention ephemeral processing).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#151529]/70 border border-purple-500/15">
                <h4 className="text-white font-semibold text-xs uppercase font-mono tracking-wider mb-1 text-[#7C3AED]">
                  B. CRM &amp; Software Integration Payloads
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Bi-directional webhook streams sync contact information, qualification scores, scheduling calendar slots, and ticket summaries directly to your designated CRM (HubSpot, Salesforce, Zoho) via encrypted API tokens.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#151529]/70 border border-purple-500/15">
                <h4 className="text-white font-semibold text-xs uppercase font-mono tracking-wider mb-1 text-emerald-400">
                  C. Telemetry and Operational Logs
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  System performance metrics including routing latency, token usage, error codes, and failover triggers are collected in anonymized form to monitor system health and maintain our 99.9% uptime SLA.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#22D3EE] font-mono text-base">03.</span>
              <span>Data Encryption &amp; Security Standards</span>
            </h2>
            <p className="mb-4">
              All infrastructure engineered by RESH AI enforces military-grade cryptographic protocols:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <li className="flex items-center gap-2 p-3 bg-[#151529]/50 border border-purple-500/20 rounded-xl">
                <Lock size={15} className="text-[#22D3EE] shrink-0" />
                <span><strong>AES-256 Encryption</strong> for all data at rest</span>
              </li>
              <li className="flex items-center gap-2 p-3 bg-[#151529]/50 border border-purple-500/20 rounded-xl">
                <Lock size={15} className="text-[#22D3EE] shrink-0" />
                <span><strong>TLS 1.3 Strict Transport</strong> for data in transit</span>
              </li>
              <li className="flex items-center gap-2 p-3 bg-[#151529]/50 border border-purple-500/20 rounded-xl">
                <Server size={15} className="text-[#22D3EE] shrink-0" />
                <span>Single-tenant VPC isolation available</span>
              </li>
              <li className="flex items-center gap-2 p-3 bg-[#151529]/50 border border-purple-500/20 rounded-xl">
                <CheckCircle2 size={15} className="text-[#22D3EE] shrink-0" />
                <span>Automated cryptographic key rotation</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#22D3EE] font-mono text-base">04.</span>
              <span>Sub-processors &amp; Cloud Infrastructure</span>
            </h2>
            <p className="mb-3">
              We partner exclusively with enterprise cloud and telecommunications providers who adhere to rigorous security certifications (SOC 2 Type II, ISO 27001):
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-purple-500/20 rounded-xl overflow-hidden">
                <thead className="bg-[#151529] text-purple-300 font-mono">
                  <tr>
                    <th className="p-3">Partner / Service</th>
                    <th className="p-3">Function</th>
                    <th className="p-3">Data Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-500/10 bg-[#080812]">
                  <tr>
                    <td className="p-3 font-semibold text-white">Amazon Web Services (AWS)</td>
                    <td className="p-3">Cloud Hosting &amp; Compute</td>
                    <td className="p-3">US-East / EU-West (Regionalized)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Cloudflare Enterprise</td>
                    <td className="p-3">DDoS Protection &amp; Edge WAF</td>
                    <td className="p-3">Global Edge Network</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white">Twilio / LiveKit</td>
                    <td className="p-3">SIP Trunking &amp; Telephony Streams</td>
                    <td className="p-3">Encrypted Ephemeral Transit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#22D3EE] font-mono text-base">05.</span>
              <span>Your Data Rights &amp; Erasure</span>
            </h2>
            <p className="mb-3">
              In accordance with GDPR, CCPA, and applicable state and international data privacy statutes, you have the right to request access to, correction of, or permanent deletion of any personal or enterprise data stored within our systems.
            </p>
            <p>
              To initiate an audit or request data erasure, contact our Data Protection Team at{' '}
              <a href="mailto:privacy@reshai.io" className="text-[#22D3EE] underline hover:text-white transition-colors">
                privacy@reshai.io
              </a>
              . All requests are acknowledged within 24 hours.
            </p>
          </section>

          <section className="pt-6 border-t border-purple-500/20">
            <h2 className="text-xl font-bold text-white mb-2">
              Contact Privacy &amp; Legal Counsel
            </h2>
            <p className="text-slate-400 text-xs">
              For Data Processing Agreements (DPA), Business Associate Agreements (BAA), or custom security questionnaires, email our legal team at <a href="mailto:legal@reshai.io" className="text-[#22D3EE] underline">legal@reshai.io</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
