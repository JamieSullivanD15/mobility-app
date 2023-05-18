import React from 'react';

import styles from './Vehicle.module.scss';
import Text from '../../components/common/font/Text';
import { toCamelCase } from '../../common/utils';
import { clsx } from 'clsx';

interface VehicleInfoRowProps {
  label: string;
  value: string | number;
  shouldCamelCase?: boolean;
  isHighlighted?: boolean;
}

const VehicleInfoRow = ({
  label,
  value,
  shouldCamelCase = false,
  isHighlighted = false,
}: VehicleInfoRowProps) => {
  return (
    <div
      className={clsx({
        [styles.info_row]: true,
        [styles['info_row-highlight']]: isHighlighted,
      })}
    >
      <Text
        size='md'
        colour={isHighlighted ? 'dark' : 'gray'}
        weight={isHighlighted ? 'bold' : 'medium'}
      >
        {label}
      </Text>
      <Text
        size='md'
        colour={isHighlighted ? 'dark' : 'gray'}
        weight={isHighlighted ? 'bold' : 'medium'}
      >
        {shouldCamelCase && typeof value === 'string'
          ? toCamelCase(value)
          : value}
      </Text>
    </div>
  );
};

export default VehicleInfoRow;
