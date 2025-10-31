import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/message').MessagePassThroughOptions}
 */
export const message = {
  root: ({ props }) => ({
    className: classNames(
      'inline-flex items-center justify-center align-top',
      'p-3 m-0 rounded-md',
      {
        'bg-info/10 border-0 text-info': props.severity === 'info',
        'bg-success/10 border-0 text-success': props.severity === 'success',
        'bg-warning/10 border-0 text-warning': props.severity === 'warn',
        'bg-error/10 border-0 text-error': props.severity === 'error',
      }
    ),
  }),
  icon: 'text-base mr-2',
};
