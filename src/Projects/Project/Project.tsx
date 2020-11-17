import React from 'react';
import classes from "./Project.module.css";

type WorkPropsTypes = {
    title: string
    description: string
}

function Project(props: WorkPropsTypes) {
    return (
      <div className={classes.project}>
          <div className={classes.image}>
              <a className={classes.viewBtn}>Watch</a>
          </div>
          <div className={classes.title}>{props.title}</div>
          <span className={classes.description}>
              {props.description}
          </span>
      </div>
    );
}

export default Project;