import React from 'react';

import { cn } from '@/lib/utils';

type LineAndCircleProps = {
  index: number;
  isLargeIsh: boolean;
};

const LineAndCircle: React.FC<LineAndCircleProps> = ({ index }) => {
  return (
    <div
      className={cn(
        'group relative mb-4 last:mb-0 [&:nth-last-child(2)]:mb-0',
        '[&:nth-last-child(2)>.line-decoration]:h-0'
      )}
    >
      {/* line decoration */}
      <div className='line-decoration absolute left-1/2 h-[calc(100%+1rem)] w-0.25 -translate-x-1/2 bg-neutral-800 group-first:top-1/2 md:top-1/2 md:h-[calc(100%)]' />

      {/* index circle */}
      <span className='flex-center bg-base-black text-primary-200 md:text-md-bold text-sm-bold absolute inset-x-0 top-1/2 aspect-square -translate-y-1/2 rounded-full border border-neutral-800'>
        {index}
      </span>
    </div>
  );
};

export default LineAndCircle;
