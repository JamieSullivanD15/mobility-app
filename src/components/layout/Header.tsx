import React from 'react';
import { clsx } from 'clsx';

import styles from './Layout.module.scss';
import Heading from '../common/font/Heading';
import Button from '../common/button/Button';
import { Icon } from '../common/font/Icon';
import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import { toggleTheme } from '../../app/appSlice';

import type { RootState } from '../../app/store';

const Header = () => {
  const dispatch = useAppDispatch();
  const { isDarkMode } = useAppSelector((state: RootState) => state.app);
  const icon = isDarkMode ? 'brightness-high-fill' : 'moon';
  const colour = isDarkMode ? 'white' : 'dark';

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <header
      className={clsx({
        [styles.header]: true,
        [styles['header-dark']]: isDarkMode,
      })}
    >
      <Heading colour={colour}>Mobility App</Heading>
      <Button
        onClick={handleThemeToggle}
        isIcon
      >
        <Icon
          colour={colour}
          size='xl'
          icon={icon}
        />
      </Button>
    </header>
  );
};

export default Header;
