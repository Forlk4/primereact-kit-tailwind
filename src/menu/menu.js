import { classNames } from '@/utils/cn';
import { TRANSITIONS } from '../transition';

/**
 * @type {import('primereact/menu').MenuPassThroughOptions}
 */

export const menu = {
  root: classNames(
    'w-48 py-1 rounded-md border border-base-300 bg-base-100 text-base-content shadow-md'
  ),

  menu: {
    className: classNames('m-0 p-0 list-none outline-none'),
  },

  content: ({ state }) => ({
    className: classNames(
      'transition-colors duration-200 rounded-none',
      'hover:bg-base-200 hover:text-base-content',
      {
        'bg-base-200 text-base-content/90': state.focused,
      }
    ),
  }),

  action: {
    className: classNames(
      'flex items-center cursor-pointer no-underline relative overflow-hidden select-none py-3 px-5 text-base-content/80'
    ),
  },

  menuitem: {
    className: classNames('hover:bg-base-200 hover:text-base-content'),
  },

  icon: 'mr-2 text-base-content/70',

  submenuheader: classNames(
    'm-0 p-3 font-bold bg-base-100 text-base-content rounded-tl-none rounded-tr-none'
  ),

  separator: 'border-t border-base-300 my-1',

  transition: TRANSITIONS.overlay,
};
