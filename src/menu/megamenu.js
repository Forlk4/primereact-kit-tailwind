import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/megamenu').MegaMenuPassThroughOptions}
 */
export const megamenu = {
  root: ({ props }) => ({
    className: classNames(
      'border border-base-300 bg-base-100 text-base-content rounded-md flex relative',
      {
        'p-2 items-center': props.orientation === 'horizontal',
        'flex-col w-48 p-0 py-1': props.orientation !== 'horizontal',
      }
    ),
  }),

  menu: {
    className: classNames(
      'm-0 list-none outline-none relative',
      'flex flex-wrap items-center flex-row sm:top-auto sm:left-auto sm:bg-transparent sm:shadow-none sm:w-auto'
    ),
  },

  menuitem: ({ props, context }) => ({
    className: classNames(
      'transition-colors duration-200',
      {
        'rounded-md': props.orientation === 'horizontal',
        'w-auto': props.orientation === 'horizontal',
        'w-full': props.orientation !== 'horizontal',
      },
      {
        'text-base-content/80': !context.active,
        'bg-primary text-primary-content': context.active,
      },
      'hover:bg-base-200 hover:text-base-content'
    ),
  }),

  headeraction: {
    className: classNames(
      'flex items-center cursor-pointer select-none relative no-underline overflow-hidden py-3 px-5 text-base-content/80'
    ),
  },

  action: {
    className: classNames(
      'flex items-center cursor-pointer select-none relative no-underline overflow-hidden py-3 px-5 text-base-content/80'
    ),
  },

  icon: {
    className: 'mr-2 text-base-content/70',
  },

  submenuicon: ({ props }) => ({
    className: classNames({
      'ml-2': props.orientation === 'horizontal',
      'ml-auto': props.orientation !== 'horizontal',
    }),
  }),

  panel: ({ props }) => ({
    className: classNames(
      'absolute z-10 py-1 bg-base-100 border border-base-300 rounded-md shadow-md',
      {
        'left-full top-0': props.orientation !== 'horizontal',
      }
    ),
  }),

  grid: 'flex flex-wrap',
  column: 'w-1/2',

  submenu: {
    className: classNames('m-0 list-none py-1 w-48'),
  },

  submenuheader: classNames(
    'm-0 py-3 px-5 font-semibold bg-base-100 text-base-content rounded-t-md border-b border-base-300'
  ),
};
