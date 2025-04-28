import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';

import { worksData, worksData1 } from '@/constants/work-data';

const Working = () => {
  return (
    <Section title='WORKING' subtitle='WHY CHOOSE ME?' id='working'>
      <div className='flex-center mt-6 flex w-full flex-wrap gap-12 md:mt-12 md:gap-20'>
        <div className='mx-4 flex-5 basis-80 md:my-1.5'>
          <div className='flex-center flex flex-col gap-6 md:gap-8'>
            <h3 className='text-xl-bold md:display-sm-bold text-neutral-25'>
              WORKING WITH ME
            </h3>
            <Image
              src='/Images/man.png'
              alt='work-with-me'
              width={80}
              height={80}
              className='size-15 rounded-full bg-neutral-950 md:size-20'
            />
          </div>
          <nav className='flex-start mt-6 md:mt-8'>
            <ul className='flex flex-col gap-12 md:gap-16'>
              {worksData.map((work, index) => (
                <li
                  key={`${work.list}-${index}`}
                  className='text-md-bold md:text-xl-bold flex items-center gap-3'
                >
                  <Image
                    src={work.iconSrc}
                    alt={work.list}
                    width={20}
                    height={1}
                    className='size-6 items-center object-contain md:size-8'
                  />
                  <p>{work.list}</p>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='mx-4 flex-5 basis-80 md:my-1.5'>
          <div className='flex-center top-0 flex flex-col gap-6 md:gap-8'>
            <h3 className='text-xl-bold md:display-sm-bold text-neutral-25'>
              ANOTHER TALENT
            </h3>
            <Image
              src='/Images/other-man.png'
              alt='other-talent'
              width={80}
              height={80}
              className='size-15 rounded-full bg-neutral-950 md:size-20'
            />
          </div>
          <nav className='mt-6 md:mt-8'>
            <ul className='flex flex-col gap-12 md:gap-16'>
              {worksData1.map((work, index) => (
                <li
                  key={`${work.list}-${index}`}
                  className='text-md-regular md:display-xs-regular flex items-center gap-3 text-neutral-400'
                >
                  <Image
                    src={work.iconSrc}
                    alt={work.list}
                    width={20}
                    height={1}
                    className='size-6 items-center object-contain md:size-8'
                  />
                  <p>{work.list}</p>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <Button asChild className='mt-6 w-full md:mx-120 md:mt-12 md:w-60'>
        <Link href='#contact'>HIRE ME</Link>
      </Button>
    </Section>
  );
};

export default Working;
