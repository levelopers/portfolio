import React from 'react'
import styles from './stylesheets/projects.module.sass'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import Background from '../../components/cssStarBackground'
import ProjectBoard from './components/ProjectBoard'
import RouterInstance from '../../modules/Router'
import Arrow from '../../components/arrow'
import MediaQuery from 'react-responsive'
import size from '../../modules/mediaQuery'

export default function Projects(props) {
  return (
    <div className={styles.outbox}>
      <div className={styles.content}>
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
          <MediaQuery query={size.max.tablet}>
            <div className={styles.arrow}>
              <Arrow />
            </div>
          </MediaQuery>
        </div>
        <Footer className={styles.footer} />
      </div>
      <Background />
      <RouterInstance {...props} />
    </div>
  )
}

