import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { serviceData } from '@/constants/services-data';

const formatNumbering = (num: number): string => {
  return num.toString().padStart(2, '0'); // Pads the number with leading zeros
};
const Services = () => {
  return (
    <div className='custom-container overflow-hidden py-10 md:py-30'>
      <div className='flex-between flex-wrap'>
        <div className='flex w-127.25 flex-col gap-2'>
          <p className='text-md-medium md:text-lg-medium text-primary-200'>
            SERVICES
          </p>
          <h2 className='display-md-extrabold md:display-2xl-extrabold text-neutral-25'>
            MY SERVICE EXPERTISE
          </h2>
        </div>
        <p className='md:text-xl-medium text-md-medium mt-4 w-126 items-center text-left text-neutral-400 md:text-right'>
          Creating modern, intuitive, and visually consistent web experiences
          that align with industry trends and user expectations.
        </p>
      </div>

      <ServiceCards>
        {serviceData.map((service) => (
          <ServiceCard
            key={service.title}
            numbering={service.numbering}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </ServiceCards>
    </div>
  );
};

export default Services;

type ServiceCardsProps = {
  children: React.ReactNode;
};

const ServiceCards: React.FC<ServiceCardsProps> = ({ children }) => {
  return (
    <div className='mt-6 flex flex-wrap gap-6 md:mt-16 md:gap-10'>
      {children}
    </div>
  );
};

type ServiceCardProps = {
  numbering: number;
  icon: StaticImageData;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  numbering,
  icon,
  title,
  description,
}) => {
  return (
    <div className='flex-1 basis-80 text-left'>
      <p className='text-md-semibold md:text-xl-semibold h-10.5 border-b border-neutral-800 align-text-top text-neutral-400 md:h-11.5'>
        {formatNumbering(numbering)}
      </p>
      <Image src={icon} alt={title} className='my-3 size-8 md:my-6' />
      <p className='text-xl-semibold md:display-sm-semibold text-neutral-25 mt-3 md:mt-6'>
        {title}
      </p>
      <p className='text-md-regular md:text-xl-regular mt-3 text-neutral-400 md:mt-6'>
        {description}
      </p>
    </div>
  );
};
