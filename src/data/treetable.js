import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/treetable').TreeTablePassThroughOptions}
 */
export const treetable = {
  root: ({ props }) => ({
    className: classNames('relative', {
      'flex flex-col h-full': props.scrollHeight,
    }),
  }),

  loadingoverlay: {
    className: classNames(
      'fixed w-full h-full t-0 l-0 bg-base-200/40 transition duration-200 absolute flex items-center justify-center z-2'
    ),
  },

  loadingicon: 'w-8 h-8',

  header: {
    className: classNames(
      'bg-base-200 text-base-content border border-x-0 border-t-0 border-base-300 p-4 font-bold'
    ),
  },

  scrollablewrapper: ({ props }) => ({
    className: classNames({
      'relative overflow-auto': props.scrollable,
      'overflow-x-auto': props.resizableColumns,
    }),
  }),

  wrapper: ({ props }) => ({
    className: classNames({
      'relative overflow-auto': props.scrollable,
      'overflow-x-auto': props.resizableColumns,
    }),
  }),

  footer: {
    className: classNames(
      'bg-base-200 text-base-content border border-x-0 border-t-0 border-base-300 p-4 font-bold'
    ),
  },

  table: 'border-collapse table-fixed w-full',

  thead: ({ props }) => ({
    className: classNames({
      'block sticky top-0 z-[1]': props.scrollable,
    }),
  }),

  tbody: ({ props }) => ({
    className: classNames({
      block: props.scrollable,
    }),
  }),

  tfoot: ({ props }) => ({
    className: classNames({
      block: props.scrollable,
    }),
  }),

  headerrow: ({ props }) => ({
    className: classNames({
      'flex flex-nowrap w-full': props.scrollable,
    }),
  }),

  row: ({ context }) => ({
    className: classNames(
      'transition duration-200',
      'focus:outline focus:outline-[0.15rem] focus:outline-primary/30 focus:outline-offset-[-0.15rem]',
      context.selected
        ? 'bg-primary/10 text-primary'
        : 'bg-base-100 text-base-content',
      {
        'hover:bg-base-300/20 hover:text-base-content':
          context.selectable && !context.selected,
        'flex flex-nowrap w-full': context.scrollable,
      }
    ),
  }),

  column: {
    headercell: ({ context }) => ({
      className: classNames(
        'text-left border-base-300 border font-bold transition duration-200 p-4',
        {
          'bg-primary/10 text-primary': context.sorted,
          'bg-base-200': !context.sorted,
          'flex flex-1 items-center': context.scrollable,
          'flex-initial shrink-0': context.scrollable && !context.frozen,
          'sticky z-[1]': context.scrollable && context.frozen,
          'border-x-0 border-l-0 border-t-0': !context.showGridlines,
          'overflow-hidden relative bg-clip-padding': !context.frozen,
        }
      ),
    }),

    bodycell: ({ context }) => ({
      className: classNames(
        'text-left border-base-300 border transition duration-200 p-4',
        {
          'cursor-pointer': context.selectable,
          'flex flex-1 items-center': context.scrollable,
          'flex-initial shrink-0': context.scrollable && !context.frozen,
          sticky: context.scrollable && context.frozen,
          'border-x-0 border-l-0': !context.showGridlines,
        }
      ),
    }),

    rowtoggler: ({ context }) => ({
      className: classNames(
        'relative inline-flex items-center justify-center align-center cursor-pointer select-none overflow-hidden bg-transparent w-8 h-8 border-0 rounded mr-0.5',
        {
          'text-primary': context.selected,
          'text-base-content/70': !context.selected,
        }
      ),
    }),

    sorticon: ({ context }) => ({
      className: classNames('ml-2', {
        'text-primary': context.sorted,
        'text-base-content/70': !context.sorted,
      }),
    }),

    sortbadge: {
      className: classNames(
        'h-[1.143rem] min-w-[1.143rem] leading-[1.143rem] text-primary bg-primary/10 ml-2 rounded-[50%]'
      ),
    },

    columnresizer:
      'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent',

    checkboxwrapper: {
      className: classNames(
        'cursor-pointer inline-flex relative select-none align-bottom w-6 h-6 mr-2'
      ),
    },

    checkbox: ({ context }) => ({
      className: classNames(
        'flex items-center justify-center border-2 w-6 h-6 text-base-content rounded-lg transition-colors duration-200',
        {
          'border-primary bg-primary text-base-100': context.checked,
          'border-base-300 bg-base-100': !context.checked,
        },
        {
          'hover:border-primary focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(var(--p),0.3)]':
            !context.disabled,
        }
      ),
    }),

    checkboxicon: ({ context }) => ({
      className: classNames(
        'w-4 h-4 transition-all duration-200 text-base-content',
        {
          'text-base-100': context.checked,
        }
      ),
    }),
  },

  resizehelper: 'absolute hidden w-px z-10 bg-primary',
};
