'use client';

import { Icon } from '@iconify/react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';

const Navbar = () => {
  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12,13,13,0)', 'rgba(12,13,13,0.5)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );
  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur }}
      className='fixed top-0 z-50 w-full'
    >
      <div className='flex-between h-20 max-w-312 pr-10'>
        <div className='flex-start gap-2.25 md:w-157.75 md:gap-4'>
          <Image
            src='/Icons/Line-logo.svg'
            alt='Logo'
            width={40}
            height={1}
            className='w-6 md:w-10'
          />
          <p className='text-primary-200 text-md-bold md:text-xl-bold shrink-0'>
            Budi Hakim.
          </p>
        </div>

        <nav className='hidden lg:block'>
          <ul className='flex-start gap-4'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link href={data.href} className='text-md-regular p-4'>
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Icon
              icon='heroicons-outline:menu-alt-3'
              width={24}
              height={24}
              className='shrink-0 cursor-pointer lg:hidden'
            />
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Menu</SheetTitle>

            <nav className='mt-4'>
              <ul className='ml-4'>
                {navigationData.map((data) => (
                  <li key={data.label} className='text-md-regular py-4'>
                    <SheetClose asChild>
                      <Link href={data.href}>{data.label}</Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
