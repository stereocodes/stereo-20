import React from 'react';
import Ticker from '../02_molecules/ticker';
const eye = require('~/static/images/svg/eye.svg');


const Capabilites = () => {
  return (
    <section>
      <Ticker/>
      <img src={eye} alt=""/>
    </section>
  )
}


export default Capabilites;