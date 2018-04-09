import React, { Component } from 'react';
import './TimeIndex.css'

class TimeIndex extends Component {

  render() {

    const hoursIndex = [
      <li key={Date.now() * 1000 * Math.random(1000)}>9:00<span className='period'>AM</span></li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>9:30</li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>10:00<span className='period'>AM</span></li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>10:30</li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>11:00<span className='period'>AM</span></li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>11:30</li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>12:00<span className='period'>PM</span></li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>12:30</li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>1:00<span className='period'>PM</span></li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>1:30</li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>2:00<span className='period'>PM</span></li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>2:30</li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>3:00<span className='period'>PM</span></li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>3:30</li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>4:00<span className='period'>PM</span></li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>4:30</li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>5:00<span className='period'>PM</span></li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>5:30</li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>6:00<span className='period'>PM</span></li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>6:30</li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>7:00<span className='period'>PM</span></li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>7:30</li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>8:00<span className='period'>PM</span></li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>8:30</li>,
      <li key={Date.now() * 1000 * Math.random(1000)}>9:00<span className='period'>PM</span></li>,
    ]
    return(
      <div className='TimeIndex'>
        <ul>{hoursIndex}</ul>
      </div>
    )
  }
}

export default TimeIndex
