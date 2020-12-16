import React from 'react'
import classes from './Project.module.scss'

type WorkPropsTypes = {
    title: string
    description: string
    href: string
    style: { backgroundImage: string }
}

export const Project: React.FC<WorkPropsTypes> = (props) => (
  <div className={classes.project}>
      <div className={classes.image} style={props.style}>
          <a target='_blank' rel="noopener noreferrer"
             href={props.href} className={classes.viewBtn}>Watch</a>
      </div>
      <div className={classes.projectInfo}>
          <h3 className={classes.projectTitle}>{props.title}</h3>
          <span className={classes.description}>
              {props.description}
          </span>
      </div>
  </div>
)