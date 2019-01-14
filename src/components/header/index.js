import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.sass'
import './header.sass'



export default class header extends Component {
  state = { 
    height: '0',
    display: 'none'
  }
  toggleNavClick = () => {
    this.setState({
      height: '200px',
      display: 'flex'
    })
  }
  render() {
    return (
      <div className={styles.outbox}>
        <div className={styles.logo}>
          <Link to="/">Dongsheng Yin</Link>
        </div>
        <div className={styles.header_nav}>
          <div className="header_nav">
            <Link to="/">Home</Link>
          </div>
          <div className="header_nav">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="header_nav">
            <Link to="/about">About</Link>
          </div>
          <div className={styles.contact} className="header_nav">
            Contact
          </div>
        </div>
        {/* toggle nav bar */}
        {/* <div className={styles.toggleButton}>
          <button onClick={this.toggleNavClick}>button</button>
        </div> */}
        <div className={[styles.responsive].join(' ')} style={{height:this.state.height, display:this.state.display}}>
          <div className={styles.toggle_nav_ele}>
            <Link to="/">Home</Link>
          </div>
          <div className={styles.toggle_nav_ele}>
            <Link to="/projects">Projects</Link>
          </div>
          <div className={styles.toggle_nav_ele}>
            <Link to="/about">About</Link>
          </div>
          <div className={styles.contact} className={styles.toggle_nav_ele}>
            Contact
          </div>
        </div>
      </div>
    )
  }
}

