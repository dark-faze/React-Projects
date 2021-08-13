import React from 'react'
import Namecard from './Namecard.jsx'
import './Resultcontainer.css';
const Resultscontainer = ({suggestedNames}) => {

    const suggestedNameJsx = suggestedNames.map((suggestedName) => {
            return <Namecard key = {suggestedName} suggestedName = {suggestedName}/>;
    });
    return (
        <div className="results-container">
            {suggestedNameJsx}
        </div>
    );
};

export default Resultscontainer;