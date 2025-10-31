import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/image').ImagePassThroughOptions}
 */
export const image = {
  root: 'relative inline-block',
  button: {
    className: classNames(
      'absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300',
      'bg-transparent text-base-100',
      'hover:opacity-100 hover:cursor-pointer hover:bg-base-content hover:bg-opacity-50'
    ),
  },
  mask: {
    className: classNames(
      'fixed top-0 left-0 w-full h-full',
      'flex items-center justify-center',
      'bg-base-content bg-opacity-90'
    ),
  },
  toolbar: {
    className: classNames('absolute top-0 right-0 z-10 flex', 'p-4'),
  },
  rotaterightbutton: {
    className: classNames(
      'flex justify-center items-center',
      'text-base-100 bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
      'hover:text-base-100 hover:bg-base-100/10',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-info)]'
    ),
  },
  rotaterighticon: 'w-6 h-6',
  rotateleftbutton: {
    className: classNames(
      'flex justify-center items-center',
      'text-base-100 bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
      'hover:text-base-100 hover:bg-base-100/10',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-info)]'
    ),
  },
  rotatelefticon: 'w-6 h-6',
  zoomoutbutton: {
    className: classNames(
      'flex justify-center items-center',
      'text-base-100 bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
      'hover:text-base-100 hover:bg-base-100/10',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-info)]'
    ),
  },
  zoomouticon: 'w-6 h-6',
  zoominbutton: {
    className: classNames(
      'flex justify-center items-center',
      'text-base-100 bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
      'hover:text-base-100 hover:bg-base-100/10',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-info)]'
    ),
  },
  zoominicon: 'w-6 h-6',
  closebutton: {
    className: classNames(
      'flex justify-center items-center',
      'text-base-100 bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
      'hover:text-base-100 hover:bg-base-100/10',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-info)]'
    ),
  },
  closeicon: 'w-6 h-6',
  transition: {
    enterFromClass: 'opacity-0 scale-75',
    enterActiveClass: 'transition-all duration-150 ease-in-out',
    leaveActiveClass: 'transition-all duration-150 ease-in',
    leaveToClass: 'opacity-0 scale-75',
  },
};
