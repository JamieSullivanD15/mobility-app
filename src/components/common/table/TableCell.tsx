import React from 'react';

import styles from './Table.module.scss';
import Text from '../font/Text';

import Button from '../button/Button';
import { Icon } from '../font/Icon';

import type { Cell, TableSortOrder } from './Table';
import { clsx } from 'clsx';

interface TableCellProps {
  cell: Cell;
  isHeaderCell?: boolean;
  onClick: () => void;
  sortOrder?: TableSortOrder;
}

const TableCell = ({
  cell,
  isHeaderCell,
  onClick,
  sortOrder,
}: TableCellProps) => {
  const isActive = sortOrder?.key === cell.key;
  const isAsc = sortOrder?.isAsc;
  const icon = isActive && isAsc ? 'caret-up-fill' : 'caret-down-fill';

  return (
    <div
      className={clsx({
        [styles.cell]: true,
        [styles['cell-asc']]: isActive && isAsc,
      })}
    >
      {isHeaderCell ? (
        <>
          <Button
            onClick={onClick}
            isIcon
          >
            <Text
              isBlock={false}
              weight={isActive ? 'bold' : 'regular'}
            >
              {cell.label}
            </Text>
            <Icon
              colour='dark'
              icon={icon}
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
