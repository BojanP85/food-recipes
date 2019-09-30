import React from 'react';

import header_image from '../../../assets/Images/header_image.png';
import classes from './FoodImage.css';

const foodImage = (props) => (
  <div className={classes.FoodImage} style={{height: props.height}} >
    <img src={header_image} alt="Food" />
  </div>
);

export default foodImage;
