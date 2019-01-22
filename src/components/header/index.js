import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.sass'
import './header.sass'
import MediaQuery from 'react-responsive';
import device, { size } from '../../modules/mediaQuery'

export default class header extends Component {
  state = {
    showMenu: false,
  }
  toggleNavClick = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
  render() {
    return (
      <div
        className={styles.outbox}
        style={this.state.showMenu
          ? { "display": 'flex', flexDirection: 'row-reverse' }
          : null}
      >
        <MediaQuery maxWidth={Number(size.tablet.slice(0, -2))}>
          {
            matches =>
              matches
                ? !this.state.showMenu &&
                <div className={styles.logo}>
                  <Link to="/">Dongsheng Yin</Link>
                </div>
                : <div className={styles.logo}>
                  <Link to="/">Dongsheng Yin</Link>
                </div>
          }
        </MediaQuery>
        <div className={styles.toggle_button} onClick={this.toggleNavClick}>
          button
        </div>
        <MediaQuery maxWidth={Number(size.tablet.slice(0, -2))}>
          {
            matches =>
              matches
                ? this.state.showMenu &&
                <NavContent />
                : <NavContent />
          }
        </MediaQuery>
      </div>
    )
  }
}

function NavContent() {
  return (
    <div className={styles.header_nav}>
      <div className="nav_ele">
        <Link to="/">Home</Link>
      </div>
      <div className="nav_ele">
        <Link to="/projects">Projects</Link>
      </div>
      <div className="nav_ele">
        <Link to="/about">About</Link>
      </div>
      <div className={styles.contact} className="nav_ele">
        Contact
            </div>
    </div>
  )
}

