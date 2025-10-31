import { classNames } from '@/utils/cn';

const TRANSITIONS = {
  overlay: {
    enterFromClass: 'opacity-0 scale-75',
    enterActiveClass:
      'transition-transform transition-opacity duration-150 ease-in',
    leaveActiveClass: 'transition-opacity duration-150 ease-linear',
    leaveToClass: 'opacity-0',
  },
};

/**
 * @type {import('primereact/colorpicker').ColorPickerPassThroughOptions}
 */
export const colorpicker = {
  root: ({ props }) => ({
    className: classNames('inline-block', {
      'opacity-60 select-none pointer-events-none cursor-default':
        props.disabled,
    }),
  }),

  input: {
    className: classNames(
      'm-0 font-sans text-base text-base-content bg-base-100 border border-base-300 transition-colors duration-200 rounded-lg cursor-pointer w-8 h-8',
      'hover:border-primary focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-primary)]'
    ),
  },

  panel: ({ props }) => ({
    className: classNames(
      'shadow-md bg-base-200 border border-base-300 rounded-md',
      {
        'relative h-48 w-52': props.inline,
        'absolute h-48 w-52': !props.inline,
      }
    ),
  }),

  selector: 'absolute h-44 w-40 top-2 left-2',

  color: {
    className: 'h-44 w-40 rounded-md',
    style: {
      background:
        'linear-gradient(to top, var(--color-neutral-950) 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, var(--color-base-100) 0%, rgb(255 255 255 / 0) 100%)',
    },
  },

  colorhandle: {
    className: classNames(
      'rounded-full border border-solid cursor-pointer h-3 w-3 absolute opacity-85 border-base-100'
    ),
  },

  hue: {
    className: 'h-44 w-6 absolute top-2 left-44 opacity-85 rounded-sm',
    style: {
      background:
        'linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)',
    },
  },

  huehandle:
    'border-solid border-2 border-base-100 cursor-pointer h-2 w-8 left-0 -ml-1 -mt-1 opacity-85 absolute rounded-sm',

  transition: TRANSITIONS.overlay,
};
