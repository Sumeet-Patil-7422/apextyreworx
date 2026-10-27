import React from 'react';
import { 
  ShieldCheck, 
  Gauge, 
  Leaf, 
  RotateCw, 
  ArrowRight, 
  Sparkles, 
  Maximize2,
  ChevronRight,
  Disc3
} from 'lucide-react';
import { TyreFinder } from './TyreFinder';
import { TyreFinderState } from '../types';

interface HeroProps {
  onOpenShop: () => void;
  onOpenImageModal: (imageSrc: string, title: string) => void;
  onSearchTyres: (filters: TyreFinderState) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenShop, 
  onOpenImageModal,
  onSearchTyres
}) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-carbon">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-red-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy, Highlights & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Brand Kicker / Slogan Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/60 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#E63946] animate-pulse" />
              <span className="text-xs uppercase font-bold tracking-widest text-neutral-300">
                APEX TYREWORX · Engineered for Every Road
              </span>
            </div>

            {/* Dominant Headline */}
            <div className="space-y-1">
              <h1 className="font-racing text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] uppercase">
                MORE THAN <br />
                <span className="text-[#E63946] relative inline-block">
                  JUST TYRES.
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E63946] to-transparent opacity-80" />
                </span>
              </h1>
            </div>

            {/* Subheadline with text-balance */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl">
              At <strong className="text-white font-semibold">APEX TYREWORX</strong>, we build tyres that deliver superior grip, durability, and performance — because every journey matters.
            </p>

            {/* 4 Circular Feature Highlights matching the Poster */}
            <div className="pt-2 pb-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3">
                
                {/* 1. Superior Grip */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left group p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/80 hover:border-red-500/40 transition-all">
                  <div className="w-12 h-12 rounded-full border-2 border-[#E63946] flex items-center justify-center bg-red-950/30 text-[#E63946] mb-2.5 group-hover:scale-105 group-hover:bg-[#E63946] group-hover:text-white transition-all shadow-md shadow-red-950/40">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    SUPERIOR GRIP
                  </span>
                  <span className="text-[11px] text-neutral-400 mt-0.5">
                    Dual-silica bite
                  </span>
                </div>

                {/* 2. Longer Life */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left group p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/80 hover:border-red-500/40 transition-all">
                  <div className="w-12 h-12 rounded-full border-2 border-[#E63946] flex items-center justify-center bg-red-950/30 text-[#E63946] mb-2.5 group-hover:scale-105 group-hover:bg-[#E63946] group-hover:text-white transition-all shadow-md shadow-red-950/40">
                    <Disc3 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    LONGER LIFE
                  </span>
                  <span className="text-[11px] text-neutral-400 mt-0.5">
                    Up to 80,000 km
                  </span>
                </div>

                {/* 3. High Performance */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left group p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/80 hover:border-red-500/40 transition-all">
                  <div className="w-12 h-12 rounded-full border-2 border-[#E63946] flex items-center justify-center bg-red-950/30 text-[#E63946] mb-2.5 group-hover:scale-105 group-hover:bg-[#E63946] group-hover:text-white transition-all shadow-md shadow-red-950/40">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    HIGH PERFORMANCE
                  </span>
                  <span className="text-[11px] text-neutral-400 mt-0.5">
                    Cornering rigidity
                  </span>
                </div>

                {/* 4. A Greener Tomorrow */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left group p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/80 hover:border-red-500/40 transition-all">
                  <div className="w-12 h-12 rounded-full border-2 border-[#E63946] flex items-center justify-center bg-red-950/30 text-[#E63946] mb-2.5 group-hover:scale-105 group-hover:bg-[#E63946] group-hover:text-white transition-all shadow-md shadow-red-950/40">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    GREENER TOMORROW
                  </span>
                  <span className="text-[11px] text-neutral-400 mt-0.5">
                    Low roll drag
                  </span>
                </div>

              </div>
            </div>

            {/* Action CTAs & Campaign Hashtag */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenShop}
                className="flex items-center justify-center gap-3 px-7 py-3.5 bg-[#E63946] hover:bg-[#ff2033] active:scale-95 text-white font-extrabold uppercase tracking-wider rounded text-sm sm:text-base shadow-xl shadow-red-950/50 border border-red-500/40 transition-all red-glow cursor-pointer"
              >
                <span>Shop Offers (Up to 20% OFF)</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#technology"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white font-bold uppercase tracking-wider rounded text-sm sm:text-base border border-neutral-700/80 transition-all"
              >
                <span>Explore Technology</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </a>
            </div>

            {/* Official Hashtag Accent Banner */}
            <div className="flex items-center gap-3 pt-2">
              <div className="inline-flex items-center px-4 py-1.5 bg-[#E63946] text-white font-black tracking-wider text-xs uppercase transform -skew-x-12 shadow-md">
                <span className="transform skew-x-12">#ChooseAPEX</span>
              </div>
              <span className="text-xs text-neutral-400">
                Trusted by over 450,000 drivers across 38 countries
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset with Interactive Lightbox Button */}
          <div className="lg:col-span-5 relative">
            <div className="relative group rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-[#121316]">
              {/* Corner Badge */}
              <div className="absolute top-3 left-3 z-20 bg-black/75 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E63946]" />
                Official Campaign Visual
              </div>

              {/* Expand Lightbox Button */}
              <button
                onClick={() => onOpenImageModal('/assets/aistudio/image_afa2a0b1.png', 'MORE THAN JUST TYRES — APEX TYREWORX')}
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/70 hover:bg-[#E63946] text-white backdrop-blur-md border border-white/10 transition-colors shadow-lg cursor-pointer"
                title="View High-Resolution Poster"
                aria-label="Enlarge campaign image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Main Poster Image */}
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/aistudio/image_afa2a0b1.png"
                  alt="APEX TYREWORX - More Than Just Tyres Campaign Creative"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Image Footer Strip */}
              <div className="p-4 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wide">
                    APEX High Performance Series
                  </p>
                  <p className="text-[11px] text-neutral-400">
                    Precision asphalt road testing · All-weather dynamic tread
                  </p>
                </div>
                <button
                  onClick={() => onOpenImageModal('/assets/aistudio/image_afa2a0b1.png', 'MORE THAN JUST TYRES — APEX TYREWORX')}
                  className="text-xs text-[#E63946] hover:text-[#ff3848] font-bold flex items-center gap-1 underline underline-offset-4 cursor-pointer"
                >
                  Inspect <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Precision Tyre Fitment Calculator Row */}
        <div className="mt-12 lg:mt-16">
          <TyreFinder onSearch={onSearchTyres} />
        </div>

      </div>
    </section>
  );
};
