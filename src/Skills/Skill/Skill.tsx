import React from 'react';
import classes from "./Skill.module.scss";

type SkillPropsTypes = {
    title: string
    description: string
    href: string
    style: { backgroundImage: string }
}

export const Skill: React.FC<SkillPropsTypes> = (props) => (
      <div className={classes.skill}>
          <div style={props.style} className={classes.icon}/>
          <a href={props.href} className={classes.skillInfo}
             target='_blank' rel="noopener noreferrer">
              <h3 className={classes.title}>{props.title}</h3>
              <span className={classes.description}>{props.description}</span>
          </a>
      </div>
    )