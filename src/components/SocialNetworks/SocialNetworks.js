import React from 'react';

import classes from './SocialNetworks.css';
import FbLogo from '../SocialNetworkIcons/Facebook/Facebook';
import InstaLogo from '../SocialNetworkIcons/Instagram/Instagram';

const socialNetworks = () => (
  <div className={classes.SocialNetworks}>
    <FbLogo link="http://www.facebook.com" target="_blank" />
    <InstaLogo link="http://www.instagram.com" target="_blank" />
  </div>
);

export default socialNetworks;
