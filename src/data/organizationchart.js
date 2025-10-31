import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/organizationchart').OrganizationChartPassThroughOptions}
 */
export const organizationchart = {
  table: 'mx-auto my-0 border-spacing-0 border-separate',
  cell: 'text-center align-top py-0 px-3',

  node: {
    className: classNames(
      'relative inline-block bg-base-100 border border-base-300 text-base-content p-5'
    ),
  },

  linecell: 'text-center align-top py-0 px-3',

  linedown: {
    className: classNames('mx-auto my-0 w-px h-[20px] bg-base-300'),
  },

  lineleft: ({ context }) => ({
    className: classNames(
      'text-center align-top py-0 px-3 rounded-none border-r border-base-300',
      {
        'border-t': context.lineTop,
      }
    ),
  }),

  lineright: ({ context }) => ({
    className: classNames('text-center align-top py-0 px-3 rounded-none', {
      'border-t border-base-300': context.lineTop,
    }),
  }),

  nodecell: 'text-center align-top py-0 px-3',

  nodetoggler: {
    className: classNames(
      'absolute bottom-[-0.75rem] left-2/4 -ml-3 w-6 h-6 bg-inherit text-inherit rounded-full z-2 cursor-pointer no-underline select-none',
      'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
    ),
  },

  nodetogglericon: 'relative inline-block w-4 h-4',
};
