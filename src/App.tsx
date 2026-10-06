import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductFramework } from './components/ProductFramework';
import { ProductJourneyMap } from './components/ProductJourneyMap';
import { FeaturedWork } from './components/FeaturedWork';
import { MetricsWall } from './components/MetricsWall';
import { ProductSkills } from './components/ProductSkills';
import { LeadershipTimeline } from './components/LeadershipTimeline';
import { HackathonsSection } from './components/HackathonsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { X, Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from './data/portfolioData';

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

export function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setContactModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#121214] font-sans selection:bg-blue-600/15 selection:text-blue-600">
      
      {/* Sticky Translucent Navbar */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenContact={scrollToContact} />

        {/* Product Thinking Framework (4 Steps) */}
        <ProductFramework />

        {/* From Idea to Product (10 Interactive Stages) */}
        <ProductJourneyMap />

        {/* Selected Product Work (Editorial Deep Dives) */}
        <FeaturedWork />

        {/* Product Metrics Wall (10 Verified Metrics) */}
        <MetricsWall />

        {/* Interactive Product Toolkit */}
        <ProductSkills />

        {/* Leadership & Ownership Progression */}
        <LeadershipTimeline />

        {/* Competitive Hackathons */}
        <HackathonsSection />

        {/* Grounded About Story */}
        <AboutSection />

        {/* Closing Contact Statement */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Connect Floating Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200 shadow-2xl text-left">
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-semibold uppercase text-neutral-500">
                Let's Connect
              </span>
            </div>

            <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
              Get in Touch with Labdhi
            </h3>
            <p className="text-xs text-neutral-600 mt-1">
              Interested in discussing APM, PM, or AI Product opportunities? Reach out directly.
            </p>

            <div className="mt-6 space-y-3">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/80 transition-all text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-neutral-800">{PERSONAL_INFO.email}</span>
                </div>
                <span className="font-mono text-[11px] text-neutral-500 flex items-center gap-1">
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied' : 'Copy'}
                </span>
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-blue-50/70 hover:bg-blue-100/70 border border-blue-200 text-xs transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedInIcon className="w-4 h-4 text-blue-700" />
                  <span className="font-semibold text-blue-900">LinkedIn Profile</span>
                </div>
                <span className="text-[11px] font-mono text-blue-700 flex items-center gap-0.5">
                  <span>Open Profile</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
              <span>Location: Pune / Indore, India</span>
              <span className="text-emerald-700 font-medium">● Available to chat</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
