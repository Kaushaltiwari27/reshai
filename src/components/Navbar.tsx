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
      setIsScrolled(window.scrollY > 30);
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
            ? 'bg-white/95 backdrop-blur-xl border-[#E9E5F2] py-3.5 shadow-[0_4px_24px_rgba(109,40,217,0.07)]'
            : 'bg-white/80 backdrop-blur-md py-5 md:py-6 border-transparent'
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-[48px] lg:gap-[64px]">
            <a
              className="flex items-center gap-3 font-general font-bold text-xl tracking-wide shrink-0 z-50 group"
              href="/"
            >
              <img
                src="/resh-logo.png"
                alt="RESH AI"
                className="w-9 h-9 object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-xl tracking-wider font-extrabold flex items-center text-[#111018]">
                <span>RESH</span>
                <span className="text-[#7C3AED] ml-1.5">AI</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-[28px] lg:gap-[34px]">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <a
                    className="flex items-center gap-1.5 text-[14px] font-medium text-[#4B4659] hover:text-[#6D28D9] transition-colors py-3"
                    href={link.href}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-300 text-[#777185] group-hover:rotate-180 group-hover:text-[#7C3AED]"
                      />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 w-64 bg-white border border-[#E9E5F2] rounded-2xl p-2.5 shadow-[0_16px_40px_rgba(109,40,217,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto">
                      <div className="flex flex-col gap-1">
                        {link.subItems.map((sub) => (
                          <a
                            key={sub.title}
                            href={sub.href}
                            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-[#4B4659] hover:text-[#6D28D9] hover:bg-[#F2EDFF] border border-transparent transition-all group/item"
                          >
                            <span>{sub.title}</span>
                            <ArrowUpRight
                              size={12}
                              className="opacity-0 group-hover/item:opacity-100 group-hover/item:text-[#7C3AED] transition-opacity"
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
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#777185] hover:text-[#6D28D9] hover:bg-[#F2EDFF] border border-transparent hover:border-[#D8C7FA] transition-all group"
                aria-label="Search"
              >
                <Search size={17} className="group-hover:scale-110 transition-transform" />
              </button>
            </Magnetic>

            {/* Book Strategy Call CTA */}
            <Magnetic>
              <button
                type="button"
                onClick={handleBookClick}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white text-[13px] font-semibold tracking-wide shadow-[0_4px_20px_rgba(109,40,217,0.30)] hover:shadow-[0_6px_28px_rgba(109,40,217,0.45)] hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span>Book Strategy Call</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </Magnetic>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#111018] z-[110] relative p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[95] bg-white flex flex-col pt-24 px-8 md:hidden transition-all duration-300 border-r border-[#E9E5F2]">
          <nav className="flex flex-col gap-5 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#4B4659] hover:text-[#6D28D9] transition-colors py-2 border-b border-[#E9E5F2] font-medium flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight size={18} className="text-[#7C3AED]" />
              </a>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full py-3 px-6 rounded-full border border-[#E9E5F2] text-[#4B4659] flex items-center justify-center gap-2 hover:bg-[#F2EDFF] hover:border-[#D8C7FA] transition-all"
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
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#6D28D9] to-[#9333EA] text-white font-semibold text-center shadow-lg shadow-purple-200"
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
