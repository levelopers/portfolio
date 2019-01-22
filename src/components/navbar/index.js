import React from 'react'
import styles from './navbar.module.sass'

export default function Navbar({ 
  title, 
  subtitle, 
  year, 
  category, 
  github, 
  liveDemo,
}) {
  return (
    <div className={styles.outbox} >
      <div className={styles.project_title}>
        {title}
        <div className={styles.subtitle}>
          {subtitle}
        </div>
      </div>
      <Description title="Year" content={year} />
      <Description title="Category" content={category} />
      <Description title="Source Code" content={github} />
      <Description title="Live Demo" content={liveDemo} />
    </div>
  )
}

function Description({ title, content }) {
  return (
    <div className={styles.description}>
      {
        content &&
        <div>
          <div className={styles.title}>
            {title}
          </div>
          <div className={styles.content}>
            {content}
          </div>
        </div>
      }
    </div>
  )
}
