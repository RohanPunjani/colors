import React from 'react'
import EventDates from './EventDates'
import FeatherIcon from 'feather-icons-react';

function EventsContainer() {
    return (
        <div className="events-container">
            <h2>Event Dates</h2>
            <EventDates />
            <div className="card-container">
                <div className="event-card card-1">
                    <FeatherIcon icon="layers"></FeatherIcon>
                    <div className="">
                        <h3>Past Events</h3>
                        <p className="subtitle-text"><small>Check details of previous events payments Incoming and Outgoings</small></p>
                    </div>
                </div>
                <div className="event-card card-2">
                    <FeatherIcon icon="award"></FeatherIcon>
                    <div className="">
                        <h3>Awards & Bonus</h3>
                        <p className="subtitle-text"><small>Rewards and Bonus auto for current events and shows By our system</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsContainer
