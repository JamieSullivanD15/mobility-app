import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { VEHICLE_TABLE_KEYS, VEHICLE_URL } from '../../common/constants';
import { getTableRows, sortTableRows } from './utils';

import type { Vehicle, LoadingStatus } from '../../common/types';
import type { Row, TableSortOrder } from '../../components/common/table/Table';

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
    setSortOrder: (state: VehicleState, action) => {
      state.sortOrder = action.payload;
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

export const { setSortOrder } = vehicleSlice.actions;
export default vehicleSlice.reducer;
