import { StaticImageData } from 'next/image';

import iconTrello from '../../public/Icons/Company-trello.svg';
import iconUpwork from '../../public/Icons/Company-upwork.svg';
import iconZapier from '../../public/Icons/Company-zapier.svg';
import iconZoom from '../../public/Icons/Company-zoom.svg';

type Experience = {
  period: string;
  title: string;
  icon: StaticImageData;
  alt: string;
  description: string;
};

export const experiencesData: Experience[] = [
  {
    period: '2020 - 2022',
    title: 'Frontend Developer',
    icon: iconUpwork,
    alt: 'Upwork',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
  {
    period: '2020 - 2022',
    title: 'Frontend Developer',
    icon: iconTrello,
    alt: 'Trello',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
  {
    period: '2020 - 2022',
    title: 'Frontend Developer',
    icon: iconZoom,
    alt: 'Zoom',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
  {
    period: '2020 - 2022',
    title: 'Frontend Developer',
    icon: iconZapier,
    alt: 'Zapier',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
];
