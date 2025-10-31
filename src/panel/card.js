import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/card').CardPassThroughOptions}
 */
export const card = {
  root: {
    className: classNames('bg-base-100 text-base-content shadow-md rounded-md'),
  },

  body: 'p-5',

  title: 'text-2xl font-bold mb-2',

  subtitle: {
    className: classNames('font-normal mb-2 text-base-content/70'),
  },

  content: 'py-5',

  footer: 'pt-5',
};
