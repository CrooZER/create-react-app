import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Welcome(data) {
  return <h2>Hi, {data.name}</h2>;
}

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {date: new Date()};
    this.title = 'Time ';
    this.matches = [];
  }

  componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(), 1000
     )
  }

  tick() {
    this.setState({
      date : new Date()
    });
  }

  render() {
    return ( <div> {this.title} - {this.state.date.toLocaleTimeString()}</div>);
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Welcome name="willcomen"/>
          <Welcome name="willcos"/>
        <Clock/>
        </header>
      </div>
    );
  }
}



export default App;
