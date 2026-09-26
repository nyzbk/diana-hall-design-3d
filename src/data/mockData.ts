import type { PortfolioProject, Testimonial, Award, Hotspot } from '../types';

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'floor',
    title: 'Bookmatched Calacatta Gold & Natural Oak',
    category: 'Material Architecture',
    description: 'Directly sourced from Carrara, Italy. Hand-selected bookmatched slabs polished to a honed satin sheen, paired with wide-plank European white oak.',
    position: [0, 0.1, 0.5],
    materials: ['Italian Calacatta Gold', 'Honed Surface Treatment', 'Underfloor Climate Control']
  },
  {
    id: 'sofa',
    title: 'Custom Italian Curved Salon Seating',
    category: 'Bespoke Furnishing',
    description: 'Sculptural organic silhouette upholstered in textured alpine bouclé with hand-stitched saddle leather piping and high-resilience foam core.',
    position: [-1.2, 0.8, -0.2],
    materials: ['High-Performance Bouclé', 'Solid Birchwood Frame', 'Feather-Down Cushioning']
  },
  {
    id: 'table',
    title: 'Monolithic Nero & Brushed Brass Table',
    category: 'Artisanal Millwork',
    description: 'Precision waterjet-cut marble base anchored by solid hand-brushed brass detailing, creating an architectural centerpiece.',
    position: [-0.1, 0.5, -0.1],
    materials: ['Nero Marquina / Calacatta', 'Brushed Unlacquered Brass', 'Bronze Mirror Inlay']
  },
  {
    id: 'wall',
    title: 'Acoustic Fluted White Oak Architectural Screen',
    category: 'Spatial Engineering',
    description: 'Custom acoustic timber slats with integrated hidden micro-aperture LED lighting (2700K warm wash) and concealed pivot door.',
    position: [0, 2.0, -3.2],
    materials: ['Quarter-Sawn White Oak', 'Recessed Low-Glare Optics', 'Acoustic Felt Substrate']
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'port-royal-estate',
    title: 'The Port Royal Grand Residence',
    location: 'Port Royal · Naples, Florida',
    category: 'Waterfront Custom Estate',
    year: '2025',
    squareFeet: '13,800 sq ft',
    description: 'An expansive coastal estate boasting seamless indoor-outdoor living, double-height travertine fireplace, custom wine pavilion, and floor-to-ceiling panoramic glass facing the Gulf waterways.',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    awards: ['2025 Sand Dollar Award — Best Interior Design $8M+', 'Featured in Florida Design Magazine'],
    features: ['Custom Italian kitchen with dual quartzite islands', 'Master suite private wellness spa', 'Integrated motorized architectural solar screens']
  },
  {
    id: 'aqualane-shores',
    title: 'Aqualane Modern Sanctuary',
    location: 'Aqualane Shores · Naples, Florida',
    category: 'Turnkey Coastal Modern',
    year: '2024',
    squareFeet: '9,200 sq ft',
    description: 'A serene study in warm minimalism, blending natural limestone, wire-brushed cypress beams, and bespoke curated art commissions tailored for sophisticated entertaining.',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    awards: ['2024 Aurora Award Winner — Interior Architectural Detail'],
    features: ['Floating glass staircase with integrated brass handrail', 'Open-air atrium courtyard', 'Bespoke bronze-framed glass wine room']
  },
  {
    id: 'pelican-bay-penthouse',
    title: 'Pelican Bay Sky Villa',
    location: 'Pelican Bay · Naples, Florida',
    category: 'Luxury High-Rise Penthouse',
    year: '2024',
    squareFeet: '7,400 sq ft',
    description: 'Perched high above the Gulf of Mexico, this penthouse features 360-degree horizon views, custom backlit onyx bar, curved plaster ceilings, and discreet smart-home automation.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80'
    ],
    awards: ['Pinnacle Award — Best Whole-Home High-Rise Renovation'],
    features: ['Onyx illuminated entertaining lounge', 'Custom acoustic theater', 'Private wrap-around sunset loggia']
  },
  {
    id: 'old-naples-cottage',
    title: 'Old Naples Architectural Heirloom',
    location: 'Historic District · Naples, Florida',
    category: 'Transitional Historic Revitalization',
    year: '2023',
    squareFeet: '6,100 sq ft',
    description: 'Honoring the charm of classic Florida vernacular while elevating the interiors with European antiques, bespoke custom millwork, and warm organic textures.',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80'
    ],
    awards: ['Sand Dollar Award — Best Historic Interior Preservation'],
    features: ['Hand-distressed French oak flooring', 'Subtle lime-washed plaster walls', 'Private garden cabana suite']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Richard & Catherine Vance',
    role: 'Homeowners',
    location: 'Port Royal, Naples',
    quote: 'Diana and her team delivered our 14,000 sq ft home exactly on time and on budget. Their ability to translate our vision into a breathtaking, cohesive work of art surpassed all expectations.',
    rating: 5,
    highlight: 'On time, on budget, flawless execution'
  },
  {
    id: '2',
    author: 'Markus Sterling',
    role: 'Principal Developer',
    location: 'Sterling Luxury Homes, Naples',
    quote: 'We have partnered with Diana Hall Design on three multi-million dollar model homes. Each property sold before completion. Their attention to architectural detail and material balance is peerless.',
    rating: 5,
    highlight: 'Sold before completion · Peerless attention to detail'
  },
  {
    id: '3',
    author: 'Elena Rostova',
    role: 'Private Collector & Client',
    location: 'Pelican Bay, Naples',
    quote: 'The level of personalized care, from 3D spatial planning to the final white-glove installation, made what is usually a stressful process completely joyful and effortless.',
    rating: 5,
    highlight: 'Joyful, effortless luxury curation'
  }
];

export const AWARDS: Award[] = [
  {
    year: '2025',
    title: 'Sand Dollar Award — Winner',
    organization: 'Collier Building Industry Association',
    category: 'Best Interior Design — Single Family $8M+',
    badge: '🏆'
  },
  {
    year: '2024',
    title: 'Aurora Design Award',
    organization: 'Southeast Building Conference',
    category: 'Residential Interior Architecture & Craftsmanship',
    badge: '✨'
  },
  {
    year: '2023',
    title: 'Sand Dollar Award — Winner',
    organization: 'Collier Building Industry Association',
    category: 'Best Whole-House Interior Remodel',
    badge: '🏆'
  },
  {
    year: '2022',
    title: 'Pinnacle Award of Excellence',
    organization: 'Lee County Building Industry Association',
    category: 'Best Master Suite Architecture',
    badge: '⭐'
  },
  {
    year: '2021',
    title: 'Sand Dollar Award — Winner',
    organization: 'CBIA Excellence in Design',
    category: 'Best Model Home Interior Design',
    badge: '🏆'
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'Diana Hall',
    role: 'Founder & Principal Interior Designer',
    experience: '25+ Years Experience',
    bio: 'Recognized throughout Florida and nationwide for her refined coastal aesthetic. Diana blends classical architectural balance with warm, modern serenity.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Elizabeth Manchego',
    role: 'Senior Project Architect & Design Lead',
    experience: '14 Years Experience',
    bio: 'Specializing in technical architectural CAD, bespoke millwork detailing, and luxury finishes across custom Naples residential developments.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Taylor Morrison',
    role: 'Interior Designer & Spatial Planner',
    experience: '9 Years Experience',
    bio: 'Focused on 3D spatial modeling, bespoke artisanal furniture acquisition, and turnkey client project management.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
  }
];
