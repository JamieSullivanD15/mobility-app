import React from 'react';

import styles from './Vehicle.module.scss';
import Text from '../../components/common/font/Text';
import useVehicleImage from '../../hooks/useVehicleImage';
import placeholder from '../../assets/img/placeholder.jpg';

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
          src={placeholder}
          alt='placeholder'
        />
      </div>
    );
  }

  return (
    <div className={styles.info_image}>
      <object
        type='image/svg+xml'
        data={image}
      >
        <img
          src={placeholder}
          alt='placeholder'
        />
      </object>
    </div>
  );
};

export default VehicleImage;
