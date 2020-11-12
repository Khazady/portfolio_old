import React from 'react';
import './App.css';
import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Remote from './Remote/Remote';
import Contacts from "./Contacs/Contacts";
import {Footer} from "./Footer/Footer";

function App() {
    return (
      <div className="App">
          <Header/>
          <AboutMe/>
          <Skills/>
          <Works/>
          <Remote/>
          <Contacts/>
          <Footer/>
      </div>
    );
}

export default App;
