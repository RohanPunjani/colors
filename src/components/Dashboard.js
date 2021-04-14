import React from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import './main.css'
import DynamicContent from './dynamicContent/DynamicContent'
import TransactionStats from './transactionStats/TransactionStats'

function Dashboard() {
    
    return (
        <div className="Dashboard">
            <Sidebar />
            <div>
                <Navbar />
                <div className="content-container">
                    <DynamicContent />
                    <TransactionStats />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
