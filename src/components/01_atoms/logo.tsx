import React from 'react';
const logo = require('~/static/images/svg/logo.svg');

const Logo = () => {
  return (
    <h1>
      <img src={logo} alt="main image"/>
    </h1>
  )
}

export default Logo;