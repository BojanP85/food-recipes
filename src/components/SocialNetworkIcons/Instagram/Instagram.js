import React from 'react';

import logo from '../../../assets/Icons/INSTA.png';
import classes from '../SocialNetworkIcons.css';

const instaLogo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <a
      href={props.link}
      target={props.target} >
      <img src={logo} alt="Instagram" />
    </a>
  </div>
);

export default instaLogo;
