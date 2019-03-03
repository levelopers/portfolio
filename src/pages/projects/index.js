import React from 'react'
import styles from './stylesheets/projects.module.sass'
import Navbar from '../../components/navbar'
import ProjectBoard from './components/ProjectBoard'
import Refs from '../../modules/Refs'


export default function Projects(props) {
  return (
    <div className={styles.outbox} ref={ref=>Refs.set_Ref('projects',ref)}>
      <div className={styles.page}>
        <div className={styles.page_title}>
          Projects
        <div className={styles.underline}>
          </div>
        </div>
        <div className={styles.page_content}>
          <div className={styles.navbar}>
            <Navbar
              title="Projects"
              subtitle="web development"
              year="2018"
              category="frontend"
              github="https://github.com/levelopers"
            />
          </div>
          <ProjectBoard />
        </div>
      </div>
    </div>
  )
}

