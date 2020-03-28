import React, { Component } from 'react';
import './Results.css';

class SearchResults extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return(
            <div className="resultCard">
                <h3>{this.props.title}</h3>
                <p>{this.props.author}</p>
            </div>
        )
    }
}

export default SearchResults;