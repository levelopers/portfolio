import React, { Component } from 'react'
import styles from './header.module.sass'
import './header.sass'
import MediaQuery from 'react-responsive';
import device, { size } from '../../modules/mediaQuery'
import Refs from '../../modules/Refs'

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
                  <a href="/">Dongsheng Yin</a>
                </div>
                : <div className={styles.logo}>
                  <a href="/">Dongsheng Yin</a>
                </div>
          }
        </MediaQuery>
        {/* navbar */}
        <div className={styles.toggle_button} onClick={this.toggleNavClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* navcontent */}
        <MediaQuery maxWidth={Number(size.tablet.slice(0, -2))}>
          {
            matches =>
              matches
                ?
                <NavContent style={
                  this.state.showMenu
                    ? { display: 'flex', height: '100%' }
                    : { display: 'none', height: '0' }} />
                : <NavContent />
          }
        </MediaQuery>
      </div>
    )
  }
}

function scroll(ref) {
  window.scrollTo({
    top: Refs.get_Ref(ref).offsetTop-100, //fixed header top offset 100
    behavior: "smooth"
  })
}

function NavContent({ style }) {
  return (
    <div style={style} className={styles.header_nav}>
      {/* home */}
      <div className="nav_ele">
        <a onClick={() => scroll('home')}>Home</a>
      </div>
      {/* projects */}
      <div className="nav_ele">
        <a onClick={() => scroll('projects')}>Projects</a>
      </div>
      {/* about me */}
      <div className="nav_ele">
        <a onClick={() => scroll('about')}>About me</a>
      </div>
      {/* resume */}
      <div className="nav_ele">
        <a target="resume" href="https://firebasestorage.googleapis.com/v0/b/dongsheng-portfolio.appspot.com/o/resume.pdf?alt=media&token=6a0f3277-e2f2-4b35-b495-24f379cfc00c">
          Resume
        </a>
      </div>
      {/* contact */}
      <div
        className={styles.contact}
        className="nav_ele"
        onClick={() =>
          window.scrollBy({
            top: 100000,
            behavior: 'smooth'
          })}
      >
        Contact
            </div>
    </div>
  )
}

