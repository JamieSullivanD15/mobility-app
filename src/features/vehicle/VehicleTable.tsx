import React from 'react';
import { useNavigate } from 'react-router-dom';

import useAppSelector from '../../hooks/useAppSelector';
import Table from '../../components/common/table/Table';
import { VEHICLE_TABLE_KEYS } from '../../common/constants';

import type { RootState } from '../../app/store';

const VehicleTable = () => {
  const navigate = useNavigate();
  const { ETA, SUPPLIER, PRICE, CATEGORY, VEHICLE_TYPE } = VEHICLE_TABLE_KEYS;
  const tableRows = useAppSelector(
    (state: RootState) => state.vehicle.tableRows
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
        label: 'Vehicle Type',
      },
    ],
    rows: tableRows,
  };

  const handleClick = (availabilityId: string) => {
    navigate(`/vehicle/${availabilityId}`);
  };

  return (
    <Table
      data={tableData}
      onRowClick={handleClick}
    />
  );
};

export default VehicleTable;
