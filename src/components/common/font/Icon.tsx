import React from 'react';
import { clsx } from 'clsx';

import styles from './Font.module.scss';

import type { FontColour, FontSize } from './Text';

export interface IconBaseProps {
  icon: string;
  colour?: FontColour;
  size?: FontSize;
}

interface IconProps extends IconBaseProps {
  classNames?: string;
}

export const Icon = ({
  icon,
  colour = 'white',
  size = 'xs',
  classNames = '',
}: IconProps) => {
  const classes: string = clsx({
    [styles['font-xs']]: size === 'xs',
    [styles['font-sm']]: size === 'sm',
    [styles['font-md']]: size === 'md',
    [styles['font-lg']]: size === 'lg',
    [styles['font-xl']]: size === 'xl',
    [styles['font-dark']]: colour === 'dark',
    [styles['font-gray-dark']]: colour === 'gray',
    [styles['font-white']]: colour === 'white',
    [classNames]: true,
  });

  return <i className={`bi bi-${icon} ${classes}`} />;
};
