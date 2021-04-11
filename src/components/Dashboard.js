import React, {useState} from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import './main.css'
import Story from './dynamicContent/Story';
import { Line } from 'react-chartjs-2'

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
    
    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
        {
            data: [12, 19, 3, 5, 2, 3],
            fill: true,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
        ],
    }
    
    const options = {
        scales: {
        yAxes: [
            {
            ticks: {
                beginAtZero: true,
            },
            },
        ],
        },
    }
  
    return (
        <div className="Dashboard">
            <Sidebar />
            <div>
                <Navbar />
                <div className="content-container">
                    <div className="dynamic-content">
                        <h2>Stories</h2>
                        <div className="subtitle-links">
                            {linkData.map((data,index) => {
                                return <div key={index} className={subLink === data.text ? "active" : ""} onClick={()=>setSubLink(data.text)}>{data.text}</div>
                            })}
                        </div>
                        <div className="stories-container">
                            {storiesData.map((data,index)=>{
                                return <Story key={index} name={data.name} loc={data.location} img={data.image_url} />
                            })}
                        </div>
                    </div>
                    <div className="transaction-stats">
                    <h2>Transactions</h2>
                        <div className="transaction-subtitle">
                            Payment by Cards
                        </div>
                        <div className="payment-cards"/>
                        <br/><br/>
                        <h2>Audience Overview</h2>
                        <div className="transaction-subtitle">
                            Business Graph With Stats
                        </div>
                        <Line data={data} options={options} />
                        <br/><br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
