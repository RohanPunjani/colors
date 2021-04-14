import React, { useState } from 'react'

function SubtitleLinks() {
    const [subLink, setSubLink] = useState('Recommended');
    const linkData = [{
            text: "Recommended",
        },{
            text: "New Trends",
        },{
            text: "Multi Color",
        }
    ]
    return (
        <div className="subtitle-links">
            {linkData.map((data,index) => {
                return <div key={index} className={subLink === data.text ? "active" : ""} onClick={()=>setSubLink(data.text)}>{data.text}</div>
            })}
        </div>
    )
}

export default SubtitleLinks
