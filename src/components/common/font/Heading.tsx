import React, { type ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './Font.module.scss';

import type { FontWeight, FontColour, TextAlign, FontSize } from './Text';

interface HeadingProps {
  children: ReactNode;
  weight?: FontWeight;
  colour?: FontColour;
  align?: TextAlign;
  size?: FontSize;
  classNames?: string;
}

const Heading = ({
  children,
  weight = 'bold',
  colour = 'dark',
  align = 'left',
  size = 'xl',
  classNames = '',
}: HeadingProps) => (
  <h1
    className={clsx({
      [styles['font-medium']]: weight === 'medium',
      [styles['font-bold']]: weight === 'bold',
      [styles['font-dark']]: colour === 'dark',
      [styles['font-gray-dark']]: colour === 'gray',
      [styles['font-white']]: colour === 'white',
      [styles['font-lg']]: size === 'lg',
      [styles['font-xl']]: size === 'xl',
      [styles['text-left']]: align === 'left',
      [styles['text-center']]: align === 'center',
      [styles['text-right']]: align === 'right',
      [classNames]: true,
    })}
  >
    {children}
  </h1>
);

export default Heading;
