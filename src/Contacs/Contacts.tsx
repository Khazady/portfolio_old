import React from 'react';
import classes from "./Contacts.module.css";
import containerClass from "../common/styles/Container.module.css"

function Contacts() {
    return (
      <div className={`${containerClass.container} ${containerClass.pink}`}>
          <div className={classes.contactsBlock}>
              <div className={classes.text}>
                  <span>Контакты</span>
              </div>
              <form>
                  <input placeholder="Company Name" type="text"/>
                  <input placeholder="Phone" type="text"/>
                  <textarea placeholder="Something"/>
              </form>
              <button>Отправить</button>
          </div>
      </div>
    );
}

export default Contacts;