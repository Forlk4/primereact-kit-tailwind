import { classNames } from '@/utils/cn';
/** @type {import('primereact/togglebutton').ToggleButtonPassThroughOptions} */
export const togglebutton = {
  root: ({ props }) => ({
    className: classNames(
      'p-togglebutton',
      'inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative',
      'px-4 py-3 rounded-md text-base w-36',
      'border transition duration-200 ease-in-out',
      {
        'bg-base-100 border-base-300 text-base-content hover:bg-base-200 hover:border-base-300 hover:text-base-content':
          !props.checked,
        'bg-primary border-primary text-base-100 hover:bg-primary-focus hover:border-primary-focus':
          props.checked,
        'opacity-60 select-none pointer-events-none cursor-default':
          props.disabled,
      }
    ),
  }),

  input: {
    className: classNames('hidden'),
  },

  box: {
    className: classNames('flex items-center justify-center'),
  },

  label: {
    className: classNames('font-bold text-center w-full'),
  },

  icon: ({ props }) => ({
    className: classNames('mr-2', {
      'text-base-content/70': !props.checked,
      'text-base-100': props.checked,
    }),
  }),

  tooltip: {
    className: classNames(
      'bg-base-200 text-base-content border border-base-300 px-2 py-1 rounded-md shadow-md text-sm'
    ),
  },
};
