import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Menu() {

    return (
       <div className="menu-container">
             <div className="logo">
                <img 
                    src={`https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/photos/rd-logo-750.png`} 
                    alt="Logo"  >
                </img>
             </div>

             <div className="menu">
                <Link to="/" className="menu-item link clickable">Home</Link>
                <HashLink to="#portfolio" className="menu-item link clickable">Portfolio</HashLink>
                <HashLink to="#blogs" className="menu-item link clickable">Blogs</HashLink>
                <HashLink to="#footer" className="menu-item link clickable">Contact</HashLink>
             </div>

             <div className="icons">
                 <a href="https://www.instagram.com/adamrd231/">
                        <img src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/insta-clean.png" alt="Instagram"/>    
                    </a>
                    <a href="https://www.linkedin.com/in/rdconcepts/">
                        <img src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/linkedin-clean.png" alt="Instagram"/>
                    </a>
                    <a href="https://github.com/adamrd231">
                        <img src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/github-clean.png" alt="Instagram"/>
                    </a>
             </div>
       </div>
        
    )
}

export default Menu;