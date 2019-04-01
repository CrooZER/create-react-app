import React from "react";

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

export default Clock;