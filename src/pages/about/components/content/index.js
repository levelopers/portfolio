import React from 'react'
import styles from '../../stylesheets/about.module.sass'
import SkillBar from '../skillBar';
import Backend from '../../../../assets/backend.png'
import Frontend from '../../../../assets/frontend.png'
import Commu from '../../../../assets/cm.png'
import probSolve from '../../../../assets/ps.png'

export default function Content() {
  return (
    <div className={styles.page}>
      <div className={styles.page_title}>
        About Me
        <div className={styles.underline}>
        </div>
      </div>
      <div className={styles.page_content}>
        <div className={styles.row}>
          <div className={styles.summary}>
            <div className={styles.title}>
              Summary
          </div>
            <div className={styles.content}>
              Recent University graduate with an M.Eng degree
              in 2018 and 2 years of working in Front-end
              and Back-end web development filed.
              Passionately seeking to acquire relative
              filed work experience to apply my knowledge.
              A dedicated worker aiming to help achieve
              company goals and take on more responsibility.
          </div>
          </div>
          <div className={styles.skills}>
            <SkillBar skill="HTML" percent="90%" className={styles.skill} />
            <SkillBar skill="CSS" percent="70%" className={styles.skill} />
            <SkillBar skill="Javascript" percent="80%" className={styles.skill} />
            <SkillBar skill="React" percent="80%" className={styles.skill} />
            <SkillBar skill="Redux" percent="60%" className={styles.skill} />
            <SkillBar skill="Nodejs" percent="70%" className={styles.skill} />
            <SkillBar skill="UIDesign" percent="50%" className={styles.skill} />
            <SkillBar skill="Photoshop" percent="55%" className={styles.skill} />
          </div>
        </div>
        <div className={styles.tech_stack}>
          <div className={styles.stack}>
            <img src={Frontend} alt="" />
            <div className={styles.stack_title}>
              Front-end Design
            </div>
            <div className={styles.stack_text}>
              Expert in HTML, CSS and famous front-end libraries like Reactjs, Redux and Boostrap
            </div>
          </div>
          <div className={styles.stack}>
            <img src={Backend} alt="" />
            <div className={styles.stack_title}>
              Back-end Design
            </div>
            <div className={styles.stack_text}>
              Practice on building server side application about generating JSON objects traffic and basic authentication.
            </div>
          </div>
          <div className={styles.stack}>
            <img src={Commu} alt="" />
            <div className={styles.stack_title}>
              Communication Skills
            </div>
            <div className={styles.stack_text}>
             Always a good listener and focusing on clarity with specific examples
            </div>
          </div>
          <div className={styles.stack}>
            <img src={probSolve} alt="" />
            <div className={styles.stack_title}>
              Problem Solving Mindset
            </div>
            <div className={styles.stack_text}>
            can identify goals and be able to find appropriate solution  
            </div>
          </div>
        </div>
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

    </div>
  )
}
