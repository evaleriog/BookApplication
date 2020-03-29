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
                <h3>Title: {this.props.title}</h3>
                <div className="resultInfo">
                    <p><strong>Author:</strong> {this.props.author}</p>
                    <p><strong>Publish Year(s):</strong> {this.props.publishDate}</p>
                </div>

            </div>
        )
    }
}

export default SearchResults;