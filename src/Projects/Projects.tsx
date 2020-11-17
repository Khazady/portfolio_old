import React from 'react';
import classes from "./Projects.module.css";
import containerClass from "../common/styles/Container.module.css"
import Project from "./Project/Project";
//1124 viewpoint
export function Projects() {
    return (
      <div className={classes.projectsBlock}>
          <div className={`${containerClass.container} ${classes.projectsContainer}`}>
              <h2 className={classes.title}>Projects</h2>
              <div className={classes.projects}>
                  <Project title="Social network"
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                  <Project title="Todolist"
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
              </div>
          </div>
      </div>
    );
}