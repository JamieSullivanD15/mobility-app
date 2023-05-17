import React from 'react';

import { VehicleItem } from './VehicleItem';
import { useAppSelector } from '../../hooks/useAppSelector';

import type { Vehicle } from '../../common/types';

export const VehicleList = () => {
  const vehicles = useAppSelector((state) => state.vehicle.data);

  return (
    <ul>
      {vehicles.map((vehicle: Vehicle) => (
        <VehicleItem
          key={vehicle.availabilityId}
          vehicle={vehicle}
        />
      ))}
    </ul>
  );
};
