import React from 'react';

import type { Vehicle } from '../../common/types';
import { Link } from '../../components/common/font/Link';

interface VehicleItemProps {
  vehicle: Vehicle;
}

export const VehicleItem = ({ vehicle }: VehicleItemProps) => {
  const { availabilityId, category } = vehicle;
  return (
    <li>
      <Link link={`/vehicle/${availabilityId}`}>{category.vehicleType}</Link>
    </li>
  );
};
