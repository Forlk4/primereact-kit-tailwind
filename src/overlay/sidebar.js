import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/sidebar').SidebarPassThroughOptions}
 */
export const sidebar = {
  root: ({ props }) => ({
    className: classNames(
      'flex flex-col pointer-events-auto relative transform translate-x-0 translate-y-0 translate-z-0 transition-transform duration-300',
      'bg-base-100 text-base-content border-0 shadow-lg border-base-300',
      {
        '!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0':
          props.position == 'full',
        'h-full w-80': props.position == 'left' || props.position == 'right',
        'h-40 w-full': props.position == 'top' || props.position == 'bottom',
      }
    ),
  }),
  header: {
    className: classNames('flex items-center justify-end', 'p-5'),
  },
  closeButton: {
    className: classNames(
      'flex items-center justify-center overflow-hidden relative',
      'w-8 h-8 text-base-content/70 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
      'hover:text-base-content hover:border-transparent hover:bg-base-200',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
    ),
  },
  closeButtonIcon: 'w-4 h-4 inline-block',
  content: {
    className: classNames('p-5 pt-0 h-full w-full', 'grow overflow-y-auto'),
  },
  mask: {
    className: classNames(
      'flex pointer-events-auto',
      'bg-base-content/40 transition duration-200 z-20 transition-colors'
    ),
  },
  transition: ({ props }) => {
    return props.position === 'top'
      ? {
          enterFromClass: 'translate-x-0 -translate-y-full translate-z-0',
          leaveToClass: 'translate-x-0 -translate-y-full translate-z-0',
        }
      : props.position === 'bottom'
        ? {
            enterFromClass: 'translate-x-0 translate-y-full translate-z-0',
            leaveToClass: 'translate-x-0 translate-y-full translate-z-0',
          }
        : props.position === 'left'
          ? {
              enterFromClass: '-translate-x-full translate-y-0 translate-z-0',
              leaveToClass: '-translate-x-full translate-y-0 translate-z-0',
            }
          : props.position === 'right'
            ? {
                enterFromClass: 'translate-x-full translate-y-0 translate-z-0',
                leaveToClass:
                  'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
              }
            : {
                enterFromClass: 'opacity-0',
                enterActiveClass: 'transition-opacity duration-400 ease-in',
                leaveActiveClass: 'transition-opacity duration-400 ease-in',
                leaveToClass: 'opacity-0',
              };
  },
};
