import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Droplet, 
  Fuel, 
  Volume2, 
  Filter, 
  Check, 
  Percent, 
  Sparkles,
  Award,
  Layers
} from 'lucide-react';
import { TYRE_PRODUCTS } from '../data/tyresData';
import { TyreProduct, TyreFinderState } from '../types';

interface ProductCatalogProps {
  onSelectTyre: (tyre: TyreProduct) => void;
  activeFilters: TyreFinderState | null;
  onClearFilters: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ 
  onSelectTyre, 
  activeFilters,
  onClearFilters
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Performance', 'All-Season', 'EV / Hybrid', 'SUV & 4x4', 'Winter'];

  const filteredTyres = TYRE_PRODUCTS.filter((tyre) => {
    // Category tab filter
    if (selectedCategory !== 'All' && tyre.category !== selectedCategory) {
      return false;
    }

    // Advanced search filter from TyreFinder if applied
    if (activeFilters) {
      if (activeFilters.vehicleType !== 'all' && activeFilters.vehicleType !== '') {
        if (activeFilters.vehicleType === 'SUV' && tyre.category !== 'SUV & 4x4') return false;
        if (activeFilters.vehicleType === 'Performance' && tyre.category !== 'Performance') return false;
        if (activeFilters.vehicleType === 'EV / Hybrid' && tyre.category !== 'EV / Hybrid') return false;
        if (activeFilters.vehicleType === 'Sedan' && !['All-Season', 'Performance'].includes(tyre.category)) return false;
      }

      if (activeFilters.rim !== 'all' && activeFilters.rim !== '') {
        if (!tyre.rimSizes.includes(activeFilters.rim)) return false;
      }

      if (activeFilters.season !== 'all' && activeFilters.season !== '') {
        if (activeFilters.season === 'Winter' && tyre.category !== 'Winter') return false;
        if (activeFilters.season === 'Performance' && tyre.category !== 'Performance') return false;
        if (activeFilters.season === 'All-Season' && tyre.category !== 'All-Season') return false;
      }
    }

    return true;
  });

  return (
    <section id="products" className="py-20 md:py-28 bg-[#0d0e12] relative overflow-hidden border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-[#E63946] text-xs font-bold uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>APEX Tyre Range</span>
            </div>
            <h2 className="font-racing text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              HIGH-PERFORMANCE <span className="text-[#E63946]">TYRE LINEUP</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-xl">
              Engineered with advanced dual-silica tread technology, hydro-evacuation channels, and road-hazard protection.
            </p>
          </div>

          {/* Active Filter notification */}
          {activeFilters && (activeFilters.vehicleType !== 'all' || activeFilters.rim !== 'all') && (
            <div className="flex items-center gap-2 bg-neutral-900 border border-red-500/40 px-3.5 py-2 rounded-lg text-xs text-neutral-300">
              <span>Filtered by Vehicle / Size fitment</span>
              <button
                onClick={onClearFilters}
                className="text-[#E63946] hover:text-white font-bold underline ml-1 cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#E63946] text-white shadow-lg shadow-red-950/40'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tyre Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTyres.map((tyre) => (
            <div
              key={tyre.id}
              className="group bg-gradient-to-b from-[#14151b] to-[#101115] border border-neutral-800 hover:border-red-500/60 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E63946] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header row: Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                    {tyre.category}
                  </span>
                  {tyre.badge && (
                    <span className="text-[10px] font-black tracking-wider uppercase bg-[#E63946] text-white px-2 py-0.5 rounded shadow">
                      {tyre.badge}
                    </span>
                  )}
                </div>

                {/* Model Title */}
                <h3 className="font-racing text-2xl font-bold text-white tracking-wide group-hover:text-[#E63946] transition-colors">
                  {tyre.name}
                </h3>
                
                <p className="text-xs font-semibold text-neutral-300 mt-1 line-clamp-1">
                  {tyre.tagline}
                </p>

                <p className="text-xs text-neutral-400 mt-2.5 line-clamp-2 leading-relaxed">
                  {tyre.description}
                </p>

                {/* Specs Pill Strip (EU Tyre Ratings) */}
                <div className="grid grid-cols-3 gap-2 my-5 py-3 px-3 rounded-xl bg-black/60 border border-neutral-800/80">
                  <div className="text-center border-r border-neutral-800">
                    <div className="flex items-center justify-center gap-1 text-[11px] text-neutral-400">
                      <Droplet className="w-3 h-3 text-cyan-400" /> Wet Grip
                    </div>
                    <div className="font-racing text-base font-bold text-white mt-0.5">
                      Class {tyre.wetGripRating}
                    </div>
                  </div>
                  <div className="text-center border-r border-neutral-800">
                    <div className="flex items-center justify-center gap-1 text-[11px] text-neutral-400">
                      <Fuel className="w-3 h-3 text-emerald-400" /> Fuel
                    </div>
                    <div className="font-racing text-base font-bold text-white mt-0.5">
                      Class {tyre.fuelRating}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-[11px] text-neutral-400">
                      <Volume2 className="w-3 h-3 text-amber-400" /> Noise
                    </div>
                    <div className="font-racing text-base font-bold text-white mt-0.5">
                      {tyre.noiseDb} dB
                    </div>
                  </div>
                </div>

                {/* Sizes Available */}
                <div className="flex items-center gap-1.5 flex-wrap text-xs text-neutral-400 mb-4">
                  <span className="text-[11px] uppercase font-bold text-neutral-500">Rim Sizes:</span>
                  {tyre.rimSizes.map((size) => (
                    <span key={size} className="bg-neutral-800/80 px-2 py-0.5 rounded text-[11px] font-mono text-neutral-200">
                      {size}&quot;
                    </span>
                  ))}
                </div>

                {/* Warranty */}
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Warranty: <strong className="text-neutral-200">{tyre.warrantyKm}</strong></span>
                  <span>·</span>
                  <span>UTQG: <strong className="text-neutral-200">{tyre.treadwearRating}</strong></span>
                </div>
              </div>

              {/* Price & Action Button */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-500 line-through">
                      ${tyre.originalPrice}
                    </span>
                    <span className="text-[10px] font-bold text-[#E63946] bg-red-950/80 px-1.5 rounded">
                      -20% OFF
                    </span>
                  </div>
                  <div className="font-racing text-2xl font-black text-white">
                    ${tyre.discountPrice}
                    <span className="text-xs font-sans text-neutral-400 font-normal"> /tyre</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectTyre(tyre)}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-[#E63946] hover:bg-[#ff2032] active:scale-95 text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-md shadow-red-950/40 cursor-pointer"
                >
                  <span>Select & Buy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredTyres.length === 0 && (
          <div className="text-center py-16 bg-neutral-900/40 border border-neutral-800 rounded-2xl">
            <p className="text-neutral-400 text-sm">
              No tyres matched your specific vehicle/rim criteria.
            </p>
            <button
              onClick={onClearFilters}
              className="mt-3 px-4 py-2 bg-[#E63946] text-white text-xs font-bold rounded uppercase cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
