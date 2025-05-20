'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { Marquee } from '@/components/ui/marquee';

import { skillsData, skillsData1 } from '@/constants/skills-data';

import SkillsBar from './skills-bar';

const Skills = () => {
  return (
    <section
      className='custom-container flex flex-wrap gap-10 py-10 md:gap-14.5 md:py-20'
      id='skills'
    >
      {/*Skills*/}
      <div className='mt-16.75 flex-[4.0] basis-90'>
        <div className='flex flex-col gap-2'>
          <p className='text-md-medium md:text-lg-medium text-primary-200'>
            SKILLS
          </p>
          <h3 className='display-md-extrabold md:display-2xl-extrabold text-neutral-25'>
            SKILLS THAT BRING IDEAS TO LIFE
          </h3>

          <SkillsMarquee />
        </div>
      </div>
      <div className='flex-[6.0] basis-90'>
        <SkillsBar />
      </div>
    </section>
  );
};

const SkillsMarquee = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  return (
    <div className='relative mt-6 flex w-80 flex-wrap md:mt-14.5 md:w-110'>
      <Marquee>
        {skillsData.map((skill) => (
          <div
            key={skill.alt}
            className='flex-center bg-base-black aspect-square h-12 rounded-full border border-neutral-800 duration-500 hover:scale-125 md:h-16'
            onMouseEnter={() => setHoveredSkill(skill.alt)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <Image src={skill.icon} alt={skill.alt} className='h-1/2 w-auto' />
            {hoveredSkill === skill.alt && (
              <div className='bg-base-black text-neutral-25 text-xs-bold absolute bottom-13 left-1/2 -translate-x-1/2 transform rounded p-1'>
                {skill.alt}
              </div>
            )}
          </div>
        ))}
      </Marquee>

      <Marquee reverse>
        {skillsData1.map((skill) => (
          <div
            key={skill.alt}
            className='flex-center bg-base-black aspect-square h-12 rounded-full border border-neutral-800 duration-500 hover:scale-125 md:h-16'
            onMouseEnter={() => setHoveredSkill(skill.alt)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <Image src={skill.icon} alt={skill.alt} className='h-1/2 w-auto' />
            {hoveredSkill === skill.alt && (
              <div className='bg-base-black text-neutral-25 text-xs-bold absolute bottom-13 left-1/2 -translate-x-1/2 transform rounded p-1'>
                {skill.alt}
              </div>
            )}
          </div>
        ))}
      </Marquee>

      <div className='from-base-black absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r to-transparent' />
      <div className='from-base-black absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l to-transparent' />
    </div>
  );
};

export default Skills;
