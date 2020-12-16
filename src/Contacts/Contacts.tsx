import React from 'react'
import classes from './Contacts.module.scss'
import {Title} from '../common/components/Title/Title'

export const Contacts: React.FC = () => (
  <section id='contacts' className={classes.block}>
      <div className={classes.container}>
          <Title text='Contacts'/>
          <form>
              <div className={classes.fieldset}>
                  <div className={classes.inputsWrapper}>
                      <input placeholder="Your Name" type="text"/>
                      <input placeholder="Your Email" type="text"/>
                      <input placeholder="Your Phone" type="text"/>
                  </div>
                  <div className={classes.textareaWrapper}>
                      <textarea placeholder="Your Message"/>
                  </div>
              </div>
              <button>Submit</button>
          </form>
      </div>
  </section>
)