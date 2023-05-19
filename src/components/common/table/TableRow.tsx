import React from 'react';
import { clsx } from 'clsx';

import styles from './Table.module.scss';
import TableCell from './TableCell';
import useAppSelector from '../../../hooks/useAppSelector';

import type { Cell, TableSortOrder } from './Table';
import type { RootState } from '../../../app/store';

interface TableHeaderProps {
  id: string;
  cells: Cell[];
  isHeader?: boolean;
  onRowClick?: () => void;
  onSort?: (key: string) => void;
  sortOrder?: TableSortOrder;
}

const TableRow = ({
  id,
  cells,
  isHeader,
  onRowClick,
  onSort,
  sortOrder,
}: TableHeaderProps) => {
  const { isDarkMode } = useAppSelector((state: RootState) => state.app);

  return (
    <div
      className={clsx({
        [styles.row]: true,
        [styles['row-dark']]: isDarkMode,
        [styles.header]: isHeader,
        [styles['header-dark']]: isHeader && isDarkMode,
      })}
      onClick={onRowClick}
    >
      {cells.map((cell: Cell, i: number) => (
        <TableCell
          key={`${id}-${i}`}
          cell={cell}
          isHeaderCell={isHeader}
          onClick={() => {
            if (onSort) {
              onSort(cell.key);
            }
          }}
          sortOrder={sortOrder}
        />
      ))}
    </div>
  );
};

export default TableRow;
