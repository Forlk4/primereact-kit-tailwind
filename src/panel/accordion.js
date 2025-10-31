import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/accordion').AccordionPassThroughOptions}
 */
const TRANSITIONS = {
  toggleable: {
    timeout: 500,
    classNames: {
      enter: 'max-h-0',
      enterActive:
        '!max-h-[1000px] overflow-hidden transition-[max-height] duration-500 ease-in',
      exit: 'max-h-[1000px]',
      exitActive:
        '!max-h-0 overflow-hidden transition-[max-height] duration-500 ease-out',
    },
  },
};

export const accordion = {
  root: 'mb-1',

  accordiontab: {
    root: 'mb-1',

    header: ({ props }) => ({
      className: classNames({
        'select-none pointer-events-none cursor-default opacity-60':
          props?.disabled,
      }),
    }),

    headerAction: ({ context }) => ({
      className: classNames(
        'flex items-center cursor-pointer relative no-underline select-none',
        'p-5 transition duration-200 ease-in-out rounded-t-md font-bold transition-shadow duration-200',
        'border border-base-300 bg-base-200 text-base-content/80',
        'hover:border-base-300 hover:bg-base-300 hover:text-base-content',
        'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)]',
        {
          'rounded-br-md rounded-bl-md': !context.selected,
          'rounded-br-0 rounded-bl-0 text-base-content': context.selected,
        }
      ),
    }),

    headerIcon: 'inline-block mr-2',
    headerTitle: 'leading-none',

    content: {
      className: classNames(
        'p-5 border border-base-300 bg-base-100 text-base-content border-t-0',
        'rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg'
      ),
    },

    transition: TRANSITIONS.toggleable,
  },
};
