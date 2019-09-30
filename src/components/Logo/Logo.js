import React from 'react';

import logo from '../../assets/Images/logo.png';
import classes from './Logo.css';

const foodyLogo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={logo} alt="Foody" />
  </div>
);

export default foodyLogo;
