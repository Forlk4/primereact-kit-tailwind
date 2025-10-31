import { classNames } from '@/utils/cn';
/** @type {import('primereact/tristatecheckbox').TriStateCheckboxPassThroughOptions} */
export const tristatecheckbox = {
  root: {
    className: classNames(
      'cursor-pointer inline-flex relative select-none align-bottom',
      'w-6 h-6'
    ),
  },
  input: {
    className: classNames(
      'absolute appearance-none top-0 left-0 size-full p-0 m-0 opacity-0 z-10 outline-none cursor-pointer'
    ),
  },
  box: ({ props }) => ({
    className: classNames(
      'flex items-center justify-center',
      'border-2 w-6 h-6 rounded-lg transition-colors duration-200',
      {
        // Aktif (true / false)
        'border-primary bg-primary text-base-100': props.value || !props.value,
        // Nilai null
        'border-base-300 text-base-content bg-base-100': props.value == null,
      },
      {
        // Efek hover & fokus
        'hover:border-primary focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]':
          !props.disabled,
        // Kondisi disabled
        'cursor-default opacity-60': props.disabled,
      }
    ),
  }),
  icon: 'w-4 h-4 transition-all duration-200 text-base-100 text-base',
};
