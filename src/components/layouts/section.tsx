import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  title: string;
  subtitle: React.ReactNode;
  id?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
}) => {
  return (
    <div className='custom-container relative py-10 md:py-20' id={id}>
      <div className='text-center'>
        <p className='text-md-medium md:text-lg-medium text-primary-200 mb-2'>
          {title}
        </p>
        <h2 className='display-md-extrabold md:display-2xl-extrabold text-neutral-25'>
          {subtitle}
        </h2>
      </div>
      <div className='mt-6 md:mt-16'>{children}</div>
    </div>
  );
};
