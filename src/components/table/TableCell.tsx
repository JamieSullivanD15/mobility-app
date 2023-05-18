import React from 'react';

import Text from '../common/font/Text';

import type { Cell } from './Table';
import styles from './Table.module.scss';

interface TableCellProps {
  cell: Cell;
  isHeaderCell?: boolean;
}

const TableCell = ({ cell, isHeaderCell }: TableCellProps) => {
  return (
    <div className={styles.cell}>
      <Text
        isBlock={false}
        weight={isHeaderCell ? 'medium' : 'regular'}
      >
        {cell.label}
      </Text>
    </div>
  );
};

export default TableCell;
