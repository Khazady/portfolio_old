import React from 'react'
import classes from './Footer.module.scss'
import {Title} from '../common/components/Title/Title'
import emailImage from '../assets/images/icon-email.svg'
import phoneImage from '../assets/images/icon-phone.svg'
import telegramImage from '../assets/images/icon-telegram.svg'
import linkedinImage from '../assets/images/icon-linkedin.svg'

export const Footer: React.FC = () => {
    const phone = {backgroundImage: `url(${phoneImage})`}
    const telegram = {backgroundImage: `url(${telegramImage})`}
    const email = {backgroundImage: `url(${emailImage})`}
    const linkedin = {backgroundImage: `url(${linkedinImage})`}
    return (
      <section className={classes.block}>
          <footer className={classes.container}>
              <Title text='Mikhail Kalatsey'/>
              <div className={classes.socialIcons}>
                  <a style={phone} href="tel:+375333264127" className={classes.socialIcon}/>
                  <a style={telegram} href="https:/t.me/khazady" className={classes.socialIcon}/>
                  <a style={email} href="mailto:seakingtourist@gmail.com" className={classes.socialIcon}/>
                  <a style={linkedin} href='https://www.linkedin.com/in/mkalatsey/?locale=en_US' className={classes.socialIcon}/>
              </div>
              <span className={classes.copyright}>© 2020 All rights reserved</span>
          </footer>
      </section>
    )
}