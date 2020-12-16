import React from 'react'
import classes from './Hire.module.scss'
import {Title} from '../common/components/Title/Title'

export const Hire: React.FC = () => (
  <section className={classes.block}>
      <div className={classes.container}>
          <Title text="I'm available for Freelance"/>
          <a href='#d'>Hire me</a>
      </div>
  </section>
)
