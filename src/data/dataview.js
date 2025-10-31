import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/dataview').DataViewPassThroughOptions}
 */
export const dataview = {
  content: {
    className: classNames('bg-base-100 text-base-content border-0 p-0'),
  },

  grid: 'flex flex-wrap ml-0 mr-0 mt-0 bg-base-100',

  header:
    'bg-base-200 text-base-content border-base-300 border-t border-b p-4 font-bold',
};

/**
 * @type {import('primereact/dataview').DataViewLayoutOptionsPassThroughOptions}
 */
export const dataviewlayoutoptions = {
  listbutton: ({ props }) => ({
    className: classNames(
      'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
      'transition duration-200',
      'w-12 pt-3 pb-3 rounded-lg rounded-r-none',
      props.layout === 'list'
        ? 'bg-primary border-primary text-primary-content'
        : 'bg-base-100 border-base-300 text-base-content'
    ),
  }),

  gridbutton: ({ props }) => ({
    className: classNames(
      'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
      'transition duration-200',
      'w-12 pt-3 pb-3 rounded-lg rounded-l-none',
      props.layout === 'grid'
        ? 'bg-primary border-primary text-primary-content'
        : 'bg-base-100 border-base-300 text-base-content'
    ),
  }),
};
