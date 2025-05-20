import React, { ComponentPropsWithRef } from 'react';

import { cn } from '@/lib/utils';

interface MarqueeProps extends ComponentPropsWithRef<'div'> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 2,
  ...props
}) => {
  return (
    <div
      className={cn(
        'group flex [gap:var(--gap)] overflow-hidden p-4 [--duration:10s] [--gap:1.5rem]',
        className
      )}
      {...props}
    >
      {Array(repeat)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className={cn('flex shrink-0 [gap:var(--gap)]', {
              'animate-marquee flex-row': !vertical,
              'animate-marquee-vertical flex-col': vertical,
              'group-hover:[animation-play-state:paused]': pauseOnHover,
              '[animation-direction:reverse]': reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
};
