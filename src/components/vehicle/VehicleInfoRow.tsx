import React from 'react';

import styles from './Vehicle.module.scss';
import Text from '../common/font/Text';
import { toCamelCase } from '../../common/utils';

interface VehicleInfoRowProps {
  label: string;
  value: string | number;
  shouldCamelCase?: boolean;
}

const VehicleInfoRow = ({
  label,
  value,
  shouldCamelCase = false,
}: VehicleInfoRowProps) => {
  return (
    <div className={styles.infoRow}>
      <Text
        size='md'
        colour='gray'
      >
        {label}
      </Text>
      <Text
        size='md'
        colour='gray'
      >
        {shouldCamelCase && typeof value === 'string'
          ? toCamelCase(value)
          : value}
      </Text>
    </div>
  );
};

export default VehicleInfoRow;
