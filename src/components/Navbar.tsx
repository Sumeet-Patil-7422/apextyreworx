import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenShop: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenShop }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b0c0e]/95 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/40 py-3.5'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#hero"
              className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-decoration-none"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded bg-gradient-to-br from-[#E63946] to-[#b81d29] text-white font-extrabold italic shadow-md shadow-red-950/40 transform -skew-x-12 group-hover:scale-105 transition-transform">
                <span className="transform skew-x-12 text-lg font-black tracking-tighter">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-racing text-xl sm:text-2xl font-bold tracking-wider text-white flex items-center gap-1.5">
                  APEX <span className="text-[#E63946]">TYREWORX</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-medium -mt-1 hidden sm:block">
                  Engineered for Every Road
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (single-line, clean typography) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
              <a
                href="#hero"
                className="hover:text-white hover:text-shadow transition-colors whitespace-nowrap shrink-0 hover:border-b-2 hover:border-[#E63946] pb-1"
              >
                Home
              </a>
              <a
                href="#special-offer"
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:border-b-2 hover:border-[#E63946] pb-1 flex items-center gap-1"
              >
                Special Offers
                <span className="text-[10px] uppercase font-bold text-[#E63946] bg-red-950/60 border border-red-500/30 px-1.5 py-0.2 rounded">
                  -20%
                </span>
              </a>
              <a
                href="#technology"
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:border-b-2 hover:border-[#E63946] pb-1"
              >
                Technology
              </a>
              <a
                href="#products"
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:border-b-2 hover:border-[#E63946] pb-1"
              >
                Products
              </a>
              <a
                href="#tyre-care"
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:border-b-2 hover:border-[#E63946] pb-1"
              >
                Tyre Care
              </a>
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenShop}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-white bg-[#E63946] hover:bg-[#ff2032] active:scale-95 transition-all rounded shadow-lg shadow-red-900/30 border border-red-500/40 cursor-pointer red-glow-sm"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-300 hover:text-white rounded-md bg-neutral-900/80 border border-neutral-800"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0d0e12]/98 border-b border-neutral-800 px-5 pt-4 pb-6 space-y-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col space-y-3 text-base font-medium">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-200 hover:text-white py-2 border-b border-neutral-800/80"
              >
                Home
              </a>
              <a
                href="#special-offer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-200 hover:text-white py-2 border-b border-neutral-800/80 flex items-center justify-between"
              >
                <span>Special Offers</span>
                <span className="text-xs font-bold text-white bg-[#E63946] px-2 py-0.5 rounded">
                  20% OFF
                </span>
              </a>
              <a
                href="#technology"
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-200 hover:text-white py-2 border-b border-neutral-800/80"
              >
                Technology & Tread Design
              </a>
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-200 hover:text-white py-2 border-b border-neutral-800/80"
              >
                Tyre Catalog
              </a>
              <a
                href="#tyre-care"
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-200 hover:text-white py-2 border-b border-neutral-800/80"
              >
                Tyre Care & Pressure Guide
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenShop();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold tracking-wider uppercase text-white bg-[#E63946] hover:bg-[#d02e3a] rounded shadow-lg shadow-red-950/50"
              >
                <span>Shop Discounted Tyres</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center gap-4 text-xs text-neutral-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 5-Yr Warranty
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-red-400" /> 1-800-APEX-TYRE
                </span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
