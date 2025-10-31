// src/utils/cn.js
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function classNames(...inputs) {
  return twMerge(clsx(inputs));
}
