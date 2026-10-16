import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Mic,
  TrendingUp,
  Headphones,
  Workflow,
  Cpu,
  Layers,
  ArrowRight,
} from 'lucide-react';
import type { ServiceDetail } from './ServiceDetailModal';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);

    setMousePos({
      x: Math.round((mouseX / width) * 100),
      y: Math.round((mouseY / height) * 100),
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative w-full rounded-2xl bg-white border border-[#E9E5F2] overflow-hidden transition-all duration-300 hover:border-[#D8C7FA] p-8 sm:p-9 group cursor-pointer shadow-[0_4px_24px_rgba(109,40,217,0.06)] hover:shadow-[0_16px_40px_rgba(109,40,217,0.12)] ${className}`}
    >
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Radial Mouse Follow Spotlight */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle 180px at ${mousePos.x}% ${mousePos.y}%, rgba(109, 40, 217, 0.08), transparent 80%)`,
        }}
      />

      <div style={{ transform: 'translateZ(20px)' }} className="relative z-20 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export const serviceDetailsList: ServiceDetail[] = [
  {
    id: 'voice-agents',
    title: 'AI Voice Agents',
    badge: 'Sub-800ms Latency',
    headline: 'Conversational voice infrastructure engineered for inbound inquiries, appointment setting, and instant phone triage.',
    description: 'Transform phone conversations from a costly manual bottleneck into an instant, deterministic capability. Our autonomous voice agents converse with human-like cadence, understand complex interruptions, query internal data sources in real-time, and schedule meetings directly into team calendars.',
    architecturePoints: [
      'Sub-800ms conversational latency utilizing low-overhead WebSocket audio streams',
      'Advanced Voice Activity Detection (VAD) with natural interruption recovery',
      'Two-way calendar synchronisation with Google Calendar and Cal.com',
      'Automated post-call summary push to CRM with full audio transcripts and recording links',
      'Intelligent warm transfer protocol to human supervisors when complex conditions arise',
    ],
    specs: [
      { label: 'Voice Latency', value: '< 800ms' },
      { label: 'Audio Quality', value: 'Opus HD' },
      { label: 'Telephony', value: 'Twilio / SIP' },
      { label: 'Concurrency', value: '1,000+ Calls' },
    ],
    integrations: ['Twilio', 'LiveKit', 'Salesforce', 'HubSpot', 'Google Calendar', 'Cal.com', 'Zoho CRM'],
  },
  {
    id: 'sales-automation',
    title: 'AI Sales & Lead Automation',
    badge: 'Pipeline Growth',
    headline: 'Autonomous lead ingestion, enrichment, scoring, and multi-channel instant follow-up.',
    description: 'Eliminate cold lead leakage forever. When an inquiry arrives through any channel (forms, WhatsApp, emails, Facebook leads), RESH AI agents enrich the contact profile with verified company intelligence, score purchasing intent, and trigger tailored personalized follow-up sequences in under 60 seconds.',
    architecturePoints: [
      'Multi-source ingestion pipeline capturing leads across web, chat, and phone',
      'Real-time company domain enrichment with verified headcount and revenue data',
      'Deterministic qualification scoring logic customized to your ideal customer profile (ICP)',
      'Automated multi-touch outreach sequences via email, SMS, and WhatsApp',
      'Bi-directional CRM sync with automated pipeline stage advancement and sales rep alerting',
    ],
    specs: [
      { label: 'Response Time', value: '< 60 sec' },
      { label: 'Data Depth', value: '25+ Fields' },
      { label: 'Sync Cadence', value: 'Instant' },
      { label: 'Avg Pipeline Lift', value: '+35%' },
    ],
    integrations: ['HubSpot', 'Salesforce', 'WhatsApp Business', 'Gmail / Outlook', 'Pipedrive', 'Slack'],
  },
  {
    id: 'customer-support',
    title: 'AI Customer Support Agents',
    badge: '24/7 Availability',
    headline: 'Autonomous tier-1 support agents with multi-channel resolution and verified accuracy.',
    description: 'Deliver instant, 24/7/365 customer support without scaling headcount. Our customer support agents utilize proprietary retrieval-augmented generation (RAG) to look up policy guidelines, order records, and troubleshooting procedures to resolve common customer issues with zero hallucination.',
    architecturePoints: [
      'Grounded RAG architecture connected to your knowledge base, PDFs, and Notion docs',
      'Over 75% average tier-1 ticket deflection rate with zero human touch required',
      'Autonomous lookup of order statuses, invoice history, and shipping tracking',
      'Sentiment analysis engine detecting frustrated customers for instant supervisor routing',
      'Native multi-lingual translation supporting over 40 global languages in real-time',
    ],
    specs: [
      { label: 'Deflection Rate', value: '75%+' },
      { label: 'Languages', value: '40+' },
      { label: 'Uptime Target', value: '99.99%' },
      { label: 'Resolution Speed', value: '< 2 sec' },
    ],
    integrations: ['Zendesk', 'Intercom', 'Freshdesk', 'Shopify', 'Jira Service Management', 'Slack'],
  },
  {
    id: 'workflow-automation',
    title: 'Business Workflow Automation',
    badge: 'Cross-App Sync',
    headline: 'Unify your existing business tools and eliminate manual data entry across teams.',
    description: 'Bridge software silos and connect your mission-critical business tools. We build resilient, event-driven integration meshes between your CRMs, ERPs, accounting software, databases, and communication channels so data moves instantly without human error.',
    architecturePoints: [
      'Resilient webhook orchestration between legacy software stacks and modern APIs',
      'Automated document extraction, OCR invoice parsing, and QuickBooks / Xero synchronisation',
      'Automated employee onboarding workflows and access credential provisioning',
      'Real-time event feeds and executive alert bots inside Slack and Microsoft Teams',
      'Automated scheduled operational audits and database report compilation',
    ],
    specs: [
      { label: 'Execution Trigger', value: 'Event-Driven' },
      { label: 'Connectors', value: '500+ Apps' },
      { label: 'Data Accuracy', value: '99.9%' },
      { label: 'Monthly Savings', value: '150+ hrs' },
    ],
    integrations: ['Make.com', 'n8n', 'Zapier Enterprise', 'PostgreSQL', 'QuickBooks', 'Google Workspace', 'AWS S3'],
  },
  {
    id: 'custom-agents',
    title: 'Custom AI Agents',
    badge: 'Bespoke Logic',
    headline: 'Purpose-built autonomous agents tailored to proprietary business logic and internal operations.',
    description: 'When off-the-shelf software falls short, we engineer custom multi-agent architectures that execute multi-step business logic, reason through ambiguous data, and execute deterministic database updates with full auditability and security.',
    architecturePoints: [
      'Private vector database embeddings (Pinecone, Qdrant) with hybrid dense-sparse search',
      'Multi-step tool calling framework with recursive self-correction and output verification',
      'Strict deterministic JSON schema outputs conforming to enterprise data structures',
      'Isolated single-tenant cloud deployment ensuring zero public LLM training exposure',
      'Comprehensive audit telemetry logging every decision branch and token cost',
    ],
    specs: [
      { label: 'Isolation', value: 'Single-Tenant' },
      { label: 'Validation', value: 'Deterministic' },
      { label: 'Vector Store', value: 'Pinecone' },
      { label: 'Audit Logging', value: 'Full Telemetry' },
    ],
    integrations: ['OpenAI Enterprise', 'Anthropic Claude', 'Pinecone', 'LangChain', 'FastAPI', 'Docker / Kubernetes'],
  },
  {
    id: 'integrations-consulting',
    title: 'AI Integrations & Consulting',
    badge: 'Enterprise Architecture',
    headline: 'Strategic roadmap, technical architecture audits, enterprise API integrations, and hands-on deployment.',
    description: 'Partner with senior AI systems engineers who design, test, and deploy practical automations directly into your production environment. From technical feasibility audits to ongoing latency optimization, we ensure your AI systems deliver verifiable ROI.',
    architecturePoints: [
      'Comprehensive operational bottleneck audit and ROI scoping before code delivery',
      'Security and regulatory compliance review (SOC 2 Type II, HIPAA, GDPR)',
      'Production-grade architecture design with sub-second latency and high concurrency targets',
      '14-day rapid sandbox implementation and verified team handover',
      'Continuous performance monitoring, prompt calibration, and SLA maintenance',
    ],
    specs: [
      { label: 'Pilot Delivery', value: '14 Days' },
      { label: 'Architecture', value: 'Production-Grade' },
      { label: 'SLA Support', value: '24/7 Priority' },
      { label: 'Lead Engineer', value: 'Dedicated Staff' },
    ],
    integrations: ['All Major CRMs', 'Custom REST / GraphQL APIs', 'AWS / Azure Cloud', 'PostgreSQL / Snowflake'],
  },
];

const serviceIcons = [Mic, TrendingUp, Headphones, Workflow, Cpu, Layers];

interface ServicesProps {
  onSelectService?: (service: ServiceDetail) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-32 bg-white relative border-t border-[#E9E5F2] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#C084FC]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-[#7C3AED]/8 blur-[160px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] text-[#6D28D9] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Core Capabilities
          </div>
          <h2 className="text-[40px] md:text-[56px] font-bold text-[#111018] leading-[1.1] mb-6">
            What We Build
          </h2>
          <div
            className="w-[60px] h-[3.5px] mx-auto rounded-full shadow-[0_2px_8px_rgba(109,40,217,0.3)]"
            style={{ backgroundImage: 'linear-gradient(135deg, #6D28D9 0%, #9333EA 55%, #C084FC 100%)' }}
          />
          <p className="mt-6 text-[#4B4659] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Scalable, production-ready AI systems engineered to integrate directly with your existing software stack and deliver immediate operational impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetailsList.map((item, index) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard
                  onClick={() => onSelectService?.(item)}
                  className="h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#F2EDFF] border border-[#D8C7FA] flex items-center justify-center group-hover:bg-[#6D28D9] transition-colors">
                        <Icon
                          size={24}
                          className="text-[#6D28D9] group-hover:text-white transition-colors"
                        />
                      </div>
                      <span className="text-[11px] font-semibold font-mono text-[#6D28D9] bg-[#F2EDFF] border border-[#D8C7FA] px-2.5 py-1 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#111018] tracking-wide mb-3 group-hover:text-[#6D28D9] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#4B4659] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E9E5F2] flex items-center justify-between text-xs font-semibold text-[#6D28D9] group-hover:text-[#7C3AED] transition-colors">
                    <span className="flex items-center gap-1.5">
                      <span>Explore Architecture</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[11px] font-mono text-[#777185] group-hover:text-[#6D28D9] transition-colors">
                      View Specs
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
