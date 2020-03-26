import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

export class Card extends Component{

    render() {
        return(
            <div>
                {/*<Link to={`/book/${props.book.id}`}>*/}
                {/*<img src={`http://covers.openlibrary.org/b/isbn/${this.props.book.id}-M.jpg`} alt={this.props.book.title}/>*/}
                <div>
                    <h3>{this.props.book.title}</h3>
                    <p>by {this.props.book.author}</p>
                </div>
                {/*</Link>*/}
            </div>
        )
    }
}

export default Card;