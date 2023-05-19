import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit';

import { VEHICLE_TABLE_KEYS, VEHICLE_URL } from '../../common/constants';
import { toCamelCase } from '../../common/utils';

import type { Vehicle, LoadingStatus } from '../../common/types';
import type {
  Cell,
  Row,
  TableSortOrder,
} from '../../components/common/table/Table';

const { ETA, SUPPLIER, PRICE, CATEGORY, VEHICLE_TYPE } = VEHICLE_TABLE_KEYS;

interface SortTablePayload {
  key: string;
  isAsc: boolean;
}

export interface VehicleState {
  data: Vehicle[];
  loadingStatus: LoadingStatus;
  tableRows: Row[];
  sortOrder: TableSortOrder;
}

const initialState: VehicleState = {
  data: [],
  loadingStatus: 'idle',
  tableRows: [],
  sortOrder: {
    key: VEHICLE_TABLE_KEYS.ETA,
    isAsc: true,
  },
};

const getTableCells = (vehicle: Vehicle) =>
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
          key: VEHICLE_TYPE,
          label: toCamelCase(vehicle.category.vehicleType),
        };
      default:
        return {};
    }
  });

const getTableRows = (vehicles: Vehicle[]) =>
  vehicles.reduce((acc: any, vehicle: Vehicle) => {
    acc.push({
      id: vehicle.availabilityId,
      cells: getTableCells(vehicle),
    });
    return acc;
  }, []);

const sortTableRows = (key: string, asc: boolean, tableRows: Row[]) => {
  let sortedRows = tableRows;
  console.log(tableRows);

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

export const fetchVehicles = createAsyncThunk(
  'vehicle/fetchVehicles',
  async () =>
    await fetch(VEHICLE_URL)
      .then(async (res: Response) => await res.json())
      .then((res: Vehicle[]) => res)
      .catch((err: Error) => err)
);

export const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {
    sortTable: (
      state: VehicleState,
      action: PayloadAction<SortTablePayload>
    ) => {
      state.sortOrder = action.payload;
      state.tableRows = sortTableRows(
        action.payload.key,
        action.payload.isAsc,
        state.tableRows
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state: VehicleState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchVehicles.rejected, (state: VehicleState) => {
        state.loadingStatus = 'failed';
      })
      .addCase(fetchVehicles.fulfilled, (state: VehicleState, action: any) => {
        state.data = action.payload;
        state.loadingStatus = 'idle';
        state.tableRows = sortTableRows(
          state.sortOrder.key,
          state.sortOrder.isAsc,
          getTableRows(action.payload)
        );
      });
  },
});

export const { sortTable } = vehicleSlice.actions;
export default vehicleSlice.reducer;
