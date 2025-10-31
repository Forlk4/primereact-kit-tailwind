import { classNames } from '@/utils/cn';
import { TRANSITIONS } from '../transition';

/**
 * @type {import('primereact/cascadeselect').CascadeSelectPassThroughOptions}
 */
export const cascadeselect = {
  root: ({ props }) => ({
    className: classNames(
      'inline-flex cursor-pointer select-none relative',
      'bg-base-100 border border-base-content transition duration-200 ease-in-out rounded-lg',
      {
        'opacity-60 select-none pointer-events-none cursor-default':
          props.disabled,
      }
    ),
  }),

  label: {
    className: classNames(
      'block whitespace-nowrap overflow-hidden flex flex-1 w-1 text-overflow-ellipsis cursor-pointer',
      'bg-transparent border-0 p-3 text-base-content appearance-none rounded-md'
    ),
  },

  dropdownButton: {
    className: classNames(
      'flex items-center justify-center shrink-0',
      'bg-transparent text-base-content/80 w-[3rem] rounded-tr-md rounded-br-md hover:text-primary hover:bg-base-200 transition-colors duration-200'
    ),
  },

  panel: {
    className: classNames(
      'absolute py-3 bg-base-100 border-0 shadow-md rounded-lg'
    ),
  },

  list: {
    className: 'm-0 sm:p-0 list-none',
  },

  sublist: {
    className: classNames(
      'block absolute left-full top-0',
      'min-w-full z-10 py-3 bg-base-100 border-0 shadow-md rounded-lg'
    ),
  },

  item: ({ state }) => ({
    className: classNames(
      'cursor-pointer font-normal whitespace-nowrap',
      'm-0 border-0 bg-transparent transition-shadow rounded-none',
      {
        'text-base-content hover:text-base-content hover:bg-base-200':
          !state.selected,
        'bg-primary/30 text-primary-content hover:bg-primary/40':
          state.selected,
      }
    ),
  }),

  content: {
    className: classNames(
      'flex items-center overflow-hidden relative',
      'py-3 px-5'
    ),
  },

  optionGroupIcon: { className: 'ml-auto' },
  transition: TRANSITIONS.overlay,
};
