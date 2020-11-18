import React from 'react';
import classes from "./Projects.module.scss";
import containerClass from "../common/styles/Container.module.css"
import {Project} from "./Project/Project";
import {Title} from '../common/components/Title/Title';
import socnetImage from "../assets/images/soc-net.png";
import todoImage from '../assets/images/todolist.png'

export function Projects() {
    //картинки прокидываем в пропсы
    const social = {backgroundImage: `url(${socnetImage})`}
    const todolist = {backgroundImage: `url(${todoImage})`}
    return (
      <div className={classes.projectsBlock}>
          <div className={`${containerClass.container} ${classes.projectsContainer}`}>
              <Title text="Projects"/>
              <div className={classes.projects}>
                  <Project style={social} title="Social network"
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                  <Project style={todolist} title="Todolist"
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
              </div>
          </div>
      </div>
    );
}