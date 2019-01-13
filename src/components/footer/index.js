import React from 'react'
import styles from './footer.module.sass'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <div className={styles.outbox}>
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
            <Link to="/about">About </Link>
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
            <a target="blank" href="https://github.com/levelopers">Github</a>
            <a target="blank" href="https://www.linkedin.com/in/dongsheng-yin-97b992136/">Linkedin</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p> Copyright Dongsheng Yin 2019 © </p>
      </div>
    </div>
  )
}