import React from 'react'
import classes from './Footer.module.scss'
import {Title} from '../common/components/Title/Title'
import emailImage from '../assets/images/icon-email.svg'
import phoneImage from '../assets/images/icon-phone.svg'
import telegramImage from '../assets/images/icon-telegram.svg'
import linkedinImage from '../assets/images/icon-linkedin.svg'
import {Fade} from 'react-awesome-reveal'

export const Footer: React.FC = () => {
    const phone = {backgroundImage: `url(${phoneImage})`}
    const telegram = {backgroundImage: `url(${telegramImage})`}
    const email = {backgroundImage: `url(${emailImage})`}
    const linkedin = {backgroundImage: `url(${linkedinImage})`}
    return (
      <section className={classes.block}>
          <Fade direction={'down'} triggerOnce>
              <footer className={classes.container}>
                  <Title text='Mikhail Kalatsey'/>
                  <div className={classes.socialIcons}>
                      <a style={phone} href="tel:+375333264127"
                         className={classes.socialIcon}/>
                      <a style={telegram} href="https://t.me/khazady"
                         className={classes.socialIcon}
                         target='_blank' rel="noopener noreferrer"/>
                      <a style={email} href="mailto:seakingtourist@gmail.com"
                         className={classes.socialIcon}/>
                      <a style={linkedin} href='https://www.linkedin.com/in/mkalatsey'
                         className={classes.socialIcon}
                         target='_blank' rel="noopener noreferrer"/>
                  </div>
                  <span className={classes.copyright}>© 2020 All rights reserved</span>
              </footer>
          </Fade>
      </section>
    )
}