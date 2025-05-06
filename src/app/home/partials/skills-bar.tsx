'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { skillsData } from '@/constants/skills-bar-data';

const SkillsBar = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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
  const barVariants = {
    hidden: { width: 0, opacity: 0 },
    show: {
      width: `${percentage}%`,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  };

  return (
    <div className='flex flex-row items-center gap-4 md:gap-6'>
      <div className='relative h-10 w-full overflow-hidden rounded-xl bg-transparent md:h-16 md:rounded-3xl'>
        <motion.div
          variants={barVariants}
          className='bg-primary-300 h-full rounded-xl md:rounded-3xl'
        />
        <div className='absolute inset-0 flex items-center justify-between px-4'>
          <p className='text-sm-semiboldmd:text-xl-semibold text-neutral-25'>
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
