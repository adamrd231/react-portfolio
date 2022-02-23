import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcons from './menu-icons';

function SecondaryMenu() {

    return (
        <div id="home" className="menu-container">
            <div className="secondary-menu">
                <div className="link clickable">
                    <Link className="menu-item" to="/">Home</Link>
                </div>
                <MenuIcons></MenuIcons>
            </div>
        </div>
        
        
    )
}

export default SecondaryMenu;