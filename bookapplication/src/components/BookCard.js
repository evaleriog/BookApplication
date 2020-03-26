import React, {Component} from 'react';

export class Card extends Component{
    render() {
        let title = this.props.book.title;
        let author = this.props.book.author;
        let source = `http://covers.openlibrary.org/b/isbn/${this.props.book.id}-M.jpg`;

        console.log(source);

        return(
            <div>

                <div>
                    <h3>{title}</h3>
                    <p>by {author}</p>
                </div>
            </div>
        )
    }
}

export default Card;