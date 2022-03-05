import React, { useContext, useEffect, useState } from 'react';
import Searchbar from '../components/Searchbar';
import TripsContext from '../context/ManageTrips/tripsContext';
import TableContent from '../components/TableContent';
import './index.css';

const Home = () => {
  const [showData, setShowData] = useState([])
  const tripsContext = useContext(TripsContext);
  const { trips } = tripsContext;

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
            {showData.length === 0? (
              <h3>ไม่พบรายการค้นหา</h3>
            ) : null}
        </header>
    </div>
  );
}

export default Home;