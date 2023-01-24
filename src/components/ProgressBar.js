import React, { Component } from 'react'

export default class ProgressBar extends Component {
  render() {
    return (
        <div className='progress-bar' >
        <div style={{width:this.props.value}}></div>
      </div>
    )
  }
}
