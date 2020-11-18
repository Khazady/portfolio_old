import React from 'react';
import classes from "./Nav.module.scss";

function Nav() {
    return (
      <div className={classes.nav}>
          <a className={classes.links} href="#main">Main</a>
          <a className={classes.links} href="#skills">Skills</a>
          <a className={classes.links} href="#projects">Projects</a>
          <a className={classes.links} href="#contacts">Contacts</a>
      </div>
    );
}

export default Nav;