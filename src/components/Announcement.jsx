import React from 'react';
import './Announcement.css';

const Announcement = ({ title, time }) => {
  return (
    <div className="announcement">
      <h4 className="announcement-title">{title}</h4>
      <p className="announcement-time">{time}</p>
    </div>
  );
};

export default Announcement;
