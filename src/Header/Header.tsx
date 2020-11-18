import React from 'react';
import classes from "./Header.module.scss";
import Nav from "./Nav/Nav";
import containerClass from "../common/styles/Container.module.css"


function Header() {
    return (
      <div className={containerClass.container}>
          <header className={classes.header}>
              <div className={classes.name}>
                  <h2>Mikhail Kalatsey</h2>
              </div>
              <Nav/>
          </header>
      </div>
    );
}

export default Header;