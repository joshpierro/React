import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const Stars = (props)=>{
    return(
        <div>
            ...
        </div>
    )
}
const Button = (props)=>{
    return(
        <div >
           =
        </div>
    )
}

const Answer = (props)=>{
    return(
        <div>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
    )
}


class Game extends Component {
    render() {
        return (
            <div className="row">
                <h3>Play Nine</h3>
                <Stars></Stars>
                <Button></Button>
                <Answer></Answer>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Game></Game>
            </div>
        );
    }
}


export default App;
