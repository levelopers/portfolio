import React from 'react'
import styles from '../../stylesheets/about.module.sass'
import Summary from './Summary'
import Skills from './Skills'
import TechStack from './TechStack'
import Experience from './Experience'

export default function Content() {
  return (
    <div className={styles.page}>
      <div className={styles.page_title}>
        About Me
        <div className={styles.underline}>
        </div>
      </div>
      <div className={styles.page_content}>
        <div className={styles.row}>
          <Summary />
          <Skills />
        </div>
        <TechStack />
        <Experience />
      </div>
    </div>
  )
}
