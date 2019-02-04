import React from 'react'
import styles from '../../stylesheets/about.module.sass'
import Backend from '../../../../assets/backend.png'
import Frontend from '../../../../assets/frontend.png'
import Commu from '../../../../assets/cm.png'
import probSolve from '../../../../assets/ps.png'

export default function TechStack() {
  return (
    <div className={styles.tech_stack}>
      <div className={styles.stack}>
        <img src={Frontend} alt="" />
        <div className={styles.stack_title}>
          Front-end Design
            </div>
        <div className={styles.stack_text}>
          Expert in HTML, CSS and famous front-end libraries like Reactjs, Redux and Boostrap
            </div>
      </div>
      <div className={styles.stack}>
        <img src={Backend} alt="" />
        <div className={styles.stack_title}>
          Back-end Design
            </div>
        <div className={styles.stack_text}>
          Practice on building server side application about generating JSON objects traffic and basic authentication.
            </div>
      </div>
      <div className={styles.stack}>
        <img src={Commu} alt="" />
        <div className={styles.stack_title}>
          Communication Skills
            </div>
        <div className={styles.stack_text}>
          Always a good listener and focusing on clarity with specific examples
            </div>
      </div>
      <div className={styles.stack}>
        <img src={probSolve} alt="" />
        <div className={styles.stack_title}>
          Problem Solving Mindset
            </div>
        <div className={styles.stack_text}>
          can identify goals and be able to find appropriate solution
            </div>
      </div>
    </div>
  )
}
