import React, {Component} from 'react';

export class BookCard extends Component{
    render() {
        // let title = this.props.title;
        // let author = this.props.author;
        // let source = `http://covers.openlibrary.org/b/isbn/${this.props.id}-M.jpg`;


        return(
            <div>{
                (this.props.books).map( (item, index) => {
                    let source = `http://covers.openlibrary.org/b/isbn/${item["id"]}-M.jpg`;
                    let title = item["item"];
                    let author = item["author"];

                    return(
                        <div key={index}>
                            <img src={source} alt={title} />
                            <div>
                                <h3>{title}</h3>
                                <p>by {author}</p>
                            </div>
                        </div>
                    )
                })
            }</div>
        )
    }
}

export default BookCard;