import React, { Component } from 'react';
import './Event.css'

class Event extends Component {

  render() {
    const style ={
      height: this.props.end - this.props.start,
      top: this.props.start,
      left: this.props.left + '%',
      width: (this.props.width + '%'),
    }

    return(
      <div className='Event' style={style}>
        <h1>Sample Item</h1>
        <p>Sample Item</p>
      </div>
    )
  }
}

export default Event
