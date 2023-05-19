import React from 'react';
import { clsx } from 'clsx';

import styles from './Table.module.scss';
import TableCell from './TableCell';

import type { Cell, TableSortOrder } from './Table';

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
  return (
    <div
      className={clsx({
        [styles.row]: true,
        [styles.header]: isHeader,
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
