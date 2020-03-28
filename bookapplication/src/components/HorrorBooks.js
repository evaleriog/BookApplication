import React, { Component} from 'react';
import BookCard from "./BookCard";

class HorrorBooks extends Component{
    constructor(props){
        super(props);

        this.state = {
            horrorBooks: []
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let that = this;
        let horrorBooks = Array.from(that.state.horrorBooks);

        fetch("http://openlibrary.org/subjects/horror.json?limit=10")
            .then(data => data.json())
            .then(response => {
                response.works.forEach(function (book) {
                    let book1 = {
                        id: book.cover_edition_key,
                        title: book.title,
                        author: book.authors[0].name
                    };

                    horrorBooks.push(book1);

                    that.setState({
                        horrorBooks: [...that.state.horrorBooks, book1]
                    })

                });

            }).catch(error => console.log(error));
    }

    render() {
        let allHorrorBooks = Array.from(this.state.horrorBooks);

        if(this.state.horrorBooks && this.state.horrorBooks.length > 0){
            return(
                <div className="bookList">
                    <h1>Horror Books</h1>
                    {
                        allHorrorBooks.map((item, index) =>{
                            return(<BookCard id={item.id} title={item.title} author={item.author} key={index}/>)
                        })
                    }
                </div>
            )
        }else{
            return(
                <div>
                    <h1>Horror Books</h1>
                    <span>Loading</span>
                </div>

            )
        }

    }
}

export default HorrorBooks;