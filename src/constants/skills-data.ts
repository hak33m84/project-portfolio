import { StaticImageData } from 'next/image';

import iconCSS from '../../public/Icons/css.svg';
import iconDocker from '../../public/Icons/docker.svg';
import iconExpressJS from '../../public/Icons/expressjs.svg';
import iconHtml from '../../public/Icons/html.svg';
import iconJS from '../../public/Icons/js.svg';
import iconMongoDB from '../../public/Icons/mongodb.svg';
import iconReact from '../../public/Icons/reactjs.svg';
import iconTS from '../../public/Icons/ts.svg';

type Skill = {
  icon: StaticImageData;
  alt: string;
};

export const skillsData: Skill[] = [
  { icon: iconJS, alt: 'JavaScript' },
  { icon: iconCSS, alt: 'CSS' },
  { icon: iconHtml, alt: 'HTML' },
  { icon: iconExpressJS, alt: 'ExpressJS' },
];

export const skillsData1: Skill[] = [
  { icon: iconMongoDB, alt: 'MongoDB' },
  { icon: iconReact, alt: 'ReactJS' },
  { icon: iconTS, alt: 'TypeScript' },
  { icon: iconDocker, alt: 'Docker' },
];
