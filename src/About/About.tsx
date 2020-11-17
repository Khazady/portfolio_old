import React from 'react';
import classes from "./About.module.css";
import containerClass from "../common/styles/Container.module.css"

function About() {
    return (
      <div className={classes.aboutMeBlock}>
          <div className={containerClass.container}>
              <div className={classes.text}>
                  <span>Hello there!</span><br/>
                  <h1>I am Mikhas Tyshkevich</h1>
                  <p>Frontend Developer</p>
              </div>
              <div className={classes.photo}/>
          </div>
      </div>
    );
}

export default About;