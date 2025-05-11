'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import DecorationBox from '@/components/layouts/decorationBox';
import { Button } from '@/components/ui/button';

import Navbar from './navbar';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 320); // Misalnya, 320px adalah batas untuk mobile
  };

  useEffect(() => {
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize); // Tambahkan event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Bersihkan event listener saat komponen unmount
    };
  }, []);

  return (
    <section
      className='custom-container relative flex flex-wrap lg:h-218'
      id='hero'
    >
      <div className='absolute top-16 left-1/2 z-10 hidden h-0.25 w-312 -translate-x-1/2 bg-neutral-800 lg:block' />
      <div className='absolute top-1/2 left-1/2 z-10 hidden h-0.25 w-218.75 -translate-x-1/2 rotate-90 items-center bg-neutral-800 lg:block' />
      <div className='absolute top-1/2 -left-1/2 z-10 hidden h-0.25 w-218.5 translate-x-1/2 rotate-90 bg-neutral-800 lg:block' />
      <div className='absolute bottom-0 left-1/2 z-10 hidden h-0.25 w-312 -translate-x-1/2 bg-neutral-800 lg:block' />
      <Navbar />
      <DecorationBox className='absolute bottom-[20%] left-0 z-10 h-[4.3rem] w-[6.45rem] md:bottom-0 md:-left-32 md:h-[5.75rem] md:w-[8.625rem]' />

      {/* Hero Content */}
      <div
        className='z-20 flex-[5.9] basis-110 pb-10 md:p-0'
        style={{
          width: 'clamp(22.5rem, 64.66vw, 50.4375rem)',
          marginTop: 'clamp(7.5rem, 17.71vw, 13.81rem)',
        }}
      >
        <div className='flex-start flex gap-2 md:gap-4'>
          <Image
            src={isMobile ? '/Icons/Line-hero.svg' : '/Icons/Line-logo.svg'}
            alt='line-hero'
            width={114}
            height={1}
            className='w-5.25 md:w-28.5'
          />
          <p className='text-md-medium md:text-xl-medium text-neutral-25'>
            Hi, I am Hakim Frontend Developer
          </p>
        </div>
        <h1 className='display-lg-extrabold md:display-3xl-extrabold md:text-[80px]'>
          BUILDING FAST & <span className='text-primary-200'>INTERACTIVE</span>{' '}
          WEB EXPERIENCES
        </h1>
        <p className='text-lg-medium md:text-xl-medium text-neutral-400 md:w-149.25'>
          Bridging creativity and functionality to deliver stunning,
          user-friendly web applications
        </p>
        <Button asChild className='mt-10 w-full md:mt-15 md:w-fit md:px-29'>
          <Link
            href='#contact'
            className='text-sm-bold md:text-md-bold text-neutral-950'
          >
            HIRE ME
          </Link>
        </Button>
      </div>

      {/*Hero Profile*/}
      <div className='top-0 right-0 mt-0 mb-10 flex-[4.1] basis-110 md:absolute md:mt-0'>
        <div
          className='relative mx-auto overflow-hidden'
          style={{
            width: 'clamp(20.00rem, 52.88vw, 41.25rem)',
            height: 'clamp(29.13rem, 70.63vw, 55.06rem)',
          }}
        >
          <div className='bg-primary-200 pointer-events-none absolute top-0 right-0 h-full w-1/2' />
          <Image
            src='/Images/man-contact12.png'
            alt='hero'
            width={660}
            height={850}
            className='absolute top-3 -right-1 mx-auto pr-0 mix-blend-luminosity grayscale md:-right-3'
          />
          <div className='bg-primary-200 absolute inset-y-0 top-0 right-0 w-1/2 mix-blend-color' />
          <div className='from-base-black absolute inset-0 bg-linear-to-t to-transparent' />
          <div className='from-base-black absolute inset-x-0 bottom-0 h-[80%] bg-linear-to-t to-transparent' />

          {/*rating*/}
          <div className='bg-base-black absolute top-81 right-0 z-10 flex w-full flex-col gap-2 rounded-3xl border border-neutral-800 p-5 text-left md:top-153 md:right-39.5 md:w-79'>
            <h3 className='display-xs-bold md:display-xl-bold text-neutral-25 h-9 md:h-14'>
              5.0
            </h3>
            <div className='flex gap-1'>
              <Image
                src='/Icons/icon-star-gold.svg'
                alt='star'
                width={8}
                height={8}
                className='size-4.25 md:size-5.75'
              />
              <Image
                src='/Icons/icon-star-gold.svg'
                alt='star'
                width={8}
                height={8}
                className='size-4.25 md:size-5.75'
              />
              <Image
                src='/Icons/icon-star-gold.svg'
                alt='star'
                width={8}
                height={8}
                className='size-4.25 md:size-5.75'
              />
              <Image
                src='/Icons/icon-star-gold.svg'
                alt='star'
                width={8}
                height={8}
                className='size-4.25 md:size-5.75'
              />
              <Image
                src='/Icons/icon-star-gold.svg'
                alt='star'
                width={8}
                height={8}
                className='size-4.25 md:size-5.75'
              />
            </div>
            <p className='text-md-semibold md:text-xl-semibold text-neutral-25 h-7.5 md:h-8.5'>
              Excellent Result Oriented
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
