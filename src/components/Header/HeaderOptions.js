import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';

import './HeaderOptions.css';

const HeaderOptions = ({ Icon, title, avatar, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOptions">
      {Icon && <Icon className="headerOptions_icon" />}
      {avatar && (
        <Avatar src={user?.photoUrl} className="headerOptions_icon">
          {user?.email[0]}{' '}
        </Avatar>
      )}
      <h3 className="headerOptions_title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
