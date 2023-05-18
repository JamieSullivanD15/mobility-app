import React from 'react';

import VehicleItem from './VehicleItem';
import useAppSelector from '../../hooks/useAppSelector';
import Spinner from '../common/spinner/Spinner';
import styles from './Vehicle.module.scss';

import type { Vehicle } from '../../common/types';
import type { RootState } from '../../redux/store';

export const VehicleList = () => {
  const vehicles = useAppSelector((state: RootState) => state.vehicle.data);
  const loadingStatus = useAppSelector(
    (state: RootState) => state.vehicle.loadingStatus
  );

  if (loadingStatus === 'loading') {
    return <Spinner />;
  }

  return (
    <ul className={styles.list}>
      {vehicles.map((vehicle: Vehicle) => (
        <VehicleItem
          key={vehicle.availabilityId}
          vehicle={vehicle}
        />
      ))}
    </ul>
  );
};

export default VehicleList;
