import React from 'react';

import styles from './Vehicle.module.scss';
import { ReactComponent as OtherAccessible } from '../../assets/img/vehicle-other-accessible.svg';
import { ReactComponent as OtherEco } from '../../assets/img/vehicle-other-eco.svg';
import { ReactComponent as StandardMinibus } from '../../assets/img/vehicle-standard-minibus.svg';
import { ReactComponent as StandardSedan } from '../../assets/img/vehicle-standard-sedan.svg';
import { ReactComponent as StandardSuv } from '../../assets/img/vehicle-standard-suv.svg';

import type { Category, SVG } from '../../common/types';

interface VehicleImageProps {
  category: Category;
}

interface Images {
  other_accessible: SVG;
  other_eco: SVG;
  standard_minibus: SVG;
  standard_sedan: SVG;
  standard_suv: SVG;
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
  const imageKey = `${productType.toLowerCase()}_${vehicleType.toLowerCase()}`;
  const Image = images[imageKey as keyof Images];
  return (
    <div className={styles.info_image}>
      <Image />
    </div>
  );
};

export default VehicleImage;
