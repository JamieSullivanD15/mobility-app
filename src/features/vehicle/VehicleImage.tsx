import React from 'react';

import styles from './Vehicle.module.scss';
import { ReactComponent as OtherAccessible } from '../../assets/img/vehicle_other_accessible.svg';
import { ReactComponent as OtherEco } from '../../assets/img/vehicle_other_eco.svg';
import { ReactComponent as StandardMinibus } from '../../assets/img/vehicle_standard_minibus.svg';
import { ReactComponent as StandardSedan } from '../../assets/img/vehicle_standard_sedan.svg';
import { ReactComponent as StandardSuv } from '../../assets/img/vehicle_standard_suv.svg';

import type { Category } from '../../common/types';

interface VehicleImageProps {
  category: Category;
}

interface Images {
  other_accessible: any;
  other_eco: any;
  standard_minibus: any;
  standard_sedan: any;
  standard_suv: any;
}

const VehicleImage = ({ category }: VehicleImageProps) => {
  const images: Images = {
    other_accessible: OtherAccessible,
    other_eco: OtherEco,
    standard_minibus: StandardMinibus,
    standard_sedan: StandardSedan,
    standard_suv: StandardSuv,
  };
  const { productType, vehicleType } = category;
  const imageStr = `${productType.toLowerCase()}_${vehicleType.toLowerCase()}`;
  const Image = images[imageStr as keyof Images];
  return (
    <div className={styles.info_image}>
      <Image />
    </div>
  );
};

export default VehicleImage;
