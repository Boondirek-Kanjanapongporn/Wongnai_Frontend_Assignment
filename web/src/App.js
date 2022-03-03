import React, { Fragment } from 'react';
import Home from './pages';
import TripsState from './context/ManageTrips/tripsState';
import './App.css';

function App() {
  return (
    <Fragment>
      <TripsState>
        <Home/>
      </TripsState>
    </Fragment>
  );
}

export default App;
