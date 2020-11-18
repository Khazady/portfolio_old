import React from 'react';
import classes from "./Contacts.module.scss";
import containerClass from "../common/styles/Container.module.css"
import {Title} from "../common/components/Title/Title";

function Contacts() {
    return (
      <div id='contacts' className={classes.contactsBlock}>
          <div className={`${containerClass.container} ${classes.contactsContainer}`}>
              <Title text='Contacts'/>
              <form className={classes.contactForm}>
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
                  <button className={classes.submitBtn}>Submit</button>
              </form>
          </div>
      </div>
    );
}

export default Contacts;