import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/orderlist').OrderListPassThroughOptions}
 */
export const orderlist = {
  root: 'flex',

  controls: 'flex flex-col justify-center p-5',

  moveupbutton: {
    root: ({ context }) => ({
      className: classNames(
        'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0',
        'text-primary-content bg-primary border border-primary rounded-md',
        'transition duration-200 ease-in-out',
        'justify-center px-0 py-3',
        'mb-2 w-12',
        { 'cursor-default pointer-events-none opacity-60': context.disabled }
      ),
    }),
    label: () => ({ className: classNames('flex-initial w-0') }),
  },

  movetopbutton: {
    root: ({ context }) => ({
      className: classNames(
        'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0',
        'text-primary-content bg-primary border border-primary rounded-md',
        'transition duration-200 ease-in-out',
        'justify-center px-0 py-3',
        'mb-2',
        { 'cursor-default pointer-events-none opacity-60': context.disabled }
      ),
    }),
    label: () => ({ className: classNames('flex-initial w-0') }),
  },

  movedownbutton: {
    root: ({ context }) => ({
      className: classNames(
        'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0',
        'text-primary-content bg-primary border border-primary rounded-md',
        'transition duration-200 ease-in-out',
        'justify-center px-0 py-3',
        'mb-2',
        { 'cursor-default pointer-events-none opacity-60': context.disabled }
      ),
    }),
    label: () => ({ className: classNames('flex-initial w-0') }),
  },

  movebottombutton: {
    root: ({ context }) => ({
      className: classNames(
        'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0',
        'text-primary-content bg-primary border border-primary rounded-md',
        'transition duration-200 ease-in-out',
        'justify-center px-0 py-3',
        'mb-2',
        { 'cursor-default pointer-events-none opacity-60': context.disabled }
      ),
    }),
    label: () => ({ className: classNames('flex-initial w-0') }),
  },

  container: 'flex-auto',

  header: {
    className: classNames(
      'bg-base-200 text-base-content border border-base-300 p-5 font-bold border-b-0 rounded-t-md'
    ),
  },

  list: {
    className: classNames(
      'list-none m-0 p-0 overflow-auto min-h-[12rem] max-h-[24rem]',
      'border border-base-300 bg-base-100 text-base-content py-3 px-0 rounded-b-md outline-none'
    ),
  },

  item: ({ context }) => ({
    className: classNames(
      'relative cursor-pointer overflow-hidden py-3 px-5 m-0 border-none text-base-content transition duration-200',
      {
        'text-primary bg-primary/10': context.selected,
      }
    ),
  }),
};
