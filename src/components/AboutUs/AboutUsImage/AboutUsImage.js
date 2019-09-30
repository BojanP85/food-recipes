import React from 'react';

import aboutus_image from '../../../assets/Images/aboutus_image.jpg';
import classes from './AboutUsImage.css';

const aboutUsImage = (props) => (
  <div className={classes.AboutUsImage} style={{height: props.height}} >
    <img src={aboutus_image} alt="About Us" />
  </div>
);

export default aboutUsImage;
