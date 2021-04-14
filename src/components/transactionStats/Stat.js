import React from 'react'

function Stat(props) {
    return (
        <div className="stat">
            <h2>{props.heading}</h2>
            <p className="subtitle-text">{props.subtitle}</p>
        </div>
    )
}

export default Stat
