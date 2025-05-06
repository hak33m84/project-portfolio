import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'text-md-regular bg-base-black h-33.5 w-full resize-none rounded-xl border border-neutral-800 px-3 py-2 outline-none md:rounded-2xl md:px-4 md:py-2.25',
        'focus:ring-[1px] focus:ring-neutral-800',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
