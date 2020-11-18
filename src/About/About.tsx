import React from 'react';
import classes from './About.module.scss';
import containerClass from '../common/styles/Container.module.css'
import myPhoto from '../assets/images/myPhoto.jpg'

function About() {
    const photo = {backgroundImage: `url(${myPhoto})`}
    return (
      <div id='main' className={classes.aboutBlock}>
          <div className={`${containerClass.container} ${classes.aboutContainer}`}>
              <div className={classes.text}>
                  <span>Hello there!</span><br/>
                  <p>I am Mikhail Kalatsey</p>
                  <p>I am Frontend Developer</p>
              </div>
              <div style={photo} className={classes.photo}/>
          </div>
      </div>
    );
}

export default About;