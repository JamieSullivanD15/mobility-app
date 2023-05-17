import React, { type ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './Font.module.scss';

export type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FontWeight = 'light' | 'regular' | 'medium' | 'bold';
export type FontColour = 'primary' | 'dark' | 'gray' | 'white';
export type TextAlign = 'left' | 'center' | 'right';

interface TextProps {
  children: ReactNode;
  isBlock?: boolean;
  weight?: FontWeight;
  size?: FontSize;
  colour?: FontColour;
  align?: TextAlign;
  classNames?: string;
}

export const Text = ({
  children,
  isBlock = true,
  weight = 'regular',
  size = 'sm',
  colour = 'dark',
  align = 'left',
  classNames = '',
}: TextProps) => {
  const classes: string = clsx({
    [styles['font-light']]: weight === 'light',
    [styles['font-regular']]: weight === 'regular',
    [styles['font-medium']]: weight === 'medium',
    [styles['font-bold']]: weight === 'bold',
    [styles['font-xs']]: size === 'xs',
    [styles['font-sm']]: size === 'sm',
    [styles['font-md']]: size === 'md',
    [styles['font-dark']]: colour === 'dark',
    [styles['font-gray-dark']]: colour === 'gray',
    [styles['font-white']]: colour === 'white',
    [styles['text-left']]: align === 'left',
    [styles['text-center']]: align === 'center',
    [styles['text-right']]: align === 'right',
    [classNames]: true,
  });

  return isBlock ? (
    <p className={classes}>{children}</p>
  ) : (
    <span className={classes}>{children}</span>
  );
};
