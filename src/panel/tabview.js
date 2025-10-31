import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/tabview').TabViewPassThroughOptions}
 */
export const tabview = {
  navContainer: ({ props }) => ({
    className: classNames('relative', {
      'overflow-hidden': props.scrollable,
    }),
  }),
  navContent:
    'overflow-y-hidden overscroll-contain overscroll-auto scroll-smooth [&::-webkit-scrollbar]:hidden',
  previousButton: {
    className: classNames(
      'h-full flex items-center justify-center !absolute top-0 z-20 left-0',
      'bg-base-100 text-primary w-12 shadow-md rounded-none'
    ),
  },
  nextButton: {
    className: classNames(
      'h-full flex items-center justify-center !absolute top-0 z-20 right-0',
      'bg-base-100 text-primary w-12 shadow-md rounded-none'
    ),
  },
  nav: {
    className: classNames(
      'flex flex-1 list-none m-0 p-0',
      'bg-transparent border-0 border-b-2 border-base-300'
    ),
  },
};

/**
 * @type {import('primereact/tabpanel').TabPanelPassThroughOptions}
 */
export const tabpanel = {
  header: ({ props }) => ({
    className: classNames('mr-0', {
      'cursor-default pointer-events-none select-none user-select-none opacity-60':
        props?.disabled,
    }),
  }),
  headerAction: ({ parent, context }) => ({
    className: classNames(
      'items-center cursor-pointer flex overflow-hidden relative select-none no-underline',
      'border-b-2 p-5 font-bold rounded-t-md transition-shadow duration-200 m-0',
      'transition-colors duration-200',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)]',
      {
        'border-base-300 bg-base-100 text-base-content hover:bg-base-100 hover:border-base-400 hover:text-base-content/80':
          parent != null ? parent.state.activeIndex !== context.index : true,
        'bg-base-100 border-primary text-primary':
          parent != null ? parent.state.activeIndex === context.index : false,
      }
    ),
    style: { marginBottom: '-2px' },
  }),
  headerTitle: {
    className: classNames('leading-none whitespace-nowrap'),
  },
  content: {
    className: classNames(
      'bg-base-100 p-5 border-0 text-base-content rounded-bl-md rounded-br-md'
    ),
  },
};
