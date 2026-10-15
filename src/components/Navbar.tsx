import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Menu, X, ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Solutions',
      href: '/#services',
      hasDropdown: true,
      subItems: [
        { title: 'AI Voice Agents', href: '/#services' },
        { title: 'AI Sales & Lead Automation', href: '/#services' },
        { title: 'AI Customer Support Agents', href: '/#services' },
        { title: 'Business Workflow Automation', href: '/#services' },
        { title: 'Custom AI Agents', href: '/#services' },
      ],
    },
    {
      name: 'Architecture',
      href: '/#infrastructure',
      hasDropdown: true,
      subItems: [
        { title: 'Autonomous Voice Engine', href: '/#infrastructure' },
        { title: 'Multi-Tool & CRM Integration', href: '/#infrastructure' },
        { title: 'Human-in-the-Loop Protocol', href: '/#founder' },
        { title: 'Enterprise Security & Isolation', href: '/security' },
      ],
    },
    {
      name: 'Process',
      href: '/#process',
      hasDropdown: true,
      subItems: [
        { title: '01 Discover & Audit', href: '/#process' },
        { title: '02 Architecture & Design', href: '/#process' },
        { title: '03 Build & Tool Integration', href: '/#process' },
        { title: '04 Deploy & Continuous Iteration', href: '/#process' },
      ],
    },
    {
      name: 'Company',
      href: '/#about',
      hasDropdown: true,
      subItems: [
        { title: 'Why RESH AI', href: '/#about' },
        { title: 'Engineering Principles', href: '/#founder' },
        { title: 'Interactive ROI Demos', href: '/#demos' },
        { title: 'Pricing & Investment', href: '/#pricing' },
        { title: 'Frequently Asked Questions', href: '/#faq' },
        { title: 'Security & Compliance Portal', href: '/security' },
      ],
    },
  ];

  const handleBookClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.location.assign('/book');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b px-6 md:px-[80px] lg:px-[120px] ${
          isScrolled
            ? 'bg-[#080812]/90 backdrop-blur-xl border-purple-500/20 py-3.5 shadow-2xl shadow-purple-950/20'
            : 'bg-transparent py-5 md:py-6 border-transparent'
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo and Nav */}
          <div className="flex items-center gap-[48px] lg:gap-[64px]">
            <a
              className="flex items-center gap-3 text-white font-general font-bold text-xl tracking-wide shrink-0 z-50 group"
              href="/"
            >
              <img
                src="/resh-logo.png"
                alt="RESH AI"
                className="w-9 h-9 object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.5)] group-hover:scale-105 transition-transform"
              />
              <span className="text-xl tracking-wider font-extrabold flex items-center">
                <span>RESH</span>
                <span className="text-[#22D3EE] ml-1.5">AI</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-[28px] lg:gap-[34px]">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <a
                    className="flex items-center gap-1.5 text-[14px] font-medium text-slate-300 hover:text-white transition-colors py-3"
                    href={link.href}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-300 text-slate-400 group-hover:rotate-180 group-hover:text-[#22D3EE]"
                      />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 w-64 bg-[#151529]/95 border border-purple-500/20 backdrop-blur-xl rounded-2xl p-2.5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto">
                      <div className="flex flex-col gap-1">
                        {link.subItems.map((sub) => (
                          <a
                            key={sub.title}
                            href={sub.href}
                            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-purple-600/15 hover:border-purple-500/20 border border-transparent transition-all group/item"
                          >
                            <span>{sub.title}</span>
                            <ArrowUpRight
                              size={12}
                              className="opacity-0 group-hover/item:opacity-100 group-hover/item:text-[#22D3EE] transition-opacity"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Trigger */}
            <Magnetic>
              <button
                onClick={onOpenSearch}
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-[#22D3EE] hover:bg-purple-500/10 border border-transparent hover:border-purple-500/20 transition-all group"
                aria-label="Search"
              >
                <Search
                  size={17}
                  className="group-hover:scale-110 transition-transform"
                />
              </button>
            </Magnetic>

            {/* Book Strategy Call CTA Button */}
            <Magnetic>
              <button
                type="button"
                onClick={handleBookClick}
                className="relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden group bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#22D3EE] transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-[1.02] active:scale-95"
              >
                <div className="relative bg-[#080812] rounded-full px-5 py-2.5 h-full w-full flex items-center justify-center transition-colors group-hover:bg-[#101020]">
                  <span className="text-white text-[13px] font-semibold tracking-wide flex items-center gap-1.5">
                    <span>Book Strategy Call</span>
                    <ArrowUpRight size={14} className="text-[#22D3EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </button>
            </Magnetic>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white z-[110] relative p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[95] bg-[#080812]/98 backdrop-blur-2xl flex flex-col pt-24 px-8 md:hidden transition-all duration-300">
          <nav className="flex flex-col gap-5 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-200 hover:text-white transition-colors py-2 border-b border-purple-500/10 font-medium flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight size={18} className="text-[#22D3EE]" />
              </a>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full py-3 px-6 rounded-full border border-purple-500/20 text-slate-300 flex items-center justify-center gap-2 hover:bg-purple-900/20"
            >
              <Search size={16} />
              <span>Search Website</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleBookClick();
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white font-semibold text-center shadow-lg shadow-purple-900/40"
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
