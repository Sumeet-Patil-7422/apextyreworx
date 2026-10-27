import React, { useState } from 'react';
import { 
  Gauge, 
  Disc3, 
  Search, 
  RotateCw, 
  Maximize2, 
  AlertTriangle, 
  CheckCircle2, 
  Info,
  Car,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

interface TyreCareProps {
  onOpenImageModal: (imageSrc: string, title: string) => void;
  onOpenShop: () => void;
}

export const TyreCare: React.FC<TyreCareProps> = ({ 
  onOpenImageModal,
  onOpenShop 
}) => {
  // Pressure Calculator State
  const [calcVehicle, setCalcVehicle] = useState<'sedan' | 'suv' | 'ev' | 'truck'>('sedan');
  const [calcLoad, setCalcLoad] = useState<'normal' | 'heavy'>('normal');

  // Tread Depth Slider State (8.0mm factory new down to 1.6mm legal limit)
  const [treadDepth, setTreadDepth] = useState<number>(6.5);

  const getPressureSpecs = () => {
    switch (calcVehicle) {
      case 'sedan':
        return calcLoad === 'normal' 
          ? { front: 32, rear: 32, note: 'Ideal for standard daily commute with 1-2 passengers' }
          : { front: 35, rear: 36, note: 'Highway travel with 4 passengers and luggage' };
      case 'suv':
        return calcLoad === 'normal'
          ? { front: 35, rear: 35, note: 'Balanced for suburban comfort and rollover stability' }
          : { front: 38, rear: 41, note: 'Heavy cargo, roof box, or towing boat/trailer' };
      case 'ev':
        return calcLoad === 'normal'
          ? { front: 39, rear: 39, note: 'High cold PSI required for heavy lithium battery pack' }
          : { front: 42, rear: 42, note: 'Maximum range efficiency under full passenger load' };
      case 'truck':
        return calcLoad === 'normal'
          ? { front: 40, rear: 42, note: 'Light payload bed setting for smooth unladen ride' }
          : { front: 45, rear: 50, note: 'Heavy payload or commercial equipment hauling' };
    }
  };

  const pressure = getPressureSpecs();

  // Tread depth safety assessment
  const getTreadStatus = (depth: number) => {
    if (depth >= 5.5) {
      return {
        label: 'EXCELLENT · OPTIMAL GRIP',
        color: 'text-emerald-400',
        bg: 'bg-emerald-950/40 border-emerald-500/40',
        barColor: 'bg-emerald-500',
        brakingDelta: 'Standard Stopping Distance (100%)',
        advice: 'Tread depth is healthy. Excellent water evacuation and hydroplaning resistance.'
      };
    } else if (depth >= 3.0) {
      return {
        label: 'ADEQUATE · MONITOR WEAR',
        color: 'text-yellow-400',
        bg: 'bg-yellow-950/40 border-yellow-500/40',
        barColor: 'bg-yellow-500',
        brakingDelta: '+25% Longer Wet Stopping Distance',
        advice: 'Tread is wearing down. Drive with heightened caution in heavy rainfall.'
      };
    } else if (depth > 1.6) {
      return {
        label: 'WARNING · REPLACEMENT RECOMMENDED',
        color: 'text-amber-400',
        bg: 'bg-amber-950/40 border-amber-500/40',
        barColor: 'bg-amber-500',
        brakingDelta: '+55% Longer Wet Stopping Distance',
        advice: 'Approaching critical wear. High risk of aquaplaning on standing water.'
      };
    } else {
      return {
        label: 'CRITICAL HAZARD · ILLEGAL & UNSAFE',
        color: 'text-red-400',
        bg: 'bg-red-950/60 border-red-500/60',
        barColor: 'bg-red-500',
        brakingDelta: '+90% Dangerous Braking Distance',
        advice: 'Tread is below 1.6mm legal limit. Immediate tyre replacement is mandatory.'
      };
    }
  };

  const treadStatus = getTreadStatus(treadDepth);

  const tips = [
    {
      num: '1',
      title: 'CHECK PRESSURE',
      desc: 'Maintain recommended pressure (when tyres are cold).',
      detail: 'Under-inflated tyres increase fuel consumption, cause uneven shoulder wear, and risk sudden high-speed blowouts.',
      icon: Gauge
    },
    {
      num: '2',
      title: 'INSPECT TREAD',
      desc: 'Ensure proper tread depth for better grip.',
      detail: 'Use a depth gauge or the built-in wear bar indicators to ensure minimum 3mm for wet safety before hitting the 1.6mm legal limit.',
      icon: Disc3
    },
    {
      num: '3',
      title: 'LOOK FOR DAMAGE',
      desc: 'Check for cuts, cracks, or uneven wear.',
      detail: 'Regularly inspect inner and outer sidewalls for bulges, embedded glass or nails, and dry rot after exposure to sun or road salt.',
      icon: Search
    },
    {
      num: '4',
      title: 'ROTATE REGULARLY',
      desc: 'Promotes even wear and extends tyre life.',
      detail: 'Rotate tyres front-to-back every 8,000 to 10,000 km to equalize wear patterns between drive axles and steering wheels.',
      icon: RotateCw
    }
  ];

  return (
    <section id="tyre-care" className="py-20 md:py-28 bg-[#0b0c0f] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[550px] h-[550px] bg-red-600/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -top-10 right-10 w-[400px] h-[400px] bg-neutral-800/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-[#E63946] text-xs font-bold uppercase tracking-widest">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Driver Safety Standard</span>
          </div>

          <h2 className="font-racing text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            SIMPLE TYRE CARE <span className="text-[#E63946]">TIPS FOR A SAFER DRIVE.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-medium">
            A little care goes a long way. Keep your tyres in top condition with these 4 simple tips:
          </p>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
            Proper maintenance not only safeguards your family on wet and dry roads, but also extends tyre longevity by up to 25,000 additional kilometers.
          </p>
        </div>

        {/* 2-Column Split: 4 Tips Grid & Tyre Care Poster Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Column: 4 Tip Cards matching poster badges 1, 2, 3, 4 */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tips.map((tip) => {
                const IconComponent = tip.icon;
                return (
                  <div
                    key={tip.num}
                    className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-red-500/40 transition-all duration-200 group relative overflow-hidden"
                  >
                    {/* Top row with red numbered indicator and icon */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full border-2 border-[#E63946] bg-red-950/40 text-[#E63946] flex items-center justify-center group-hover:bg-[#E63946] group-hover:text-white transition-all shadow-md shadow-red-950/50">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        {/* Number badge on the shoulder matching the poster */}
                        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#E63946] text-white text-[10px] font-black flex items-center justify-center shadow">
                          {tip.num}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-neutral-500 font-bold uppercase">
                        Tip 0{tip.num}
                      </span>
                    </div>

                    <h3 className="font-racing text-base font-bold text-white uppercase tracking-wider mb-1">
                      {tip.title}
                    </h3>
                    
                    <p className="text-xs font-semibold text-neutral-200 leading-snug mb-2">
                      {tip.desc}
                    </p>

                    <p className="text-[11px] text-neutral-400 leading-relaxed border-t border-neutral-800/70 pt-2">
                      {tip.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Campaign Hashtag strip */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-950 border border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="px-4 py-1.5 bg-[#E63946] text-white font-black text-xs uppercase transform -skew-x-12">
                  <span className="transform skew-x-12">#TyreCareMatters</span>
                </div>
                <span className="text-xs text-neutral-300">
                  Inspect your pressure at least once a month before long road trips.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Poster Visual Asset with Inspection */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-2xl overflow-hidden border border-neutral-800 bg-[#121316] shadow-2xl">
              
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md border border-neutral-700 px-3 py-1 rounded text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-[#E63946]" />
                Tyre Safety Protocol
              </div>

              {/* Lightbox button */}
              <button
                onClick={() => onOpenImageModal('/assets/aistudio/image_3af1d476.png', 'SIMPLE TYRE CARE TIPS FOR A SAFER DRIVE — APEX TYREWORX')}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/75 hover:bg-[#E63946] text-white backdrop-blur-md border border-white/20 transition-colors shadow-lg cursor-pointer"
                title="View High-Resolution Care Tips Poster"
                aria-label="Enlarge tyre care image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/aistudio/image_3af1d476.png"
                  alt="APEX TYREWORX - Simple Tyre Care Tips for a Safer Drive Campaign"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Footer */}
              <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wide">
                    Professional Pressure Check
                  </p>
                  <p className="text-[11px] text-neutral-400">
                    Always measure cold tyre inflation with a certified gauge
                  </p>
                </div>
                <button
                  onClick={() => onOpenImageModal('/assets/aistudio/image_3af1d476.png', 'SIMPLE TYRE CARE TIPS — APEX TYREWORX')}
                  className="text-xs text-[#E63946] hover:text-[#ff3848] font-bold flex items-center gap-1 underline underline-offset-4 cursor-pointer"
                >
                  Inspect <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* 2 Interactive Widgets: Tyre Pressure Calculator & Tread Depth Meter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Widget 1: Live Recommended Tyre Pressure Calculator */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded bg-red-950/50 border border-red-500/30 text-[#E63946]">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-racing text-lg font-bold text-white uppercase">
                    Interactive Pressure Guide
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Get cold PSI recommendations based on vehicle and cargo
                  </p>
                </div>
              </div>
            </div>

            {/* Vehicle selector */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-bold mb-2">
                  Select Vehicle Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'sedan', label: 'Sedan / Hatch' },
                    { id: 'suv', label: 'SUV / Crossover' },
                    { id: 'ev', label: 'Electric EV' },
                    { id: 'truck', label: '4x4 / Truck' }
                  ].map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setCalcVehicle(v.id as any)}
                      className={`py-2 px-3 rounded text-xs font-semibold transition-all cursor-pointer ${
                        calcVehicle === v.id
                          ? 'bg-[#E63946] text-white shadow-md'
                          : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Load condition */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-bold mb-2">
                  Load & Passenger Status
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setCalcLoad('normal')}
                    className={`py-2 px-3 rounded text-xs font-semibold transition-all cursor-pointer ${
                      calcLoad === 'normal'
                        ? 'bg-neutral-200 text-neutral-950 font-bold shadow'
                        : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                    }`}
                  >
                    Normal Daily (1-2 Passengers)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcLoad('heavy')}
                    className={`py-2 px-3 rounded text-xs font-semibold transition-all cursor-pointer ${
                      calcLoad === 'heavy'
                        ? 'bg-neutral-200 text-neutral-950 font-bold shadow'
                        : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                    }`}
                  >
                    Full Load / Highway Luggage
                  </button>
                </div>
              </div>

              {/* Calculated PSI Display */}
              <div className="p-4 rounded-xl bg-black/60 border border-neutral-700 grid grid-cols-2 gap-4 text-center">
                <div className="border-r border-neutral-800 pr-2">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold">
                    Front Tyres (Cold)
                  </span>
                  <div className="font-racing text-3xl font-extrabold text-[#E63946] mt-0.5">
                    {pressure.front} <span className="text-sm font-sans font-medium text-neutral-400">PSI</span>
                  </div>
                  <span className="text-[10px] text-neutral-500">
                    {(pressure.front * 0.0689476).toFixed(1)} Bar
                  </span>
                </div>
                <div className="pl-2">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold">
                    Rear Tyres (Cold)
                  </span>
                  <div className="font-racing text-3xl font-extrabold text-[#E63946] mt-0.5">
                    {pressure.rear} <span className="text-sm font-sans font-medium text-neutral-400">PSI</span>
                  </div>
                  <span className="text-[10px] text-neutral-500">
                    {(pressure.rear * 0.0689476).toFixed(1)} Bar
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs text-neutral-400 bg-neutral-950/60 p-3 rounded-lg border border-neutral-800">
                <Info className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" />
                <span>{pressure.note}. Always check tyres when cool to the touch.</span>
              </div>
            </div>
          </div>

          {/* Widget 2: Interactive Tread Depth Safety Visualizer */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded bg-red-950/50 border border-red-500/30 text-[#E63946]">
                  <Disc3 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-racing text-lg font-bold text-white uppercase">
                    Tread Depth Safety Meter
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Drag the slider to test wet braking stopping distance
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Slider Control */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-2">
                  <span className="text-neutral-400 uppercase">Simulated Tread Depth:</span>
                  <span className="text-xl font-racing font-extrabold text-white">
                    {treadDepth.toFixed(1)} <span className="text-xs text-neutral-400 font-sans font-normal">mm</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="8.0"
                  step="0.1"
                  value={treadDepth}
                  onChange={(e) => setTreadDepth(parseFloat(e.target.value))}
                  className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#E63946]"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1 font-mono">
                  <span>1.0mm (Danger)</span>
                  <span>1.6mm (Legal Limit)</span>
                  <span>3.0mm (Wet Safety)</span>
                  <span>8.0mm (Brand New)</span>
                </div>
              </div>

              {/* Status Banner */}
              <div className={`p-4 rounded-xl border ${treadStatus.bg} transition-all`}>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className={`text-xs font-black uppercase tracking-wider ${treadStatus.color} flex items-center gap-1.5`}>
                    {treadDepth <= 1.6 ? <AlertTriangle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                    {treadStatus.label}
                  </span>
                  <span className="text-xs font-mono font-bold text-white">
                    {treadStatus.brakingDelta}
                  </span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {treadStatus.advice}
                </p>
              </div>

              {/* Need tyres prompt if low */}
              {treadDepth <= 3.0 && (
                <div className="p-3.5 bg-red-950/40 border border-red-500/40 rounded-xl flex items-center justify-between gap-3 animate-in fade-in duration-200">
                  <div className="text-xs text-neutral-200">
                    <strong className="text-white">Tyres need replacing?</strong> Get 20% off on all APEX safety models today.
                  </div>
                  <button
                    onClick={onOpenShop}
                    className="px-3 py-1.5 bg-[#E63946] hover:bg-[#ff2537] text-white text-xs font-bold uppercase rounded whitespace-nowrap cursor-pointer"
                  >
                    Shop Tyres
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
