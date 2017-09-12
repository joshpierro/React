import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



class TOC extends Component{
    update(page){
   this.props.setSelectedPage(page)
   }

    constructor(props) {
        super(props);
       this.pages = props.pages;
       this.listItems = this.pages.map((page) =>
           <div key={page.pageNumber}
                className="mdl-list__item"
                onClick={this.update.bind(this,page)}>
               {page.pageTitle}
           </div>
       );
    }

 render(){
     return (
         <ul className="demo-list-item mdl-list">
             {this.listItems}
         </ul>
     );
 }

}

const Page = (props)=>{
    console.log(props)
return (<div>
    {props.selectedPage.pageTitle}
        </div>)
}

class Book extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedPage:{pageTitle:'',PageNumber:0}};
        this.setSelectedPage = this.setSelectedPage.bind(this);
    }

    setSelectedPage(page){
        this.setState({
            selectedPage: page
        })
    }

    render() {

        const pages = [{pageNumber:1,pageTitle:'Page 1'},{pageNumber:2,pageTitle:'Page 2'}];
        //const pages = [1, 2, 3, 4, 5];

        return (
            <div className="mdl-grid book-container">

                <div className="mdl-cell mdl-cell--9-col">
                    <div className="mdl-card mdl-shadow--4dp book-page-container">
                     pages
                        <Page selectedPage={this.state.selectedPage}>

                        </Page>

                    </div>
                </div>

                <div className="mdl-cell mdl-cell--2-col">
                    <div className="mdl-card mdl-shadow--4dp book-toc-container">
                        <TOC pages={pages}
                             setSelectedPage = {this.setSelectedPage}>
                        </TOC>
                    </div>
                </div>

            </div>
        )
    }
}


class App extends Component {
    render() {
        return (
            <div className="App">
                <Book>
                </Book>
            </div>

        );
    }
}

export default App;
