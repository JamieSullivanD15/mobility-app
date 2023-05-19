import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { clsx } from 'clsx';

import styles from './App.module.scss';
import Home from '../pages/Home';
import VehicleInfo from '../pages/VehicleInfo';
import Header from '../components/layout/Header';
import useAppSelector from '../hooks/useAppSelector';

import type { RootState } from './store';

const App = () => {
  const { isDarkMode } = useAppSelector((state: RootState) => state.app);

  return (
    <div
      className={clsx({
        [styles.app]: true,
        [styles['app-dark']]: isDarkMode,
      })}
    >
      <Header />
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
    </div>
  );
};

export default App;
