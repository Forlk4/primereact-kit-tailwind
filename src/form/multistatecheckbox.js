import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/multistatecheckbox').MultiStateCheckboxPassThroughOptions}
 */
export const multistatecheckbox = {
  root: {
    className: classNames(
      'cursor-pointer inline-flex relative select-none align-bottom',
      'w-6 h-6'
    ),
  },
  checkbox: ({ props }) => ({
    className: classNames(
      'flex items-center justify-center border-2 w-6 h-6 rounded-lg transition-colors duration-200',
      {
        'border-primary bg-primary text-primary-content':
          props.value || !props.value,
        'border-base-300 text-base-content/70 bg-base-100': props.value == null,
      },
      {
        'hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40':
          !props.disabled,
        'cursor-default opacity-60': props.disabled,
      }
    ),
  }),
};
