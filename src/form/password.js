import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/password').PasswordPassThroughOptions}
 */
export const password = {
  root: ({ props }) => ({
    className: classNames('inline-flex relative', {
      'opacity-60 select-none pointer-events-none cursor-default':
        props.disabled,
    }),
  }),
  panel: 'p-5 bg-base-100 text-base-content shadow-md rounded-md',
  meter: 'mb-2 bg-base-300 h-3 rounded-full overflow-hidden',
  meterlabel: ({ state, props }) => ({
    className: classNames(
      'transition-all duration-1000 ease-in-out h-full rounded-full',
      {
        'bg-error': state.meter?.strength === 'weak',
        'bg-warning': state.meter?.strength === 'medium',
        'bg-success': state.meter?.strength === 'strong',
      },
      { 'pr-[2.5rem]': props.toggleMask }
    ),
  }),
  showicon: {
    className: classNames(
      'absolute top-1/2 -mt-2 right-3 text-base-content/80'
    ),
  },
  hideicon: {
    className: classNames(
      'absolute top-1/2 -mt-2 right-3 text-base-content/80'
    ),
  },
  inputIcon: {
    root: 'mt-0',
  },
  transition: {
    enterFromClass: 'opacity-0 scale-75',
    enterActiveClass:
      'transition-transform transition-opacity duration-150 ease-in',
    leaveActiveClass: 'transition-opacity duration-150 ease-linear',
    leaveToClass: 'opacity-0',
  },
};
