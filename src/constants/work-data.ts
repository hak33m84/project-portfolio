import { StaticImageData } from 'next/image';

import iconSrc from '../../public/Icons/Vector.svg';

type Work = {
  iconSrc: StaticImageData;
  list: string;
};

export const worksData: Work[] = [
  {
    iconSrc,
    list: 'React Expert',
  },
  {
    iconSrc,
    list: 'Precise Website Implementation',
  },
  {
    iconSrc,
    list: 'TypeScript Proficiency',
  },
  {
    iconSrc,
    list: 'Clean, Maintainable Code',
  },
  {
    iconSrc,
    list: 'Responsive Website Development',
  },
  {
    iconSrc,
    list: 'UI Design Proficiency (Figma)',
  },
];

export const worksData1: Work[] = [
  {
    iconSrc,
    list: 'Basic React Knowledge',
  },
  {
    iconSrc,
    list: 'Inconsistent Design Translation',
  },
  {
    iconSrc,
    list: 'Little to No TypeScript Knowledge',
  },
  {
    iconSrc,
    list: 'Unstructured Code',
  },
  {
    iconSrc,
    list: 'Inconsistent Responsiveness',
  },
  {
    iconSrc,
    list: 'No Design Skills',
  },
];
