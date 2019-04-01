import React, {Component} from 'react';
import Search from './components/Search'
import Player from './components/Player'
import Clock from './components/Clock'
import './App.css';

function filterPlayers(players, query) {
    return players.filter((player)  => {
        if (query.length === 0) {
            return true;
        }

        return player.name.toLowerCase().includes(query);
    })
}

class App extends Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
        this.state = {
            query : 'u',
            players : []
        }
    }

    onPlayersChange(players) {
        this.setState({players: players});
    }

    onFilteredChange(players, query) {
        console.log(query);
        this.setState({filtered: filterPlayers(players, query)});
    }

    onSearch(query) {
        this.setState({
            query: query
        });
    }
    componentDidMount() {
        const result = localStorage.getItem('players');
        if (result) {
            this.onPlayersChange(JSON.parse(result));
            console.log(this.state.query);
             this.onFilteredChange(JSON.parse(result), this.state.query);

            return;
        }

        fetch('https://api.opendota.com/api/proPlayers').then(
            results => {
                // this.props.onPlayersChange(results.json());
            }
        ).then(
            data => {
                let players = data;
                this.setState({players: players});
                localStorage.setItem('players', JSON.stringify(players));
            }
        )
    }

    render() {
        return (
            <div className="App" >
                <Search onSearch={this.onSearch}/>
                <Clock/>
                <div className="container">
                    <Player players={this.state.filtered}/>
                </div>
            </div>
        );
    }
}


export default App;
