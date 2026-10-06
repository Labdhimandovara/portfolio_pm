import React, { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const DevanshuStyleEasterEgg: React.FC = () => {
  const [bloomed, setBloomed] = useState(false);

  const handleBloom = () => {
    setBloomed(!bloomed);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  return (
    <section className="py-16 px-4 sm:px-8 bg-white border-t border-neutral-200/80">
      <div className="max-w-4xl mx-auto">
        <div 
          onClick={handleBloom}
          className="p-8 sm:p-10 rounded-[2.5rem] bg-[#FBFBF9] border border-neutral-200/90 shadow-2xs hover:shadow-md transition-all cursor-pointer text-center space-y-4 group"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>INTERACTIVE EASTER EGG</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
            Here is a flower for you ;)
          </h3>

          <div className="py-3 flex justify-center">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-inner border border-neutral-200 transition-transform duration-500 ${bloomed ? 'scale-125 bg-amber-100 rotate-12' : 'bg-white group-hover:scale-110'}`}>
              {bloomed ? '🪷' : '🌸'}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed">
            {bloomed 
              ? "The Lotus blooms unblemished in muddy waters, symbolizing resilience, focus, and clarity in the face of complex problems. Click again to reset!"
              : "Click the blossom above to trigger the bloom! Just like building AI products: turning raw complexity into something rare, elegant, and delightful."}
          </p>

          <span className="text-[11px] font-mono text-neutral-400 block pt-2">
            (Tap to bloom with confetti)
          </span>
        </div>
      </div>
    </section>
  );
};
