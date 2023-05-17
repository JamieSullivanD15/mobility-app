import React from 'react';

import type { Vehicle } from '../../common/types';

interface VehicleItemProps {
  vehicle: Vehicle;
}

export const VehicleItem = ({ vehicle }: VehicleItemProps) => {
  return <li>{vehicle.category.vehicleType}</li>;
};
