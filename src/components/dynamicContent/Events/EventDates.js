import React, { useState } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';

function EventDates() {
    const [activeDate, setActiveDate] = useState(1);
    const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    let j = 3;
    let data = [];
    for(let i=1; i<31; i++)
    {
        let tempObj = {
            date: i,
            day: days[(j++)%7],
            hasEvent: i%7===0 || (i%4===0 && i%8!==0) || i%12===0 ? true : false
        }
        data.push(tempObj);
    }
    return (
        <div className="event-dates">
            <ScrollMenu
                alignCenter="true"
                data={data.map((d, index) => (
                    <div className={d.date===activeDate ? "date-card active" : "date-card"} key={index} onClick={()=>setActiveDate(d.date)}>
                        <p className="subtitle-text">{d.day}</p>
                        {d.hasEvent ? <div className="badge" /> : null}
                        <h3>{d.date}</h3>
                    </div>
                ))}
                />
        </div>
    )
}

export default EventDates
