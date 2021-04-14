import React from 'react'
import Stat from './Stat'

function StatsData() {
    const data = [
        {
            heading: "125",
            subtitle: "Rate"
        },
        {
            heading: "14k",
            subtitle: "Viewers"
        },
        {
            heading: "0/45 sec",
            subtitle: "Server Speed"
        },
    ]
    return (
        <div className="stats-data-container">
            {data.map((d,index)=>{
                return <Stat key={index} heading={d.heading} subtitle={d.subtitle} />
            })}
        </div>
    )
}

export default StatsData
