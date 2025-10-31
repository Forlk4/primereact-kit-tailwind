import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/panelmenu').PanelMenuPassThroughOptions}
 */

const TRANSITIONS = {
  toggleable: {
    timeout: 500,
    classNames: {
      enter: 'max-h-0',
      enterActive:
        '!max-h-40 overflow-hidden transition-all duration-500 ease-in-out',
      exit: 'max-h-40',
      exitActive:
        '!max-h-0 overflow-hidden transition-all duration-500 ease-in',
    },
  },
};

export const panelmenu = {
  root: 'w-full md:w-[25rem]',
  panel: 'mb-1',
  header: {
    className: classNames(
      'outline-none',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_theme(colors.primary/40)]'
    ),
  },
  headercontent: {
    className: classNames(
      'border border-solid border-base-300 text-base-content bg-base-200 rounded-md transition-shadow duration-200',
      'hover:bg-base-300 hover:text-base-content'
    ),
  },
  headeraction: {
    className: classNames(
      'flex items-center select-none cursor-pointer relative no-underline',
      'text-base-content p-5 font-bold'
    ),
  },
  submenuicon: 'mr-2 text-base-content/80',
  headericon: 'mr-2 text-base-content/80',
  menucontent:
    'py-1 border border-t-0 border-base-300 bg-base-100 text-base-content rounded-t-none rounded-br-md rounded-bl-md',
  menu: {
    className: classNames('outline-none', 'm-0 p-0 list-none'),
  },
  menuitem: ({ context }) => ({
    className: classNames(
      'text-base-content transition-shadow duration-200 border-none rounded-none',
      'hover:bg-base-200 hover:text-base-content',
      {
        'bg-base-300 text-base-content': context.focused,
      }
    ),
  }),
  action: {
    className: classNames(
      'text-base-content py-3 px-5 select-none',
      'flex items-center cursor-pointer no-underline relative overflow-hidden'
    ),
  },
  icon: 'mr-2 text-base-content/70',
  submenu: 'p-0 pl-4 m-0 list-none',
  transition: TRANSITIONS.toggleable,
};
