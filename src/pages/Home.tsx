import React from 'react';

import { VehicleList } from '../features/vehicle/VehicleList';
import styles from '../components/layout/Layout.module.scss';

export const Home = () => {
  return (
    <main className={styles.container}>
      <VehicleList />
    </main>
  );
};
