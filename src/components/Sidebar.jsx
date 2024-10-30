import React from 'react';
import './Sidebar.css';
import { FaHome, FaBriefcase, FaUsers, FaCalendarAlt, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">Vasitum</h2>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <FaHome className="sidebar-icon" />
          <span>Dashboard</span>
        </li>
        <li className="sidebar-item">
          <FaBriefcase className="sidebar-icon" />
          <span>Jobs</span>
        </li>
        <li className="sidebar-item">
          <FaUsers className="sidebar-icon" />
          <span>Employees</span>
        </li>
        <li className="sidebar-item">
          <FaCalendarAlt className="sidebar-icon" />
          <span>Schedule</span>
        </li>
        <li className="sidebar-item">
          <FaCog className="sidebar-icon" />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
