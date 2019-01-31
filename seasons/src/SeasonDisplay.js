import './SeasonDisplay.css'
import React from 'react';

const configObject = {
    summer: {
        text: 'it\'s summer!!',
        iconName: 'sun'
    },
    winter: {
        text: 'it\'s winter :(',
        iconName: 'snowflake'
    }
}

const getSeason = (latitude) => {
    const month = new Date().getMonth();
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter';
    }
    else {
        return latitude > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = ({latitude}) => {
    const season = getSeason(latitude);
    const {text, iconName} = configObject[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive left`}></i>
            <h1>{text}</h1>
            <i className={`${iconName} icon massive right`}></i>
        </div>
    );
}

export default SeasonDisplay;