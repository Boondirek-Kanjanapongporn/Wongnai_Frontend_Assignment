import React from 'react';
import './index.css';
import Searchbar from '../components/Searchbar';

const Home = () => {
  return (
    <div className="Home">
        <header className="Home-header">
            <p className="Home-title">เที่ยวไหนดี</p>
            <Searchbar/>
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