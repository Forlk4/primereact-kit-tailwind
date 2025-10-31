import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/toolbar').ToolbarPassThroughOptions}
 */
export const toolbar = {
  root: {
    className: classNames(
      'flex items-center justify-between flex-wrap',
      'bg-base-200 border border-base-300 p-5 rounded-md gap-2'
    ),
  },
  start: 'flex items-center',
  center: 'flex items-center',
  end: 'flex items-center',
};
