import { classNames } from '@/utils/cn';
import { TRANSITIONS } from '../transition';

/**
 * @type {import('primereact/calendar').CalendarPassThroughOptions}
 */
export const calendar = {
  root: ({ props }) => ({
    className: classNames('inline-flex max-w-full relative', {
      'opacity-60 select-none pointer-events-none cursor-default':
        props.disabled,
    }),
  }),

  input: ({ props }) => ({
    root: {
      className: classNames(
        'font-sans text-base text-base-content bg-base-100 p-3 border border-base-content transition-colors duration-200 appearance-none hover:border-primary',
        {
          'rounded-lg': !props.showIcon,
          'border-r-0 rounded-l-lg': props.showIcon,
        }
      ),
    },
  }),

  dropdownButton: {
    root: ({ props }) => ({
      className: classNames({ 'rounded-l-none': props.icon }),
    }),
  },

  panel: ({ props }) => ({
    className: classNames('bg-base-100 text-base-content min-w-full', {
      'shadow-md border-0 absolute': !props.inline,
      'inline-block overflow-x-auto border border-base-content p-2 rounded-lg':
        props.inline,
    }),
  }),

  header: {
    className: classNames(
      'flex items-center justify-between',
      'p-2 text-base-content bg-base-100 font-semibold m-0 border-b border-base-content rounded-t-lg'
    ),
  },

  previousButton: {
    className: classNames(
      'flex items-center justify-center cursor-pointer overflow-hidden relative w-8 h-8',
      'text-base-content border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
      'hover:text-primary hover:border-transparent hover:bg-base-200'
    ),
  },

  title: { className: 'leading-8 mx-auto' },

  monthTitle: {
    className: classNames(
      'text-base-content transition duration-200 font-semibold p-2 mr-2 hover:text-primary'
    ),
  },

  yearTitle: {
    className: classNames(
      'text-base-content transition duration-200 font-semibold p-2 hover:text-primary'
    ),
  },

  nextButton: {
    className: classNames(
      'flex items-center justify-center cursor-pointer overflow-hidden relative w-8 h-8',
      'text-base-content border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
      'hover:text-primary hover:border-transparent hover:bg-base-200'
    ),
  },

  table: { className: 'border-collapse w-full my-2' },
  tableHeaderCell: { className: 'p-2' },
  weekday: { className: 'text-base-content/70' },
  day: { className: 'p-2' },

  dayLabel: ({ context }) => ({
    className: classNames(
      'w-10 h-10 rounded-full transition-shadow duration-200 border-transparent border flex items-center justify-center mx-auto overflow-hidden relative',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
      {
        'opacity-60 cursor-default': context.disabled,
        'cursor-pointer': !context.disabled,
      },
      {
        'text-base-content bg-transparent hover:bg-base-200':
          !context.selected && !context.disabled,
        'text-primary-content bg-primary/30 hover:bg-primary/40':
          context.selected && !context.disabled,
      }
    ),
  }),

  monthPicker: { className: 'my-2' },
  month: ({ context }) => ({
    className: classNames(
      'w-1/3 inline-flex items-center justify-center cursor-pointer overflow-hidden relative p-2',
      'transition-shadow duration-200 rounded-lg focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
      {
        'text-base-content bg-transparent hover:bg-base-200':
          !context.selected && !context.disabled,
        'text-primary-content bg-primary/30 hover:bg-primary/40':
          context.selected && !context.disabled,
      }
    ),
  }),

  yearPicker: { className: 'my-2' },
  year: ({ context }) => ({
    className: classNames(
      'w-1/2 inline-flex items-center justify-center cursor-pointer overflow-hidden relative p-2',
      'transition-shadow duration-200 rounded-lg focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
      {
        'text-base-content bg-transparent hover:bg-base-200':
          !context.selected && !context.disabled,
        'text-primary-content bg-primary/30 hover:bg-primary/40':
          context.selected && !context.disabled,
      }
    ),
  }),

  timePicker: {
    className: classNames(
      'flex justify-center items-center border-t border-base-content p-2'
    ),
  },

  separatorContainer: { className: 'flex items-center flex-col px-2' },
  separator: { className: 'text-xl' },
  hourPicker: { className: 'flex items-center flex-col px-2' },
  minutePicker: { className: 'flex items-center flex-col px-2' },
  ampmPicker: { className: 'flex items-center flex-col px-2' },

  incrementButton: {
    className: classNames(
      'flex items-center justify-center cursor-pointer overflow-hidden relative w-8 h-8',
      'text-base-content border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
      'hover:text-primary hover:border-transparent hover:bg-base-200'
    ),
  },

  decrementButton: {
    className: classNames(
      'flex items-center justify-center cursor-pointer overflow-hidden relative w-8 h-8',
      'text-base-content border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
      'hover:text-primary hover:border-transparent hover:bg-base-200'
    ),
  },

  groupContainer: { className: 'flex' },
  group: {
    className: classNames(
      'flex-1 border-l border-base-content pr-0.5 pl-0.5 pt-0 pb-0 first:pl-0 first:border-l-0'
    ),
  },

  transition: TRANSITIONS.overlay,
};
