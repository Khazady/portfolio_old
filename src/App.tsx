import React from 'react'
import './App.css'
import {Header} from './Header/Header'
import {About} from './About/About'
import {Skills} from './Skills/Skills'
import {Projects} from './Projects/Projects'
import {Hire} from './Hire/Hire'
import {Contacts} from './Contacts/Contacts'
import {Footer} from './Footer/Footer'

//todo: remove height from all wrappers
const App: React.FC = () => (
  <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Hire/>
      <Contacts/>
      <Footer/>
  </div>
)

export default App
