import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/breadcrumb').BreadCrumbPassThroughOptions}
 */
export const breadcrumb = {
  root: {
    className: classNames(
      'overflow-x-auto flex items-center flex-nowrap gap-2',
      'p-3 rounded-md border border-base-300 bg-base-100 text-base-content shadow-sm'
    ),
  },

  menu: 'm-0 p-0 list-none flex items-center flex-nowrap gap-2',

  action: {
    className: classNames(
      'inline-flex items-center gap-2 cursor-pointer select-none no-underline',
      'transition-colors duration-200 rounded-md px-2 py-1 text-base-content/80',
      'hover:bg-base-200 hover:text-base-content',
      'focus:outline-none focus:ring-2 focus:ring-primary/40'
    ),
  },

  icon: 'text-base-content/70',

  separator: {
    className: classNames(
      'mx-1 text-base-content/60',
      'flex items-center select-none'
    ),
  },
};
