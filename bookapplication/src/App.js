import React, {Component} from 'react';
import './App.css';
import TopBooks from './components/TopBooks';
import HorrorBooks from "./components/HorrorBooks";
import FictionBooks from "./components/FictionBooks";
import NonFictionBooks from "./components/NonFictionBooks";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Loader from "./components/Loader";

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchQuery: "",
            searchType: "all",
            loading: true,
            search: false,
            searchResult: []
        };

        this.searchFunction = this.searchFunction.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.handleHome = this.handleHome.bind(this);
    }

    componentDidMount() {
        this.setState({loading: false})
    }

    searchFunction(e){
        e.preventDefault();
        let that = this;
        let query = that.state.searchQuery;

        if(query !== ""){
            that.setState({
                search: true,
                searchResults:[]
            });

            let query = that.state.searchQuery;
            query = query.trim();
            query = query.replace(" ", "+");

            let type = that.state.searchType;
            let url = "";

            console.log(query);
            console.log(type);

            if(type === "all"){
                url = `http://openlibrary.org/search.json?q=${query}`;
            }else if(type === "title"){
                url = `http://openlibrary.org/search.json?title=${query}`;
            }else if(type === "author"){
                url = `http://openlibrary.org/search.json?author=${query}`;
            }

            fetch(url).then(respond => respond.json())
                .then(data => {
                    that.setState({searchResult: [...that.state.searchResult, data]})
                }).catch(error => console.log(error));
        }
    }

    handleSelection(e){
        this.setState({searchType: e.target.value});
    }

    handleQuery(e){
        this.setState({searchQuery: e.target.value});
    }

    handleHome(e){
        e.preventDefault();

        this.setState({
            search:false,
            searchResult:[]
        });
    }

    render(){
        let content;

        if(this.state.loading){
            return(<Loader />)
        }else{
            if(this.state.search){

                let searchResults = Array.from(this.state.searchResult);

                if(searchResults && searchResults.length > 0){
                    let mySearchs = (<React.Fragment>{
                        searchResults[0].docs.map((item, index) => {
                            return(<SearchResults
                                key={index}
                                title={item.title_suggest}
                                author={item.author_name}
                                publishDate={item.publish_year}
                            />)
                        })
                    }</React.Fragment>);
                    content = <div>{mySearchs}</div>
                }else {
                    content = <Loader/>
                }

            }else{
                content = <div>
                    <TopBooks />
                    <HorrorBooks />
                    <FictionBooks />
                    <NonFictionBooks />
                </div>
            }
            return(
                <div>
                    <Header onSelection={this.handleSelection}
                            onQuery={this.handleQuery}
                            onSearch={this.searchFunction}
                            onHome={this.handleHome}
                    />
                    <div>{content}</div>
                </div>
            )
        }

    }
}

export default App;
