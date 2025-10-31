import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/fileupload').FileUploadPassThroughOptions}
 */
export const fileupload = {
  input: 'hidden',

  buttonbar: {
    className: classNames(
      'flex flex-wrap',
      'bg-base-200 p-5 border border-solid border-base-300 text-base-content rounded-tr-lg rounded-tl-lg gap-2 border-b-0'
    ),
  },

  basicButton: {
    className: classNames(
      'text-primary-content bg-primary border border-primary p-3 px-5 rounded-md text-base',
      'overflow-hidden relative'
    ),
  },

  chooseButton: {
    className: classNames(
      'text-primary-content bg-primary border border-primary p-3 px-5 rounded-md text-base',
      'overflow-hidden relative'
    ),
  },

  chooseIcon: 'mr-2 inline-block',
  chooseButtonLabel: 'flex-1 font-bold',

  uploadButton: {
    icon: 'mr-2',
  },

  cancelButton: {
    icon: 'mr-2',
  },

  content: {
    className: classNames(
      'relative',
      'bg-base-100 p-8 border border-base-300 text-base-content rounded-b-lg'
    ),
  },

  file: {
    className: classNames(
      'flex items-center flex-wrap',
      'p-4 border border-base-300 rounded gap-2 mb-2',
      'last:mb-0'
    ),
  },

  thumbnail: 'shrink-0',
  fileName: 'mb-2',
  fileSize: 'mr-2',
  uploadIcon: 'mr-2',
};
