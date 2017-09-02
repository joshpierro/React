import React from 'react'
import * as ReactDom from "react-dom";

class App extends React.Component {

    constructor() {
        super();
        this.state = {increasing:false}
    }

    update(){
        ReactDom.render(
            <App val={this.props.val+1}/>,
            document.getElementById('root'))
    }

    componentWillReceiveProps(nextProps,nextState){
        this.setState({increasing:nextProps.val > this.props.val})
        console.log('component mounting')
    }

    render() {
        console.log('rendering',this.state.increasing)
        return (
            <div>
                <button
                    onClick={this.update.bind(this)}>
                    {this.props.val}
                </button>
            </div>
        )
    }
}

App.defaultProps = {val:0}
export default App