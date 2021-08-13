import React from 'react'
import './Namecard.css'

const Namecard =({suggestedName}) => {
    return (
        <div className="result-name-card">
            <p classname="result-name">{suggestedName}</p>
        </div>
    )
}

export default Namecard;