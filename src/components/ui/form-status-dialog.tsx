import Image from 'next/image';
import React from 'react';

import { Button } from './button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
  loading?: boolean;
}

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  loading,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader className='relative'>
          <Image
            src={
              variant === 'success'
                ? '/Icons/icon-form-message-success.svg'
                : '/Icons/icon-form-message-error.svg'
            }
            alt={variant === 'success' ? 'success' : 'error'}
            width={147}
            height={136}
            className='absolute top-0 left-1/2 h-27.5 -translate-x-1/2 -translate-y-1/2 md:h-34'
          />
        </DialogHeader>
        <DialogBody>
          <DialogTitle>
            {variant === 'success'
              ? 'Message Sent Successfully!'
              : 'Message not sent!'}
          </DialogTitle>
          <DialogDescription>
            {variant === 'success'
              ? 'Thank you for reaching out. I’ll get back to you as soon as possible'
              : 'Something went wrong on our end. Please try again in a moment'}
          </DialogDescription>
          <DialogClose asChild>
            <Button className='mx-auto mt-6 w-78.25 md:w-90.25'>
              {loading ? 'TRY AGAIN' : 'BACK TO HOME'}
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
