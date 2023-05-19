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
  sortOrder: TableSortOrder;
  onSort: (key: string) => void;
  onRowClick?: (id: string) => void;
}

const Table = ({ data, sortOrder, onSort, onRowClick }: TableProps) => {
  return (
    <div className={styles.container}>
      <TableRow
        id='header'
        cells={data.headerCells}
        isHeader
        onSort={onSort}
        sortOrder={sortOrder}
      />
      {data.rows.map((row: Row) => (
        <TableRow
          key={row.id}
          id={row.id}
          cells={row.cells}
          onRowClick={() => {
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
