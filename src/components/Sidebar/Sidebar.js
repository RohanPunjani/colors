import React from 'react'
import Logo from './Logo';
import LogoutBtn from './LogoutBtn';
import '../main.css';
import SidebarItem from './SidebarItem';

function Sidebar() {
    const items = [
        {
            icon: "home",
            link:{
                href: "/",
                text: "Dashboard",
            },
            isActive: true
        },
        {
            icon: "mail",
            link:{
                href: "/",
                text: "Messages",
            }
        },
        {
            icon: "message-circle",
            link:{
                href: "/",
                text: "Chat",
            }
        },
        {
            icon: "user",
            link:{
                href: "/",
                text: "Profile",
            }
        },
        {
            icon: "upload-cloud",
            link:{
                href: "/",
                text: "Upload",
            }
        },
        {
            icon: "settings",
            link:{
                href: "/",
                text: "Settings",
            }
        },
    ]
    return (
        <div className="Sidebar">
            <Logo />
            <div className="sidebar-item-container">
                {items.map((i,index)=>{
                    return <SidebarItem key={index} icon={i.icon} linkHref={i.link.href} linkText={i.link.text} isActive={i.isActive}/>
                })}
            </div>
            <LogoutBtn />
        </div>
    )
}

export default Sidebar
