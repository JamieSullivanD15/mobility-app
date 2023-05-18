import { VEHICLE_TABLE_KEYS } from '../../common/constants';
import { toCamelCase } from '../../common/utils';

import type { Vehicle } from '../../common/types';
import type { Cell, Row } from '../../components/common/table/Table';

const { ETA, SUPPLIER, PRICE, CATEGORY, VEHICLE_TYPE } = VEHICLE_TABLE_KEYS;

export const getTableCells = (vehicle: Vehicle) =>
  Object.values(VEHICLE_TABLE_KEYS).map((value: string) => {
    switch (value) {
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

export const getTableRows = (vehicles: Vehicle[]) =>
  vehicles.reduce((acc: any, vehicle: Vehicle) => {
    acc.push({
      id: vehicle.availabilityId,
      cells: getTableCells(vehicle),
    });
    return acc;
  }, []);

export const sortTableRows = (key: string, asc: boolean, tableRows: Row[]) => {
  let sortedRows = tableRows;

  sortedRows = sortedRows.sort((a: Row, b: Row) => {
    const aValue = a.cells.find((cell: Cell) => cell.key === key);
    const bValue = b.cells.find((cell: Cell) => cell.key === key);
    if (!aValue || !bValue) {
      return 0;
    }
    if (aValue.label < bValue.label) {
      return asc ? -1 : 1;
    }
    if (aValue.label > bValue.label) {
      return asc ? 1 : -1;
    }
    return 0;
  });

  return sortedRows;
};
