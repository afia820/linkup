import { Avatar } from '@material-ui/core';
import React from 'react';

import './Sidebar.css';

const recentItem = (topic) => (
  <div className="sidebar_recentItem">
    <span className="sidebar_hash">#</span>
    <p>{topic}</p>
  </div>
);
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="Dawn"
        />
        <Avatar className="sidebar_avatar" />
        <h2>Nana</h2>
        <h4>nana@email.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,357</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,956</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('ReactJS')}
        {recentItem('Programming')}
        {recentItem('SoftwareEngineering')}
        {recentItem('Developer')}
        {recentItem('Design')}
      </div>
    </div>
  );
};

export default Sidebar;
