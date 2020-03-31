import React, { Component } from 'react';
import './Results.css';
import Loader from "./Loader";
import { withRouter} from 'react-router-dom';

class SearchResults extends Component{
    constructor(props) {
        super(props);

        this.state = {
            searchResult: []
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let that = this;
        let query = that.props.query;
        let type = that.props.type;

        if(query !== ""){
            query = query.trim();
            query = query.replace(" ", "+");

            let url = "";
            let results = [];

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

                    for(let x = 0; x< data.docs.length; x++){

                        if(data.docs[x].title === null || data.docs[x].title === undefined ||
                            data.docs[x].author_name === null || data.docs[x].author_name === undefined ||
                            data.docs[x].publish_year === null || data.docs[x].publish_year === undefined ||
                            data.docs[x].isbn === null || data.docs[x].isbn === undefined){
                                continue;
                        }

                        let res = {
                            id:data.docs[x].isbn[0],
                            title: data.docs[x].title,
                            author: data.docs[x].author_name[0],
                            publish: data.docs[x].publish_year[0]
                        };

                        results.push(res);
                        that.setState({searchResult: results})
                    }

                }).catch(error => console.log(error));

        }
    }

    render() {
        let allRes = Array.from(this.state.searchResult);
        if(this.state.searchResult && this.state.searchResult.length > 0){
            return(
                <div>{
                    allRes.map((item) =>{
                        return(
                                <div className="resultCard" key={item.id}>
                                    <h3>Title: {item.title}</h3>
                                    <div className="resultInfo">
                                        <p><strong>Author:</strong> {item.author}</p>
                                        <p><strong>Publish Year(s):</strong> {item.publish}</p>
                                    </div>
                                </div>
                            )
                    })
                }</div>

            )
        }else{
            return(<Loader/>)
        }

    }
}

export default withRouter(SearchResults);