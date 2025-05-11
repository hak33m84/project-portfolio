'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';

import EmptyExperience from '@/app/home/partials/empty-experience';

import LineAndCircle from './line-and-circle';

type PhasesExperienceProps = {
  children: React.ReactNode;
};

const PhasesExperience: React.FC<PhasesExperienceProps> = ({ children }) => {
  return (
    <div className='grid grid-cols-[2.5rem_auto] gap-x-4 md:grid-cols-[auto_3rem_auto] md:gap-x-16'>
      {children}
    </div>
  );
};

type PhasesExperienceItemProps = {
  index?: number;
  period: string;
  icon: StaticImageData;
  alt: string;
  title: string;
  description: string;
};

export default PhasesExperience;

export const PhasesExperienceItem: React.FC<PhasesExperienceItemProps> = ({
  index = 0,
  period,
  icon,
  alt,
  title,
  description,
}) => {
  const [isLargeIsh, setIsLargeIsh] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsLargeIsh(window.innerWidth >= 768); // md breakpoint
    };

    checkSize(); // initial check
    window.addEventListener('resize', checkSize);

    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <>
      {index % 2 !== 0 && isLargeIsh && (
        <>
          <EmptyExperience />
          <LineAndCircle index={index} isLargeIsh={isLargeIsh} />
        </>
      )}
      {!isLargeIsh && <LineAndCircle index={index} isLargeIsh={isLargeIsh} />}

      {/* right column */}
      <div className='mt-4 flex flex-col rounded-2xl border border-neutral-950 p-4 md:rounded-3xl md:p-6'>
        <div className='flex flex-col gap-2 md:flex-row md:justify-between'>
          <div className='flex flex-col'>
            <p className='text-sm-regular md:text-lg-medium text-neutral-400'>
              {period}
            </p>
            <h3 className='text-md-bold md:display-xs-bold text-neutral-25 mt-2'>
              {title}
            </h3>
          </div>
          <Image src={icon} alt={alt} className='h-8 w-19 md:h-12 md:w-28.5' />
        </div>
        <p className='text-sm-regular md:text-md-regular mt-4 text-start text-neutral-400'>
          {description}
        </p>
      </div>

      {index % 2 === 0 && isLargeIsh && (
        <>
          <LineAndCircle index={index} isLargeIsh={isLargeIsh} />
          <EmptyExperience />
        </>
      )}
    </>
  );
};
