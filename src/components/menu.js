import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Menu() {



    return (
        <div className="menu">
            <Link className="link clickable" to="/">Home</Link>
            <HashLink className="link clickable" to="#portfolio">Portfolio</HashLink>
            <HashLink className="link clickable" to="#blogs">Blog</HashLink>
            <HashLink className="link clickable" to="#footer">Contact</HashLink>
        </div>
        
    )
}

export default Menu;