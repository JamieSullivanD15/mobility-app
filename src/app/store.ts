import { configureStore } from '@reduxjs/toolkit';
import { default as vehicleReducer } from '../features/vehicle/vehicleSlice';
import { default as appReducer } from './appSlice';

const store = configureStore({
  reducer: {
    vehicle: vehicleReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
