import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/splitbutton').SplitButtonPassThroughOptions}
 */
export const splitbutton = {
  root: ({ props }) => ({
    className: classNames(
      'inline-flex relative overflow-hidden',
      'rounded-btn',
      { 'shadow-lg': props.raised }
    ),
  }),
  button: {
    root: ({ parent }) => ({
      className: classNames(
        'rounded-r-none border-r-0 bg-primary text-primary-content hover:bg-primary/80 transition-colors',
        { 'rounded-l-full': parent.props.rounded }
      ),
    }),
    icon: 'mr-2',
  },
  menubutton: {
    root: ({ parent }) => ({
      className: classNames(
        'rounded-l-none bg-primary text-primary-content hover:bg-primary/80 transition-colors',
        { 'rounded-r-full': parent.props.rounded }
      ),
    }),
    label: 'hidden',
    icon: 'text-base-content/80',
  },
  menu: 'outline-none m-0 p-0 list-none bg-base-100 border border-base-300 rounded-md shadow-md',
  menulist: 'relative divide-y divide-base-200',
};
