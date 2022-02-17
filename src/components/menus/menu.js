import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import MenuIcons from './menu-icons';

function Menu() {

    return (
       <div id="home" className="menu-container">
             

             <div className="menu">
                <Link to="/" className="menu-item link clickable">Home</Link>
                <HashLink to="#portfolio" className="menu-item link clickable">Portfolio</HashLink>
                <HashLink to="#blogs" className="menu-item link clickable">Blogs</HashLink>
                <HashLink to="#footer" className="menu-item link clickable">Contact</HashLink>
                <Link to="/pricing" className="menu-item link clickable">Dev Pricing</Link>
                

             </div>
             <div className="menu">
                
                
             
             </div>

             <MenuIcons></MenuIcons>
       </div>
        
    )
}

export default Menu;