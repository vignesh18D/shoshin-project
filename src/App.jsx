// src/Dashboard.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Card from './components/Card';
import Announcement from './components/Announcement';
import Schedule from './components/Schedule';
import './components/App.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Header /> 
        <div className="dashboard-main-content">
          <div className="header">
            <h2>Dashboard</h2>
          </div>

          <div className="cards">
            <Card title="Available Position" value="24" status="4 Urgently needed" bgColor="#FFDDC1" />
            <Card title="Job Open" value="10" status="4 Active hiring" bgColor="#CDEAFF" />
            <Card title="New Employees" value="24" status="4 Department" bgColor="#F5CCFF" />
          </div>

          <div className="announcement-section">
            <h3>Announcement</h3>
            <Announcement title="Outing schedule for every department" time="5 minutes ago" />
            <Announcement title="Meeting HR Department" time="Today, 12:30 PM" />
            <Announcement title="IT Department needs more talents for UX/UI" time="Tuesday, 09:15 AM" />
          </div>

          <div className="schedule-section">
            <h3>Upcoming Schedule</h3>
            <Schedule title="Review candidate applications" time="Today, 11:30 AM" />
            <Schedule title="Interview with candidates" time="Today, 1:30 PM" />
            <Schedule title="Meeting with project designer" time="Today, 3:15 PM" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
