import { classNames } from '@/utils/cn';
/**
 * @type {import('primereact/paginator').PaginatorPassThroughOptions}
 */
export const paginator = {
  root: {
    className: classNames(
      'flex items-center justify-center flex-wrap',
      'bg-base-100 text-base-content border-0 px-4 py-2 rounded-md'
    ),
  },

  firstpagebutton: ({ context }) => ({
    className: classNames(
      'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
      'border-0 text-base-content min-w-[3rem] h-12 m-[0.143rem] rounded-md',
      'transition duration-200',
      {
        'cursor-default pointer-events-none opacity-60': context.disabled,
        'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]':
          !context.disabled,
      }
    ),
  }),

  previouspagebutton: ({ context }) => ({
    className: classNames(
      'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
      'border-0 text-base-content min-w-[3rem] h-12 m-[0.143rem] rounded-md',
      'transition duration-200',
      {
        'cursor-default pointer-events-none opacity-60': context.disabled,
        'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]':
          !context.disabled,
      }
    ),
  }),

  nextpagebutton: ({ context }) => ({
    className: classNames(
      'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
      'border-0 text-base-content min-w-[3rem] h-12 m-[0.143rem] rounded-md',
      'transition duration-200',
      {
        'cursor-default pointer-events-none opacity-60': context.disabled,
        'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]':
          !context.disabled,
      }
    ),
  }),

  lastpagebutton: ({ context }) => ({
    className: classNames(
      'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
      'border-0 text-base-content min-w-[3rem] h-12 m-[0.143rem] rounded-md',
      'transition duration-200',
      {
        'cursor-default pointer-events-none opacity-60': context.disabled,
        'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]':
          !context.disabled,
      }
    ),
  }),

  pagebutton: ({ context }) => ({
    className: classNames(
      'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
      'border-0 text-base-content min-w-[3rem] h-12 m-[0.143rem] rounded-md',
      'transition duration-200 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
      {
        'bg-primary/10 border-primary/10 text-primary': context.active,
      }
    ),
  }),

  rowperpagedropdown: {
    root: ({ props, state }) => ({
      className: classNames(
        'inline-flex relative cursor-pointer user-none bg-base-100 border rounded-md transition duration-200 h-12 mx-2',
        {
          'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-primary':
            state.focused && !props.disabled,
          'border-base-300': !state.focused,
          'hover:border-primary': !props.disabled,
        }
      ),
    }),

    input: {
      className: classNames(
        'font-sans text-base text-base-content p-3 m-0 rounded-md appearance-none',
        'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0',
        'focus:outline-none focus:outline-offset-0'
      ),
    },

    trigger: {
      className: classNames(
        'flex items-center justify-center shrink-0 text-base-content w-12 rounded-r-md'
      ),
    },

    panel: {
      className: classNames(
        'bg-base-100 text-base-content border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]'
      ),
    },

    wrapper: 'overflow-auto',
    list: 'm-0 p-0 py-3 list-none',

    item: ({ context }) => ({
      className: classNames(
        'relative font-normal cursor-pointer whitespace-nowrap overflow-hidden',
        'm-0 py-3 px-5 border-none text-base-content rounded-none transition duration-200',
        {
          'text-primary bg-primary/10': !context.focused && context.selected,
          'bg-primary/20': context.focused && context.selected,
          'bg-base-300 text-base-content': context.focused && !context.selected,
        }
      ),
    }),
  },

  jumptopageinput: {
    root: 'inline-flex mx-2',
    input: {
      className: classNames(
        'font-sans text-base text-base-content p-3 m-0 rounded-md appearance-none',
        'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border border-base-300 pr-0',
        'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] focus:border-primary',
        'm-0 flex-auto max-w-[3rem]'
      ),
    },
  },

  jumptopagedropdown: {
    root: ({ props, state }) => ({
      className: classNames(
        'inline-flex relative cursor-pointer user-none bg-base-100 border rounded-md transition duration-200 h-12 mx-2',
        {
          'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-primary':
            state.focused && !props.disabled,
          'border-base-300': !state.focused,
          'hover:border-primary': !props.disabled,
        }
      ),
    }),

    input: {
      className: classNames(
        'font-sans text-base text-base-content p-3 m-0 rounded-md appearance-none',
        'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0',
        'focus:outline-none focus:outline-offset-0'
      ),
    },

    trigger: {
      className: classNames(
        'flex items-center justify-center shrink-0 text-base-content w-12 rounded-r-md'
      ),
    },

    panel: {
      className: classNames(
        'bg-base-100 text-base-content border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]'
      ),
    },

    wrapper: 'overflow-auto',
    list: 'm-0 p-0 py-3 list-none',

    item: ({ context }) => ({
      className: classNames(
        'relative font-normal cursor-pointer whitespace-nowrap overflow-hidden',
        'm-0 py-3 px-5 border-none text-base-content rounded-none transition duration-200',
        {
          'text-primary bg-primary/10': !context.focused && context.selected,
          'bg-primary/20': context.focused && context.selected,
          'bg-base-300 text-base-content': context.focused && !context.selected,
        }
      ),
    }),
  },
};
