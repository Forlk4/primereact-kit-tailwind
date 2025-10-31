import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/panel').PanelPassThroughOptions}
 */
export const panel = {
  header: ({ props }) => ({
    className: classNames(
      'flex items-center justify-between',
      'border border-base-300 bg-base-200 text-base-content rounded-tl-lg rounded-tr-lg',
      { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable }
    ),
  }),
  title: 'leading-none font-bold',
  toggler: {
    className: classNames(
      'inline-flex items-center justify-center overflow-hidden relative no-underline',
      'w-8 h-8 text-base-content border-0 bg-transparent rounded-full transition duration-200 ease-in-out',
      'hover:text-base-content-focus hover:border-transparent hover:bg-base-300',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
    ),
  },
  togglerIcon: 'inline-block',
  content: {
    className: classNames(
      'p-5 border border-base-300 bg-base-100 text-base-content border-t-0 last:rounded-br-lg last:rounded-bl-lg'
    ),
  },
  transition: {
    enterFromClass: 'max-h-0',
    enterActiveClass: 'overflow-hidden transition-all duration-500 ease-in-out',
    enterToClass: 'max-h-40',
    leaveFromClass: 'max-h-40',
    leaveActiveClass: 'overflow-hidden transition-all duration-500 ease-in',
    leaveToClass: 'max-h-0',
  },
};
