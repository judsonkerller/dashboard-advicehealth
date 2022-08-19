import React from "react";
import "./Doctors.css";
import { DoctorsData } from "../../Data/Data";

const Doctors = () => {
  return (
    <div className="Doctors">
      {DoctorsData.map((doctor) => {
        return (
          <div className="doctor">
            <img src={doctor.img} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{doctor.name}</span>
                <span> {doctor.noti}</span>
              </div>
                <span>{doctor.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Doctors;