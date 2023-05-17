import React, { useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import { useAppDispatch } from './hooks/useAppDispatch';
import { fetchVehicles } from './features/vehicle/vehicleSlice';
import { useAppSelector } from './hooks/useAppSelector';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector((state) => state.vehicle.loadingStatus);

  useEffect(() => {
    if (loadingStatus === 'idle') {
      void dispatch(fetchVehicles());
    }
  }, [dispatch]);

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
