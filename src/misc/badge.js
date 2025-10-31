import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/badge').BadgePassThroughOptions}
 */
export const badge = {
  root: ({ props }) => ({
    className: classNames(
      'rounded-full p-0 text-center inline-block',
      'bg-primary text-primary-content font-bold',
      {
        'bg-base-300 text-base-content': props.severity === 'secondary',
        'bg-success text-success-content': props.severity === 'success',
        'bg-info text-info-content': props.severity === 'info',
        'bg-warning text-warning-content': props.severity === 'warning',
        'bg-accent text-accent-content': props.severity === 'help',
        'bg-error text-error-content': props.severity === 'danger',
      },
      {
        'text-xs min-w-[1.5rem] h-[1.5rem] leading-[1.5rem]':
          props.size == null,
        'text-lg min-w-[2.25rem] h-[2.25rem] leading-[2.25rem]':
          props.size === 'large',
        'text-2xl min-w-[3rem] h-[3rem] leading-[3rem]':
          props.size === 'xlarge',
      }
    ),
  }),
};
