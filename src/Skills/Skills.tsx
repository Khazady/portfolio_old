import React from 'react'
import classes from './Skills.module.scss'
import anchorClass from '../common/styles/sass/anchorPosition.module.scss'
import {Skill} from './Skill/Skill'
import {Title} from '../common/components/Title/Title'
import htmlImage from '../assets/images/html5.svg'
import cssImage from '../assets/images/css-3.svg'
import jsImage from '../assets/images/js-file.svg'
import reactImage from '../assets/images/react.svg'
import {Fade} from 'react-awesome-reveal'

export const Skills: React.FC = () => {
    //картинки прокидываем в пропсы
    const html = {backgroundImage: `url(${htmlImage})`}
    const css = {backgroundImage: `url(${cssImage})`}
    const js = {backgroundImage: `url(${jsImage})`}
    const react = {backgroundImage: `url(${reactImage})`}
    return (
      <section>
          <a className={anchorClass.anchor} id="skills"/>
          <div className={classes.block}>
              <Fade direction={'down'} triggerOnce>
                  <div className={classes.container}>
                      <Title text="Skills"/>
                      <div className={classes.skills}>
                          <Skill style={html} title="HTML5" href='https://htmlacademy.ru/profile/id1338073'
                                 description={'Semantic elements, Open Graph, data attributes, tables, template'}/>
                          <Skill style={css} title="CSS3" href='https://htmlacademy.ru/profile/id1338073'
                                 description={'SASS & LESS, mixins, adaptive design, flex & grid, animations, Material UI, Ant Design'}/>
                          <Skill style={js} title="JS" href={'https://github.com/Khazady'}
                                 description={'Event-loop, micro/macro tasks, prototypal inheritance, scope, promise'}/>
                          <Skill style={react} title="React" href={'https://github.com/Khazady'}
                                 description={'Hooks, HOCs, Redux, React-Redux, Router, Thunk, Axios, Formik/Redux-Form'}/>
                      </div>
                  </div>
              </Fade>
          </div>
      </section>
    )
}
