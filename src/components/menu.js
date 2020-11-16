import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Menu() {

    return (
       
        <div className="menu">
         
            <Link to="/" className="link clickable">Home</Link>
            <HashLink to="#blogs" className="link clickable">Blogs</HashLink>
            <HashLink to="#portfolio" className="link clickable">Portfolio</HashLink>
            <HashLink to="#footer" className="link clickable">Contact</HashLink>

        </div>
        
    )
}

export default Menu;