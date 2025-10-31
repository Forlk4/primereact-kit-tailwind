import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/carousel').CarouselPassThroughOptions}
 */
export const carousel = {
  root: 'flex flex-col',
  content: 'flex flex-col overflow-auto',
  container: ({ props }) => ({
    className: classNames('flex', {
      'flex-row': props.orientation !== 'vertical',
      'flex-col': props.orientation === 'vertical',
    }),
  }),
  previousbutton: {
    className: classNames(
      'flex justify-center items-center self-center overflow-hidden relative shrink-0 grow-0',
      'w-8 h-8 text-base-content/80 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mx-2'
    ),
  },
  itemscontent: 'overflow-hidden w-full',
  itemscontainer: ({ props }) => ({
    className: classNames('flex', {
      'flex-row': props.orientation !== 'vertical',
      'flex-col h-full': props.orientation === 'vertical',
    }),
  }),
  item: ({ props }) => ({
    className: classNames('flex shrink-0 grow', {
      'w-1/3': props.orientation !== 'vertical',
      'w-full': props.orientation === 'vertical',
    }),
  }),
  indicators: {
    className: classNames('flex flex-row justify-center flex-wrap'),
  },
  indicator: 'mr-2 mb-2',
  indicatorbutton: ({ context }) => ({
    className: classNames(
      'w-8 h-2 transition duration-200 rounded-0',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_var(--color-info)]',
      {
        'bg-base-300 hover:bg-base-200': !context.active,
        'bg-primary hover:bg-primary/80': context.active,
      }
    ),
  }),
};
