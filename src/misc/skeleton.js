import { classNames } from '@/utils/cn';
/**
 * @type {import('primereact/skeleton').SkeletonPassThroughOptions}
 */
export const skeleton = {
  root: ({ props }) => ({
    className: classNames(
      'overflow-hidden',
      '!mb-2',
      'bg-base-300',
      'after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:content after:w-full after:h-full after:bg-primary/40 after:left-full after:transform after:translate-x-full after:z-10 after:bg-gradient-to-r after:from-transparent after:via-base-100 after:to-transparent animate-pulse',
      {
        'rounded-md': props.shape !== 'circle',
        'rounded-full': props.shape === 'circle',
      }
    ),
  }),
};
