import Image from 'next/image';
import React from 'react';

import { skillsData } from '@/constants/skills-data';

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
        </div>
        <div className='mt-6 flex w-66 flex-wrap gap-6 md:mt-14.5 md:w-100'>
          {skillsData.map((skill) => (
            <div
              key={skill.alt}
              className='flex-center bg-base-black aspect-square h-12 rounded-full border border-neutral-800 duration-500 hover:scale-125 md:h-16'
            >
              <Image
                src={skill.icon}
                alt={skill.alt}
                className='h-1/2 w-auto'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='flex-[6.0] basis-90'>
        <SkillsBar />
      </div>
    </section>
  );
};

export default Skills;
