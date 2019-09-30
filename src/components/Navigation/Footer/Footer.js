import React from 'react';

import classes from './Footer.css';
import FoodyLogo from '../../Logo/Logo';
import SocialNetworks from '../../SocialNetworks/SocialNetworks';

const footer = (props) => (
  <footer className={classes.Footer} style={{position: props.footerPosition}}>
    <div className={classes.Logo}>
      <FoodyLogo />
    </div>
    <div className={classes.Copyright}>Copyright - Golux Technologies 2019 - Bojan Perendić</div>
    <div className={classes.Logo}>
      <SocialNetworks />
    </div>
  </footer>
);

export default footer;
