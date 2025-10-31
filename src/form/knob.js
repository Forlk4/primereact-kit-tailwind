import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/knob').KnobPassThroughOptions}
 */
export const knob = {
  root: ({ props }) => ({
    className: classNames(
      'focus:outline-none focus:outline-offset-0 focus:shadow-0',
      {
        'opacity-60 select-none pointer-events-none cursor-default':
          props.disabled,
      }
    ),
  }),
  range: 'stroke-base-300 transition duration-100 ease-in fill-none',
  value: 'animate-dash-frame stroke-primary fill-none',
  label: 'text-center text-xl text-base-content',
};
