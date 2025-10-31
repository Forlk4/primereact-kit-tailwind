import { classNames } from '@/utils/cn';

/**
 * @type {import('primereact/button').ButtonPassThroughOptions}
 */
export const button = {
  root: ({ props, context }) => ({
    className: classNames(
      'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom',
      'transition duration-200 ease-in-out',
      'focus:outline-none focus:outline-offset-0',
      {
        'text-primary-content bg-primary border border-primary hover:bg-primary/90 hover:border-primary/90 focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1)]':
          !props.link &&
          props.severity === null &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        'text-primary bg-transparent border-transparent focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1)]':
          props.link,
      },
      {
        'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(176,185,198,1)]':
          props.severity === 'secondary',
        'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(136,234,172,1)]':
          props.severity === 'success',
        'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1)]':
          props.severity === 'info',
        'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(250,207,133,1)]':
          props.severity === 'warning',
        'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(212,170,251,1)]':
          props.severity === 'help',
        'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(247,162,162,1)]':
          props.severity === 'danger',
      },
      {
        'text-secondary-content bg-secondary border border-secondary hover:bg-secondary/90 hover:border-secondary/90':
          props.severity === 'secondary' &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        'text-success-content bg-success border border-success hover:bg-success/90 hover:border-success/90':
          props.severity === 'success' &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        'text-info-content bg-info border border-info hover:bg-info/90 hover:border-info/90':
          props.severity === 'info' &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        'text-warning-content bg-warning border border-warning hover:bg-warning/90 hover:border-warning/90':
          props.severity === 'warning' &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        'text-accent-content bg-accent border border-accent hover:bg-accent/90 hover:border-accent/90':
          props.severity === 'help' &&
          !props.text &&
          !props.outlined &&
          !props.plain,
        'text-error-content bg-error border border-error hover:bg-error/90 hover:border-error/90':
          props.severity === 'danger' &&
          !props.text &&
          !props.outlined &&
          !props.plain,
      },
      { 'shadow-lg': props.raised },
      { 'rounded-md': !props.rounded, 'rounded-full': props.rounded },
      {
        'bg-transparent border-transparent': props.text && !props.plain,
        'text-primary hover:bg-primary/20':
          props.text &&
          (props.severity === null || props.severity === 'info') &&
          !props.plain,
        'text-secondary hover:bg-secondary/20':
          props.text && props.severity === 'secondary' && !props.plain,
        'text-success hover:bg-success/20':
          props.text && props.severity === 'success' && !props.plain,
        'text-warning hover:bg-warning/20':
          props.text && props.severity === 'warning' && !props.plain,
        'text-accent hover:bg-accent/20':
          props.text && props.severity === 'help' && !props.plain,
        'text-error hover:bg-error/20':
          props.text && props.severity === 'danger' && !props.plain,
      },
      { 'shadow-lg': props.raised && props.text },
      {
        'text-neutral hover:bg-neutral/20': props.plain && props.text,
        'text-neutral border border-neutral hover:bg-neutral/20':
          props.plain && props.outlined,
        'text-neutral-content bg-neutral border border-neutral hover:bg-neutral/90 hover:border-neutral/90':
          props.plain && !props.outlined && !props.text,
      },
      {
        'bg-transparent border': props.outlined && !props.plain,
        'text-primary border border-primary hover:bg-primary/20':
          props.outlined &&
          (props.severity === null || props.severity === 'info') &&
          !props.plain,
        'text-secondary border border-secondary hover:bg-secondary/20':
          props.outlined && props.severity === 'secondary' && !props.plain,
        'text-success border border-success hover:bg-success/20':
          props.outlined && props.severity === 'success' && !props.plain,
        'text-warning border border-warning hover:bg-warning/20':
          props.outlined && props.severity === 'warning' && !props.plain,
        'text-accent border border-accent hover:bg-accent/20':
          props.outlined && props.severity === 'help' && !props.plain,
        'text-error border border-error hover:bg-error/20':
          props.outlined && props.severity === 'danger' && !props.plain,
      },
      {
        'px-4 py-3 text-base': props.size === null,
        'text-xs py-2 px-3': props.size === 'small',
        'text-xl py-3 px-4': props.size === 'large',
      },
      { 'flex-column': props.iconPos == 'top' || props.iconPos == 'bottom' },
      { 'opacity-60 pointer-events-none cursor-default': context.disabled }
    ),
  }),
  label: ({ props }) => ({
    className: classNames(
      'flex-1',
      'duration-200',
      'font-bold',
      {
        'hover:underline': props.link,
      },
      { 'invisible w-0': props.label == null }
    ),
  }),
  icon: ({ props }) => ({
    className: classNames('mx-0', {
      'mr-2': props.iconPos == 'left' && props.label != null,
      'ml-2 order-1': props.iconPos == 'right' && props.label != null,
      'mb-2': props.iconPos == 'top' && props.label != null,
      'mt-2 order-2': props.iconPos == 'bottom' && props.label != null,
    }),
  }),
  loadingIcon: ({ props }) => ({
    className: classNames('mx-0', {
      'mr-2': props.loading && props.iconPos == 'left' && props.label != null,
      'ml-2 order-1':
        props.loading && props.iconPos == 'right' && props.label != null,
      'mb-2': props.loading && props.iconPos == 'top' && props.label != null,
      'mt-2 order-2':
        props.loading && props.iconPos == 'bottom' && props.label != null,
    }),
  }),
  badge: ({ props }) => ({
    className: classNames({
      'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge,
    }),
  }),
};
