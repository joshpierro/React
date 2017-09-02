import React from 'react'

class App extends React.Component {

    render() {
        return (
            <div>
                <button> I <Heart/> React </button>
            </div>
        )
    }
}

const Button = (props)=>
    <button disabled>{props.children}</button>

class Heart extends React.Component{
    render(){
        return <span>&hearts;</span>
    }
}
export default App