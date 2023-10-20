import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { onLogout } from './authentication/AuthApi';
import { toast } from 'react-toastify';

function HeaderOptions({ avatar,Icon,title }) {
  const [sliderVisible, setSliderVisible] = useState(false);

  const handleAvatarClick = () => {
    setSliderVisible(!sliderVisible);
  };

  return (
    <div className='header__options'>
     {
       Icon &&  <Icon></Icon>
     }

      {avatar && (
        <div>
          <Avatar name={avatar} onClick={handleAvatarClick}></Avatar>
        </div>
      )}

      {sliderVisible && (
        <div className="slider"> 
          <button className='logout-btn' onClick={() => toast.success("logout")}>Logout</button>
        </div>
      )}
     <span>{title}</span>

    </div>
  );
}

export default HeaderOptions;


