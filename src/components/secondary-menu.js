import React from 'react';
import { Link } from 'react-router-dom';

function SecondaryMenu() {

    return (
        <div className="menu">
            <Link to="/" className="link clickable">Home</Link>
        </div>
        
    )
}

export default SecondaryMenu;