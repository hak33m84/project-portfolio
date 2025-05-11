import { StaticImageData } from 'next/image';

import iconAsteric from '../../public/Icons/Vector.svg';

type Faq = {
  iconSrc: StaticImageData;
  title: string;
  description: string;
};

export const faqsData: Faq[] = [
  {
    iconSrc: iconAsteric,
    title: 'What technologies do you specialize in?',
    description:
      'I specialize in React.js, Next.js, Shadcn UI, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.',
  },
  {
    iconSrc: iconAsteric,
    title: 'Do you work on both design and development?',
    description:
      'I focus primarily on frontend development, translating UI/UX designs into responsive and interactive web experiences. However, I collaborate closely with designers to ensure a seamless user experience.',
  },
  {
    iconSrc: iconAsteric,
    title: 'Can you optimize an existing website for better performance?',
    description:
      'Yes! I can analyze, debug, and optimize websites to improve speed, accessibility, and SEO, using best practices like lazy loading, code splitting, and performance monitoring.',
  },
  {
    iconSrc: iconAsteric,
    title: 'Do you take freelance or contract-based projects?',
    description:
      'Yes! I am open to freelance, contract, and full-time opportunities, depending on the project scope and requirements. Feel free to reach out!',
  },
  {
    iconSrc: iconAsteric,
    title: 'How do you approach a new project?',
    description:
      'I start by understanding the project goals and requirements, followed by wireframing or UI implementation, then development, testing, and deployment—ensuring a smooth and efficient workflow.',
  },
  {
    iconSrc: iconAsteric,
    title: 'How can we collaborate?',
    description:
      'You can contact me via email, LinkedIn, or GitHub. I usually begin with a consultation to discuss your needs, then propose a plan to bring your vision to life. Let’s create something awesome together!',
  },
];
