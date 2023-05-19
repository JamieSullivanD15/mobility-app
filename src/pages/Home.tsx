import React, { useEffect } from 'react';

import styles from '../components/layout/Layout.module.scss';
import { fetchVehicles } from '../features/vehicle/vehicleSlice';
import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';
import VehicleTable from '../features/vehicle/VehicleTable';
import Spinner from '../components/common/spinner/Spinner';

import type { RootState } from '../app/store';

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
      {loadingStatus === 'loading' ? <Spinner /> : <VehicleTable />}
    </main>
  );
};

export default Home;
