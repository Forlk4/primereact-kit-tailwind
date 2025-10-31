import { classNames } from '@/utils/cn';

const TRANSITIONS = {
  overlay: {
    enterFromClass: 'opacity-0 scale-75',
    enterActiveClass:
      'transition-transform transition-opacity duration-150 ease-in',
    leaveActiveClass: 'transition-opacity duration-150 ease-linear',
    leaveToClass: 'opacity-0',
  },
};

/**
 * @type {import('primereact/mention').MentionPassThroughOptions}
 */
export const mention = {
  root: 'relative',
  panel: classNames(
    'max-h-[200px] overflow-auto',
    'bg-base-100 text-base-content border-0 rounded-md shadow-lg'
  ),
  items: 'py-3 list-none m-0',
  item: classNames(
    'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
    'm-0 p-3 border-0 transition-shadow duration-200 rounded-none',
    'text-base-content/80 hover:text-base-content hover:bg-base-200'
  ),
  transition: TRANSITIONS.overlay,
};
