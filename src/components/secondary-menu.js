import React from 'react';
import { Link } from 'react-router-dom';

function SecondaryMenu() {

    return (
        <div className="menu-2 link clickable">
            <Link to="/">Home</Link>
        </div>
        
    )
}

export default SecondaryMenu;