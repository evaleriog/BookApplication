import React, {Component} from 'react';
import './App.css';
import TopBooks from './components/TopBooks';
import HorrorBooks from "./components/HorrorBooks";

class App extends Component{
    render(){
        return(
            <div>
                <h1>Book Application</h1>
                <TopBooks />
                <HorrorBooks />
            </div>

        )
    }
}

export default App;
