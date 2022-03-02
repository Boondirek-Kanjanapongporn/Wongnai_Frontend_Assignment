import React from 'react'
import './index.css'

const Searchbar = ({setShowData}) => {

    const baseURL = 'http://localhost:8080'
    
    const getTripsRequestAPI = async ({keyword}) => {
        try{
            await fetch(`${baseURL}/api/trips?keyword=${keyword}`)
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data)
                    setShowData(data)
                })
                .catch(err => {
                    console.error('Error: ', err)
                });
        } catch (err) {
            console.log(err)
        }
    }

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            getTripsRequestAPI({keyword: e.target.value});
        }
    }
    return (
      <input className="Searchbar" placeholder='ค้นหา' id='Searchbar' onKeyPress={handleSearch}>
      </input>
    );
  }
  
  export default Searchbar;