import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/menubar').MenubarPassThroughOptions}
 */

export const menubar = {
  root: {
    className: classNames(
      'p-2 rounded-md border border-base-300 bg-base-100 text-base-content flex items-center relative'
    ),
  },

  menu: ({ state }) => ({
    className: classNames(
      'm-0 list-none outline-none sm:flex sm:items-center sm:flex-row sm:relative sm:bg-transparent sm:shadow-none sm:w-auto',
      'flex-col absolute top-full left-0 w-full border-0 shadow-md bg-base-100 rounded-md',
      {
        hidden: !state?.mobileActive,
        flex: state?.mobileActive,
      }
    ),
  }),

  menuitem: ({ props, context }) => ({
    className: classNames(
      'sm:relative sm:w-auto w-full transition-colors duration-200 rounded-md',
      {
        'text-base-content/80 bg-base-100': !context.active,
        'bg-primary text-primary-content': context.active,
      },
      {
        'hover:bg-base-200 hover:text-base-content': !context.active,
        'hover:bg-primary/80': context.active,
      }
    ),
  }),

  action: ({ context }) => ({
    className: classNames(
      'cursor-pointer flex items-center no-underline overflow-hidden relative py-3 px-5 select-none',
      {
        'pl-9 sm:pl-5': context.level === 1,
        'pl-14 sm:pl-5': context.level === 2,
      }
    ),
  }),

  icon: 'mr-2',

  submenuicon: ({ props }) => ({
    className: classNames({
      'ml-auto sm:ml-2': props.root,
      'ml-auto': !props.root,
    }),
  }),

  submenu: ({ props }) => ({
    className: classNames(
      'py-1 bg-base-100 border-0 sm:shadow-md sm:w-48 rounded-md m-0 list-none z-10',
      {
        'sm:absolute sm:left-full sm:top-0': !props.root,
      }
    ),
  }),

  separator: 'border-t border-base-300 my-1',

  button: {
    className: classNames(
      'flex sm:hidden w-8 h-8 rounded-full text-base-content/70 transition duration-200 ease-in-out',
      'cursor-pointer items-center justify-center no-underline',
      'hover:text-base-content hover:bg-base-200',
      'focus:outline-none focus:outline-offset-0 focus-visible:ring-2 focus-visible:ring-primary/50'
    ),
  },
};
