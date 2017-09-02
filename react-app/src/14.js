import React from 'react'
import * as ReactDom from "react-dom";

class App extends React.Component {

    constructor() {
        super();
        this.state = {items: []}
    }

    update() {

    }

    componentWillMount() {
        fetch('http://swapi.co/api/people/?format=json')
            .then(response => response.json())
            .then(({results:items}) => this.setState({items}))
    }

    render() {
        let items = this.state.items;
        return (
            <div>
                {items.map(item =>

                    <Person
                        person={item}
                        key = {item.name}

                    />
                )}
            </div>
        )
    }
}

const Person = (props) => <h3>{props.person.name}</h3>
App.defaultProps = {val: 0}
export default App