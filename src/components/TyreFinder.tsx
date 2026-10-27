import React, { useState } from 'react';
import { Search, Car, Zap, Shield, Compass, RotateCcw } from 'lucide-react';
import { TyreFinderState } from '../types';

interface TyreFinderProps {
  onSearch: (filters: TyreFinderState) => void;
}

export const TyreFinder: React.FC<TyreFinderProps> = ({ onSearch }) => {
  const [vehicleType, setVehicleType] = useState('all');
  const [width, setWidth] = useState('225');
  const [profile, setProfile] = useState('45');
  const [rim, setRim] = useState('18');
  const [season, setSeason] = useState('all');

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      vehicleType,
      width,
      profile,
      rim,
      season
    });
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setVehicleType('all');
    setWidth('225');
    setProfile('45');
    setRim('18');
    setSeason('all');
    onSearch({
      vehicleType: 'all',
      width: 'all',
      profile: 'all',
      rim: 'all',
      season: 'all'
    });
  };

  return (
    <div className="w-full bg-[#121318]/90 backdrop-blur-md border border-neutral-800 rounded-xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
      {/* Top red racing stripe accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E63946] to-transparent opacity-80" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-3 border-b border-neutral-800/80">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-[#E63946] uppercase flex items-center gap-1.5">
            <Car className="w-3.5 h-3.5" /> PRECISION FITMENT CALCULATOR
          </span>
          <h3 className="font-racing text-lg sm:text-xl font-bold text-white tracking-wide mt-0.5">
            FIND THE EXACT FIT FOR YOUR VEHICLE
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <span>OEM Spec Verified</span>
          <span>·</span>
          <span>Guaranteed Fitment</span>
          <button 
            type="button" 
            onClick={handleReset} 
            className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 ml-2 underline underline-offset-2 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        </div>
      </div>

      <form onSubmit={handleApply} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* Vehicle Category */}
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
            Vehicle Type
          </label>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full bg-[#1a1b22] border border-neutral-700/80 text-white rounded px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#E63946] transition-colors cursor-pointer"
          >
            <option value="all">All Vehicles</option>
            <option value="Sedan">Sedan / Hatchback</option>
            <option value="SUV">SUV / Crossover</option>
            <option value="Performance">Sports / Performance</option>
            <option value="EV / Hybrid">Electric / Hybrid EV</option>
          </select>
        </div>

        {/* Tyre Width */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
            Width (mm)
          </label>
          <select
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full bg-[#1a1b22] border border-neutral-700/80 text-white rounded px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#E63946] transition-colors cursor-pointer"
          >
            <option value="all">Any Width</option>
            <option value="205">205</option>
            <option value="215">215</option>
            <option value="225">225 (Standard)</option>
            <option value="235">235</option>
            <option value="245">245</option>
            <option value="255">255</option>
            <option value="265">265</option>
            <option value="275">275 (Wide)</option>
          </select>
        </div>

        {/* Profile / Aspect Ratio */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
            Profile (%)
          </label>
          <select
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            className="w-full bg-[#1a1b22] border border-neutral-700/80 text-white rounded px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#E63946] transition-colors cursor-pointer"
          >
            <option value="all">Any Profile</option>
            <option value="35">35 (Low Profile)</option>
            <option value="40">40</option>
            <option value="45">45 (Standard)</option>
            <option value="50">50</option>
            <option value="55">55</option>
            <option value="60">60</option>
            <option value="65">65</option>
          </select>
        </div>

        {/* Rim Diameter */}
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
            Rim Diameter
          </label>
          <select
            value={rim}
            onChange={(e) => setRim(e.target.value)}
            className="w-full bg-[#1a1b22] border border-neutral-700/80 text-white rounded px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#E63946] transition-colors cursor-pointer"
          >
            <option value="all">Any Rim</option>
            <option value="16">16 inch</option>
            <option value="17">17 inch</option>
            <option value="18">18 inch</option>
            <option value="19">19 inch</option>
            <option value="20">20 inch</option>
            <option value="21">21 inch</option>
            <option value="22">22 inch</option>
          </select>
        </div>

        {/* Driving Condition / Season */}
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
            Season / Grip
          </label>
          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className="w-full bg-[#1a1b22] border border-neutral-700/80 text-white rounded px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#E63946] transition-colors cursor-pointer"
          >
            <option value="all">All Conditions</option>
            <option value="All-Season">All-Season Grand Tour</option>
            <option value="Performance">Summer Ultra Grip</option>
            <option value="Winter">Winter / Snow Arctic</option>
          </select>
        </div>

        {/* Search Submit Button */}
        <div className="col-span-2 sm:col-span-1 flex items-end">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#E63946] hover:bg-[#ff1e2d] active:scale-95 text-white font-bold py-2.5 px-3 rounded text-xs sm:text-sm uppercase tracking-wider transition-all duration-150 shadow-md shadow-red-950/60 cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>Search Tyres</span>
          </button>
        </div>
      </form>
    </div>
  );
};
