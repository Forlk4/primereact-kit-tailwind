import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/inputswitch').InputSwitchPassThroughOptions}
 */
export const inputswitch = {
  root: ({ props }) => ({
    className: classNames('inline-block relative w-12 h-7', {
      'opacity-60 pointer-events-none cursor-default': props.disabled,
    }),
  }),
  input: {
    className: classNames(
      'absolute appearance-none inset-0 size-full opacity-0 z-10 cursor-pointer outline-none'
    ),
  },
  slider: ({ props }) => ({
    className: classNames(
      'absolute inset-0 border border-transparent rounded-2xl cursor-pointer transition-colors duration-200',
      'focus:outline-none focus:ring-2 focus:ring-primary/40',
      "before:absolute before:content-[''] before:top-1/2 before:left-1 before:-mt-2.5 before:w-5 before:h-5 before:rounded-full before:transition-all before:duration-200 before:bg-base-100",
      {
        'bg-base-200 hover:bg-base-300': !props.checked,
        'bg-primary before:translate-x-5': props.checked,
      }
    ),
  }),
};
