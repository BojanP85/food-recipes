import React from 'react';

import logo from '../../../assets/Icons/FB.png';
import classes from '../SocialNetworkIcons.css';

const fbLogo = (props) => (
  <div className={classes.Logo} style={{height: props.height, marginRight: '30px'}}>
    <a
      href={props.link}
      target={props.target} >
      <img src={logo} alt="Facebook" />
    </a>
  </div>
);

export default fbLogo;
