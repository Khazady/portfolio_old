import React from 'react';
import classes from "./Hire.module.css";
import containerClass from "../common/styles/Container.module.css"

function Hire() {
    return (
      <div className={classes.hireBlock}>
          <div className={`${containerClass.container} ${classes.hireContainer}`}>
              <h2 className={classes.title}>I am available for Freelance</h2>
              <a href='#d' className={classes.hireBtn}>Hire me</a>
          </div>
      </div>
    );
}

export default Hire;