import { TyreProduct } from '../types';

export const TYRE_PRODUCTS: TyreProduct[] = [
  {
    id: 'apex-sportgrip-pro',
    name: 'APEX SportGrip Pro',
    category: 'Performance',
    tagline: 'Ultra-High Performance Street & Track Tyre',
    description: 'Engineered with dual-silica tread compound and asymmetric outer shoulder blocks for razor-sharp steering feedback and maximum cornering grip in both dry and wet conditions.',
    originalPrice: 249,
    discountPrice: 199,
    rimSizes: ['18', '19', '20', '21', '22'],
    widths: ['225', '235', '245', '255', '265', '275'],
    aspectRatios: ['35', '40', '45'],
    wetGripRating: 'A',
    fuelRating: 'B',
    noiseDb: 69,
    treadwearRating: '320 AA A',
    warrantyKm: '50,000 km',
    features: ['High-rigidity outer shoulder', 'Dual silica compound', 'Curved hydro-channels', 'Aero-sidewall design'],
    badge: 'BESTSELLER - 20% OFF'
  },
  {
    id: 'apex-enduramax-tour',
    name: 'APEX EnduraMax Tour',
    category: 'All-Season',
    tagline: 'Grand Touring All-Weather Tyre for Premium Sedans & Crossovers',
    description: 'Designed for quiet luxury and high mileage. Multi-pitch frequency tread reduces cabin road noise while 3D interlocking sipes maintain strong grip in sun, rain, and light snow.',
    originalPrice: 199,
    discountPrice: 159,
    rimSizes: ['16', '17', '18', '19', '20'],
    widths: ['205', '215', '225', '235', '245'],
    aspectRatios: ['45', '50', '55', '60'],
    wetGripRating: 'A',
    fuelRating: 'A',
    noiseDb: 67,
    treadwearRating: '560 A A',
    warrantyKm: '80,000 km',
    features: ['WhisperQuiet resonance dampening', 'Long-life polymer matrix', 'All-weather 3D sipes', 'Low rolling resistance'],
    badge: 'LONGEST TREAD LIFE'
  },
  {
    id: 'apex-terravolt-ev',
    name: 'APEX TerraVolt EV',
    category: 'EV / Hybrid',
    tagline: 'Next-Gen Electric Vehicle Precision Tyre',
    description: 'Purpose-built to manage immediate instant torque and heavy battery curb weight. Features sound-absorbing acoustic foam liner and ultra-low rolling resistance for increased battery range.',
    originalPrice: 279,
    discountPrice: 223,
    rimSizes: ['18', '19', '20', '21'],
    widths: ['235', '245', '255', '265', '285'],
    aspectRatios: ['35', '40', '45', '50'],
    wetGripRating: 'A',
    fuelRating: 'A',
    noiseDb: 66,
    treadwearRating: '440 A A',
    warrantyKm: '65,000 km',
    features: ['Instant-torque reinforcement', 'Internal acoustic foam', 'Range-extending casing', 'Aramid bead core'],
    badge: 'EV OPTIMIZED'
  },
  {
    id: 'apex-allterrain-atx',
    name: 'APEX All-Terrain ATX',
    category: 'SUV & 4x4',
    tagline: 'Rugged Dual-Purpose Off-Road & Highway Tyre',
    description: 'Aggressive stone-ejecting shoulder lugs combined with reinforced 3-ply sidewall puncture resistance for rocky trails, gravel, sand, and smooth highway commuting.',
    originalPrice: 289,
    discountPrice: 231,
    rimSizes: ['17', '18', '19', '20'],
    widths: ['245', '265', '275', '285'],
    aspectRatios: ['55', '60', '65', '70'],
    wetGripRating: 'B',
    fuelRating: 'C',
    noiseDb: 71,
    treadwearRating: '500 A B',
    warrantyKm: '70,000 km',
    features: ['3-ply ArmorSidewall', 'Stone ejection ribs', 'Staggered shoulder blocks', 'M+S rated grip'],
    badge: 'HEAVY DUTY'
  },
  {
    id: 'apex-wintershield-arctic',
    name: 'APEX WinterShield Arctic',
    category: 'Winter',
    tagline: 'Sub-Zero Extreme Ice & Snow Grip Specialist',
    description: 'Formulated with specialized ArcticFlex silica that stays pliable at -30°C. Micro-bite directional grooves deliver short stopping distances on black ice and packed snow.',
    originalPrice: 239,
    discountPrice: 191,
    rimSizes: ['16', '17', '18', '19', '20'],
    widths: ['215', '225', '235', '245'],
    aspectRatios: ['40', '45', '50', '55'],
    wetGripRating: 'A',
    fuelRating: 'B',
    noiseDb: 69,
    treadwearRating: '380 B A',
    warrantyKm: '45,000 km',
    features: ['Sub-zero ArcticFlex compound', 'High-density sawtooth siping', 'Directional slush evacuation', '3PMSF certified'],
    badge: 'ARCTIC CERTIFIED'
  }
];

export const POSTER_GALLERY = [
  {
    id: 'hero',
    title: 'More Than Just Tyres',
    tagline: 'Engineered for Every Road',
    hashtag: '#ChooseAPEX',
    image: '/assets/aistudio/image_afa2a0b1.png',
    section: 'Hero Banner',
    description: 'At APEX TYREWORX, we build tyres that deliver superior grip, durability and performance — because every journey matters.'
  },
  {
    id: 'offer',
    title: 'Drive More. Save More.',
    tagline: 'Special Offer on APEX Tyres — Up to 20% OFF',
    hashtag: '#APEXTyreworx',
    image: '/assets/aistudio/image_bcf8944d.png',
    section: 'Promotional Campaign',
    description: 'Better Tyres. Safer Journeys. Fuel Efficiency, Premium Quality, and Longer Life backed by our 5-Year Road Hazard Guarantee.'
  },
  {
    id: 'tech',
    title: 'Grip Meets Technology',
    tagline: 'Advanced Tread Design for Maximum Control',
    hashtag: '#GripTheRoad',
    image: '/assets/aistudio/image_3e1af832.png',
    section: 'Technology & Innovation',
    description: 'Optimal traction, enhanced stability, wear resistant compounds, and all-weather readiness engineered to master any asphalt condition.'
  },
  {
    id: 'care',
    title: 'Simple Tyre Care Tips for a Safer Drive',
    tagline: 'A little care goes a long way to keep your tyres in top condition',
    hashtag: '#TyreCareMatters',
    image: '/assets/aistudio/image_3af1d476.png',
    section: 'Safety & Care',
    description: 'Follow our 4 golden rules: Check Pressure, Inspect Tread Depth, Look for Damage, and Rotate Regularly.'
  }
];
