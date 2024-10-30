// src/components/Header.js
import React from 'react';
import './Header.css';
import { FaSearch, FaBell } from 'react-icons/fa';
import profile from '../assets/download.png'

const Header = () => {
  return (
    <div className="header">
      <div className="header-search">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="header-admin">
        <FaBell className="header-icon" />
        <div className="admin-info">
          <img src={profile} alt="Admin" className="admin-avatar" />
          <span className="admin-name">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
