import React from 'react';

import { ReactComponent as SupplierBolt } from '../../assets/img/supplier_bolt.svg';
import { ReactComponent as SupplierFreenow } from '../../assets/img/supplier_freenow.svg';

import type { Supplier } from '../../common/types';

interface VehicleImageProps {
  supplier: Supplier;
}

interface Images {
  bolt: any;
  freenow: any;
}

const SupplierImage = ({ supplier }: VehicleImageProps) => {
  const images: Images = {
    bolt: SupplierBolt,
    freenow: SupplierFreenow,
  };
  const imageStr = supplier.supplierKey;
  const Image = images[imageStr as keyof Images];
  return <Image />;
};

export default SupplierImage;
