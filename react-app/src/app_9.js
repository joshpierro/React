import React from 'react'

class App extends React.Component {

    render() {
        return (
            <div>
                <Title txt="the text"></Title>
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

const Title = (props) => <h1>Title: {props.txt}</h1>


Title.propTypes = {
    text(props,propName,component){
        if(!(propName in props)){
            return new Error('Missing prop ${propName')
        }
    }
}
export default App