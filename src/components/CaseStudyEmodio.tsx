import React from 'react';
import { motion } from 'framer-motion';
import { Mic2, Activity, Award, HeartPulse, Brain, Waves, CheckCircle2 } from 'lucide-react';
import emodioUiImg from '../assets/portfolio/emodio-DusSlQrq.png';
import speechEmotionImg from '../assets/portfolio/speech_emotion-O0rZTezR.png';

export const CaseStudyEmodio: React.FC = () => {
  return (
    <article className="relative bg-white rounded-3xl sm:rounded-[2.5rem] border border-neutral-200/90 shadow-xl overflow-hidden p-6 sm:p-10 mb-12">
      
      {/* Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-full bg-blue-700 text-white text-xs font-mono font-bold tracking-wide">
            LASELL UNIVERSITY USA • LASERHACKS 2025
          </span>
          <span className="text-xs font-mono font-medium text-neutral-400">
            Acoustic Biomarkers & Teletherapy
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 font-bold">
            Day-2 Global Finalist (Team Emodio)
          </span>
        </div>
      </div>

      {/* Main Title */}
      <div className="mt-6 space-y-4">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
          Emodio — Acoustic AI & Vocal Biomarkers
        </h3>
        <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
          A teletherapy companion that analyzes voice pitch, tone, and speech rhythm to help therapists track how a patient's mood evolves between sessions.
        </p>
      </div>

      {/* Real Visual Evidence: Emodio Application Interface */}
      <div className="mt-8 rounded-3xl border border-neutral-200 overflow-hidden bg-neutral-900 shadow-lg">
        <div className="px-6 py-3 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-neutral-300 font-mono">
            <HeartPulse className="w-4 h-4 text-rose-400" />
            <span className="font-bold">Emodio Patient Teletherapy & Vocal Biomarker Dashboard</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono text-[10px]">
            Real Product Interface
          </span>
        </div>

        <div className="relative aspect-[16/9] max-h-[460px] w-full overflow-hidden bg-neutral-950 flex items-center justify-center">
          <img
            src={emodioUiImg}
            alt="Emodio Application UI & Patient Emotional Dashboard"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* ML Pipeline & Spectrogram Feature Extraction */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Feature Extraction Pipeline */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50/80 border border-neutral-200/90 flex flex-col justify-between space-y-4 text-left">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                01 • ACOUSTIC ANALYSIS
              </span>
              <Waves className="w-4 h-4 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold text-neutral-900">Voice Feature Extraction</h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Extracts 40 Mel-Frequency Cepstral Coefficients (MFCCs), pitch variance, and speaking pace from audio clips to identify emotional stress regardless of the words spoken.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-neutral-200 text-xs font-mono space-y-1 text-neutral-700">
            <div className="flex justify-between"><span>Training Dataset:</span><span className="font-bold">RAVDESS + CREMA-D</span></div>
            <div className="flex justify-between"><span>Total Samples:</span><span className="font-bold text-purple-600">15,000+ Clips</span></div>
            <div className="flex justify-between"><span>Classes:</span><span className="font-bold">5 Emotional States</span></div>
          </div>
        </div>

        {/* Card 2: Deep Learning Model Architecture */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50/80 border border-neutral-200/90 flex flex-col justify-between space-y-4 text-left">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                02 • TEMPORAL MODEL
              </span>
              <Brain className="w-4 h-4 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-neutral-900">Emotion Recognition Model</h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Trained a Bidirectional LSTM neural network on over 15,000 speech samples to recognize 5 core emotional states across natural conversational pauses with under 120ms latency.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-neutral-200 text-xs font-mono space-y-1 text-neutral-700">
            <div className="flex justify-between"><span>Architecture:</span><span className="font-bold">BiLSTM + Dense Attention</span></div>
            <div className="flex justify-between"><span>Inference Latency:</span><span className="font-bold text-blue-600">&lt; 120ms</span></div>
            <div className="flex justify-between"><span>Hackathon Result:</span><span className="font-bold text-blue-600">Day-2 Global Finalist</span></div>
          </div>
        </div>

      </div>

      {/* Real Spectrogram & Emotion Waveform Analysis */}
      <div className="mt-8 p-6 rounded-3xl bg-[#FBFBF9] border border-neutral-200 text-left">
        <h4 className="text-sm font-bold text-neutral-900 mb-3 flex items-center gap-2">
          <Activity className="w-4 h-4 text-blue-600" />
          <span>Speech Spectrogram & Audio Feature Visualization</span>
        </h4>
        <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white p-2">
          <img
            src={speechEmotionImg}
            alt="Speech Emotion Recognition Spectrogram"
            className="w-full h-auto max-h-[320px] object-contain mx-auto"
          />
        </div>
      </div>

    </article>
  );
};
