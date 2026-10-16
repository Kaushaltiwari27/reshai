import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import Magnetic from './Magnetic';

interface FooterProps {
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer id="contact" className="bg-[#F8F7FC] border-t border-[#E9E5F2] pt-24 pb-12 font-general relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#C084FC]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-[#7C3AED]/8 blur-[130px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6 group">
              <img
                src="/resh-logo.png"
                alt="RESH AI"
                className="w-9 h-9 object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-2xl font-bold tracking-wider text-[#111018]">
                <span>RESH</span>
                <span className="text-[#7C3AED] ml-1.5">AI</span>
              </span>
            </a>
            <p className="text-[#4B4659] text-sm leading-relaxed max-w-[340px] mb-6">
              Enterprise AI implementation partner engineering autonomous voice agents, intelligent lead triage, and full-stack workflow automation for modern companies.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDFF] border border-[#D8C7FA] text-[#6D28D9] text-xs font-mono font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Production Systems Operational</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RESH AI X (Twitter)"
                className="w-8 h-8 rounded-full bg-white border border-[#E9E5F2] flex items-center justify-center text-[#4B4659] hover:text-[#6D28D9] hover:border-[#D8C7FA] transition-all shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RESH AI LinkedIn"
                className="w-8 h-8 rounded-full bg-white border border-[#E9E5F2] flex items-center justify-center text-[#4B4659] hover:text-[#6D28D9] hover:border-[#D8C7FA] transition-all shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RESH AI GitHub"
                className="w-8 h-8 rounded-full bg-white border border-[#E9E5F2] flex items-center justify-center text-[#4B4659] hover:text-[#6D28D9] hover:border-[#D8C7FA] transition-all shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RESH AI YouTube"
                className="w-8 h-8 rounded-full bg-white border border-[#E9E5F2] flex items-center justify-center text-[#4B4659] hover:text-[#6D28D9] hover:border-[#D8C7FA] transition-all shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-[#111018] font-bold text-sm mb-5 uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'AI Voice Agents', href: '/#services' },
                { name: 'Sales & Lead Funnels', href: '/#services' },
                { name: 'Support Automation', href: '/#services' },
                { name: 'Workflow Integration', href: '/#services' },
                { name: 'Custom AI Agents', href: '/#services' },
              ].map((item) => (
                <li key={item.name}>
                  <Magnetic>
                    <a
                      href={item.href}
                      className="text-[#4B4659] hover:text-[#6D28D9] transition-colors text-sm py-0.5 block font-medium"
                    >
                      {item.name}
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-[#111018] font-bold text-sm mb-5 uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Autonomous Engine', href: '/#infrastructure' },
                { name: 'Deployment Framework', href: '/#process' },
                { name: 'Engineering Philosophy', href: '/#founder' },
                { name: 'Interactive Demos', href: '/#demos' },
                { name: 'Engagement Pricing', href: '/#pricing' },
              ].map((item) => (
                <li key={item.name}>
                  <Magnetic>
                    <a
                      href={item.href}
                      className="text-[#4B4659] hover:text-[#6D28D9] transition-colors text-sm py-0.5 block font-medium"
                    >
                      {item.name}
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[#111018] font-bold text-sm mb-5 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-[#777185] text-xs block">General Inquiries</span>
                <Magnetic>
                  <a
                    href="mailto:contact@reshai.io"
                    className="text-[#111018] hover:text-[#6D28D9] transition-colors text-sm font-mono block font-semibold"
                  >
                    contact@reshai.io
                  </a>
                </Magnetic>
              </li>
              <li>
                <span className="text-[#777185] text-xs block">Enterprise Solutions</span>
                <Magnetic>
                  <a
                    href="mailto:enterprise@reshai.io"
                    className="text-[#111018] hover:text-[#6D28D9] transition-colors text-sm font-mono block font-semibold"
                  >
                    enterprise@reshai.io
                  </a>
                </Magnetic>
              </li>
              <li className="pt-2">
                <Magnetic>
                  <button
                    type="button"
                    onClick={() => onOpenBooking ? onOpenBooking() : window.location.assign('/book')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6D28D9] hover:underline"
                  >
                    <span>Schedule Technical Review</span>
                    <ArrowUpRight size={12} />
                  </button>
                </Magnetic>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights & Legal Navigation */}
        <div className="border-t border-[#E9E5F2] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#777185] text-xs">
            © 2026 RESH AI. All rights reserved. Built for production-scale business automation.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="/privacy" className="text-[#777185] hover:text-[#111018] text-xs transition-colors font-medium">
              Privacy Policy
            </a>
            <a href="/terms" className="text-[#777185] hover:text-[#111018] text-xs transition-colors font-medium">
              Terms of Service
            </a>
            <a href="/security" className="text-[#777185] hover:text-[#111018] text-xs transition-colors flex items-center gap-1 font-medium">
              <ShieldCheck size={12} className="text-emerald-600" />
              <span>Data Security Standards</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
