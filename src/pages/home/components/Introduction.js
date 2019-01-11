import React from 'react'
import styles from '../stylesheets/intro.module.sass'
export default function Introduction() {
  return (
    <div className={styles.outbox}>
      <div className={styles.intro}>
        <p className={styles.title}>
          Hi, I'm a software developer from Ottawa, Canada.
          I can help you build your next product.
        </p>
        <p className={styles.chat}>
          I design, build, operate and maintain web applications
          with  problem sovling mindset and learning attitude.
          <br />
          Do you have a project you'd like to discuss?
          <br />
          Let's chat&nbsp;
          <a className={styles.mail_link} href="mailto:allenyin@cmail.carleton.ca">
            allenyin@cmail.carleton.ca</a>
        </p>
        <div className={styles.arrow} onClick={() =>
          window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
          })
        }>
          <div className={styles.down}></div>
        </div>
      </div>
    </div>
  )
}
