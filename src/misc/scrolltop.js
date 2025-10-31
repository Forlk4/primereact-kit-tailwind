import { classNames } from '@/utils/cn';
/**
 * @type {import('primereact/scrolltop').ScrollTopPassThroughOptions}
 */
export const scrolltop = {
  root: ({ props }) => ({
    className: classNames(
      'fixed bottom-20 right-20 flex items-center justify-center',
      'ml-auto',
      {
        '!bg-primary hover:bg-primary-focus text-primary-content rounded-md h-8 w-8':
          props.target == 'parent',
        '!bg-base-content hover:bg-base-300 h-12 w-12 rounded-full text-base-100':
          props.target !== 'parent',
      }
    ),
  }),
  transition: {
    enterFromClass: 'opacity-0',
    enterActiveClass: 'transition-opacity duration-150',
    leaveActiveClass: 'transition-opacity duration-150',
    leaveToClass: 'opacity-0',
  },
};
