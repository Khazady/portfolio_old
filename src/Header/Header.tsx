import React from 'react';
import classes from "./Header.module.css";
import Nav from "./Nav/Nav";
import containerClass from "../common/styles/Container.module.css"


function Header() {
    return (
      <div className={`${containerClass.container} ${containerClass.blue} ${containerClass.header}`}>
          <header className={classes.header}>
              <Nav/>
          </header>
      </div>
    );
}

export default Header;