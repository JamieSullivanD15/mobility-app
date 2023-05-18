import React from 'react';
import { clsx } from 'clsx';

import styles from './Table.module.scss';
import TableCell from './TableCell';

import type { Cell } from './Table';

interface TableHeaderProps {
  cells: Cell[];
  isHeader?: boolean;
  onClick?: () => void;
}

const TableRow = ({ cells, isHeader, onClick }: TableHeaderProps) => {
  return (
    <div
      className={clsx({
        [styles.row]: true,
        [styles.header]: isHeader,
      })}
      onClick={onClick}
    >
      {cells.map((cell: Cell) => (
        <TableCell
          key={cell.key}
          cell={cell}
          isHeaderCell={isHeader}
        />
      ))}
    </div>
  );
};

export default TableRow;
