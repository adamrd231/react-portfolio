import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Menu() {

    return (
       
        <div className="menu">
         
            <Link to="/" className="menu-item link clickable">Home</Link>
            <HashLink to="#blogs" className="menu-item link clickable">Blogs</HashLink>
            <HashLink to="#portfolio" className="menu-item link clickable">Portfolio</HashLink>
            <HashLink to="#footer" className="menu-item link clickable">Contact</HashLink>

        </div>
        
    )
}

export default Menu;