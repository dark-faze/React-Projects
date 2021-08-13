import React from 'react';
import Header from './Header';
import Searchbox from './Searchbox';
import Resultscontainer from './Resultscontainer';
import './App.css';


const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
    constructor(){
        super();
    this.state = {
        headerText: "Name a Name!",
        headerExpanded: true,
        suggestedNames: [],
    };
}
    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !(inputText.length > 0 ) , 
            suggestedNames: name(inputText),
        });
    };
    
    render() {
        console.log(name('mobile'));
     return (
         <div>
            <Header 
            headerExpanded={this.state.headerExpanded}
            headTitle={this.state.headerText}/> 
            <Searchbox onInputChange ={this.handleInputChange}/> 
            <Resultscontainer suggestedNames = {this.state.suggestedNames}/>
         </div>
     );
    }
}

export default App;