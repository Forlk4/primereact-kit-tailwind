import { classNames } from '@/utils/cn';
import { TRANSITIONS } from '../transition';

/**
 * @type {import('primereact/confirmpopup').ConfirmPopupPassThroughOptions}
 */
export const confirmpopup = {
  root: {
    className: classNames(
      'bg-base-100 text-base-content border-0 rounded-md shadow-lg',
      'z-40 transform origin-center',
      'mt-3 absolute left-0 top-0',
      'before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-6',
      'before:border-x-[0.75rem] before:border-b-[0.75rem] before:border-t-0 before:border-b-base-100'
    ),
  },
  content: 'p-5 items-center flex',
  icon: 'text-2xl',
  message: 'ml-4',
  footer: 'text-right px-5 py-5 pt-0',
  transition: TRANSITIONS.overlay,
};
