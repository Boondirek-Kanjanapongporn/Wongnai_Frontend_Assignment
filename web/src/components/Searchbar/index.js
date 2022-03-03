import React, { useContext } from 'react'
import TripsContext from '../../context/ManageTrips/tripsContext'
import './index.css'

const Searchbar = () => {
    const tripsContext = useContext(TripsContext);
    const { getTrips } = tripsContext;

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            getTrips({ keyword: e.target.value})
        }
    }
    return (
      <input className="Searchbar" placeholder='ค้นหาสถานที่ท่องเที่ยวหรือสิ่งของ' id='Searchbar' onKeyPress={handleSearch}>
      </input>
    );
  }
  
export default Searchbar;
