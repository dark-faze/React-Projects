import React from 'react';
import Header from './Header';
import Searchbox from './Searchbox';
import './App.css';


class App extends React.Component {
    constructor(){
        super();
    this.state = {
        headerText: "Name a Name!",
        headerExpanded: true,
    };
}
    handleInputChange = (inputText) => {
        this.setState({headerExpanded: !(inputText.length > 0 )});
    };
    
    render() {
     return (
         <div>
            <Header 
            headerExpanded={this.state.headerExpanded}
            headTitle={this.state.headerText}/> 
            <Searchbox onInputChange ={this.handleInputChange}/> 
         </div>
     );
    }
}

export default App;