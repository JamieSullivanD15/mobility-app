import React, { type ReactNode } from 'react';

import styles from './Button.module.scss';
import { clsx } from 'clsx';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  classNames?: string;
}

const Button = ({ children, onClick, classNames = '' }: ButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={clsx({
        [styles.btn]: true,
        [classNames]: true,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
