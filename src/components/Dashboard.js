import React, {useState} from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import './main.css'

function Dashboard() {
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
        <div className="Dashboard">
            <Sidebar />
            <div>
                <Navbar />
                <div className="content-container">
                    <div className="dynamic-content">
                        <h1>Stories</h1>
                        <div className="subtitle-links">
                            {linkData.map(data => {
                                return <div className={subLink === data.text ? "active" : ""} onClick={()=>setSubLink(data.text)}>{data.text}</div>
                            })}
                        </div>
                    </div>
                    <div className="transaction-stats">
                        <h1>Transactions</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
