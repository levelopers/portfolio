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
      <Description title="Source Code" hyper_link={github} />
      <Description title="Live Demo" content={liveDemo} />
    </div>
  )
}

function Description({ title, content, hyper_link }) {
  return (
    <div className={styles.description}>
      {
        (content || hyper_link) &&
        <div>
          <div className={styles.title}>
            {title}
          </div>
          <div className={styles.content}>
            {
              content
              || <a target={hyper_link} href={hyper_link}>
                {hyper_link}
              </a>
            }
          </div>
        </div>
      }
    </div>
  )
}
