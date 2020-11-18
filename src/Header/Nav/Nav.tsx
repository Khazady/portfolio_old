import React from 'react';
import classes from "./Nav.module.scss";

function Nav() {
    return (
      <div className={classes.nav}>
          <a className={classes.links} href="#">Main</a>
          <a className={classes.links} href="#">Skills</a>
          <a className={classes.links} href="#">Projects</a>
          <a className={classes.links} href="#">Contacts</a>
      </div>
    );
}

export default Nav;