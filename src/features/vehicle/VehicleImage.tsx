import React from 'react';

import styles from './Vehicle.module.scss';
import Text from '../../components/common/font/Text';
import useVehicleImage from '../../hooks/useVehicleImage';
import placeholderImg from '../../assets/img/placeholder.svg';

import type { Category } from '../../common/types';

interface VehicleImageProps {
  category: Category;
}

const VehicleImage = ({ category }: VehicleImageProps) => {
  const { isLoading, error, image } = useVehicleImage(category);

  if (error) return <Text size='xs'>Something went wrong</Text>;
  if (isLoading) {
    return (
      <div className={styles.info_image}>
        <img
          height={300}
          src={placeholderImg}
          alt='placeholder'
        />
      </div>
    );
  }

  return (
    <div className={styles.info_image}>
      <img
        src={image}
        alt={`${category.productType}-${category.vehicleType}`}
      />
    </div>
  );
};

export default VehicleImage;
