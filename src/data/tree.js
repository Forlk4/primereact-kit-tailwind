import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/tree').TreePassThroughOptions}
 */
export const tree = {
  root: {
    className: classNames(
      'max-w-[30rem] md:w-full',
      'border border-solid border-base-300 bg-base-100 text-base-content p-5 rounded-md'
    ),
  },

  wrapper: 'overflow-auto',
  container: 'm-0 p-0 list-none overflow-auto',
  node: 'p-1 outline-none',

  content: ({ context, props }) => ({
    className: classNames(
      'flex items-center rounded-lg transition-shadow duration-200 p-2',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(var(--p),0.3)]',
      {
        'bg-primary/10 text-primary': context.selected,
        'cursor-pointer select-none':
          props.selectionMode === 'single' ||
          props.selectionMode === 'multiple',
      }
    ),
  }),

  toggler: ({ context }) => ({
    className: classNames(
      'cursor-pointer select-none inline-flex items-center justify-center overflow-hidden relative shrink-0',
      'mr-2 w-8 h-8 border-0 bg-transparent rounded-full transition duration-200',
      'hover:border-transparent focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(var(--p),0.3)]',
      {
        'text-base-content/70 hover:bg-base-200 hover:text-base-content':
          !context.selected,
        'text-primary hover:bg-primary/10': context.selected,
        hidden: context.leaf,
      }
    ),
  }),

  checkboxcontainer: 'mr-2',

  checkbox: ({ context, props }) => ({
    className: classNames(
      'cursor-pointer inline-flex relative select-none align-bottom',
      'w-6 h-6 flex items-center justify-center border-2 rounded-lg transition-colors duration-200 text-base text-base-100',
      {
        'border-base-300 bg-base-100': !context.checked,
        'border-primary bg-primary text-base-100': context.checked,
      },
      {
        'hover:border-primary focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(var(--p),0.3)]':
          !props.disabled,
        'cursor-default opacity-60': props.disabled,
      }
    ),
  }),

  nodeicon: 'mr-2 text-base-content/70',

  subgroup: {
    className: classNames('m-0 list-none', 'p-0 pl-4'),
  },

  filtercontainer: {
    className: classNames('mb-2', 'relative block w-full'),
  },

  input: {
    className: classNames(
      'm-0 p-3 text-base w-full pr-7 font-sans text-base-content/80 bg-base-100 border border-base-300 transition-colors duration-200 appearance-none rounded-lg',
      'hover:border-primary focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(var(--p),0.3)]'
    ),
  },

  searchicon: 'absolute top-1/2 -mt-2 right-3 text-base-content/70',
};
