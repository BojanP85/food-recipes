import React from 'react';

import classes from './Toolbar.css';
import Search from '../../UI/Search/Search';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Search
      className={classes.ToolbarSearch}
      placeholder="Search recipes"
      clicked={props.clicked}
      change={props.change}
      value={props.value} />
    <div>
      <a href={props.hrefAboutUs} onClick={props.clickHome} style={{display: props.displayHome}}>Home</a>
      <a href={props.hrefAboutUs} onClick={props.clickAboutUs}>About Us</a>
      <a href={props.hrefContact} onClick={props.clickContact}>Contact</a>
    </div>
  </header>
);

export default toolbar;
