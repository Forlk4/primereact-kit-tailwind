import { classNames } from '@/utils/cn';

const TRANSITIONS = {
  overlay: {
    enterFromClass: 'opacity-0 scale-75',
    enterActiveClass:
      'transition-transform transition-opacity duration-150 ease-in',
    leaveActiveClass: 'transition-opacity duration-150 ease-linear',
    leaveToClass: 'opacity-0',
  },
};

/**
 * @type {import('primereact/dropdown').DropdownPassThroughOptions}
 */
export const dropdown = {
  root: ({ props }) => ({
    className: classNames(
      'cursor-pointer inline-flex relative select-none',
      'bg-base-100 border border-base-300 transition-colors duration-200 ease-in-out rounded-md',
      'w-full md:w-56',
      'hover:border-primary focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-primary)]',
      {
        'opacity-60 select-none pointer-events-none cursor-default':
          props.disabled,
      }
    ),
  }),

  input: ({ props }) => ({
    className: classNames(
      'cursor-pointer block flex flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap relative',
      'bg-transparent border-0 text-base-content p-3 transition duration-200 rounded appearance-none font-sans text-base',
      'focus:outline-none focus:shadow-none',
      { 'pr-7': props.showClear }
    ),
  }),

  trigger: {
    className: classNames(
      'flex items-center justify-center shrink-0',
      'bg-transparent text-base-content/70 w-12 rounded-tr-lg rounded-br-lg'
    ),
  },

  wrapper: {
    className: classNames(
      'max-h-[200px] overflow-auto',
      'bg-base-100 text-base-content border-0 rounded-md shadow-lg'
    ),
  },

  list: 'py-3 list-none m-0',

  item: ({ context }) => ({
    className: classNames(
      'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
      'm-0 p-3 border-0 transition-shadow duration-200 rounded-none',
      {
        'text-base-content hover:text-base-content hover:bg-base-200':
          !context.focused && !context.selected,
        'bg-base-300 text-base-content hover:bg-base-200':
          context.focused && !context.selected,
        'bg-primary/20 text-primary-content':
          context.focused && context.selected,
        'bg-primary/10 text-primary-content':
          !context.focused && context.selected,
        'opacity-60 select-none pointer-events-none cursor-default':
          context.disabled,
      }
    ),
  }),

  itemgroup: {
    className: classNames(
      'm-0 p-3 font-bold text-base-content bg-base-100',
      'cursor-auto'
    ),
  },

  header: {
    className: classNames(
      'p-3 border-b border-base-300 text-base-content bg-base-200 mt-0 rounded-tl-lg rounded-tr-lg'
    ),
  },

  filtercontainer: 'relative',

  filterinput: {
    className: classNames(
      'pr-7 -mr-7 w-full font-sans text-base text-base-content bg-base-100 py-3 px-3 border border-base-300 transition duration-200 rounded-lg appearance-none',
      'hover:border-primary focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-primary)]'
    ),
  },

  filtericon: '-mt-2 absolute top-1/2',

  clearicon: 'text-base-content/70 right-12 -mt-2 absolute top-1/2',

  transition: TRANSITIONS.overlay,
};
