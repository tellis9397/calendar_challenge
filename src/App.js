import React, { Component } from 'react';
import Container from './components/Container';
import TimeIndex from './components/TimeIndex';
import './App.css';

const URL = 'https://appcues-interviews.firebaseio.com/calendar/events.json';

class App extends Component {
  state = {
    events: []
  }

  componentWillMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({ events: data }));
  }

  render() {
    return (
      <div className='Calendar'>
        <TimeIndex />
        <Container events={this.state.events}/>
      </div>
    )
  }
}

export default App;
