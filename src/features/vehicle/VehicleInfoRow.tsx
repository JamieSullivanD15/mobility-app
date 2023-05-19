import React, { type ReactNode } from 'react';

import styles from './Vehicle.module.scss';
import Text from '../../components/common/font/Text';
import { toCamelCase } from '../../common/utils';
import { clsx } from 'clsx';
import useAppSelector from '../../hooks/useAppSelector';

import type { RootState } from '../../app/store';

interface VehicleInfoRowProps {
  label: string;
  value: string | number | ReactNode;
  shouldCamelCase?: boolean;
  isHighlighted?: boolean;
}

const VehicleInfoRow = ({
  label,
  value,
  shouldCamelCase = false,
  isHighlighted = false,
}: VehicleInfoRowProps) => {
  const { isDarkMode } = useAppSelector((state: RootState) => state.app);

  return (
    <div
      className={clsx({
        [styles.info_row]: true,
        [styles['info_row-dark']]: true,
        [styles['info_row-highlight']]: isHighlighted,
        [styles['info_row-highlight-dark']]: isHighlighted && isDarkMode,
      })}
    >
      <Text
        size='md'
        colour={isHighlighted ? 'dark' : 'gray'}
        weight={isHighlighted ? 'bold' : 'medium'}
        isBlock={false}
      >
        {label}
      </Text>
      <Text
        size='md'
        colour={isHighlighted ? 'dark' : 'gray'}
        weight={isHighlighted ? 'bold' : 'medium'}
        isBlock={false}
      >
        {shouldCamelCase && typeof value === 'string'
          ? toCamelCase(value)
          : value}
      </Text>
    </div>
  );
};

export default VehicleInfoRow;
