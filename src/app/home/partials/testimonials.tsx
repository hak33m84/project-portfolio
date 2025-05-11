import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel';

import { testimonialsData } from '@/constants/testimonial-data';
import { chunkArray } from '@/lib/utils';

const Testimonials = () => {
  const chunkedData = chunkArray(testimonialsData, 2);
  return (
    <Section
      title='TESTIMONIALS'
      subtitle='PEOPLE SAYS ABOUT ME'
      id='testimonials'
    >
      <Carousel>
        <CarouselContent>
          {chunkedData.map((group, groupIndex) => (
            <CarouselItem key={groupIndex}>
              <div key={groupIndex} className='flex flex-wrap gap-4'>
                {group.map((testi) => (
                  <TestimonialCard key={testi.profileName} {...testi} />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </Section>
  );
};

export default Testimonials;

type TestimonialCardProps = {
  profileName: string;
  profileOccupation: string;
  iconSrc: StaticImageData;
  rating: StaticImageData;
  description: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  profileName,
  profileOccupation,
  iconSrc,
  rating,
  description,
}) => {
  return (
    <div className='bg-base-black w-90.25 rounded-2xl border border-neutral-800 p-4 md:w-145 md:rounded-3xl md:p-6'>
      <div className='flex-between'>
        <div className='flex flex-col gap-1'>
          <p className='text-lg-bold text-neutral-25 md:text-xl-bold h-8'>
            {profileName}
          </p>
          <p className='text-md-regular md:text-lg-medium h-7.5 text-neutral-400'>
            {profileOccupation}
          </p>
        </div>
        <Image src={iconSrc} alt={profileName} className='items-center' />
      </div>
      <div className='mt-3 flex gap-1'>
        <Image src={rating} alt='star' />
        <Image src={rating} alt='star' />
        <Image src={rating} alt='star' />
        <Image src={rating} alt='star' />
        <Image src={rating} alt='star' />
      </div>
      <p className='text-md-medium text-neutral-25 mt-3 line-clamp-3'>
        {description}
      </p>
    </div>
  );
};
