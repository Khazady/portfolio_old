import React from 'react'
import classes from './Header.module.scss'
import {Nav} from './Nav/Nav'


export const Header: React.FC = () => (
  <div className={classes.block}>
      <header className={classes.header}>
          <div className={classes.name}>
              <h2>Mikhail Kalatsey</h2>
          </div>
          <Nav/>
      </header>
  </div>
)
