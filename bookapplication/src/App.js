import React, {Component} from 'react';
import './App.css';
import TopBooks from './components/TopBooks';
import HorrorBooks from "./components/HorrorBooks";
import FictionBooks from "./components/FictionBooks";
import NonFictionBooks from "./components/NonFictionBooks";

class App extends Component{
    render(){
        return(
            <div>
                <h1>Book Application</h1>
                <TopBooks />
                <HorrorBooks />
                <FictionBooks />
                <NonFictionBooks />
            </div>

        )
    }
}

export default App;
