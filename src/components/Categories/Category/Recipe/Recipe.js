import React from 'react';

import classes from './Recipe.css';

const recipe = (props) => (
  <div className={classes.Recipe}>
    <h3>{props.tags}</h3>
    <div><b>Category:</b> {props.category}</div>
    <div><b>Country:</b> {props.country}</div>
    <div><b>Video:</b> {props.video}</div>
    <div>{props.instructions}</div>
  </div>
);

export default recipe;
