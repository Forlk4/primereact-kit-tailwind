import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/inputotp').InputOtpPassThroughOptions}
 */
export const inputotp = {
  root: {
    className: classNames('flex items-center gap-2'),
  },
  input: {
    root: {
      className: classNames(
        'box-border text-center w-10 h-11 p-3 rounded-lg transition-all duration-200',
        'text-base-content border border-base-300 bg-base-100',
        'hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/40 focus:outline-none'
      ),
    },
  },
};
