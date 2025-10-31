import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/radiobutton').RadioButtonPassThroughOptions}
 */
export const radiobutton = {
  root: {
    className: classNames(
      'relative inline-flex cursor-pointer select-none align-bottom',
      'w-6 h-6'
    ),
  },
  input: {
    className: classNames(
      'absolute appearance-none top-0 left-0 size-full p-0 m-0 opacity-0 z-10 outline-none cursor-pointer'
    ),
  },
  box: ({ props }) => ({
    className: classNames(
      'flex justify-center items-center border-2 w-6 h-6 rounded-full transition duration-200 ease-in-out',
      {
        'border-base-300 bg-base-100 text-base-content': !props.checked,
        'border-primary bg-primary text-primary-content': props.checked,
      },
      {
        'hover:border-primary focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-primary-200)]':
          !props.disabled,
        'cursor-default opacity-60': props.disabled,
      }
    ),
  }),
  icon: ({ props }) => ({
    className: classNames(
      'transform rounded-full block w-3 h-3 transition duration-200 bg-base-100',
      {
        'scale-0 invisible': !props.checked,
        'scale-100 visible bg-primary-content': props.checked,
      }
    ),
  }),
};
