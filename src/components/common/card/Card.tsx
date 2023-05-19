import React, { type ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './Card.module.scss';
import useAppSelector from '../../../hooks/useAppSelector';

import type { RootState } from '../../../app/store';

interface CardProps {
  children: ReactNode;
  classNames?: string;
}

const Card = ({ children, classNames = '' }: CardProps) => {
  const { isDarkMode } = useAppSelector((state: RootState) => state.app);
  const classes: string = clsx({
    [styles.card]: true,
    [styles['card-dark']]: isDarkMode,
    [classNames]: true,
  });

  return <div className={classes}>{children}</div>;
};

export default Card;
