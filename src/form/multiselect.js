import { classNames } from '@/utils/cn';

const TRANSITIONS = {
  overlay: {
    timeout: 150,
    classNames: {
      enter: 'opacity-0 scale-75',
      enterActive:
        'opacity-100 !scale-100 transition-transform transition-opacity duration-150 ease-in',
      exit: 'opacity-100',
      exitActive: '!opacity-0 transition-opacity duration-150 ease-linear',
    },
  },
};

/**
 * @type {import('primereact/multiselect').MultiSelectPassThroughOptions}
 */
export const multiselect = {
  root: ({ props }) => ({
    className: classNames(
      'inline-flex cursor-pointer select-none w-full md:w-80',
      'bg-base-100 border border-base-300 transition-colors duration-200 ease-in-out rounded-md',
      {
        'opacity-60 select-none pointer-events-none cursor-default':
          props.disabled,
      }
    ),
  }),
  labelContainer: 'overflow-hidden flex flex-auto cursor-pointer',
  label: ({ props }) => ({
    className: classNames(
      'block overflow-hidden whitespace-nowrap overflow-ellipsis cursor-pointer',
      'text-base-content/80 p-3 transition duration-200',
      {
        '!p-3':
          props.display !== 'chip' &&
          (props.value == null || props.value == undefined),
        '!py-1.5 px-3': props.display === 'chip' && props.value !== null,
      }
    ),
  }),
  token: {
    className: classNames(
      'py-1 px-2 mr-2 rounded-full inline-flex items-center cursor-default',
      'bg-base-300 text-base-content/80'
    ),
  },
  removeTokenIcon: 'ml-2',
  trigger: {
    className: classNames(
      'flex items-center justify-center shrink-0 w-12 rounded-tr-lg rounded-br-lg',
      'bg-transparent text-base-content/70'
    ),
  },
  panel: {
    className: classNames(
      'bg-base-100 text-base-content border-0 rounded-md shadow-lg'
    ),
  },
  header: {
    className: classNames(
      'p-3 border-b border-base-300 text-base-content bg-base-200 rounded-t-lg',
      'flex items-center justify-between'
    ),
  },
  headerCheckboxContainer:
    'inline-flex cursor-pointer select-none align-bottom relative mr-2 w-6 h-6',
  headerCheckbox: {
    root: ({ props }) => ({
      className: classNames(
        'flex items-center justify-center border-2 w-6 h-6 rounded-lg transition-colors duration-200',
        'hover:border-primary focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-primary/40',
        {
          'border-base-300 bg-base-100': !props?.checked,
          'border-primary bg-primary': props?.checked,
        }
      ),
    }),
  },
  headerCheckboxIcon:
    'w-4 h-4 transition-all duration-200 text-base-100 text-base',
  closeButton: {
    className: classNames(
      'flex items-center justify-center w-8 h-8 text-base-content/70 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
      'hover:text-base-content hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary/40'
    ),
  },
  closeIcon: 'w-4 h-4 inline-block',
  wrapper: classNames(
    'max-h-[200px] overflow-auto bg-base-100 text-base-content border-0 rounded-md shadow-lg'
  ),
  list: 'py-3 list-none m-0',
  item: ({ context }) => ({
    className: classNames(
      'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
      'm-0 p-3 border-0 transition-shadow duration-200 rounded-none',
      {
        'text-base-content/80 hover:text-base-content hover:bg-base-200':
          !context.focused && !context.selected,
        'bg-base-300 text-base-content hover:bg-base-200':
          context.focused && !context.selected,
        'bg-primary/20 text-primary-content':
          context.focused && context.selected,
        'bg-primary/10 text-primary-content':
          !context.focused && context.selected,
      }
    ),
  }),
  checkboxContainer:
    'inline-flex cursor-pointer select-none align-bottom relative mr-2 w-6 h-6',
  checkbox: ({ context }) => ({
    className: classNames(
      'flex items-center justify-center border-2 w-6 h-6 rounded-lg transition-colors duration-200',
      'hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40',
      {
        'border-base-300 bg-base-100': !context.selected,
        'border-primary bg-primary': context.selected,
      }
    ),
  }),
  checkboxIcon: 'w-4 h-4 transition-all duration-200 text-base-100 text-base',
  itemGroup: classNames(
    'm-0 p-3 font-bold text-base-content bg-base-100 cursor-auto'
  ),
  filterContainer: 'relative',
  filterInput: {
    root: {
      className: classNames(
        'pr-7 -mr-7 w-full font-sans text-base text-base-content bg-base-100 py-3 px-3 border border-base-300 transition duration-200 rounded-lg appearance-none',
        'hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40'
      ),
    },
  },
  filterIcon: '-mt-2 absolute top-1/2',
  clearIcon: 'text-base-content/60 right-12 -mt-2 absolute top-1/2',
  transition: TRANSITIONS.overlay,
};
