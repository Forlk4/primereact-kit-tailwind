import { classNames } from '@/utils/cn';
/**
 * @type {import('primereact/tag').TagPassThroughOptions}
 */
export const tag = {
  root: ({ props }) => ({
    className: classNames(
      'inline-flex items-center justify-center text-xs font-semibold px-2 py-1 text-base-100',
      {
        'bg-base-content/60': props.severity == 'secondary',
        'bg-success': props.severity == 'success',
        'bg-info': props.severity == 'info',
        'bg-warning': props.severity == 'warning',
        'bg-accent': props.severity == 'help',
        'bg-error': props.severity == 'danger',
        'bg-primary': !props.severity,
      },
      {
        'rounded-md': !props.rounded,
        'rounded-full': props.rounded,
      }
    ),
  }),
  value: 'leading-6',
  icon: 'mr-1 text-sm',
};
