import React from 'react'
import EventsContainer from './Events/EventsContainer'
import StoriesContainer from './Stories/StoriesContainer'

function DynamicContent() {
    return (
        <div className="dynamic-content">
            <StoriesContainer />
            <EventsContainer />
        </div>
    )
}

export default DynamicContent
