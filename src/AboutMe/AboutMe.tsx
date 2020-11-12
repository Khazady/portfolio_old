import React from 'react';
import classes from "./AboutMe.module.css";
import containerClass from "../common/styles/Container.module.css"

function AboutMe() {
    return (
      <div className={`${containerClass.container} ${containerClass.pink}`}>
          <div className={classes.aboutMeBlock}>
              <div className={classes.text}>
                  <span>Hello there!</span><br/>
                  <span>I am Mikhas Tyshkevich</span><br/>
                  <span>Frontend Developer</span>
              </div>
              <div className={classes.photo}>
                  Photo
              </div>
          </div>
      </div>
    );
}

export default AboutMe;