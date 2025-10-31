import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/galleria').GalleriaPassThroughOptions}
 */
export const galleria = {
  root: 'flex flex-col',
  content: 'flex flex-col',
  itemwrapper: 'flex flex-col relative',
  itemcontainer: 'relative flex h-full',
  item: 'flex justify-center items-center h-full w-full',
  thumbnailwrapper: 'flex flex-col overflow-auto shrink-0',
  thumbnailcontainer: {
    className: classNames('flex flex-row', 'bg-base-content/90 p-4'),
  },
  previousthumbnailbutton: {
    className: classNames(
      'self-center flex shrink-0 justify-center items-center overflow-hidden relative',
      'm-2 bg-transparent text-base-100 w-8 h-8 transition duration-200 ease-in-out rounded-full',
      'hover:bg-base-100/10 hover:text-base-100',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-info)]'
    ),
  },
  thumbnailitemscontainer: 'overflow-hidden w-full',
  thumbnailitems: 'flex',
  thumbnailitem: {
    className: classNames(
      'overflow-auto flex items-center justify-center cursor-pointer opacity-50',
      'flex-1 grow-0 shrink-0 w-20',
      'hover:opacity-100 hover:transition-opacity hover:duration-300'
    ),
  },
  nextthumbnailbutton: {
    className: classNames(
      'self-center flex shrink-0 justify-center items-center overflow-hidden relative',
      'm-2 bg-transparent text-base-100 w-8 h-8 transition duration-200 ease-in-out rounded-full',
      'hover:bg-base-100/10 hover:text-base-100',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-info)]'
    ),
  },
  indicators: {
    className: classNames('flex items-center justify-center', 'p-4'),
  },
  indicator: 'mr-2',
  indicatorbutton: ({ context }) => ({
    className: classNames(
      'w-4 h-4 transition duration-200 rounded-full',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-info)]',
      {
        'bg-base-300 hover:bg-base-200': !context.highlighted,
        'bg-primary hover:bg-primary/80': context.highlighted,
      }
    ),
  }),
  mask: {
    className: classNames(
      'fixed top-0 left-0 w-full h-full',
      'flex items-center justify-center',
      'bg-base-content/90'
    ),
  },
  closebutton: {
    className: classNames(
      'absolute top-0 right-0 flex justify-center items-center overflow-hidden m-2',
      'text-base-100 bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out',
      'hover:text-base-100 hover:bg-base-100/10',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-info)]'
    ),
  },
  closeicon: 'w-6 h-6',
  previousitembutton: {
    className: classNames(
      'inline-flex justify-center items-center overflow-hidden',
      'bg-transparent text-base-100 w-16 h-16 transition duration-200 ease-in-out rounded-md mx-2',
      'fixed top-1/2 mt-[-0.5rem] left-0',
      'hover:bg-base-100/10 hover:text-base-100',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-info)]'
    ),
  },
  nextitembutton: {
    className: classNames(
      'inline-flex justify-center items-center overflow-hidden',
      'bg-transparent text-base-100 w-16 h-16 transition duration-200 ease-in-out rounded-md mx-2',
      'fixed top-1/2 mt-[-0.5rem] right-0',
      'hover:bg-base-100/10 hover:text-base-100',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-info)]'
    ),
  },
  caption: {
    className: classNames(
      'absolute bottom-0 left-0 w-full',
      'bg-base-content/50 text-base-100 p-4'
    ),
  },
  transition: {
    enterFromClass: 'opacity-0 scale-75',
    enterActiveClass: 'transition-all duration-150 ease-in-out',
    leaveActiveClass: 'transition-all duration-150 ease-in',
    leaveToClass: 'opacity-0 scale-75',
  },
};
