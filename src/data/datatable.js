import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/datatable').DataTablePassThroughOptions}
 */
export const datatable = {
  root: ({ props }) => ({
    className: classNames('relative', {
      'flex flex-col h-full': props.scrollable && props.scrollHeight === 'flex',
    }),
  }),

  loadingoverlay: {
    className: classNames(
      'fixed w-full h-full t-0 l-0 bg-base-100/40',
      'transition duration-200',
      'absolute flex items-center justify-center z-2'
    ),
  },

  loadingicon: 'w-8 h-8',

  wrapper: ({ props }) => ({
    className: classNames({
      relative: props.scrollable,
      'flex flex-col grow h-full':
        props.scrollable && props.scrollHeight === 'flex',
    }),
  }),

  header: ({ props }) => ({
    className: classNames(
      'bg-base-200 text-base-content border-base-300 font-bold p-4',
      props.showGridlines
        ? 'border-x border-t border-b-0'
        : 'border-y border-x-0'
    ),
  }),

  table: 'w-full border-spacing-0',

  thead: ({ context }) => ({
    className: classNames({
      'bg-base-200 top-0 z-[1]': context.scrollable,
    }),
  }),

  tbody: ({ props, context }) => ({
    className: classNames({
      'sticky z-[1]': props.frozenRow && context.scrollable,
    }),
  }),

  tfoot: ({ context }) => ({
    className: classNames({
      'bg-base-200 bottom-0 z-[1]': context.scrollable,
    }),
  }),

  footer: {
    className: classNames(
      'bg-base-200 text-base-content border-t-0 border-b border-x-0 border-base-300 font-bold p-4'
    ),
  },

  column: {
    headercell: ({ context, props }) => ({
      className: classNames(
        'text-left border-0 border-b border-solid border-base-300 font-bold transition duration-200',
        context?.size === 'small'
          ? 'p-2'
          : context?.size === 'large'
            ? 'p-5'
            : 'p-4',
        context.sorted
          ? 'bg-primary/10 text-primary'
          : 'bg-base-200 text-base-content',
        {
          'sticky z-[1]': props.frozen || props.frozen === '',
          'border-x border-y': context?.showGridlines,
          'overflow-hidden space-nowrap border-y relative bg-clip-padding':
            context.resizable,
        }
      ),
    }),

    headercontent: 'flex items-center',

    bodycell: ({ props, context }) => ({
      className: classNames(
        'text-left border-0 border-b border-solid border-base-300 text-base-content',
        context?.size === 'small'
          ? 'p-2'
          : context?.size === 'large'
            ? 'p-5'
            : 'p-4',
        {
          'sticky bg-inherit': props && (props.frozen || props.frozen === ''),
          'border-x border-y': context.showGridlines,
        }
      ),
    }),

    footercell: ({ context }) => ({
      className: classNames(
        'text-left border-0 border-b border-solid border-base-300 font-bold bg-base-200 text-base-content transition duration-200',
        context?.size === 'small'
          ? 'p-2'
          : context?.size === 'large'
            ? 'p-5'
            : 'p-4',
        {
          'border-x border-y': context.showGridlines,
        }
      ),
    }),

    sorticon: ({ context }) => ({
      className: classNames(
        'ml-2',
        context.sorted ? 'text-primary' : 'text-base-content'
      ),
    }),

    sortbadge: {
      className: classNames(
        'flex items-center justify-center align-middle rounded-[50%] w-[1.143rem] leading-[1.143rem] ml-2',
        'text-primary bg-primary/10'
      ),
    },

    columnfilter: 'inline-flex items-center ml-auto',

    filteroverlay: {
      className: classNames(
        'bg-base-100 text-base-content border-0 rounded-md min-w-[12.5rem]'
      ),
    },

    filtermatchmodedropdown: {
      root: 'min-[0px]:flex mb-2',
    },

    filterrowitems: 'm-0 p-0 py-3 list-none',

    filterrowitem: ({ context }) => ({
      className: classNames(
        'm-0 py-3 px-5 bg-transparent transition duration-200',
        context?.highlighted
          ? 'text-primary bg-primary/10'
          : 'text-base-content bg-transparent'
      ),
    }),

    filteroperator: {
      className: classNames(
        'px-5 py-3 border-b border-solid border-base-300 text-base-content bg-base-200 rounded-t-md'
      ),
    },

    filteroperatordropdown: {
      root: 'min-[0px]:flex',
    },

    filterconstraint: 'p-5 border-b border-solid border-base-300',

    filteraddrule: 'py-3 px-5',

    filteraddrulebutton: {
      root: 'justify-center w-full min-[0px]:text-sm',
      label: 'flex-auto grow-0',
      icon: 'mr-2',
    },

    filterremovebutton: {
      root: 'ml-2',
      label: 'grow-0',
    },

    filterbuttonbar: 'flex items-center justify-between p-5',

    filterclearbutton: {
      root: 'w-auto min-[0px]:text-sm border-primary text-primary px-4 py-3',
    },

    filterapplybutton: {
      root: 'w-auto min-[0px]:text-sm px-4 py-3',
    },

    filtermenubutton: ({ context }) => ({
      className: classNames(
        'inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative ml-2 w-8 h-8 rounded-[50%] transition duration-200',
        'hover:text-base-content hover:bg-base-300/20 focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-primary)]',
        {
          'bg-primary/10 text-primary': context.active,
        }
      ),
    }),

    headerfilterclearbutton: ({ context }) => ({
      className: classNames(
        'inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative text-left bg-transparent m-0 p-0 border-none select-none ml-2',
        { invisible: !context.hidden }
      ),
    }),

    columnresizer:
      'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent',

    rowreordericon: 'cursor-move',

    roweditorinitbutton: {
      className: classNames(
        'inline-flex items-center justify-center overflow-hidden relative text-left cursor-pointer select-none w-8 h-8 border-0 rounded-[50%] transition duration-200 text-base-content border-transparent',
        'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-primary)] hover:text-base-content hover:bg-base-300/20'
      ),
    },

    roweditorsavebutton: {
      className: classNames(
        'inline-flex items-center justify-center overflow-hidden relative text-left cursor-pointer select-none w-8 h-8 border-0 rounded-[50%] transition duration-200 text-base-content border-transparent',
        'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-primary)] hover:text-base-content hover:bg-base-300/20'
      ),
    },

    roweditorcancelbutton: {
      className: classNames(
        'inline-flex items-center justify-center overflow-hidden relative text-left cursor-pointer select-none w-8 h-8 border-0 rounded-[50%] transition duration-200 text-base-content border-transparent',
        'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-primary)] hover:text-base-content hover:bg-base-300/20'
      ),
    },

    radioButton: {
      className: classNames(
        'relative inline-flex cursor-pointer select-none align-bottom',
        'w-6 h-6'
      ),
    },

    radioButtonInput: {
      className: classNames(
        'w-full h-full top-0 left-0 absolute appearance-none select-none p-0 m-0 opacity-0 z-[1] rounded-[50%] outline-none cursor-pointer peer'
      ),
    },

    radioButtonBox: ({ context }) => ({
      className: classNames(
        'flex items-center justify-center h-6 w-6 rounded-full border-2 text-base-content transition duration-200 ease-in-out',
        context.checked
          ? 'border-primary bg-primary peer-hover:bg-primary/80 peer-hover:border-primary/80'
          : 'border-base-300 bg-base-100 peer-hover:border-primary',
        {
          'hover:border-primary focus:shadow-[0_0_0_0.2rem_var(--color-primary)] focus:outline-none focus:outline-offset-0':
            !context.disabled,
          'cursor-default opacity-60': context.disabled,
        }
      ),
    }),

    radioButtonIcon: ({ context }) => ({
      className: classNames(
        'transform rounded-full block h-3 w-3 bg-base-100 transition duration-200',
        {
          'backface-hidden scale-10 invisible': context.checked === false,
          'visible scale-100 transform': context.checked === true,
        }
      ),
    }),

    headercheckboxwrapper: {
      className: classNames(
        'cursor-pointer inline-flex relative select-none align-bottom',
        'w-6 h-6'
      ),
    },

    headercheckbox: ({ context }) => ({
      className: classNames(
        'flex items-center justify-center border-2 w-6 h-6 text-base-content rounded-lg transition-colors duration-200',
        context.checked
          ? 'border-primary bg-primary'
          : 'border-base-300 bg-base-100',
        {
          'hover:border-primary focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-primary)]':
            !context.disabled,
          'cursor-default opacity-60': context.disabled,
        }
      ),
    }),

    headercheckboxicon:
      'w-4 h-4 transition-all duration-200 text-primary-content text-base',

    checkboxwrapper: {
      className: classNames(
        'cursor-pointer inline-flex relative select-none align-bottom',
        'w-6 h-6'
      ),
    },

    checkbox: ({ context }) => ({
      className: classNames(
        'flex items-center justify-center border-2 w-6 h-6 text-base-content rounded-lg transition-colors duration-200',
        context.checked
          ? 'border-primary bg-primary'
          : 'border-base-300 bg-base-100',
        {
          'hover:border-primary focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-primary)]':
            !context.disabled,
          'cursor-default opacity-60': context.disabled,
        }
      ),
    }),

    checkboxicon:
      'w-4 h-4 transition-all duration-200 text-primary-content text-base',

    transition: {
      timeout: 150,
      classNames: {
        enter: 'opacity-0 scale-75',
        enterActive:
          'opacity-100 !scale-100 transition-transform transition-opacity duration-150 ease-in',
        exit: 'opacity-100',
        exitActive: '!opacity-0 transition-opacity duration-150 ease-linear',
      },
    },
  },

  bodyrow: ({ context }) => ({
    className: classNames(
      context.selected
        ? 'bg-primary/10 text-primary'
        : 'bg-base-100 text-base-content',
      context.stripedRows
        ? context.index % 2 === 0
          ? 'bg-base-100 text-base-content'
          : 'bg-base-200/50 text-base-content'
        : '',
      'transition duration-200 focus:outline focus:outline-[0.15rem] focus:outline-primary/30 focus:outline-offset-[-0.15rem]',
      {
        'cursor-pointer': context.selectable,
        'hover:bg-base-300/20 hover:text-base-content':
          context.selectable && !context.selected,
      }
    ),
  }),

  rowexpansion: 'bg-base-100 text-base-content',

  rowgroupheader: {
    className: classNames(
      'sticky z-[1]',
      'bg-base-100 text-base-content',
      'transition duration-200'
    ),
  },

  rowgroupfooter: {
    className: classNames(
      'sticky z-[1]',
      'bg-base-100 text-base-content',
      'transition duration-200'
    ),
  },

  rowgrouptoggler: {
    className: classNames(
      'text-left m-0 p-0 cursor-pointer select-none inline-flex items-center justify-center overflow-hidden relative w-8 h-8 text-base-content border-0 bg-transparent rounded-[50%] transition duration-200'
    ),
  },

  rowgrouptogglericon: 'inline-block w-4 h-4',

  resizehelper: 'absolute hidden w-px z-10 bg-primary',
};
