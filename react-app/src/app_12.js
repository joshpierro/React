import React from 'react'

class App extends React.Component {

    constructor() {
        super();
        this.state = {val:0}
        this.update = this.update.bind(this)
    }

    update() {
        this.setState({val:this.state.val + 1})
    }

    componentWillMount(){
        console.log('component mounting')
    }


    componentDidMount(){
        console.log('component mounted')
    }


    componentWillUnMount(){
        console.log('component unmounting')
    }

    render() {
        console.log('render')
        return (
            <div>
                <button
                    onClick={this.update}>
                    {this.state.val}
                </button>
            </div>
        )
    }
}

export default App