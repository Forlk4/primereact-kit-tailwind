import { classNames } from '@/utils/cn';
/**
 * @type {import('primereact/progressbar').ProgressBarPassThroughOptions}
 */
export const progressbar = {
  root: {
    className: classNames(
      'overflow-hidden relative',
      'border-0 h-6 bg-base-200 rounded-md'
    ),
  },
  value: ({ props }) => ({
    className: classNames('border-0 m-0 bg-primary', {
      'transition-width duration-1000 ease-in-out absolute items-center border-0 flex h-full justify-center overflow-hidden w-0':
        props.mode !== 'indeterminate',
      'progressbar-value-animate before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-inherit after:absolute after:top-0 after:left-0 after:bottom-0 after:bg-inherit after:delay-1000':
        props.mode === 'indeterminate',
    }),
  }),
  label: {
    className: classNames('inline-flex', 'text-primary-content leading-6'),
  },
};
