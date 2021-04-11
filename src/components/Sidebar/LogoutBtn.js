import React from 'react'
import FeatherIcon from 'feather-icons-react';

function LogoutBtn() {
    return (
        <div className="logoutBtn">
            <FeatherIcon icon="log-out" style={{transform:' rotateY(180deg)'}}></FeatherIcon>
        </div>
    )
}

export default LogoutBtn
