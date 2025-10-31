import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/tabmenu').TabMenuPassThroughOptions}
 */
export const tabmenu = {
  root: 'overflow-x-auto',
  menu: {
    className: classNames(
      'flex m-0 p-0 list-none flex-nowrap',
      'bg-base-100 border-solid border-base-300 border-b-2',
      'outline-none no-underline text-base list-none'
    ),
  },
  menuitem: 'mr-0',
  action: ({ context, parent }) => ({
    className: classNames(
      'cursor-pointer select-none flex items-center relative no-underline overflow-hidden',
      'border-b-2 p-5 font-bold rounded-t-lg',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)]',
      {
        'border-base-300 bg-base-100 text-base-content hover:bg-base-200 hover:border-base-content/40':
          parent.state.activeIndex !== context.index,
        'bg-base-100 border-primary text-primary':
          parent.state.activeIndex === context.index,
      }
    ),
    style: { top: '2px' },
  }),
  icon: 'mr-2',
};
