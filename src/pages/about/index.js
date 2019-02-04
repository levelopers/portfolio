import React from 'react'
import styles from './stylesheets/about.module.sass'
import Content from './components/content'
import Refs from '../../modules/Refs'

export default function About() {
  return (
    <div className={styles.outbox} ref={ref=>Refs.set_Ref('about',ref)}>
      <Content/>
    </div>
  )
}
