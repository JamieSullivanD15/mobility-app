import React, { useEffect } from 'react';

import { VehicleList } from '../components/vehicle/VehicleList';
import styles from '../components/layout/Layout.module.scss';
import { fetchVehicles } from '../redux/vehicleSlice';
import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';
import type { RootState } from '../redux/store';

const Home = () => {
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector(
    (state: RootState) => state.vehicle.loadingStatus
  );
  const vehicles = useAppSelector((state: RootState) => state.vehicle.data);

  useEffect(() => {
    if (loadingStatus === 'idle' && vehicles.length === 0) {
      void dispatch(fetchVehicles());
    }
  }, [dispatch]);

  return (
    <main className={styles.container}>
      <VehicleList />
    </main>
  );
};

export default Home;
