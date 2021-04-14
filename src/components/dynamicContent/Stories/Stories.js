import React from 'react'
import Story from './Story'

function Stories() {
    
    const storiesData = [
        {
            name: 'Niketa William',
            location: 'Paris',
            image_url: 's1.png'
        },
        {
            name: 'Trisha Louis',
            location: 'London',
            image_url: 's2.png'
        },
        {
            name: 'Ana Tomas',
            location: 'USA',
            image_url: 's3.png'
        },
    ]
    return (
            <div className="stories-container">
                {storiesData.map((data,index)=>{
                    return <Story key={index} name={data.name} loc={data.location} img={data.image_url} />
                })}
            </div>
    )
}

export default Stories
