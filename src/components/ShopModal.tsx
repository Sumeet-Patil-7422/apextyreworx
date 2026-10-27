import React, { useState, useEffect } from 'react';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Wrench, 
  Truck, 
  Tag, 
  ArrowRight, 
  Calendar, 
  Car, 
  Sparkles,
  Phone,
  Mail,
  CheckCircle2
} from 'lucide-react';
import { TyreProduct } from '../types';
import { TYRE_PRODUCTS } from '../data/tyresData';

interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTyre: TyreProduct | null;
}

export const ShopModal: React.FC<ShopModalProps> = ({
  isOpen,
  onClose,
  selectedTyre
}) => {
  const defaultTyre = TYRE_PRODUCTS[0];
  const tyre = selectedTyre || defaultTyre;

  const [quantity, setQuantity] = useState<number>(4);
  const [selectedRim, setSelectedRim] = useState<string>(tyre.rimSizes[0] || '18');
  const [fitmentType, setFitmentType] = useState<'fitment_center' | 'home_delivery'>('fitment_center');
  
  // Form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleMakeModel, setVehicleMakeModel] = useState('');
  const [postalCode, setPostalCode] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedTyre) {
      setSelectedRim(selectedTyre.rimSizes[0] || '18');
    }
  }, [selectedTyre]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
      setErrorMsg('');
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const unitOriginalPrice = tyre.originalPrice;
  const unitDiscountPrice = tyre.discountPrice;
  const subtotalOriginal = unitOriginalPrice * quantity;
  const subtotalDiscount = unitDiscountPrice * quantity;
  const totalSavings = subtotalOriginal - subtotalDiscount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setErrorMsg('Please complete all contact fields.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative max-w-2xl w-full bg-[#111217] border border-neutral-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-neutral-900 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E63946] animate-pulse" />
            <span className="font-racing text-lg font-bold text-white tracking-wider uppercase">
              APEX DIRECT FITMENT & ORDER
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-neutral-800 hover:bg-[#E63946] text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-950/50">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                  Order & Fitment Request Confirmed
                </span>
                <h3 className="font-racing text-3xl font-bold text-white uppercase">
                  THANK YOU, {fullName.toUpperCase()}!
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto">
                  Your reservation reference is <strong className="text-white font-mono bg-neutral-800 px-2 py-0.5 rounded">APX-9824</strong>. An authorized APEX specialist will contact you at <strong className="text-neutral-200">{phone}</strong> within 15 minutes to schedule fitment.
                </p>
              </div>

              {/* Order Summary receipt */}
              <div className="p-4 rounded-xl bg-black/60 border border-neutral-800 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between text-neutral-300">
                  <span>Selected Model:</span>
                  <strong className="text-white">{tyre.name} ({selectedRim}&quot;)</strong>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Quantity:</span>
                  <strong className="text-white">{quantity} Tyres</strong>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Vehicle:</span>
                  <strong className="text-white">{vehicleMakeModel || 'Standard Fitment'}</strong>
                </div>
                <div className="flex justify-between text-emerald-400 font-semibold border-t border-neutral-800 pt-2">
                  <span>Promo Applied (APEX20):</span>
                  <span>-${totalSavings} OFF</span>
                </div>
                <div className="flex justify-between text-white font-bold text-sm pt-1">
                  <span>Total Due at Fitting:</span>
                  <span className="font-racing text-lg text-[#E63946]">${subtotalDiscount}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-[#E63946] hover:bg-[#ff2032] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Return to Site
              </button>
            </div>
          ) : (
            <>
              {/* Product Card Snippet */}
              <div className="p-4 rounded-xl bg-black/50 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E63946] bg-red-950/70 px-2 py-0.5 rounded border border-red-500/30">
                      20% PROMO APPLIED
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      Coupon: APEX20
                    </span>
                  </div>
                  <h4 className="font-racing text-xl font-bold text-white uppercase mt-1">
                    {tyre.name}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {tyre.tagline}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-xs text-neutral-500 line-through">
                    ${tyre.originalPrice}/tyre
                  </span>
                  <div className="font-racing text-2xl font-black text-[#E63946]">
                    ${tyre.discountPrice}
                    <span className="text-xs font-sans text-neutral-400 font-normal"> /tyre</span>
                  </div>
                </div>
              </div>

              {/* Configure Quantity & Rim Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-bold mb-2">
                    Select Quantity
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setQuantity(2)}
                      className={`p-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                        quantity === 2
                          ? 'bg-[#E63946] text-white border-red-500 shadow'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800'
                      }`}
                    >
                      <div className="font-bold">2 Tyres</div>
                      <div className="text-[10px] opacity-80">Front or Rear Set</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuantity(4)}
                      className={`p-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                        quantity === 4
                          ? 'bg-[#E63946] text-white border-red-500 shadow'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800'
                      }`}
                    >
                      <div className="font-bold">Set of 4 Tyres</div>
                      <div className="text-[10px] text-amber-300 font-bold">Free Fitment Included</div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-bold mb-2">
                    Rim Diameter
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {tyre.rimSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedRim(size)}
                        className={`px-3 py-2 rounded-lg border text-xs font-mono font-bold transition-all cursor-pointer ${
                          selectedRim === size
                            ? 'bg-neutral-200 text-neutral-950 border-white'
                            : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:bg-neutral-800'
                        }`}
                      >
                        {size}&quot;
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fitment Method */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 font-bold mb-2">
                  Delivery / Fitment Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    onClick={() => setFitmentType('fitment_center')}
                    className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                      fitmentType === 'fitment_center'
                        ? 'bg-neutral-900 border-red-500/80 text-white shadow-md'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <Wrench className="w-5 h-5 text-[#E63946] shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Authorized Fitment Center</div>
                      <div className="text-[11px] text-neutral-400">Professional mounting & computerized wheel balance</div>
                    </div>
                  </div>

                  <div
                    onClick={() => setFitmentType('home_delivery')}
                    className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                      fitmentType === 'home_delivery'
                        ? 'bg-neutral-900 border-red-500/80 text-white shadow-md'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <Truck className="w-5 h-5 text-[#E63946] shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Express Courier Delivery</div>
                      <div className="text-[11px] text-neutral-400">Delivered directly to your residence or garage</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact & Booking Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-neutral-800">
                <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider block">
                  Installation Booking & Contact Info
                </span>

                {errorMsg && (
                  <p className="text-xs text-red-400 bg-red-950/40 p-2 rounded border border-red-500/40">
                    {errorMsg}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#17181f] border border-neutral-700 rounded px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E63946]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#17181f] border border-neutral-700 rounded px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E63946]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="driver@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#17181f] border border-neutral-700 rounded px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E63946]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      placeholder="ZIP / Postal"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      className="w-full bg-[#17181f] border border-neutral-700 rounded px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E63946]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
                    Vehicle Year, Make & Model (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2024 BMW M340i / Audi RS3"
                    value={vehicleMakeModel}
                    onChange={(e) => setVehicleMakeModel(e.target.value)}
                    className="w-full bg-[#17181f] border border-neutral-700 rounded px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E63946]"
                  />
                </div>

                {/* Price Breakdown Footer */}
                <div className="p-4 rounded-xl bg-black/70 border border-neutral-800 space-y-2">
                  <div className="flex justify-between text-xs text-neutral-400">
                    <span>Retail Price ({quantity}x tyres):</span>
                    <span className="line-through">${subtotalOriginal}</span>
                  </div>
                  <div className="flex justify-between text-xs text-emerald-400 font-semibold">
                    <span>20% Promotional Discount (APEX20):</span>
                    <span>-${totalSavings}</span>
                  </div>
                  <div className="flex justify-between text-xs text-neutral-300">
                    <span>Fitment & Computerized Balancing:</span>
                    <span className="text-emerald-400 font-semibold">{quantity >= 4 ? 'FREE ($120 Value)' : '$50'}</span>
                  </div>
                  <div className="flex justify-between items-center text-white font-bold pt-2 border-t border-neutral-800">
                    <span className="text-sm">Total Estimated:</span>
                    <span className="font-racing text-2xl text-[#E63946]">
                      ${subtotalDiscount}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#E63946] hover:bg-[#ff2032] active:scale-98 text-white font-black uppercase tracking-wider rounded-lg text-sm shadow-xl shadow-red-950/60 transition-all red-glow cursor-pointer"
                >
                  <span>Confirm Reservation & Lock 20% Discount</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </>
          )}

        </div>
      </div>
    </div>
  );
};
