import React from 'react';
import {
  Search,
  Home,
  BusinessCenter,
  Chat,
  Notifications,
  SupervisorAccount,
} from '@material-ui/icons';

import './Header.css';
import icon from './link.png';
import HeaderOptions from './HeaderOptions';

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img src={icon} alt="Link up" />
        <div className="header_search">
          <Search />
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions Icon={Home} title="Home" />
        <HeaderOptions Icon={SupervisorAccount} title="My Network" />
        <HeaderOptions Icon={BusinessCenter} title="Jobs" />
        <HeaderOptions Icon={Chat} title="Messaging" />
        <HeaderOptions Icon={Notifications} title="Notifications" />
        <HeaderOptions
          avatar="https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png"
          title="me"
        />
      </div>
    </div>
  );
};

export default Header;
