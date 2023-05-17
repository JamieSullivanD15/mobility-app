import React, { useEffect } from 'react';

import { VehicleList } from '../components/vehicle/VehicleList';
import styles from '../components/layout/Layout.module.scss';
import { fetchVehicles } from '../redux/vehicleSlice';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import type { RootState } from '../redux/store';

export const Home = () => {
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector(
    (state: RootState) => state.vehicle.loadingStatus
  );

  useEffect(() => {
    if (loadingStatus === 'idle') {
      void dispatch(fetchVehicles());
    }
  }, [dispatch]);
  return (
    <main className={styles.container}>
      <VehicleList />
    </main>
  );
};
