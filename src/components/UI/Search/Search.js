import React from 'react';

import classes from './Search.css';

const search = (props) => (
  <div className={classes.Search}>
    <input type="text" placeholder={props.placeholder} value={props.value} onChange={props.change} />
    <button style={{display: props.display}} type="submit" onClick={props.clicked}><i className="fa fa-search"></i></button>
  </div>
);

export default search;
