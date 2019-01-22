import React from 'react'
import styles from './stylesheets/projects.module.sass'
import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Background from '../../components/cssStarBackground'
import ProjectBoard from './components/ProjectBoard'
import RouterInstance from '../../modules/Router'
export default function Projects(props) {
  return (
    <div className={styles.outbox}>
      <Header />
      <div className={styles.page}>
        <div className={styles.navbar}>
          <Navbar
            title="Projects"
            subtitle="web development"
            year="2018"
            category="frontend"
            github="link"
          />
        </div>
        <ProjectBoard />
      </div>
      <Background />
      <RouterInstance {...props} />
    </div>
  )
}

