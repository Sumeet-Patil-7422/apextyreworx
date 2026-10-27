import React, { useState } from 'react';
import { 
  Waves, 
  ShieldCheck, 
  Layers, 
  CloudRain, 
  Maximize2, 
  Cpu, 
  Zap, 
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  Flame
} from 'lucide-react';

interface TechnologyProps {
  onOpenImageModal: (imageSrc: string, title: string) => void;
  onOpenShop: () => void;
}

export const Technology: React.FC<TechnologyProps> = ({ 
  onOpenImageModal,
  onOpenShop 
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const techFeatures = [
    {
      id: 1,
      title: 'OPTIMAL TRACTION',
      subtitle: 'Unique tread patterns channel water and improve grip on wet and dry roads.',
      icon: Waves,
      tag: 'Hydro-Evacuation Channels',
      metric: '-4.2m',
      metricLabel: 'Shorter Wet Braking Distance',
      detail: 'Precision-grooved lateral channels force up to 32 liters of water per second away from the tire footprint, dramatically preventing hydroplaning in torrential rain.'
    },
    {
      id: 2,
      title: 'ENHANCED STABILITY',
      subtitle: 'Designed for better handling and cornering performance.',
      icon: ShieldCheck,
      tag: 'Reinforced Shoulder Ribs',
      metric: '+0.18G',
      metricLabel: 'Higher Lateral Cornering Grip',
      detail: 'Interlocking asymmetric outer shoulder blocks prevent tread distortion during aggressive high-speed turns, providing immediate steering feedback and confidence.'
    },
    {
      id: 3,
      title: 'WEAR RESISTANT',
      subtitle: 'Special compound for longer life and durability.',
      icon: Layers,
      tag: 'Nano-Silica Polymer Matrix',
      metric: '+25,000 km',
      metricLabel: 'Extended Tread Mileage',
      detail: 'Synthesized with micro-engineered carbon black and functionalized silica that resists abrasive road friction and dissipates excessive braking heat.'
    },
    {
      id: 4,
      title: 'ALL-WEATHER READY',
      subtitle: 'Built to perform in every condition.',
      icon: CloudRain,
      tag: 'Climate-Adaptive Thermoflex',
      metric: '-30°C to +50°C',
      metricLabel: 'Operating Temperature Window',
      detail: 'Engineered compound remains flexible in freezing temperatures without softening in blistering summer heat, ensuring reliable traction across all 4 seasons.'
    }
  ];

  return (
    <section id="technology" className="py-20 md:py-28 bg-[#090a0d] relative overflow-hidden">
      {/* Background tread dots and red glow */}
      <div className="absolute inset-0 bg-tread-dots opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-[#E63946] text-xs font-bold uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>R&D Engineering Center</span>
          </div>
          
          <h2 className="font-racing text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            GRIP MEETS <span className="text-[#E63946]">TECHNOLOGY</span>
          </h2>
          
          <p className="text-base sm:text-lg text-neutral-300 font-medium">
            Advanced Tread Design for Maximum Control
          </p>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Every millimeter of an APEX tread pattern is computed using dynamic finite-element fluid simulation to achieve optimal grip balance, braking responsiveness, and longevity.
          </p>
        </div>

        {/* 2-Column Split: Interactive Tech Breakdown & Poster Creative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: 4 Features with Interactive Tabs */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="grid grid-cols-1 gap-3.5">
              {techFeatures.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = activeTab === index;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(index)}
                    className={`p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-neutral-900/95 border-red-500/80 shadow-lg shadow-red-950/30 red-glow-sm'
                        : 'bg-neutral-900/40 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/70'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Red Circular Badge matching poster */}
                      <div
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                          isActive
                            ? 'border-[#E63946] bg-[#E63946] text-white shadow-md shadow-red-900/50'
                            : 'border-red-500/60 bg-red-950/30 text-[#E63946]'
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-racing text-base sm:text-lg font-bold tracking-wide text-white uppercase">
                            {item.title}
                          </h3>
                          <span className="text-[11px] font-mono font-bold text-neutral-400 bg-neutral-800/80 px-2 py-0.5 rounded">
                            0{item.id}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-neutral-300 mt-1 font-medium">
                          {item.subtitle}
                        </p>

                        {/* Expanded details when active */}
                        {isActive && (
                          <div className="mt-3 pt-3 border-t border-neutral-800 space-y-2 animate-in fade-in duration-200">
                            <p className="text-xs text-neutral-400 leading-relaxed">
                              {item.detail}
                            </p>
                            
                            <div className="flex items-center gap-4 pt-1">
                              <div>
                                <span className="text-lg font-black font-racing text-[#E63946] tracking-tight">
                                  {item.metric}
                                </span>
                                <span className="text-[11px] text-neutral-400 ml-1.5">
                                  {item.metricLabel}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Innovation Pill & CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-neutral-950/80 p-4 rounded-xl border border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 bg-[#E63946] text-white font-black text-xs uppercase transform -skew-x-12">
                  <span className="transform skew-x-12">#GripTheRoad</span>
                </div>
                <span className="text-xs text-neutral-400">
                  Precision tread siping engineered for wet and dry road surfaces.
                </span>
              </div>
              <button
                onClick={onOpenShop}
                className="text-xs font-bold text-white bg-neutral-800 hover:bg-[#E63946] px-4 py-2 rounded transition-colors whitespace-nowrap cursor-pointer"
              >
                Find My Size
              </button>
            </div>

          </div>

          {/* Right: Grip Meets Technology Poster */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-2xl overflow-hidden border border-neutral-800 bg-[#111216] shadow-2xl">
              
              {/* Floating tech badge */}
              <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md border border-red-500/40 px-3 py-1 rounded text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E63946] animate-pulse" />
                Active Sipe Micro-Geometry
              </div>

              {/* Inspect Button */}
              <button
                onClick={() => onOpenImageModal('/assets/aistudio/image_3e1af832.png', 'GRIP MEETS TECHNOLOGY — APEX TYREWORX Tread Design')}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/75 hover:bg-[#E63946] text-white backdrop-blur-md border border-white/20 transition-colors shadow-lg cursor-pointer"
                title="View High-Resolution Tread Poster"
                aria-label="Enlarge technology image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Main Artwork */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/aistudio/image_3e1af832.png"
                  alt="APEX TYREWORX - Grip Meets Technology Tread Design Visual"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Spec Footer */}
              <div className="p-4 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wide">
                    Laser-Cut Silica Grooves
                  </p>
                  <p className="text-[11px] text-neutral-400">
                    High-volume evacuation ribs with acoustic noise breakers
                  </p>
                </div>
                <button
                  onClick={() => onOpenImageModal('/assets/aistudio/image_3e1af832.png', 'GRIP MEETS TECHNOLOGY — APEX TYREWORX')}
                  className="text-xs text-[#E63946] hover:text-[#ff3848] font-bold flex items-center gap-1 underline underline-offset-4 cursor-pointer"
                >
                  View Details <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
