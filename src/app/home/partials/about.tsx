import Image from 'next/image';
import React from 'react';

import DecorationBox from '@/components/layouts/decorationBox';
import { Section } from '@/components/layouts/section';

const About = () => {
  return (
    <Section
      title='ABOUT ME'
      subtitle={
        <>
          CRAFTING SEAMLESS <br />
          <span className='text-primary-200'>HIGH-PERFORMANCE WEB</span> <br />
          EXPERIENCES
        </>
      }
      id='about'
    >
      <p className='text-md-medium md:text-xl-medium mx-auto text-center text-neutral-400 max-md:mb-10'>
        I love turning designs into interactive, high-performance websites. With
        a keen eye for detail and a deep understanding of frontend technologies,
        I create smooth and visually appealing user experiences.
      </p>

      <div className='relative flex-wrap max-md:mb-50 max-md:flex'>
        <DecorationBox className='absolute -bottom-65 -left-10 z-10 h-[4.3rem] w-[6.45rem] rotate-90 md:top-0 md:-left-42 md:h-[5.75rem] md:w-[8.625rem]' />

        <Image
          src='/Images/web-1.jpg'
          alt='web-1'
          width={238}
          height={178}
          className='absolute -z-5 h-31.75 w-42.5 max-md:left-4 md:-top-112.5 md:left-32.5 md:h-44.5 md:w-59.5'
        />
        <Image
          src='/Images/web-3.jpg'
          alt='web-3'
          width={250}
          height={187}
          className='absolute -z-10 h-24.75 w-33.5 max-md:top-11.25 max-md:right-2.75 md:-top-104 md:right-15 md:h-46.75 md:w-62.5'
        />
        <Image
          src='/Images/web-2.jpg'
          alt='web-2'
          width={117}
          height={88}
          className='absolute z-10 h-25 w-33 max-md:top-41 max-md:left-30 md:-top-43 md:right-82 md:h-22 md:w-29.25'
        />
      </div>
    </Section>
  );
};

export default About;
