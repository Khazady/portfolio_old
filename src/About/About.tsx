import React from 'react'
import classes from './About.module.scss'
import myPhoto from '../assets/images/myPhoto.jpg'
import Particles from 'react-particles-js'
import {Slide, Fade} from 'react-awesome-reveal'
import Typewriter from 'typewriter-effect'

export const About: React.FC = () => {
    const photo = {backgroundImage: `url(${myPhoto})`}
    const particlesOpt = {
        'particles': {
            'number': {
                'value': 100,
                'density': {
                    'enable': true,
                    'value_area': 800
                }
            },
            'move': {
                'speed': 4,
                'bounce': true
            }
        }
    }
    const typingSettings = {strings: ['Front-end', 'Developer'], autoStart: true, loop: true, wrapperClassName: classes.typing }

    return (
      <div id='about' className={classes.block}>
          <Fade triggerOnce delay={1500} duration={6000}><Particles className={classes.particles}
                                                                    params={particlesOpt}/></Fade>
          <div className={classes.container}>
              <Slide direction={'left'} triggerOnce>
                  <div className={classes.introduce}>
                      <span>Hello There!</span>
                      <span>I am Mikhail <span>Kalatsey</span></span>
                      <Typewriter options={typingSettings} onInit={()=>null}/>
                  </div>
              </Slide>
              <Slide direction={'right'} triggerOnce>
                  <div className={classes.photoWrapper}>
                      <div style={photo} className={classes.photo}/>
                  </div>
              </Slide>
          </div>
      </div>
    )
}