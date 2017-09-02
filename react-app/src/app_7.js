import React from 'react'

//class component
/*class App extends React.Component{
 render(){
 return <h1>hello world componet</h1>
 }
 }*/

//stateless compnent
/*const App = () => <h1>hello stateless component</h1>*/

//
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            txt: 'this is the state text'
        }
    }

    update(e){
        this.setState({txt:e.target.value})
    }

    render() {
        let txt = this.props.txt;
        return (
            <div>
                <h1>{this.state.txt}</h1>
                <Widget update={this.update.bind(this)}></Widget>
            </div>
        )
    }
}

App.propTypes = {
    txt:React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt:"This is the default text",
    cat:456
}

const Widget = (props)=>
    <input type="text" onChange={props.update}/>
export default App