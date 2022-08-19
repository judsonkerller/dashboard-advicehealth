import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import MainDash from '../components/MainDash/MainDash';
import RightSide from '../components/RightSide/RightSide';

import '../styles/Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className="HomeGlass">
      <Sidebar />
      <MainDash />
      <RightSide />
      </div>
    </div>
  )
}

export default Home