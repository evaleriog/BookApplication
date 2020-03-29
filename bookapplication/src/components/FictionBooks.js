import React, { Component} from 'react';
import BookCard from "./BookCard";
import Loader from "./Loader";

class FictionBooks extends Component{
    constructor(props){
        super(props);

        this.state = {
            fictionBooks: []
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let that = this;
        let fictionBooks = Array.from(that.state.fictionBooks);

        fetch("http://openlibrary.org/subjects/fiction.json?limit=10")
            .then(data => data.json())
            .then(response => {
                response.works.forEach(function (book) {
                    let book1 = {
                        id: book.cover_edition_key,
                        title: book.title,
                        author: book.authors[0].name
                    };

                    fictionBooks.push(book1);

                    that.setState({
                        fictionBooks: [...that.state.fictionBooks, book1]
                    })

                });

            }).catch(error => console.log(error));
    }

    render() {
        let allFictionBooks = Array.from(this.state.fictionBooks);

        if(this.state.fictionBooks && this.state.fictionBooks.length > 0){
            return(
                <div className="bookList">
                    <h1>Fiction Books</h1>
                    {
                        allFictionBooks.map((item, index) =>{
                            return(<BookCard id={item.id} title={item.title} author={item.author} key={index}/>)
                        })
                    }
                </div>
            )
        }else{
            return(
                <div>
                    <h1>Fiction Books</h1>
                    <Loader />
                </div>

            )
        }

    }
}

export default FictionBooks;