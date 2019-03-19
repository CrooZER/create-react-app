import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Welcome(data) {
  return <h2>Hi, {data.name}</h2>;
}

class Player extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      players : []
    }
  }



  componentDidMount() {
    fetch('https://api.opendota.com/api/proPlayers').then(
        results => {
          return results.json();
        }
    ).then(
        data => {
          let players = data.map((pic) => {
            return (
                <div key={pic.account_id} className='player col-md-4'>

                      <span>{pic.name}</span>
                  <br/>
                      <span>{pic.team_name}</span>

                </div>
            )
          });
          this.setState({pictures: players});console.log('state = ', this.state.players);
        }

    )


  }
  render() {
    return (
        <div className='col-md-12'>
          {this.state.pictures}
        </div>

    )
  }
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
        <Clock/>
        <div className="container">
          <div className="row">
            <Player/>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
