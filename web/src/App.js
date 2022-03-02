import React, { Fragment } from 'react';
import Home from './pages';
import TripsState from './context/ManageTrips/tripsState';

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
