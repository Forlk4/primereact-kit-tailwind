import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/chips').ChipsPassThroughOptions}
 */
export const chips = {
  root: ({ props }) => ({
    className: classNames('flex', {
      'opacity-60 select-none pointer-events-none cursor-default':
        props.disabled,
    }),
  }),

  container: {
    className: classNames(
      'm-0 py-1.5 px-3 list-none cursor-text overflow-hidden flex items-center flex-wrap w-full',
      'font-sans text-base text-base-content bg-base-100 border border-base-300 transition-colors duration-200 appearance-none rounded-lg',
      'hover:border-primary focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-primary)]'
    ),
  },

  inputToken: {
    className: classNames('py-1.5 px-0', 'flex flex-1 inline-flex'),
  },

  input: {
    className: classNames(
      'font-sans text-base text-base-content p-0 m-0 border-0 outline-none bg-transparent shadow-none rounded-none w-full'
    ),
  },

  token: {
    className: classNames(
      'py-1 px-2 mr-2 bg-base-300 text-base-content rounded-full',
      'cursor-default inline-flex items-center'
    ),
  },

  removeTokenIcon: 'ml-2 text-base-content/80 hover:text-base-content',
};
