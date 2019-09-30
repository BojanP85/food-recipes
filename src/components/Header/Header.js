import React from 'react';

import classes from './Header.css';
import FoodImage from './FoodImage/FoodImage';

const header = (props) => (
  <div className={classes.Headers}>
    <div className={classes.Header1}>
      <h1>Food recipes</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      <div>
        <a href={props.hrefCategories}><button>Categories</button></a>
      </div>
    </div>
    <div className={classes.Header2}>
      <FoodImage />
    </div>
  </div>
);

export default header;
