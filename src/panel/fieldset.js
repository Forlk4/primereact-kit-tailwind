import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/fieldset').FieldsetPassThroughOptions}
 */
export const fieldset = {
  root: {
    className: classNames(
      'border border-base-300 bg-base-100 text-base-content rounded-md block mx-2 my-0.5 pl-4 pr-5 inline-size-min'
    ),
  },
  legend: ({ props }) => ({
    className: classNames(
      'border border-base-300 text-base-content bg-base-200 font-bold rounded-md',
      {
        'p-0 transition-none hover:bg-base-300 hover:border-base-300 hover:text-base-content':
          props.toggleable,
        'p-5': !props.toggleable,
      }
    ),
  }),
  toggler: ({ props }) => ({
    className: classNames('flex items-center justify-center', {
      'p-5 text-base-content rounded-md transition-none cursor-pointer overflow-hidden relative select-none hover:text-base-content-focus focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)]':
        props.toggleable,
    }),
  }),
  togglerIcon: 'mr-2 inline-block',
  legendTitle: 'flex items-center justify-center leading-none',
  content: 'p-5',
  transition: {
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
