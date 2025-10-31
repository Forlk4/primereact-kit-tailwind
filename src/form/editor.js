import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/editor').EditorPassThroughOptions}
 */
export const preset = {
  toolbar: {
    className: classNames(
      'bg-base-200 rounded-tr-md rounded-tl-md',
      'border border-base-300 box-border font-sans px-2 py-1'
    ),
  },

  formats: {
    className: classNames('inline-block align-middle', 'mr-4'),
  },

  header: {
    className: classNames(
      'text-base-content inline-block float-left text-base font-medium h-6 relative align-middle',
      'w-28 border-0 text-base-content/80'
    ),
  },
};
