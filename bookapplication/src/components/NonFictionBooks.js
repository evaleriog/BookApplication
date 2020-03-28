import React, { Component} from 'react';
import BookCard from "./BookCard";

class NonFictionBooks extends Component{
    constructor(props){
        super(props);

        this.state = {
            nonfictionBooks: []
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let that = this;
        let nonfictionBooks = Array.from(that.state.nonfictionBooks);

        fetch("http://openlibrary.org/subjects/nonfiction.json?limit=10")
            .then(data => data.json())
            .then(response => {
                response.works.forEach(function (book) {
                    let book1 = {
                        id: book.cover_edition_key,
                        title: book.title,
                        author: book.authors[0].name
                    };

                    nonfictionBooks.push(book1);

                    that.setState({
                        nonfictionBooks: [...that.state.nonfictionBooks, book1]
                    })

                });

            }).catch(error => console.log(error));
    }

    render() {
        let allNonFictionBooks = Array.from(this.state.nonfictionBooks);

        if(this.state.nonfictionBooks && this.state.nonfictionBooks.length > 0){
            return(
                <div className="bookList">
                    <h1>Non-Fiction Books</h1>
                    {
                        allNonFictionBooks.map((item, index) =>{
                            return(<BookCard id={item.id} title={item.title} author={item.author} key={index}/>)
                        })
                    }
                </div>
            )
        }else{
            return(
                <div>
                    <h1>Non-Fiction Books</h1>
                    <span>Loading</span>
                </div>

            )
        }

    }
}

export default NonFictionBooks;