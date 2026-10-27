export interface TyreProduct {
  id: string;
  name: string;
  category: 'Performance' | 'All-Season' | 'EV / Hybrid' | 'SUV & 4x4' | 'Winter';
  tagline: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  rimSizes: string[];
  aspectRatios: string[];
  widths: string[];
  wetGripRating: 'A' | 'B';
  fuelRating: 'A' | 'B' | 'C';
  noiseDb: number;
  treadwearRating: string;
  warrantyKm: string;
  features: string[];
  badge?: string;
}

export interface TyreFinderState {
  vehicleType: string;
  width: string;
  profile: string;
  rim: string;
  season: string;
}
