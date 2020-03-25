import React, {Component} from 'react';
import BookCard from './BookCard';

export class TopBooks extends Component{
    constructor(props){
        super(props);

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        let allBooks = [];
        fetch("https://openlibrary.org/api/books?bibkeys=ISBN:0590353403&jscmd=data&format=json")
            .then(data => data.json())
            .then(data => {
                let book1 = {
                    id: data.identifiers.isbn_10[0],
                    title: data.title,
                    author: data.authors[0].name
                };

                allBooks.push(book1);

                    this.setState({
                        books: allBooks,
                    });
            }
            );

    }

    render(){
        return(
                <div>
                    {
                        this.state.books.map((book) => (
                            <BookCard
                                book={book}
                            />
                        ))
                    }
                </div>
        )
    }

}

export default TopBooks;