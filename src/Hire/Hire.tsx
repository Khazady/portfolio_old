import React from 'react'
import classes from './Hire.module.scss'
import {Title} from '../common/components/Title/Title'
import {Fade} from 'react-awesome-reveal'

export const Hire: React.FC = () => (
  <section className={classes.block}>
      <Fade direction={'down'} triggerOnce>
          <div className={classes.container}>
              <Title text="I'm available for Freelance"/>
              <a href='https://rabota.by/resume/25f4e112ff08839eb40039ed1f38626f6b4f4d'
                 target='_blank' rel="noopener noreferrer">Hire me</a>
          </div>
      </Fade>
  </section>
)
