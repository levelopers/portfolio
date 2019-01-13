import React, { Component } from 'react'
import styles from './uc.module.sass'

export default class UC extends Component {
  state = { style:{display: 'flex' }}
  handleBackgroundClick = () => {
    this.setState({ style:{display: 'none' }})
  }
  handleCancelClick = () => {
    this.setState({ style:{display: 'none' }})
  }
  handleContentClick=(e)=>{
    e.stopPropagation()
  }
  render() {
    return (
      <div className={styles.outbox} style={this.state.style} onClick={this.handleBackgroundClick}>
        <div className={styles.contentBox} onClick={this.handleContentClick}>
          <p>hi, welcome to my portfolio! </p>
          <p>unfortunately, this website is under construction, some features may not be completed.</p>
          <p>please look around and feel free to give me feedbacks!</p>
          <div className={styles.close} onClick={this.handleCancelClick}>
            &times;
          </div>
        </div>
      </div>
    )
  }
}
