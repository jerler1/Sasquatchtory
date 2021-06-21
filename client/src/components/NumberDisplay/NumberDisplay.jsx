import React from 'react';
import "./NumberDisplay.scss";

const NumberDisplay = ({value}) => {
    return (
        <div className="numberContainer">
            <h3>{value}</h3>
        </div>
    );
};

export default NumberDisplay;