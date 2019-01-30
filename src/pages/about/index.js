import React from 'react'
import styles from './stylesheets/about.module.sass'
import Content from './components/content'
import StarBackground from '../../components/cssStarBackground'
export default function About() {
  return (
    <div className={styles.outbox}>
      <Content/>
      <StarBackground/>
    </div>
  )
}
