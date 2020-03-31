import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Header extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="top">
                <h1>Book Application</h1>
                <nav className="navigation-bar">
                    <Link to="/">Home</Link>
                    {/*<a href="#" onClick={this.props.onHome}>Home</a>*/}
                    <form className="searchBar">
                        <input type="text" name="query" placeholder="Search" onChange={this.props.onQuery}/>
                        <select name="search-type" onChange={this.props.onSelection}>
                            <option value="all" defaultChecked>All</option>
                            <option value="title">Title</option>
                            <option value="author">Author</option>
                        </select>
                        <input type="submit" value="Search" onClick={this.props.onSearch}/>
                    </form>
                </nav>
            </div>
        )
    }
}

export default Header;