import React, {Component} from 'react';

export class TopBooks extends Component{


    constructor(props){
        super(props);

        this.state = {
            books: []
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
                ).catch(error => console.log(error))
        });

    }
    //<BookCard books={this.state.books}/
    render(){
        let booksArray = Array.from(this.state.books);
        let allBooks = this.state.books && this.state.books.length > 0 ?
            booksArray.map((item, index)=>{
                let source = `http://covers.openlibrary.org/b/isbn/${item.id}-M.jpg`;
                let title = item.title;
                let author = item.author;
                return(
                    <div key={index}>
                        <img src={source} alt={title} />
                        <div>
                            <h3>{title}</h3>
                            <p>by {author}</p>
                        </div>
                    </div>)
            }):<span>Loading</span>;

        return(<div>{allBooks}</div>)

    }

}

export default TopBooks;