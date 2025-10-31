import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/contextmenu').ContextMenuPassThroughOptions}
 */
export const contextmenu = {
  root: 'py-1 bg-base-100 text-base-content border-none shadow-md rounded-lg w-52',
  menu: {
    className: classNames('m-0 p-0 list-none', 'outline-none'),
  },
  menuitem: 'relative',
  content: ({ context }) => ({
    className: classNames(
      'transition-shadow duration-200 rounded-none',
      'hover:text-base-content hover:bg-base-200',
      {
        'text-base-content': !context.focused && !context.active,
        'bg-base-300 text-base-content': context.focused && !context.active,
        'bg-primary text-primary-content': context.focused && context.active,
        'bg-primary/10 text-primary': !context.focused && context.active,
      }
    ),
  }),
  action: {
    className: classNames(
      'cursor-pointer flex items-center no-underline overflow-hidden relative',
      'text-base-content py-3 px-5 select-none'
    ),
  },
  icon: 'text-base-content/80 mr-2',
  label: 'text-base-content/80',
  transition: {
    timeout: { enter: 250 },
    classNames: {
      enter: 'opacity-0',
      enterActive: '!opacity-100 transition-opacity duration-250',
    },
  },
};
