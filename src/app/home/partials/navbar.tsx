import { Icon } from '@iconify/react';
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
  return (
    <div className='flex-between custom-container z-50 h-20 w-full justify-between border-b border-neutral-800 max-md:px-4 max-md:py-6.25 md:px-32 md:py-3.75'>
      <div className='flex-start gap-2.25 md:w-157.75 md:gap-4'>
        <Image
          src='/Icons/Line-logo.svg'
          alt='Logo'
          width={40}
          height={1}
          className='w-6 md:w-10'
        />
        <div className='text-primary-200 text-md-bold md:text-xl-bold shrink-0'>
          Edwin Anderson.
        </div>
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
  );
};

export default Navbar;
