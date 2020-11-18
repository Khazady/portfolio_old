import React from 'react';
import classes from "./Hire.module.scss";
import containerClass from "../common/styles/Container.module.css"
import { Title } from '../common/components/Title/Title';

function Hire() {
    return (
      <div className={classes.hireBlock}>
          <div className={`${containerClass.container} ${classes.hireContainer}`}>
              <Title text="I'm available for Freelance"/>
              <a href='#d' className={classes.hireBtn}>Hire me</a>
          </div>
      </div>
    );
}

export default Hire;