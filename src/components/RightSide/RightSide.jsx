import React from "react";
import CalendarComponent from "../Calendar/Calendar";
import Doctors from "../Doctors/Doctors";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="Calendar">
      <CalendarComponent />
      </div>
      <div>
        <h3>Médicos</h3>
        <Doctors />
      </div>
    </div>
  );
};

export default RightSide;