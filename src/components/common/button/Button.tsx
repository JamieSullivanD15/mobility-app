import React, { type ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  isIcon?: boolean;
  classNames?: string;
}

const Button = ({
  children,
  onClick,
  isIcon,
  classNames = '',
}: ButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={clsx({
        [styles.btn_icon]: isIcon,
        [classNames]: true,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
