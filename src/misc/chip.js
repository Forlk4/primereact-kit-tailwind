import { classNames } from '@/utils/cn';
/**
 * @type {import('primereact/chip').ChipPassThroughOptions}
 */
export const chip = {
  root: {
    className: classNames(
      'inline-flex items-center',
      'bg-base-200 text-base-content rounded-[16px] px-3'
    ),
  },
  label: 'leading-6 mt-1.5 mb-1.5',
  icon: 'leading-6 mr-2',
  image: {
    className: classNames('w-9 h-9 ml-[-0.75rem] mr-2', 'rounded-full'),
  },
  removeIcon: {
    className: classNames(
      'ml-2 rounded-md transition duration-200 ease-in-out',
      'cursor-pointer leading-6'
    ),
  },
};
