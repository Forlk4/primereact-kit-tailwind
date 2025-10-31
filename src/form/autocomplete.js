import { classNames } from '@/utils/cn';
import { TRANSITIONS } from '../transition';
/**
 * @type {import('primereact/autocomplete').AutoCompletePassThroughOptions}
 */
export const autocomplete = {
  root: ({ props }) => ({
    className: classNames(
      'relative inline-flex',
      {
        'opacity-60 select-none pointer-events-none cursor-default':
          props.disabled,
      },
      { 'w-full': props.multiple }
    ),
  }),
  container: {
    className: classNames(
      'm-0 list-none cursor-text overflow-hidden flex items-center flex-wrap w-full',
      'px-3 py-2 gap-2',
      'font-sans text-base text-base-content bg-base-100 border border-base-content transition duration-200 ease-in-out appearance-none rounded-md',
      'focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] hover:border-primary focus:outline-none dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
    ),
  },
  inputToken: {
    className: classNames('py-0.375rem px-0', 'flex-1 inline-flex'),
  },
  input: ({ props }) => ({
    root: {
      className: classNames(
        'm-0 transition-colors duration-200 appearance-none rounded-lg',
        { 'rounded-tr-none rounded-br-none': props.dropdown },
        {
          'font-sans text-base text-base-content bg-base-100 p-3 border border-base-content focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)] hover:border-primary focus:outline-none':
            !props.multiple,
          'font-sans text-base text-base-content border-0 outline-none bg-transparent m-0 p-0 shadow-none rounded-none w-full':
            props.multiple,
        }
      ),
    },
  }),
  token: {
    className: classNames(
      'py-1 px-2 mr-2 bg-base-300 text-base-content rounded-full',
      'cursor-default inline-flex items-center'
    ),
  },
  dropdownButton: {
    root: 'rounded-tl-none rounded-bl-none',
  },
  panel: {
    className: classNames(
      'bg-base-100 text-base-content border-0 rounded-md shadow-lg',
      'max-h-[200px] overflow-auto'
    ),
  },
  list: 'py-3 list-none m-0',
  item: ({ context }) => ({
    className: classNames(
      'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
      'm-0 p-3 border-0 transition-shadow duration-200 rounded-none',
      {
        'text-base-content hover:text-base-content hover:bg-base-200':
          !context.selected,
        'bg-base-300 text-base-content hover:text-base-content hover:bg-base-200':
          context.focused && !context.selected,
        'bg-primary/20 text-primary-content': context.selected,
      }
    ),
  }),
  itemGroup: {
    className: classNames(
      'm-0 p-3 font-bold text-base-content bg-base-100',
      'cursor-auto'
    ),
  },
  transition: TRANSITIONS.overlay,
};
