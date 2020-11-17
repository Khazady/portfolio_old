import React from 'react';
import classes from "./Contacts.module.css";
import containerClass from "../common/styles/Container.module.css"

function Contacts() {
    return (
      <div className={classes.contactsBlock}>
          <div className={`${containerClass.container} ${classes.contactsContainer}`}>
              <h2 className={classes.title}>Contacts</h2>
              <form className={classes.contactForm}>
                  <input placeholder="Company Name" type="text"/>
                  <input placeholder="Phone" type="text"/>
                  <textarea placeholder="Something"/>
                  <button className={classes.submitBtn}>Submit</button>
              </form>
          </div>
      </div>
    );
}

export default Contacts;