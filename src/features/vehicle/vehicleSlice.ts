import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { VEHICLE_URL } from '../../common/constants';

import type { Vehicle, LoadingStatus } from './types';

export interface VehicleState {
  data: Vehicle[];
  loadingStatus: LoadingStatus;
}

const initialState: VehicleState = {
  data: [],
  loadingStatus: 'idle',
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state: VehicleState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchVehicles.rejected, (state: VehicleState) => {
        state.loadingStatus = 'failed';
      })
      .addCase(fetchVehicles.fulfilled, (state: VehicleState, action: any) => {
        state.loadingStatus = 'idle';
        state.data = action.payload;
      });
  },
});

// export const { fetchData } = vehicleSlice.actions;
export default vehicleSlice.reducer;
