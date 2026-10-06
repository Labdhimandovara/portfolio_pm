import React, { useState, useEffect } from 'react';
import { Home, Bookmark, Award, Smile, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

interface FloatingSideNavProps {
  onOpenContact: () => void;
}

export const FloatingSideNav: React.FC<FloatingSideNavProps> = ({ onOpenContact }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'works', label: 'Works', icon: Bookmark, href: '#works' },
    { id: 'appreciations', label: 'Appreciations', icon: Award, href: '#appreciations' },
    { id: 'about-me', label: 'About', icon: Smile, href: '#about-me' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'works', 'appreciations', 'about-me'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Vertical Left Nav Dock (Matching Portfolio Screenshot) */}
      <aside
        aria-label="Side Navigation"
        className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-start gap-3 select-none"
      >
        <div className="flex flex-col items-start gap-2 p-1.5 rounded-full bg-white/70 backdrop-blur-md border border-neutral-200/80 shadow-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const isHovered = hoveredItem === item.id;
            const showExpanded = isActive || isHovered;

            return (
              <a
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  showExpanded
                    ? 'bg-white text-neutral-900 shadow-sm border border-neutral-200/90 pr-4'
                    : 'text-neutral-500 hover:text-neutral-900 px-2.5 py-2'
                }`}
                title={item.label}
              >
                <Icon className={`w-4 h-4 transition-transform duration-200 ${showExpanded ? 'scale-110 text-neutral-900' : 'text-neutral-500'}`} />
                {showExpanded && (
                  <span className="text-xs font-bold whitespace-nowrap animate-in fade-in duration-150">
                    {item.label}
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </aside>

      {/* Top Right Floating Social/Connect Icons (Exact Portfolio Corner Icons) */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2">
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="p-2.5 rounded-xl bg-white/80 hover:bg-white text-neutral-600 hover:text-blue-600 border border-neutral-200/80 shadow-xs backdrop-blur-md transition-all hover:scale-105 active:scale-95"
        >
          <LinkedInIcon className="w-4 h-4" />
        </a>

        <button
          onClick={onOpenContact}
          aria-label="Open Contact Modal"
          className="p-2.5 rounded-xl bg-white/80 hover:bg-white text-neutral-600 hover:text-rose-600 border border-neutral-200/80 shadow-xs backdrop-blur-md transition-all hover:scale-105 active:scale-95"
        >
          <Mail className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};
