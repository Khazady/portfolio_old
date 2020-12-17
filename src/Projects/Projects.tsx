import React from 'react'
import classes from './Projects.module.scss'
import {Project} from './Project/Project'
import {Title} from '../common/components/Title/Title'
import socnetImage from '../assets/images/soc-net.png'
import todoImage from '../assets/images/todolist.png'
import {Fade} from 'react-awesome-reveal'

export const Projects: React.FC = () => {
    //картинки прокидываем в пропсы
    const social = {backgroundImage: `url(${socnetImage})`}
    const todolist = {backgroundImage: `url(${todoImage})`}
    return (
      <section id='projects' className={classes.block}>
          <Fade direction={'down'} triggerOnce>
              <div className={classes.container}>
                  <Title text="Projects"/>
                  <div className={classes.projects}>
                      <Project style={social} title="Social network"
                               href={'https://khazady.github.io/soc-net-ts'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                      <Project style={todolist} title="Todolist"
                               href={'https://khazady.github.io/to-do-list'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                  </div>
              </div>
          </Fade>
      </section>
    )
}