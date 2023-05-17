import React, { type ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './Font.module.scss';

interface LinkProps {
  children: ReactNode;
  link: string;
  classNames?: string;
}

export const Link = ({ children, link, classNames = '' }: LinkProps) => {
  const classes: string = clsx({
    [styles['font-medium']]: true,
    [styles['font-xs']]: true,
    [styles.link]: true,
    [classNames]: true,
  });

  return (
    <a
      href={link}
      className={classes}
    >
      {children}
    </a>
  );
};
