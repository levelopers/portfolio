import React from 'react'
import styles from './arrow.module.sass'

export default function Arrow() {
  return (
    <div
      className={styles.arrow}
      onClick={() =>
        window.scrollBy({
          top: window.innerHeight,
          behavior: 'smooth'
        })}
    >
      <div className={styles.down}></div>
    </div>
  )
}
