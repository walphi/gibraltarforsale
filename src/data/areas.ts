export interface AreaSummary {
  slug: string;
  name: string;
  descriptor: string;
  tone: string;
  image: string;
  imageWidth: number;
  imagePosition: string;
  imageAlt: string;
  imageNote: string;
  imageCredit: string;
  imageCreditUrl: string;
  imageLicenseLabel: string;
  imageLicenseUrl?: string;
}

export const areas: AreaSummary[] = [
  {
    slug: 'south-district', name: 'South District', descriptor: 'A quieter southern setting with a distinct residential feel.',
    tone: 'from-[#dae7e1] to-[#b9d0c8]', image: '/images/editorial/gibraltar-bay-rock.webp', imageWidth: 1800, imagePosition: '50% 60%',
    imageAlt: 'Gibraltar Bay, harbour and city viewed from the Rock.', imageNote: 'A wide Gibraltar panorama, not a South District property image.',
    imageCredit: 'Giorgiomonteforti', imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Bay_of_Gibraltar_from_The_Rock_4.JPG', imageLicenseLabel: 'Public Domain',
  },
  {
    slug: 'ocean-village', name: 'Ocean Village', descriptor: 'A modern waterfront address shaped by marina life.',
    tone: 'from-[#c9e1e2] to-[#91bdc3]', image: '/images/editorial/gibraltar-ocean-village-marina.webp', imageWidth: 1800, imagePosition: '50% 54%',
    imageAlt: 'Ocean Village marina at sunset in Gibraltar.', imageNote: 'Location photograph; it does not depict a property listing.',
    imageCredit: 'Cabeza2000', imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Gibraltar_sunset_in_the_Ocean_Village_Marina.jpg', imageLicenseLabel: 'CC BY-SA 4.0', imageLicenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    slug: 'queensway-quay', name: 'Queensway Quay', descriptor: 'Marina-side living with a more sheltered waterfront character.',
    tone: 'from-[#d6e1e6] to-[#aebfc9]', image: '/images/editorial/gibraltar-ocean-village-boat.webp', imageWidth: 1350, imagePosition: '50% 68%',
    imageAlt: 'Boats moored in a Gibraltar marina.', imageNote: 'Nearby-marina context; this is not a Queensway Quay listing.',
    imageCredit: 'Paul', imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Boat,_Ocean_Village,_Gibraltar.jpg', imageLicenseLabel: 'CC BY-SA 2.0', imageLicenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
  },
  {
    slug: 'upper-town', name: 'Upper Town', descriptor: 'Older streets, elevated routes and varied building character.',
    tone: 'from-[#e5d9c6] to-[#c8b49a]', image: '/images/editorial/gibraltar-city-bay.webp', imageWidth: 1600, imagePosition: '52% 52%',
    imageAlt: 'Gibraltar city and bay viewed through tree branches from the Rock.', imageNote: 'Broad city context, not an Upper Town property or exact neighbourhood view.',
    imageCredit: 'Nathan Harig', imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Gibraltar_city_and_bay_from_the_Rock_of_Gibraltar.jpg', imageLicenseLabel: 'CC BY-SA 3.0', imageLicenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
  {
    slug: 'town-area', name: 'Town Area', descriptor: 'A central base close to everyday services and city routes.',
    tone: 'from-[#e3ded5] to-[#c7bfb2]', image: '/images/editorial/gibraltar-main-street.webp', imageWidth: 1800, imagePosition: '50% 50%',
    imageAlt: 'Pedestrians on Main Street in Gibraltar, between shops and historic façades.', imageNote: 'Main Street location photo; not a property listing.',
    imageCredit: 'Kolforn', imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Gibraltar_Main_street,_13_July_2016.JPG', imageLicenseLabel: 'CC BY 3.0', imageLicenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
  },
  {
    slug: 'westside', name: 'Westside', descriptor: 'A broad residential area with a range of apartment settings.',
    tone: 'from-[#d4ded7] to-[#aabbb2]', image: '/images/editorial/gibraltar-city-by-beach.webp', imageWidth: 1800, imagePosition: '50% 50%',
    imageAlt: 'Aerial view across Gibraltar city, harbour and coast.', imageNote: 'City-wide context; not a verified Westside home or listing.',
    imageCredit: 'Michal Mrozek / Unsplash', imageCreditUrl: 'https://unsplash.com/photos/city-by-the-beach-at-daytime-zpt4AAra2Rw', imageLicenseLabel: 'Unsplash License', imageLicenseUrl: 'https://unsplash.com/license',
  },
  {
    slug: 'eastside', name: 'Eastside', descriptor: 'A coastal-facing location with its own access considerations.',
    tone: 'from-[#d9e4e8] to-[#9ebfc6]', image: '/images/editorial/gibraltar-cliff.webp', imageWidth: 1800, imagePosition: '36% 50%',
    imageAlt: 'The Rock of Gibraltar meets the coast above the Mediterranean.', imageNote: 'Coastline context; no specific Eastside property is shown.',
    imageCredit: 'Michal Mrozek / Unsplash', imageCreditUrl: 'https://unsplash.com/photos/cliff-beside-seashore-RjJiCLfMzLU', imageLicenseLabel: 'Unsplash License', imageLicenseUrl: 'https://unsplash.com/license',
  },
  {
    slug: 'europa-point', name: 'Europa Point', descriptor: 'A southern peninsula address where daily routes matter.',
    tone: 'from-[#d8e2e9] to-[#a4bac6]', image: '/images/editorial/gibraltar-europa-point.webp', imageWidth: 1800, imagePosition: '70% 62%',
    imageAlt: 'Europa Point lighthouse on the Gibraltar coastline.', imageNote: 'Europa Point landmark photograph; not a home listing.',
    imageCredit: 'John Cummings', imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Europa_Point_Lighthouse,_Gibraltar_20.JPG', imageLicenseLabel: 'CC BY-SA 3.0', imageLicenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
];
