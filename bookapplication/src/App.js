import React, {Component} from 'react';
import './App.css';
import TopBooks from './components/TopBooks';
import HorrorBooks from "./components/HorrorBooks";
import FictionBooks from "./components/FictionBooks";
import NonFictionBooks from "./components/NonFictionBooks";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            searchQuery: "",
            searchType: "all",
            loading: true,
            search: false
        };

        this.searchFunction = this.searchFunction.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.handleHome = this.handleHome.bind(this);
    }

    componentDidMount() {
        this.setState({
            loading: false,
        })
    }


    searchFunction(e){

        let that = this;
        let query = that.state.searchQuery;

        if(query !== ""){
            that.setState({
                search: true,
            });
        }
        that.context.history.push("/search");
        e.preventDefault();


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
        });
    }

    render(){
        let content;

        if(this.state.loading){
            return(<Loader />)
        }else{

            // if(this.state.search){
            //     content = <SearchResults query={this.state.searchQuery} type={this.state.searchType}/>
            //
            // }
            // else{
            //     content = <div><TopBooks /><HorrorBooks /><FictionBooks /><NonFictionBooks /></div>
            // }

            return(
                <Router>
                    <Header onSelection={this.handleSelection}
                            onQuery={this.handleQuery}
                            onSearch={this.searchFunction}
                            onHome={this.handleHome}
                    />

                    <Switch>
                        <Route exact path="/" render={() =>{
                            return(
                                <div><TopBooks /><HorrorBooks /><FictionBooks /><NonFictionBooks /></div>
                            )
                        }}
                        />
                        <Route exact path="/search" render={() =>{
                            return(
                                    <SearchResults query={this.state.searchQuery} type={this.state.searchType}/>
                                )
                        }}
                        />
                        <Route exact path="/book/:id" render={() =>{
                            return(
                                <div></div>
                            )
                        }}
                        />
                    </Switch>
                    <div>{content}</div>
                </Router>
            )
        }

    }
}

export default App;
