import React from 'react';
import classes from "./Skills.module.scss";
import containerClass from "../common/styles/Container.module.css"
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/Title/Title";
import htmlImage from "../assets/images/html5.svg";
import cssImage from '../assets/images/css-3.svg'
import jsImage from '../assets/images/js-file.svg'
import reactImage from '../assets/images/react.svg'

function Skills() {
    //картинки прокидываем в пропсы
    const html = {backgroundImage: `url(${htmlImage})`}
    const css = {backgroundImage: `url(${cssImage})`}
    const js = {backgroundImage: `url(${jsImage})`}
    const react = {backgroundImage: `url(${reactImage})`}
    return (
      <div className={classes.skillsBlock}>
          <div className={`${containerClass.container} ${classes.skillsContainer}`}>
              <Title text="Skills"/>
              <div className={classes.skills}>
                  <Skill style={html} title="HTML5"
                         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                  <Skill style={css} title="CSS3"
                         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                  <Skill style={js} title="JS"
                         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                  <Skill style={react} title="React"
                         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
              </div>
          </div>
      </div>
    );
}

export default Skills;