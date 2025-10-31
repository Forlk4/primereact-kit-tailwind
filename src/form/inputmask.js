import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/inputmask').InputMaskPassThroughOptions}
 */
export const inputmask = {
  root: ({ props, context }) => ({
    className: classNames(
      'transition-colors duration-200 appearance-none rounded-lg font-sans text-base-content bg-base-100 border border-base-300 placeholder:text-base-content/60',
      'focus:outline-none focus:ring-2 focus:ring-primary/40 hover:border-primary',
      {
        'opacity-60 pointer-events-none cursor-default': context.disabled,
        'border-error hover:border-error/80 focus:ring-error/40':
          props.invalid && !context.disabled,
        'border-error/50': props.invalid && context.disabled,
      },
      {
        'text-lg px-4 py-4': props.size === 'large',
        'text-xs px-2 py-2': props.size === 'small',
        'p-3 text-base': !props.size || typeof props.size === 'number',
      },
      {
        'pl-8': context.iconPosition === 'left',
        'pr-8': props.iconPosition === 'right',
      }
    ),
  }),
};
