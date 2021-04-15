import React from 'react'
import card from '../mastercard.png';

function Transaction() {
    return (
        <div className="transaction">
             <h2>Transactions</h2>
            <div className="subtitle-text">
                Payment by Cards
            </div>
            <img src={card} alt="" className="responsive-img" />
        </div>
    )
}

export default Transaction
