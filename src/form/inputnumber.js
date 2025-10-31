import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/inputnumber').InputNumberPassThroughOptions}
 */
export const inputnumber = {
  root: 'w-full inline-flex',
  input: {
    root: ({ props }) => ({
      className: classNames(
        'transition-colors duration-200 rounded-lg bg-base-100 border border-base-300 text-base-content placeholder:text-base-content/60 focus:outline-none focus:ring-2 focus:ring-primary/40',
        {
          'rounded-tr-none rounded-br-none':
            props.showButtons && props.buttonLayout === 'stacked',
        }
      ),
    }),
  },
  buttongroup: ({ props }) => ({
    className: classNames({
      'flex flex-col': props.showButtons && props.buttonLayout === 'stacked',
    }),
  }),
  incrementbutton: ({ props }) => ({
    className: classNames(
      'flex items-center justify-center bg-base-200 text-base-content hover:bg-base-300 transition-colors duration-200',
      {
        'rounded-br-none rounded-bl-none !p-0 flex-1 w-[3rem]':
          props.showButtons && props.buttonLayout === 'stacked',
      }
    ),
  }),
  decrementbutton: ({ props }) => ({
    className: classNames(
      'flex items-center justify-center bg-base-200 text-base-content hover:bg-base-300 transition-colors duration-200',
      {
        'rounded-tr-none rounded-tl-none !p-0 flex-1 w-[3rem]':
          props.showButtons && props.buttonLayout === 'stacked',
      }
    ),
  }),
};
