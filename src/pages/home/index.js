import React from 'react'
import RouterInstance from '../../modules/Router'
import Header from '../../components/header'
import Introduction from './components/Introduction'
import IntroProjects from './components/IntroProjects'
import styles from './stylesheets/home.module.sass'
import StarBackground from '../../components/cssStarBackground'
import Footer from '../../components/footer'

export default function Home(props) {
  return (
    <div className={styles.outbox} >
      <div className={styles.content}>
        <Header />
        <Introduction />
        <IntroProjects />
        <Footer />
      </div>
      <RouterInstance {...props} />
      <StarBackground />
    </div>
  )
}

