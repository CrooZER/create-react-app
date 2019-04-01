import React from "react";

class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {players: this.props.players};
    }

    componentDidMount() {}

    render() {
        return (
            <div className='row'>
                {
                    this.props.players && this.props.players.map(player =>
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

export default Player;