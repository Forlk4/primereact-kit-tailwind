import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/slider').SliderPassThroughOptions}
 */
export const slider = {
  root: ({ props }) => ({
    className: classNames(
      'relative',
      'bg-base-200 border-0 rounded-md',
      {
        'h-1 w-56': props.orientation === 'horizontal',
        'w-1 h-56': props.orientation === 'vertical',
      },
      {
        'opacity-60 select-none pointer-events-none cursor-default':
          props.disabled,
      }
    ),
  }),
  range: ({ props }) => ({
    className: classNames('bg-primary block absolute', {
      'top-0 left-0 h-full': props.orientation === 'horizontal',
      'bottom-0 left-0 w-full': props.orientation === 'vertical',
    }),
  }),
  handle: ({ props }) => ({
    className: classNames(
      'h-4 w-4 bg-base-100 border-2 border-primary rounded-full transition duration-200',
      'cursor-grab touch-action-none block',
      'focus:outline-none focus:outline-offset-0 focus-visible:shadow-[0_0_0_0.2rem_var(--color-primary-200)]',
      'hover:bg-primary hover:border-primary',
      {
        'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]':
          props.orientation === 'horizontal',
        'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]':
          props.orientation === 'vertical',
      }
    ),
  }),
};
