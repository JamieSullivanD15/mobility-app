import React from 'react';

import styles from './Layout.module.scss';
import { Heading } from '../common/font/Heading';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Heading>Mobility App</Heading>
    </header>
  );
};
