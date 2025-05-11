import { StaticImageData } from 'next/image';

import iconTrello from '../../public/Icons/Company-trello.svg';
import iconUpwork from '../../public/Icons/Company-upwork.svg';
import iconZapier from '../../public/Icons/Company-zapier.svg';
import iconZoom from '../../public/Icons/Company-zoom.svg';
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
    profileName: 'Thom Haye',
    profileOccupation: 'Project Manager',
    iconSrc: iconTrello,
    rating: iconStarGold,
    description:
      '“Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!”',
  },
  {
    profileName: 'Emily Carter',
    profileOccupation: 'Head of Product',
    iconSrc: iconUpwork,
    rating: iconStarGold,
    description:
      '“An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!”',
  },
  {
    profileName: 'Sarah Lee',
    profileOccupation: 'Engineering Manager',
    iconSrc: iconZapier,
    rating: iconStarGold,
    description:
      '“An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!”',
  },
  {
    profileName: 'Michael Brown',
    profileOccupation: 'Lead Developer',
    iconSrc: iconZoom,
    rating: iconStarGold,
    description:
      '“A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!”',
  },
  {
    profileName: 'Thom Haye',
    profileOccupation: 'Project Manager',
    iconSrc: iconTrello,
    rating: iconStarGold,
    description:
      '“Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!”',
  },
  {
    profileName: 'Emily Carter',
    profileOccupation: 'Head of Product',
    iconSrc: iconUpwork,
    rating: iconStarGold,
    description:
      '“An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!”',
  },
  {
    profileName: 'Sarah Lee',
    profileOccupation: 'Engineering Manager',
    iconSrc: iconZapier,
    rating: iconStarGold,
    description:
      '“An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!”',
  },
  {
    profileName: 'Michael Brown',
    profileOccupation: 'Lead Developer',
    iconSrc: iconZoom,
    rating: iconStarGold,
    description:
      '“A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!”',
  },
];
