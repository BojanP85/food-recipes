import React from 'react';

import classes from './AboutUs.css';
import AboutUsImage from './AboutUsImage/AboutUsImage';

const aboutUs = (props) => (
  <div className={classes.AboutUs}>
    <div className={classes.AboutUs1}>
      <p style={{fontSize: '20px'}}>About Us</p>
      <div></div>
      <p style={{marginTop: '50px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices at tortor ac commodo. Nulla ut arcu nec lacus auctor dignissim eu at tortor. Pellentesque in urna massa. Suspendisse scelerisque efficitur accumsan. Nulla commodo nibh id massa cursus, mollis feugiat lorem tristique. Nam vitae elit dapibus, pretium nunc consequat, semper tortor. Nam porta malesuada sapien, ullamcorper finibus ex volutpat sit amet. Sed sed quam nulla. Aliquam sed felis nisl. Praesent malesuada velit et nisl vehicula, eget facilisis ex maximus. Vivamus id arcu magna. Phasellus dictum sed est non tincidunt. Nunc pharetra ex dui, et commodo dolor convallis sed. Nam interdum accumsan lacus sed fermentum. Morbi laoreet dolor vel elit tempor, quis luctus felis imperdiet. Donec et lorem vel purus ornare efficitur quis vulputate velit.</p>
    </div>
    <div className={classes.AboutUs2}>
      <AboutUsImage />
    </div>
  </div>
);

export default aboutUs;
