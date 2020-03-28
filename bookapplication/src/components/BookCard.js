import React, {Component} from 'react';
import './BookCard.css';
import './BookList.css';

export class BookCard extends Component{
    render() {
        let title = this.props.title;
        let author = this.props.author;
        let source;
        if(this.props.id.toString().substring(0,2) === "OL"){
            source = `http://covers.openlibrary.org/b/olid/${this.props.id}-M.jpg`;
        }else{
            source = `http://covers.openlibrary.org/b/isbn/${this.props.id}-M.jpg`;
        }



        return(
            <div>
                <div className="bookCard">
                    <img src={source} alt={title} />
                    <div>
                        <h3>{title}</h3>
                        <p>by {author}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookCard;