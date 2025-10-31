import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/dialog').DialogPassThroughOptions}
 */
export const dialog = {
  root: ({ state }) => ({
    className: classNames(
      'rounded-lg shadow-lg border-0',
      'max-h-[90%] transform scale-100',
      'm-0 w-[50vw] bg-base-100 text-base-content',
      {
        'transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0':
          state.maximized,
      }
    ),
  }),
  header: {
    className: classNames(
      'flex items-center justify-between shrink-0',
      'bg-base-100 text-base-content border-t-0 rounded-tl-lg rounded-tr-lg p-6'
    ),
  },
  headerTitle: 'font-bold text-lg',
  headerIcons: 'flex items-center',
  closeButton: {
    className: classNames(
      'flex items-center justify-center overflow-hidden relative',
      'w-8 h-8 text-base-content/70 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
      'hover:text-base-content hover:border-transparent hover:bg-base-200',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
    ),
  },
  closeButtonIcon: 'w-4 h-4 inline-block',
  content: ({ state }) => ({
    className: classNames(
      'overflow-y-auto',
      'bg-base-100 text-base-content px-6 pb-8 pt-0 rounded-bl-lg rounded-br-lg',
      { grow: state.maximized }
    ),
  }),
  footer: {
    className: classNames(
      'shrink-0 border-t-0 bg-base-100 text-base-content px-6 pb-6 text-right rounded-b-lg'
    ),
  },
  mask: ({ state }) => ({
    className: classNames('transition duration-200', {
      'bg-black/40': state.containerVisible,
    }),
  }),
  transition: ({ props }) => {
    if (props.position === 'top') {
      return {
        enterFromClass:
          'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
        enterActiveClass: 'transition-all duration-200 ease-out',
        leaveActiveClass: 'transition-all duration-200 ease-out',
        leaveToClass:
          'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
      };
    } else if (props.position === 'bottom') {
      return {
        enterFromClass: 'opacity-0 scale-75 translate-y-full',
        enterActiveClass: 'transition-all duration-200 ease-out',
        leaveActiveClass: 'transition-all duration-200 ease-out',
        leaveToClass:
          'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0',
      };
    } else if (['left', 'top-left', 'bottom-left'].includes(props.position)) {
      return {
        enterFromClass:
          'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
        enterActiveClass: 'transition-all duration-200 ease-out',
        leaveActiveClass: 'transition-all duration-200 ease-out',
        leaveToClass:
          'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
      };
    } else if (
      ['right', 'top-right', 'bottom-right'].includes(props.position)
    ) {
      return {
        enterFromClass:
          'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
        enterActiveClass: 'transition-all duration-200 ease-out',
        leaveActiveClass: 'transition-all duration-200 ease-out',
        leaveToClass:
          'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
      };
    } else {
      return {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-all duration-200 ease-out',
        leaveActiveClass: 'transition-all duration-200 ease-out',
        leaveToClass: 'opacity-0 scale-75',
      };
    }
  },
};
