import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      className='custom-container flex flex-wrap items-center gap-10 md:gap-15'
      id='hero'
    >
      <div className='flex-[5.9] basis-80'>
        <div className='flex-start gap-2 md:gap-4'>
          <Image
            src='/Icons/Line-hero.svg'
            alt='line-hero'
            width={21}
            height={1}
            className='w-5.25 md:w-28.5'
          />
          <p className='text-md-medium md:text-xl-medium text-neutral-25'>
            Hi, I am Edwin Anderson Frontend Developer
          </p>
        </div>
        <h1 className='display-lg-extrabold md:display-3xl-extrabold'>
          BUILDING FAST & <span className='text-primary-200'>INTERACTIVE</span>{' '}
          WEB EXPERIENCES.
        </h1>
        <p className='text-lg-medium md:text-xl-medium text-neutral-400'>
          Bridging creativity and functionality to deliver stunning,
          user-friendly web applications
        </p>
        <Button asChild className='mt-10 w-full md:mt-12 md:w-75'>
          <Link href='#contact'>HIRE ME</Link>
        </Button>
      </div>

      <div
        className='flex-[4.1] basis-80'
        style={{ height: 'clamp(32.06rem, 60.68vw, 54.63rem);' }}
      >
        <Image
          src='/Images/man-hero.png'
          alt='hero'
          width={658}
          height={872}
          className='top-0 right-32 z-[-1] w-full object-cover'
        />
      </div>
    </section>
  );
};

export default Hero;
