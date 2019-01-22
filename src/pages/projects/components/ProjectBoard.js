import React from 'react'
import styles from '../stylesheets/projects.module.sass'
import ProjectBox from '../../../components/projectBox'
import ReactImg from '../../../assets/ReactImag.png'
import NodejsLogo from '../../../assets/nodejsLogo.png'
import MediaQuery from 'react-responsive';
import device, { size } from '../../../modules/mediaQuery'

export default function ProjectBoard() {
  return (
    <div className={styles.board_outbox}>
      {/* featured works */}
      <MediaQuery query={device.max.tablet}>
        <p className={styles.category_title}>Featured Works</p>
      </MediaQuery>
      <div className={styles.row}>
        <ProjectBox
          title="React forum"
          description="a simple react application"
          img={ReactImg}
          live_demo="https://levelopers-react-forum.herokuapp.com"
          source_code="https://github.com/levelopers/Reactjs"
          className={styles.project}
        />
        <ProjectBox
          title="Food2fork"
          description="a Nodejs request for recipe API application"
          img={NodejsLogo}
          live_demo="https://food2fork.herokuapp.com/"
          source_code="https://github.com/levelopers/comp2406/tree/master/ASS4/express_food2Fork"
          className={styles.project}
        />
      </div>
      <div className={styles.row}>
        <ProjectBox
          title="React Portfolio"
          description="a portfolio application"
          img={ReactImg}
          live_demo="/"
          source_code="https://github.com/levelopers/portfolio"
          className={styles.project}
        />
      </div>
      {/* School Works */}
      <MediaQuery query={device.max.tablet}>
        <p className={styles.category_title}>School Works</p>
      </MediaQuery>
      <div className={styles.row}>
        <ProjectBox
          title="School Works"
          description="COMP 2406 -- Fundamentals of Web Applications"
          source_code="https://github.com/levelopers/comp2406"
          className={styles.project}
        />
      </div>
    </div>
  )
}
