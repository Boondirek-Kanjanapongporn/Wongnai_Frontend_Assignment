import React, { useContext, useEffect } from 'react'
import './index.css'
import TripsContext from '../../context/ManageTrips/tripsContext'

const Searchbar = ({setShowData}) => {
    const tripsContext = useContext(TripsContext);
    const { getTrips, trips } = tripsContext;

    useEffect(() => {
        console.log(trips)
    }, [trips])

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            getTrips({ keyword: e.target.value})
        }
    }
    return (
      <input className="Searchbar" placeholder='ค้นหา' id='Searchbar' onKeyPress={handleSearch}>
      </input>
    );
  }
  
export default Searchbar;
