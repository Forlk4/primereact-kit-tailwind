import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/inputtextarea').InputTextareaPassThroughOptions}
 */
export const inputtextarea = {
  root: ({ context }) => ({
    className: classNames(
      'm-0 font-sans text-base p-3 border rounded-lg transition-colors duration-200 appearance-none',
      'text-base-content bg-base-100 border-base-300',
      'hover:border-primary focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-primary/40',
      {
        'opacity-60 select-none pointer-events-none cursor-default':
          context.disabled,
      }
    ),
  }),
};
