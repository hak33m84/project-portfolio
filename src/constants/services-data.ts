import { StaticImageData } from 'next/image';

import IconMonitor from '../../public/Icons/icon-monitor.svg';

type Service = {
  numbering: any;
  icon: StaticImageData;
  title: string;
  description: string;
};

export const serviceData: Service[] = [
  {
    numbering: 1,
    icon: IconMonitor,
    title: 'Custom Website Development',
    description:
      'Building responsive, fast, and scalable websites tailored to your needs.',
  },
  {
    numbering: 2,
    icon: IconMonitor,
    title: 'Web Performance Optimization',
    description:
      'Enhancing website speed, SEO, and overall performance for better user experience.',
  },
  {
    numbering: 3,
    icon: IconMonitor,
    title: 'Website Maintenance & Debugging',
    description:
      'Fixing bugs, improving UI, and ensuring smooth performance over time.',
  },
];
