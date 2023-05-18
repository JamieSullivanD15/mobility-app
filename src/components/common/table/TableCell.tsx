import React from 'react';

import Text from '../font/Text';
import styles from './Table.module.scss';

import type { Cell } from './Table';
import Button from '../button/Button';
import { Icon } from '../font/Icon';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';

interface TableCellProps {
  cell: Cell;
  isHeaderCell?: boolean;
}

const TableCell = ({ cell, isHeaderCell }: TableCellProps) => {
  return (
    <div className={styles.cell}>
      {isHeaderCell ? (
        <>
          <Text
            isBlock={false}
            weight='medium'
          >
            {cell.label}
          </Text>
          <Button
            onClick={() => {}}
            isIcon
          >
            <Icon
              colour='dark'
              icon={faSortUp}
            />
          </Button>
        </>
      ) : (
        <Text isBlock={false}>{cell.label}</Text>
      )}
    </div>
  );
};

export default TableCell;
