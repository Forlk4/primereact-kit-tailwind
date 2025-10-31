import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/listbox').ListBoxPassThroughOptions}
 */
export const listbox = {
  root: {
    className: classNames(
      'bg-base-100 border border-base-300 transition-colors duration-200 ease-in-out rounded-md',
      'w-full md:w-56'
    ),
  },
  wrapper: 'overflow-auto',
  list: 'py-3 list-none m-0',
  item: ({ context }) => ({
    className: classNames(
      'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
      'm-0 p-3 border-0 transition-shadow duration-200 rounded-none',
      {
        'text-base-content/80 hover:text-base-content hover:bg-base-200':
          !context.focused && !context.selected,
        'bg-base-200 text-base-content hover:bg-base-300':
          context.focused && !context.selected,
        'bg-primary/20 text-primary-content':
          context.focused && context.selected,
        'bg-primary/10 text-primary-content':
          !context.focused && context.selected,
      }
    ),
  }),
  itemGroup: {
    className: classNames(
      'm-0 p-3 font-bold cursor-auto',
      'text-base-content bg-base-100'
    ),
  },
  header: {
    className: classNames(
      'p-3 border-b border-base-300 text-base-content bg-base-200 mt-0 rounded-tl-lg rounded-tr-lg'
    ),
  },
  filterContainer: 'relative',
  filterInput: {
    root: {
      className: classNames(
        'pr-7 -mr-7 w-full font-sans text-base text-base-content bg-base-100 py-3 px-3 border border-base-300 transition duration-200 rounded-lg appearance-none',
        'hover:border-primary focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-primary-focus)]'
      ),
    },
  },
  filterIcon: '-mt-2 absolute top-1/2 text-base-content/70',
};
