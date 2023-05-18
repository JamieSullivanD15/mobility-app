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

export interface TableSortOrder {
  key: string;
  isAsc: boolean;
}

export interface TableData {
  headerCells: Cell[];
  rows: Row[];
}

interface TableProps {
  data: TableData;
  onRowClick?: (id: string) => void;
}

const Table = ({ data, onRowClick }: TableProps) => {
  return (
    <div className={styles.container}>
      <TableRow
        id='header'
        cells={data.headerCells}
        isHeader
      />
      {data.rows.map((row: Row) => (
        <TableRow
          key={row.id}
          id={row.id}
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
