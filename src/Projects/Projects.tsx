import React from 'react'
import classes from './Projects.module.scss'
import {Project} from './Project/Project'
import {Title} from '../common/components/Title/Title'
import socnetImage from '../assets/images/soc-net.png'
import todoImage from '../assets/images/todolist.png'
import {Fade} from 'react-awesome-reveal'
import anchorClass from '../common/styles/sass/anchorPosition.module.scss'

export const Projects: React.FC = () => {
    //todo: change social-net image, when finished
    const social = {backgroundImage: `url(${socnetImage})`}
    const todolist = {backgroundImage: `url(${todoImage})`}
    return (
      <section>
          <a className={anchorClass.anchor} id="projects"/>
          <div className={classes.block}>
              <Fade direction={'down'} triggerOnce>
                  <div className={classes.container}>
                      <Title text="Projects"/>
                      <div className={classes.projects}>
                          <Project style={social} title="Social network"
                                   href={'https://khazady.github.io/soc-net-ts'}
                                   description={'Typescript app based on React, Redux, React-redux, Redux-thunk, Axios, Redux-form, React-router, Reselect, Ant-design soon!'}/>
                          <Project style={todolist} title="Todolist"
                                   href={'https://khazady.github.io/to-do-list'}
                                   description={'Typescript app based on React (Hooks only), Redux, React-router, Redux-thunk, Axios, formik, Material UI. Also i used Storybook and integration Jest for testing components and Unit-tests for reducers. '}/>
                      </div>
                  </div>
              </Fade>
          </div>
      </section>
    )
}