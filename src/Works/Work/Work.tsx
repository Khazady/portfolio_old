import React from 'react';
import classes from "./Work.module.css";

type WorkPropsTypes = {
    title: string
    description: string
}

function Work(props: WorkPropsTypes) {
    return (
      <div className={classes.work}>
          <div className={classes.image}>
              <button className={classes.watchButton}>Смотреть</button>
          </div>
          <div className={classes.title}>{props.title}</div>
          <div className={classes.description}>
              {props.description}
          </div>
      </div>
    );
}

export default Work;