import React from 'react'
import styles from './footer.module.sass'
import { Link } from 'react-router-dom'

export default function Footer(props) {
  return (
    <div className={`${styles.outbox} ${props.className}`}>
    <div className={styles.page}>

      <div className={styles.title}>
        <p className={styles.name}>Dongsheng Yin</p>
        <a href="mailto:allenyin@cmail.carleton.ca">allenyin@cmail.carleton.ca</a>
      </div>
      <div className={styles.content}>
        <div className={styles.menu}>
          <div className={styles.content_title}>
            <p>Menu</p>
          </div>
          <div className={styles.content_context}>
            <a target="resume" href="https://firebasestorage.googleapis.com/v0/b/dongsheng-portfolio.appspot.com/o/resume.pdf?alt=media&token=6a0f3277-e2f2-4b35-b495-24f379cfc00c">
            Resume
            </a>
            <Link to="/projects"> Projects</Link>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.content_title}>
            <p>Contact</p>
          </div>
          <div className={styles.content_context}>
            <div>
              e-mail: &nbsp;<a href="mailto:allenyin@cmail.carleton.ca">allenyin@cmail.carleton.ca</a>
            </div>
            <div>
              Phone: +1 343 988 2485
          </div>
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.content_title}>
            <p>Social</p>
          </div>
          <div className={styles.content_context}>
            <a target="blank_github" href="https://github.com/levelopers">Github</a>
            <a target="blank_linkedin" href="https://www.linkedin.com/in/dongsheng-yin-97b992136/">Linkedin</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p> Copyright Dongsheng Yin 2019 © </p>
      </div>
    </div>

    </div>
  )
}
