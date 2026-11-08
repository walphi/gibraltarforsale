export interface AreaSummary {
  slug: string;
  name: string;
  descriptor: string;
  tone: string;
}

export const areas: AreaSummary[] = [
  { slug: 'south-district', name: 'South District', descriptor: 'A quieter southern setting with a distinct residential feel.', tone: 'from-[#dae7e1] to-[#b9d0c8]' },
  { slug: 'ocean-village', name: 'Ocean Village', descriptor: 'A modern waterfront address shaped by marina life.', tone: 'from-[#c9e1e2] to-[#91bdc3]' },
  { slug: 'queensway-quay', name: 'Queensway Quay', descriptor: 'Marina-side living with a more sheltered waterfront character.', tone: 'from-[#d6e1e6] to-[#aebfc9]' },
  { slug: 'upper-town', name: 'Upper Town', descriptor: 'Older streets, elevated routes and varied building character.', tone: 'from-[#e5d9c6] to-[#c8b49a]' },
  { slug: 'town-area', name: 'Town Area', descriptor: 'A central base close to everyday services and city routes.', tone: 'from-[#e3ded5] to-[#c7bfb2]' },
  { slug: 'westside', name: 'Westside', descriptor: 'A broad residential area with a range of apartment settings.', tone: 'from-[#d4ded7] to-[#aabbb2]' },
  { slug: 'eastside', name: 'Eastside', descriptor: 'A coastal-facing location with its own access considerations.', tone: 'from-[#d9e4e8] to-[#9ebfc6]' },
  { slug: 'europa-point', name: 'Europa Point', descriptor: 'A southern peninsula address where daily routes matter.', tone: 'from-[#d8e2e9] to-[#a4bac6]' },
];
