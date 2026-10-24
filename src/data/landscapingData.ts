import { ServiceItem, GalleryProject, Testimonial, FaqItem } from '../types';
import heroImage from '../assets/images/hero_estate_landscape_1792868274236.jpg';
import hardscapingImage from '../assets/images/service_hardscaping_patio_1792868274421.jpg';
import plantingImage from '../assets/images/service_native_planting_1792868276248.jpg';
import poolscapeImage from '../assets/images/gallery_pool_terrace_1792868276540.jpg';
import lightingImage from '../assets/images/gallery_evening_lighting_1792868276666.jpg';

export const HERO_IMAGE = heroImage;
export const HARDSCAPING_IMAGE = hardscapingImage;
export const PLANTING_IMAGE = plantingImage;
export const POOLSCAPE_IMAGE = poolscapeImage;
export const LIGHTING_IMAGE = lightingImage;

export const SERVICES: ServiceItem[] = [
  {
    id: 'hardscaping',
    title: 'Custom Hardscaping & Terraces',
    subtitle: 'Bluestone, Granite, Pavilions & Outdoor Kitchens',
    shortDesc: 'Hand-chiseled natural stone patios, retaining walls, covered dining pavilions, and integrated fire features engineered for longevity.',
    fullDesc: 'Our master stonemasons construct enduring outdoor living structures using regional bluestone, dimensional granite, and structural timber. From fully appointed outdoor kitchens with built-in gas grills and beverage coolers to sunken fire conversation pits, every cut is made with surgical precision.',
    image: HARDSCAPING_IMAGE,
    keyFeatures: [
      'Dimensional Pennsylvania bluestone & limestone paving',
      'Structural retaining walls & engineered slope grading',
      'Complete outdoor kitchens, pizza ovens & bar islands',
      'Sunken fire conversation pits & stone fireplaces',
      'Custom cedar & Douglas fir shade pergolas'
    ],
    typicalTimeline: '3 to 6 weeks',
    investmentStartingAt: '$18,000',
    materialsUsed: ['Natural Bluestone', 'Dimensional Granite', 'Cedar Timber', 'Fieldstone', 'Stainless Steel Hardware']
  },
  {
    id: 'landscape-design',
    title: 'Architectural Landscape Architecture',
    subtitle: '3D Spatial Modeling, Grading & Master Planning',
    shortDesc: 'Comprehensive master site plans with 3D renderings, drainage engineering, and seamless integration between home interior and grounds.',
    fullDesc: 'Before moving a single boulder, our licensed landscape architects create holistic property master plans. We model sun angles, wind corridors, soil hydrology, and sightlines from primary interior living rooms to ensure your outdoor grounds look exceptional in all four seasons.',
    image: HERO_IMAGE,
    keyFeatures: [
      'Photorealistic 3D virtual walkthroughs & sightline studies',
      'Topographic grading, French drains & storm catchment plans',
      'Municipal permit management & HOA architectural review submittals',
      'Phased implementation plans for multi-year estate developments',
      'Microclimate plant zoning and shade analysis'
    ],
    typicalTimeline: '2 to 4 weeks for master design',
    investmentStartingAt: '$4,500',
    materialsUsed: ['BIM & 3D Topographic CAD', 'Site Hydrology Studies', 'Drone Elevation Mapping']
  },
  {
    id: 'native-planting',
    title: 'Native Planting & Specimen Trees',
    subtitle: 'Drought-Resilient Flora & Mature Forestation',
    shortDesc: 'Artfully curated perennial borders, specimen Japanese maples, evergreen privacy screens, and pollinator habitats tailored to regional soil.',
    fullDesc: 'We curate plant palettes that thrive naturally without chemical dependency. Our horticulturalists source mature specimen trees, fragrant four-season blooming perennials, and deep-rooting native grasses that conserve up to 60% more water while resisting regional weather extremes.',
    image: PLANTING_IMAGE,
    keyFeatures: [
      'Specimen mature tree crane delivery & root anchoring',
      'Four-season continuous bloom color palettes',
      'Evergreen acoustic & visual privacy screening buffers',
      'Organic soil remediation, biochar & mycorrhizal inoculation',
      'Drought-tolerant pollinator gardens (Audubon & bee-friendly)'
    ],
    typicalTimeline: '1 to 3 weeks',
    investmentStartingAt: '$8,500',
    materialsUsed: ['Mature Specimen Trees', 'Native Perennials', 'Hardwood Mulch', 'Organic Soil Amendments']
  },
  {
    id: 'outdoor-lighting',
    title: 'Architectural Illumination & Audio',
    subtitle: 'Low-Voltage Brass Fixtures & Smart Zoning',
    shortDesc: 'Subtle 2700K warm LED landscape lighting that enhances nighttime architectural depth, safe step illumination, and ambient outdoor audio.',
    fullDesc: 'Night transforms a landscape. We design subtle, anti-glare illumination systems using solid marine-grade cast brass fixtures that weather gracefully. Controlled via smartphone or smart home integration, you can balance path navigation, tree canopy uplighting, and gentle water reflections at the touch of a screen.',
    image: LIGHTING_IMAGE,
    keyFeatures: [
      'Solid marine-grade cast brass fixtures with lifetime warranty',
      'Subtle 2700K warm white color temperature (no harsh glare)',
      'Smart home app automation, astronomical timers & zone dimming',
      'Concealed in-ground architectural landscape speakers',
      'Under-cap stair tread & perimeter safety lighting'
    ],
    typicalTimeline: '4 to 7 days',
    investmentStartingAt: '$5,200',
    materialsUsed: ['Cast Brass Fixtures', 'Low-Voltage Direct Burial Wiring', 'Multi-Tap Transformers', 'Audiophile Rock Speakers']
  },
  {
    id: 'water-pool',
    title: 'Poolscapes & Water Architecture',
    subtitle: 'Limestone Coping, Reflecting Pools & Cascades',
    shortDesc: 'Integrated swimming pool terraces, zero-edge coping, soothing stone fountain bowls, and recirculating natural boulder waterfalls.',
    fullDesc: 'Water grounds an outdoor sanctuary with auditory serenity. We design and construct pool surrounds, custom stone waterfalls, modern reflecting basins, and bubbling basalt columns that mask urban street noise and invite tranquility to your patio.',
    image: POOLSCAPE_IMAGE,
    keyFeatures: [
      'Architectural limestone & flamed granite pool coping',
      'Custom zero-edge reflecting basins & recirculating cascades',
      'Carved granite fountain urns & basalt bubbling columns',
      'Quiet-flow energy-efficient variable speed pump systems',
      'Automatic water leveling & integrated winterization bypasses'
    ],
    typicalTimeline: '3 to 8 weeks',
    investmentStartingAt: '$22,000',
    materialsUsed: ['Indiana Limestone', 'Basalt Columns', 'Pebble Sheen Finish', 'Bronze Spillways']
  },
  {
    id: 'estate-care',
    title: 'Estate Grounds & Soil Care',
    subtitle: 'Proactive Seasonal Care, Pruning & Smart Irrigation',
    shortDesc: 'White-glove grounds management, master horticultural pruning, organic turf stewardship, and weather-linked drip irrigation maintenance.',
    fullDesc: 'Landscape investments appreciate when tended by true craftsmen. Our dedicated estate teams perform specialized seasonal hand-pruning, core aeration, organic microbial fertilization, and bi-monthly irrigation efficiency audits to ensure peak botanical vigor year after year.',
    image: PLANTING_IMAGE,
    keyFeatures: [
      'Dedicated horticulturist estate lead and consistent crew',
      'Hand-pruning of ornamental maples, boxwoods & espaliers',
      'Smart weather-sensing ET irrigation controller audits',
      'Zero-synthetic 100% organic lawn feeding programs',
      'Fall leaf remediation, winter plant wrapping & spring preparation'
    ],
    typicalTimeline: 'Annual contract / Monthly schedule',
    investmentStartingAt: '$650 / month',
    materialsUsed: ['Organic Composts', 'Microbial Inoculants', 'Smart ET Sensors', 'Hand Horticultural Tools']
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'ridgecrest-estate',
    title: 'The Ridgecrest Hillside Estate',
    location: 'Westlake Hills, TX',
    category: 'hardscape',
    categoryLabel: 'Hardscape & Terraces',
    image: HERO_IMAGE,
    scope: 'Complete rear hillside transformation with multi-tiered bluestone terraces, sunken radial fire lounge, and drought-hardy olive trees.',
    completionYear: '2025',
    duration: '8 weeks',
    highlight: 'Engineered a 14-foot grade drop into three functional outdoor rooms with integrated evening illumination.',
    materials: ['Pennsylvania Bluestone', 'Texas Limestone', 'Mission Olive Trees', 'Cast Brass Low-Voltage Lighting'],
    description: 'The homeowners desired a seamless outdoor entertaining space that maximized their sunset ridge views while taming an unwalkable steep slope. We excavated 120 tons of limestone to build two retaining grade terraces, anchored by a 16-foot radial sunken fire pit with integrated stone benching.'
  },
  {
    id: 'meadowood-pavilion',
    title: 'Meadowood Outdoor Kitchen & Pergola',
    location: 'Greenwich, CT',
    category: 'hardscape',
    categoryLabel: 'Patios & Pavilions',
    image: HARDSCAPING_IMAGE,
    scope: 'Custom timber-frame pergola over a fully integrated outdoor culinary station, sunken lounge, and formal boxwood allée.',
    completionYear: '2024',
    duration: '6 weeks',
    highlight: 'Equipped with a 42-inch gas grill, wood-fired smoker, twin undercounter fridges, and concealed all-weather audio.',
    materials: ['Rough-Hewn Cedar Beams', 'Hand-Split Fieldstone', 'Honed Absolute Black Granite', 'Boxwood Parterres'],
    description: 'Designed for a culinary enthusiast family, this outdoor living suite seamlessly extends from the primary kitchen. Hand-chiseled stone columns support heavy timber rafters wrapped in flowering clematis, providing comfortable dappled afternoon shade.'
  },
  {
    id: 'hawthorne-botanical',
    title: 'Hawthorne Botanical Garden & Fountain',
    location: 'Lake Forest, IL',
    category: 'design',
    categoryLabel: 'Gardens & Plantings',
    image: PLANTING_IMAGE,
    scope: 'Four-season English-inspired courtyard garden with hand-carved stone pedestal fountain, perennial beds, and privacy walls.',
    completionYear: '2025',
    duration: '4 weeks',
    highlight: 'Over 85 varieties of native perennials, flowering shrubs, and specimen Japanese maples for non-stop seasonal interest.',
    materials: ['Carved Limestone Fountain', 'River Cobble', 'Japanese Bloodgood Maple', 'Fieldstone Retaining Wall'],
    description: 'This previously neglected interior courtyard was transformed into a serene cloister garden. The gentle splashing of the central water fountain creates acoustic privacy from adjacent neighbor yards while cooling the microclimate on hot summer days.'
  },
  {
    id: 'belvedere-poolscape',
    title: 'Belvedere Limestone Pool Terrace',
    location: 'Scottsdale, AZ',
    category: 'poolscape',
    categoryLabel: 'Poolscapes & Water',
    image: POOLSCAPE_IMAGE,
    scope: 'Clean-line contemporary lap pool surround with architectural thermal limestone pavers, shade pavilion, and succulent planters.',
    completionYear: '2024',
    duration: '9 weeks',
    highlight: 'Heat-resistant zero-burn thermal limestone pavers stay cool under bare feet even in 100°F desert sun.',
    materials: ['Thermal Ivory Limestone', 'Powder-Coated Steel Cabana', 'Espaliered Olive Trees', 'Agave & Blue Fescue'],
    description: 'A masterclass in modern desert minimalism. The linear reflecting pool mirrors mountain horizons, framed by custom Corten steel planter beds and architectural olive specimens that require minimal water consumption.'
  },
  {
    id: 'whispering-pines',
    title: 'Whispering Pines Evening Pavilion',
    location: 'Bend, OR',
    category: 'lighting',
    categoryLabel: 'Illumination & Fire',
    image: LIGHTING_IMAGE,
    scope: 'Nighttime transformation of an acre woodland property with automated 2700K low-voltage lighting, stone fireplace pavilion, and flagstone pathways.',
    completionYear: '2025',
    duration: '5 weeks',
    highlight: '36 discreet brass fixtures illuminate birch trunks and stone texture without any visible light sources or light pollution.',
    materials: ['Hand-Selected Flagstone', 'River Boulder Fireplace', 'Solid Brass Up & Down Lights', 'Western Red Cedar Rafters'],
    description: 'By day a peaceful alpine retreat; by night an enchanting illuminated woodland promenade. Our lighting architects positioned fixture beam angles to avoid window glare inside the home while accentuating the architectural bark of specimen birch trees.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'David & Caroline Sterling',
    neighborhood: 'Westlake Hills',
    cityState: 'Austin, TX',
    projectType: 'Terraced Bluestone Patio & Sunken Fire Lounge',
    year: '2025',
    quote: 'Evergreen completely transformed our unusable sloped yard into our favorite part of the home. The stonework is heirloom-grade, and their crew was as clean, punctual, and respectful as indoor fine finish carpenters.',
    outcomeMetric: 'Added 1,400 sq.ft. of usable luxury living space',
    avatarInitials: 'DS',
    rating: 5
  },
  {
    id: 't2',
    clientName: 'Marcus & Elena Vance',
    neighborhood: 'Round Hill',
    cityState: 'Greenwich, CT',
    projectType: 'Outdoor Kitchen, Pergola & Garden Master Plan',
    year: '2024',
    quote: 'We have worked with several landscape contractors over twenty years across three homes. Evergreen is the only firm where the final result actually exceeded the photorealistic 3D renderings. Absolutely world-class.',
    outcomeMetric: 'Completed 5 days ahead of schedule for family wedding',
    avatarInitials: 'MV',
    rating: 5
  },
  {
    id: 't3',
    clientName: 'Dr. Evelyn Chen',
    neighborhood: 'Presidio Heights',
    cityState: 'San Francisco, CA',
    projectType: 'Modern Courtyard, Native Planting & Lighting',
    year: '2025',
    quote: 'Their botanical knowledge is unmatched. Instead of generic nursery shrubs that wither in two years, they curated regional native plants that look lush with 50% less water. The evening lighting design is breathtaking.',
    outcomeMetric: '62% reduction in landscape water consumption',
    avatarInitials: 'EC',
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Process',
    question: 'How does your design and consultation process work?',
    answer: 'We begin with an on-site property discovery meeting where we walk your grounds, review grading, evaluate interior-to-exterior sightlines, and discuss your lifestyle goals. From there, our landscape architects produce concept master drawings and 3D architectural models with exact material samples before any excavation starts.'
  },
  {
    category: 'Estimates',
    question: 'How accurate are your initial quote estimates?',
    answer: 'We operate with open-book, fixed-price contracts once the final design is approved. Our estimates account for all municipal permitting, site grading, soil testing, drainage infrastructure, structural base gravel, and hand-selected plant specimens, so there are never surprise hidden change orders.'
  },
  {
    category: 'Permits',
    question: 'Do you handle municipal building permits and HOA approvals?',
    answer: 'Yes. Our team manages the entire administrative submission process, including engineered site plans for retaining walls, electrical permits for outdoor kitchens, and presentation packets formatted specifically for strict HOA architectural review committees.'
  },
  {
    category: 'Timeline',
    question: 'What is your typical project timeline from contract to completion?',
    answer: 'Design planning and 3D modeling typically takes 2 to 3 weeks. Construction timelines range from 2 to 4 weeks for dedicated hardscaping or planting projects, up to 8 to 12 weeks for comprehensive multi-terrace estate builds with outdoor kitchens and water features.'
  },
  {
    category: 'Warranty',
    question: 'What warranties and guarantees do you provide on craftsmanship?',
    answer: 'We provide a 5-year structural warranty on all hardscaping, stone masonry, and retaining wall installations, a 2-year 100% plant replacement guarantee on all installed specimen trees and perennials when maintained with our smart irrigation systems, and lifetime manufacturer warranties on solid brass lighting fixtures.'
  }
];

export const SERVICE_AREAS = [
  'Westlake Hills & Rollingwood',
  'Tarrytown & Central District',
  'Lake Travis & Steiner Ranch',
  'Barton Creek & Spanish Oaks',
  'Greenwich & Fairfield County',
  'North Shore & Lake Forest'
];
