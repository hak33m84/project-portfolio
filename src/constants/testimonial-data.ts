import { StaticImageData } from 'next/image';

import iconLinkedin from '../../public/Icons/Company-linkedin.svg';
import iconWPH from '../../public/Icons/Company-wph1.svg';
import iconStarGold from '../../public/Icons/icon-star-gold.svg';

type Testimonial = {
  profileName: string;
  profileOccupation: string;
  iconSrc: StaticImageData;
  description: string;
  rating: StaticImageData;
};

export const testimonialsData: Testimonial[] = [
  {
    profileName: 'Edwin Anderson',
    profileOccupation: 'Full-stack Developer',
    iconSrc: iconWPH,
    rating: iconStarGold,
    description:
      '“An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!”',
  },
  {
    profileName: 'Muhammad Redo',
    profileOccupation: 'Account Manager',
    iconSrc: iconLinkedin,
    rating: iconStarGold,
    description:
      '“budi is detail-oriented plant supervisor. He has multi talented skills, he knows plant management, quality of product management and also that surprise me, he as web development as his job side. I recommend him as partner of your team.”',
  },
  {
    profileName: 'Henry Rivardo',
    profileOccupation: 'Software Engineer - FullStack Engineer',
    iconSrc: iconWPH,
    rating: iconStarGold,
    description:
      '“A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!”',
  },
  {
    profileName: 'Dwi Ari Hamdani',
    profileOccupation: 'FE - Project Enginner',
    iconSrc: iconLinkedin,
    rating: iconStarGold,
    description:
      '“budi is a religious man, but he is a profesional too, as a quality engineer he manage all coal quality aspect, range from scheduling, inventory and quality. he also as my team mate at our futsal club. nice person indeed”',
  },
  {
    profileName: 'Edwin Anderson',
    profileOccupation: 'Full-stack Developer',
    iconSrc: iconWPH,
    rating: iconStarGold,
    description:
      '“An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!”',
  },
  {
    profileName: 'Muhammad Redo',
    profileOccupation: 'Account Manager',
    iconSrc: iconLinkedin,
    rating: iconStarGold,
    description:
      '“budi is detail-oriented plant supervisor. He has multi talented skills, he knows plant management, quality of product management and also that surprise me, he as web development as his job side. I recommend him as partner of your team.”',
  },
  {
    profileName: 'Henry Rivardo',
    profileOccupation: 'Software Engineer - FullStack Engineer',
    iconSrc: iconWPH,
    rating: iconStarGold,
    description:
      '“A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!”',
  },
  {
    profileName: 'Dwi Ari Hamdani',
    profileOccupation: 'FE - Project Enginner',
    iconSrc: iconLinkedin,
    rating: iconStarGold,
    description:
      '“budi is a religious man, but he is a profesional too, as a quality engineer he manage all coal quality aspect, range from scheduling, inventory and quality. he also as my team mate at our futsal club. nice person indeed”',
  },
];
