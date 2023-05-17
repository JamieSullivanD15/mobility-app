import React from 'react';

import { VehicleItem } from './VehicleItem';

import type { Vehicle } from '../../common/types';

interface VehicleListProps {
  vehicles: Vehicle[];
}

export const VehicleList = ({ vehicles }: VehicleListProps) => {
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
