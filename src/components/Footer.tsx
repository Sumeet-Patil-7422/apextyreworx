import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  Clock, 
  Globe
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#08090b] text-neutral-400 border-t border-neutral-800/80 relative overflow-hidden">
      
      {/* Top Trust Signals Ribbon */}
      <div className="border-b border-neutral-800/80 bg-neutral-950/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/30 text-[#E63946] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  5-Year Warranty
                </h4>
                <p className="text-[11px] text-neutral-400">
                  Comprehensive road hazard coverage
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/30 text-[#E63946] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  30-Day Ride Trial
                </h4>
                <p className="text-[11px] text-neutral-400">
                  100% satisfaction or full exchange
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/30 text-[#E63946] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Fast Certified Fitment
                </h4>
                <p className="text-[11px] text-neutral-400">
                  Over 1,200 authorized workshops
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/30 text-[#E63946] shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Global R&D Testing
                </h4>
                <p className="text-[11px] text-neutral-400">
                  Engineered for every road
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="flex items-center justify-center w-8 h-8 rounded bg-gradient-to-br from-[#E63946] to-[#b81d29] text-white font-black italic shadow transform -skew-x-12">
                <span className="transform skew-x-12 text-lg">A</span>
              </div>
              <span className="font-racing text-2xl font-bold tracking-wider text-white">
                APEX <span className="text-[#E63946]">TYREWORX</span>
              </span>
            </a>
            
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              <strong className="text-neutral-200">Engineered for Every Road.</strong> High-performance automotive tyres combining motorsport-grade grip, extended mileage compounds, and all-weather stopping confidence.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2.5 text-neutral-300">
                <Phone className="w-4 h-4 text-[#E63946] shrink-0" />
                <span>Hotline: 1-800-APEX-TYRE (24/7 Roadside)</span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-300">
                <Mail className="w-4 h-4 text-[#E63946] shrink-0" />
                <span>support@apextyreworx.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#E63946] shrink-0" />
                <span>APEX Tyre Dynamics R&D Park, Munich & Detroit</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-racing">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home Overview</a>
              </li>
              <li>
                <a href="#special-offer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Special Offers</span>
                  <span className="text-[10px] bg-red-950 text-[#E63946] font-bold px-1 rounded">-20%</span>
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-white transition-colors">Tread Technology</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">Tyre Catalog</a>
              </li>
              <li>
                <a href="#tyre-care" className="hover:text-white transition-colors">Tyre Care Guide</a>
              </li>
            </ul>
          </div>

          {/* Technology & Tyre Series */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-racing">
              Tyre Families
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="hover:text-white transition-colors">APEX SportGrip Pro (UHP)</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">APEX EnduraMax Tour</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">APEX TerraVolt EV</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">APEX All-Terrain ATX</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">APEX WinterShield Arctic</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-racing">
              Join the APEX Drivers Club
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Subscribe for exclusive seasonal tyre rebates, track testing reports, and essential tyre care bulletins.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#14151a] border border-neutral-700 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#E63946] flex-1"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#E63946] hover:bg-[#ff2032] active:scale-95 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shrink-0 cursor-pointer"
                >
                  Join
                </button>
              </div>

              {subscribed && (
                <div className="text-xs text-emerald-400 flex items-center gap-1.5 animate-in fade-in duration-200">
                  <Check className="w-3.5 h-3.5" /> Welcome! Check your inbox for your 20% discount code.
                </div>
              )}
            </form>

            <div className="pt-2">
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold block mb-2">
                Official Campaign Tags
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="text-neutral-300 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded">#ChooseAPEX</span>
                <span className="text-neutral-300 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded">#APEXTyreworx</span>
                <span className="text-neutral-300 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded">#GripTheRoad</span>
                <span className="text-neutral-300 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded">#TyreCareMatters</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} APEX TYREWORX Ltd. All rights reserved. Slogan: &quot;Engineered for Every Road.&quot;
          </div>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            <a href="#hero" className="hover:text-neutral-300 transition-colors">Tyre Warranty Terms</a>
            <a href="#hero" className="hover:text-neutral-300 transition-colors">Dealer Portal</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
