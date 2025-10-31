import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/avatar').AvatarPassThroughOptions}
 */
export const avatar = {
  root: ({ props, state }) => ({
    className: classNames(
      'flex items-center justify-center',
      'bg-base-200 dark:bg-base-300',
      {
        'rounded-lg': props.shape === 'square',
        'rounded-full': props.shape === 'circle',
      },
      {
        'text-base h-8 w-8': props.size == null || props.size === 'normal',
        'w-12 h-12 text-xl': props.size === 'large',
        'w-16 h-16 text-2xl': props.size === 'xlarge',
      },
      {
        '-ml-4 border-2 border-base-100 dark:border-base-300':
          state.isNestedInAvatarGroup,
      }
    ),
  }),
  image: 'h-full w-full',
};

/**
 * @type {import('primereact/avatargroup').AvatarPassThroughOptions}
 */
export const avatargroup = {
  root: 'flex items-center',
};
