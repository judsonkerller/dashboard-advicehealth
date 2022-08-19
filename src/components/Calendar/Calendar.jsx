import React, { useState } from 'react'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date())

  return (
    <div className='Calendar'>
      <Calendar className ='p-2 bg-transparent rounded-4'onChange={onChange} value={value} />
    </div>
  );
}

export default CalendarComponent