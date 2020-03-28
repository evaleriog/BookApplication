import React, { Component } from 'react';
import './Navigation.css';

class Header extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>Book Application</h1>
                <nav className="navigation-bar">
                    <a href="#">Home</a>
                    <form className="searchBar" onSubmit={this.props.onSearch}>
                        <input type="text" name="query" placeholder="Search" onChange={this.props.onQuery}/>
                        <select name="search-type" onChange={this.props.onSelection}>
                            <option value="all" defaultChecked>All</option>
                            <option value="title">Title</option>
                            <option value="author">Author</option>
                        </select>
                        <button>Search</button>
                    </form>
                </nav>
            </div>
        )
    }
}

export default Header;