import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';

import { faqsData } from '@/constants/faq-data';

const FAQ = () => {
  return (
    <Section id='faq' title='FAQ' subtitle='FREQUENTLY ASKED QUESTIONS'>
      <FaqCards>
        {faqsData.map((faq, index) => (
          <FaqCard
            key={`${faq.title}-${index}`}
            iconSrc={faq.iconSrc}
            title={faq.title}
            description={faq.description}
          />
        ))}
      </FaqCards>
    </Section>
  );
};

export default FAQ;

type FaqCardsProps = {
  children: React.ReactNode;
};

const FaqCards: React.FC<FaqCardsProps> = ({ children }) => {
  return (
    <div className='flex flex-wrap gap-8 max-md:mx-4 max-md:text-justify md:gap-20'>
      {children}
    </div>
  );
};

type FaqCardProps = {
  iconSrc: StaticImageData;
  title: string;
  description: string;
};

const FaqCard: React.FC<FaqCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className='w-90.25 md:w-138'>
      <div className='flex flex-row gap-3'>
        <Image src={iconSrc} alt={title} className='size-6 md:size-8' />
        <p className='text-lg-bold md:display-xs-bold'>{title}</p>
      </div>
      <p className='text-sm-medium md:text-md-medium mt-2 text-neutral-400 md:mt-6'>
        {description}
      </p>
    </div>
  );
};
