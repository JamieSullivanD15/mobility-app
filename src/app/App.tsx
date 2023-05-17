import React, { useEffect } from 'react';

import './App.scss';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchVehicles } from '../features/vehicle/vehicleSlice';
import { useAppSelector } from '../hooks/useAppSelector';
import { VehicleList } from '../features/vehicle/VehicleList';

const App = () => {
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector((state) => state.vehicle.loadingStatus);
  const vehicles = useAppSelector((state) => state.vehicle.data);

  useEffect(() => {
    if (loadingStatus === 'idle') {
      void dispatch(fetchVehicles());
    }
  }, [dispatch]);

  if (loadingStatus === 'loading') {
    return <span>Loading...</span>;
  }

  return (
    <>
      <VehicleList vehicles={vehicles} />
    </>
  );
};

export default App;
