import React, { useEffect } from 'react';

import styles from '../components/layout/Layout.module.scss';
import { fetchVehicles } from '../redux/vehicleSlice';
import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';
import VehicleTable from '../components/vehicle/VehicleTable';

import type { RootState } from '../redux/store';
import Spinner from '../components/common/spinner/Spinner';

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

  if (loadingStatus === 'loading') {
    return <Spinner />;
  }

  return (
    <main className={styles.container}>
      <VehicleTable />
    </main>
  );
};

export default Home;
