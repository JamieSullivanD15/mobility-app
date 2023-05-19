import React from 'react';
import { clsx } from 'clsx';

import styles from './Font.module.scss';

import type { FontColour } from './Text';

export interface IconBaseProps {
  icon: string;
  colour?: FontColour;
}

interface IconProps extends IconBaseProps {
  classNames?: string;
}

export const Icon = ({
  icon,
  colour = 'white',
  classNames = '',
}: IconProps) => {
  const classes: string = clsx({
    [styles['font-xs']]: true,
    [styles['font-dark']]: colour === 'dark',
    [styles['font-gray-dark']]: colour === 'gray',
    [styles['font-white']]: colour === 'white',
    [classNames]: true,
  });

  return <i className={`bi bi-${icon} ${classes}`} />;
};
