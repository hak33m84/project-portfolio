import { StaticImageData } from 'next/image';

import iconCSS from '../../public/Icons/css.svg';
import iconHtml from '../../public/Icons/html.svg';
import iconJS from '../../public/Icons/js.svg';
import iconNextJS from '../../public/Icons/nextjs.png';
import iconReact from '../../public/Icons/reactjs.svg';
import iconShadcn from '../../public/Icons/shadcn-ui.svg';
import iconTailwind from '../../public/Icons/tailwind-css.svg';
import iconTS from '../../public/Icons/ts.svg';

type Skill = {
  icon: StaticImageData;
  alt: string;
};

export const skillsData: Skill[] = [
  { icon: iconNextJS, alt: 'NextJS' },
  { icon: iconReact, alt: 'ReactJS' },
  { icon: iconShadcn, alt: 'Shadcn' },
  { icon: iconTS, alt: 'TypeScript' },
  { icon: iconJS, alt: 'JavaScript' },
  { icon: iconTailwind, alt: 'Tailwind' },
  { icon: iconCSS, alt: 'CSS' },
  { icon: iconHtml, alt: 'HTML' },
];
