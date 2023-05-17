import { configureStore } from '@reduxjs/toolkit';
import { default as vehicleReducer } from '../features/vehicle/vehicleSlice';

const store = configureStore({
  reducer: {
    vehicle: vehicleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;