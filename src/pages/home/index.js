import React, { Component } from 'react'
import RouterInstance from '../../modules/Router'
import Header from '../../components/header'
import Introduction from './components/Introduction'
import IntroProjects from './components/IntroProjects'
import styles from './stylesheets/home.module.sass'
import StarBackground from '../../components/cssStarBackground'
import Footer from '../../components/footer'
export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className={styles.outbox} >
        <Header />
        <Introduction/>
        <IntroProjects/>
        <Footer/>
        <RouterInstance {...this.props}/>
        <StarBackground/>
      </div>
    )
  }
}
