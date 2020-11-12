import React from 'react';
import classes from "./Footer.module.css";
import containerClass from "../common/styles/Container.module.css"

export const Footer: React.FC = (props) => (
  <div className={`${containerClass.container} ${containerClass.green} ${containerClass.footer}`}>
    <footer className={classes.footerBlock}>
      <h3>Mikhas Tyshkevich</h3>
        <div className={classes.squares}>
            <div className={classes.darkBlock}/>
            <div className={classes.lightBlock}/>
            <div className={classes.darkBlock}/>
            <div className={classes.lightBlock}/>
            <div className={classes.darkBlock}/>
            <div className={classes.lightBlock}/>
            <div className={classes.darkBlock}/>
        </div>
      <h3>© 2020 Все права защищены</h3>
    </footer>
  </div>
)