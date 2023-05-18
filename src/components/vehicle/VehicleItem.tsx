import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../common/card/Card';
import SupplierImage from './SupplierImage';

import type { Vehicle } from '../../common/types';

interface VehicleItemProps {
  vehicle: Vehicle;
}

const VehicleItem = ({ vehicle }: VehicleItemProps) => {
  const navigate = useNavigate();
  const { availabilityId, category, supplier } = vehicle;

  const handleClick = () => {
    navigate(`/vehicle/${availabilityId}`);
  };

  return (
    <li onClick={handleClick}>
      <Card>
        <SupplierImage supplier={supplier} />
        {category.vehicleType}
      </Card>
    </li>
  );
};

export default VehicleItem;
