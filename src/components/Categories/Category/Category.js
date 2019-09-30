import React from 'react';

import classes from './Category.css';

const category = (props) => (
  <div className={classes.Category} onClick={props.clicked} style={{cursor: props.cursor}}>
    <img src={props.src} alt={props.alt} />
    <div>
      <div className={classes.CategoryName} style={{display: props.displayTitle}}>{props.title}</div>
      <div className={classes.MealCategory} style={{display: props.displayCategory}}>Category: <b>{props.category}</b></div>
      <div className={classes.MealCountry} style={{display: props.displayCountry}}>Country: <b>{props.country}</b></div>
    </div>
  </div>
);

export default category;
