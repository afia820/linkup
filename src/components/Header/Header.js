import React from 'react';
import {
  Search,
  Home,
  BusinessCenter,
  Chat,
  Notifications,
  SupervisorAccount,
} from '@material-ui/icons';
import { useDispatch } from 'react-redux';

import './Header.css';
import icon from '../../alt_LiNK_UP.png';
import HeaderOptions from './HeaderOptions';
import { logout } from '../../redux/userSlice';
import { auth } from '../../firebase/firebase';

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header_left">
        <img src={icon} alt="Link up" />
        <div className="header_search">
          <Search />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions Icon={Home} title="Home" />
        <HeaderOptions Icon={SupervisorAccount} title="My Network" />
        <HeaderOptions Icon={BusinessCenter} title="Jobs" />
        <HeaderOptions Icon={Chat} title="Messaging" />
        <HeaderOptions Icon={Notifications} title="Notifications" />
        <HeaderOptions
          avatar={true}
          title="me"
          onClick={logoutOfApp}
        ></HeaderOptions>
      </div>
    </div>
  );
};

export default Header;
