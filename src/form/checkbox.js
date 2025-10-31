import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/checkbox').CheckboxPassThroughOptions}
 */
export const checkbox = {
  root: {
    className: classNames(
      'cursor-pointer inline-flex relative select-none align-bottom',
      'w-6 h-6'
    ),
  },

  input: {
    className: classNames(
      'absolute appearance-none top-0 left-0 size-full p-0 m-0 opacity-0 z-10 outline-none cursor-pointer'
    ),
  },

  box: ({ props, context }) => ({
    className: classNames(
      'flex items-center justify-center border-2 w-6 h-6 rounded-lg transition-colors duration-200',
      'text-base-content',
      {
        'border-base-300 bg-base-100': !context.checked,
        'border-primary bg-primary': context.checked,
      },
      {
        'hover:border-primary focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-primary)]':
          !props.disabled,
        'cursor-default opacity-60': props.disabled,
      }
    ),
  }),

  icon: 'w-4 h-4 transition-all duration-200 text-primary-content text-base',
};
