import React from 'react'
import styles from '../stylesheets/project.module.sass'
import {router } from '../../../modules/Router'

export default function Project(props) {
  return (
    <div className={styles.project} 
    onClick={()=>router(props.link)}
    >
      <img src={props.img} alt="react" />
      <div className={styles.context_box} >
        <div className={styles.context}>
          <div className={styles.title}>
           <p>{props.title} <br/> _____</p> 
          </div>
          <div className={styles.description}>
           <p> {props.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

