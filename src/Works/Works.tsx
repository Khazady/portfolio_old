import React from 'react';
import classes from "./Works.module.css";
import containerClass from "../common/styles/Container.module.css"
import Work from "./Work/Work";

function Works() {
    return (
      <div className={`${containerClass.container} ${containerClass.blue} ${containerClass.works}`}>
          <div className={classes.worksBlock}>
              <div className={classes.titleBlock}>
                  <h2 className={classes.title}>My works</h2>
              </div>
              <div className={classes.works}>
                  <Work title="Social network"
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                  <Work title="Todolist"
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
              </div>
          </div>
      </div>
    );
}

export default Works;