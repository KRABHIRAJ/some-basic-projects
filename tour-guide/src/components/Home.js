import React from 'react';
import "./Home.css";
import Tours from './Tours';

function Home() {
  return (
    <div className='home'>
          <h1>Our Tours</h1>
          <div className='heading__border'></div>
          <Tours />
    </div>
  )
}

export default Home;
