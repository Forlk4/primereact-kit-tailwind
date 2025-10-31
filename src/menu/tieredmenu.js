import { classNames } from '@/utils/cn';
import { TRANSITIONS } from '../transition';
/**
 * @type {import('primereact/tieredmenu').TieredMenuPassThroughOptions}
 */

export const tieredmenu = {
  root: 'py-1 bg-base-100 border border-base-300 rounded-box w-[12.5rem] shadow-md',
  menu: 'outline-none m-0 p-0 list-none',
  menuitem: 'relative',
  content: ({ context }) => ({
    className: classNames(
      'transition-colors duration-200 border-none rounded-none cursor-pointer select-none',
      'hover:bg-base-200 hover:text-base-content',
      {
        'text-base-content/80': !context.focused && !context.active,
        'bg-base-300 text-base-content': context.focused && !context.active,
        'bg-primary/20 text-primary-content': context.focused && context.active,
        'bg-primary/10 text-primary': !context.focused && context.active,
      }
    ),
  }),
  action: ({ context }) => ({
    className: classNames(
      'py-3 px-5 flex items-center no-underline relative overflow-hidden select-none transition-colors',
      {
        'text-base-content/80 hover:text-base-content hover:bg-base-200':
          !context.active,
        'text-primary bg-primary/15': context.active,
      }
    ),
  }),
  icon: 'mr-2 text-base-content/70',
  submenuicon: 'ml-auto text-base-content/60',
  separator: 'border-t border-base-300 my-1',
  submenu:
    'py-1 bg-base-100 border border-base-300 rounded-box shadow-md min-w-full absolute z-10 left-full top-0',
  transition: TRANSITIONS.overlay,
};
