import { StaticImageData } from 'next/image';

import iconArutmin from '../../public/Icons/arutmin.jpg';
import iconWPH from '../../public/Icons/Company-wph1.svg';
import iconHappenex from '../../public/Icons/H.png';
import iconOlShop from '../../public/Icons/olshop.svg';

type Experience = {
  period: string;
  title: string;
  icon: StaticImageData;
  alt: string;
  description: string;
};

export const experiencesData: Experience[] = [
  {
    period: '2024 - 2025',
    title: 'Frontend Developer',
    icon: iconWPH,
    alt: 'WPH',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
  {
    period: '2014 - 2025',
    title: 'Founder & Digital Enterpreneur',
    icon: iconOlShop,
    alt: 'Trello',
    description:
      'Mastered the art of digital marketing and online advertising, leveraging Google Ads, Facebook Ads, and TikTok Ads—both paid and organic—to drive traffic, optimize conversions, and scale profitability. With expertise in high-performance websites, social media growth, and data-driven marketing strategies, I have firsthand experience in what it takes to build, market, and sustain a successful online business in today’s fast-paced digital landscape.',
  },
  {
    period: '2013 - 2014',
    title: 'Logistic and Quality Manager',
    icon: iconHappenex,
    alt: 'Zoom',
    description:
      'As a target-driven Logistic & Quality Manager for a coal trading company, this professional meticulously safeguards coal quality from supplier intake through to final buyer delivery, while simultaneously orchestrating the intricate supply chain to ensure unwavering adherence to delivery schedules by suppliers, all necessitating seamless coordination with internal teams to proactively address challenges and achieve operational excellence.',
  },
  {
    period: '2020 - 2022',
    title: 'Logistic and Quality Engineer',
    icon: iconArutmin,
    alt: 'Arutmin',
    description:
      'this professional masterminds the precise scheduling of barges for coal transportation from site to customer vessels, diligently ensuring all quality requirements are met both at port and during offshore operations. This pivotal role demands close, daily collaboration with field teams, laboratory staff, and mother vessel captains to synchronize efforts, guaranteeing coal supply arrives on schedule and strictly adheres to the agreed-upon paper quality specifications.',
  },
];
