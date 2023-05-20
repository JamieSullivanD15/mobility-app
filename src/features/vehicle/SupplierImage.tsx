import React from 'react';

import { ReactComponent as SupplierBolt } from '../../assets/img/supplier-bolt.svg';
import { ReactComponent as SupplierFreenow } from '../../assets/img/supplier-freenow.svg';

import type { Supplier, SVG } from '../../common/types';

interface VehicleImageProps {
  supplier: Supplier;
}

interface Images {
  bolt: SVG;
  freenow: SVG;
}

const SupplierImage = ({ supplier }: VehicleImageProps) => {
  const images: Images = {
    bolt: SupplierBolt,
    freenow: SupplierFreenow,
  };
  const Image = images[supplier.supplierKey as keyof Images];
  return <Image />;
};

export default SupplierImage;
