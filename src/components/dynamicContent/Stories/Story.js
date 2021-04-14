import React from 'react'

function Story(props) {
    // src\stories\s1.png
    // const imgsrc = imagesFolder(props.img);
    // const imgStyle = {
    //     backgroundImage: `url(${imgsrc})`
    // }
    return (
        <div className="story">
            <img src={"stories/"+props.img} alt=""/>
            <h3>{props.name}</h3>
            <p>{props.loc}</p>
        </div>
    )
}

export default Story
