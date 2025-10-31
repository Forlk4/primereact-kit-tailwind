import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/tooltip').TooltipPassThroughOptions}
 */
export const tooltip = {
  root: ({ context }) => {
    return {
      className: classNames('absolute shadow-md', {
        'py-0 px-1':
          context.right ||
          context.left ||
          (!context.right && !context.left && !context.top && !context.bottom),
        'py-1 px-0': context.top || context.bottom,
      }),
    };
  },
  arrow: ({ context }) => ({
    className: classNames('absolute w-0 h-0 border-transparent border-solid', {
      '-mt-1 border-y-[0.25rem] border-r-[0.25rem] border-l-0 border-r-base-content':
        context.right,
      '-mt-1 border-y-[0.25rem] border-l-[0.25rem] border-r-0 border-l-base-content':
        context.left,
      '-ml-1 border-x-[0.25rem] border-t-[0.25rem] border-b-0 border-t-base-content':
        context.top,
      '-ml-1 border-x-[0.25rem] border-b-[0.25rem] border-t-0 border-b-base-content':
        context.bottom,
    }),
  }),
  text: {
    className:
      'p-3 bg-base-content text-base-100 rounded-md whitespace-pre-line break-words',
  },
};
