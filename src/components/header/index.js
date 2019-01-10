import React from 'react'
import { Link } from 'react-router-dom'
import  './header.sass'
import styles from './header.module.sass'
export default function header(props) {
  return (
    <div className={styles.outbox}>
      <div className={styles.logo}>
        <Link to="/">Dongsheng Yin</Link>
      </div>
      <div className={styles.header_nav}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/projects">Projects</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div className={styles.contact}>
          Contact
        </div>
      </div>
    </div>
  )
}
