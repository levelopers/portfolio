import React from 'react'
import styles from '../stylesheets/IntroProjects.module.sass'
import reactLogo from '../../../assets/ReactImag.png'
import nodejsLogo from '../../../assets/nodejsLogo.png'
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
        link='/projects'
        />
        <Project 
        title='Food2fork' 
        description='a Nodejs request for API application' 
        img={nodejsLogo}
        link='/projects'
        />
      </div>
    </div>
  )
}
