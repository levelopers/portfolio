import React from 'react'
import styles from '../../stylesheets/about.module.sass'
import SkillBar from '../skillBar'

export default function Skills() {
  return (
    <div className={styles.skills}>
      <SkillBar skill="HTML" percent="90%" className={styles.skill} />
      <SkillBar skill="CSS" percent="70%" className={styles.skill} />
      <SkillBar skill="Javascript" percent="80%" className={styles.skill} />
      <SkillBar skill="React" percent="80%" className={styles.skill} />
      <SkillBar skill="Redux" percent="60%" className={styles.skill} />
      <SkillBar skill="Nodejs" percent="70%" className={styles.skill} />
      <SkillBar skill="UIDesign" percent="50%" className={styles.skill} />
      <SkillBar skill="Photoshop" percent="55%" className={styles.skill} />
    </div>
  )
}
