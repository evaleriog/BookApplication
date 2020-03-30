import React, {Component} from 'react';
import BookCard from "./BookCard";
import Loader from "./Loader";

export class TopBooks extends Component{


    constructor(props){
        super(props);

        this.state = {
            books: [],
            error: false
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        /*
        * "0590353403", Harry Potter and the Sorcerer's Stone
        * "9781101217238", The Kite Runner
        * "9780062491831", Commonwealth
        * "9780062060624", the song of achilles
        * "9780143110439", A gentleman in Moscow: a novel
        * "9781250080400", A Nightingale: A novel
        * "9780735224315" Little fires everywhere: a novel
        * */
        let that = this;
        let isbns = ["0590353403","9781101217238","9780062491831","9780062060624","9780143110439","9781250080400","9780735224315"];

        isbns.forEach(function (isbn) {
            let url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`;
            let books = Array.from(that.state.books);

            fetch(url)
                .then(data => data.json())
                .then(data => {
                        for(let book in data){
                            let book1 = {
                                id: data[book].identifiers.isbn_10[0],
                                title: data[book].title,
                                author: data[book].authors[0].name
                            };

                            books.push(book1);

                            that.setState({
                                books:[...that.state.books, book1],
                            })
                        }
                    }
                ).catch(error => {
                    console.log(error)
                    that.setState({error: true});
                })
        });

    }

    render(){
        let booksArray = Array.from(this.state.books);

        if(this.state.books && this.state.books.length > 0 && !this.state.error){
            return(
                <div className="bookList">
                    <h1>Top Books</h1>
                    {
                    booksArray.map((item, index)=>{
                        return(<BookCard id={item.id} title={item.title} author={item.author} key={index}/>)
                    })
                    }
                </div>
            )
        }else if(this.state.error){
            return(
                <div>
                    <h1>Top Books</h1>
                    <p>There was an error loading...Try again...</p>
                </div>
            )
        }else{
            return(
                <div>
                    <h1>Top Books</h1>
                    <Loader />
                </div>

            )
        }

    }

}

export default TopBooks;