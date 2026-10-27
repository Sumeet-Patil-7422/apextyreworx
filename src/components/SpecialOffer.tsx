import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Shield, 
  Leaf, 
  Gauge, 
  Tag, 
  Timer, 
  Check, 
  Copy, 
  Maximize2,
  Sparkles,
  Percent
} from 'lucide-react';

interface SpecialOfferProps {
  onOpenShop: () => void;
  onOpenImageModal: (imageSrc: string, title: string) => void;
}

export const SpecialOffer: React.FC<SpecialOfferProps> = ({ 
  onOpenShop, 
  onOpenImageModal 
}) => {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 36,
    seconds: 14
  });

  // Simulated live ticking countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText('APEX20');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="special-offer" className="py-20 md:py-28 bg-[#0c0d10] border-y border-neutral-800/80 relative overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/8 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-neutral-800/30 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Container with carbon border & racing red flare */}
        <div className="rounded-3xl bg-gradient-to-br from-[#14151b] via-[#101116] to-[#15161d] border border-neutral-700/80 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Diagonal Corner Racing Slits */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#E63946]/10 transform rotate-45 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Highlight Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/40 text-red-300 font-extrabold text-xs uppercase tracking-wider shadow-inner">
                  <Percent className="w-3.5 h-3.5 text-[#E63946]" />
                  <span>SPECIAL OFFER — UP TO 20% OFF</span>
                </div>

                {/* Live Countdown */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 text-xs font-mono">
                  <Timer className="w-3.5 h-3.5 text-red-400 animate-spin" style={{ animationDuration: '6s' }} />
                  <span>
                    Ends in: <strong className="text-white">{String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m {String(timeLeft.seconds).padStart(2, '0')}s</strong>
                  </span>
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h2 className="font-racing text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase leading-[1.05]">
                  DRIVE MORE. <br />
                  <span className="text-[#E63946]">SAVE MORE.</span>
                </h2>
                <p className="text-lg sm:text-xl font-medium text-neutral-200">
                  Special Offer on APEX Tyres — Better Tyres. Safer Journeys.
                </p>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl">
                  Equip your vehicle with precision-engineered rubber crafted for peak performance, reduced fuel consumption, and extended tread durability on every highway and backroad.
                </p>
              </div>

              {/* 3 Value Pillars matching the Poster */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                
                {/* 1. Premium Quality */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-red-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-full border border-red-500/60 bg-red-950/40 text-[#E63946] flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-white tracking-wide">
                      PREMIUM QUALITY
                    </h4>
                    <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                      Rigid sidewalls & certified high-speed heat dispersal.
                    </p>
                  </div>
                </div>

                {/* 2. Fuel Efficiency */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-red-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-full border border-red-500/60 bg-red-950/40 text-[#E63946] flex items-center justify-center shrink-0">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-white tracking-wide">
                      FUEL EFFICIENCY
                    </h4>
                    <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                      Optimized rolling drag saves up to 5% per tank.
                    </p>
                  </div>
                </div>

                {/* 3. Longer Life */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-red-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-full border border-red-500/60 bg-red-950/40 text-[#E63946] flex items-center justify-center shrink-0">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-white tracking-wide">
                      LONGER LIFE
                    </h4>
                    <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                      Wear-resistant polymer matrix rated to 80,000 km.
                    </p>
                  </div>
                </div>

              </div>

              {/* Coupon Code Strip & Primary CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenShop}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-[#E63946] hover:bg-[#ff2235] active:scale-95 text-white font-extrabold uppercase tracking-wider rounded-lg text-sm sm:text-base shadow-xl shadow-red-950/50 transition-all red-glow cursor-pointer"
                >
                  <span>Shop Discounted Tyres</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Copy Coupon Box */}
                <div className="flex items-center justify-between sm:justify-start gap-2 px-4 py-2.5 bg-black/60 border border-dashed border-red-500/50 rounded-lg">
                  <div className="flex items-center gap-2 text-xs">
                    <Tag className="w-4 h-4 text-[#E63946]" />
                    <span className="text-neutral-400">Coupon:</span>
                    <strong className="text-white font-mono tracking-widest text-sm">APEX20</strong>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 hover:bg-neutral-800 rounded text-neutral-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy Promo Code"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  {copied && (
                    <span className="text-[11px] text-emerald-400 font-semibold ml-1">Copied!</span>
                  )}
                </div>
              </div>

              {/* Dual Hashtag Accent Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#E63946]">
                  #ChooseAPEX
                </span>
                <span className="text-neutral-600">·</span>
                <span className="text-xs font-black uppercase tracking-wider text-neutral-300">
                  #APEXTyreworx
                </span>
                <span className="text-neutral-600">·</span>
                <span className="text-xs text-neutral-400">
                  Free mounting with sets of 4 at any authorized fitment center
                </span>
              </div>

            </div>

            {/* Right Poster Showcase Column */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-2xl overflow-hidden border border-neutral-700/80 bg-[#15161b] shadow-2xl">
                
                {/* 20% OFF Overlay Ribbon */}
                <div className="absolute top-4 left-4 z-20 bg-[#E63946] text-white font-black text-xs uppercase px-3 py-1 rounded shadow-lg shadow-red-950/80">
                  LIMITED FLASH OFFER
                </div>

                {/* Inspect button */}
                <button
                  onClick={() => onOpenImageModal('/assets/aistudio/image_bcf8944d.png', 'DRIVE MORE. SAVE MORE. — Special Offer on APEX Tyres')}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/75 hover:bg-[#E63946] text-white backdrop-blur-md border border-white/20 transition-colors shadow-lg cursor-pointer"
                  title="Enlarge Special Offer Poster"
                  aria-label="Enlarge promotional image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src="/assets/aistudio/image_bcf8944d.png"
                    alt="APEX TYREWORX - Drive More. Save More. Special Offer Campaign"
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Caption Bar */}
                <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      Special Offer on APEX Tyres
                    </p>
                    <p className="text-[11px] text-neutral-400">
                      Up to 20% off selected UHP, Touring & EV models
                    </p>
                  </div>
                  <button
                    onClick={onOpenShop}
                    className="text-xs font-extrabold text-[#E63946] hover:text-[#ff3848] flex items-center gap-1 cursor-pointer"
                  >
                    Claim 20% <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
