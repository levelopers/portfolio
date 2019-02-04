import React from 'react'
import styles from './projectBox.module.sass'
// import { router } from '../../modules/Router'
import JSLogo from '../../assets/JSLogo.png'

// const {title,description,img,link} = props
export default function Project(props) {
  return (
    //react router
    <div
      className={`${styles.project} ${props.className}`}
      // onClick={() => router(props.link)}
      style={{ backgroundImage: `url(${props.img || JSLogo})` }}
    >
      <div className={styles.context_box} >
        <div className={styles.context}>
          {/* content title */}
          <div className={styles.title}>
            <p>{props.title} <br /> _____</p>
          </div>
          {/* hrefs (live demo & source code) */}
          {
            (!!props.live_demo || !!props.source_code) &&
            <div className={styles.btn} onClick={(e) => e.stopPropagation()}>
              <a
                target="live_demo"
                href={props.live_demo}
                target={props.live_demo}
                className={
                  !!props.live_demo
                    ? styles.btn_enabled
                    : styles.btn_disabled
                }
              >
                Live Demo
              </a>
              <a
                target="source_code"
                href={props.source_code}
                target={props.source_code}
                className={
                  !!props.source_code
                    ? styles.btn_enabled
                    : styles.btn_disabled
                }
              >
                Source Code
              </a>
            </div>
          }
          {props.children}
          {/* content description */}
          <div className={styles.description}>
            <p> {props.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

