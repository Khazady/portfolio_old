import React from 'react'
import classes from './Hire.module.scss'
import {Title} from '../common/components/Title/Title'
import {Fade} from 'react-awesome-reveal'

export const Hire: React.FC = () => (
  <section className={classes.block}>
      <Fade direction={'down'} triggerOnce>
          <div className={classes.container}>
              <Title text="I'm available for Freelance"/>
              <a href='#d'>Hire me</a>
          </div>
      </Fade>
  </section>
)
