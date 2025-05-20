import React from 'react';

import DecorationBox from '@/components/layouts/decorationBox';
import { Section } from '@/components/layouts/section';
import PhasesExperience, {
  PhasesExperienceItem,
} from '@/components/ui/phases-experience';

import { experiencesData } from '@/constants/experiences-data';

const Experiences = () => {
  return (
    <Section title='EXPERIENCES' subtitle='PROFESIONAL WORK' id='experiences'>
      <DecorationBox className='absolute -right-4 -bottom-12 z-10 h-[4.3rem] w-[6.45rem] -rotate-90 md:-right-32 md:bottom-0 md:h-[5.75rem] md:w-[8.625rem]' />
      <PhasesExperience>
        {experiencesData.map((item, index) => (
          <PhasesExperienceItem key={index} index={index + 1} {...item} />
        ))}
      </PhasesExperience>
    </Section>
  );
};

export default Experiences;
