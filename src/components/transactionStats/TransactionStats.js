import React from 'react'
import Stats from './Stats'
import Transaction from './Transaction'

function TransactionStats() {
    return (
        <div className="transaction-stats">
           <Transaction />
           <br/>
           <br/>
           <Stats />
        </div>
    )
}

export default TransactionStats
