import React from 'react';
import './App.css';
import Header from "./Header/Header";
import About from "./About/About";
import Skills from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import Hire from './Hire/Hire';
import Contacts from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";

//убрать высоту со всех врапперов
function App() {
    return (
      <div className="App">
          <Header/>
          <About/>
          <Skills/>
          <Projects/>
          <Hire/>
          <Contacts/>
          <Footer/>
      </div>
    );
}

export default App;
