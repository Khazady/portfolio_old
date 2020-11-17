import React from 'react';
import classes from "./Footer.module.css";
import containerClass from "../common/styles/Container.module.css"

export const Footer: React.FC = (props) => (
  <div className={classes.footer}>
    <footer className={`${containerClass.container} ${classes.footerContainer}`}>
      <h2>Mikhas Tyshkevich</h2>
        <div className={classes.socialIcons}>
            <div className={classes.socialIcon}/>
            <div className={classes.socialIcon}/>
            <div className={classes.socialIcon}/>
            <div className={classes.socialIcon}/>
        </div>
      <span className={classes.copyright}>© 2020 All rights reserved</span>
    </footer>
  </div>
)