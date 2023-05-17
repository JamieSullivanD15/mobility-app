import React from 'react';
import { useParams } from 'react-router-dom';

import styles from '../components/layout/Layout.module.scss';
import { Card } from '../components/common/card/Card';
import { useAppSelector } from '../hooks/useAppSelector';

import type { RootState } from '../redux/store';
import type { Vehicle } from '../common/types';
import { Heading } from '../components/common/font/Heading';

export const VehicleInfo = () => {
  const { id } = useParams();
  const vehicle = useAppSelector((state: RootState) =>
    state.vehicle.data.find((vehicle: Vehicle) => vehicle.availabilityId === id)
  );

  if (vehicle === undefined) {
    return (
      <div className={styles.container}>
        <Heading align='center'>Vehicle not found</Heading>
      </div>
    );
  }

  return (
    <main className={styles.container}>
      <Card>{vehicle.category.vehicleType}</Card>
    </main>
  );
};
