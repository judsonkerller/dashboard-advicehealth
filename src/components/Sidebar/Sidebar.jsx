import React from 'react'
import Logo from '../../imgs/logo.png'
import './Sidebar.css';

import { SidebarData } from '../../Data/Data';
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { useState } from 'react';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className='Sidebar'>
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Consu<span>l</span>tório
        </span>
      </div>
      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div 
              className={selected===index ? 'menuItem active' : 'menuItem'}
              key={index}
              onClick={() => setSelected(index)}
              >
              <item.icon/>
              <span>
                <a href={item.id}>{item.heading}</a>
              </span>
            </div>
          )
        })}

        <div className="menuItem">
          <a href="/signout"><UilSignOutAlt /></a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar