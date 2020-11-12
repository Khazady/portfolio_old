import React from 'react';
import classes from "./Remote.module.css";
import containerClass from "../common/styles/Container.module.css"

function Remote() {
    return (
      <div className={`${containerClass.container} ${containerClass.yellow} ${containerClass.remote}`}>
          <div className={classes.remoteBlock}>
              <span className={classes.text}>Рассматриваю варианты удаленной работы</span>
              <a href='#d' className={classes.button}>Нанять меня</a>
          </div>
      </div>
    );
}

export default Remote;