import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/rating').RatingPassThroughOptions}
 */
export const rating = {
  root: ({ props }) => ({
    className: classNames('relative flex items-center gap-2', {
      'opacity-60 select-none pointer-events-none cursor-default':
        props.disabled,
    }),
  }),
  cancelitem: ({ context }) => ({
    className: classNames('inline-flex items-center cursor-pointer', {
      'focus-visible:shadow-[0_0_0_0.2rem_var(--color-primary-200)]':
        context?.focused,
    }),
  }),
  cancelicon: {
    className: classNames(
      'text-error',
      'w-5 h-5',
      'transition duration-200 ease-in'
    ),
  },
  item: ({ props, context }) => ({
    className: classNames(
      'inline-flex items-center',
      {
        'cursor-pointer': !props.readOnly,
        'cursor-default': props.readOnly,
      },
      {
        'focus-visible:shadow-[0_0_0_0.2rem_var(--color-primary-200)]':
          context?.focused,
      }
    ),
  }),
  officon: {
    className: classNames(
      'text-base-content/60 hover:text-primary',
      'w-5 h-5',
      'transition duration-200 ease-in'
    ),
  },
  onicon: {
    className: classNames(
      'text-primary',
      'w-5 h-5',
      'transition duration-200 ease-in'
    ),
  },
};
