import React from 'react';

import classes from './Contact.css';

const contact = (props) => (
  <div className={classes.Contact}>
    <p style={{fontSize: '20px'}}>Contact</p>
    <div></div>
    <input type="text" placeholder="  First name" />
    <input type="text" placeholder="  Last name" />
    <input type="email" placeholder="  Email" />
    <textarea rows="8" placeholder=" Message" />
    <button>Send</button>
  </div>
);

export default contact;
