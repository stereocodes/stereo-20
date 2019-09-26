import React from 'react';
const logo = require('~/static/images/svg/logo.svg');

interface ILogo {
  className?: string
}

const Logo = (props: ILogo) => {
  return (
    <h1 className={props.className}>
      <img src={logo} alt="main image"/>
    </h1>
  )
}

export default Logo;