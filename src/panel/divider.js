import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/divider').DividerPassThroughOptions}
 */
export const divider = {
  root: ({ props }) => ({
    className: classNames(
      'flex relative',
      {
        // Horizontal layout
        'w-full my-5 mx-0 py-0 px-5 before:block before:left-0 before:absolute before:top-1/2 before:w-full before:border-t before:border-base-300':
          props.layout === 'horizontal',
        // Vertical layout
        'min-h-full mx-4 md:mx-5 py-5 before:block before:min-h-full before:absolute before:left-1/2 before:top-0 before:transform before:-translate-x-1/2 before:border-l before:border-base-300':
          props.layout === 'vertical',
      },
      {
        'before:border-solid': props.type === 'solid',
        'before:border-dotted': props.type === 'dotted',
        'before:border-dashed': props.type === 'dashed',
      }
    ),
  }),

  content: 'px-1 bg-base-100 z-10',
};
