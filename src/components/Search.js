import React, {Component} from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {query: ''};
    }

    handleInputChange = (e) => {
        this.setState({
            query: e.target.value.toLowerCase()
        });
        this.props.onSearch(e.target.value);

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

export default Search;