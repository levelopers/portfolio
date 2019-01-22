import React from 'react'
import styles from '../stylesheets/projects.module.sass'
import ProjectBox from '../../../components/projectBox'
import ReactImg from '../../../assets/ReactImag.png'
import NodejsLogo from '../../../assets/nodejsLogo.png'
export default function ProjectBoard() {
  return (
    <div className={styles.board_outbox}>
      <div className={styles.row}>
        <ProjectBox 
        title="React forum"
        description="a simple react application"
        img={ReactImg}
        link="aaaa"
        live_demo="live"
        source_code="source"
        />
        <ProjectBox 
        title="Nodejs Lyrics Board"
        description="a reorganizable lyrics board application"
        img={NodejsLogo}
        link="aaaa"
        live_demo="live"
        source_code="source"
        />
      </div>
      <div className={styles.row}>
        <ProjectBox 
        title="React Portfolio"
        description="a portfolio application"
        img={ReactImg}
        link="aaaa"
        live_demo="live"
        source_code="source"
        />
        <ProjectBox />
      </div>
    </div>
  )
}
