import React from 'react'

import CalendarComponent from '../components/Calendar/Calendar'
import Sidebar from '../components/Sidebar/Sidebar'
import Doctors from "../components/Doctors/Doctors";

import '../styles/Schedule.css'
import ScheduleComp from '../components/ScheduleComp/ScheduleComp';
const Schedule = () => {
  return (
    <div className='Schedule'>
      <div className="ScheduleGlass">
        <Sidebar />
        <ScheduleComp />
        <div className="Calendar">
          <CalendarComponent />
          <div>
            <h3 className="mt-5">
              Médicos
            </h3>
              <Doctors />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule