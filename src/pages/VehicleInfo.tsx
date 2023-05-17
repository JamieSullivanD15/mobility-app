import React from 'react';
import { useParams } from 'react-router-dom';

import styles from '../components/layout/Layout.module.scss';

export const VehicleInfo = () => {
  const { id } = useParams();

  return <main className={styles.container}>{id}</main>;
};
