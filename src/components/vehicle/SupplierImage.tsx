import React from 'react';

import useSupplierImage from '../../hooks/useSupplierImage';
import Text from '../common/font/Text';

import type { Supplier } from '../../common/types';

interface VehicleImageProps {
  supplier: Supplier;
}

const SupplierImage = ({ supplier }: VehicleImageProps) => {
  const { supplierKey } = supplier;
  const { loading, error, image } = useSupplierImage(supplierKey);

  if (loading) return <Text size='xs'>Loading image...</Text>;
  if (error) return <Text size='xs'>Something went wrong</Text>;

  return (
    <img
      src={image}
      alt={`${supplierKey}`}
    />
  );
};

export default SupplierImage;
