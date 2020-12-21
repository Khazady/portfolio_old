import React from 'react'
import './App.scss'
import {Header} from './Header/Header'
import {About} from './About/About'
import {Skills} from './Skills/Skills'
import {Projects} from './Projects/Projects'
import {Hire} from './Hire/Hire'
import {ContactMe} from './ContactMe/ContactMe'
import {Footer} from './Footer/Footer'

//todo: remove height from all wrappers
const App: React.FC = () => (
  <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Hire/>
      <ContactMe/>
      <Footer/>
  </div>
)

export default App
