import React from 'react';
import classes from "./Skills.module.css";
import containerClass from "../common/styles/Container.module.css"
import Skill from "./Skill/Skill";

function Skills() {
    return (
      <div className={classes.skillsBlock}>
          <div className={`${containerClass.container} ${classes.skillsContainer}`}>
              <h2 className={classes.title}>Skills</h2>
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