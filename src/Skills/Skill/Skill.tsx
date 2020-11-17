import React from 'react';
import classes from "./Skill.module.css";

type SkillPropsTypes = {
    title: string
    description: string
}

function Skill(props: SkillPropsTypes) {
    return (
      <div className={classes.skill}>
          <div className={classes.icon}/>
          <h3 className={classes.title}>{props.title}</h3>
          <span className={classes.description}>
              {props.description}
          </span>
      </div>
    );
}

export default Skill;