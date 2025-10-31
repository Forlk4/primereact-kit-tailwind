import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/floatlabel').FloatLabelPassThroughOptions}
 */
export const floatlabel = {
  root: {
    className: classNames(
      'block relative',
      '[&>label]:absolute [&>label]:pointer-events-none [&>label]:left-2 [&>label]:top-1/2 [&>label]:-mt-2 [&>label]:leading-none [&>label]:transition-all [&>label]:ease-in-out text-base-content/80',
      '[&>textarea~label]:top-4',
      '[&>input:focus~label]:-top-3 [&>input:focus~label]:text-xs [&>input:focus~label]:text-primary',
      '[&>input:autofill~label]:-top-3 [&>input:autofill~label]:text-xs [&>input:autofill~label]:text-primary',
      '[&>input.p-filled~label]:-top-3 [&>input.p-filled~label]:text-xs [&>input.p-filled~label]:text-primary',
      '[&>textarea:focus~label]:-top-3 [&>textarea:focus~label]:text-xs [&>textarea:focus~label]:text-primary',
      '[&>textarea.p-filled~label]:-top-3 [&>textarea.p-filled~label]:text-xs [&>textarea.p-filled~label]:text-primary',
      '[&>div[data-pc-name="dropdown"][data-p-focus="false"]~label]:-top-3 [&>div[data-pc-name="dropdown"][data-p-focus="false"]~label]:text-xs [&>div[data-pc-name="dropdown"][data-p-focus="false"]~label]:text-primary',
      '[&>input::placeholder]:opacity-0 [&>input::placeholder]:transition-all [&>input::placeholder]:ease-in-out',
      '[&>input:focus::placeholder]:opacity-100 [&>input:focus::placeholder]:transition-all [&>input:focus::placeholder]:ease-in-out'
    ),
  },
};
