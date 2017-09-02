import React from 'react'

class App extends React.Component {
    constructor(){
        super();
        this.state ={
            input: '/*add jsx here*/',
            output:'',
            err:''
        }
    }

    update(e){
        let code = e.target.value;
        try{
            this.setState(
                {
                    output:window.Babel.transform(code,{presets:['es2015','react']}).code,
                    err:''
                }
            )
        }
        catch(err){
            this.setState({err: err.message})
        }
    }
    render(){
        return (
            <div>
                <header>
                    {this.state.err}
                </header>
                <div className="conainer">
                    <textarea onChange={this.update.bind(this)}
                              cols="30"
                              rows="10"
                    defaultValue={this.state.input}
                    >
                    </textarea>
                    <pre>
                        {this.state.output}
                    </pre>
                </div>
            </div>
        )
    }
}

export default App