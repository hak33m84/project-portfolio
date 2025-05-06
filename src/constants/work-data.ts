import { StaticImageData } from 'next/image';

import iconSrc from '../../public/Icons/Vector.svg';
import iconSrcDarken from '../../public/Icons/VectorDarken.svg';

type Work = {
  iconSrc: StaticImageData;
  list: string;
};

export const worksData: Work[] = [
  {
    iconSrc: iconSrc,
    list: 'React Expert',
  },
  {
    iconSrc: iconSrc,
    list: 'Precise Website Implementation',
  },
  {
    iconSrc: iconSrc,
    list: 'TypeScript Proficiency',
  },
  {
    iconSrc: iconSrc,
    list: 'Clean, Maintainable Code',
  },
  {
    iconSrc: iconSrc,
    list: 'Responsive Website Development',
  },
  {
    iconSrc: iconSrc,
    list: 'UI Design Proficiency (Figma)',
  },
];

export const worksData1: Work[] = [
  {
    iconSrc: iconSrcDarken,
    list: 'Basic React Knowledge',
  },
  {
    iconSrc: iconSrcDarken,
    list: 'Inconsistent Design Translation',
  },
  {
    iconSrc: iconSrcDarken,
    list: 'Little to No TypeScript Knowledge',
  },
  {
    iconSrc: iconSrcDarken,
    list: 'Unstructured Code',
  },
  {
    iconSrc: iconSrcDarken,
    list: 'Inconsistent Responsiveness',
  },
  {
    iconSrc: iconSrcDarken,
    list: 'No Design Skills',
  },
];
