import React from 'react';

import { Section } from '@/components/layouts/section';
import PhasesExperience, {
  PhasesExperienceItem,
} from '@/components/ui/phases-experience';

import { experiencesData } from '@/constants/experiences-data';

const Experiences = () => {
  return (
    <Section title='EXPERIENCES' subtitle='PROFESIONAL WORK' id='experiences'>
      <PhasesExperience>
        {experiencesData.map((item, index) => (
          <PhasesExperienceItem key={index} index={index + 1} {...item} />
        ))}
      </PhasesExperience>
    </Section>
  );
};

export default Experiences;
