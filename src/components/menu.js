import React from 'react';

function Menu() {
    return (
        <div className="menu">
            <a href="http://localhost:3000/react-portfolio">
                
                <p className="link clickable">Home</p> 
            </a>
            
            <a href="http://localhost:3000/react-portfolio">
                <p className="link clickable">Portfolio</p> 
            </a>
            <p className="link clickable">Blog</p> 
            <p className="link clickable">Contact</p> 
        </div>
        
    )
}

export default Menu;