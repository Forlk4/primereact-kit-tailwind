import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/datascroller').DataScrollerPassThroughOptions}
 */
export const datascroller = {
  content: {
    className: classNames('bg-base-100 text-base-content border-0 p-0'),
  },

  grid: 'flex flex-wrap ml-0 mr-0 mt-0 bg-base-100',

  header:
    'bg-base-200 text-base-content border-base-300 border-t border-b p-4 font-bold',
};
