import React from 'react';
import './Schedule.css';

const Schedule = ({ title, time }) => {
  return (
    <div className="schedule">
      <h4 className="schedule-title">{title}</h4>
      <p className="schedule-time">{time}</p>
    </div>
  );
};

export default Schedule;
