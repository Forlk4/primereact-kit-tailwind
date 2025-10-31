import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/inputtext').InputTextPassThroughOptions}
 */
export const inputtext = {
  root: ({ props, context }) => ({
    className: classNames(
      'm-0 font-sans border rounded-lg transition-colors duration-200 appearance-none',
      'text-base-content bg-base-100 border-base-300',
      {
        'hover:border-primary': !props.invalid && !context.disabled,
        'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-primary/40':
          !context.disabled,
        'opacity-60 select-none pointer-events-none cursor-default':
          context.disabled,
        'border-error hover:border-error/80 focus:border-error focus:ring-error/40':
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
