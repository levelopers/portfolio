import React from 'react'
import styles from '../../stylesheets/about.module.sass'

export default function Experience() {
  return (
    <div className={styles.column}>
      <div className={styles.education}>
        <div className={styles.title}>
          Education
      </div>
        <div className={styles.content}>
          <div className={styles.item}>
            <div className={styles.item_title}>
              Bacholor of Engineering
            <div className={styles.date}>
                2011 Sep. - 2015 Jun.
            </div>
            </div>
            <div className={styles.item_content}>
              learning programming language, mathmatics, probability and computer theories.
          </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item_title}>
              Master of Computer Engineering
            <div className={styles.date}>
                2016 Sep. - 2018 Sep.
            </div>
            </div>
            <div className={styles.item_content}>
              Specialize in wireless communication and network
          </div>
          </div>
        </div>
      </div>
      <div className={styles.work}>
        <div className={styles.title}>
          Experiences
      </div>
        <div className={styles.content}>
          <div className={styles.item}>
            <div className={styles.item_title}>
              Backend developer
              <div className={styles.date}>
                2018 Sep. - 2019 Jan.
              </div>
            </div>
            <div className={styles.item_content}>
              Studying Nodejs and MongoDB
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item_title}>
              Frontend developer
              <div className={styles.date}>
                2018 Sep. - 2019 Jan.
              </div>
            </div>
            <div className={styles.item_content}>
              Acquiring knowledge of Reactjs and Redux
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
