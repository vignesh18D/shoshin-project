import React from 'react';
import './Card.css';

const Card = ({ title, value, status, bgColor }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <h3 className="card-title">{title}</h3>
      <p className="card-value">{value}</p>
      <span className="card-status">{status}</span>
    </div>
  );
};

export default Card;
