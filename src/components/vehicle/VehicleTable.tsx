import React from 'react';

import { VEHICLE_TABLE_KEYS } from '../../common/constants';
import useAppSelector from '../../hooks/useAppSelector';
import Table from '../table/Table';

import { type Cell } from '../table/Table';

import type { RootState } from '../../redux/store';
import type { Vehicle } from '../../common/types';
import { toCamelCase } from '../../common/utils';
import { useNavigate } from 'react-router-dom';

const VehicleTable = () => {
  const navigate = useNavigate();
  const vehicles = useAppSelector((state: RootState) => state.vehicle.data);
  const { ETA, SUPPLIER, PRICE, CATEGORY, VEHICLE_TYPE } = VEHICLE_TABLE_KEYS;

  const handleClick = (availabilityId: string) => {
    navigate(`/vehicle/${availabilityId}`);
  };

  const keys = [
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
  ];

  const getTableCells = (vehicle: Vehicle) =>
    keys.map((cell: Cell) => {
      switch (cell.key) {
        case ETA:
          return {
            key: ETA,
            label: `${vehicle.eta} min`,
          };
        case SUPPLIER:
          return {
            key: SUPPLIER,
            label: vehicle.supplier.supplierName,
          };
        case PRICE:
          return {
            key: PRICE,
            label: `${vehicle.price.amount} ${vehicle.price.currency}`,
          };
        case CATEGORY:
          return {
            key: CATEGORY,
            label: toCamelCase(vehicle.category.productType),
          };
        case VEHICLE_TYPE:
          return {
            key: ETA,
            label: toCamelCase(vehicle.category.vehicleType),
          };
        default:
          return {};
      }
    });

  const tableRows = vehicles.reduce((acc: any, vehicle: Vehicle) => {
    acc.push({ id: vehicle.availabilityId, cells: getTableCells(vehicle) });
    return acc;
  }, []);

  return (
    <Table
      keys={keys}
      rows={tableRows}
      onRowClick={handleClick}
    />
  );
};

export default VehicleTable;
