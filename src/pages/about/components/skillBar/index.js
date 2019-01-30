import React from 'react'
import styles from './skillBar.module.sass'

export default function SkillBar({ skill, percent, className }) {
  return (
    <div className={`${className} ${styles.outbox}`} >
      <div className={styles.content} >
        <div className={styles.skill} style={{ width: percent }}>
          <div className={styles.skill_text}>
            {skill}
          </div>
        </div>
        <div className={styles.percent}>
          <div className={styles.percent_text}>
            {percent}
          </div>
        </div>
      </div>
    </div>
  )
}
