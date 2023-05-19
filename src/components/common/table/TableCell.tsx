import React from 'react';
import { clsx } from 'clsx';

import styles from './Table.module.scss';
import Text from '../font/Text';

import Button from '../button/Button';
import { Icon } from '../font/Icon';
import useScreenSize from '../../../hooks/useScreenSize';

import type { Cell, TableSortOrder } from './Table';

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
  const { isTablet } = useScreenSize();
  const fontSize = isTablet ? 'xs' : 'sm';

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
              size={fontSize}
            >
              {cell.label}
            </Text>
            <Icon
              colour='dark'
              icon={icon}
              classNames={styles.cell_icon}
            />
          </Button>
        </>
      ) : (
        <Text
          isBlock={false}
          size={fontSize}
        >
          {cell.label}
        </Text>
      )}
    </div>
  );
};

export default TableCell;
