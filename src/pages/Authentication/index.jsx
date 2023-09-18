import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './style.scss';
import image from '../../assets/images/background_sigin_signup.png';
import logo from '../../assets/images/logo.png';
import Signin from '../../components/Signin';
import Signup from '../../components/Signup';

const Authentication = () => {
  const [currentItem, setCurrentItem] = useState('Sign in');
  const navigate = useNavigate();

  const navLinks = [
    {
      id: 1,
      display: 'Sign in',
    },
    {
      id: 2,
      display: 'Sign up',
    },
    {
      id: 3,
      display: 'Home',
    },
  ];

  const handleItemClick = (item) => {
    setCurrentItem(item.display);
  };

  return (
    <div className="background-authentication">
      <div className="container">
        <div className="container-left">
          <div className="branch">
            <img src={logo} alt="logo" />
            <p>Bird</p>
          </div>

          {currentItem === 'Sign in' && <Signin />}
          {currentItem === 'Sign up' && <Signup />}
          {currentItem === 'Home' && navigate("/home")}
        </div>

        <div className="container-right">
          <div className="menu">
            {navLinks.map((item, key) => (
              <div
                className={`navbar_item ${item.display === currentItem ? 'navbar_active' : ''}`}
                key={key}
                onClick={() => handleItemClick(item)}
              >
                <p>{item.display}</p>
              </div>
            ))}
          </div>

          <div className="image">
            <img src={image} alt="Background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
