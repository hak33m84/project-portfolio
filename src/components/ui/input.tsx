import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'text-md-regular bg-base-black h-7.5 w-full rounded-xl border border-neutral-800 px-4 py-2.25 outline-none md:h-12 md:rounded-2xl md:py-3.25',
        'focus:ring-[1px] focus:ring-neutral-800',
        className
      )}
      {...props}
    />
  );
}

export { Input };
