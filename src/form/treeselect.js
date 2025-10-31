import { classNames } from '@/utils/cn';
/** @type {import('primereact/treeselect').TreeSelectPassThroughOptions} */
export const treeselect = {
  root: ({ props }) => ({
    className: classNames(
      'inline-flex cursor-pointer select-none',
      'bg-base-100 border border-base-300 transition-colors duration-200 ease-in-out rounded-md',
      'w-full md:w-80',
      {
        'opacity-60 select-none pointer-events-none cursor-default':
          props?.disabled,
      }
    ),
  }),
  labelContainer: {
    className: classNames('overflow-hidden flex flex-auto cursor-pointer'),
  },
  label: {
    className: classNames(
      'block overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis',
      'text-base-content',
      'p-3 transition duration-200'
    ),
  },
  trigger: {
    className: classNames(
      'flex items-center justify-center shrink-0',
      'bg-transparent text-base-content/70 w-12 rounded-tr-lg rounded-br-lg'
    ),
  },
  panel: {
    className: classNames(
      'bg-base-100 text-base-content border-0 rounded-md shadow-lg'
    ),
  },
  wrapper: {
    className: classNames(
      'max-h-[200px] overflow-auto',
      'bg-base-100 text-base-content border-0 rounded-md shadow-lg'
    ),
  },
  transition: {
    enterFromClass: 'opacity-0 scale-75',
    enterActiveClass:
      'transition-transform transition-opacity duration-150 ease-in',
    leaveActiveClass: 'transition-opacity duration-150 ease-linear',
    leaveToClass: 'opacity-0',
  },
};
