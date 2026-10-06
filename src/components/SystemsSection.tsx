import React from 'react';
import { motion } from 'framer-motion';
import { Car, Activity, Zap, CheckCircle, Radio } from 'lucide-react';

export const SystemsSection: React.FC = () => {
  return (
    <article className="relative bg-white rounded-3xl sm:rounded-[2.5rem] border border-neutral-200/90 shadow-xl overflow-hidden p-6 sm:p-10 mb-12">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-full bg-emerald-800 text-white text-xs font-mono font-bold tracking-wide">
            SIGNAL PROCESSING & EMBEDDED ML
          </span>
          <span className="text-xs font-mono font-medium text-neutral-400">
            Automotive & Acoustic Research
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-semibold">
            98% Collision Accuracy • 15,000+ Audio Samples
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="mt-6 space-y-4">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
          5G ADAS & Acoustic Deep Learning
        </h3>
        <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
          Safety-critical systems engineering combining real-time 5G Internet of Vehicles (IoV) trajectory collision assessment with deep neural network speech emotion classification.
        </p>
      </div>

      {/* Two Column Side-by-Side Deep Dives */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Project 1: 5G Based ADAS */}
        <div className="p-6 rounded-3xl bg-neutral-50/80 border border-neutral-200/80 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-white shadow-2xs border border-neutral-200">
                <Car className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                98% ACCURACY
              </span>
            </div>
            <h4 className="text-lg font-bold text-neutral-900">5G ADAS for Automobiles</h4>
            <p className="text-xs font-medium text-neutral-500 mt-0.5">Internet of Vehicles & Trajectory Prediction</p>
            <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
              Integrated a 5G-based Internet of Vehicles (IoV) stack for low-latency vehicle tracking and trajectory forecasting. Designed an AI-driven collision risk model achieving 98% accuracy in accident prediction and response.
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <span>5G Low Latency V2X</span>
            <span>Trajectory Forecasting</span>
          </div>
        </div>

        {/* Project 2: Speech Emotion Recognition */}
        <div className="p-6 rounded-3xl bg-neutral-50/80 border border-neutral-200/80 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-white shadow-2xs border border-neutral-200">
                <Activity className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded-full">
                15,000+ SAMPLES
              </span>
            </div>
            <h4 className="text-lg font-bold text-neutral-900">Speech Emotion Recognition</h4>
            <p className="text-xs font-medium text-neutral-500 mt-0.5">LSTM Deep Learning & MFCC Acoustic Pipeline</p>
            <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
              Trained an LSTM network across RAVDESS and CREMA-D acoustic corpora with 15,000+ speech clips. Designed a robust feature pipeline extracting Mel-Frequency Cepstral Coefficients (MFCC) and spectral contrast for 5-class vocal emotion classification.
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <span>RAVDESS & CREMA-D</span>
            <span>5-Class Emotion Model</span>
          </div>
        </div>

      </div>

    </article>
  );
};
