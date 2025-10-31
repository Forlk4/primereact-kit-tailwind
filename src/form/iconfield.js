import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/iconfield').IconFieldPassThroughOptions
 */

export const iconfield = {
  root: {
    className: classNames('relative'),
  },
};

/**
 * @type {import('primereact/inputicon').InputIconPassThroughOptions
 */

export const inputicon = {
  root: ({ context }) => ({
    className: classNames('absolute top-1/2 -mt-2 text-base-content/80', {
      'left-2': context.iconPosition === 'left',
      'right-2': context.iconPosition === 'right',
    }),
  }),
};
