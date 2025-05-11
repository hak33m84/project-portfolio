import { StaticImageData } from 'next/image';

import iconFacebook from '../../public/Icons/fb.png';
import iconInstagram from '../../public/Icons/instagram.svg';
import iconLinkedin from '../../public/Icons/linkedin.svg';

type Icon = {
  href: string;
  icon: StaticImageData;
  alt: string;
};

export const socialMediaData: Icon[] = [
  {
    href: 'https://www.facebook.com/budihakimsantoso',
    icon: iconFacebook,
    alt: 'facebook',
  },
  {
    href: 'https://www.linkedin.com/in/budi-hakim/',
    icon: iconLinkedin,
    alt: 'linkedin',
  },
  {
    href: 'https://www.instagram.com/hak33m84/',
    icon: iconInstagram,
    alt: 'instagram',
  },
];
