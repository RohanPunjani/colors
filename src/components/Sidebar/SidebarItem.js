import React from 'react'
import FeatherIcon from 'feather-icons-react';
import {Link} from 'react-router-dom';

function SidebarItem(props) {
    return (
        <Link className={props.isActive ? "sidebar-item active" : "sidebar-item"} >
            <div className="sidebar-item-icon-container">
                <FeatherIcon className="sidebar-item-icon" icon={props.icon}/>
            </div>
            <div className="sidebar-item-link" to={props.linkHref}>{props.linkText}</div>
        </Link>
    )
}

export default SidebarItem
