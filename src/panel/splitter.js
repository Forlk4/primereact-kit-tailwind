import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/splitter').SplitterPassThroughOptions}
 */
export const splitter = {
  root: ({ context }) => ({
    className: classNames('bg-base-100 rounded-lg text-base-content', {
      'border border-solid border-base-300': !context.nested,
    }),
  }),
  splitterpanel: {
    root: 'flex grow',
  },
  gutter: ({ props }) => ({
    className: classNames(
      'flex items-center justify-center shrink-0 transition-all duration-200 bg-base-200',
      {
        'cursor-col-resize': props.layout === 'horizontal',
        'cursor-row-resize': props.layout !== 'horizontal',
      }
    ),
  }),
  gutterhandler: ({ props }) => ({
    className: classNames('bg-base-300 transition-all duration-200', {
      'h-7': props.layout === 'horizontal',
      'w-7 h-2': props.layout !== 'horizontal',
    }),
  }),
};
