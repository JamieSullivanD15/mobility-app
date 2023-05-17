import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchVehicles } from '../features/vehicle/vehicleSlice';
import { useAppSelector } from '../hooks/useAppSelector';
import { Home } from '../pages/Home';
import { VehicleInfo } from '../pages/VehicleInfo';
import { Header } from '../components/layout/Header';
import Spinner from '../components/common/spinner/Spinner';

const App = () => {
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector((state) => state.vehicle.loadingStatus);

  useEffect(() => {
    if (loadingStatus === 'idle') {
      void dispatch(fetchVehicles());
    }
  }, [dispatch]);

  return (
    <div>
      <Header />
      {loadingStatus === 'loading' ? (
        <Spinner />
      ) : (
        <Router>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/vehicle/:id'
              element={<VehicleInfo />}
            />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;
