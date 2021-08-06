import React from 'react';
import './Searchbox.css';

function Searchbox() {
    return (
        <div className="search-container">
            <input placeholder="enter your name" 
            className="search-input">

            </input>
        </div>
    );
};

export default Searchbox;