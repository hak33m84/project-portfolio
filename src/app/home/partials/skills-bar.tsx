'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { skillsData } from '@/constants/skills-bar-data';

const SkillsBar = () => {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      className='space-y-4 md:space-y-6'
    >
      {skillsData.map((skill) => (
        <ProgressBar
          key={skill.name}
          name={skill.name}
          percentage={skill.percentage}
        />
      ))}
    </motion.div>
  );
};

export default SkillsBar;

type ProgressBarProps = {
  name: string;
  percentage: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ name, percentage }) => {
  return (
    <div className='flex flex-row items-center gap-4 md:gap-6'>
      <div className='relative h-10 w-full overflow-hidden rounded-xl md:h-16 md:rounded-3xl'>
        <motion.div
          initial={{ width: '0%' }}
          animate='show'
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{
            duration: 1.5,
            ease: [0.5, 1.4, 0.5, 1],
            delay: 0.2,
          }}
          style={{ width: '0%' }}
          className='bg-primary-300 h-full rounded-xl bg-[repeating-linear-gradient(55deg,#717680_0px,#717680_1px,#396600_1px,#396600_20px)] md:rounded-3xl'
        />
        <div className='absolute top-1/2 -z-10 h-0.25 w-full bg-neutral-800' />
        <div className='absolute inset-0 flex items-center justify-between px-4'>
          <p className='text-sm-semibold md:text-xl-semibold text-neutral-25'>
            {name}
          </p>
        </div>
      </div>
      <p className='text-sm-semiboldmd:text-xl-semibold text-neutral-25'>
        {percentage}%
      </p>
    </div>
  );
};
