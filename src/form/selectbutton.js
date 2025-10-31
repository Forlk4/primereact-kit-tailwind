import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/selectbutton').SelectButtonPassThroughOptions}
 */
export const selectbutton = {
  root: ({ props }) => ({
    className: classNames({
      'opacity-60 select-none pointer-events-none cursor-default':
        props.disabled,
    }),
  }),
  button: ({ context }) => ({
    className: classNames(
      'inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative',
      'px-4 py-3',
      'transition duration-200 border border-r-0',
      'first:rounded-l-md first:rounded-tr-none first:rounded-br-none last:border-r last:rounded-tl-none last:rounded-bl-none last:rounded-r-md',
      'focus:outline-none focus:outline-offset-0 focus-visible:shadow-[0_0_0_0.2rem_var(--color-primary-200)]',
      {
        'bg-base-100 text-base-content border-base-300 hover:bg-base-200':
          !context.selected,
        'bg-primary border-primary text-primary-content hover:bg-primary/90':
          context.selected,
        'opacity-60 select-none pointer-events-none cursor-default':
          context.disabled,
      }
    ),
  }),
  label: 'font-bold',
};
