import { classNames } from '@/utils/cn';
/**
 * @type {import('primereact/inplace').InplacePassThroughOptions}
 */
export const inplace = {
  display: {
    className: classNames(
      'p-3 rounded-md transition duration-200 text-base-content',
      'inline cursor-pointer',
      'hover:bg-base-200 hover:text-base-content'
    ),
  },
};
