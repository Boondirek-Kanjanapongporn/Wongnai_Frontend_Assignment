import React, { useContext, useEffect, useState } from 'react';
import './index.css';
import Searchbar from '../components/Searchbar';
import TripsContext from '../context/ManageTrips/tripsContext';
import TableContent from '../components/TableContent';

const Home = () => {
  const [showData, setShowData] = useState([])
  const tripsContext = useContext(TripsContext);
  const { getTrips, trips } = tripsContext;

  useEffect(() => {
    getTrips({ keyword: ""});
  }, [getTrips]);

  useEffect(() => {
    if (trips) {
      setShowData(trips);
    }
  }, [trips]);

  return (
    <div className="Home">
        <header className="Home-header">
            <p className="Home-title">เที่ยวไหนดี</p>
            <Searchbar/>
            <TableContent data={showData}/>
        </header>
    </div>
  );
}

export default Home;