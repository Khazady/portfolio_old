import React from 'react'
import classes from './About.module.scss'
import myPhoto from '../assets/images/myPhoto.jpg'
import {Title} from '../common/components/Title/Title'

const particlesOpt = {
    'particles': {
        'number': {
            'value': 150,
            'density': {
                'enable': true,
                'value_area': 800
            }
        }
    }
}

export const About: React.FC = () => {
    const photo = {backgroundImage: `url(${myPhoto})`}
    return (
      <div id='main' className={classes.block}>
          <div className={classes.container}>
              <Title text={'I am Frontend Developer'}/>
              <div>
                  <div style={photo} className={classes.photo}/>
                  <div className={classes.text}>
                      <p>Hello There!</p>
                      <p>I am Mikhail Kalatsey</p>
                  </div>
              </div>
          </div>
      </div>
    )
}