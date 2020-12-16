import React from 'react';
import classes from "./Nav.module.scss";

export const Nav: React.FC = () => (
  <div className={classes.nav}>
      <a className={classes.links} href="#about">Main</a>
      <a className={classes.links} href="#skills">Skills</a>
      <a className={classes.links} href="#projects">Projects</a>
      <a className={classes.links} href="#contacts">Contacts</a>
  </div>
)