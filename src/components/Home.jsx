import React from 'react';
import Header from './Home/Header';
import './Home.scss';
import Psection from './Home/Psection';
import Dsection from './Home/Dsection';
import Tsection from './Home/Tsection';
import Qsection from './Home/Qsection';


function Home() {
  return (
    <div className='Home'>
        <div className='psection-home'>
        <Header/>
        <Psection/>
        </div>
     <Dsection/>
     
     <Qsection/>
     
     <Tsection/>
    </div>
  );
}

export default Home;