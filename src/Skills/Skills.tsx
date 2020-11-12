import React from 'react';
import classes from "./Skills.module.css";
import containerClass from "../common/styles/Container.module.css"
import Skill from "./Skill/Skill";

function Skills() {
    return (
      <div className={`${containerClass.container} ${containerClass.green}`}>
          <div className={classes.skillsBlock}>
              <div className={classes.titleBlock}>
                  <h2 className={classes.title}>My skills</h2>
              </div>
              <div className={classes.skills}>
                  <Skill title="HTML"
                         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                  <Skill title="CSS"
                         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                  <Skill title="JS"
                         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                  <Skill title="React"
                         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
              </div>
          </div>
      </div>
    );
}

export default Skills;