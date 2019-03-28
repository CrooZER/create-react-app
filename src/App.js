import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


function Welcome(data) {
    return <h2>Hi, {data.name}</h2>;
}

class Search extends React.Component {
    state = {
        query: '',
    }

    handleInputChange = (e) => {
        console.log(e.target.value.toLowerCase());
        this.setState({
            value: this.state.value
        })

    }

    render() {
        return (
            <form>
                <input type="text"
                value={this.value}
                       onChange={this.handleInputChange}
                />
            </form>
        )
    }
}

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            filtered: []
        }
    }


    componentDidMount() {

        const result = localStorage.getItem('players');
        if (result) {
            console.log('From Cache');
            this.setState({players: JSON.parse(result)});
            return ;
        }

        fetch('https://api.opendota.com/api/proPlayers').then(
            results => {
                return results.json();
            }
        ).then(
            data => {
                let players = data;
                console.log('players', players);
                this.setState({players: players});
                console.log('Save to Cache');

                localStorage.setItem('players', JSON.stringify(players));
            }
        )
    }

    render() {
        return (
            <div className='row'>
                {
                    this.state.players.map((player, i)=>
                        <div className='playerCard col-md-4'>
                                   <span>
                                       {player.team_name}
                                       <br/>
                                       {player.name}
                                   </span>
                        </div>
                    )}

            </div>
        )
    }
}

class Clock extends React.Component {
    constructor(props) {
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
            date: new Date()
        });
    }

    render() {
        return (<div> {this.title} - {this.state.date.toLocaleTimeString()}</div>);
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Search/>
                <Clock/>
                <div className="container">
                    <Player/>
                </div>
            </div>
        );
    }
}


export default App;
