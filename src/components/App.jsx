import React from 'react';
import Header from './Header';
import Searchbox from './Searchbox';
import './App.css';


class App extends React.Component {

    state = {
        headerText: "Name a Name!",
    };

    
    render()
    {
    return (
        <div>
            <Header headTitle={this.state.headerText}/>  
            <Searchbox/> 
        </div>
    );
    }
}

export default App;