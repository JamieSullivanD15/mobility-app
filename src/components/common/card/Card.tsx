import React, { type ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './Card.module.scss';

interface CardProps {
  children: ReactNode;
  classNames?: string;
}

const Card = ({ children, classNames = '' }: CardProps) => {
  const classes: string = clsx({
    [styles.card]: true,
    [classNames]: true,
  });

  return <div className={classes}>{children}</div>;
};

export default Card;
