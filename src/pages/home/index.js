import React from 'react'
import Introduction from './components/Introduction'
import styles from './stylesheets/home.module.sass'
import StarBackground from '../../components/cssStarBackground'
import Refs from '../../modules/Refs'

export default function Home(props) {
  return (
    <div className={styles.outbox} ref={ref=>Refs.set_Ref('home',ref)}>
      <div className={styles.content}>
        <Introduction />
      </div>
      <StarBackground />
    </div>
  )
}

