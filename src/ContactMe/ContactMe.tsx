import React from 'react'
import classes from './ContactMe.module.scss'
import {Title} from '../common/components/Title/Title'
import {Fade} from 'react-awesome-reveal'
import anchorClass from '../common/styles/sass/anchorPosition.module.scss'

export const ContactMe: React.FC = () => (
  <section>
      <a className={anchorClass.anchor} id="contactMe"/>
      <div className={classes.block}>
          <Fade direction={'down'} triggerOnce>
              <div className={classes.container}>
                  <Title text='Contact Me'/>
                  <form action='https://formspree.io/f/mqkgyvdp' method='POST'>
                      <div className={classes.fieldset}>
                          <div className={classes.inputsWrapper}>
                              <input placeholder="Your Name" type="text" name='name'/>
                              <input placeholder="Your Email" type="text" name='email'/>
                              <input placeholder="Your Phone" type="text" name='phone'/>
                          </div>
                          <div className={classes.textareaWrapper}>
                              <textarea placeholder="Your Message" name='message'/>
                          </div>
                      </div>
                      <button>Submit</button>
                  </form>
              </div>
          </Fade>
      </div>
  </section>
)