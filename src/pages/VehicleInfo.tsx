import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from '../components/layout/Layout.module.scss';
import Card from '../components/common/card/Card';
import useAppSelector from '../hooks/useAppSelector';
import Heading from '../components/common/font/Heading';
import useAppDispatch from '../hooks/useAppDispatch';
import { fetchVehicles } from '../redux/vehicleSlice';
import VehicleImage from '../components/vehicle/VehicleImage';

import type { RootState } from '../redux/store';
import type { Vehicle } from '../common/types';

const VehicleInfo = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const vehicles = useAppSelector((state: RootState) => state.vehicle.data);
  const vehicle = vehicles.find(
    (vehicle: Vehicle) => vehicle.availabilityId === id
  );
  const loadingStatus = useAppSelector(
    (state: RootState) => state.vehicle.loadingStatus
  );

  useEffect(() => {
    if (loadingStatus === 'idle' && vehicles.length === 0) {
      void dispatch(fetchVehicles());
    }
  }, [dispatch]);

  if (vehicle === undefined) {
    return (
      <div className={styles.container}>
        <Heading align='center'>Vehicle not found</Heading>
      </div>
    );
  }

  return (
    <main className={styles.container}>
      <Card>
        <VehicleImage category={vehicle.category} />
      </Card>
    </main>
  );
};

export default VehicleInfo;
