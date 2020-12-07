import React from 'react';
import classes from './About.module.scss';
import containerClass from '../common/styles/Container.module.css'
import myPhoto from '../assets/images/myPhoto.jpg'
import {Title} from "../common/components/Title/Title";

function About() {
    const photo = {backgroundImage: `url(${myPhoto})`}
    return (
      <div id='main' className={classes.aboutBlock}>
          <div className={`${containerClass.container} ${classes.aboutContainer}`}>
              <Title text={"I am Frontend Developer"}/>
              <div>
                  <div style={photo} className={classes.photo}/>
                  <div className={classes.text}>
                      <p>Hello There!</p>
                      <p>I am Mikhail Kalatsey</p>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default About;