import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, Menu, X, Sparkles, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Approach', href: '#approach' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Toolkit', href: '#toolkit' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#"
          className="group flex items-center gap-3 px-3 py-1.5 rounded-full transition-all duration-300 bg-white/70 backdrop-blur-md border border-neutral-200/60 shadow-xs hover:border-neutral-300 hover:shadow-sm"
        >
          <div className="w-8 h-8 rounded-full bg-[#121214] text-white flex items-center justify-center font-bold text-xs tracking-wider group-hover:scale-105 transition-transform">
            LM
          </div>
          <div className="flex flex-col text-left">
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-neutral-900 group-hover:text-blue-600 transition-colors">
              {PERSONAL_INFO.name.toUpperCase()}
            </span>
            <span className="text-[10px] text-neutral-500 font-mono hidden sm:inline-block leading-tight">
              AI Engineer • Product Builder
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-xl border border-neutral-200/80 rounded-full px-4 py-1.5 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-neutral-600 hover:text-neutral-950 px-3 py-1.5 rounded-full hover:bg-neutral-100/80 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Status Badge */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-200/60 text-emerald-700 text-[11px] font-medium backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Open to APM & AI Roles</span>
          </div>

          <a
            href="https://www.linkedin.com/in/labdhi-mandovara-047561278/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-medium text-neutral-600 hover:text-neutral-900 px-3 py-2 rounded-full border border-neutral-200 bg-white/60 hover:bg-white backdrop-blur-md transition-all"
          >
            LinkedIn
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          <button
            onClick={onOpenContact}
            className="group flex items-center gap-1.5 text-xs font-semibold text-white bg-[#121214] hover:bg-blue-600 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <span>Let's Talk</span>
            <Sparkles className="w-3.5 h-3.5 text-blue-300 group-hover:rotate-12 transition-transform" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenContact}
            className="text-xs font-semibold text-white bg-[#121214] px-3 py-1.5 rounded-full"
          >
            Connect
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white/90 border border-neutral-200 text-neutral-700 shadow-sm"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-sm bg-white/95 backdrop-blur-2xl border border-neutral-200/80 rounded-2xl p-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-neutral-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/labdhi-mandovara-047561278/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs font-medium text-neutral-600 px-3 py-2 rounded-lg bg-neutral-50"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full text-center text-xs font-semibold text-white bg-[#121214] py-2.5 rounded-xl shadow-sm"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
