import React, { useContext, useEffect, useState } from 'react';
import TripsContext from '../../context/ManageTrips/tripsContext';
import { useSearchParams } from 'react-router-dom';
import './index.css';

const Searchbar = () => {
    const tripsContext = useContext(TripsContext);
    const { getTrips } = tripsContext;
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('keyword') || '';
    const [search, setSearch] = useState(searchTerm);

    useEffect(()=>{
      setSearch(searchTerm);
      getTrips({ keyword: searchTerm});
    },[searchTerm, getTrips])

    const handleChange = (e) => {
      setSearch(e.target.value);
    }

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
          const keyword = e.target.value;
          if (keyword) {
            setSearchParams({ keyword });
          } else {
            setSearchParams({});
          }
        }
    }
    return (
      <input 
        className="Searchbar" 
        placeholder="ค้นหาสถานที่ท่องเที่ยวหรือสิ่งของ แล้วกด 'ENTER'" 
        id='Searchbar' 
        value={search} 
        onChange={handleChange} 
        onKeyPress={handleSearch}
      ></input>
    );
  }
  
export default Searchbar;
