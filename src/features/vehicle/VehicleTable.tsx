import React from 'react';
import { useNavigate } from 'react-router-dom';

import useAppSelector from '../../hooks/useAppSelector';
import Table from '../../components/common/table/Table';
import { VEHICLE_TABLE_KEYS } from '../../common/constants';
import useAppDispatch from '../../hooks/useAppDispatch';
import { sortTable } from './vehicleSlice';

import type { RootState } from '../../app/store';

const VehicleTable = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { ETA, SUPPLIER, PRICE, CATEGORY, VEHICLE_TYPE } = VEHICLE_TABLE_KEYS;
  const { tableRows, sortOrder } = useAppSelector(
    (state: RootState) => state.vehicle
  );
  const tableData = {
    headerCells: [
      {
        key: ETA,
        label: 'ETA',
      },
      {
        key: SUPPLIER,
        label: 'Supplier',
      },
      {
        key: PRICE,
        label: 'Price',
      },
      {
        key: CATEGORY,
        label: 'Category',
      },
      {
        key: VEHICLE_TYPE,
        label: 'Vehicle',
      },
    ],
    rows: tableRows,
  };

  const handleClick = (availabilityId: string) => {
    navigate(`/vehicle/${availabilityId}`);
  };

  const onSort = (key: string) => {
    const isAsc = key === sortOrder.key ? !sortOrder.isAsc : true;
    dispatch(sortTable({ key, isAsc }));
  };

  return (
    <Table
      data={tableData}
      onRowClick={handleClick}
      sortOrder={sortOrder}
      onSort={onSort}
    />
  );
};

export default VehicleTable;
