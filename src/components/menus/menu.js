import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import MenuIcons from './menu-icons';

function Menu() {

  const [ usingMenu, setUsingMenu ] = useState(false);


const toggleMenu = () => {
  if (usingMenu == false) {
    setUsingMenu(true)
  } else {
    setUsingMenu(false)
  }
  console.log(usingMenu)

}

if (usingMenu == false) {
  return (
    // Regular Menu
    <div id="home" className="menu-container">
      <div className="menu">
          <MenuIcons></MenuIcons>
          <div onClick={toggleMenu} className="menu-item link clickable">Menu</div>
      </div>
    </div>
     
 )
} else {
  return (
    // Overlay Menu
<div id="home" className="menu-container">
      <div className="menu">
          <MenuIcons></MenuIcons>
          
      </div>
      <div className="overlay-menu">
        <div className="flex-row">
          <div onClick={toggleMenu} className="menu-x clickable">X</div>
          <div onClick={toggleMenu} className="menu-item menu-header clickable">MENU</div>
        </div>
        
        <Link to="/" onClick={toggleMenu} className="menu-item link clickable">Home</Link>
        <HashLink onClick={toggleMenu} to="#portfolio" className="menu-item link clickable">Portfolio</HashLink>
        <HashLink onClick={toggleMenu} to="#blogs" className="menu-item link clickable">Blogs</HashLink>
        <HashLink onClick={toggleMenu} to="#footer" className="menu-item link clickable">Contact</HashLink>
        <Link onClick={toggleMenu} to="/pricing" className="menu-item link clickable">Dev Pricing</Link>
      </div>
    </div>


      

  )
 }    
}
    

export default Menu;