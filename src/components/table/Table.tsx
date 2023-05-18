import React from 'react';

import styles from './Table.module.scss';
import TableRow from './TableRow';

export interface Cell {
  key: string;
  label: string;
}

export interface Row {
  id: string;
  cells: Cell[];
}

interface TableProps {
  keys: Cell[];
  rows: Row[];
  onRowClick?: (id: string) => void;
}

const Table = ({ keys, rows, onRowClick }: TableProps) => {
  return (
    <div className={styles.container}>
      <TableRow
        cells={keys}
        isHeader
      />
      {rows.map((row: Row) => (
        <TableRow
          key={row.id}
          cells={row.cells}
          onClick={() => {
            if (onRowClick) {
              onRowClick(row.id);
            }
          }}
        />
      ))}
    </div>
  );
};

export default Table;
