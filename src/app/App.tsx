import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import VehicleInfo from '../pages/VehicleInfo';
import Header from '../components/layout/Header';

const App = () => {
  return (
    <div>
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
