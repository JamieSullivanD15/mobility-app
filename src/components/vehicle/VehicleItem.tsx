import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Card } from '../common/card/Card';

import type { Vehicle } from '../../common/types';

interface VehicleItemProps {
  vehicle: Vehicle;
}

export const VehicleItem = ({ vehicle }: VehicleItemProps) => {
  const navigate = useNavigate();
  const { availabilityId, category } = vehicle;

  const handleClick = () => {
    navigate(`/vehicle/${availabilityId}`);
  };

  return (
    <li onClick={handleClick}>
      <Card>{category.vehicleType}</Card>
    </li>
  );
};
