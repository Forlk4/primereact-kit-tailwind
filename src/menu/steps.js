import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/steps').StepsPassThroughOptions}
 */
export const steps = {
  root: 'relative',
  menu: 'p-0 m-0 list-none flex',
  menuitem: {
    className: classNames(
      'relative flex justify-center flex-1 overflow-hidden',
      'before:border-t before:border-base-300 before:w-full before:absolute before:top-1/4 before:left-0 before:-translate-y-1/2'
    ),
  },
  action: {
    className: classNames(
      'inline-flex flex-col items-center overflow-hidden',
      'transition-shadow rounded-md bg-base-100',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_theme(colors.primary/40)]'
    ),
  },
  step: {
    className: classNames(
      'flex items-center justify-center',
      'text-base-content border border-base-300 bg-base-100 w-[2rem] h-[2rem] leading-[2rem] text-sm z-10 rounded-full'
    ),
  },
  label: {
    className: classNames(
      'block whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full',
      'mt-2 text-base-content/70'
    ),
  },
  icon: 'text-base-100',
};
