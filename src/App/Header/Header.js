import React from 'react';
import logo from '../../assets/images/github-icon.png';

const Header = () => {
  return (
    <div className="Header w-100 bg-black">
      <img id="logo" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
