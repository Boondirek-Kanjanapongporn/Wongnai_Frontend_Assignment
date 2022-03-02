import React, { useEffect, useState } from 'react';
import './index.css';
import Searchbar from '../components/Searchbar';

const Home = () => {
  const [showData, setShowData] = useState([])

  useEffect(() => {
    if (showData) {
      console.log('SUCCESS:', showData)
      console.log(document.getElementById('Searchbar').value)
    }
  }, [showData])


  return (
    <div className="Home">
        <header className="Home-header">
            <p className="Home-title">เที่ยวไหนดี</p>
            <Searchbar setShowData={setShowData}/>
            <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
    </div>
  );
}

export default Home;