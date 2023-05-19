import React from 'react';

import useSupplierImage from '../../hooks/useSupplierImage';
import Text from '../../components/common/font/Text';

import type { Supplier } from '../../common/types';

interface VehicleImageProps {
  supplier: Supplier;
}

const SupplierImage = ({ supplier }: VehicleImageProps) => {
  const { supplierKey } = supplier;
  const { isLoading, error, image } = useSupplierImage(supplierKey);

  if (isLoading) return <Text size='xs'>Loading image...</Text>;
  if (error) return <Text size='xs'>Something went wrong</Text>;

  return (
    <img
      width={30}
      src={image}
      alt={`${supplierKey}`}
    />
  );
};

export default SupplierImage;
