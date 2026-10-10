import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PortfolioEasterEgg: React.FC = () => {
  const [bloomed, setBloomed] = useState(false);

  const handleBloom = () => {
    setBloomed(!bloomed);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.85 }
    });
  };

  return (
    <section className="py-20 px-4 sm:px-8 bg-white border-t border-neutral-200/80">
      <div className="max-w-3xl mx-auto">
        <div 
          onClick={handleBloom}
          className="relative p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#FFF5F7] via-[#FFFDF0] via-[#F0FDF4] to-[#F0F9FF] border border-rose-200/60 shadow-xs hover:shadow-[0_12px_40px_-10px_rgba(244,114,182,0.2),0_12px_40px_-10px_rgba(56,189,248,0.2)] transition-all cursor-pointer text-center space-y-4 group overflow-hidden"
        >
          {/* Subtle Watercolor Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F472B6] via-[#FBBF24] via-[#34D399] to-[#38BDF8]" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-neutral-200/90 text-neutral-800 text-xs font-mono font-bold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 via-amber-400 to-sky-400" />
            <span>INTERACTIVE EASTER EGG</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Here is a flower for you ;)
          </h3>

          <div className="py-4 flex justify-center">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center text-5xl shadow-inner border border-neutral-200/80 transition-all duration-500 ${bloomed ? 'scale-125 bg-gradient-to-tr from-pink-100 via-amber-100 to-sky-100 rotate-12 shadow-pink-200/50' : 'bg-white group-hover:scale-110'}`}>
              {bloomed ? '🪷' : '🌸'}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-700 max-w-xl mx-auto leading-relaxed">
            Named after Lord Brahma, the creator of the universe. The flower blooms only once a year for a single night and completely wilts before dawn, making witnessing the full bloom an auspicious and rare event. Just like bringing thoughtful AI products to life: finding harmony in rare, meaningful details.
          </p>

          <span className="text-[11px] font-mono text-neutral-400 block pt-1">
            {bloomed ? '✓ Bloomed! Tap to reset' : '(Tap the blossom to witness full bloom)'}
          </span>
        </div>
      </div>
    </section>
  );
};
