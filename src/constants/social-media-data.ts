import { StaticImageData } from 'next/image';

import iconDribble from '../../public/Icons/dribble.svg';
import iconInstagram from '../../public/Icons/instagram.svg';
import iconLinkedin from '../../public/Icons/linkedin.svg';

type Icon = {
  href: string;
  icon: StaticImageData;
  alt: string;
};

export const socialMediaData: Icon[] = [
  { href: 'https://www.dribbble.com', icon: iconDribble, alt: 'dribble' },
  { href: 'https://www.instagram.com', icon: iconInstagram, alt: 'instagram' },
  { href: 'https://www.linkedin.com', icon: iconLinkedin, alt: 'linkedin' },
];
