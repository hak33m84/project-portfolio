import { StaticImageData } from 'next/image';

import project1 from '../../public/Images/work-1.jpg';
import project2 from '../../public/Images/work-2.jpg';
import project3 from '../../public/Images/work-3.jpg';
import project4 from '../../public/Images/work-4.jpg';
import project5 from '../../public/Images/work-5.jpg';
import project6 from '../../public/Images/work-6.jpg';

type Project = {
  imageSrc: StaticImageData;
  name: string;
  description: string;
};

export const projectsData: Project[] = [
  {
    imageSrc: project1,
    name: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    imageSrc: project2,
    name: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    imageSrc: project3,
    name: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    imageSrc: project4,
    name: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    imageSrc: project5,
    name: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    imageSrc: project6,
    name: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
];
