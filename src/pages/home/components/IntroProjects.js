import React from 'react'
import styles from '../stylesheets/IntroProjects.module.sass'
import reactLogo from '../../../assets/ReactImag.png'
import Project from '../../../components/projectBox'

export default function IntroProjects(props) {
  return (
    <div className={styles.outbox}>
      <p>Recent Works</p>
      <div className={styles.projects}>
        <Project 
        title='React-forum' 
        description='a simple React application' 
        img={reactLogo}
        link='aaa'
        />
        <Project 
        title='React-forum' 
        description='a simple React application' 
        img={reactLogo}
        link='aaa'
        />
      </div>
    </div>
  )
}
