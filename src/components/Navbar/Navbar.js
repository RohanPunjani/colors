import React from 'react'
import FeatherIcons from 'feather-icons-react';
import '../main.css'
import Avatar from './Avatar';


function Navbar() {
    return (
        <div className="Navbar">
            <div className="inputBox">
                <FeatherIcons icon="search"></FeatherIcons>
                <input type="text" placeholder="Search for statics...."/>
            </div>
            <div className="userControls">
                <FeatherIcons icon="bell"></FeatherIcons>
                <Avatar></Avatar>
            </div>
        </div>
    )
}

export default Navbar
